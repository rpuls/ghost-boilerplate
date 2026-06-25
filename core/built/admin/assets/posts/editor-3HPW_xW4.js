import { a9 as fe, am as pe, a6 as ge, ak as oe, af as Ce, x as we, R as p, i as xe, n as Ha, S as Qu, _ as uh, z as ec, a1 as Ne, T as Me, m as ch, a7 as xn, k as as, ad as dh, aa as fh, c as hh, u as Aa, ae as ph, ag as gh, al as mh, L as vh, ah as xh, a5 as yh, a3 as Di } from "./index-Dqn5WIFh.js";
import { M as is } from "./mail-CtH0gTpq.js";
import { C as ss, S as _h, a as tc, M as wh, T as nc, b as Sh, P as bh } from "./trash-2-NCYWjRlg.js";
import { a as ut, c as Ls, b as Os, d as Ah, i as Pi, A as Eh } from "./value-CcwzOh2_.js";
import { f as os, a as Bs, g as ls, d as rc, r as Mh, u as Ih, J as ac, c as Ch, h as Nh } from "./hooks-5YpJYWOw.js";
import { P as ic, b as sc, a as oc } from "./popover-DdbdKflP.js";
import { b as Rh, T as $h, c as Dh, a as Ph, C as kh, E as Th } from "./tooltip-Ci7pesWi.js";
import { P as Za } from "./plus-D2ekwsq0.js";
import { L as dt } from "./loading-indicator-DAOD6O2b.js";
import { u as us, a as qa, g as za, i as cs, h as lc, s as Lh } from "./settings-DEXxDYc2.js";
import { u as Oh } from "./site-C6DajagV.js";
import { u as Bh } from "./posts-CdWV_nlm.js";
import { e as Fh, L as Hh } from "./label-CmJzmJY7.js";
import { B as Ee } from "./button-CG2Dpjqy.js";
import { I as Ua } from "./input-C1qcZBGw.js";
import { g as Zh, e as qh, M as Fs, r as zh, b as Uh, u as Hs, i as jh, a as Vh, A as Wh, f as Gh, d as Kh } from "./automations-BqkU9-zY.js";
import { A as Pt, c as kt, f as Tt, g as Lt, d as Ot, e as Bt, b as Ft } from "./alert-dialog-cQK32v9G.js";
import { X as Yh, b as Xh, c as Jh, g as Qh } from "./dialog-3KY3A8t5.js";
import { T as ep, b as tp, c as Zs } from "./tabs-oRdVpN8P.js";
import { t as np, a as rp, z as uc, P as ap, g as ip, S as sp, o as op, G as lp, L as up, C as cp, R as dp, q as fp, p as hp, c as pp, x as gp, w as mp, d as vp, e as xp, D as yp, n as _p, i as wp, k as qs, m as Sp, l as bp, u as Ap } from "./skeleton-Bihnkn8q.js";
import { n as Ep, b as Mp, d as Qt, g as Ip, C as cc } from "./check-fsC5BvGC.js";
import { a as zs } from "./input-surface-C4vUAdbV.js";
import { Z as dc } from "./zap-k30mZEuO.js";
import { P as fc } from "./pencil-Cffx-vm3.js";
function Cp(e) {
  fe(() => {
    if (!e)
      return;
    const t = (n) => {
      n.preventDefault(), n.returnValue = "";
    };
    return window.addEventListener("beforeunload", t), () => {
      window.removeEventListener("beforeunload", t);
    };
  }, [e]);
}
const Np = ({ initialState: e, savingDelay: t, savedDelay: n = 2e3, onSave: a, onSaveError: r, onSavedStateReset: i, onValidate: s }) => {
  const [o, l] = pe(e), [u, f] = pe(""), [d, c] = pe({});
  fe(() => {
    u === "saved" && setTimeout(() => {
      i?.(), f((_) => _ === "saved" ? "" : _);
    }, n);
  }, [u, n]);
  const m = (_) => Object.values(_).filter(Boolean).length === 0, v = ge(
    () => {
      if (!s)
        return !0;
      const _ = s(o);
      return c(_), m(_);
    },
    [o, s]
  ), g = ge(async (_ = {}) => {
    if (!v())
      return f("error"), !1;
    if (u !== "unsaved" && !_.force && !_.fakeWhenUnchanged)
      return !0;
    const b = Date.now();
    f("saving");
    try {
      (u === "unsaved" || _.force) && await a(o);
      const S = Date.now() - b;
      return t && S < t && await new Promise((I) => {
        setTimeout(I, t - S);
      }), f("saved"), !0;
    } catch (S) {
      throw await r?.(S), f("unsaved"), S;
    }
  }, [o, u, t, a, r, v]), h = ge((_) => {
    l(_), f("unsaved");
  }, []);
  let y = "black";
  u === "saved" ? y = "green" : u === "error" && (y = "red");
  let w = "";
  u === "saved" ? w = "Saved" : u === "saving" ? w = "Saving..." : u === "error" && (w = "Retry");
  const x = {
    disabled: u === "saving",
    color: y,
    label: w || void 0
  };
  return {
    formState: o,
    saveState: u,
    handleSave: g,
    updateForm: h,
    setFormState: l,
    reset() {
      l(e), f("");
    },
    validate: v,
    isValid: m(d),
    clearError: (_) => {
      c((b) => ({ ...b, [_]: "" }));
    },
    errors: d,
    setErrors: c,
    okProps: x
  };
}, Us = (e = [], t, n) => !e || !n ? e : e.filter((a) => a[t]?.toLowerCase().includes(n.toLowerCase())), js = ({ path: e, filterKey: t, responseKey: n, limit: a = 20 }) => {
  const r = os(), i = oe({}), s = async (l) => {
    if ((i.current.allLoaded || i.current.lastInput === l) && i.current.data)
      return Us(i.current.data, t, l);
    const u = await r(Bs(e, {
      filter: l ? `${t}:~${Fh(l)}` : "",
      limit: a.toString()
    }));
    return i.current.data = u[n], i.current.allLoaded = !l && !u.meta?.pagination.next, i.current.lastInput = l, Us(u[n], t, l);
  };
  return {
    loadData: s,
    loadInitialValues: async (l, u) => {
      await s("");
      const f = [...i.current.data || []], d = l.filter((c) => !i.current.data?.find((m) => m[u] === c));
      if (d.length) {
        const c = await r(Bs(e, {
          filter: `${u}:[${d.join(",")}]`,
          limit: "100"
        }));
        f.push(...c[n]);
      }
      return l.map((c) => f.find((m) => m[u] === c));
    }
  };
}, nn = {
  image: {
    mimeTypes: ["image/gif", "image/jpg", "image/jpeg", "image/png", "image/svg+xml", "image/webp"],
    extensions: ["gif", "jpg", "jpeg", "png", "svg", "svgz", "webp"],
    endpoint: "/images/upload/",
    requestMethod: "post",
    resourceName: "images"
  },
  video: {
    mimeTypes: ["video/mp4", "video/webm", "video/ogg"],
    extensions: ["mp4", "webm", "ogv"],
    endpoint: "/media/upload/",
    requestMethod: "post",
    resourceName: "media"
  },
  audio: {
    mimeTypes: ["audio/mp3", "audio/mpeg", "audio/ogg", "audio/wav", "audio/vnd.wav", "audio/wave", "audio/x-wav", "audio/mp4", "audio/x-m4a"],
    extensions: ["mp3", "wav", "ogg", "m4a"],
    endpoint: "/media/upload/",
    requestMethod: "post",
    resourceName: "media"
  },
  mediaThumbnail: {
    mimeTypes: ["image/gif", "image/jpg", "image/jpeg", "image/png", "image/webp"],
    extensions: ["gif", "jpg", "jpeg", "png", "webp"],
    endpoint: "/media/thumbnail/upload/",
    requestMethod: "put",
    resourceName: "media"
  },
  file: {
    extensions: [],
    endpoint: "/files/upload/",
    requestMethod: "post",
    resourceName: "files"
  }
}, ki = (e, t) => {
  let n = e;
  for (const a of t)
    if (n && typeof n == "object" && a in n)
      n = n[a];
    else
      return null;
  return typeof n == "string" ? n : null;
}, Rp = (e = "image") => {
  const [t, n] = pe(0), [a, r] = pe(!1), [i, s] = pe([]), [o, l] = pe(0), u = oe(/* @__PURE__ */ new Map()), f = os();
  function d() {
    if (u.current.size === 0) {
      n(0);
      return;
    }
    let h = 0;
    u.current.forEach((y) => {
      h += y;
    }), n(Math.round(h / u.current.size));
  }
  const c = (h) => {
    if (e === "file")
      return !0;
    const y = nn[e].extensions, [, w] = /(?:\.([^.]+))?$/.exec(h.name) ?? [];
    return y && (!w || y.indexOf(w.toLowerCase()) === -1) ? `The file type you uploaded is not supported. Please use ${`.${y.join(", .").toUpperCase()}`}` : !0;
  }, m = (h = []) => {
    const y = [];
    for (let w = 0; w < h.length; w += 1) {
      const x = h[w], _ = c(x);
      _ !== !0 && y.push({ fileName: x.name, message: _ });
    }
    return y;
  }, v = async (h, { formData: y = {} } = {}) => {
    u.current.set(h, 0);
    const w = new FormData();
    w.append("file", h, h.name), Object.keys(y).forEach((_) => {
      w.append(_, y[_]);
    });
    const x = `${ls().apiRoot}${nn[e].endpoint}`;
    try {
      const _ = await f(x, {
        method: nn[e].requestMethod,
        body: w,
        onUploadProgress(S) {
          u.current.set(h, S), d();
        }
      });
      u.current.set(h, 100), d();
      let b;
      if (_) {
        const S = _[nn[e].resourceName];
        S && Array.isArray(S) && S[0] && (b = S[0].url);
      }
      return {
        url: b,
        fileName: h.name
      };
    } catch (_) {
      console.error(_);
      const b = ki(_, ["data", "errors", 0, "context"]) || "", S = ki(_, ["data", "errors", 0, "message"]) || ki(_, ["message"]) || "";
      throw {
        message: b || S,
        context: b,
        fileName: h.name
      };
    }
  };
  return { progress: t, isLoading: a, upload: async (h = [], y = {}) => {
    l(h.length), r(!0), s([]);
    const w = m(h);
    if (w.length)
      return s(w), r(!1), n(100), null;
    const x = [];
    for (let _ = 0; _ < h.length; _ += 1) {
      const b = h[_];
      x.push(v(b, y));
    }
    try {
      const _ = await Promise.all(x);
      return n(100), u.current.clear(), r(!1), s([]), _;
    } catch (_) {
      return console.error(_), s([_]), r(!1), n(100), u.current.clear(), null;
    }
  }, errors: i, filesNumber: o };
}, $p = () => {
  const e = os();
  return ge(async (t, { type: n } = {}) => {
    const a = new URL(`${ls().apiRoot}/oembed/`, window.location.origin);
    return a.searchParams.set("url", t), n && a.searchParams.set("type", n), await e(a);
  }, [e]);
}, Dp = "OffersResponseType", Pp = rc({
  dataType: Dp,
  path: "/offers/",
  // offers endpoint doesn't support limit or pagination so we exclude the default ?limit=20
  defaultSearchParams: {}
}), kp = ({
  siteUrl: e,
  membersSignupAccess: t,
  donationsEnabled: n,
  recommendationsEnabled: a
}) => {
  const { data: r } = Pp(), { data: i } = Bh({
    searchParams: {
      filter: "status:published",
      fields: "id,url,title,visibility,published_at",
      order: "published_at desc",
      limit: "5"
    }
  }), s = js({
    path: "/search-index/posts/",
    filterKey: "title",
    responseKey: "posts"
  }), o = js({
    path: "/search-index/pages/",
    filterKey: "title",
    responseKey: "pages"
  }), l = Ce(() => [{
    label: "Latest posts",
    items: (i?.posts || []).map((m) => ({
      id: m.id,
      title: m.title,
      url: m.url,
      visibility: m.visibility,
      publishedAt: m.published_at
    }))
  }], [i?.posts]), u = ge(async () => {
    const d = [
      { label: "Homepage", value: e },
      { label: "Free signup", value: "#/portal/signup/free" }
    ], c = t === "all" ? [
      { label: "Paid signup", value: "#/portal/signup" },
      { label: "Upgrade or change plan", value: "#/portal/account/plans" }
    ] : [], m = n ? [{ label: "Tips and donations", value: "#/portal/support" }] : [], v = a ? [{ label: "Recommendations", value: "#/portal/recommendations" }] : [], g = (r?.offers || []).filter((h) => h.status === "active" && h.redemption_type === "signup").map((h) => ({
      label: `Offer - ${h.name}`,
      value: new URL(h.code, e).toString()
    }));
    return [...d, ...c, ...m, ...v, ...g];
  }, [n, t, r?.offers, a, e]), f = ge(async (d) => {
    if (!d)
      return l;
    const [c, m] = await Promise.all([
      s.loadData(d),
      o.loadData(d)
    ]);
    return [
      {
        label: "Posts",
        items: c.filter((v) => v.status === "published").map((v) => ({
          id: v.id,
          title: v.title,
          url: v.url,
          visibility: v.visibility,
          publishedAt: v.published_at
        }))
      },
      {
        label: "Pages",
        items: m.filter((v) => v.status === "published").map((v) => ({
          id: v.id,
          title: v.title,
          url: v.url,
          visibility: v.visibility,
          publishedAt: v.published_at
        }))
      }
    ].filter((v) => v.items.length > 0);
  }, [l, o, s]);
  return {
    fetchAutocompleteLinks: u,
    searchLinks: f
  };
};
function Tp(e, t) {
  const n = e.editorInstance.getRootElement();
  if (!n)
    return;
  const { bottom: a } = n.getBoundingClientRect();
  t.pageY > a && t.clientY > a && (t.preventDefault(), e.lastNodeIsDecorator() && e.insertParagraphAtBottom(), e.focusEditor({ position: "bottom" }));
}
const Lp = Ha(
  "relative block rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-border-default bg-surface-panel shadow-sm hover:shadow-md",
        gradient: [
          "cursor-pointer bg-surface-elevated",
          "shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_28%),7px_6px_42px_8px_rgb(202_103_255_/_32%)]",
          "dark:shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_36%),7px_6px_42px_8px_rgb(202_103_255_/_38%)]",
          "hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_38%),7px_8px_42px_10px_rgb(202_103_255_/_42%)]",
          "dark:hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_50%),7px_8px_42px_10px_rgb(202_103_255_/_52%)]",
          "hover:translate-y-[-2px] hover:scale-[1.01]"
        ],
        info: "border border-state-info/40 bg-state-info/10",
        success: "border border-state-success/40 bg-state-success/10",
        warning: "border border-state-warning/40 bg-state-warning/10",
        destructive: "bg-surface-panel shadow-sm"
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-3",
        lg: "p-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), hc = we(
  (e, t) => {
    const {
      variant: n,
      size: a,
      dismissible: r = !1,
      onDismiss: i,
      role: s = "status",
      className: o,
      children: l,
      ...u
    } = e, f = (d) => {
      d.preventDefault(), d.stopPropagation(), r && i && i();
    };
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: t,
        className: xe(Lp({ variant: n, size: a }), o),
        role: s,
        ...u,
        children: [
          r && /* @__PURE__ */ p.jsx(
            Ee,
            {
              "aria-label": "Dismiss notification",
              className: "absolute top-1 right-1 size-8 text-text-secondary hover:bg-transparent hover:text-text-primary",
              size: "icon",
              variant: "ghost",
              onClick: f,
              children: /* @__PURE__ */ p.jsx(Yh, { className: "size-5" })
            }
          ),
          l
        ]
      }
    );
  }
);
hc.displayName = "Banner";
var Vs = 180 / Math.PI, Wi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pc(e, t, n, a, r, i) {
  var s, o, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * a) && (n -= e * l, a -= t * l), (o = Math.sqrt(n * n + a * a)) && (n /= o, a /= o, l /= o), e * a < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: r,
    translateY: i,
    rotate: Math.atan2(t, e) * Vs,
    skewX: Math.atan(l) * Vs,
    scaleX: s,
    scaleY: o
  };
}
var $n;
function Op(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Wi : pc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Bp(e) {
  return e == null || ($n || ($n = document.createElementNS("http://www.w3.org/2000/svg", "g")), $n.setAttribute("transform", e), !(e = $n.transform.baseVal.consolidate())) ? Wi : (e = e.matrix, pc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function gc(e, t, n, a) {
  function r(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, f, d, c, m, v) {
    if (u !== d || f !== c) {
      var g = m.push("translate(", null, t, null, n);
      v.push({ i: g - 4, x: ut(u, d) }, { i: g - 2, x: ut(f, c) });
    } else (d || c) && m.push("translate(" + d + t + c + n);
  }
  function s(u, f, d, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: d.push(r(d) + "rotate(", null, a) - 2, x: ut(u, f) })) : f && d.push(r(d) + "rotate(" + f + a);
  }
  function o(u, f, d, c) {
    u !== f ? c.push({ i: d.push(r(d) + "skewX(", null, a) - 2, x: ut(u, f) }) : f && d.push(r(d) + "skewX(" + f + a);
  }
  function l(u, f, d, c, m, v) {
    if (u !== d || f !== c) {
      var g = m.push(r(m) + "scale(", null, ",", null, ")");
      v.push({ i: g - 4, x: ut(u, d) }, { i: g - 2, x: ut(f, c) });
    } else (d !== 1 || c !== 1) && m.push(r(m) + "scale(" + d + "," + c + ")");
  }
  return function(u, f) {
    var d = [], c = [];
    return u = e(u), f = e(f), i(u.translateX, u.translateY, f.translateX, f.translateY, d, c), s(u.rotate, f.rotate, d, c), o(u.skewX, f.skewX, d, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, c), u = f = null, function(m) {
      for (var v = -1, g = c.length, h; ++v < g; ) d[(h = c[v]).i] = h.x(m);
      return d.join("");
    };
  };
}
var Fp = gc(Op, "px, ", "px)", "deg)"), Hp = gc(Bp, ", ", ")", ")"), Zp = 1e-12;
function Ws(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function qp(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function zp(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ea = (function e(t, n, a) {
  function r(i, s) {
    var o = i[0], l = i[1], u = i[2], f = s[0], d = s[1], c = s[2], m = f - o, v = d - l, g = m * m + v * v, h, y;
    if (g < Zp)
      y = Math.log(c / u) / t, h = function(I) {
        return [
          o + I * m,
          l + I * v,
          u * Math.exp(t * I * y)
        ];
      };
    else {
      var w = Math.sqrt(g), x = (c * c - u * u + a * g) / (2 * u * n * w), _ = (c * c - u * u - a * g) / (2 * c * n * w), b = Math.log(Math.sqrt(x * x + 1) - x), S = Math.log(Math.sqrt(_ * _ + 1) - _);
      y = (S - b) / t, h = function(I) {
        var C = I * y, R = Ws(b), O = u / (n * w) * (R * zp(t * C + b) - qp(b));
        return [
          o + O * m,
          l + O * v,
          u * R / Ws(t * C + b)
        ];
      };
    }
    return h.duration = y * 1e3 * t / Math.SQRT2, h;
  }
  return r.rho = function(i) {
    var s = Math.max(1e-3, +i), o = s * s, l = o * o;
    return e(s, o, l);
  }, r;
})(Math.SQRT2, 2, 4);
var ja = "ContextMenu", [Up] = Ip(ja, [
  uc
]), $e = uc(), [jp, mc] = Up(ja), vc = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: a, open: r, dir: i, modal: s = !0 } = e, o = oe(!1);
  {
    const d = oe(!1);
    fe(() => {
      r === !0 && !o.current && !d.current && (d.current = !0, console.warn(
        "ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."
      ));
    }, [r]);
  }
  const [l, u] = Ep({
    prop: r,
    defaultProp: !1,
    onChange: a,
    caller: ja
  }), f = $e(t);
  return /* @__PURE__ */ p.jsx(
    jp,
    {
      scope: t,
      open: l,
      onOpenChange: u,
      modal: s,
      hasInteractedRef: o,
      children: /* @__PURE__ */ p.jsx(np, { ...f, dir: i, open: l, onOpenChange: u, modal: s, children: n })
    }
  );
};
vc.displayName = ja;
var xc = "ContextMenuTrigger", yc = we(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: a = !1, ...r } = e, i = mc(xc, n), s = $e(n), o = oe({ x: 0, y: 0 }), l = oe({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...o.current })
    }), u = oe(0), f = ge(
      () => window.clearTimeout(u.current),
      []
    ), d = (c) => {
      i.hasInteractedRef.current = !0, o.current = { x: c.clientX, y: c.clientY }, i.onOpenChange(!0);
    };
    return fe(() => f, [f]), fe(() => {
      a && f();
    }, [a, f]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(rp, { ...s, virtualRef: l }),
      /* @__PURE__ */ p.jsx(
        Mp.span,
        {
          "data-state": i.open ? "open" : "closed",
          "data-disabled": a ? "" : void 0,
          ...r,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: a ? e.onContextMenu : Qt(e.onContextMenu, (c) => {
            f(), d(c), c.preventDefault();
          }),
          onPointerDown: a ? e.onPointerDown : Qt(
            e.onPointerDown,
            Dn((c) => {
              f(), i.open && i.onOpenChange(!1), u.current = window.setTimeout(() => d(c), 700);
            })
          ),
          onPointerMove: a ? e.onPointerMove : Qt(e.onPointerMove, Dn(f)),
          onPointerCancel: a ? e.onPointerCancel : Qt(e.onPointerCancel, Dn(f)),
          onPointerUp: a ? e.onPointerUp : Qt(e.onPointerUp, Dn(f))
        }
      )
    ] });
  }
);
yc.displayName = xc;
var Vp = "ContextMenuPortal", _c = (e) => {
  const { __scopeContextMenu: t, ...n } = e, a = $e(t);
  return /* @__PURE__ */ p.jsx(ap, { ...a, ...n });
};
_c.displayName = Vp;
var wc = "ContextMenuContent", Sc = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = mc(wc, n), i = $e(n), s = oe(!1);
    return /* @__PURE__ */ p.jsx(
      ip,
      {
        ...i,
        ...a,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (o) => {
          e.onCloseAutoFocus?.(o), !o.defaultPrevented && s.current && o.preventDefault(), s.current = !1;
        },
        onInteractOutside: (o) => {
          e.onInteractOutside?.(o), !o.defaultPrevented && !r.modal && (s.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Sc.displayName = wc;
var Wp = "ContextMenuGroup", Gp = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(lp, { ...r, ...a, ref: t });
  }
);
Gp.displayName = Wp;
var Kp = "ContextMenuLabel", bc = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(up, { ...r, ...a, ref: t });
  }
);
bc.displayName = Kp;
var Yp = "ContextMenuItem", Ac = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(op, { ...r, ...a, ref: t });
  }
);
Ac.displayName = Yp;
var Xp = "ContextMenuCheckboxItem", Ec = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(cp, { ...r, ...a, ref: t });
});
Ec.displayName = Xp;
var Jp = "ContextMenuRadioGroup", Qp = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(dp, { ...r, ...a, ref: t });
});
Qp.displayName = Jp;
var e0 = "ContextMenuRadioItem", Mc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(fp, { ...r, ...a, ref: t });
});
Mc.displayName = e0;
var t0 = "ContextMenuItemIndicator", Ic = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(hp, { ...r, ...a, ref: t });
});
Ic.displayName = t0;
var n0 = "ContextMenuSeparator", Cc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(sp, { ...r, ...a, ref: t });
});
Cc.displayName = n0;
var r0 = "ContextMenuArrow", a0 = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(pp, { ...r, ...a, ref: t });
  }
);
a0.displayName = r0;
var i0 = "ContextMenuSubTrigger", Nc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(gp, { ...r, ...a, ref: t });
});
Nc.displayName = i0;
var s0 = "ContextMenuSubContent", Rc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(
    mp,
    {
      ...r,
      ...a,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Rc.displayName = s0;
function Dn(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var o0 = vc, l0 = yc, u0 = _c, $c = Sc, Dc = bc, Pc = Ac, kc = Ec, Tc = Mc, Lc = Ic, Oc = Cc, Bc = Nc, Fc = Rc;
const c0 = o0, d0 = l0, f0 = we(({ className: e, inset: t, children: n, ...a }, r) => /* @__PURE__ */ p.jsxs(
  Bc,
  {
    ref: r,
    className: xe(
      "flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden hover:bg-accent focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...a,
    children: [
      n,
      /* @__PURE__ */ p.jsx(vp, { className: "ml-auto" })
    ]
  }
));
f0.displayName = Bc.displayName;
const h0 = we(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx("div", { className: Qu, children: /* @__PURE__ */ p.jsx(
  Fc,
  {
    ref: n,
    className: xe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
h0.displayName = Fc.displayName;
const Hc = we(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(u0, { children: /* @__PURE__ */ p.jsx("div", { className: Qu, children: /* @__PURE__ */ p.jsx(
  $c,
  {
    ref: n,
    className: xe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }) }));
Hc.displayName = $c.displayName;
const Zc = we(({ className: e, inset: t, variant: n = "default", ...a }, r) => /* @__PURE__ */ p.jsx(
  Pc,
  {
    ref: r,
    className: xe(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      n === "destructive" && "text-destructive focus:bg-destructive/10 focus:text-destructive",
      t && "pl-8",
      e
    ),
    ...a
  }
));
Zc.displayName = Pc.displayName;
const p0 = we(({ className: e, children: t, checked: n, ...a }, r) => /* @__PURE__ */ p.jsxs(
  kc,
  {
    ref: r,
    checked: n,
    className: xe(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(Lc, { children: /* @__PURE__ */ p.jsx(cc, { className: "size-4" }) }) }),
      t
    ]
  }
));
p0.displayName = kc.displayName;
const g0 = we(({ className: e, children: t, ...n }, a) => /* @__PURE__ */ p.jsxs(
  Tc,
  {
    ref: a,
    className: xe(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(Lc, { children: /* @__PURE__ */ p.jsx(xp, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
g0.displayName = Tc.displayName;
const m0 = we(({ className: e, inset: t, ...n }, a) => /* @__PURE__ */ p.jsx(
  Dc,
  {
    ref: a,
    className: xe(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
m0.displayName = Dc.displayName;
const qc = we(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Oc,
  {
    ref: n,
    className: xe("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qc.displayName = Oc.displayName;
const v0 = Ha(
  "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function x0({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: xe(v0({ orientation: t }), e),
      "data-orientation": t,
      "data-slot": "field",
      role: "group",
      ...n
    }
  );
}
function y0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    Hh,
    {
      className: xe(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      "data-slot": "field-label",
      ...t
    }
  );
}
function _0({
  className: e,
  children: t,
  errors: n,
  ...a
}) {
  const r = Ce(() => t || (n ? n?.length === 1 && n[0]?.message ? n[0].message : /* @__PURE__ */ p.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: n.map(
    (i) => i?.message && /* @__PURE__ */ p.jsx("li", { children: i.message }, i.message)
  ) }) : null), [t, n]);
  return r ? /* @__PURE__ */ p.jsx(
    "div",
    {
      className: xe("text-destructive text-control font-normal", e),
      "data-slot": "field-error",
      role: "alert",
      ...a,
      children: r
    }
  ) : null;
}
function w0({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: xe(
        // Shared surface chrome (border, bg, radius, transition, invalid state).
        zs.base,
        zs.invalidWithin,
        // Wrapper layout + group context (input-group specific).
        "group/input-group relative flex w-full items-center outline-hidden",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state — scoped to the input-group control specifically so that
        // focusing an InputGroupButton inside the group does NOT trigger the surface
        // focus ring. This is why we don't use inputSurface('within') here.
        "has-[[data-slot=input-group-control]:focus-visible]:outline-hidden has-[[data-slot=input-group-control]:focus-visible]:bg-transparent has-[[data-slot=input-group-control]:focus-visible]:border-focus-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-focus-ring/25",
        e
      ),
      "data-slot": "input-group",
      role: "group",
      ...t
    }
  );
}
const S0 = Ha(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-control font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--input-group-radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function b0({
  className: e,
  align: t = "inline-start",
  ...n
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: xe(S0({ align: t }), e),
      "data-align": t,
      "data-slot": "input-group-addon",
      role: "group",
      onClick: (a) => {
        if (a.target.closest("button"))
          return;
        a.currentTarget.closest('[data-slot="input-group"]')?.querySelector('[data-slot="input-group-control"]')?.focus();
      },
      ...n
    }
  );
}
const A0 = Ha(
  "flex items-center gap-2 text-control shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--input-group-radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--input-group-radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function Gs({
  className: e,
  type: t = "button",
  variant: n = "ghost",
  size: a = "xs",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    Ee,
    {
      className: xe(A0({ size: a }), e),
      "data-size": a,
      type: t,
      variant: n,
      ...r
    }
  );
}
function E0({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "span",
    {
      className: xe(
        "text-muted-foreground flex items-center gap-2 text-control [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        e
      ),
      ...t
    }
  );
}
function M0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    Ua,
    {
      className: xe(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-hidden focus-visible:shadow-none dark:bg-transparent",
        e
      ),
      "data-slot": "input-group-control",
      ...t
    }
  );
}
const Ks = (e) => {
  if (!(e === null || typeof e > "u")) {
    if (typeof e == "string")
      return e;
    throw new TypeError("Expected value to be null, undefined, or a string");
  }
}, Ys = (e) => {
  if (e.startsWith("/")) {
    const { adminRoot: t } = ls();
    return window.location.origin + t.replace(/\/$/, "") + e;
  }
  return e;
};
function I0() {
  const { data: e } = us(), { data: t } = qa(), a = e?.config?.hostSettings?.pintura, r = t?.settings ?? null, [i, s, o] = za(r, [
    "pintura",
    "pintura_js_url",
    "pintura_css_url"
  ]);
  let l, u;
  return i && (l = a?.js || Ks(s), u = a?.css || Ks(o)), Ce(() => !l || !u ? null : {
    jsUrl: Ys(l),
    cssUrl: Ys(u)
  }, [l, u]);
}
const Xs = ({ icon: e, label: t, description: n, onClick: a }) => /* @__PURE__ */ p.jsxs(
  "button",
  {
    className: "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-grey-50 focus-visible:bg-grey-50 focus-visible:outline-none dark:hover:bg-grey-900 dark:focus-visible:bg-grey-900",
    type: "button",
    onClick: a,
    children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(e, { className: "size-4" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 flex-col", children: [
        /* @__PURE__ */ p.jsx("span", { className: "font-medium", children: t }),
        /* @__PURE__ */ p.jsx("span", { className: "text-xs text-text-secondary", children: n })
      ] })
    ]
  }
), zc = ({ onPick: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex w-72 flex-col gap-1 p-1", "data-testid": "step-picker", children: [
  /* @__PURE__ */ p.jsx(
    Xs,
    {
      description: "Send an email",
      icon: is,
      label: "Email",
      onClick: () => e("send_email")
    }
  ),
  /* @__PURE__ */ p.jsx(
    Xs,
    {
      description: "Add a delay before the next step",
      icon: ss,
      label: "Wait",
      onClick: () => e("wait")
    }
  )
] });
function Ie(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, a; n < e.length; n++)
      (a = Ie(e[n])) !== "" && (t += (t && " ") + a);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var C0 = { value: () => {
} };
function Va() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new Ma(n);
}
function Ma(e) {
  this._ = e;
}
function N0(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", r = n.indexOf(".");
    if (r >= 0 && (a = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
Ma.prototype = Va.prototype = {
  constructor: Ma,
  on: function(e, t) {
    var n = this._, a = N0(e + "", n), r, i = -1, s = a.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((r = (e = a[i]).type) && (r = R0(n[r], e.name))) return r;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (r = (e = a[i]).type) n[r] = Js(n[r], e.name, t);
      else if (t == null) for (r in n) n[r] = Js(n[r], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ma(e);
  },
  call: function(e, t) {
    if ((r = arguments.length - 2) > 0) for (var n = new Array(r), a = 0, r, i; a < r; ++a) n[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], a = 0, r = i.length; a < r; ++a) i[a].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
  }
};
function R0(e, t) {
  for (var n = 0, a = e.length, r; n < a; ++n)
    if ((r = e[n]).name === t)
      return r.value;
}
function Js(e, t, n) {
  for (var a = 0, r = e.length; a < r; ++a)
    if (e[a].name === t) {
      e[a] = C0, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Gi = "http://www.w3.org/1999/xhtml";
const Qs = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Gi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wa(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Qs.hasOwnProperty(t) ? { space: Qs[t], local: e } : e;
}
function $0(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Gi && t.documentElement.namespaceURI === Gi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function D0(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Uc(e) {
  var t = Wa(e);
  return (t.local ? D0 : $0)(t);
}
function P0() {
}
function ds(e) {
  return e == null ? P0 : function() {
    return this.querySelector(e);
  };
}
function k0(e) {
  typeof e != "function" && (e = ds(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, o = a[r] = new Array(s), l, u, f = 0; f < s; ++f)
      (l = i[f]) && (u = e.call(l, l.__data__, f, i)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new Te(a, this._parents);
}
function T0(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function L0() {
  return [];
}
function jc(e) {
  return e == null ? L0 : function() {
    return this.querySelectorAll(e);
  };
}
function O0(e) {
  return function() {
    return T0(e.apply(this, arguments));
  };
}
function B0(e) {
  typeof e == "function" ? e = O0(e) : e = jc(e);
  for (var t = this._groups, n = t.length, a = [], r = [], i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, l, u = 0; u < o; ++u)
      (l = s[u]) && (a.push(e.call(l, l.__data__, u, s)), r.push(l));
  return new Te(a, r);
}
function Vc(e) {
  return function() {
    return this.matches(e);
  };
}
function Wc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var F0 = Array.prototype.find;
function H0(e) {
  return function() {
    return F0.call(this.children, e);
  };
}
function Z0() {
  return this.firstElementChild;
}
function q0(e) {
  return this.select(e == null ? Z0 : H0(typeof e == "function" ? e : Wc(e)));
}
var z0 = Array.prototype.filter;
function U0() {
  return Array.from(this.children);
}
function j0(e) {
  return function() {
    return z0.call(this.children, e);
  };
}
function V0(e) {
  return this.selectAll(e == null ? U0 : j0(typeof e == "function" ? e : Wc(e)));
}
function W0(e) {
  typeof e != "function" && (e = Vc(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, o = a[r] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && o.push(l);
  return new Te(a, this._parents);
}
function Gc(e) {
  return new Array(e.length);
}
function G0() {
  return new Te(this._enter || this._groups.map(Gc), this._parents);
}
function Da(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Da.prototype = {
  constructor: Da,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function K0(e) {
  return function() {
    return e;
  };
}
function Y0(e, t, n, a, r, i) {
  for (var s = 0, o, l = t.length, u = i.length; s < u; ++s)
    (o = t[s]) ? (o.__data__ = i[s], a[s] = o) : n[s] = new Da(e, i[s]);
  for (; s < l; ++s)
    (o = t[s]) && (r[s] = o);
}
function X0(e, t, n, a, r, i, s) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, d = i.length, c = new Array(f), m;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (c[o] = m = s.call(l, l.__data__, o, t) + "", u.has(m) ? r[o] = l : u.set(m, l));
  for (o = 0; o < d; ++o)
    m = s.call(e, i[o], o, i) + "", (l = u.get(m)) ? (a[o] = l, l.__data__ = i[o], u.delete(m)) : n[o] = new Da(e, i[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(c[o]) === l && (r[o] = l);
}
function J0(e) {
  return e.__data__;
}
function Q0(e, t) {
  if (!arguments.length) return Array.from(this, J0);
  var n = t ? X0 : Y0, a = this._parents, r = this._groups;
  typeof e != "function" && (e = K0(e));
  for (var i = r.length, s = new Array(i), o = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var f = a[u], d = r[u], c = d.length, m = eg(e.call(f, f && f.__data__, u, a)), v = m.length, g = o[u] = new Array(v), h = s[u] = new Array(v), y = l[u] = new Array(c);
    n(f, d, g, h, y, m, t);
    for (var w = 0, x = 0, _, b; w < v; ++w)
      if (_ = g[w]) {
        for (w >= x && (x = w + 1); !(b = h[x]) && ++x < v; ) ;
        _._next = b || null;
      }
  }
  return s = new Te(s, a), s._enter = o, s._exit = l, s;
}
function eg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function tg() {
  return new Te(this._exit || this._groups.map(Gc), this._parents);
}
function ng(e, t, n) {
  var a = this.enter(), r = this, i = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (r = t(r), r && (r = r.selection())), n == null ? i.remove() : n(i), a && r ? a.merge(r).order() : r;
}
function rg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, r = n.length, i = a.length, s = Math.min(r, i), o = new Array(r), l = 0; l < s; ++l)
    for (var u = n[l], f = a[l], d = u.length, c = o[l] = new Array(d), m, v = 0; v < d; ++v)
      (m = u[v] || f[v]) && (c[v] = m);
  for (; l < r; ++l)
    o[l] = n[l];
  return new Te(o, this._parents);
}
function ag() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], r = a.length - 1, i = a[r], s; --r >= 0; )
      (s = a[r]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function ig(e) {
  e || (e = sg);
  function t(d, c) {
    return d && c ? e(d.__data__, c.__data__) : !d - !c;
  }
  for (var n = this._groups, a = n.length, r = new Array(a), i = 0; i < a; ++i) {
    for (var s = n[i], o = s.length, l = r[i] = new Array(o), u, f = 0; f < o; ++f)
      (u = s[f]) && (l[f] = u);
    l.sort(t);
  }
  return new Te(r, this._parents).order();
}
function sg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function og() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function lg() {
  return Array.from(this);
}
function ug() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], r = 0, i = a.length; r < i; ++r) {
      var s = a[r];
      if (s) return s;
    }
  return null;
}
function cg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function dg() {
  return !this.node();
}
function fg(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var r = t[n], i = 0, s = r.length, o; i < s; ++i)
      (o = r[i]) && e.call(o, o.__data__, i, r);
  return this;
}
function hg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function pg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function gg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function mg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function vg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function xg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function yg(e, t) {
  var n = Wa(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? pg : hg : typeof t == "function" ? n.local ? xg : vg : n.local ? mg : gg)(n, t));
}
function Kc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function _g(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function wg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Sg(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function bg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? _g : typeof t == "function" ? Sg : wg)(e, t, n ?? "")) : zt(this.node(), e);
}
function zt(e, t) {
  return e.style.getPropertyValue(t) || Kc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Ag(e) {
  return function() {
    delete this[e];
  };
}
function Eg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Mg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ig(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Ag : typeof t == "function" ? Mg : Eg)(e, t)) : this.node()[e];
}
function Yc(e) {
  return e.trim().split(/^|\s+/);
}
function fs(e) {
  return e.classList || new Xc(e);
}
function Xc(e) {
  this._node = e, this._names = Yc(e.getAttribute("class") || "");
}
Xc.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Jc(e, t) {
  for (var n = fs(e), a = -1, r = t.length; ++a < r; ) n.add(t[a]);
}
function Qc(e, t) {
  for (var n = fs(e), a = -1, r = t.length; ++a < r; ) n.remove(t[a]);
}
function Cg(e) {
  return function() {
    Jc(this, e);
  };
}
function Ng(e) {
  return function() {
    Qc(this, e);
  };
}
function Rg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Jc : Qc)(this, e);
  };
}
function $g(e, t) {
  var n = Yc(e + "");
  if (arguments.length < 2) {
    for (var a = fs(this.node()), r = -1, i = n.length; ++r < i; ) if (!a.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Rg : t ? Cg : Ng)(n, t));
}
function Dg() {
  this.textContent = "";
}
function Pg(e) {
  return function() {
    this.textContent = e;
  };
}
function kg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Tg(e) {
  return arguments.length ? this.each(e == null ? Dg : (typeof e == "function" ? kg : Pg)(e)) : this.node().textContent;
}
function Lg() {
  this.innerHTML = "";
}
function Og(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Bg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Fg(e) {
  return arguments.length ? this.each(e == null ? Lg : (typeof e == "function" ? Bg : Og)(e)) : this.node().innerHTML;
}
function Hg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Zg() {
  return this.each(Hg);
}
function qg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function zg() {
  return this.each(qg);
}
function Ug(e) {
  var t = typeof e == "function" ? e : Uc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function jg() {
  return null;
}
function Vg(e, t) {
  var n = typeof e == "function" ? e : Uc(e), a = t == null ? jg : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function Wg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Gg() {
  return this.each(Wg);
}
function Kg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Xg(e) {
  return this.select(e ? Yg : Kg);
}
function Jg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Qg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function em(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function tm(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, r = t.length, i; n < r; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++a] = i;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function nm(e, t, n) {
  return function() {
    var a = this.__on, r, i = Qg(t);
    if (a) {
      for (var s = 0, o = a.length; s < o; ++s)
        if ((r = a[s]).type === e.type && r.name === e.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = n), r.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), r = { type: e.type, name: e.name, value: t, listener: i, options: n }, a ? a.push(r) : this.__on = [r];
  };
}
function rm(e, t, n) {
  var a = em(e + ""), r, i = a.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, u = o.length, f; l < u; ++l)
        for (r = 0, f = o[l]; r < i; ++r)
          if ((s = a[r]).type === f.type && s.name === f.name)
            return f.value;
    }
    return;
  }
  for (o = t ? nm : tm, r = 0; r < i; ++r) this.each(o(a[r], t, n));
  return this;
}
function ed(e, t, n) {
  var a = Kc(e), r = a.CustomEvent;
  typeof r == "function" ? r = new r(t, n) : (r = a.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r);
}
function am(e, t) {
  return function() {
    return ed(this, e, t);
  };
}
function im(e, t) {
  return function() {
    return ed(this, e, t.apply(this, arguments));
  };
}
function sm(e, t) {
  return this.each((typeof t == "function" ? im : am)(e, t));
}
function* om() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], r = 0, i = a.length, s; r < i; ++r)
      (s = a[r]) && (yield s);
}
var td = [null];
function Te(e, t) {
  this._groups = e, this._parents = t;
}
function yn() {
  return new Te([[document.documentElement]], td);
}
function lm() {
  return this;
}
Te.prototype = yn.prototype = {
  constructor: Te,
  select: k0,
  selectAll: B0,
  selectChild: q0,
  selectChildren: V0,
  filter: W0,
  data: Q0,
  enter: G0,
  exit: tg,
  join: ng,
  merge: rg,
  selection: lm,
  order: ag,
  sort: ig,
  call: og,
  nodes: lg,
  node: ug,
  size: cg,
  empty: dg,
  each: fg,
  attr: yg,
  style: bg,
  property: Ig,
  classed: $g,
  text: Tg,
  html: Fg,
  raise: Zg,
  lower: zg,
  append: Ug,
  insert: Vg,
  remove: Gg,
  clone: Xg,
  datum: Jg,
  on: rm,
  dispatch: sm,
  [Symbol.iterator]: om
};
function ke(e) {
  return typeof e == "string" ? new Te([[document.querySelector(e)]], [document.documentElement]) : new Te([[e]], td);
}
function um(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Be(e, t) {
  if (e = um(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var a = n.createSVGPoint();
      return a.x = e.clientX, a.y = e.clientY, a = a.matrixTransform(t.getScreenCTM().inverse()), [a.x, a.y];
    }
    if (t.getBoundingClientRect) {
      var r = t.getBoundingClientRect();
      return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const cm = { passive: !1 }, un = { capture: !0, passive: !1 };
function Ti(e) {
  e.stopImmediatePropagation();
}
function qt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nd(e) {
  var t = e.document.documentElement, n = ke(e).on("dragstart.drag", qt, un);
  "onselectstart" in t ? n.on("selectstart.drag", qt, un) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rd(e, t) {
  var n = e.document.documentElement, a = ke(e).on("dragstart.drag", null);
  t && (a.on("click.drag", qt, un), setTimeout(function() {
    a.on("click.drag", null);
  }, 0)), "onselectstart" in n ? a.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Pn = (e) => () => e;
function Ki(e, {
  sourceEvent: t,
  subject: n,
  target: a,
  identifier: r,
  active: i,
  x: s,
  y: o,
  dx: l,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: a, enumerable: !0, configurable: !0 },
    identifier: { value: r, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: o, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
Ki.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function dm(e) {
  return !e.ctrlKey && !e.button;
}
function fm() {
  return this.parentNode;
}
function hm(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function pm() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ad() {
  var e = dm, t = fm, n = hm, a = pm, r = {}, i = Va("start", "drag", "end"), s = 0, o, l, u, f, d = 0;
  function c(_) {
    _.on("mousedown.drag", m).filter(a).on("touchstart.drag", h).on("touchmove.drag", y, cm).on("touchend.drag touchcancel.drag", w).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function m(_, b) {
    if (!(f || !e.call(this, _, b))) {
      var S = x(this, t.call(this, _, b), _, b, "mouse");
      S && (ke(_.view).on("mousemove.drag", v, un).on("mouseup.drag", g, un), nd(_.view), Ti(_), u = !1, o = _.clientX, l = _.clientY, S("start", _));
    }
  }
  function v(_) {
    if (qt(_), !u) {
      var b = _.clientX - o, S = _.clientY - l;
      u = b * b + S * S > d;
    }
    r.mouse("drag", _);
  }
  function g(_) {
    ke(_.view).on("mousemove.drag mouseup.drag", null), rd(_.view, u), qt(_), r.mouse("end", _);
  }
  function h(_, b) {
    if (e.call(this, _, b)) {
      var S = _.changedTouches, I = t.call(this, _, b), C = S.length, R, O;
      for (R = 0; R < C; ++R)
        (O = x(this, I, _, b, S[R].identifier, S[R])) && (Ti(_), O("start", _, S[R]));
    }
  }
  function y(_) {
    var b = _.changedTouches, S = b.length, I, C;
    for (I = 0; I < S; ++I)
      (C = r[b[I].identifier]) && (qt(_), C("drag", _, b[I]));
  }
  function w(_) {
    var b = _.changedTouches, S = b.length, I, C;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), I = 0; I < S; ++I)
      (C = r[b[I].identifier]) && (Ti(_), C("end", _, b[I]));
  }
  function x(_, b, S, I, C, R) {
    var O = i.copy(), D = Be(R || S, b), L, H, E;
    if ((E = n.call(_, new Ki("beforestart", {
      sourceEvent: S,
      target: c,
      identifier: C,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), I)) != null)
      return L = E.x - D[0] || 0, H = E.y - D[1] || 0, function N($, P, B) {
        var T = D, q;
        switch ($) {
          case "start":
            r[C] = N, q = s++;
            break;
          case "end":
            delete r[C], --s;
          // falls through
          case "drag":
            D = Be(B || P, b), q = s;
            break;
        }
        O.call(
          $,
          _,
          new Ki($, {
            sourceEvent: P,
            subject: E,
            target: c,
            identifier: C,
            active: q,
            x: D[0] + L,
            y: D[1] + H,
            dx: D[0] - T[0],
            dy: D[1] - T[1],
            dispatch: O
          }),
          I
        );
      };
  }
  return c.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Pn(!!_), c) : e;
  }, c.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Pn(_), c) : t;
  }, c.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Pn(_), c) : n;
  }, c.touchable = function(_) {
    return arguments.length ? (a = typeof _ == "function" ? _ : Pn(!!_), c) : a;
  }, c.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? c : _;
  }, c.clickDistance = function(_) {
    return arguments.length ? (d = (_ = +_) * _, c) : Math.sqrt(d);
  }, c;
}
var Ut = 0, rn = 0, en = 0, id = 1e3, Pa, an, ka = 0, pt = 0, Ga = 0, cn = typeof performance == "object" && performance.now ? performance : Date, sd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function hs() {
  return pt || (sd(gm), pt = cn.now() + Ga);
}
function gm() {
  pt = 0;
}
function Ta() {
  this._call = this._time = this._next = null;
}
Ta.prototype = od.prototype = {
  constructor: Ta,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? hs() : +n) + (t == null ? 0 : +t), !this._next && an !== this && (an ? an._next = this : Pa = this, an = this), this._call = e, this._time = n, Yi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yi());
  }
};
function od(e, t, n) {
  var a = new Ta();
  return a.restart(e, t, n), a;
}
function mm() {
  hs(), ++Ut;
  for (var e = Pa, t; e; )
    (t = pt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ut;
}
function eo() {
  pt = (ka = cn.now()) + Ga, Ut = rn = 0;
  try {
    mm();
  } finally {
    Ut = 0, xm(), pt = 0;
  }
}
function vm() {
  var e = cn.now(), t = e - ka;
  t > id && (Ga -= t, ka = e);
}
function xm() {
  for (var e, t = Pa, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Pa = n);
  an = e, Yi(a);
}
function Yi(e) {
  if (!Ut) {
    rn && (rn = clearTimeout(rn));
    var t = e - pt;
    t > 24 ? (e < 1 / 0 && (rn = setTimeout(eo, e - cn.now() - Ga)), en && (en = clearInterval(en))) : (en || (ka = cn.now(), en = setInterval(vm, id)), Ut = 1, sd(eo));
  }
}
function to(e, t, n) {
  var a = new Ta();
  return t = t == null ? 0 : +t, a.restart((r) => {
    a.stop(), e(r + t);
  }, t, n), a;
}
var ym = Va("start", "end", "cancel", "interrupt"), _m = [], ld = 0, no = 1, Xi = 2, Ia = 3, ro = 4, Ji = 5, Ca = 6;
function Ka(e, t, n, a, r, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  wm(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: r,
    // For context during callback.
    on: ym,
    tween: _m,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ld
  });
}
function ps(e, t) {
  var n = qe(e, t);
  if (n.state > ld) throw new Error("too late; already scheduled");
  return n;
}
function ze(e, t) {
  var n = qe(e, t);
  if (n.state > Ia) throw new Error("too late; already running");
  return n;
}
function qe(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function wm(e, t, n) {
  var a = e.__transition, r;
  a[t] = n, n.timer = od(i, 0, n.time);
  function i(u) {
    n.state = no, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var f, d, c, m;
    if (n.state !== no) return l();
    for (f in a)
      if (m = a[f], m.name === n.name) {
        if (m.state === Ia) return to(s);
        m.state === ro ? (m.state = Ca, m.timer.stop(), m.on.call("interrupt", e, e.__data__, m.index, m.group), delete a[f]) : +f < t && (m.state = Ca, m.timer.stop(), m.on.call("cancel", e, e.__data__, m.index, m.group), delete a[f]);
      }
    if (to(function() {
      n.state === Ia && (n.state = ro, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Xi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Xi) {
      for (n.state = Ia, r = new Array(c = n.tween.length), f = 0, d = -1; f < c; ++f)
        (m = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (r[++d] = m);
      r.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ji, 1), d = -1, c = r.length; ++d < c; )
      r[d].call(e, f);
    n.state === Ji && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ca, n.timer.stop(), delete a[t];
    for (var u in a) return;
    delete e.__transition;
  }
}
function Na(e, t) {
  var n = e.__transition, a, r, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((a = n[s]).name !== t) {
        i = !1;
        continue;
      }
      r = a.state > Xi && a.state < Ji, a.state = Ca, a.timer.stop(), a.on.call(r ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Sm(e) {
  return this.each(function() {
    Na(this, e);
  });
}
function bm(e, t) {
  var n, a;
  return function() {
    var r = ze(this, e), i = r.tween;
    if (i !== n) {
      a = n = i;
      for (var s = 0, o = a.length; s < o; ++s)
        if (a[s].name === t) {
          a = a.slice(), a.splice(s, 1);
          break;
        }
    }
    r.tween = a;
  };
}
function Am(e, t, n) {
  var a, r;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ze(this, e), s = i.tween;
    if (s !== a) {
      r = (a = s).slice();
      for (var o = { name: t, value: n }, l = 0, u = r.length; l < u; ++l)
        if (r[l].name === t) {
          r[l] = o;
          break;
        }
      l === u && r.push(o);
    }
    i.tween = r;
  };
}
function Em(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = qe(this.node(), n).tween, r = 0, i = a.length, s; r < i; ++r)
      if ((s = a[r]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? bm : Am)(n, e, t));
}
function gs(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var r = ze(this, a);
    (r.value || (r.value = {}))[t] = n.apply(this, arguments);
  }), function(r) {
    return qe(r, a).value[t];
  };
}
function ud(e, t) {
  var n;
  return (typeof t == "number" ? ut : t instanceof Ls ? Os : (n = Ls(t)) ? (t = n, Os) : Ah)(e, t);
}
function Mm(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Im(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cm(e, t, n) {
  var a, r = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === r ? null : s === a ? i : i = t(a = s, n);
  };
}
function Nm(e, t, n) {
  var a, r = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === r ? null : s === a ? i : i = t(a = s, n);
  };
}
function Rm(e, t, n) {
  var a, r, i;
  return function() {
    var s, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = o + "", s === l ? null : s === a && l === r ? i : (r = l, i = t(a = s, o)));
  };
}
function $m(e, t, n) {
  var a, r, i;
  return function() {
    var s, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = o + "", s === l ? null : s === a && l === r ? i : (r = l, i = t(a = s, o)));
  };
}
function Dm(e, t) {
  var n = Wa(e), a = n === "transform" ? Hp : ud;
  return this.attrTween(e, typeof t == "function" ? (n.local ? $m : Rm)(n, a, gs(this, "attr." + e, t)) : t == null ? (n.local ? Im : Mm)(n) : (n.local ? Nm : Cm)(n, a, t));
}
function Pm(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function km(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Tm(e, t) {
  var n, a;
  function r() {
    var i = t.apply(this, arguments);
    return i !== a && (n = (a = i) && km(e, i)), n;
  }
  return r._value = t, r;
}
function Lm(e, t) {
  var n, a;
  function r() {
    var i = t.apply(this, arguments);
    return i !== a && (n = (a = i) && Pm(e, i)), n;
  }
  return r._value = t, r;
}
function Om(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = Wa(e);
  return this.tween(n, (a.local ? Tm : Lm)(a, t));
}
function Bm(e, t) {
  return function() {
    ps(this, e).delay = +t.apply(this, arguments);
  };
}
function Fm(e, t) {
  return t = +t, function() {
    ps(this, e).delay = t;
  };
}
function Hm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Bm : Fm)(t, e)) : qe(this.node(), t).delay;
}
function Zm(e, t) {
  return function() {
    ze(this, e).duration = +t.apply(this, arguments);
  };
}
function qm(e, t) {
  return t = +t, function() {
    ze(this, e).duration = t;
  };
}
function zm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zm : qm)(t, e)) : qe(this.node(), t).duration;
}
function Um(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ze(this, e).ease = t;
  };
}
function jm(e) {
  var t = this._id;
  return arguments.length ? this.each(Um(t, e)) : qe(this.node(), t).ease;
}
function Vm(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ze(this, e).ease = n;
  };
}
function Wm(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Vm(this._id, e));
}
function Gm(e) {
  typeof e != "function" && (e = Vc(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, o = a[r] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && o.push(l);
  return new Ye(a, this._parents, this._name, this._id);
}
function Km(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, r = n.length, i = Math.min(a, r), s = new Array(a), o = 0; o < i; ++o)
    for (var l = t[o], u = n[o], f = l.length, d = s[o] = new Array(f), c, m = 0; m < f; ++m)
      (c = l[m] || u[m]) && (d[m] = c);
  for (; o < a; ++o)
    s[o] = t[o];
  return new Ye(s, this._parents, this._name, this._id);
}
function Ym(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Xm(e, t, n) {
  var a, r, i = Ym(t) ? ps : ze;
  return function() {
    var s = i(this, e), o = s.on;
    o !== a && (r = (a = o).copy()).on(t, n), s.on = r;
  };
}
function Jm(e, t) {
  var n = this._id;
  return arguments.length < 2 ? qe(this.node(), n).on.on(e) : this.each(Xm(n, e, t));
}
function Qm(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function ev() {
  return this.on("end.remove", Qm(this._id));
}
function tv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ds(e));
  for (var a = this._groups, r = a.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = a[s], l = o.length, u = i[s] = new Array(l), f, d, c = 0; c < l; ++c)
      (f = o[c]) && (d = e.call(f, f.__data__, c, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[c] = d, Ka(u[c], t, n, c, u, qe(f, n)));
  return new Ye(i, this._parents, t, n);
}
function nv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = jc(e));
  for (var a = this._groups, r = a.length, i = [], s = [], o = 0; o < r; ++o)
    for (var l = a[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var c = e.call(f, f.__data__, d, l), m, v = qe(f, n), g = 0, h = c.length; g < h; ++g)
          (m = c[g]) && Ka(m, t, n, g, c, v);
        i.push(c), s.push(f);
      }
  return new Ye(i, s, t, n);
}
var rv = yn.prototype.constructor;
function av() {
  return new rv(this._groups, this._parents);
}
function iv(e, t) {
  var n, a, r;
  return function() {
    var i = zt(this, e), s = (this.style.removeProperty(e), zt(this, e));
    return i === s ? null : i === n && s === a ? r : r = t(n = i, a = s);
  };
}
function cd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sv(e, t, n) {
  var a, r = n + "", i;
  return function() {
    var s = zt(this, e);
    return s === r ? null : s === a ? i : i = t(a = s, n);
  };
}
function ov(e, t, n) {
  var a, r, i;
  return function() {
    var s = zt(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), zt(this, e))), s === l ? null : s === a && l === r ? i : (r = l, i = t(a = s, o));
  };
}
function lv(e, t) {
  var n, a, r, i = "style." + t, s = "end." + i, o;
  return function() {
    var l = ze(this, e), u = l.on, f = l.value[i] == null ? o || (o = cd(t)) : void 0;
    (u !== n || r !== f) && (a = (n = u).copy()).on(s, r = f), l.on = a;
  };
}
function uv(e, t, n) {
  var a = (e += "") == "transform" ? Fp : ud;
  return t == null ? this.styleTween(e, iv(e, a)).on("end.style." + e, cd(e)) : typeof t == "function" ? this.styleTween(e, ov(e, a, gs(this, "style." + e, t))).each(lv(this._id, e)) : this.styleTween(e, sv(e, a, t), n).on("end.style." + e, null);
}
function cv(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function dv(e, t, n) {
  var a, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (a = (r = s) && cv(e, s, n)), a;
  }
  return i._value = t, i;
}
function fv(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, dv(e, t, n ?? ""));
}
function hv(e) {
  return function() {
    this.textContent = e;
  };
}
function pv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function gv(e) {
  return this.tween("text", typeof e == "function" ? pv(gs(this, "text", e)) : hv(e == null ? "" : e + ""));
}
function mv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function vv(e) {
  var t, n;
  function a() {
    var r = e.apply(this, arguments);
    return r !== n && (t = (n = r) && mv(r)), t;
  }
  return a._value = e, a;
}
function xv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, vv(e));
}
function yv() {
  for (var e = this._name, t = this._id, n = dd(), a = this._groups, r = a.length, i = 0; i < r; ++i)
    for (var s = a[i], o = s.length, l, u = 0; u < o; ++u)
      if (l = s[u]) {
        var f = qe(l, t);
        Ka(l, e, n, u, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Ye(a, this._parents, e, n);
}
function _v() {
  var e, t, n = this, a = n._id, r = n.size();
  return new Promise(function(i, s) {
    var o = { value: s }, l = { value: function() {
      --r === 0 && i();
    } };
    n.each(function() {
      var u = ze(this, a), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), r === 0 && i();
  });
}
var wv = 0;
function Ye(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function dd() {
  return ++wv;
}
var Ve = yn.prototype;
Ye.prototype = {
  constructor: Ye,
  select: tv,
  selectAll: nv,
  selectChild: Ve.selectChild,
  selectChildren: Ve.selectChildren,
  filter: Gm,
  merge: Km,
  selection: av,
  transition: yv,
  call: Ve.call,
  nodes: Ve.nodes,
  node: Ve.node,
  size: Ve.size,
  empty: Ve.empty,
  each: Ve.each,
  on: Jm,
  attr: Dm,
  attrTween: Om,
  style: uv,
  styleTween: fv,
  text: gv,
  textTween: xv,
  remove: ev,
  tween: Em,
  delay: Hm,
  duration: zm,
  ease: jm,
  easeVarying: Wm,
  end: _v,
  [Symbol.iterator]: Ve[Symbol.iterator]
};
function Sv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var bv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Sv
};
function Av(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ev(e) {
  var t, n;
  e instanceof Ye ? (t = e._id, e = e._name) : (t = dd(), (n = bv).time = hs(), e = e == null ? null : e + "");
  for (var a = this._groups, r = a.length, i = 0; i < r; ++i)
    for (var s = a[i], o = s.length, l, u = 0; u < o; ++u)
      (l = s[u]) && Ka(l, e, t, u, s, n || Av(l, t));
  return new Ye(a, this._parents, e, t);
}
yn.prototype.interrupt = Sm;
yn.prototype.transition = Ev;
const kn = (e) => () => e;
function Mv(e, {
  sourceEvent: t,
  target: n,
  transform: a,
  dispatch: r
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: a, enumerable: !0, configurable: !0 },
    _: { value: r }
  });
}
function Ge(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Ge.prototype = {
  constructor: Ge,
  scale: function(e) {
    return e === 1 ? this : new Ge(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Ge(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Ya = new Ge(1, 0, 0);
fd.prototype = Ge.prototype;
function fd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ya;
  return e.__zoom;
}
function Li(e) {
  e.stopImmediatePropagation();
}
function tn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Iv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Cv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ao() {
  return this.__zoom || Ya;
}
function Nv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Rv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $v(e, t, n) {
  var a = e.invertX(t[0][0]) - n[0][0], r = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    r > a ? (a + r) / 2 : Math.min(0, a) || Math.max(0, r),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function hd() {
  var e = Iv, t = Cv, n = $v, a = Nv, r = Rv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, l = Ea, u = Va("start", "zoom", "end"), f, d, c, m = 500, v = 150, g = 0, h = 10;
  function y(E) {
    E.property("__zoom", ao).on("wheel.zoom", C, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", O).filter(r).on("touchstart.zoom", D).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(E, N, $, P) {
    var B = E.selection ? E.selection() : E;
    B.property("__zoom", ao), E !== B ? b(E, N, $, P) : B.interrupt().each(function() {
      S(this, arguments).event(P).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, y.scaleBy = function(E, N, $, P) {
    y.scaleTo(E, function() {
      var B = this.__zoom.k, T = typeof N == "function" ? N.apply(this, arguments) : N;
      return B * T;
    }, $, P);
  }, y.scaleTo = function(E, N, $, P) {
    y.transform(E, function() {
      var B = t.apply(this, arguments), T = this.__zoom, q = $ == null ? _(B) : typeof $ == "function" ? $.apply(this, arguments) : $, z = T.invert(q), Z = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(x(w(T, Z), q, z), B, s);
    }, $, P);
  }, y.translateBy = function(E, N, $, P) {
    y.transform(E, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), s);
    }, null, P);
  }, y.translateTo = function(E, N, $, P, B) {
    y.transform(E, function() {
      var T = t.apply(this, arguments), q = this.__zoom, z = P == null ? _(T) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Ya.translate(z[0], z[1]).scale(q.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), T, s);
    }, P, B);
  };
  function w(E, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === E.k ? E : new Ge(N, E.x, E.y);
  }
  function x(E, N, $) {
    var P = N[0] - $[0] * E.k, B = N[1] - $[1] * E.k;
    return P === E.x && B === E.y ? E : new Ge(E.k, P, B);
  }
  function _(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function b(E, N, $, P) {
    E.on("start.zoom", function() {
      S(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var B = this, T = arguments, q = S(B, T).event(P), z = t.apply(B, T), Z = $ == null ? _(z) : typeof $ == "function" ? $.apply(B, T) : $, re = Math.max(z[1][0] - z[0][0], z[1][1] - z[0][1]), ne = B.__zoom, W = typeof N == "function" ? N.apply(B, T) : N, Q = l(ne.invert(Z).concat(re / ne.k), W.invert(Z).concat(re / W.k));
      return function(J) {
        if (J === 1) J = W;
        else {
          var F = Q(J), ee = re / F[2];
          J = new Ge(ee, Z[0] - F[0] * ee, Z[1] - F[1] * ee);
        }
        q.zoom(null, J);
      };
    });
  }
  function S(E, N, $) {
    return !$ && E.__zooming || new I(E, N);
  }
  function I(E, N) {
    this.that = E, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, N), this.taps = 0;
  }
  I.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, N) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var N = ke(this.that).datum();
      u.call(
        E,
        this.that,
        new Mv(E, {
          sourceEvent: this.sourceEvent,
          target: y,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function C(E, ...N) {
    if (!e.apply(this, arguments)) return;
    var $ = S(this, N).event(E), P = this.__zoom, B = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, a.apply(this, arguments)))), T = Be(E);
    if ($.wheel)
      ($.mouse[0][0] !== T[0] || $.mouse[0][1] !== T[1]) && ($.mouse[1] = P.invert($.mouse[0] = T)), clearTimeout($.wheel);
    else {
      if (P.k === B) return;
      $.mouse = [T, P.invert(T)], Na(this), $.start();
    }
    tn(E), $.wheel = setTimeout(q, v), $.zoom("mouse", n(x(w(P, B), $.mouse[0], $.mouse[1]), $.extent, s));
    function q() {
      $.wheel = null, $.end();
    }
  }
  function R(E, ...N) {
    if (c || !e.apply(this, arguments)) return;
    var $ = E.currentTarget, P = S(this, N, !0).event(E), B = ke(E.view).on("mousemove.zoom", Z, !0).on("mouseup.zoom", re, !0), T = Be(E, $), q = E.clientX, z = E.clientY;
    nd(E.view), Li(E), P.mouse = [T, this.__zoom.invert(T)], Na(this), P.start();
    function Z(ne) {
      if (tn(ne), !P.moved) {
        var W = ne.clientX - q, Q = ne.clientY - z;
        P.moved = W * W + Q * Q > g;
      }
      P.event(ne).zoom("mouse", n(x(P.that.__zoom, P.mouse[0] = Be(ne, $), P.mouse[1]), P.extent, s));
    }
    function re(ne) {
      B.on("mousemove.zoom mouseup.zoom", null), rd(ne.view, P.moved), tn(ne), P.event(ne).end();
    }
  }
  function O(E, ...N) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, P = Be(E.changedTouches ? E.changedTouches[0] : E, this), B = $.invert(P), T = $.k * (E.shiftKey ? 0.5 : 2), q = n(x(w($, T), P, B), t.apply(this, N), s);
      tn(E), o > 0 ? ke(this).transition().duration(o).call(b, q, P, E) : ke(this).call(y.transform, q, P, E);
    }
  }
  function D(E, ...N) {
    if (e.apply(this, arguments)) {
      var $ = E.touches, P = $.length, B = S(this, N, E.changedTouches.length === P).event(E), T, q, z, Z;
      for (Li(E), q = 0; q < P; ++q)
        z = $[q], Z = Be(z, this), Z = [Z, this.__zoom.invert(Z), z.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== Z[2] && (B.touch1 = Z, B.taps = 0) : (B.touch0 = Z, T = !0, B.taps = 1 + !!f);
      f && (f = clearTimeout(f)), T && (B.taps < 2 && (d = Z[0], f = setTimeout(function() {
        f = null;
      }, m)), Na(this), B.start());
    }
  }
  function L(E, ...N) {
    if (this.__zooming) {
      var $ = S(this, N).event(E), P = E.changedTouches, B = P.length, T, q, z, Z;
      for (tn(E), T = 0; T < B; ++T)
        q = P[T], z = Be(q, this), $.touch0 && $.touch0[2] === q.identifier ? $.touch0[0] = z : $.touch1 && $.touch1[2] === q.identifier && ($.touch1[0] = z);
      if (q = $.that.__zoom, $.touch1) {
        var re = $.touch0[0], ne = $.touch0[1], W = $.touch1[0], Q = $.touch1[1], J = (J = W[0] - re[0]) * J + (J = W[1] - re[1]) * J, F = (F = Q[0] - ne[0]) * F + (F = Q[1] - ne[1]) * F;
        q = w(q, Math.sqrt(J / F)), z = [(re[0] + W[0]) / 2, (re[1] + W[1]) / 2], Z = [(ne[0] + Q[0]) / 2, (ne[1] + Q[1]) / 2];
      } else if ($.touch0) z = $.touch0[0], Z = $.touch0[1];
      else return;
      $.zoom("touch", n(x(q, z, Z), $.extent, s));
    }
  }
  function H(E, ...N) {
    if (this.__zooming) {
      var $ = S(this, N).event(E), P = E.changedTouches, B = P.length, T, q;
      for (Li(E), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, m), T = 0; T < B; ++T)
        q = P[T], $.touch0 && $.touch0[2] === q.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === q.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (q = Be(q, this), Math.hypot(d[0] - q[0], d[1] - q[1]) < h)) {
        var z = ke(this).on("dblclick.zoom");
        z && z.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(E) {
    return arguments.length ? (a = typeof E == "function" ? E : kn(+E), y) : a;
  }, y.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : kn(!!E), y) : e;
  }, y.touchable = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : kn(!!E), y) : r;
  }, y.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : kn([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), y) : t;
  }, y.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], y) : [i[0], i[1]];
  }, y.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], y) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, y.constrain = function(E) {
    return arguments.length ? (n = E, y) : n;
  }, y.duration = function(E) {
    return arguments.length ? (o = +E, y) : o;
  }, y.interpolate = function(E) {
    return arguments.length ? (l = E, y) : l;
  }, y.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? y : E;
  }, y.clickDistance = function(E) {
    return arguments.length ? (g = (E = +E) * E, y) : Math.sqrt(g);
  }, y.tapDistance = function(E) {
    return arguments.length ? (h = +E, y) : h;
  }, y;
}
const Ze = {
  error001: (e = "react") => `Seems like you have not used zustand provider as an ancestor. Help: https://${e}flow.dev/error#001`,
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: a }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : a}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (e) => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, dn = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], pd = ["Enter", " ", "Escape"], gd = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var jt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(jt || (jt = {}));
var ht;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ht || (ht = {}));
var fn;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(fn || (fn = {}));
const md = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var it;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(it || (it = {}));
var La;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(La || (La = {}));
var se;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(se || (se = {}));
const io = {
  [se.Left]: se.Right,
  [se.Right]: se.Left,
  [se.Top]: se.Bottom,
  [se.Bottom]: se.Top
};
function vd(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const xd = (e) => "id" in e && "source" in e && "target" in e, Dv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), _n = (e, t = [0, 0]) => {
  const { width: n, height: a } = Xe(e), r = e.origin ?? t, i = n * r[0], s = a * r[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Pv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((a, r) => {
    const i = typeof r == "string";
    let s = !t.nodeLookup && !i ? r : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(r) : ms(r) ? r : t.nodeLookup.get(r.id));
    const o = s ? Oa(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Xa(a, o);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ja(n);
}, wn = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, a = !1;
  return e.forEach((r) => {
    (t.filter === void 0 || t.filter(r)) && (n = Xa(n, Oa(r)), a = !0);
  }), a ? Ja(n) : { x: 0, y: 0, width: 0, height: 0 };
}, vs = (e, t, [n, a, r] = [0, 0, 1], i = !1, s = !1) => {
  const o = {
    ...Xt(t, [n, a, r]),
    width: t.width / r,
    height: t.height / r
  }, l = [];
  for (const u of e.values()) {
    const { measured: f, selectable: d = !0, hidden: c = !1 } = u;
    if (s && !d || c)
      continue;
    const m = f.width ?? u.width ?? u.initialWidth ?? null, v = f.height ?? u.height ?? u.initialHeight ?? null, g = hn(o, Wt(u)), h = (m ?? 0) * (v ?? 0), y = i && g > 0;
    (!u.internals.handleBounds || y || g >= h || u.dragging) && l.push(u);
  }
  return l;
}, kv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((a) => {
    n.add(a.id);
  }), t.filter((a) => n.has(a.source) || n.has(a.target));
};
function Tv(e, t) {
  const n = /* @__PURE__ */ new Map(), a = t?.nodes ? new Set(t.nodes.map((r) => r.id)) : null;
  return e.forEach((r) => {
    r.measured.width && r.measured.height && (t?.includeHiddenNodes || !r.hidden) && (!a || a.has(r.id)) && n.set(r.id, r);
  }), n;
}
async function Lv({ nodes: e, width: t, height: n, panZoom: a, minZoom: r, maxZoom: i }, s) {
  if (e.size === 0)
    return !0;
  const o = Tv(e, s), l = wn(o), u = ys(l, t, n, s?.minZoom ?? r, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await a.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), !0;
}
function yd({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: a = [0, 0], nodeExtent: r, onError: i }) {
  const s = n.get(e), o = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = o ? o.internals.positionAbsolute : { x: 0, y: 0 }, f = s.origin ?? a;
  let d = s.extent || r;
  if (s.extent === "parent" && !s.expandParent)
    if (!o)
      i?.("005", Ze.error005());
    else {
      const m = o.measured.width, v = o.measured.height;
      m && v && (d = [
        [l, u],
        [l + m, u + v]
      ]);
    }
  else o && mt(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const c = mt(d) ? gt(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Ze.error015()), {
    position: {
      x: c.x - l + (s.measured.width ?? 0) * f[0],
      y: c.y - u + (s.measured.height ?? 0) * f[1]
    },
    positionAbsolute: c
  };
}
async function Ov({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: a, onBeforeDelete: r }) {
  const i = new Set(e.map((c) => c.id)), s = [];
  for (const c of n) {
    if (c.deletable === !1)
      continue;
    const m = i.has(c.id), v = !m && c.parentId && s.find((g) => g.id === c.parentId);
    (m || v) && s.push(c);
  }
  const o = new Set(t.map((c) => c.id)), l = a.filter((c) => c.deletable !== !1), f = kv(s, l);
  for (const c of l)
    o.has(c.id) && !f.find((v) => v.id === c.id) && f.push(c);
  if (!r)
    return {
      edges: f,
      nodes: s
    };
  const d = await r({
    nodes: s,
    edges: f
  });
  return typeof d == "boolean" ? d ? { edges: f, nodes: s } : { edges: [], nodes: [] } : d;
}
const Vt = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), gt = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vt(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Vt(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function _d(e, t, n) {
  const { width: a, height: r } = Xe(n), { x: i, y: s } = n.internals.positionAbsolute;
  return gt(e, [
    [i, s],
    [i + a, s + r]
  ], t);
}
const so = (e, t, n) => e < t ? Vt(Math.abs(e - t), 1, t) / t : e > n ? -Vt(Math.abs(e - n), 1, t) / t : 0, xs = (e, t, n = 15, a = 40) => {
  const r = so(e.x, a, t.width - a) * n, i = so(e.y, a, t.height - a) * n;
  return [r, i];
}, Xa = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Qi = ({ x: e, y: t, width: n, height: a }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + a
}), Ja = ({ x: e, y: t, x2: n, y2: a }) => ({
  x: e,
  y: t,
  width: n - e,
  height: a - t
}), Wt = (e, t = [0, 0]) => {
  const { x: n, y: a } = ms(e) ? e.internals.positionAbsolute : _n(e, t);
  return {
    x: n,
    y: a,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Oa = (e, t = [0, 0]) => {
  const { x: n, y: a } = ms(e) ? e.internals.positionAbsolute : _n(e, t);
  return {
    x: n,
    y: a,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, wd = (e, t) => Ja(Xa(Qi(e), Qi(t))), hn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), a = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * a);
}, oo = (e) => Fe(e.width) && Fe(e.height) && Fe(e.x) && Fe(e.y), Fe = (e) => !isNaN(e) && isFinite(e), Sd = (e, t) => (n, a) => {
}, Sn = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Xt = ({ x: e, y: t }, [n, a, r], i = !1, s = [1, 1]) => {
  const o = {
    x: (e - n) / r,
    y: (t - a) / r
  };
  return i ? Sn(o, s) : o;
}, Gt = ({ x: e, y: t }, [n, a, r]) => ({
  x: e * r + n,
  y: t * r + a
});
function _t(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Bv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const a = _t(e, n), r = _t(e, t);
    return {
      top: a,
      right: r,
      bottom: a,
      left: r,
      x: r * 2,
      y: a * 2
    };
  }
  if (typeof e == "object") {
    const a = _t(e.top ?? e.y ?? 0, n), r = _t(e.bottom ?? e.y ?? 0, n), i = _t(e.left ?? e.x ?? 0, t), s = _t(e.right ?? e.x ?? 0, t);
    return { top: a, right: s, bottom: r, left: i, x: i + s, y: a + r };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Fv(e, t, n, a, r, i) {
  const { x: s, y: o } = Gt(e, [t, n, a]), { x: l, y: u } = Gt({ x: e.x + e.width, y: e.y + e.height }, [t, n, a]), f = r - l, d = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(o),
    right: Math.floor(f),
    bottom: Math.floor(d)
  };
}
const ys = (e, t, n, a, r, i) => {
  const s = Bv(i, t, n), o = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(o, l), f = Vt(u, a, r), d = e.x + e.width / 2, c = e.y + e.height / 2, m = t / 2 - d * f, v = n / 2 - c * f, g = Fv(e, m, v, f, t, n), h = {
    left: Math.min(g.left - s.left, 0),
    top: Math.min(g.top - s.top, 0),
    right: Math.min(g.right - s.right, 0),
    bottom: Math.min(g.bottom - s.bottom, 0)
  };
  return {
    x: m - h.left + h.right,
    y: v - h.top + h.bottom,
    zoom: f
  };
}, pn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function mt(e) {
  return e != null && e !== "parent";
}
function Xe(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function bd(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Ad(e, t = { width: 0, height: 0 }, n, a, r) {
  const i = { ...e }, s = a.get(n);
  if (s) {
    const o = s.origin || r;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * o[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * o[1];
  }
  return i;
}
function lo(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Hv() {
  let e, t;
  return { promise: new Promise((a, r) => {
    e = a, t = r;
  }), resolve: e, reject: t };
}
function Zv(e) {
  return { ...gd, ...e || {} };
}
function sn(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: a, containerBounds: r }) {
  const { x: i, y: s } = He(e), o = Xt({ x: i - (r?.left ?? 0), y: s - (r?.top ?? 0) }, a), { x: l, y: u } = n ? Sn(o, t) : o;
  return {
    xSnapped: l,
    ySnapped: u,
    ...o
  };
}
const _s = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Ed = (e) => e?.getRootNode?.() || window?.document, qv = ["INPUT", "SELECT", "TEXTAREA"];
function Md(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : qv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Id = (e) => "clientX" in e, He = (e, t) => {
  const n = Id(e), a = n ? e.clientX : e.touches?.[0].clientX, r = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: a - (t?.left ?? 0),
    y: r - (t?.top ?? 0)
  };
}, uo = (e, t, n, a, r) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const o = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: r,
      position: s.getAttribute("data-handlepos"),
      x: (o.left - n.left) / a,
      y: (o.top - n.top) / a,
      ..._s(s)
    };
  });
};
function Cd({ sourceX: e, sourceY: t, targetX: n, targetY: a, sourceControlX: r, sourceControlY: i, targetControlX: s, targetControlY: o }) {
  const l = e * 0.125 + r * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + o * 0.375 + a * 0.125, f = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, f, d];
}
function Tn(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function co({ pos: e, x1: t, y1: n, x2: a, y2: r, c: i }) {
  switch (e) {
    case se.Left:
      return [t - Tn(t - a, i), n];
    case se.Right:
      return [t + Tn(a - t, i), n];
    case se.Top:
      return [t, n - Tn(n - r, i)];
    case se.Bottom:
      return [t, n + Tn(r - n, i)];
  }
}
function Nd({ sourceX: e, sourceY: t, sourcePosition: n = se.Bottom, targetX: a, targetY: r, targetPosition: i = se.Top, curvature: s = 0.25 }) {
  const [o, l] = co({
    pos: n,
    x1: e,
    y1: t,
    x2: a,
    y2: r,
    c: s
  }), [u, f] = co({
    pos: i,
    x1: a,
    y1: r,
    x2: e,
    y2: t,
    c: s
  }), [d, c, m, v] = Cd({
    sourceX: e,
    sourceY: t,
    targetX: a,
    targetY: r,
    sourceControlX: o,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: f
  });
  return [
    `M${e},${t} C${o},${l} ${u},${f} ${a},${r}`,
    d,
    c,
    m,
    v
  ];
}
function Rd({ sourceX: e, sourceY: t, targetX: n, targetY: a }) {
  const r = Math.abs(n - e) / 2, i = n < e ? n + r : n - r, s = Math.abs(a - t) / 2, o = a < t ? a + s : a - s;
  return [i, o, r, s];
}
function zv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: a = 0, elevateOnSelect: r = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return a;
  const s = r && n ? a + 1e3 : a, o = Math.max(e.parentId || r && e.selected ? e.internals.z : 0, t.parentId || r && t.selected ? t.internals.z : 0);
  return s + o;
}
function Uv({ sourceNode: e, targetNode: t, width: n, height: a, transform: r }) {
  const i = Xa(Oa(e), Oa(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -r[0] / r[2],
    y: -r[1] / r[2],
    width: n / r[2],
    height: a / r[2]
  };
  return hn(s, Ja(i)) > 0;
}
const jv = ({ source: e, sourceHandle: t, target: n, targetHandle: a }) => `xy-edge__${e}${t || ""}-${n}${a || ""}`, Vv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Wv = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return n.onError?.("006", Ze.error006()), t;
  const a = n.getEdgeId || jv;
  let r;
  return xd(e) ? r = { ...e } : r = {
    ...e,
    id: a(e)
  }, Vv(r, t) ? t : (r.sourceHandle === null && delete r.sourceHandle, r.targetHandle === null && delete r.targetHandle, t.concat(r));
};
function $d({ sourceX: e, sourceY: t, targetX: n, targetY: a }) {
  const [r, i, s, o] = Rd({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: a
  });
  return [`M ${e},${t}L ${n},${a}`, r, i, s, o];
}
const fo = {
  [se.Left]: { x: -1, y: 0 },
  [se.Right]: { x: 1, y: 0 },
  [se.Top]: { x: 0, y: -1 },
  [se.Bottom]: { x: 0, y: 1 }
}, Gv = ({ source: e, sourcePosition: t = se.Bottom, target: n }) => t === se.Left || t === se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ho = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Kv({ source: e, sourcePosition: t = se.Bottom, target: n, targetPosition: a = se.Top, center: r, offset: i, stepPosition: s }) {
  const o = fo[t], l = fo[a], u = { x: e.x + o.x * i, y: e.y + o.y * i }, f = { x: n.x + l.x * i, y: n.y + l.y * i }, d = Gv({
    source: u,
    sourcePosition: t,
    target: f
  }), c = d.x !== 0 ? "x" : "y", m = d[c];
  let v = [], g, h;
  const y = { x: 0, y: 0 }, w = { x: 0, y: 0 }, [, , x, _] = Rd({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (o[c] * l[c] === -1) {
    c === "x" ? (g = r.x ?? u.x + (f.x - u.x) * s, h = r.y ?? (u.y + f.y) / 2) : (g = r.x ?? (u.x + f.x) / 2, h = r.y ?? u.y + (f.y - u.y) * s);
    const C = [
      { x: g, y: u.y },
      { x: g, y: f.y }
    ], R = [
      { x: u.x, y: h },
      { x: f.x, y: h }
    ];
    o[c] === m ? v = c === "x" ? C : R : v = c === "x" ? R : C;
  } else {
    const C = [{ x: u.x, y: f.y }], R = [{ x: f.x, y: u.y }];
    if (c === "x" ? v = o.x === m ? R : C : v = o.y === m ? C : R, t === a) {
      const E = Math.abs(e[c] - n[c]);
      if (E <= i) {
        const N = Math.min(i - 1, i - E);
        o[c] === m ? y[c] = (u[c] > e[c] ? -1 : 1) * N : w[c] = (f[c] > n[c] ? -1 : 1) * N;
      }
    }
    if (t !== a) {
      const E = c === "x" ? "y" : "x", N = o[c] === l[E], $ = u[E] > f[E], P = u[E] < f[E];
      (o[c] === 1 && (!N && $ || N && P) || o[c] !== 1 && (!N && P || N && $)) && (v = c === "x" ? C : R);
    }
    const O = { x: u.x + y.x, y: u.y + y.y }, D = { x: f.x + w.x, y: f.y + w.y }, L = Math.max(Math.abs(O.x - v[0].x), Math.abs(D.x - v[0].x)), H = Math.max(Math.abs(O.y - v[0].y), Math.abs(D.y - v[0].y));
    L >= H ? (g = (O.x + D.x) / 2, h = v[0].y) : (g = v[0].x, h = (O.y + D.y) / 2);
  }
  const b = { x: u.x + y.x, y: u.y + y.y }, S = { x: f.x + w.x, y: f.y + w.y };
  return [[
    e,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...b.x !== v[0].x || b.y !== v[0].y ? [b] : [],
    ...v,
    ...S.x !== v[v.length - 1].x || S.y !== v[v.length - 1].y ? [S] : [],
    n
  ], g, h, x, _];
}
function Yv(e, t, n, a) {
  const r = Math.min(ho(e, t) / 2, ho(t, n) / 2, a), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, f = e.y < n.y ? 1 : -1;
    return `L ${i + r * u},${s}Q ${i},${s} ${i},${s + r * f}`;
  }
  const o = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + r * l}Q ${i},${s} ${i + r * o},${s}`;
}
function Ba({ sourceX: e, sourceY: t, sourcePosition: n = se.Bottom, targetX: a, targetY: r, targetPosition: i = se.Top, borderRadius: s = 5, centerX: o, centerY: l, offset: u = 20, stepPosition: f = 0.5 }) {
  const [d, c, m, v, g] = Kv({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: a, y: r },
    targetPosition: i,
    center: { x: o, y: l },
    offset: u,
    stepPosition: f
  });
  let h = `M${d[0].x} ${d[0].y}`;
  for (let y = 1; y < d.length - 1; y++)
    h += Yv(d[y - 1], d[y], d[y + 1], s);
  return h += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [h, c, m, v, g];
}
function po(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Xv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!po(t) || !po(n))
    return null;
  const a = t.internals.handleBounds || go(t.handles), r = n.internals.handleBounds || go(n.handles), i = mo(a?.source ?? [], e.sourceHandle), s = mo(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === jt.Strict ? r?.target ?? [] : (r?.target ?? []).concat(r?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Ze.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const o = i?.position || se.Bottom, l = s?.position || se.Top, u = vt(t, i, o), f = vt(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: f.x,
    targetY: f.y,
    sourcePosition: o,
    targetPosition: l
  };
}
function go(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const a of e)
    a.width = a.width ?? 1, a.height = a.height ?? 1, a.type === "source" ? t.push(a) : a.type === "target" && n.push(a);
  return {
    source: t,
    target: n
  };
}
function vt(e, t, n = se.Left, a = !1) {
  const r = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: o } = t ?? Xe(e);
  if (a)
    return { x: r + s / 2, y: i + o / 2 };
  switch (t?.position ?? n) {
    case se.Top:
      return { x: r + s / 2, y: i };
    case se.Right:
      return { x: r + s, y: i + o / 2 };
    case se.Bottom:
      return { x: r + s / 2, y: i + o };
    case se.Left:
      return { x: r, y: i + o / 2 };
  }
}
function mo(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((a) => `${a}=${e[a]}`).join("&")}` : "";
}
function Jv(e, { id: t, defaultColor: n, defaultMarkerStart: a, defaultMarkerEnd: r }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, o) => ([o.markerStart || a, o.markerEnd || r].forEach((l) => {
    if (l && typeof l == "object") {
      const u = es(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, o) => s.id.localeCompare(o.id));
}
const Dd = 1e3, Qv = 10, ws = {
  nodeOrigin: [0, 0],
  nodeExtent: dn,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, e1 = {
  ...ws,
  checkEquality: !0
};
function Ss(e, t) {
  const n = { ...e };
  for (const a in t)
    t[a] !== void 0 && (n[a] = t[a]);
  return n;
}
function t1(e, t, n) {
  const a = Ss(ws, n);
  for (const r of e.values())
    if (r.parentId)
      As(r, e, t, a);
    else {
      const i = _n(r, a.nodeOrigin), s = mt(r.extent) ? r.extent : a.nodeExtent, o = gt(i, s, Xe(r));
      r.internals.positionAbsolute = o;
    }
}
function n1(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], a = [];
  for (const r of e.handles) {
    const i = {
      id: r.id,
      width: r.width ?? 1,
      height: r.height ?? 1,
      nodeId: e.id,
      x: r.x,
      y: r.y,
      position: r.position,
      type: r.type
    };
    r.type === "source" ? n.push(i) : r.type === "target" && a.push(i);
  }
  return {
    source: n,
    target: a
  };
}
function bs(e) {
  return e === "manual";
}
function ts(e, t, n, a = {}) {
  const r = Ss(e1, a), i = { i: 0 }, s = new Map(t), o = r?.elevateNodesOnSelect && !bs(r.zIndexMode) ? Dd : 0;
  let l = e.length > 0, u = !1;
  t.clear(), n.clear();
  for (const f of e) {
    let d = s.get(f.id);
    if (r.checkEquality && f === d?.internals.userNode)
      t.set(f.id, d);
    else {
      const c = _n(f, r.nodeOrigin), m = mt(f.extent) ? f.extent : r.nodeExtent, v = gt(c, m, Xe(f));
      d = {
        ...r.defaults,
        ...f,
        measured: {
          width: f.measured?.width,
          height: f.measured?.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: n1(f, d),
          z: Pd(f, o, r.zIndexMode),
          userNode: f
        }
      }, t.set(f.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), f.parentId && As(d, t, n, a, i), u ||= f.selected ?? !1;
  }
  return { nodesInitialized: l, hasSelectedNodes: u };
}
function r1(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function As(e, t, n, a, r) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: o, zIndexMode: l } = Ss(ws, a), u = e.parentId, f = t.get(u);
  if (!f) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  r1(e, n), r && !f.parentId && f.internals.rootParentIndex === void 0 && l === "auto" && (f.internals.rootParentIndex = ++r.i, f.internals.z = f.internals.z + r.i * Qv), r && f.internals.rootParentIndex !== void 0 && (r.i = f.internals.rootParentIndex);
  const d = i && !bs(l) ? Dd : 0, { x: c, y: m, z: v } = a1(e, f, s, o, d, l), { positionAbsolute: g } = e.internals, h = c !== g.x || m !== g.y;
  (h || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: m } : g,
      z: v
    }
  });
}
function Pd(e, t, n) {
  const a = Fe(e.zIndex) ? e.zIndex : 0;
  return bs(n) ? a : a + (e.selected ? t : 0);
}
function a1(e, t, n, a, r, i) {
  const { x: s, y: o } = t.internals.positionAbsolute, l = Xe(e), u = _n(e, n), f = mt(e.extent) ? gt(u, e.extent, l) : u;
  let d = gt({ x: s + f.x, y: o + f.y }, a, l);
  e.extent === "parent" && (d = _d(d, l, t));
  const c = Pd(e, r, i), m = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: m >= c ? m + 1 : c
  };
}
function Es(e, t, n, a = [0, 0]) {
  const r = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const o = t.get(s.parentId);
    if (!o)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Wt(o), u = wd(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: o });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: o }, l) => {
    const u = o.internals.positionAbsolute, f = Xe(o), d = o.origin ?? a, c = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, m = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, v = Math.max(f.width, Math.round(s.width)), g = Math.max(f.height, Math.round(s.height)), h = (v - f.width) * d[0], y = (g - f.height) * d[1];
    (c > 0 || m > 0 || h || y) && (r.push({
      id: l,
      type: "position",
      position: {
        x: o.position.x - c + h,
        y: o.position.y - m + y
      }
    }), n.get(l)?.forEach((w) => {
      e.some((x) => x.id === w.id) || r.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + c,
          y: w.position.y + m
        }
      });
    })), (f.width < s.width || f.height < s.height || c || m) && r.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (c ? d[0] * c - h : 0),
        height: g + (m ? d[1] * m - y : 0)
      }
    });
  }), r;
}
function i1(e, t, n, a, r, i, s) {
  const o = a?.querySelector(".xyflow__viewport");
  let l = !1;
  if (!o)
    return { changes: [], updatedInternals: l };
  const u = [], f = window.getComputedStyle(o), { m22: d } = new window.DOMMatrixReadOnly(f.transform), c = [];
  for (const m of e.values()) {
    const v = t.get(m.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), l = !0;
      continue;
    }
    const g = _s(m.nodeElement), h = v.measured.width !== g.width || v.measured.height !== g.height;
    if (!!(g.width && g.height && (h || !v.internals.handleBounds || m.force))) {
      const w = m.nodeElement.getBoundingClientRect(), x = mt(v.extent) ? v.extent : i;
      let { positionAbsolute: _ } = v.internals;
      v.parentId && v.extent === "parent" ? _ = _d(_, g, t.get(v.parentId)) : x && (_ = gt(_, x, g));
      const b = {
        ...v,
        measured: g,
        internals: {
          ...v.internals,
          positionAbsolute: _,
          handleBounds: {
            source: uo("source", m.nodeElement, w, d, v.id),
            target: uo("target", m.nodeElement, w, d, v.id)
          }
        }
      };
      t.set(v.id, b), v.parentId && As(b, t, n, { nodeOrigin: r, zIndexMode: s }), l = !0, h && (u.push({
        id: v.id,
        type: "dimensions",
        dimensions: g
      }), v.expandParent && v.parentId && c.push({
        id: v.id,
        parentId: v.parentId,
        rect: Wt(b, r)
      }));
    }
  }
  if (c.length > 0) {
    const m = Es(c, t, n, r);
    u.push(...m);
  }
  return { changes: u, updatedInternals: l };
}
async function s1({ delta: e, panZoom: t, transform: n, translateExtent: a, width: r, height: i }) {
  if (!t || !e.x && !e.y)
    return !1;
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [r, i]
  ], a);
  return !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
}
function vo(e, t, n, a, r, i) {
  let s = r;
  const o = a.get(s) || /* @__PURE__ */ new Map();
  a.set(s, o.set(n, t)), s = `${r}-${e}`;
  const l = a.get(s) || /* @__PURE__ */ new Map();
  if (a.set(s, l.set(n, t)), i) {
    s = `${r}-${e}-${i}`;
    const u = a.get(s) || /* @__PURE__ */ new Map();
    a.set(s, u.set(n, t));
  }
}
function kd(e, t, n) {
  e.clear(), t.clear();
  for (const a of n) {
    const { source: r, target: i, sourceHandle: s = null, targetHandle: o = null } = a, l = { edgeId: a.id, source: r, target: i, sourceHandle: s, targetHandle: o }, u = `${r}-${s}--${i}-${o}`, f = `${i}-${o}--${r}-${s}`;
    vo("source", l, f, e, r, s), vo("target", l, u, e, i, o), t.set(a.id, a);
  }
}
function Td(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Td(n, t) : !1;
}
function xo(e, t, n) {
  let a = e;
  do {
    if (a?.matches?.(t))
      return !0;
    if (a === n)
      return !1;
    a = a?.parentElement;
  } while (a);
  return !1;
}
function o1(e, t, n, a) {
  const r = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === a) && (!s.parentId || !Td(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const o = e.get(i);
      o && r.set(i, {
        id: i,
        position: o.position || { x: 0, y: 0 },
        distance: {
          x: n.x - o.internals.positionAbsolute.x,
          y: n.y - o.internals.positionAbsolute.y
        },
        extent: o.extent,
        parentId: o.parentId,
        origin: o.origin,
        expandParent: o.expandParent,
        internals: {
          positionAbsolute: o.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: o.measured.width ?? 0,
          height: o.measured.height ?? 0
        }
      });
    }
  return r;
}
function Oi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: a = !0 }) {
  const r = [];
  for (const [s, o] of t) {
    const l = n.get(s)?.internals.userNode;
    l && r.push({
      ...l,
      position: o.position,
      dragging: a
    });
  }
  if (!e)
    return [r[0], r];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: a
    } : r[0],
    r
  ];
}
function l1({ dragItems: e, snapGrid: t, x: n, y: a }) {
  const r = e.values().next().value;
  if (!r)
    return null;
  const i = {
    x: n - r.distance.x,
    y: a - r.distance.y
  }, s = Sn(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function u1({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: a, onDragStop: r }) {
  let i = { x: null, y: null }, s = 0, o = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, f = null, d = !1, c = null, m = !1, v = !1, g = null;
  function h({ noDragClassName: w, handleSelector: x, domNode: _, isSelectable: b, nodeId: S, nodeClickDistance: I = 0 }) {
    c = ke(_);
    function C({ x: L, y: H }) {
      const { nodeLookup: E, nodeExtent: N, snapGrid: $, snapToGrid: P, nodeOrigin: B, onNodeDrag: T, onSelectionDrag: q, onError: z, updateNodePositions: Z } = t();
      i = { x: L, y: H };
      let re = !1;
      const ne = o.size > 1, W = ne && N ? Qi(wn(o)) : null, Q = ne && P ? l1({
        dragItems: o,
        snapGrid: $,
        x: L,
        y: H
      }) : null;
      for (const [J, F] of o) {
        if (!E.has(J))
          continue;
        let ee = { x: L - F.distance.x, y: H - F.distance.y };
        P && (ee = Q ? {
          x: Math.round(ee.x + Q.x),
          y: Math.round(ee.y + Q.y)
        } : Sn(ee, $));
        let ue = null;
        if (ne && N && !F.extent && W) {
          const { positionAbsolute: j } = F.internals, ae = j.x - W.x + N[0][0], te = j.x + F.measured.width - W.x2 + N[1][0], de = j.y - W.y + N[0][1], be = j.y + F.measured.height - W.y2 + N[1][1];
          ue = [
            [ae, de],
            [te, be]
          ];
        }
        const { position: le, positionAbsolute: G } = yd({
          nodeId: J,
          nextPosition: ee,
          nodeLookup: E,
          nodeExtent: ue || N,
          nodeOrigin: B,
          onError: z
        });
        re = re || F.position.x !== le.x || F.position.y !== le.y, F.position = le, F.internals.positionAbsolute = G;
      }
      if (v = v || re, !!re && (Z(o, !0), g && (a || T || !S && q))) {
        const [J, F] = Oi({
          nodeId: S,
          dragItems: o,
          nodeLookup: E
        });
        a?.(g, o, J, F), T?.(g, J, F), S || q?.(g, F);
      }
    }
    async function R() {
      if (!f)
        return;
      const { transform: L, panBy: H, autoPanSpeed: E, autoPanOnNodeDrag: N } = t();
      if (!N) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [$, P] = xs(u, f, E);
      ($ !== 0 || P !== 0) && (i.x = (i.x ?? 0) - $ / L[2], i.y = (i.y ?? 0) - P / L[2], await H({ x: $, y: P }) && C(i)), s = requestAnimationFrame(R);
    }
    function O(L) {
      const { nodeLookup: H, multiSelectionActive: E, nodesDraggable: N, transform: $, snapGrid: P, snapToGrid: B, selectNodesOnDrag: T, onNodeDragStart: q, onSelectionDragStart: z, unselectNodesAndEdges: Z } = t();
      d = !0, (!T || !b) && !E && S && (H.get(S)?.selected || Z()), b && T && S && e?.(S);
      const re = sn(L.sourceEvent, { transform: $, snapGrid: P, snapToGrid: B, containerBounds: f });
      if (i = re, o = o1(H, N, re, S), o.size > 0 && (n || q || !S && z)) {
        const [ne, W] = Oi({
          nodeId: S,
          dragItems: o,
          nodeLookup: H
        });
        n?.(L.sourceEvent, o, ne, W), q?.(L.sourceEvent, ne, W), S || z?.(L.sourceEvent, W);
      }
    }
    const D = ad().clickDistance(I).on("start", (L) => {
      const { domNode: H, nodeDragThreshold: E, transform: N, snapGrid: $, snapToGrid: P } = t();
      f = H?.getBoundingClientRect() || null, m = !1, v = !1, g = L.sourceEvent, E === 0 && O(L), i = sn(L.sourceEvent, { transform: N, snapGrid: $, snapToGrid: P, containerBounds: f }), u = He(L.sourceEvent, f);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: H, transform: E, snapGrid: N, snapToGrid: $, nodeDragThreshold: P, nodeLookup: B } = t(), T = sn(L.sourceEvent, { transform: E, snapGrid: N, snapToGrid: $, containerBounds: f });
      if (g = L.sourceEvent, (L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !B.has(S)) && (m = !0), !m) {
        if (!l && H && d && (l = !0, R()), !d) {
          const q = He(L.sourceEvent, f), z = q.x - u.x, Z = q.y - u.y;
          Math.sqrt(z * z + Z * Z) > P && O(L);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && o && d && (u = He(L.sourceEvent, f), C(T));
      }
    }).on("end", (L) => {
      if (!d || m) {
        m && o.size > 0 && t().updateNodePositions(o, !1);
        return;
      }
      if (l = !1, d = !1, cancelAnimationFrame(s), o.size > 0) {
        const { nodeLookup: H, updateNodePositions: E, onNodeDragStop: N, onSelectionDragStop: $ } = t();
        if (v && (E(o, !1), v = !1), r || N || !S && $) {
          const [P, B] = Oi({
            nodeId: S,
            dragItems: o,
            nodeLookup: H,
            dragging: !1
          });
          r?.(L.sourceEvent, o, P, B), N?.(L.sourceEvent, P, B), S || $?.(L.sourceEvent, B);
        }
      }
    }).filter((L) => {
      const H = L.target;
      return !L.button && (!w || !xo(H, `.${w}`, _)) && (!x || xo(H, x, _));
    });
    c.call(D);
  }
  function y() {
    c?.on(".drag", null);
  }
  return {
    update: h,
    destroy: y
  };
}
function c1(e, t, n) {
  const a = [], r = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    hn(r, Wt(i)) > 0 && a.push(i);
  return a;
}
const d1 = 250;
function f1(e, t, n, a) {
  let r = [], i = 1 / 0;
  const s = c1(e, n, t + d1);
  for (const o of s) {
    const l = [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (a.nodeId === u.nodeId && a.type === u.type && a.id === u.id)
        continue;
      const { x: f, y: d } = vt(o, u, u.position, !0), c = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(d - e.y, 2));
      c > t || (c < i ? (r = [{ ...u, x: f, y: d }], i = c) : c === i && r.push({ ...u, x: f, y: d }));
    }
  }
  if (!r.length)
    return null;
  if (r.length > 1) {
    const o = a.type === "source" ? "target" : "source";
    return r.find((l) => l.type === o) ?? r[0];
  }
  return r[0];
}
function Ld(e, t, n, a, r, i = !1) {
  const s = a.get(e);
  if (!s)
    return null;
  const o = r === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? o?.find((u) => u.id === n) : o?.[0]) ?? null;
  return l && i ? { ...l, ...vt(s, l, l.position, !0) } : l;
}
function Od(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function h1(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Bd = () => !0;
function p1(e, { connectionMode: t, connectionRadius: n, handleId: a, nodeId: r, edgeUpdaterType: i, isTarget: s, domNode: o, nodeLookup: l, lib: u, autoPanOnConnect: f, flowId: d, panBy: c, cancelConnection: m, onConnectStart: v, onConnect: g, onConnectEnd: h, isValidConnection: y = Bd, onReconnectEnd: w, updateConnection: x, getTransform: _, getFromHandle: b, autoPanSpeed: S, dragThreshold: I = 1, handleDomNode: C }) {
  const R = Ed(e.target);
  let O = 0, D;
  const { x: L, y: H } = He(e), E = Od(i, C), N = o?.getBoundingClientRect();
  let $ = !1;
  if (!N || !E)
    return;
  const P = Ld(r, E, a, l, t);
  if (!P)
    return;
  let B = He(e, N), T = !1, q = null, z = !1, Z = null;
  function re() {
    if (!f || !N)
      return;
    const [le, G] = xs(B, N, S);
    c({ x: le, y: G }), O = requestAnimationFrame(re);
  }
  const ne = {
    ...P,
    nodeId: r,
    type: E,
    position: P.position
  }, W = l.get(r);
  let J = {
    inProgress: !0,
    isValid: null,
    from: vt(W, ne, se.Left, !0),
    fromHandle: ne,
    fromPosition: ne.position,
    fromNode: W,
    to: B,
    toHandle: null,
    toPosition: io[ne.position],
    toNode: null,
    pointer: B
  };
  function F() {
    $ = !0, x(J), v?.(e, { nodeId: r, handleId: a, handleType: E });
  }
  I === 0 && F();
  function ee(le) {
    if (!$) {
      const { x: be, y: A } = He(le), M = be - L, k = A - H;
      if (!(M * M + k * k > I * I))
        return;
      F();
    }
    if (!b() || !ne) {
      ue(le);
      return;
    }
    const G = _();
    B = He(le, N), D = f1(Xt(B, G, !1, [1, 1]), n, l, ne), T || (re(), T = !0);
    const j = Fd(le, {
      handle: D,
      connectionMode: t,
      fromNodeId: r,
      fromHandleId: a,
      fromType: s ? "target" : "source",
      isValidConnection: y,
      doc: R,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = j.handleDomNode, q = j.connection, z = h1(!!D, j.isValid);
    const ae = l.get(r), te = ae ? vt(ae, ne, se.Left, !0) : J.from, de = {
      ...J,
      from: te,
      isValid: z,
      to: j.toHandle && z ? Gt({ x: j.toHandle.x, y: j.toHandle.y }, G) : B,
      toHandle: j.toHandle,
      toPosition: z && j.toHandle ? j.toHandle.position : io[ne.position],
      toNode: j.toHandle ? l.get(j.toHandle.nodeId) : null,
      pointer: B
    };
    x(de), J = de;
  }
  function ue(le) {
    if (!("touches" in le && le.touches.length > 0)) {
      if ($) {
        (D || Z) && q && z && g?.(q);
        const { inProgress: G, ...j } = J, ae = {
          ...j,
          toPosition: J.toHandle ? J.toPosition : null
        };
        h?.(le, ae), i && w?.(le, ae);
      }
      m(), cancelAnimationFrame(O), T = !1, z = !1, q = null, Z = null, R.removeEventListener("mousemove", ee), R.removeEventListener("mouseup", ue), R.removeEventListener("touchmove", ee), R.removeEventListener("touchend", ue);
    }
  }
  R.addEventListener("mousemove", ee), R.addEventListener("mouseup", ue), R.addEventListener("touchmove", ee), R.addEventListener("touchend", ue);
}
function Fd(e, { handle: t, connectionMode: n, fromNodeId: a, fromHandleId: r, fromType: i, doc: s, lib: o, flowId: l, isValidConnection: u = Bd, nodeLookup: f }) {
  const d = i === "target", c = t ? s.querySelector(`.${o}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: m, y: v } = He(e), g = s.elementFromPoint(m, v), h = g?.classList.contains(`${o}-flow__handle`) ? g : c, y = {
    handleDomNode: h,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (h) {
    const w = Od(void 0, h), x = h.getAttribute("data-nodeid"), _ = h.getAttribute("data-handleid"), b = h.classList.contains("connectable"), S = h.classList.contains("connectableend");
    if (!x || !w)
      return y;
    const I = {
      source: d ? x : a,
      sourceHandle: d ? _ : r,
      target: d ? a : x,
      targetHandle: d ? r : _
    };
    y.connection = I;
    const R = b && S && (n === jt.Strict ? d && w === "source" || !d && w === "target" : x !== a || _ !== r);
    y.isValid = R && u(I), y.toHandle = Ld(x, w, _, f, n, !0);
  }
  return y;
}
const ns = {
  onPointerDown: p1,
  isValid: Fd
};
function g1({ domNode: e, panZoom: t, getTransform: n, getViewScale: a }) {
  const r = ke(e);
  function i({ translateExtent: o, width: l, height: u, zoomStep: f = 1, pannable: d = !0, zoomable: c = !0, inversePan: m = !1 }) {
    const v = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), b = x.sourceEvent.ctrlKey && pn() ? 10 : 1, S = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * f, I = _[2] * Math.pow(2, S * b);
      t.scaleTo(I);
    };
    let g = [0, 0];
    const h = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (g = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, y = (x) => {
      const _ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const b = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], S = [b[0] - g[0], b[1] - g[1]];
      g = b;
      const I = a() * Math.max(_[2], Math.log(_[2])) * (m ? -1 : 1), C = {
        x: _[0] - S[0] * I,
        y: _[1] - S[1] * I
      }, R = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: C.x,
        y: C.y,
        zoom: _[2]
      }, R, o);
    }, w = hd().on("start", h).on("zoom", d ? y : null).on("zoom.wheel", c ? v : null);
    r.call(w, {});
  }
  function s() {
    r.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Be
  };
}
const Qa = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Bi = ({ x: e, y: t, zoom: n }) => Ya.translate(e, t).scale(n), Ht = (e, t) => e.target.closest(`.${t}`), Hd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), m1 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Fi = (e, t = 0, n = m1, a = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || a(), r ? e.transition().duration(t).ease(n).on("end", a) : e;
}, Zd = (e) => {
  const t = e.ctrlKey && pn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function v1({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: a, panOnScrollMode: r, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: o, onPanZoom: l, onPanZoomEnd: u }) {
  return (f) => {
    if (Ht(f, t))
      return f.ctrlKey && f.preventDefault(), !1;
    f.preventDefault(), f.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (f.ctrlKey && s) {
      const h = Be(f), y = Zd(f), w = d * Math.pow(2, y);
      a.scaleTo(n, w, h, f);
      return;
    }
    const c = f.deltaMode === 1 ? 20 : 1;
    let m = r === ht.Vertical ? 0 : f.deltaX * c, v = r === ht.Horizontal ? 0 : f.deltaY * c;
    !pn() && f.shiftKey && r !== ht.Vertical && (m = f.deltaY * c, v = 0), a.translateBy(
      n,
      -(m / d) * i,
      -(v / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const g = Qa(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(f, g), e.panScrollTimeout = setTimeout(() => {
      u?.(f, g), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, o?.(f, g));
  };
}
function x1({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(a, r) {
    const i = a.type === "wheel", s = !t && i && !a.ctrlKey, o = Ht(a, e);
    if (a.ctrlKey && i && o && a.preventDefault(), s || o)
      return null;
    a.preventDefault(), n.call(this, a, r);
  };
}
function y1({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (a) => {
    if (a.sourceEvent?.internal)
      return;
    const r = Qa(a.transform);
    e.mouseButton = a.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = r, a.sourceEvent?.type === "mousedown" && t(!0), n && n?.(a.sourceEvent, r);
  };
}
function _1({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: a, onPanZoom: r }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Hd(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || a([i.transform.x, i.transform.y, i.transform.k]), r && !i.sourceEvent?.internal && r?.(i.sourceEvent, Qa(i.transform));
  };
}
function w1({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: a, onPanZoomEnd: r, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Hd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, a(!1), r)) {
      const o = Qa(s.transform);
      e.prevViewport = o, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          r?.(s.sourceEvent, o);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function S1({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: a, panOnScroll: r, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: o, noPanClassName: l, lib: u, connectionInProgress: f }) {
  return (d) => {
    const c = e || t, m = n && d.ctrlKey, v = d.type === "wheel";
    if (d.button === 1 && d.type === "mousedown" && (Ht(d, `${u}-flow__node`) || Ht(d, `${u}-flow__edge`)))
      return !0;
    if (!a && !c && !r && !i && !n || s || f && !v || Ht(d, o) && v || Ht(d, l) && (!v || r && v && !e) || !n && d.ctrlKey && v)
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!c && !r && !m && v || !a && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(a) && !a.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(a) && a.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || v) && g;
  };
}
function b1({ domNode: e, minZoom: t, maxZoom: n, translateExtent: a, viewport: r, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: o, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = hd().scaleExtent([t, n]).translateExtent(a), c = ke(e).call(d);
  w({
    x: r.x,
    y: r.y,
    zoom: Vt(r.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], a);
  const m = c.on("wheel.zoom"), v = c.on("dblclick.zoom");
  d.wheelDelta(Zd);
  async function g(D, L) {
    return c ? new Promise((H) => {
      d?.interpolate(L?.interpolate === "linear" ? Pi : Ea).transform(Fi(c, L?.duration, L?.ease, () => H(!0)), D);
    }) : !1;
  }
  function h({ noWheelClassName: D, noPanClassName: L, onPaneContextMenu: H, userSelectionActive: E, panOnScroll: N, panOnDrag: $, panOnScrollMode: P, panOnScrollSpeed: B, preventScrolling: T, zoomOnPinch: q, zoomOnScroll: z, zoomOnDoubleClick: Z, zoomActivationKeyPressed: re, lib: ne, onTransformChange: W, connectionInProgress: Q, paneClickDistance: J, selectionOnDrag: F }) {
    E && !u.isZoomingOrPanning && y();
    const ee = N && !re && !E;
    d.clickDistance(F ? 1 / 0 : !Fe(J) || J < 0 ? 0 : J);
    const ue = ee ? v1({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: c,
      d3Zoom: d,
      panOnScrollMode: P,
      panOnScrollSpeed: B,
      zoomOnPinch: q,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: o
    }) : x1({
      noWheelClassName: D,
      preventScrolling: T,
      d3ZoomHandler: m
    });
    c.on("wheel.zoom", ue, { passive: !1 });
    const le = y1({
      zoomPanValues: u,
      onDraggingChange: l,
      onPanZoomStart: s
    });
    d.on("start", le);
    const G = _1({
      zoomPanValues: u,
      panOnDrag: $,
      onPaneContextMenu: !!H,
      onPanZoom: i,
      onTransformChange: W
    });
    d.on("zoom", G);
    const j = w1({
      zoomPanValues: u,
      panOnDrag: $,
      panOnScroll: N,
      onPaneContextMenu: H,
      onPanZoomEnd: o,
      onDraggingChange: l
    });
    d.on("end", j);
    const ae = S1({
      zoomActivationKeyPressed: re,
      panOnDrag: $,
      zoomOnScroll: z,
      panOnScroll: N,
      zoomOnDoubleClick: Z,
      zoomOnPinch: q,
      userSelectionActive: E,
      noPanClassName: L,
      noWheelClassName: D,
      lib: ne,
      connectionInProgress: Q
    });
    d.filter(ae), Z ? c.on("dblclick.zoom", v) : c.on("dblclick.zoom", null);
  }
  function y() {
    d.on("zoom", null);
  }
  async function w(D, L, H) {
    const E = Bi(D), N = d?.constrain()(E, L, H);
    return N && await g(N), N;
  }
  async function x(D, L) {
    const H = Bi(D);
    return await g(H, L), H;
  }
  function _(D) {
    if (c) {
      const L = Bi(D), H = c.property("__zoom");
      (H.k !== D.zoom || H.x !== D.x || H.y !== D.y) && d?.transform(c, L, null, { sync: !0 });
    }
  }
  function b() {
    const D = c ? fd(c.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  async function S(D, L) {
    return c ? new Promise((H) => {
      d?.interpolate(L?.interpolate === "linear" ? Pi : Ea).scaleTo(Fi(c, L?.duration, L?.ease, () => H(!0)), D);
    }) : !1;
  }
  async function I(D, L) {
    return c ? new Promise((H) => {
      d?.interpolate(L?.interpolate === "linear" ? Pi : Ea).scaleBy(Fi(c, L?.duration, L?.ease, () => H(!0)), D);
    }) : !1;
  }
  function C(D) {
    d?.scaleExtent(D);
  }
  function R(D) {
    d?.translateExtent(D);
  }
  function O(D) {
    const L = !Fe(D) || D < 0 ? 0 : D;
    d?.clickDistance(L);
  }
  return {
    update: h,
    destroy: y,
    setViewport: x,
    setViewportConstrained: w,
    getViewport: b,
    scaleTo: S,
    scaleBy: I,
    setScaleExtent: C,
    setTranslateExtent: R,
    syncViewport: _,
    setClickDistance: O
  };
}
var Kt;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Kt || (Kt = {}));
function A1({ width: e, prevWidth: t, height: n, prevHeight: a, affectsX: r, affectsY: i }) {
  const s = e - t, o = n - a, l = [s > 0 ? 1 : s < 0 ? -1 : 0, o > 0 ? 1 : o < 0 ? -1 : 0];
  return s && r && (l[0] = l[0] * -1), o && i && (l[1] = l[1] * -1), l;
}
function yo(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), a = e.includes("left"), r = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: a,
    affectsY: r
  };
}
function nt(e, t) {
  return Math.max(0, t - e);
}
function rt(e, t) {
  return Math.max(0, e - t);
}
function Ln(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function _o(e, t) {
  return e ? !t : t;
}
function E1(e, t, n, a, r, i, s, o) {
  let { affectsX: l, affectsY: u } = t;
  const { isHorizontal: f, isVertical: d } = t, c = f && d, { xSnapped: m, ySnapped: v } = n, { minWidth: g, maxWidth: h, minHeight: y, maxHeight: w } = a, { x, y: _, width: b, height: S, aspectRatio: I } = e;
  let C = Math.floor(f ? m - e.pointerX : 0), R = Math.floor(d ? v - e.pointerY : 0);
  const O = b + (l ? -C : C), D = S + (u ? -R : R), L = -i[0] * b, H = -i[1] * S;
  let E = Ln(O, g, h), N = Ln(D, y, w);
  if (s) {
    let B = 0, T = 0;
    l && C < 0 ? B = nt(x + C + L, s[0][0]) : !l && C > 0 && (B = rt(x + O + L, s[1][0])), u && R < 0 ? T = nt(_ + R + H, s[0][1]) : !u && R > 0 && (T = rt(_ + D + H, s[1][1])), E = Math.max(E, B), N = Math.max(N, T);
  }
  if (o) {
    let B = 0, T = 0;
    l && C > 0 ? B = rt(x + C, o[0][0]) : !l && C < 0 && (B = nt(x + O, o[1][0])), u && R > 0 ? T = rt(_ + R, o[0][1]) : !u && R < 0 && (T = nt(_ + D, o[1][1])), E = Math.max(E, B), N = Math.max(N, T);
  }
  if (r) {
    if (f) {
      const B = Ln(O / I, y, w) * I;
      if (E = Math.max(E, B), s) {
        let T = 0;
        !l && !u || l && !u && c ? T = rt(_ + H + O / I, s[1][1]) * I : T = nt(_ + H + (l ? C : -C) / I, s[0][1]) * I, E = Math.max(E, T);
      }
      if (o) {
        let T = 0;
        !l && !u || l && !u && c ? T = nt(_ + O / I, o[1][1]) * I : T = rt(_ + (l ? C : -C) / I, o[0][1]) * I, E = Math.max(E, T);
      }
    }
    if (d) {
      const B = Ln(D * I, g, h) / I;
      if (N = Math.max(N, B), s) {
        let T = 0;
        !l && !u || u && !l && c ? T = rt(x + D * I + L, s[1][0]) / I : T = nt(x + (u ? R : -R) * I + L, s[0][0]) / I, N = Math.max(N, T);
      }
      if (o) {
        let T = 0;
        !l && !u || u && !l && c ? T = nt(x + D * I, o[1][0]) / I : T = rt(x + (u ? R : -R) * I, o[0][0]) / I, N = Math.max(N, T);
      }
    }
  }
  R = R + (R < 0 ? N : -N), C = C + (C < 0 ? E : -E), r && (c ? O > D * I ? R = (_o(l, u) ? -C : C) / I : C = (_o(l, u) ? -R : R) * I : f ? (R = C / I, u = l) : (C = R * I, l = u));
  const $ = l ? x + C : x, P = u ? _ + R : _;
  return {
    width: b + (l ? -C : C),
    height: S + (u ? -R : R),
    x: i[0] * C * (l ? -1 : 1) + $,
    y: i[1] * R * (u ? -1 : 1) + P
  };
}
const qd = { width: 0, height: 0, x: 0, y: 0 }, M1 = {
  ...qd,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function I1(e, t, n) {
  const a = t.position.x + e.position.x, r = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, o = n[0] * i, l = n[1] * s;
  return [
    [a - o, r - l],
    [a + i - o, r + s - l]
  ];
}
function C1({ domNode: e, nodeId: t, getStoreItems: n, onChange: a, onEnd: r }) {
  const i = ke(e);
  let s = {
    controlDirection: yo("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function o({ controlPosition: u, boundaries: f, keepAspectRatio: d, resizeDirection: c, onResizeStart: m, onResize: v, onResizeEnd: g, shouldResize: h }) {
    let y = { ...qd }, w = { ...M1 };
    s = {
      boundaries: f,
      resizeDirection: c,
      keepAspectRatio: d,
      controlDirection: yo(u)
    };
    let x, _ = null, b = [], S, I, C, R = !1;
    const O = ad().on("start", (D) => {
      const { nodeLookup: L, transform: H, snapGrid: E, snapToGrid: N, nodeOrigin: $, paneDomNode: P } = n();
      if (x = L.get(t), !x)
        return;
      _ = P?.getBoundingClientRect() ?? null;
      const { xSnapped: B, ySnapped: T } = sn(D.sourceEvent, {
        transform: H,
        snapGrid: E,
        snapToGrid: N,
        containerBounds: _
      });
      y = {
        width: x.measured.width ?? 0,
        height: x.measured.height ?? 0,
        x: x.position.x ?? 0,
        y: x.position.y ?? 0
      }, w = {
        ...y,
        pointerX: B,
        pointerY: T,
        aspectRatio: y.width / y.height
      }, S = void 0, I = mt(x.extent) ? x.extent : void 0, x.parentId && (x.extent === "parent" || x.expandParent) && (S = L.get(x.parentId)), S && x.extent === "parent" && (I = [
        [0, 0],
        [S.measured.width, S.measured.height]
      ]), b = [], C = void 0;
      for (const [q, z] of L)
        if (z.parentId === t && (b.push({
          id: q,
          position: { ...z.position },
          extent: z.extent
        }), z.extent === "parent" || z.expandParent)) {
          const Z = I1(z, x, z.origin ?? $);
          C ? C = [
            [Math.min(Z[0][0], C[0][0]), Math.min(Z[0][1], C[0][1])],
            [Math.max(Z[1][0], C[1][0]), Math.max(Z[1][1], C[1][1])]
          ] : C = Z;
        }
      m?.(D, { ...y });
    }).on("drag", (D) => {
      const { transform: L, snapGrid: H, snapToGrid: E, nodeOrigin: N } = n(), $ = sn(D.sourceEvent, {
        transform: L,
        snapGrid: H,
        snapToGrid: E,
        containerBounds: _
      }), P = [];
      if (!x)
        return;
      const { x: B, y: T, width: q, height: z } = y, Z = {}, re = x.origin ?? N, { width: ne, height: W, x: Q, y: J } = E1(w, s.controlDirection, $, s.boundaries, s.keepAspectRatio, re, I, C), F = ne !== q, ee = W !== z, ue = Q !== B && F, le = J !== T && ee;
      if (!ue && !le && !F && !ee)
        return;
      if ((ue || le || re[0] === 1 || re[1] === 1) && (Z.x = ue ? Q : y.x, Z.y = le ? J : y.y, y.x = Z.x, y.y = Z.y, b.length > 0)) {
        const te = Q - B, de = J - T;
        for (const be of b)
          be.position = {
            x: be.position.x - te + re[0] * (ne - q),
            y: be.position.y - de + re[1] * (W - z)
          }, P.push(be);
      }
      if ((F || ee) && (Z.width = F && (!s.resizeDirection || s.resizeDirection === "horizontal") ? ne : y.width, Z.height = ee && (!s.resizeDirection || s.resizeDirection === "vertical") ? W : y.height, y.width = Z.width, y.height = Z.height), S && x.expandParent) {
        const te = re[0] * (Z.width ?? 0);
        Z.x && Z.x < te && (y.x = te, w.x = w.x - (Z.x - te));
        const de = re[1] * (Z.height ?? 0);
        Z.y && Z.y < de && (y.y = de, w.y = w.y - (Z.y - de));
      }
      const G = A1({
        width: y.width,
        prevWidth: q,
        height: y.height,
        prevHeight: z,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), j = { ...y, direction: G };
      h?.(D, j) !== !1 && (R = !0, v?.(D, j), a(Z, P));
    }).on("end", (D) => {
      R && (g?.(D, { ...y }), r?.({ ...y }), R = !1);
    });
    i.call(O);
  }
  function l() {
    i.on(".drag", null);
  }
  return {
    update: o,
    destroy: l
  };
}
var Hi = { exports: {} }, Zi = {};
var wo;
function N1() {
  if (wo) return Zi;
  wo = 1;
  var e = uh, t = Mh();
  function n(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var a = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, o = e.useMemo, l = e.useDebugValue;
  return Zi.useSyncExternalStoreWithSelector = function(u, f, d, c, m) {
    var v = i(null);
    if (v.current === null) {
      var g = { hasValue: !1, value: null };
      v.current = g;
    } else g = v.current;
    v = o(
      function() {
        function y(S) {
          if (!w) {
            if (w = !0, x = S, S = c(S), m !== void 0 && g.hasValue) {
              var I = g.value;
              if (m(I, S))
                return _ = I;
            }
            return _ = S;
          }
          if (I = _, a(x, S)) return I;
          var C = c(S);
          return m !== void 0 && m(I, C) ? (x = S, I) : (x = S, _ = C);
        }
        var w = !1, x, _, b = d === void 0 ? null : d;
        return [
          function() {
            return y(f());
          },
          b === null ? void 0 : function() {
            return y(b());
          }
        ];
      },
      [f, d, c, m]
    );
    var h = r(u, v[0], v[1]);
    return s(
      function() {
        g.hasValue = !0, g.value = h;
      },
      [h]
    ), l(h), h;
  }, Zi;
}
var So;
function R1() {
  return So || (So = 1, Hi.exports = N1()), Hi.exports;
}
var $1 = R1();
const D1 = /* @__PURE__ */ ec($1), P1 = {}, bo = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), a = (f, d) => {
    const c = typeof f == "function" ? f(t) : f;
    if (!Object.is(c, t)) {
      const m = t;
      t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((v) => v(t, m));
    }
  }, r = () => t, l = { setState: a, getState: r, getInitialState: () => u, subscribe: (f) => (n.add(f), () => n.delete(f)), destroy: () => {
    (P1 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(a, r, l);
  return l;
}, k1 = (e) => e ? bo(e) : bo, { useDebugValue: T1 } = Ne, { useSyncExternalStoreWithSelector: L1 } = D1, O1 = (e) => e;
function zd(e, t = O1, n) {
  const a = L1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return T1(a), a;
}
const Ao = (e, t) => {
  const n = k1(e), a = (r, i = t) => zd(n, r, i);
  return Object.assign(a, n), a;
}, B1 = (e, t) => e ? Ao(e, t) : Ao;
function _e(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [a, r] of e)
      if (!Object.is(r, t.get(a)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const a of e)
      if (!t.has(a))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const a of n)
    if (!Object.prototype.hasOwnProperty.call(t, a) || !Object.is(e[a], t[a]))
      return !1;
  return !0;
}
const ei = as(null), F1 = ei.Provider, Ud = Ze.error001("react");
function me(e, t) {
  const n = xn(ei);
  if (n === null)
    throw new Error(Ud);
  return zd(n, e, t);
}
function Se() {
  const e = xn(ei);
  if (e === null)
    throw new Error(Ud);
  return Ce(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Eo = { display: "none" }, H1 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, jd = "react-flow__node-desc", Vd = "react-flow__edge-desc", Z1 = "react-flow__aria-live", q1 = (e) => e.ariaLiveMessage, z1 = (e) => e.ariaLabelConfig;
function U1({ rfId: e }) {
  const t = me(q1);
  return p.jsx("div", { id: `${Z1}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: H1, children: t });
}
function j1({ rfId: e, disableKeyboardA11y: t }) {
  const n = me(z1);
  return p.jsxs(p.Fragment, { children: [p.jsx("div", { id: `${jd}-${e}`, style: Eo, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), p.jsx("div", { id: `${Vd}-${e}`, style: Eo, children: n["edge.a11yDescription.default"] }), !t && p.jsx(U1, { rfId: e })] });
}
const ti = we(({ position: e = "top-left", children: t, className: n, style: a, ...r }, i) => {
  const s = `${e}`.split("-");
  return p.jsx("div", { className: Ie(["react-flow__panel", n, ...s]), style: a, ref: i, ...r, children: t });
});
ti.displayName = "Panel";
function V1({ proOptions: e, position: t = "bottom-right" }) {
  return e?.hideAttribution ? null : p.jsx(ti, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: p.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const W1 = (e) => {
  const t = [], n = [];
  for (const [, a] of e.nodeLookup)
    a.selected && t.push(a.internals.userNode);
  for (const [, a] of e.edgeLookup)
    a.selected && n.push(a);
  return { selectedNodes: t, selectedEdges: n };
}, On = (e) => e.id;
function G1(e, t) {
  return _e(e.selectedNodes.map(On), t.selectedNodes.map(On)) && _e(e.selectedEdges.map(On), t.selectedEdges.map(On));
}
function K1({ onSelectionChange: e }) {
  const t = Se(), { selectedNodes: n, selectedEdges: a } = me(W1, G1);
  return fe(() => {
    const r = { nodes: n, edges: a };
    e?.(r), t.getState().onSelectionChangeHandlers.forEach((i) => i(r));
  }, [n, a, e]), null;
}
const Y1 = (e) => !!e.onSelectionChangeHandlers;
function X1({ onSelectionChange: e }) {
  const t = me(Y1);
  return e || t ? p.jsx(K1, { onSelectionChange: e }) : null;
}
const Wd = [0, 0], J1 = { x: 0, y: 0, zoom: 1 }, Q1 = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Mo = [...Q1, "rfId"], ex = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Io = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: dn,
  nodeOrigin: Wd,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function tx(e) {
  const { setNodes: t, setEdges: n, setMinZoom: a, setMaxZoom: r, setTranslateExtent: i, setNodeExtent: s, reset: o, setDefaultNodesAndEdges: l } = me(ex, _e), u = Se();
  fe(() => (l(e.defaultNodes, e.defaultEdges), () => {
    f.current = Io, o();
  }), []);
  const f = oe(Io);
  return fe(
    () => {
      for (const d of Mo) {
        const c = e[d], m = f.current[d];
        c !== m && (typeof e[d] > "u" || (d === "nodes" ? t(c) : d === "edges" ? n(c) : d === "minZoom" ? a(c) : d === "maxZoom" ? r(c) : d === "translateExtent" ? i(c) : d === "nodeExtent" ? s(c) : d === "ariaLabelConfig" ? u.setState({ ariaLabelConfig: Zv(c) }) : d === "fitView" ? u.setState({ fitViewQueued: c }) : d === "fitViewOptions" ? u.setState({ fitViewOptions: c }) : u.setState({ [d]: c })));
      }
      f.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Mo.map((d) => e[d])
  ), null;
}
function Co() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function nx(e) {
  const [t, n] = pe(e === "system" ? null : e);
  return fe(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const a = Co(), r = () => n(a?.matches ? "dark" : "light");
    return r(), a?.addEventListener("change", r), () => {
      a?.removeEventListener("change", r);
    };
  }, [e]), t !== null ? t : Co()?.matches ? "dark" : "light";
}
const No = typeof document < "u" ? document : null;
function gn(e = null, t = { target: No, actInsideInputWithModifier: !0 }) {
  const [n, a] = pe(!1), r = oe(!1), i = oe(/* @__PURE__ */ new Set([])), [s, o] = Ce(() => {
    if (e !== null) {
      const u = (Array.isArray(e) ? e : [e]).filter((d) => typeof d == "string").map((d) => d.replace("+", `
`).replace(`

`, `
+`).split(`
`)), f = u.reduce((d, c) => d.concat(...c), []);
      return [u, f];
    }
    return [[], []];
  }, [e]);
  return fe(() => {
    const l = t?.target ?? No, u = t?.actInsideInputWithModifier ?? !0;
    if (e !== null) {
      const f = (m) => {
        if (r.current = m.ctrlKey || m.metaKey || m.shiftKey || m.altKey, (!r.current || r.current && !u) && Md(m))
          return !1;
        const g = $o(m.code, o);
        if (i.current.add(m[g]), Ro(s, i.current, !1)) {
          const h = m.composedPath?.()?.[0] || m.target, y = h?.nodeName === "BUTTON" || h?.nodeName === "A";
          t.preventDefault !== !1 && (r.current || !y) && m.preventDefault(), a(!0);
        }
      }, d = (m) => {
        const v = $o(m.code, o);
        Ro(s, i.current, !0) ? (a(!1), i.current.clear()) : i.current.delete(m[v]), m.key === "Meta" && i.current.clear(), r.current = !1;
      }, c = () => {
        i.current.clear(), a(!1);
      };
      return l?.addEventListener("keydown", f), l?.addEventListener("keyup", d), window.addEventListener("blur", c), window.addEventListener("contextmenu", c), () => {
        l?.removeEventListener("keydown", f), l?.removeEventListener("keyup", d), window.removeEventListener("blur", c), window.removeEventListener("contextmenu", c);
      };
    }
  }, [e, a]), n;
}
function Ro(e, t, n) {
  return e.filter((a) => n || a.length === t.size).some((a) => a.every((r) => t.has(r)));
}
function $o(e, t) {
  return t.includes(e) ? "code" : "key";
}
const rx = () => {
  const e = Se();
  return Ce(() => ({
    zoomIn: async (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, t) : !1;
    },
    zoomOut: async (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, t) : !1;
    },
    zoomTo: async (t, n) => {
      const { panZoom: a } = e.getState();
      return a ? a.scaleTo(t, n) : !1;
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [a, r, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? a,
        y: t.y ?? r,
        zoom: t.zoom ?? i
      }, n), !0) : !1;
    },
    getViewport: () => {
      const [t, n, a] = e.getState().transform;
      return { x: t, y: n, zoom: a };
    },
    setCenter: async (t, n, a) => e.getState().setCenter(t, n, a),
    fitBounds: async (t, n) => {
      const { width: a, height: r, minZoom: i, maxZoom: s, panZoom: o } = e.getState(), l = ys(t, a, r, i, s, n?.padding ?? 0.1);
      return o ? (await o.setViewport(l, {
        duration: n?.duration,
        ease: n?.ease,
        interpolate: n?.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: a, snapGrid: r, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: o, y: l } = s.getBoundingClientRect(), u = {
        x: t.x - o,
        y: t.y - l
      }, f = n.snapGrid ?? r, d = n.snapToGrid ?? i;
      return Xt(u, a, d, f);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: a } = e.getState();
      if (!a)
        return t;
      const { x: r, y: i } = a.getBoundingClientRect(), s = Gt(t, n);
      return {
        x: s.x + r,
        y: s.y + i
      };
    }
  }), []);
};
function Gd(e, t) {
  const n = [], a = /* @__PURE__ */ new Map(), r = [];
  for (const i of e)
    if (i.type === "add") {
      r.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      a.set(i.id, [i]);
    else {
      const s = a.get(i.id);
      s ? s.push(i) : a.set(i.id, [i]);
    }
  for (const i of t) {
    const s = a.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const o = { ...i };
    for (const l of s)
      ax(l, o);
    n.push(o);
  }
  return r.length && r.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function ax(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured = {
        ...e.dimensions
      }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function ix(e, t) {
  return Gd(e, t);
}
function sx(e, t) {
  return Gd(e, t);
}
function ct(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Zt(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const a = [];
  for (const [r, i] of e) {
    const s = t.has(r);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), a.push(ct(i.id, s)));
  }
  return a;
}
function Do({ items: e = [], lookup: t }) {
  const n = [], a = new Map(e.map((r) => [r.id, r]));
  for (const [r, i] of e.entries()) {
    const s = t.get(i.id), o = s?.internals?.userNode ?? s;
    o !== void 0 && o !== i && n.push({ id: i.id, item: i, type: "replace" }), o === void 0 && n.push({ item: i, type: "add", index: r });
  }
  for (const [r] of t)
    a.get(r) === void 0 && n.push({ id: r, type: "remove" });
  return n;
}
function Po(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const ox = Sd();
function lx(e, t, n = {}) {
  return Wv(e, t, {
    ...n,
    onError: n.onError ?? ox
  });
}
const ko = (e) => Dv(e), ux = (e) => xd(e);
function Kd(e) {
  return we(e);
}
const cx = typeof window < "u" ? dh : fe;
function To(e) {
  const [t, n] = pe(BigInt(0)), [a] = pe(() => dx(() => n((r) => r + BigInt(1))));
  return cx(() => {
    const r = a.get();
    r.length && (e(r), a.reset());
  }, [t]), a;
}
function dx(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const Yd = as(null);
function fx({ children: e }) {
  const t = Se(), n = ge((o) => {
    const { nodes: l = [], setNodes: u, hasDefaultNodes: f, onNodesChange: d, nodeLookup: c, fitViewQueued: m, onNodesChangeMiddlewareMap: v } = t.getState();
    let g = l;
    for (const y of o)
      g = typeof y == "function" ? y(g) : y;
    let h = Do({
      items: g,
      lookup: c
    });
    for (const y of v.values())
      h = y(h);
    f && u(g), h.length > 0 ? d?.(h) : m && window.requestAnimationFrame(() => {
      const { fitViewQueued: y, nodes: w, setNodes: x } = t.getState();
      y && x(w);
    });
  }, []), a = To(n), r = ge((o) => {
    const { edges: l = [], setEdges: u, hasDefaultEdges: f, onEdgesChange: d, edgeLookup: c } = t.getState();
    let m = l;
    for (const v of o)
      m = typeof v == "function" ? v(m) : v;
    f ? u(m) : d && d(Do({
      items: m,
      lookup: c
    }));
  }, []), i = To(r), s = Ce(() => ({ nodeQueue: a, edgeQueue: i }), []);
  return p.jsx(Yd.Provider, { value: s, children: e });
}
function hx() {
  const e = xn(Yd);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const px = (e) => !!e.panZoom;
function ni() {
  const e = rx(), t = Se(), n = hx(), a = me(px), r = Ce(() => {
    const i = (d) => t.getState().nodeLookup.get(d), s = (d) => {
      n.nodeQueue.push(d);
    }, o = (d) => {
      n.edgeQueue.push(d);
    }, l = (d) => {
      const { nodeLookup: c, nodeOrigin: m } = t.getState(), v = ko(d) ? d : c.get(d.id), g = v.parentId ? Ad(v.position, v.measured, v.parentId, c, m) : v.position, h = {
        ...v,
        position: g,
        width: v.measured?.width ?? v.width,
        height: v.measured?.height ?? v.height
      };
      return Wt(h);
    }, u = (d, c, m = { replace: !1 }) => {
      s((v) => v.map((g) => {
        if (g.id === d) {
          const h = typeof c == "function" ? c(g) : c;
          return m.replace && ko(h) ? h : { ...g, ...h };
        }
        return g;
      }));
    }, f = (d, c, m = { replace: !1 }) => {
      o((v) => v.map((g) => {
        if (g.id === d) {
          const h = typeof c == "function" ? c(g) : c;
          return m.replace && ux(h) ? h : { ...g, ...h };
        }
        return g;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((d) => ({ ...d })),
      getNode: (d) => i(d)?.internals.userNode,
      getInternalNode: i,
      getEdges: () => {
        const { edges: d = [] } = t.getState();
        return d.map((c) => ({ ...c }));
      },
      getEdge: (d) => t.getState().edgeLookup.get(d),
      setNodes: s,
      setEdges: o,
      addNodes: (d) => {
        const c = Array.isArray(d) ? d : [d];
        n.nodeQueue.push((m) => [...m, ...c]);
      },
      addEdges: (d) => {
        const c = Array.isArray(d) ? d : [d];
        n.edgeQueue.push((m) => [...m, ...c]);
      },
      toObject: () => {
        const { nodes: d = [], edges: c = [], transform: m } = t.getState(), [v, g, h] = m;
        return {
          nodes: d.map((y) => ({ ...y })),
          edges: c.map((y) => ({ ...y })),
          viewport: {
            x: v,
            y: g,
            zoom: h
          }
        };
      },
      deleteElements: async ({ nodes: d = [], edges: c = [] }) => {
        const { nodes: m, edges: v, onNodesDelete: g, onEdgesDelete: h, triggerNodeChanges: y, triggerEdgeChanges: w, onDelete: x, onBeforeDelete: _ } = t.getState(), { nodes: b, edges: S } = await Ov({
          nodesToRemove: d,
          edgesToRemove: c,
          nodes: m,
          edges: v,
          onBeforeDelete: _
        }), I = S.length > 0, C = b.length > 0;
        if (I) {
          const R = S.map(Po);
          h?.(S), w(R);
        }
        if (C) {
          const R = b.map(Po);
          g?.(b), y(R);
        }
        return (C || I) && x?.({ nodes: b, edges: S }), { deletedNodes: b, deletedEdges: S };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (d, c = !0, m) => {
        const v = oo(d), g = v ? d : l(d), h = m !== void 0;
        return g ? (m || t.getState().nodes).filter((y) => {
          const w = t.getState().nodeLookup.get(y.id);
          if (w && !v && (y.id === d.id || !w.internals.positionAbsolute))
            return !1;
          const x = Wt(h ? y : w), _ = hn(x, g);
          return c && _ > 0 || _ >= x.width * x.height || _ >= g.width * g.height;
        }) : [];
      },
      isNodeIntersecting: (d, c, m = !0) => {
        const g = oo(d) ? d : l(d);
        if (!g)
          return !1;
        const h = hn(g, c);
        return m && h > 0 || h >= c.width * c.height || h >= g.width * g.height;
      },
      updateNode: u,
      updateNodeData: (d, c, m = { replace: !1 }) => {
        u(d, (v) => {
          const g = typeof c == "function" ? c(v) : c;
          return m.replace ? { ...v, data: g } : { ...v, data: { ...v.data, ...g } };
        }, m);
      },
      updateEdge: f,
      updateEdgeData: (d, c, m = { replace: !1 }) => {
        f(d, (v) => {
          const g = typeof c == "function" ? c(v) : c;
          return m.replace ? { ...v, data: g } : { ...v, data: { ...v.data, ...g } };
        }, m);
      },
      getNodesBounds: (d) => {
        const { nodeLookup: c, nodeOrigin: m } = t.getState();
        return Pv(d, { nodeLookup: c, nodeOrigin: m });
      },
      getHandleConnections: ({ type: d, id: c, nodeId: m }) => Array.from(t.getState().connectionLookup.get(`${m}-${d}${c ? `-${c}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: d, handleId: c, nodeId: m }) => Array.from(t.getState().connectionLookup.get(`${m}${d ? c ? `-${d}-${c}` : `-${d}` : ""}`)?.values() ?? []),
      fitView: async (d) => {
        const c = t.getState().fitViewResolver ?? Hv();
        return t.setState({ fitViewQueued: !0, fitViewOptions: d, fitViewResolver: c }), n.nodeQueue.push((m) => [...m]), c.promise;
      }
    };
  }, []);
  return Ce(() => ({
    ...r,
    ...e,
    viewportInitialized: a
  }), [a]);
}
const Lo = (e) => e.selected, gx = typeof window < "u" ? window : void 0;
function mx({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = Se(), { deleteElements: a } = ni(), r = gn(e, { actInsideInputWithModifier: !1 }), i = gn(t, { target: gx });
  fe(() => {
    if (r) {
      const { edges: s, nodes: o } = n.getState();
      a({ nodes: o.filter(Lo), edges: s.filter(Lo) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [r]), fe(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function vx(e) {
  const t = Se();
  fe(() => {
    const n = () => {
      if (!e.current || !(e.current.checkVisibility?.() ?? !0))
        return !1;
      const a = _s(e.current);
      (a.height === 0 || a.width === 0) && t.getState().onError?.("004", Ze.error004()), t.setState({ width: a.width || 500, height: a.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const a = new ResizeObserver(() => n());
      return a.observe(e.current), () => {
        window.removeEventListener("resize", n), a && e.current && a.unobserve(e.current);
      };
    }
  }, []);
}
const ri = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, xx = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function yx({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: a = !1, panOnScrollSpeed: r = 0.5, panOnScrollMode: i = ht.Free, zoomOnDoubleClick: s = !0, panOnDrag: o = !0, defaultViewport: l, translateExtent: u, minZoom: f, maxZoom: d, zoomActivationKeyCode: c, preventScrolling: m = !0, children: v, noWheelClassName: g, noPanClassName: h, onViewportChange: y, isControlledViewport: w, paneClickDistance: x, selectionOnDrag: _ }) {
  const b = Se(), S = oe(null), { userSelectionActive: I, lib: C, connectionInProgress: R } = me(xx, _e), O = gn(c), D = oe();
  vx(S);
  const L = ge((H) => {
    y?.({ x: H[0], y: H[1], zoom: H[2] }), w || b.setState({ transform: H });
  }, [y, w]);
  return fe(() => {
    if (S.current) {
      D.current = b1({
        domNode: S.current,
        minZoom: f,
        maxZoom: d,
        translateExtent: u,
        viewport: l,
        onDraggingChange: ($) => b.setState((P) => P.paneDragging === $ ? P : { paneDragging: $ }),
        onPanZoomStart: ($, P) => {
          const { onViewportChangeStart: B, onMoveStart: T } = b.getState();
          T?.($, P), B?.(P);
        },
        onPanZoom: ($, P) => {
          const { onViewportChange: B, onMove: T } = b.getState();
          T?.($, P), B?.(P);
        },
        onPanZoomEnd: ($, P) => {
          const { onViewportChangeEnd: B, onMoveEnd: T } = b.getState();
          T?.($, P), B?.(P);
        }
      });
      const { x: H, y: E, zoom: N } = D.current.getViewport();
      return b.setState({
        panZoom: D.current,
        transform: [H, E, N],
        domNode: S.current.closest(".react-flow")
      }), () => {
        D.current?.destroy();
      };
    }
  }, []), fe(() => {
    D.current?.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: a,
      panOnScrollSpeed: r,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: o,
      zoomActivationKeyPressed: O,
      preventScrolling: m,
      noPanClassName: h,
      userSelectionActive: I,
      noWheelClassName: g,
      lib: C,
      onTransformChange: L,
      connectionInProgress: R,
      selectionOnDrag: _,
      paneClickDistance: x
    });
  }, [
    e,
    t,
    n,
    a,
    r,
    i,
    s,
    o,
    O,
    m,
    h,
    I,
    g,
    C,
    L,
    R,
    _,
    x
  ]), p.jsx("div", { className: "react-flow__renderer", ref: S, style: ri, children: v });
}
const _x = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function wx() {
  const { userSelectionActive: e, userSelectionRect: t } = me(_x, _e);
  return e && t ? p.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const qi = (e, t) => (n) => {
  n.target === t.current && e?.(n);
}, Sx = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging,
  panBy: e.panBy,
  autoPanSpeed: e.autoPanSpeed
});
function bx({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = fn.Full, panOnDrag: a, autoPanOnSelection: r, paneClickDistance: i, selectionOnDrag: s, onSelectionStart: o, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: f, onPaneScroll: d, onPaneMouseEnter: c, onPaneMouseMove: m, onPaneMouseLeave: v, children: g }) {
  const h = oe(0), y = Se(), { userSelectionActive: w, elementsSelectable: x, dragging: _, connectionInProgress: b, panBy: S, autoPanSpeed: I } = me(Sx, _e), C = x && (e || w), R = oe(null), O = oe(), D = oe(/* @__PURE__ */ new Set()), L = oe(/* @__PURE__ */ new Set()), H = oe(!1), E = oe({ x: 0, y: 0 }), N = oe(!1), $ = (F) => {
    if (H.current || b) {
      H.current = !1;
      return;
    }
    u?.(F), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, P = (F) => {
    if (Array.isArray(a) && a?.includes(2)) {
      F.preventDefault();
      return;
    }
    f?.(F);
  }, B = d ? (F) => d(F) : void 0, T = (F) => {
    H.current && (F.stopPropagation(), H.current = !1);
  }, q = (F) => {
    const { domNode: ee, transform: ue } = y.getState();
    if (O.current = ee?.getBoundingClientRect(), !O.current)
      return;
    const le = F.target === R.current;
    if (!le && !!F.target.closest(".nokey") || !e || !(s && le || t) || F.button !== 0 || !F.isPrimary)
      return;
    F.target?.setPointerCapture?.(F.pointerId), H.current = !1;
    const { x: ae, y: te } = He(F.nativeEvent, O.current), de = Xt({ x: ae, y: te }, ue);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: de.x,
        startY: de.y,
        x: ae,
        y: te
      }
    }), le || (F.stopPropagation(), F.preventDefault());
  };
  function z(F, ee) {
    const { userSelectionRect: ue } = y.getState();
    if (!ue)
      return;
    const { transform: le, nodeLookup: G, edgeLookup: j, connectionLookup: ae, triggerNodeChanges: te, triggerEdgeChanges: de, defaultEdgeOptions: be } = y.getState(), A = { x: ue.startX, y: ue.startY }, { x: M, y: k } = Gt(A, le), U = {
      startX: A.x,
      startY: A.y,
      x: F < M ? F : M,
      y: ee < k ? ee : k,
      width: Math.abs(F - M),
      height: Math.abs(ee - k)
    }, V = D.current, K = L.current;
    D.current = new Set(vs(G, U, le, n === fn.Partial, !0).map((ce) => ce.id)), L.current = /* @__PURE__ */ new Set();
    const ie = be?.selectable ?? !0;
    for (const ce of D.current) {
      const he = ae.get(ce);
      if (he)
        for (const { edgeId: ve } of he.values()) {
          const Re = j.get(ve);
          Re && (Re.selectable ?? ie) && L.current.add(ve);
        }
    }
    if (!lo(V, D.current)) {
      const ce = Zt(G, D.current, !0);
      te(ce);
    }
    if (!lo(K, L.current)) {
      const ce = Zt(j, L.current);
      de(ce);
    }
    y.setState({
      userSelectionRect: U,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function Z() {
    if (!r || !O.current)
      return;
    const [F, ee] = xs(E.current, O.current, I);
    S({ x: F, y: ee }).then((ue) => {
      if (!H.current || !ue) {
        h.current = requestAnimationFrame(Z);
        return;
      }
      const { x: le, y: G } = E.current;
      z(le, G), h.current = requestAnimationFrame(Z);
    });
  }
  const re = () => {
    cancelAnimationFrame(h.current), h.current = 0, N.current = !1;
  };
  fe(() => () => re(), []);
  const ne = (F) => {
    const { userSelectionRect: ee, transform: ue, resetSelectedElements: le } = y.getState();
    if (!O.current || !ee)
      return;
    const { x: G, y: j } = He(F.nativeEvent, O.current);
    E.current = { x: G, y: j };
    const ae = Gt({ x: ee.startX, y: ee.startY }, ue);
    if (!H.current) {
      const te = t ? 0 : i;
      if (Math.hypot(G - ae.x, j - ae.y) <= te)
        return;
      le(), o?.(F);
    }
    H.current = !0, N.current || (Z(), N.current = !0), z(G, j);
  }, W = (F) => {
    F.button === 0 && (F.target?.releasePointerCapture?.(F.pointerId), !w && F.target === R.current && y.getState().userSelectionRect && $?.(F), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), H.current && (l?.(F), y.setState({
      nodesSelectionActive: D.current.size > 0
    })), re());
  }, Q = (F) => {
    F.target?.releasePointerCapture?.(F.pointerId), re();
  }, J = a === !0 || Array.isArray(a) && a.includes(0);
  return p.jsxs("div", { className: Ie(["react-flow__pane", { draggable: J, dragging: _, selection: e }]), onClick: C ? void 0 : qi($, R), onContextMenu: qi(P, R), onWheel: qi(B, R), onPointerEnter: C ? void 0 : c, onPointerMove: C ? ne : m, onPointerUp: C ? W : void 0, onPointerCancel: C ? Q : void 0, onPointerDownCapture: C ? q : void 0, onClickCapture: C ? T : void 0, onPointerLeave: v, ref: R, style: ri, children: [g, p.jsx(wx, {})] });
}
function rs({ id: e, store: t, unselect: n = !1, nodeRef: a }) {
  const { addSelectedNodes: r, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: o, onError: l } = t.getState(), u = o.get(e);
  if (!u) {
    l?.("012", Ze.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), u.selected ? (n || u.selected && s) && (i({ nodes: [u], edges: [] }), requestAnimationFrame(() => a?.current?.blur())) : r([e]);
}
function Xd({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: a, nodeId: r, isSelectable: i, nodeClickDistance: s }) {
  const o = Se(), [l, u] = pe(!1), f = oe();
  return fe(() => {
    f.current = u1({
      getStoreItems: () => o.getState(),
      onNodeMouseDown: (d) => {
        rs({
          id: d,
          store: o,
          nodeRef: e
        });
      },
      onDragStart: () => {
        u(!0);
      },
      onDragStop: () => {
        u(!1);
      }
    });
  }, []), fe(() => {
    if (!(t || !e.current || !f.current))
      return f.current.update({
        noDragClassName: n,
        handleSelector: a,
        domNode: e.current,
        isSelectable: i,
        nodeId: r,
        nodeClickDistance: s
      }), () => {
        f.current?.destroy();
      };
  }, [n, a, t, i, e, r, s]), l;
}
const Ax = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function Jd() {
  const e = Se();
  return ge((n) => {
    const { nodeExtent: a, snapToGrid: r, snapGrid: i, nodesDraggable: s, onError: o, updateNodePositions: l, nodeLookup: u, nodeOrigin: f } = e.getState(), d = /* @__PURE__ */ new Map(), c = Ax(s), m = r ? i[0] : 5, v = r ? i[1] : 5, g = n.direction.x * m * n.factor, h = n.direction.y * v * n.factor;
    for (const [, y] of u) {
      if (!c(y))
        continue;
      let w = {
        x: y.internals.positionAbsolute.x + g,
        y: y.internals.positionAbsolute.y + h
      };
      r && (w = Sn(w, i));
      const { position: x, positionAbsolute: _ } = yd({
        nodeId: y.id,
        nextPosition: w,
        nodeLookup: u,
        nodeExtent: a,
        nodeOrigin: f,
        onError: o
      });
      y.position = x, y.internals.positionAbsolute = _, d.set(y.id, y);
    }
    l(d);
  }, []);
}
const Ms = as(null), Ex = Ms.Provider;
Ms.Consumer;
const Qd = () => xn(Ms), Mx = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), Ix = (e, t, n) => (a) => {
  const { connectionClickStartHandle: r, connectionMode: i, connection: s } = a, { fromHandle: o, toHandle: l, isValid: u } = s, f = l?.nodeId === e && l?.id === t && l?.type === n;
  return {
    connectingFrom: o?.nodeId === e && o?.id === t && o?.type === n,
    connectingTo: f,
    clickConnecting: r?.nodeId === e && r?.id === t && r?.type === n,
    isPossibleEndHandle: i === jt.Strict ? o?.type !== n : e !== o?.nodeId || t !== o?.id,
    connectionInProcess: !!o,
    clickConnectionInProcess: !!r,
    valid: f && u
  };
};
function Cx({ type: e = "source", position: t = se.Top, isValidConnection: n, isConnectable: a = !0, isConnectableStart: r = !0, isConnectableEnd: i = !0, id: s, onConnect: o, children: l, className: u, onMouseDown: f, onTouchStart: d, ...c }, m) {
  const v = s || null, g = e === "target", h = Se(), y = Qd(), { connectOnClick: w, noPanClassName: x, rfId: _ } = me(Mx, _e), { connectingFrom: b, connectingTo: S, clickConnecting: I, isPossibleEndHandle: C, connectionInProcess: R, clickConnectionInProcess: O, valid: D } = me(Ix(y, v, e), _e);
  y || h.getState().onError?.("010", Ze.error010());
  const L = (N) => {
    const { defaultEdgeOptions: $, onConnect: P, hasDefaultEdges: B } = h.getState(), T = {
      ...$,
      ...N
    };
    if (B) {
      const { edges: q, setEdges: z, onError: Z } = h.getState();
      z(lx(T, q, { onError: Z }));
    }
    P?.(T), o?.(T);
  }, H = (N) => {
    if (!y)
      return;
    const $ = Id(N.nativeEvent);
    if (r && ($ && N.button === 0 || !$)) {
      const P = h.getState();
      ns.onPointerDown(N.nativeEvent, {
        handleDomNode: N.currentTarget,
        autoPanOnConnect: P.autoPanOnConnect,
        connectionMode: P.connectionMode,
        connectionRadius: P.connectionRadius,
        domNode: P.domNode,
        nodeLookup: P.nodeLookup,
        lib: P.lib,
        isTarget: g,
        handleId: v,
        nodeId: y,
        flowId: P.rfId,
        panBy: P.panBy,
        cancelConnection: P.cancelConnection,
        onConnectStart: P.onConnectStart,
        onConnectEnd: (...B) => h.getState().onConnectEnd?.(...B),
        updateConnection: P.updateConnection,
        onConnect: L,
        isValidConnection: n || ((...B) => h.getState().isValidConnection?.(...B) ?? !0),
        getTransform: () => h.getState().transform,
        getFromHandle: () => h.getState().connection.fromHandle,
        autoPanSpeed: P.autoPanSpeed,
        dragThreshold: P.connectionDragThreshold
      });
    }
    $ ? f?.(N) : d?.(N);
  }, E = (N) => {
    const { onClickConnectStart: $, onClickConnectEnd: P, connectionClickStartHandle: B, connectionMode: T, isValidConnection: q, lib: z, rfId: Z, nodeLookup: re, connection: ne } = h.getState();
    if (!y || !B && !r)
      return;
    if (!B) {
      $?.(N.nativeEvent, { nodeId: y, handleId: v, handleType: e }), h.setState({ connectionClickStartHandle: { nodeId: y, type: e, id: v } });
      return;
    }
    const W = Ed(N.target), Q = n || q, { connection: J, isValid: F } = ns.isValid(N.nativeEvent, {
      handle: {
        nodeId: y,
        id: v,
        type: e
      },
      connectionMode: T,
      fromNodeId: B.nodeId,
      fromHandleId: B.id || null,
      fromType: B.type,
      isValidConnection: Q,
      flowId: Z,
      doc: W,
      lib: z,
      nodeLookup: re
    });
    F && J && L(J);
    const ee = structuredClone(ne);
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, P?.(N, ee), h.setState({ connectionClickStartHandle: null });
  };
  return p.jsx("div", { "data-handleid": v, "data-nodeid": y, "data-handlepos": t, "data-id": `${_}-${y}-${v}-${e}`, className: Ie([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    x,
    u,
    {
      source: !g,
      target: g,
      connectable: a,
      connectablestart: r,
      connectableend: i,
      clickconnecting: I,
      connectingfrom: b,
      connectingto: S,
      valid: D,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: a && (!R || C) && (R || O ? i : r)
    }
  ]), onMouseDown: H, onTouchStart: H, onClick: w ? E : void 0, ref: m, ...c, children: l });
}
const mn = Me(Kd(Cx));
function Nx({ data: e, isConnectable: t, sourcePosition: n = se.Bottom }) {
  return p.jsxs(p.Fragment, { children: [e?.label, p.jsx(mn, { type: "source", position: n, isConnectable: t })] });
}
function Rx({ data: e, isConnectable: t, targetPosition: n = se.Top, sourcePosition: a = se.Bottom }) {
  return p.jsxs(p.Fragment, { children: [p.jsx(mn, { type: "target", position: n, isConnectable: t }), e?.label, p.jsx(mn, { type: "source", position: a, isConnectable: t })] });
}
function $x() {
  return null;
}
function Dx({ data: e, isConnectable: t, targetPosition: n = se.Top }) {
  return p.jsxs(p.Fragment, { children: [p.jsx(mn, { type: "target", position: n, isConnectable: t }), e?.label] });
}
const Fa = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Oo = {
  input: Nx,
  default: Rx,
  output: Dx,
  group: $x
};
function Px(e) {
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? e.style?.width,
    height: e.height ?? e.initialHeight ?? e.style?.height
  } : {
    width: e.width ?? e.style?.width,
    height: e.height ?? e.style?.height
  };
}
const kx = (e) => {
  const { width: t, height: n, x: a, y: r } = wn(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: Fe(t) ? t : null,
    height: Fe(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${a}px,${r}px)`
  };
};
function Tx({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const a = Se(), { width: r, height: i, transformString: s, userSelectionActive: o } = me(kx, _e), l = Jd(), u = oe(null);
  fe(() => {
    n || u.current?.focus({
      preventScroll: !0
    });
  }, [n]);
  const f = !o && r !== null && i !== null;
  if (Xd({
    nodeRef: u,
    disabled: !f
  }), !f)
    return null;
  const d = e ? (m) => {
    const v = a.getState().nodes.filter((g) => g.selected);
    e(m, v);
  } : void 0, c = (m) => {
    Object.prototype.hasOwnProperty.call(Fa, m.key) && (m.preventDefault(), l({
      direction: Fa[m.key],
      factor: m.shiftKey ? 4 : 1
    }));
  };
  return p.jsx("div", { className: Ie(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: p.jsx("div", { ref: u, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : c, style: {
    width: r,
    height: i
  } }) });
}
const Bo = typeof window < "u" ? window : void 0, Lx = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function ef({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: a, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: o, deleteKeyCode: l, selectionKeyCode: u, selectionOnDrag: f, selectionMode: d, onSelectionStart: c, onSelectionEnd: m, multiSelectionKeyCode: v, panActivationKeyCode: g, zoomActivationKeyCode: h, elementsSelectable: y, zoomOnScroll: w, zoomOnPinch: x, panOnScroll: _, panOnScrollSpeed: b, panOnScrollMode: S, zoomOnDoubleClick: I, panOnDrag: C, autoPanOnSelection: R, defaultViewport: O, translateExtent: D, minZoom: L, maxZoom: H, preventScrolling: E, onSelectionContextMenu: N, noWheelClassName: $, noPanClassName: P, disableKeyboardA11y: B, onViewportChange: T, isControlledViewport: q }) {
  const { nodesSelectionActive: z, userSelectionActive: Z } = me(Lx, _e), re = gn(u, { target: Bo }), ne = gn(g, { target: Bo }), W = ne || C, Q = ne || _, J = f && W !== !0, F = re || Z || J;
  return mx({ deleteKeyCode: l, multiSelectionKeyCode: v }), p.jsx(yx, { onPaneContextMenu: i, elementsSelectable: y, zoomOnScroll: w, zoomOnPinch: x, panOnScroll: Q, panOnScrollSpeed: b, panOnScrollMode: S, zoomOnDoubleClick: I, panOnDrag: !re && W, defaultViewport: O, translateExtent: D, minZoom: L, maxZoom: H, zoomActivationKeyCode: h, preventScrolling: E, noWheelClassName: $, noPanClassName: P, onViewportChange: T, isControlledViewport: q, paneClickDistance: o, selectionOnDrag: J, children: p.jsxs(bx, { onSelectionStart: c, onSelectionEnd: m, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: a, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: W, autoPanOnSelection: R, isSelecting: !!F, selectionMode: d, selectionKeyPressed: re, paneClickDistance: o, selectionOnDrag: J, children: [e, z && p.jsx(Tx, { onSelectionContextMenu: N, noPanClassName: P, disableKeyboardA11y: B })] }) });
}
ef.displayName = "FlowRenderer";
const Ox = Me(ef), Bx = (e) => (t) => e ? vs(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function Fx(e) {
  return me(ge(Bx(e), [e]), _e);
}
const Hx = (e) => e.updateNodeInternals;
function Zx() {
  const e = me(Hx), [t] = pe(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const a = /* @__PURE__ */ new Map();
    n.forEach((r) => {
      const i = r.target.getAttribute("data-id");
      a.set(i, {
        id: i,
        nodeElement: r.target,
        force: !0
      });
    }), e(a);
  }));
  return fe(() => () => {
    t?.disconnect();
  }, [t]), t;
}
function qx({ node: e, nodeType: t, hasDimensions: n, resizeObserver: a }) {
  const r = Se(), i = oe(null), s = oe(null), o = oe(e.sourcePosition), l = oe(e.targetPosition), u = oe(t), f = n && !!e.internals.handleBounds;
  return fe(() => {
    i.current && !e.hidden && (!f || s.current !== i.current) && (s.current && a?.unobserve(s.current), a?.observe(i.current), s.current = i.current);
  }, [f, e.hidden]), fe(() => () => {
    s.current && (a?.unobserve(s.current), s.current = null);
  }, []), fe(() => {
    if (i.current) {
      const d = u.current !== t, c = o.current !== e.sourcePosition, m = l.current !== e.targetPosition;
      (d || c || m) && (u.current = t, o.current = e.sourcePosition, l.current = e.targetPosition, r.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function zx({ id: e, onClick: t, onMouseEnter: n, onMouseMove: a, onMouseLeave: r, onContextMenu: i, onDoubleClick: s, nodesDraggable: o, elementsSelectable: l, nodesConnectable: u, nodesFocusable: f, resizeObserver: d, noDragClassName: c, noPanClassName: m, disableKeyboardA11y: v, rfId: g, nodeTypes: h, nodeClickDistance: y, onError: w }) {
  const { node: x, internals: _, isParent: b } = me((F) => {
    const ee = F.nodeLookup.get(e), ue = F.parentLookup.has(e);
    return {
      node: ee,
      internals: ee.internals,
      isParent: ue
    };
  }, _e);
  let S = x.type || "default", I = h?.[S] || Oo[S];
  I === void 0 && (w?.("003", Ze.error003(S)), S = "default", I = h?.default || Oo.default);
  const C = !!(x.draggable || o && typeof x.draggable > "u"), R = !!(x.selectable || l && typeof x.selectable > "u"), O = !!(x.connectable || u && typeof x.connectable > "u"), D = !!(x.focusable || f && typeof x.focusable > "u"), L = Se(), H = bd(x), E = qx({ node: x, nodeType: S, hasDimensions: H, resizeObserver: d }), N = Xd({
    nodeRef: E,
    disabled: x.hidden || !C,
    noDragClassName: c,
    handleSelector: x.dragHandle,
    nodeId: e,
    isSelectable: R,
    nodeClickDistance: y
  }), $ = Jd();
  if (x.hidden)
    return null;
  const P = Xe(x), B = Px(x), T = R || C || t || n || a || r, q = n ? (F) => n(F, { ..._.userNode }) : void 0, z = a ? (F) => a(F, { ..._.userNode }) : void 0, Z = r ? (F) => r(F, { ..._.userNode }) : void 0, re = i ? (F) => i(F, { ..._.userNode }) : void 0, ne = s ? (F) => s(F, { ..._.userNode }) : void 0, W = (F) => {
    const { selectNodesOnDrag: ee, nodeDragThreshold: ue } = L.getState();
    R && (!ee || !C || ue > 0) && rs({
      id: e,
      store: L,
      nodeRef: E
    }), t && t(F, { ..._.userNode });
  }, Q = (F) => {
    if (!(Md(F.nativeEvent) || v)) {
      if (pd.includes(F.key) && R) {
        const ee = F.key === "Escape";
        rs({
          id: e,
          store: L,
          unselect: ee,
          nodeRef: E
        });
      } else if (C && x.selected && Object.prototype.hasOwnProperty.call(Fa, F.key)) {
        F.preventDefault();
        const { ariaLabelConfig: ee } = L.getState();
        L.setState({
          ariaLiveMessage: ee["node.a11yDescription.ariaLiveMessage"]({
            direction: F.key.replace("Arrow", "").toLowerCase(),
            x: ~~_.positionAbsolute.x,
            y: ~~_.positionAbsolute.y
          })
        }), $({
          direction: Fa[F.key],
          factor: F.shiftKey ? 4 : 1
        });
      }
    }
  }, J = () => {
    if (v || !E.current?.matches(":focus-visible"))
      return;
    const { transform: F, width: ee, height: ue, autoPanOnNodeFocus: le, setCenter: G } = L.getState();
    if (!le)
      return;
    vs(/* @__PURE__ */ new Map([[e, x]]), { x: 0, y: 0, width: ee, height: ue }, F, !0).length > 0 || G(x.position.x + P.width / 2, x.position.y + P.height / 2, {
      zoom: F[2]
    });
  };
  return p.jsx("div", { className: Ie([
    "react-flow__node",
    `react-flow__node-${S}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [m]: C
    },
    x.className,
    {
      selected: x.selected,
      selectable: R,
      parent: b,
      draggable: C,
      dragging: N
    }
  ]), ref: E, style: {
    zIndex: _.z,
    transform: `translate(${_.positionAbsolute.x}px,${_.positionAbsolute.y}px)`,
    pointerEvents: T ? "all" : "none",
    visibility: H ? "visible" : "hidden",
    ...x.style,
    ...B
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: q, onMouseMove: z, onMouseLeave: Z, onContextMenu: re, onClick: W, onDoubleClick: ne, onKeyDown: D ? Q : void 0, tabIndex: D ? 0 : void 0, onFocus: D ? J : void 0, role: x.ariaRole ?? (D ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": v ? void 0 : `${jd}-${g}`, "aria-label": x.ariaLabel, ...x.domAttributes, children: p.jsx(Ex, { value: e, children: p.jsx(I, { id: e, data: x.data, type: S, positionAbsoluteX: _.positionAbsolute.x, positionAbsoluteY: _.positionAbsolute.y, selected: x.selected ?? !1, selectable: R, draggable: C, deletable: x.deletable ?? !0, isConnectable: O, sourcePosition: x.sourcePosition, targetPosition: x.targetPosition, dragging: N, dragHandle: x.dragHandle, zIndex: _.z, parentId: x.parentId, ...P }) }) });
}
var Ux = Me(zx);
const jx = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function tf(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: a, elementsSelectable: r, onError: i } = me(jx, _e), s = Fx(e.onlyRenderVisibleElements), o = Zx();
  return p.jsx("div", { className: "react-flow__nodes", style: ri, children: s.map((l) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    p.jsx(Ux, { id: l, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: o, nodesDraggable: t, nodesConnectable: n, nodesFocusable: a, elementsSelectable: r, nodeClickDistance: e.nodeClickDistance, onError: i }, l)
  )) });
}
tf.displayName = "NodeRenderer";
const Vx = Me(tf);
function Wx(e) {
  return me(ge((n) => {
    if (!e)
      return n.edges.map((r) => r.id);
    const a = [];
    if (n.width && n.height)
      for (const r of n.edges) {
        const i = n.nodeLookup.get(r.source), s = n.nodeLookup.get(r.target);
        i && s && Uv({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && a.push(r.id);
      }
    return a;
  }, [e]), _e);
}
const Gx = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return p.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, Kx = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return p.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, Fo = {
  [La.Arrow]: Gx,
  [La.ArrowClosed]: Kx
};
function Yx(e) {
  const t = Se();
  return Ce(() => Object.prototype.hasOwnProperty.call(Fo, e) ? Fo[e] : (t.getState().onError?.("009", Ze.error009(e)), null), [e]);
}
const Xx = ({ id: e, type: t, color: n, width: a = 12.5, height: r = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: o = "auto-start-reverse" }) => {
  const l = Yx(t);
  return l ? p.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${a}`, markerHeight: `${r}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: o, refX: "0", refY: "0", children: p.jsx(l, { color: n, strokeWidth: s }) }) : null;
}, nf = ({ defaultColor: e, rfId: t }) => {
  const n = me((i) => i.edges), a = me((i) => i.defaultEdgeOptions), r = Ce(() => Jv(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: a?.markerStart,
    defaultMarkerEnd: a?.markerEnd
  }), [n, a, t, e]);
  return r.length ? p.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: p.jsx("defs", { children: r.map((i) => p.jsx(Xx, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
nf.displayName = "MarkerDefinitions";
var Jx = Me(nf);
function rf({ x: e, y: t, label: n, labelStyle: a, labelShowBg: r = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: o = 2, children: l, className: u, ...f }) {
  const [d, c] = pe({ x: 1, y: 0, width: 0, height: 0 }), m = Ie(["react-flow__edge-textwrapper", u]), v = oe(null);
  return fe(() => {
    if (v.current) {
      const g = v.current.getBBox();
      c({
        x: g.x,
        y: g.y,
        width: g.width,
        height: g.height
      });
    }
  }, [n]), n ? p.jsxs("g", { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: m, visibility: d.width ? "visible" : "hidden", ...f, children: [r && p.jsx("rect", { width: d.width + 2 * s[0], x: -s[0], y: -s[1], height: d.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: o, ry: o }), p.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: v, style: a, children: n }), l] }) : null;
}
rf.displayName = "EdgeText";
const Qx = Me(rf);
function Yt({ path: e, labelX: t, labelY: n, label: a, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: o, labelBgBorderRadius: l, interactionWidth: u = 20, ...f }) {
  return p.jsxs(p.Fragment, { children: [p.jsx("path", { ...f, d: e, fill: "none", className: Ie(["react-flow__edge-path", f.className]) }), u ? p.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: u, className: "react-flow__edge-interaction" }) : null, a && Fe(t) && Fe(n) ? p.jsx(Qx, { x: t, y: n, label: a, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: o, labelBgBorderRadius: l }) : null] });
}
function Ho({ pos: e, x1: t, y1: n, x2: a, y2: r }) {
  return e === se.Left || e === se.Right ? [0.5 * (t + a), n] : [t, 0.5 * (n + r)];
}
function af({ sourceX: e, sourceY: t, sourcePosition: n = se.Bottom, targetX: a, targetY: r, targetPosition: i = se.Top }) {
  const [s, o] = Ho({
    pos: n,
    x1: e,
    y1: t,
    x2: a,
    y2: r
  }), [l, u] = Ho({
    pos: i,
    x1: a,
    y1: r,
    x2: e,
    y2: t
  }), [f, d, c, m] = Cd({
    sourceX: e,
    sourceY: t,
    targetX: a,
    targetY: r,
    sourceControlX: s,
    sourceControlY: o,
    targetControlX: l,
    targetControlY: u
  });
  return [
    `M${e},${t} C${s},${o} ${l},${u} ${a},${r}`,
    f,
    d,
    c,
    m
  ];
}
function sf(e) {
  return Me(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, sourcePosition: s, targetPosition: o, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: m, style: v, markerEnd: g, markerStart: h, interactionWidth: y }) => {
    const [w, x, _] = af({
      sourceX: n,
      sourceY: a,
      sourcePosition: s,
      targetX: r,
      targetY: i,
      targetPosition: o
    }), b = e.isInternal ? void 0 : t;
    return p.jsx(Yt, { id: b, path: w, labelX: x, labelY: _, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: m, style: v, markerEnd: g, markerStart: h, interactionWidth: y });
  });
}
const ey = sf({ isInternal: !1 }), of = sf({ isInternal: !0 });
ey.displayName = "SimpleBezierEdge";
of.displayName = "SimpleBezierEdgeInternal";
function lf(e) {
  return Me(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, sourcePosition: m = se.Bottom, targetPosition: v = se.Top, markerEnd: g, markerStart: h, pathOptions: y, interactionWidth: w }) => {
    const [x, _, b] = Ba({
      sourceX: n,
      sourceY: a,
      sourcePosition: m,
      targetX: r,
      targetY: i,
      targetPosition: v,
      borderRadius: y?.borderRadius,
      offset: y?.offset,
      stepPosition: y?.stepPosition
    }), S = e.isInternal ? void 0 : t;
    return p.jsx(Yt, { id: S, path: x, labelX: _, labelY: b, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, markerEnd: g, markerStart: h, interactionWidth: w });
  });
}
const uf = lf({ isInternal: !1 }), cf = lf({ isInternal: !0 });
uf.displayName = "SmoothStepEdge";
cf.displayName = "SmoothStepEdgeInternal";
function df(e) {
  return Me(({ id: t, ...n }) => {
    const a = e.isInternal ? void 0 : t;
    return p.jsx(uf, { ...n, id: a, pathOptions: Ce(() => ({ borderRadius: 0, offset: n.pathOptions?.offset }), [n.pathOptions?.offset]) });
  });
}
const ty = df({ isInternal: !1 }), ff = df({ isInternal: !0 });
ty.displayName = "StepEdge";
ff.displayName = "StepEdgeInternal";
function hf(e) {
  return Me(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, markerEnd: m, markerStart: v, interactionWidth: g }) => {
    const [h, y, w] = $d({ sourceX: n, sourceY: a, targetX: r, targetY: i }), x = e.isInternal ? void 0 : t;
    return p.jsx(Yt, { id: x, path: h, labelX: y, labelY: w, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, markerEnd: m, markerStart: v, interactionWidth: g });
  });
}
const ny = hf({ isInternal: !1 }), pf = hf({ isInternal: !0 });
ny.displayName = "StraightEdge";
pf.displayName = "StraightEdgeInternal";
function gf(e) {
  return Me(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, sourcePosition: s = se.Bottom, targetPosition: o = se.Top, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: m, style: v, markerEnd: g, markerStart: h, pathOptions: y, interactionWidth: w }) => {
    const [x, _, b] = Nd({
      sourceX: n,
      sourceY: a,
      sourcePosition: s,
      targetX: r,
      targetY: i,
      targetPosition: o,
      curvature: y?.curvature
    }), S = e.isInternal ? void 0 : t;
    return p.jsx(Yt, { id: S, path: x, labelX: _, labelY: b, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: m, style: v, markerEnd: g, markerStart: h, interactionWidth: w });
  });
}
const ry = gf({ isInternal: !1 }), mf = gf({ isInternal: !0 });
ry.displayName = "BezierEdge";
mf.displayName = "BezierEdgeInternal";
const Zo = {
  default: mf,
  straight: pf,
  step: ff,
  smoothstep: cf,
  simplebezier: of
}, qo = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, ay = (e, t, n) => n === se.Left ? e - t : n === se.Right ? e + t : e, iy = (e, t, n) => n === se.Top ? e - t : n === se.Bottom ? e + t : e, zo = "react-flow__edgeupdater";
function Uo({ position: e, centerX: t, centerY: n, radius: a = 10, onMouseDown: r, onMouseEnter: i, onMouseOut: s, type: o }) {
  return p.jsx("circle", { onMouseDown: r, onMouseEnter: i, onMouseOut: s, className: Ie([zo, `${zo}-${o}`]), cx: ay(t, a, e), cy: iy(n, a, e), r: a, stroke: "transparent", fill: "transparent" });
}
function sy({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: a, sourceY: r, targetX: i, targetY: s, sourcePosition: o, targetPosition: l, onReconnect: u, onReconnectStart: f, onReconnectEnd: d, setReconnecting: c, setUpdateHover: m }) {
  const v = Se(), g = (_, b) => {
    if (_.button !== 0)
      return;
    const { autoPanOnConnect: S, domNode: I, connectionMode: C, connectionRadius: R, lib: O, onConnectStart: D, cancelConnection: L, nodeLookup: H, rfId: E, panBy: N, updateConnection: $ } = v.getState(), P = b.type === "target", B = (z, Z) => {
      c(!1), d?.(z, n, b.type, Z);
    }, T = (z) => u?.(n, z), q = (z, Z) => {
      c(!0), f?.(_, n, b.type), D?.(z, Z);
    };
    ns.onPointerDown(_.nativeEvent, {
      autoPanOnConnect: S,
      connectionMode: C,
      connectionRadius: R,
      domNode: I,
      handleId: b.id,
      nodeId: b.nodeId,
      nodeLookup: H,
      isTarget: P,
      edgeUpdaterType: b.type,
      lib: O,
      flowId: E,
      cancelConnection: L,
      panBy: N,
      isValidConnection: (...z) => v.getState().isValidConnection?.(...z) ?? !0,
      onConnect: T,
      onConnectStart: q,
      onConnectEnd: (...z) => v.getState().onConnectEnd?.(...z),
      onReconnectEnd: B,
      updateConnection: $,
      getTransform: () => v.getState().transform,
      getFromHandle: () => v.getState().connection.fromHandle,
      dragThreshold: v.getState().connectionDragThreshold,
      handleDomNode: _.currentTarget
    });
  }, h = (_) => g(_, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), y = (_) => g(_, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), w = () => m(!0), x = () => m(!1);
  return p.jsxs(p.Fragment, { children: [(e === !0 || e === "source") && p.jsx(Uo, { position: o, centerX: a, centerY: r, radius: t, onMouseDown: h, onMouseEnter: w, onMouseOut: x, type: "source" }), (e === !0 || e === "target") && p.jsx(Uo, { position: l, centerX: i, centerY: s, radius: t, onMouseDown: y, onMouseEnter: w, onMouseOut: x, type: "target" })] });
}
function oy({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: a, onClick: r, onDoubleClick: i, onContextMenu: s, onMouseEnter: o, onMouseMove: l, onMouseLeave: u, reconnectRadius: f, onReconnect: d, onReconnectStart: c, onReconnectEnd: m, rfId: v, edgeTypes: g, noPanClassName: h, onError: y, disableKeyboardA11y: w }) {
  let x = me((G) => G.edgeLookup.get(e));
  const _ = me((G) => G.defaultEdgeOptions);
  x = _ ? { ..._, ...x } : x;
  let b = x.type || "default", S = g?.[b] || Zo[b];
  S === void 0 && (y?.("011", Ze.error011(b)), b = "default", S = g?.default || Zo.default);
  const I = !!(x.focusable || t && typeof x.focusable > "u"), C = typeof d < "u" && (x.reconnectable || n && typeof x.reconnectable > "u"), R = !!(x.selectable || a && typeof x.selectable > "u"), O = oe(null), [D, L] = pe(!1), [H, E] = pe(!1), N = Se(), { zIndex: $, sourceX: P, sourceY: B, targetX: T, targetY: q, sourcePosition: z, targetPosition: Z } = me(ge((G) => {
    const j = G.nodeLookup.get(x.source), ae = G.nodeLookup.get(x.target);
    if (!j || !ae)
      return {
        zIndex: x.zIndex,
        ...qo
      };
    const te = Xv({
      id: e,
      sourceNode: j,
      targetNode: ae,
      sourceHandle: x.sourceHandle || null,
      targetHandle: x.targetHandle || null,
      connectionMode: G.connectionMode,
      onError: y
    });
    return {
      zIndex: zv({
        selected: x.selected,
        zIndex: x.zIndex,
        sourceNode: j,
        targetNode: ae,
        elevateOnSelect: G.elevateEdgesOnSelect,
        zIndexMode: G.zIndexMode
      }),
      ...te || qo
    };
  }, [x.source, x.target, x.sourceHandle, x.targetHandle, x.selected, x.zIndex]), _e), re = Ce(() => x.markerStart ? `url('#${es(x.markerStart, v)}')` : void 0, [x.markerStart, v]), ne = Ce(() => x.markerEnd ? `url('#${es(x.markerEnd, v)}')` : void 0, [x.markerEnd, v]);
  if (x.hidden || P === null || B === null || T === null || q === null)
    return null;
  const W = (G) => {
    const { addSelectedEdges: j, unselectNodesAndEdges: ae, multiSelectionActive: te } = N.getState();
    R && (N.setState({ nodesSelectionActive: !1 }), x.selected && te ? (ae({ nodes: [], edges: [x] }), O.current?.blur()) : j([e])), r && r(G, x);
  }, Q = i ? (G) => {
    i(G, { ...x });
  } : void 0, J = s ? (G) => {
    s(G, { ...x });
  } : void 0, F = o ? (G) => {
    o(G, { ...x });
  } : void 0, ee = l ? (G) => {
    l(G, { ...x });
  } : void 0, ue = u ? (G) => {
    u(G, { ...x });
  } : void 0, le = (G) => {
    if (!w && pd.includes(G.key) && R) {
      const { unselectNodesAndEdges: j, addSelectedEdges: ae } = N.getState();
      G.key === "Escape" ? (O.current?.blur(), j({ edges: [x] })) : ae([e]);
    }
  };
  return p.jsx("svg", { style: { zIndex: $ }, children: p.jsxs("g", { className: Ie([
    "react-flow__edge",
    `react-flow__edge-${b}`,
    x.className,
    h,
    {
      selected: x.selected,
      animated: x.animated,
      inactive: !R && !r,
      updating: D,
      selectable: R
    }
  ]), onClick: W, onDoubleClick: Q, onContextMenu: J, onMouseEnter: F, onMouseMove: ee, onMouseLeave: ue, onKeyDown: I ? le : void 0, tabIndex: I ? 0 : void 0, role: x.ariaRole ?? (I ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": x.ariaLabel === null ? void 0 : x.ariaLabel || `Edge from ${x.source} to ${x.target}`, "aria-describedby": I ? `${Vd}-${v}` : void 0, ref: O, ...x.domAttributes, children: [!H && p.jsx(S, { id: e, source: x.source, target: x.target, type: x.type, selected: x.selected, animated: x.animated, selectable: R, deletable: x.deletable ?? !0, label: x.label, labelStyle: x.labelStyle, labelShowBg: x.labelShowBg, labelBgStyle: x.labelBgStyle, labelBgPadding: x.labelBgPadding, labelBgBorderRadius: x.labelBgBorderRadius, sourceX: P, sourceY: B, targetX: T, targetY: q, sourcePosition: z, targetPosition: Z, data: x.data, style: x.style, sourceHandleId: x.sourceHandle, targetHandleId: x.targetHandle, markerStart: re, markerEnd: ne, pathOptions: "pathOptions" in x ? x.pathOptions : void 0, interactionWidth: x.interactionWidth }), C && p.jsx(sy, { edge: x, isReconnectable: C, reconnectRadius: f, onReconnect: d, onReconnectStart: c, onReconnectEnd: m, sourceX: P, sourceY: B, targetX: T, targetY: q, sourcePosition: z, targetPosition: Z, setUpdateHover: L, setReconnecting: E })] }) });
}
var ly = Me(oy);
const uy = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function vf({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: a, noPanClassName: r, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: o, onEdgeMouseMove: l, onEdgeMouseLeave: u, onEdgeClick: f, reconnectRadius: d, onEdgeDoubleClick: c, onReconnectStart: m, onReconnectEnd: v, disableKeyboardA11y: g }) {
  const { edgesFocusable: h, edgesReconnectable: y, elementsSelectable: w, onError: x } = me(uy, _e), _ = Wx(t);
  return p.jsxs("div", { className: "react-flow__edges", children: [p.jsx(Jx, { defaultColor: e, rfId: n }), _.map((b) => p.jsx(ly, { id: b, edgesFocusable: h, edgesReconnectable: y, elementsSelectable: w, noPanClassName: r, onReconnect: i, onContextMenu: s, onMouseEnter: o, onMouseMove: l, onMouseLeave: u, onClick: f, reconnectRadius: d, onDoubleClick: c, onReconnectStart: m, onReconnectEnd: v, rfId: n, onError: x, edgeTypes: a, disableKeyboardA11y: g }, b))] });
}
vf.displayName = "EdgeRenderer";
const cy = Me(vf), dy = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function fy({ children: e }) {
  const t = me(dy);
  return p.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function hy(e) {
  const t = ni(), n = oe(!1);
  fe(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const py = (e) => e.panZoom?.syncViewport;
function gy(e) {
  const t = me(py), n = Se();
  return fe(() => {
    e && (t?.(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function my(e) {
  return e.connection.inProgress ? { ...e.connection, to: Xt(e.connection.to, e.transform) } : { ...e.connection };
}
function vy(e) {
  return my;
}
function xy(e) {
  const t = vy();
  return me(t, _e);
}
const yy = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function _y({ containerStyle: e, style: t, type: n, component: a }) {
  const { nodesConnectable: r, width: i, height: s, isValid: o, inProgress: l } = me(yy, _e);
  return !(i && r && l) ? null : p.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: p.jsx("g", { className: Ie(["react-flow__connection", vd(o)]), children: p.jsx(xf, { style: t, type: n, CustomComponent: a, isValid: o }) }) });
}
const xf = ({ style: e, type: t = it.Bezier, CustomComponent: n, isValid: a }) => {
  const { inProgress: r, from: i, fromNode: s, fromHandle: o, fromPosition: l, to: u, toNode: f, toHandle: d, toPosition: c, pointer: m } = xy();
  if (!r)
    return;
  if (n)
    return p.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: o, fromX: i.x, fromY: i.y, toX: u.x, toY: u.y, fromPosition: l, toPosition: c, connectionStatus: vd(a), toNode: f, toHandle: d, pointer: m });
  let v = "";
  const g = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: l,
    targetX: u.x,
    targetY: u.y,
    targetPosition: c
  };
  switch (t) {
    case it.Bezier:
      [v] = Nd(g);
      break;
    case it.SimpleBezier:
      [v] = af(g);
      break;
    case it.Step:
      [v] = Ba({
        ...g,
        borderRadius: 0
      });
      break;
    case it.SmoothStep:
      [v] = Ba(g);
      break;
    default:
      [v] = $d(g);
  }
  return p.jsx("path", { d: v, fill: "none", className: "react-flow__connection-path", style: e });
};
xf.displayName = "ConnectionLine";
const wy = {};
function jo(e = wy) {
  oe(e), Se(), fe(() => {
  }, [e]);
}
function Sy() {
  Se(), oe(!1), fe(() => {
  }, []);
}
function yf({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: a, onEdgeClick: r, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: o, onNodeMouseMove: l, onNodeMouseLeave: u, onNodeContextMenu: f, onSelectionContextMenu: d, onSelectionStart: c, onSelectionEnd: m, connectionLineType: v, connectionLineStyle: g, connectionLineComponent: h, connectionLineContainerStyle: y, selectionKeyCode: w, selectionOnDrag: x, selectionMode: _, multiSelectionKeyCode: b, panActivationKeyCode: S, zoomActivationKeyCode: I, deleteKeyCode: C, onlyRenderVisibleElements: R, elementsSelectable: O, defaultViewport: D, translateExtent: L, minZoom: H, maxZoom: E, preventScrolling: N, defaultMarkerColor: $, zoomOnScroll: P, zoomOnPinch: B, panOnScroll: T, panOnScrollSpeed: q, panOnScrollMode: z, zoomOnDoubleClick: Z, panOnDrag: re, autoPanOnSelection: ne, onPaneClick: W, onPaneMouseEnter: Q, onPaneMouseMove: J, onPaneMouseLeave: F, onPaneScroll: ee, onPaneContextMenu: ue, paneClickDistance: le, nodeClickDistance: G, onEdgeContextMenu: j, onEdgeMouseEnter: ae, onEdgeMouseMove: te, onEdgeMouseLeave: de, reconnectRadius: be, onReconnect: A, onReconnectStart: M, onReconnectEnd: k, noDragClassName: U, noWheelClassName: V, noPanClassName: K, disableKeyboardA11y: ie, nodeExtent: ce, rfId: he, viewport: ve, onViewportChange: Re }) {
  return jo(e), jo(t), Sy(), hy(n), gy(ve), p.jsx(Ox, { onPaneClick: W, onPaneMouseEnter: Q, onPaneMouseMove: J, onPaneMouseLeave: F, onPaneContextMenu: ue, onPaneScroll: ee, paneClickDistance: le, deleteKeyCode: C, selectionKeyCode: w, selectionOnDrag: x, selectionMode: _, onSelectionStart: c, onSelectionEnd: m, multiSelectionKeyCode: b, panActivationKeyCode: S, zoomActivationKeyCode: I, elementsSelectable: O, zoomOnScroll: P, zoomOnPinch: B, zoomOnDoubleClick: Z, panOnScroll: T, panOnScrollSpeed: q, panOnScrollMode: z, panOnDrag: re, autoPanOnSelection: ne, defaultViewport: D, translateExtent: L, minZoom: H, maxZoom: E, onSelectionContextMenu: d, preventScrolling: N, noDragClassName: U, noWheelClassName: V, noPanClassName: K, disableKeyboardA11y: ie, onViewportChange: Re, isControlledViewport: !!ve, children: p.jsxs(fy, { children: [p.jsx(cy, { edgeTypes: t, onEdgeClick: r, onEdgeDoubleClick: s, onReconnect: A, onReconnectStart: M, onReconnectEnd: k, onlyRenderVisibleElements: R, onEdgeContextMenu: j, onEdgeMouseEnter: ae, onEdgeMouseMove: te, onEdgeMouseLeave: de, reconnectRadius: be, defaultMarkerColor: $, noPanClassName: K, disableKeyboardA11y: ie, rfId: he }), p.jsx(_y, { style: g, type: v, component: h, containerStyle: y }), p.jsx("div", { className: "react-flow__edgelabel-renderer" }), p.jsx(Vx, { nodeTypes: e, onNodeClick: a, onNodeDoubleClick: i, onNodeMouseEnter: o, onNodeMouseMove: l, onNodeMouseLeave: u, onNodeContextMenu: f, nodeClickDistance: G, onlyRenderVisibleElements: R, noPanClassName: K, noDragClassName: U, disableKeyboardA11y: ie, nodeExtent: ce, rfId: he }), p.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
yf.displayName = "GraphView";
const by = Me(yf), Ay = Sd(), Vo = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: a, width: r, height: i, fitView: s, fitViewOptions: o, minZoom: l = 0.5, maxZoom: u = 2, nodeOrigin: f, nodeExtent: d, zIndexMode: c = "basic" } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), y = a ?? t ?? [], w = n ?? e ?? [], x = f ?? [0, 0], _ = d ?? dn;
  kd(g, h, y);
  const { nodesInitialized: b } = ts(w, m, v, {
    nodeOrigin: x,
    nodeExtent: _,
    zIndexMode: c
  });
  let S = [0, 0, 1];
  if (s && r && i) {
    const I = wn(m, {
      filter: (D) => !!((D.width || D.initialWidth) && (D.height || D.initialHeight))
    }), { x: C, y: R, zoom: O } = ys(I, r, i, l, u, o?.padding ?? 0.1);
    S = [C, R, O];
  }
  return {
    rfId: "1",
    width: r ?? 0,
    height: i ?? 0,
    transform: S,
    nodes: w,
    nodesInitialized: b,
    nodeLookup: m,
    parentLookup: v,
    edges: y,
    edgeLookup: h,
    connectionLookup: g,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: a !== void 0,
    panZoom: null,
    minZoom: l,
    maxZoom: u,
    translateExtent: dn,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: jt.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: x,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: o,
    fitViewResolver: null,
    connection: { ...md },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Ay,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: gd,
    zIndexMode: c,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, Ey = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: a, width: r, height: i, fitView: s, fitViewOptions: o, minZoom: l, maxZoom: u, nodeOrigin: f, nodeExtent: d, zIndexMode: c }) => B1((m, v) => {
  async function g() {
    const { nodeLookup: h, panZoom: y, fitViewOptions: w, fitViewResolver: x, width: _, height: b, minZoom: S, maxZoom: I } = v();
    y && (await Lv({
      nodes: h,
      width: _,
      height: b,
      panZoom: y,
      minZoom: S,
      maxZoom: I
    }, w), x?.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...Vo({
      nodes: e,
      edges: t,
      width: r,
      height: i,
      fitView: s,
      fitViewOptions: o,
      minZoom: l,
      maxZoom: u,
      nodeOrigin: f,
      nodeExtent: d,
      defaultNodes: n,
      defaultEdges: a,
      zIndexMode: c
    }),
    setNodes: (h) => {
      const { nodeLookup: y, parentLookup: w, nodeOrigin: x, elevateNodesOnSelect: _, fitViewQueued: b, zIndexMode: S, nodesSelectionActive: I } = v(), { nodesInitialized: C, hasSelectedNodes: R } = ts(h, y, w, {
        nodeOrigin: x,
        nodeExtent: d,
        elevateNodesOnSelect: _,
        checkEquality: !0,
        zIndexMode: S
      }), O = I && R;
      b && C ? (g(), m({
        nodes: h,
        nodesInitialized: C,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: O
      })) : m({ nodes: h, nodesInitialized: C, nodesSelectionActive: O });
    },
    setEdges: (h) => {
      const { connectionLookup: y, edgeLookup: w } = v();
      kd(y, w, h), m({ edges: h });
    },
    setDefaultNodesAndEdges: (h, y) => {
      if (h) {
        const { setNodes: w } = v();
        w(h), m({ hasDefaultNodes: !0 });
      }
      if (y) {
        const { setEdges: w } = v();
        w(y), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (h) => {
      const { triggerNodeChanges: y, nodeLookup: w, parentLookup: x, domNode: _, nodeOrigin: b, nodeExtent: S, debug: I, fitViewQueued: C, zIndexMode: R } = v(), { changes: O, updatedInternals: D } = i1(h, w, x, _, b, S, R);
      D && (t1(w, x, { nodeOrigin: b, nodeExtent: S, zIndexMode: R }), C ? (g(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), O?.length > 0 && (I && console.log("React Flow: trigger node changes", O), y?.(O)));
    },
    updateNodePositions: (h, y = !1) => {
      const w = [];
      let x = [];
      const { nodeLookup: _, triggerNodeChanges: b, connection: S, updateConnection: I, onNodesChangeMiddlewareMap: C } = v();
      for (const [R, O] of h) {
        const D = _.get(R), L = !!(D?.expandParent && D?.parentId && O?.position), H = {
          id: R,
          type: "position",
          position: L ? {
            x: Math.max(0, O.position.x),
            y: Math.max(0, O.position.y)
          } : O.position,
          dragging: y
        };
        if (D && S.inProgress && S.fromNode.id === D.id) {
          const E = vt(D, S.fromHandle, se.Left, !0);
          I({ ...S, from: E });
        }
        L && D.parentId && w.push({
          id: R,
          parentId: D.parentId,
          rect: {
            ...O.internals.positionAbsolute,
            width: O.measured.width ?? 0,
            height: O.measured.height ?? 0
          }
        }), x.push(H);
      }
      if (w.length > 0) {
        const { parentLookup: R, nodeOrigin: O } = v(), D = Es(w, _, R, O);
        x.push(...D);
      }
      for (const R of C.values())
        x = R(x);
      b(x);
    },
    triggerNodeChanges: (h) => {
      const { onNodesChange: y, setNodes: w, nodes: x, hasDefaultNodes: _, debug: b } = v();
      if (h?.length) {
        if (_) {
          const S = ix(h, x);
          w(S);
        }
        b && console.log("React Flow: trigger node changes", h), y?.(h);
      }
    },
    triggerEdgeChanges: (h) => {
      const { onEdgesChange: y, setEdges: w, edges: x, hasDefaultEdges: _, debug: b } = v();
      if (h?.length) {
        if (_) {
          const S = sx(h, x);
          w(S);
        }
        b && console.log("React Flow: trigger edge changes", h), y?.(h);
      }
    },
    addSelectedNodes: (h) => {
      const { multiSelectionActive: y, edgeLookup: w, nodeLookup: x, triggerNodeChanges: _, triggerEdgeChanges: b } = v();
      if (y) {
        const S = h.map((I) => ct(I, !0));
        _(S);
        return;
      }
      _(Zt(x, /* @__PURE__ */ new Set([...h]), !0)), b(Zt(w));
    },
    addSelectedEdges: (h) => {
      const { multiSelectionActive: y, edgeLookup: w, nodeLookup: x, triggerNodeChanges: _, triggerEdgeChanges: b } = v();
      if (y) {
        const S = h.map((I) => ct(I, !0));
        b(S);
        return;
      }
      b(Zt(w, /* @__PURE__ */ new Set([...h]))), _(Zt(x, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: h, edges: y } = {}) => {
      const { edges: w, nodes: x, nodeLookup: _, triggerNodeChanges: b, triggerEdgeChanges: S } = v(), I = h || x, C = y || w, R = [];
      for (const D of I) {
        if (!D.selected)
          continue;
        const L = _.get(D.id);
        L && (L.selected = !1), R.push(ct(D.id, !1));
      }
      const O = [];
      for (const D of C)
        D.selected && O.push(ct(D.id, !1));
      b(R), S(O);
    },
    setMinZoom: (h) => {
      const { panZoom: y, maxZoom: w } = v();
      y?.setScaleExtent([h, w]), m({ minZoom: h });
    },
    setMaxZoom: (h) => {
      const { panZoom: y, minZoom: w } = v();
      y?.setScaleExtent([w, h]), m({ maxZoom: h });
    },
    setTranslateExtent: (h) => {
      v().panZoom?.setTranslateExtent(h), m({ translateExtent: h });
    },
    resetSelectedElements: () => {
      const { edges: h, nodes: y, triggerNodeChanges: w, triggerEdgeChanges: x, elementsSelectable: _ } = v();
      if (!_)
        return;
      const b = y.reduce((I, C) => C.selected ? [...I, ct(C.id, !1)] : I, []), S = h.reduce((I, C) => C.selected ? [...I, ct(C.id, !1)] : I, []);
      w(b), x(S);
    },
    setNodeExtent: (h) => {
      const { nodes: y, nodeLookup: w, parentLookup: x, nodeOrigin: _, elevateNodesOnSelect: b, nodeExtent: S, zIndexMode: I } = v();
      h[0][0] === S[0][0] && h[0][1] === S[0][1] && h[1][0] === S[1][0] && h[1][1] === S[1][1] || (ts(y, w, x, {
        nodeOrigin: _,
        nodeExtent: h,
        elevateNodesOnSelect: b,
        checkEquality: !1,
        zIndexMode: I
      }), m({ nodeExtent: h }));
    },
    panBy: (h) => {
      const { transform: y, width: w, height: x, panZoom: _, translateExtent: b } = v();
      return s1({ delta: h, panZoom: _, transform: y, translateExtent: b, width: w, height: x });
    },
    setCenter: async (h, y, w) => {
      const { width: x, height: _, maxZoom: b, panZoom: S } = v();
      if (!S)
        return !1;
      const I = typeof w?.zoom < "u" ? w.zoom : b;
      return await S.setViewport({
        x: x / 2 - h * I,
        y: _ / 2 - y * I,
        zoom: I
      }, { duration: w?.duration, ease: w?.ease, interpolate: w?.interpolate }), !0;
    },
    cancelConnection: () => {
      m({
        connection: { ...md }
      });
    },
    updateConnection: (h) => {
      m({ connection: h });
    },
    reset: () => m({ ...Vo() })
  };
}, Object.is);
function My({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: a, initialWidth: r, initialHeight: i, initialMinZoom: s, initialMaxZoom: o, initialFitViewOptions: l, fitView: u, nodeOrigin: f, nodeExtent: d, zIndexMode: c, children: m }) {
  const [v] = pe(() => Ey({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: a,
    width: r,
    height: i,
    fitView: u,
    minZoom: s,
    maxZoom: o,
    fitViewOptions: l,
    nodeOrigin: f,
    nodeExtent: d,
    zIndexMode: c
  }));
  return p.jsx(F1, { value: v, children: p.jsx(fx, { children: m }) });
}
function Iy({ children: e, nodes: t, edges: n, defaultNodes: a, defaultEdges: r, width: i, height: s, fitView: o, fitViewOptions: l, minZoom: u, maxZoom: f, nodeOrigin: d, nodeExtent: c, zIndexMode: m }) {
  return xn(ei) ? p.jsx(p.Fragment, { children: e }) : p.jsx(My, { initialNodes: t, initialEdges: n, defaultNodes: a, defaultEdges: r, initialWidth: i, initialHeight: s, fitView: o, initialFitViewOptions: l, initialMinZoom: u, initialMaxZoom: f, nodeOrigin: d, nodeExtent: c, zIndexMode: m, children: e });
}
const Cy = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function Ny({ nodes: e, edges: t, defaultNodes: n, defaultEdges: a, className: r, nodeTypes: i, edgeTypes: s, onNodeClick: o, onEdgeClick: l, onInit: u, onMove: f, onMoveStart: d, onMoveEnd: c, onConnect: m, onConnectStart: v, onConnectEnd: g, onClickConnectStart: h, onClickConnectEnd: y, onNodeMouseEnter: w, onNodeMouseMove: x, onNodeMouseLeave: _, onNodeContextMenu: b, onNodeDoubleClick: S, onNodeDragStart: I, onNodeDrag: C, onNodeDragStop: R, onNodesDelete: O, onEdgesDelete: D, onDelete: L, onSelectionChange: H, onSelectionDragStart: E, onSelectionDrag: N, onSelectionDragStop: $, onSelectionContextMenu: P, onSelectionStart: B, onSelectionEnd: T, onBeforeDelete: q, connectionMode: z, connectionLineType: Z = it.Bezier, connectionLineStyle: re, connectionLineComponent: ne, connectionLineContainerStyle: W, deleteKeyCode: Q = "Backspace", selectionKeyCode: J = "Shift", selectionOnDrag: F = !1, selectionMode: ee = fn.Full, panActivationKeyCode: ue = "Space", multiSelectionKeyCode: le = pn() ? "Meta" : "Control", zoomActivationKeyCode: G = pn() ? "Meta" : "Control", snapToGrid: j, snapGrid: ae, onlyRenderVisibleElements: te = !1, selectNodesOnDrag: de, nodesDraggable: be, autoPanOnNodeFocus: A, nodesConnectable: M, nodesFocusable: k, nodeOrigin: U = Wd, edgesFocusable: V, edgesReconnectable: K, elementsSelectable: ie = !0, defaultViewport: ce = J1, minZoom: he = 0.5, maxZoom: ve = 2, translateExtent: Re = dn, preventScrolling: Oe = !0, nodeExtent: Pe, defaultMarkerColor: st = "#b1b1b7", zoomOnScroll: ot = !0, zoomOnPinch: Ue = !0, panOnScroll: Je = !1, panOnScrollSpeed: xt = 0.5, panOnScrollMode: An = ht.Free, zoomOnDoubleClick: ii = !0, panOnDrag: si = !0, onPaneClick: oi, onPaneMouseEnter: li, onPaneMouseMove: ui, onPaneMouseLeave: ci, onPaneScroll: di, onPaneContextMenu: fi, paneClickDistance: hi = 1, nodeClickDistance: pi = 0, children: gi, onReconnect: mi, onReconnectStart: vi, onReconnectEnd: xi, onEdgeContextMenu: En, onEdgeDoubleClick: yi, onEdgeMouseEnter: _i, onEdgeMouseMove: wi, onEdgeMouseLeave: Si, reconnectRadius: bi = 10, onNodesChange: Ai, onEdgesChange: Ei, noDragClassName: Mi = "nodrag", noWheelClassName: Ii = "nowheel", noPanClassName: Mn = "nopan", fitView: In, fitViewOptions: Cn, connectOnClick: Ci, attributionPosition: Ni, proOptions: Nn, defaultEdgeOptions: Qe, elevateNodesOnSelect: Y = !0, elevateEdgesOnSelect: Ri = !1, disableKeyboardA11y: Rn = !1, autoPanOnConnect: ye, autoPanOnNodeDrag: Le, autoPanOnSelection: je = !0, autoPanSpeed: et, connectionRadius: Jt, isValidConnection: tt, onError: yt, style: Kf, id: Ds, nodeDragThreshold: Yf, connectionDragThreshold: Xf, viewport: Jf, onViewportChange: Qf, width: eh, height: th, colorMode: nh = "light", debug: rh, onScroll: Ps, ariaLabelConfig: ah, zIndexMode: ks = "basic", ...ih }, sh) {
  const $i = Ds || "1", oh = nx(nh), lh = ge((Ts) => {
    Ts.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Ps?.(Ts);
  }, [Ps]);
  return p.jsx("div", { "data-testid": "rf__wrapper", ...ih, onScroll: lh, style: { ...Kf, ...Cy }, ref: sh, className: Ie(["react-flow", r, oh]), id: Ds, role: "application", children: p.jsxs(Iy, { nodes: e, edges: t, width: eh, height: th, fitView: In, fitViewOptions: Cn, minZoom: he, maxZoom: ve, nodeOrigin: U, nodeExtent: Pe, zIndexMode: ks, children: [p.jsx(tx, { nodes: e, edges: t, defaultNodes: n, defaultEdges: a, onConnect: m, onConnectStart: v, onConnectEnd: g, onClickConnectStart: h, onClickConnectEnd: y, nodesDraggable: be, autoPanOnNodeFocus: A, nodesConnectable: M, nodesFocusable: k, edgesFocusable: V, edgesReconnectable: K, elementsSelectable: ie, elevateNodesOnSelect: Y, elevateEdgesOnSelect: Ri, minZoom: he, maxZoom: ve, nodeExtent: Pe, onNodesChange: Ai, onEdgesChange: Ei, snapToGrid: j, snapGrid: ae, connectionMode: z, translateExtent: Re, connectOnClick: Ci, defaultEdgeOptions: Qe, fitView: In, fitViewOptions: Cn, onNodesDelete: O, onEdgesDelete: D, onDelete: L, onNodeDragStart: I, onNodeDrag: C, onNodeDragStop: R, onSelectionDrag: N, onSelectionDragStart: E, onSelectionDragStop: $, onMove: f, onMoveStart: d, onMoveEnd: c, noPanClassName: Mn, nodeOrigin: U, rfId: $i, autoPanOnConnect: ye, autoPanOnNodeDrag: Le, autoPanSpeed: et, onError: yt, connectionRadius: Jt, isValidConnection: tt, selectNodesOnDrag: de, nodeDragThreshold: Yf, connectionDragThreshold: Xf, onBeforeDelete: q, debug: rh, ariaLabelConfig: ah, zIndexMode: ks }), p.jsx(by, { onInit: u, onNodeClick: o, onEdgeClick: l, onNodeMouseEnter: w, onNodeMouseMove: x, onNodeMouseLeave: _, onNodeContextMenu: b, onNodeDoubleClick: S, nodeTypes: i, edgeTypes: s, connectionLineType: Z, connectionLineStyle: re, connectionLineComponent: ne, connectionLineContainerStyle: W, selectionKeyCode: J, selectionOnDrag: F, selectionMode: ee, deleteKeyCode: Q, multiSelectionKeyCode: le, panActivationKeyCode: ue, zoomActivationKeyCode: G, onlyRenderVisibleElements: te, defaultViewport: ce, translateExtent: Re, minZoom: he, maxZoom: ve, preventScrolling: Oe, zoomOnScroll: ot, zoomOnPinch: Ue, zoomOnDoubleClick: ii, panOnScroll: Je, panOnScrollSpeed: xt, panOnScrollMode: An, panOnDrag: si, autoPanOnSelection: je, onPaneClick: oi, onPaneMouseEnter: li, onPaneMouseMove: ui, onPaneMouseLeave: ci, onPaneScroll: di, onPaneContextMenu: fi, paneClickDistance: hi, nodeClickDistance: pi, onSelectionContextMenu: P, onSelectionStart: B, onSelectionEnd: T, onReconnect: mi, onReconnectStart: vi, onReconnectEnd: xi, onEdgeContextMenu: En, onEdgeDoubleClick: yi, onEdgeMouseEnter: _i, onEdgeMouseMove: wi, onEdgeMouseLeave: Si, reconnectRadius: bi, defaultMarkerColor: st, noDragClassName: Mi, noWheelClassName: Ii, noPanClassName: Mn, rfId: $i, disableKeyboardA11y: Rn, nodeExtent: Pe, viewport: Jf, onViewportChange: Qf }), p.jsx(X1, { onSelectionChange: H }), gi, p.jsx(V1, { proOptions: Nn, position: Ni }), p.jsx(j1, { rfId: $i, disableKeyboardA11y: Rn })] }) });
}
var Ry = Kd(Ny);
const $y = (e) => e.domNode?.querySelector(".react-flow__edgelabel-renderer");
function Dy({ children: e }) {
  const t = me($y);
  return t ? ch(e, t) : null;
}
const Py = (e) => ({
  x: e.transform[0],
  y: e.transform[1],
  zoom: e.transform[2]
});
function ky() {
  return me(Py, _e);
}
function Ty({ dimensions: e, lineWidth: t, variant: n, className: a }) {
  return p.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Ie(["react-flow__background-pattern", n, a]) });
}
function Ly({ radius: e, className: t }) {
  return p.jsx("circle", { cx: e, cy: e, r: e, className: Ie(["react-flow__background-pattern", "dots", t]) });
}
var Ke;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ke || (Ke = {}));
const Oy = {
  [Ke.Dots]: 1,
  [Ke.Lines]: 1,
  [Ke.Cross]: 6
}, By = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function _f({
  id: e,
  variant: t = Ke.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: a,
  lineWidth: r = 1,
  offset: i = 0,
  color: s,
  bgColor: o,
  style: l,
  className: u,
  patternClassName: f
}) {
  const d = oe(null), { transform: c, patternId: m } = me(By, _e), v = a || Oy[t], g = t === Ke.Dots, h = t === Ke.Cross, y = Array.isArray(n) ? n : [n, n], w = [y[0] * c[2] || 1, y[1] * c[2] || 1], x = v * c[2], _ = Array.isArray(i) ? i : [i, i], b = h ? [x, x] : w, S = [
    _[0] * c[2] || 1 + b[0] / 2,
    _[1] * c[2] || 1 + b[1] / 2
  ], I = `${m}${e || ""}`;
  return p.jsxs("svg", { className: Ie(["react-flow__background", u]), style: {
    ...l,
    ...ri,
    "--xy-background-color-props": o,
    "--xy-background-pattern-color-props": s
  }, ref: d, "data-testid": "rf__background", children: [p.jsx("pattern", { id: I, x: c[0] % w[0], y: c[1] % w[1], width: w[0], height: w[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${S[0]},-${S[1]})`, children: g ? p.jsx(Ly, { radius: x / 2, className: f }) : p.jsx(Ty, { dimensions: b, lineWidth: r, variant: t, className: f }) }), p.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${I})` })] });
}
_f.displayName = "Background";
const Fy = Me(_f);
function Hy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: p.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Zy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: p.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function qy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: p.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function zy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: p.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function Uy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: p.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Bn({ children: e, className: t, ...n }) {
  return p.jsx("button", { type: "button", className: Ie(["react-flow__controls-button", t]), ...n, children: e });
}
const jy = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function wf({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: a = !0, fitViewOptions: r, onZoomIn: i, onZoomOut: s, onFitView: o, onInteractiveChange: l, className: u, children: f, position: d = "bottom-left", orientation: c = "vertical", "aria-label": m }) {
  const v = Se(), { isInteractive: g, minZoomReached: h, maxZoomReached: y, ariaLabelConfig: w } = me(jy, _e), { zoomIn: x, zoomOut: _, fitView: b } = ni(), S = () => {
    x(), i?.();
  }, I = () => {
    _(), s?.();
  }, C = () => {
    b(r), o?.();
  }, R = () => {
    v.setState({
      nodesDraggable: !g,
      nodesConnectable: !g,
      elementsSelectable: !g
    }), l?.(!g);
  }, O = c === "horizontal" ? "horizontal" : "vertical";
  return p.jsxs(ti, { className: Ie(["react-flow__controls", O, u]), position: d, style: e, "data-testid": "rf__controls", "aria-label": m ?? w["controls.ariaLabel"], children: [t && p.jsxs(p.Fragment, { children: [p.jsx(Bn, { onClick: S, className: "react-flow__controls-zoomin", title: w["controls.zoomIn.ariaLabel"], "aria-label": w["controls.zoomIn.ariaLabel"], disabled: y, children: p.jsx(Hy, {}) }), p.jsx(Bn, { onClick: I, className: "react-flow__controls-zoomout", title: w["controls.zoomOut.ariaLabel"], "aria-label": w["controls.zoomOut.ariaLabel"], disabled: h, children: p.jsx(Zy, {}) })] }), n && p.jsx(Bn, { className: "react-flow__controls-fitview", onClick: C, title: w["controls.fitView.ariaLabel"], "aria-label": w["controls.fitView.ariaLabel"], children: p.jsx(qy, {}) }), a && p.jsx(Bn, { className: "react-flow__controls-interactive", onClick: R, title: w["controls.interactive.ariaLabel"], "aria-label": w["controls.interactive.ariaLabel"], children: g ? p.jsx(Uy, {}) : p.jsx(zy, {}) }), f] });
}
wf.displayName = "Controls";
const Vy = Me(wf);
function Wy({ id: e, x: t, y: n, width: a, height: r, style: i, color: s, strokeColor: o, strokeWidth: l, className: u, borderRadius: f, shapeRendering: d, selected: c, onClick: m }) {
  const { background: v, backgroundColor: g } = i || {}, h = s || v || g;
  return p.jsx("rect", { className: Ie(["react-flow__minimap-node", { selected: c }, u]), x: t, y: n, rx: f, ry: f, width: a, height: r, style: {
    fill: h,
    stroke: o,
    strokeWidth: l
  }, shapeRendering: d, onClick: m ? (y) => m(y, e) : void 0 });
}
const Gy = Me(Wy), Ky = (e) => e.nodes.map((t) => t.id), zi = (e) => e instanceof Function ? e : () => e;
function Yy({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: a = 5,
  nodeStrokeWidth: r,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = Gy,
  onClick: s
}) {
  const o = me(Ky, _e), l = zi(t), u = zi(e), f = zi(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return p.jsx(p.Fragment, { children: o.map((c) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    p.jsx(Jy, { id: c, nodeColorFunc: l, nodeStrokeColorFunc: u, nodeClassNameFunc: f, nodeBorderRadius: a, nodeStrokeWidth: r, NodeComponent: i, onClick: s, shapeRendering: d }, c)
  )) });
}
function Xy({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: a, nodeBorderRadius: r, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: o, onClick: l }) {
  const { node: u, x: f, y: d, width: c, height: m } = me((v) => {
    const g = v.nodeLookup.get(e);
    if (!g)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const h = g.internals.userNode, { x: y, y: w } = g.internals.positionAbsolute, { width: x, height: _ } = Xe(h);
    return {
      node: h,
      x: y,
      y: w,
      width: x,
      height: _
    };
  }, _e);
  return !u || u.hidden || !bd(u) ? null : p.jsx(o, { x: f, y: d, width: c, height: m, style: u.style, selected: !!u.selected, className: a(u), color: t(u), borderRadius: r, strokeColor: n(u), strokeWidth: i, shapeRendering: s, onClick: l, id: u.id });
}
const Jy = Me(Xy);
var Qy = Me(Yy);
const e_ = 200, t_ = 150, n_ = (e) => !e.hidden, r_ = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? wd(wn(e.nodeLookup, { filter: n_ }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, a_ = "react-flow__minimap-desc";
function Sf({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: a,
  nodeClassName: r = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: o,
  bgColor: l,
  maskColor: u,
  maskStrokeColor: f,
  maskStrokeWidth: d,
  position: c = "bottom-right",
  onClick: m,
  onNodeClick: v,
  pannable: g = !1,
  zoomable: h = !1,
  ariaLabel: y,
  inversePan: w,
  zoomStep: x = 1,
  offsetScale: _ = 5
}) {
  const b = Se(), S = oe(null), { boundingRect: I, viewBB: C, rfId: R, panZoom: O, translateExtent: D, flowWidth: L, flowHeight: H, ariaLabelConfig: E } = me(r_, _e), N = e?.width ?? e_, $ = e?.height ?? t_, P = I.width / N, B = I.height / $, T = Math.max(P, B), q = T * N, z = T * $, Z = _ * T, re = I.x - (q - I.width) / 2 - Z, ne = I.y - (z - I.height) / 2 - Z, W = q + Z * 2, Q = z + Z * 2, J = `${a_}-${R}`, F = oe(0), ee = oe();
  F.current = T, fe(() => {
    if (S.current && O)
      return ee.current = g1({
        domNode: S.current,
        panZoom: O,
        getTransform: () => b.getState().transform,
        getViewScale: () => F.current
      }), () => {
        ee.current?.destroy();
      };
  }, [O]), fe(() => {
    ee.current?.update({
      translateExtent: D,
      width: L,
      height: H,
      inversePan: w,
      pannable: g,
      zoomStep: x,
      zoomable: h
    });
  }, [g, h, w, x, D, L, H]);
  const ue = m ? (j) => {
    const [ae, te] = ee.current?.pointer(j) || [0, 0];
    m(j, { x: ae, y: te });
  } : void 0, le = v ? ge((j, ae) => {
    const te = b.getState().nodeLookup.get(ae).internals.userNode;
    v(j, te);
  }, []) : void 0, G = y ?? E["minimap.ariaLabel"];
  return p.jsx(ti, { position: c, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof d == "number" ? d * T : void 0,
    "--xy-minimap-node-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: Ie(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: p.jsxs("svg", { width: N, height: $, viewBox: `${re} ${ne} ${W} ${Q}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": J, ref: S, onClick: ue, children: [G && p.jsx("title", { id: J, children: G }), p.jsx(Qy, { onClick: le, nodeColor: a, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: r, nodeStrokeWidth: s, nodeComponent: o }), p.jsx("path", { className: "react-flow__minimap-mask", d: `M${re - Z},${ne - Z}h${W + Z * 2}v${Q + Z * 2}h${-W - Z * 2}z
        M${C.x},${C.y}h${C.width}v${C.height}h${-C.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
Sf.displayName = "MiniMap";
Me(Sf);
const i_ = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, s_ = {
  [Kt.Line]: "right",
  [Kt.Handle]: "bottom-right"
};
function o_({ nodeId: e, position: t, variant: n = Kt.Handle, className: a, style: r = void 0, children: i, color: s, minWidth: o = 10, minHeight: l = 10, maxWidth: u = Number.MAX_VALUE, maxHeight: f = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: c, autoScale: m = !0, shouldResize: v, onResizeStart: g, onResize: h, onResizeEnd: y }) {
  const w = Qd(), x = typeof e == "string" ? e : w, _ = Se(), b = oe(null), S = n === Kt.Handle, I = me(ge(i_(S && m), [S, m]), _e), C = oe(null), R = t ?? s_[n];
  fe(() => {
    if (!(!b.current || !x))
      return C.current || (C.current = C1({
        domNode: b.current,
        nodeId: x,
        getStoreItems: () => {
          const { nodeLookup: D, transform: L, snapGrid: H, snapToGrid: E, nodeOrigin: N, domNode: $ } = _.getState();
          return {
            nodeLookup: D,
            transform: L,
            snapGrid: H,
            snapToGrid: E,
            nodeOrigin: N,
            paneDomNode: $
          };
        },
        onChange: (D, L) => {
          const { triggerNodeChanges: H, nodeLookup: E, parentLookup: N, nodeOrigin: $ } = _.getState(), P = [], B = { x: D.x, y: D.y }, T = E.get(x);
          if (T && T.expandParent && T.parentId) {
            const q = T.origin ?? $, z = D.width ?? T.measured.width ?? 0, Z = D.height ?? T.measured.height ?? 0, re = {
              id: T.id,
              parentId: T.parentId,
              rect: {
                width: z,
                height: Z,
                ...Ad({
                  x: D.x ?? T.position.x,
                  y: D.y ?? T.position.y
                }, { width: z, height: Z }, T.parentId, E, q)
              }
            }, ne = Es([re], E, N, $);
            P.push(...ne), B.x = D.x ? Math.max(q[0] * z, D.x) : void 0, B.y = D.y ? Math.max(q[1] * Z, D.y) : void 0;
          }
          if (B.x !== void 0 && B.y !== void 0) {
            const q = {
              id: x,
              type: "position",
              position: { ...B }
            };
            P.push(q);
          }
          if (D.width !== void 0 && D.height !== void 0) {
            const z = {
              id: x,
              type: "dimensions",
              resizing: !0,
              setAttributes: c ? c === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: D.width,
                height: D.height
              }
            };
            P.push(z);
          }
          for (const q of L) {
            const z = {
              ...q,
              type: "position"
            };
            P.push(z);
          }
          H(P);
        },
        onEnd: ({ width: D, height: L }) => {
          const H = {
            id: x,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: D,
              height: L
            }
          };
          _.getState().triggerNodeChanges([H]);
        }
      })), C.current.update({
        controlPosition: R,
        boundaries: {
          minWidth: o,
          minHeight: l,
          maxWidth: u,
          maxHeight: f
        },
        keepAspectRatio: d,
        resizeDirection: c,
        onResizeStart: g,
        onResize: h,
        onResizeEnd: y,
        shouldResize: v
      }), () => {
        C.current?.destroy();
      };
  }, [
    R,
    o,
    l,
    u,
    f,
    d,
    g,
    h,
    y,
    v
  ]);
  const O = R.split("-");
  return p.jsx("div", { className: Ie(["react-flow__resize-control", "nodrag", ...O, n, a]), ref: b, style: {
    ...r,
    scale: I,
    ...s && { [S ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
Me(o_);
const l_ = "border-dashed border-border-default bg-surface-page text-text-secondary shadow-sm hover:border-border-strong", Wo = "var(--xy-edge-stroke)", u_ = ({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: a,
  targetY: r,
  sourcePosition: i,
  targetPosition: s,
  data: o
}) => {
  const [l, u] = pe(!1), [f, d] = pe(!1), [c, m] = pe(!1), v = o, [g, h, y] = Ba({
    sourceX: t,
    sourceY: n,
    sourcePosition: i,
    targetX: a,
    targetY: r,
    targetPosition: s
  });
  if (!v)
    return /* @__PURE__ */ p.jsx(Yt, { id: e, path: g, style: { stroke: Wo } });
  const w = (S) => {
    u(!1), v.onPick(S, { sourceId: v.sourceId, targetId: v.targetId });
  }, x = l || f || c, _ = /* @__PURE__ */ p.jsx(
    "button",
    {
      "aria-label": "Insert step here",
      className: xe(
        "flex size-8 items-center justify-center rounded-full border transition-opacity focus-visible:opacity-100 focus-visible:outline-none",
        l_,
        x ? "opacity-100" : "opacity-0",
        v.disabled && "cursor-not-allowed!"
      ),
      "data-testid": `add-step-button-${v.sourceId}-${v.targetId}`,
      disabled: v.disabled,
      type: "button",
      children: /* @__PURE__ */ p.jsx(Za, { className: "size-5", strokeWidth: 1.5 })
    }
  );
  let b;
  return v.disabled ? b = v.disabledReason ? /* @__PURE__ */ p.jsx(Rh, { delayDuration: 150, children: /* @__PURE__ */ p.jsxs($h, { children: [
    /* @__PURE__ */ p.jsx(Dh, { asChild: !0, children: /* @__PURE__ */ p.jsx("span", { tabIndex: 0, children: _ }) }),
    /* @__PURE__ */ p.jsx(Ph, { children: v.disabledReason })
  ] }) }) : _ : b = /* @__PURE__ */ p.jsxs(ic, { open: l, onOpenChange: u, children: [
    /* @__PURE__ */ p.jsx(sc, { asChild: !0, children: _ }),
    /* @__PURE__ */ p.jsx(oc, { align: "center", className: "border-0 p-0 shadow-lg", side: "top", sideOffset: 12, children: /* @__PURE__ */ p.jsx(zc, { onPick: w }) })
  ] }), /* @__PURE__ */ p.jsxs(
    "g",
    {
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      children: [
        /* @__PURE__ */ p.jsx(Yt, { id: e, interactionWidth: 30, path: g, style: { stroke: Wo } }),
        /* @__PURE__ */ p.jsx(Dy, { children: /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "pointer-events-auto absolute",
            style: {
              transform: `translate(-50%, -50%) translate(${h}px, ${y}px)`
            },
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            children: /* @__PURE__ */ p.jsx("div", { className: "flex h-10 w-16 items-center justify-center", children: b })
          }
        ) })
      ]
    }
  );
}, c_ = () => {
  const { data: e } = qa(), { data: t } = Oh(), n = e?.settings || [], a = t?.site?.url || "", [
    r = "all",
    i = !1,
    s = !1
  ] = za(n, [
    "members_signup_access",
    "donations_enabled",
    "recommendations_enabled"
  ]);
  return kp({
    siteUrl: a,
    membersSignupAccess: typeof r == "string" ? r : "all",
    donationsEnabled: !!i,
    recommendationsEnabled: !!s
  });
}, d_ = {
  useFileUpload: Rp,
  fileTypes: nn
}, f_ = Ne.lazy(() => import("./koenig-lexical-NZjxFY0X.js").then((e) => ({ default: e.EmailEditor })));
class h_ extends Ne.Component {
  state = { hasError: !1 };
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ p.jsx("div", { className: "p-6 text-sm text-destructive", children: "Something went wrong loading the editor." }) : this.props.children;
  }
}
const p_ = xe(
  // Base typography
  "text-[1.6rem] leading-[1.6] tracking-[-0.01em] pb-10",
  // Dark mode
  "dark:text-white dark:selection:bg-[rgba(88,101,116,0.99)]",
  // Placeholder styling
  "[&_.koenig-lexical-editor-input-placeholder]:font-sans! [&_.koenig-lexical-editor-input-placeholder]:text-[1.6rem] [&_.koenig-lexical-editor-input-placeholder]:tracking-tight",
  // Headings dark mode
  "[&_:is(h2,h3)]:dark:text-white",
  // Inputs
  "[&_.koenig-lexical_input]:text-[1.4rem]",
  // Plus icon
  "[&_[data-kg-plus-button]]:top-[-4px]",
  // Settings panel
  "[&_[data-kg-card-selected]]:isolate",
  // Content typography
  "[&_:is(p,blockquote,aside,ul,ol)]:tracking-tight",
  // Reset content typography inside card captions to match Koenig's caption styles
  "[&_figcaption_:is(p,blockquote,aside,ul,ol)]:text-[1.4rem] [&_figcaption_:is(p,blockquote,aside,ul,ol)]:tracking-[.025em]",
  "[&_figcaption_p]:mb-0",
  "[&_:is(h1)]:text-[36px] [&_:is(h2)]:text-[32px] [&_:is(h3)]:text-[26px] [&_:is(h4)]:text-[21px] [&_:is(h5)]:text-[19px] [&_:is(h6)]:text-[19px] [&_:is(h1,h2,h3,h4,h5,h6)]:mb-[0.5em]",
  // Horizontal ruler
  "[&_:is(hr)]:pt-0",
  // Paragraph spacing & bold
  "[&_p]:mb-4 [&_strong]:font-semibold",
  // Keep settings panel copy compact
  "[&_[data-kg-settings-panel]_p]:!mb-0",
  // Nested-editor (callout, etc.) fixes: align placeholder with text
  "[&_.not-kg-prose>div]:font-sans! [&_.not-kg-prose>div]:tracking-tight! [&_.not-kg-prose>div]:text-[1.6rem]! [&_.not-kg-prose>div]:leading-[1.6]!",
  "[&_.kg-inherit-styles_p]:mb-0!",
  "[&_.kg-inherit-styles]:pt-[3px]!",
  // CTA card: keep sponsor label at its intended 12.5px size
  "[&_.koenig-lexical-cta-label_p]:!text-[12.5px]"
), g_ = ({
  value: e,
  placeholder: t,
  className: n,
  onChange: a
}) => {
  const r = oe(null), i = oe(e), { unsplashConfig: s } = fh(), o = I0(), { data: l } = qa(), { data: u } = us(), f = l?.settings || [], d = u?.config, { fetchAutocompleteLinks: c, searchLinks: m } = c_(), v = $p(), g = d?.tenor?.googleApiKey ? d.tenor : null, [h] = za(f, ["transistor"]), y = Ce(() => ({
    unsplash: s,
    pinturaConfig: o,
    tenor: g,
    fetchEmbed: v,
    fetchAutocompleteLinks: c,
    searchLinks: m,
    feature: {
      transistor: h
    },
    visibilitySettings: "none"
  }), [s, o, g, v, c, m, h]), w = ge((S) => {
    r.current = S;
  }, []), x = ge((S) => {
    a && S && typeof S == "object" && a(JSON.stringify(S));
  }, [a]), _ = ge((S) => {
    (S.metaKey || S.ctrlKey) && S.key === "k" && S.stopPropagation();
  }, []), b = (S) => {
    r.current && Tp(r.current, S);
  };
  return /* @__PURE__ */ p.jsx("div", { className: "h-full", onKeyDown: _, onMouseDown: b, children: /* @__PURE__ */ p.jsx(h_, { children: /* @__PURE__ */ p.jsx(hh, { fallback: /* @__PURE__ */ p.jsx(dt, { size: "lg" }), children: /* @__PURE__ */ p.jsx("div", { className: xe("koenig-react-editor w-full", p_, n), children: /* @__PURE__ */ p.jsx(
    f_,
    {
      cardConfig: y,
      className: "koenig-lexical koenig-lexical-editor-input",
      darkMode: !1,
      fileUploader: d_,
      initialEditorState: i.current,
      placeholderText: t,
      registerAPI: w,
      onChange: x
    }
  ) }) }) }) });
}, m_ = Ne.memo(g_), v_ = ({ previewState: e }) => {
  const [t, n] = pe(null), [a, r] = pe(!1), i = oe(!1), s = oe(null), o = oe(null), l = oe(null), u = oe(null);
  function f() {
    o.current?.disconnect(), o.current = null, l.current !== null && (window.cancelAnimationFrame(l.current), l.current = null), u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null);
  }
  const d = e.status === "success" ? e.html : "";
  fe(() => (f(), i.current = !1, r(!1), n(null), () => {
    f();
  }), [d, e.status]);
  function c() {
    const h = s.current, y = h?.contentDocument;
    if (!h || !y)
      return;
    y.documentElement.style.overflowY = "hidden", y.body.style.overflowY = "hidden";
    const w = Math.max(
      y.documentElement?.scrollHeight || 0,
      y.body?.scrollHeight || 0,
      y.documentElement?.offsetHeight || 0,
      y.body?.offsetHeight || 0
    );
    w > 0 && (n((x) => x === w ? x : w), !i.current && u.current === null && (u.current = window.requestAnimationFrame(() => {
      u.current = window.requestAnimationFrame(() => {
        u.current = null, i.current = !0, r(!0);
      });
    })));
  }
  function m() {
    l.current !== null && window.cancelAnimationFrame(l.current), l.current = window.requestAnimationFrame(() => {
      l.current = null, c();
    });
  }
  function v() {
    const h = s.current, y = h?.contentDocument;
    if (!(!h || !y) && (f(), m(), typeof ResizeObserver < "u")) {
      const w = new ResizeObserver(() => {
        m();
      });
      w.observe(y.documentElement), w.observe(y.body), o.current = w;
    }
  }
  const g = e.status === "loading" || e.status === "success" && !a;
  return /* @__PURE__ */ p.jsxs("div", { className: "relative w-full", "data-testid": "email-preview", children: [
    g && /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "flex min-h-full items-start justify-center pt-24",
        "data-testid": "email-preview-loading",
        style: t ? { height: `${t}px` } : void 0,
        children: /* @__PURE__ */ p.jsx(dt, { size: "md" })
      }
    ),
    e.status === "success" && /* @__PURE__ */ p.jsx(
      "div",
      {
        "aria-hidden": !a,
        className: xe(
          "w-full",
          !a && "pointer-events-none absolute left-0 top-0 opacity-0"
        ),
        children: /* @__PURE__ */ p.jsx(
          "iframe",
          {
            ref: s,
            className: "w-full rounded bg-white",
            "data-testid": "email-preview-iframe",
            sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
            srcDoc: e.html,
            style: { height: t ? `${t}px` : "600px" },
            title: "Email preview",
            onLoad: v
          }
        )
      }
    ),
    (e.status === "error" || e.status === "invalid") && /* @__PURE__ */ p.jsx("div", { className: "flex h-full items-center justify-center px-4", "data-testid": "email-preview-error", children: /* @__PURE__ */ p.jsx("span", { className: "text-sm text-destructive", children: e.message }) })
  ] });
};
var Fn = { exports: {} }, Hn = { exports: {} }, Zn = { exports: {} }, Go;
function X() {
  return Go || (Go = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    function n(r) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, n(r);
    }
    function a(r) {
      var i = typeof r == "string" || r instanceof String;
      if (!i) {
        var s = n(r);
        throw r === null ? s = "null" : s === "object" && (s = r.constructor.name), new TypeError("Expected a string but received a ".concat(s));
      }
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Zn, Zn.exports)), Zn.exports;
}
var Ko;
function Is() {
  return Ko || (Ko = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i = Date.parse(i), isNaN(i) ? null : new Date(i);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Hn, Hn.exports)), Hn.exports;
}
var qn = { exports: {} }, wt = {}, Ae = {}, Yo;
function bn() {
  if (Yo) return Ae;
  Yo = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.farsiLocales = Ae.englishLocales = Ae.dotDecimal = Ae.decimal = Ae.commaDecimal = Ae.bengaliLocales = Ae.arabicLocales = Ae.alphanumeric = Ae.alpha = void 0;
  for (var e = Ae.alpha = {
    "en-US": /^[A-Z]+$/i,
    "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[А-Я]+$/i,
    "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[A-ZÆØÅ]+$/i,
    "de-DE": /^[A-ZÄÖÜß]+$/i,
    "el-GR": /^[Α-ώ]+$/i,
    "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
    "fi-FI": /^[A-ZÅÄÖ]+$/i,
    "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "nb-NO": /^[A-ZÆØÅ]+$/i,
    "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[A-ZÆØÅ]+$/i,
    "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[А-ЯЁ]+$/i,
    "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
    "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๐\s]+$/i,
    "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[א-ת]+$/,
    fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
    "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
    "si-LK": /^[\u0D80-\u0DFF]+$/
  }, t = Ae.alphanumeric = {
    "en-US": /^[0-9A-Z]+$/i,
    "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[0-9А-Я]+$/i,
    "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[0-9A-ZÆØÅ]+$/i,
    "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
    "el-GR": /^[0-9Α-ω]+$/i,
    "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
    "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
    "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
    "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[0-9А-ЯЁ]+$/i,
    "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
    "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๙\s]+$/i,
    "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[0-9א-ת]+$/,
    fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
    "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
    "si-LK": /^[0-9\u0D80-\u0DFF]+$/
  }, n = Ae.decimal = {
    "en-US": ".",
    ar: "٫"
  }, a = Ae.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"], r, i = 0; i < a.length; i++)
    r = "en-".concat(a[i]), e[r] = e["en-US"], t[r] = t["en-US"], n[r] = n["en-US"];
  for (var s = Ae.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"], o, l = 0; l < s.length; l++)
    o = "ar-".concat(s[l]), e[o] = e.ar, t[o] = t.ar, n[o] = n.ar;
  for (var u = Ae.farsiLocales = ["IR", "AF"], f, d = 0; d < u.length; d++)
    f = "fa-".concat(u[d]), t[f] = t.fa, n[f] = n.ar;
  for (var c = Ae.bengaliLocales = ["BD", "IN"], m, v = 0; v < c.length; v++)
    m = "bn-".concat(c[v]), e[m] = e.bn, t[m] = t.bn, n[m] = n["en-US"];
  for (var g = Ae.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"], h = Ae.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"], y = 0; y < g.length; y++)
    n[g[y]] = n["en-US"];
  for (var w = 0; w < h.length; w++)
    n[h[w]] = ",";
  return e["fr-CA"] = e["fr-FR"], t["fr-CA"] = t["fr-FR"], e["pt-BR"] = e["pt-PT"], t["pt-BR"] = t["pt-PT"], n["pt-BR"] = n["pt-PT"], e["pl-Pl"] = e["pl-PL"], t["pl-Pl"] = t["pl-PL"], n["pl-Pl"] = n["pl-PL"], e["fa-AF"] = e.fa, Ae;
}
var Xo;
function bf() {
  if (Xo) return wt;
  Xo = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = a, wt.locales = void 0;
  var e = n(/* @__PURE__ */ X()), t = /* @__PURE__ */ bn();
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, i) {
    (0, e.default)(r), i = i || {};
    var s = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(i.locale ? t.decimal[i.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
    if (r === "" || r === "." || r === "," || r === "-" || r === "+")
      return !1;
    var o = parseFloat(r.replace(",", "."));
    return s.test(r) && (!i.hasOwnProperty("min") || o >= i.min) && (!i.hasOwnProperty("max") || o <= i.max) && (!i.hasOwnProperty("lt") || o < i.lt) && (!i.hasOwnProperty("gt") || o > i.gt);
  }
  return wt.locales = Object.keys(t.decimal), wt;
}
var Jo;
function Af() {
  return Jo || (Jo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ bf());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i) ? parseFloat(i) : NaN;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(qn, qn.exports)), qn.exports;
}
var zn = { exports: {} }, Qo;
function x_() {
  return Qo || (Qo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), parseInt(i, s || 10);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(zn, zn.exports)), zn.exports;
}
var Un = { exports: {} }, el;
function y_() {
  return el || (el = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), s ? i === "1" || /^true$/i.test(i) : i !== "0" && !/^false$/i.test(i) && i !== "";
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Un, Un.exports)), Un.exports;
}
var jn = { exports: {} }, tl;
function __() {
  return tl || (tl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), i === s;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(jn, jn.exports)), jn.exports;
}
var Vn = { exports: {} }, Wn = { exports: {} }, nl;
function Ef() {
  return nl || (nl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    function n(r) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, n(r);
    }
    function a(r) {
      return n(r) === "object" && r !== null ? typeof r.toString == "function" ? r = r.toString() : r = "[object Object]" : (r === null || typeof r > "u" || isNaN(r) && !r.length) && (r = ""), String(r);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Wn, Wn.exports)), Wn.exports;
}
var Gn = { exports: {} }, rl;
function De() {
  return rl || (rl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = n;
    function n() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
      for (var i in r)
        typeof a[i] > "u" && (a[i] = r[i]);
      return a;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Gn, Gn.exports)), Gn.exports;
}
var al;
function w_() {
  return al || (al = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = i(/* @__PURE__ */ X()), a = i(/* @__PURE__ */ Ef()), r = i(/* @__PURE__ */ De());
    function i(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var s = {
      ignoreCase: !1,
      minOccurrences: 1
    };
    function o(l, u, f) {
      return (0, n.default)(l), f = (0, r.default)(f, s), f.ignoreCase ? l.toLowerCase().split((0, a.default)(u).toLowerCase()).length > f.minOccurrences : l.split((0, a.default)(u)).length > f.minOccurrences;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Vn, Vn.exports)), Vn.exports;
}
var Kn = { exports: {} }, il;
function S_() {
  return il || (il = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s, o) {
      return (0, n.default)(i), Object.prototype.toString.call(s) !== "[object RegExp]" && (s = new RegExp(s, o)), !!i.match(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Kn, Kn.exports)), Kn.exports;
}
var Yn = { exports: {} }, Xn = { exports: {} }, sl;
function Mf() {
  return sl || (sl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function r(s) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, r(s);
    }
    function i(s, o) {
      (0, n.default)(s);
      var l, u;
      r(o) === "object" ? (l = o.min || 0, u = o.max) : (l = arguments[1], u = arguments[2]);
      var f = encodeURI(s).split(/%..|./).length - 1;
      return f >= l && (typeof u > "u" || f <= u);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Xn, Xn.exports)), Xn.exports;
}
var Jn = { exports: {} }, ol;
function Cs() {
  return ol || (ol = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ De());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = {
      require_tld: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_numeric_tld: !1,
      allow_wildcard: !1,
      ignore_max_length: !1
    };
    function s(o, l) {
      (0, n.default)(o), l = (0, a.default)(l, i), l.allow_trailing_dot && o[o.length - 1] === "." && (o = o.substring(0, o.length - 1)), l.allow_wildcard === !0 && o.indexOf("*.") === 0 && (o = o.substring(2));
      var u = o.split("."), f = u[u.length - 1];
      return l.require_tld && (u.length < 2 || !l.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f) || /\s/.test(f)) || !l.allow_numeric_tld && /^\d+$/.test(f) ? !1 : u.every(function(d) {
        return !(d.length > 63 && !l.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(d) || /[\uff01-\uff5e]/.test(d) || /^-|-$/.test(d) || !l.allow_underscores && /_/.test(d));
      });
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Jn, Jn.exports)), Jn.exports;
}
var Qn = { exports: {} }, ll;
function ai() {
  return ll || (ll = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = u;
    var n = a(/* @__PURE__ */ X());
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var r = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", i = "(".concat(r, "[.]){3}").concat(r), s = new RegExp("^".concat(i, "$")), o = "(?:[0-9a-fA-F]{1,4})", l = new RegExp("^(" + "(?:".concat(o, ":){7}(?:").concat(o, "|:)|") + "(?:".concat(o, ":){6}(?:").concat(i, "|:").concat(o, "|:)|") + "(?:".concat(o, ":){5}(?::").concat(i, "|(:").concat(o, "){1,2}|:)|") + "(?:".concat(o, ":){4}(?:(:").concat(o, "){0,1}:").concat(i, "|(:").concat(o, "){1,3}|:)|") + "(?:".concat(o, ":){3}(?:(:").concat(o, "){0,2}:").concat(i, "|(:").concat(o, "){1,4}|:)|") + "(?:".concat(o, ":){2}(?:(:").concat(o, "){0,3}:").concat(i, "|(:").concat(o, "){1,5}|:)|") + "(?:".concat(o, ":){1}(?:(:").concat(o, "){0,4}:").concat(i, "|(:").concat(o, "){1,6}|:)|") + "(?::((?::".concat(o, "){0,5}:").concat(i, "|(?::").concat(o, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
    function u(f) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return (0, n.default)(f), d = String(d), d ? d === "4" ? s.test(f) : d === "6" ? l.test(f) : !1 : u(f, 4) || u(f, 6);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Qn, Qn.exports)), Qn.exports;
}
var ul;
function If() {
  return ul || (ul = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = y;
    var n = o(/* @__PURE__ */ X()), a = o(/* @__PURE__ */ Mf()), r = o(/* @__PURE__ */ Cs()), i = o(/* @__PURE__ */ ai()), s = o(/* @__PURE__ */ De());
    function o(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var l = {
      allow_display_name: !1,
      allow_underscores: !1,
      require_display_name: !1,
      allow_utf8_local_part: !0,
      require_tld: !0,
      blacklisted_chars: "",
      ignore_max_length: !1,
      host_blacklist: [],
      host_whitelist: []
    }, u = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, d = /^[a-z\d]+$/, c = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, v = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, g = 254;
    function h(w) {
      var x = w.replace(/^"(.+)"$/, "$1");
      if (!x.trim())
        return !1;
      var _ = /[\.";<>]/.test(x);
      if (_) {
        if (x === w)
          return !1;
        var b = x.split('"').length === x.split('\\"').length;
        if (!b)
          return !1;
      }
      return !0;
    }
    function y(w, x) {
      if ((0, n.default)(w), x = (0, s.default)(x, l), x.require_display_name || x.allow_display_name) {
        var _ = w.match(u);
        if (_) {
          var b = _[1];
          if (w = w.replace(b, "").replace(/(^<|>$)/g, ""), b.endsWith(" ") && (b = b.slice(0, -1)), !h(b))
            return !1;
        } else if (x.require_display_name)
          return !1;
      }
      if (!x.ignore_max_length && w.length > g)
        return !1;
      var S = w.split("@"), I = S.pop(), C = I.toLowerCase();
      if (x.host_blacklist.includes(C) || x.host_whitelist.length > 0 && !x.host_whitelist.includes(C))
        return !1;
      var R = S.join("@");
      if (x.domain_specific_validation && (C === "gmail.com" || C === "googlemail.com")) {
        R = R.toLowerCase();
        var O = R.split("+")[0];
        if (!(0, a.default)(O.replace(/\./g, ""), {
          min: 6,
          max: 30
        }))
          return !1;
        for (var D = O.split("."), L = 0; L < D.length; L++)
          if (!d.test(D[L]))
            return !1;
      }
      if (x.ignore_max_length === !1 && (!(0, a.default)(R, {
        max: 64
      }) || !(0, a.default)(I, {
        max: 254
      })))
        return !1;
      if (!(0, r.default)(I, {
        require_tld: x.require_tld,
        ignore_max_length: x.ignore_max_length,
        allow_underscores: x.allow_underscores
      })) {
        if (!x.allow_ip_domain)
          return !1;
        if (!(0, i.default)(I)) {
          if (!I.startsWith("[") || !I.endsWith("]"))
            return !1;
          var H = I.slice(1, -1);
          if (H.length === 0 || !(0, i.default)(H))
            return !1;
        }
      }
      if (R[0] === '"')
        return R = R.slice(1, R.length - 1), x.allow_utf8_local_part ? v.test(R) : c.test(R);
      for (var E = x.allow_utf8_local_part ? m : f, N = R.split("."), $ = 0; $ < N.length; $++)
        if (!E.test(N[$]))
          return !1;
      return !(x.blacklisted_chars && R.search(new RegExp("[".concat(x.blacklisted_chars, "]+"), "g")) !== -1);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Yn, Yn.exports)), Yn.exports;
}
var er = { exports: {} }, cl;
function b_() {
  return cl || (cl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = y;
    var n = s(/* @__PURE__ */ X()), a = s(/* @__PURE__ */ Cs()), r = s(/* @__PURE__ */ ai()), i = s(/* @__PURE__ */ De());
    function s(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function o(w, x) {
      return c(w) || d(w, x) || u(w, x) || l();
    }
    function l() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function u(w, x) {
      if (w) {
        if (typeof w == "string") return f(w, x);
        var _ = Object.prototype.toString.call(w).slice(8, -1);
        if (_ === "Object" && w.constructor && (_ = w.constructor.name), _ === "Map" || _ === "Set") return Array.from(w);
        if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return f(w, x);
      }
    }
    function f(w, x) {
      (x == null || x > w.length) && (x = w.length);
      for (var _ = 0, b = new Array(x); _ < x; _++) b[_] = w[_];
      return b;
    }
    function d(w, x) {
      var _ = w == null ? null : typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
      if (_ != null) {
        var b, S, I, C, R = [], O = !0, D = !1;
        try {
          if (I = (_ = _.call(w)).next, x !== 0) for (; !(O = (b = I.call(_)).done) && (R.push(b.value), R.length !== x); O = !0) ;
        } catch (L) {
          D = !0, S = L;
        } finally {
          try {
            if (!O && _.return != null && (C = _.return(), Object(C) !== C)) return;
          } finally {
            if (D) throw S;
          }
        }
        return R;
      }
    }
    function c(w) {
      if (Array.isArray(w)) return w;
    }
    var m = {
      protocols: ["http", "https", "ftp"],
      require_tld: !0,
      require_protocol: !1,
      require_host: !0,
      require_port: !1,
      require_valid_protocol: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_protocol_relative_urls: !1,
      allow_fragments: !0,
      allow_query_components: !0,
      validate_length: !0
    }, v = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function g(w) {
      return Object.prototype.toString.call(w) === "[object RegExp]";
    }
    function h(w, x) {
      for (var _ = 0; _ < x.length; _++) {
        var b = x[_];
        if (w === b || g(b) && b.test(w))
          return !0;
      }
      return !1;
    }
    function y(w, x) {
      if ((0, n.default)(w), !w || /[\s<>]/.test(w) || w.indexOf("mailto:") === 0 || (x = (0, i.default)(x, m), x.validate_length && w.length >= 2083) || !x.allow_fragments && w.includes("#") || !x.allow_query_components && (w.includes("?") || w.includes("&")))
        return !1;
      var _, b, S, I, C, R, O, D;
      if (O = w.split("#"), w = O.shift(), O = w.split("?"), w = O.shift(), O = w.split("://"), O.length > 1) {
        if (_ = O.shift().toLowerCase(), x.require_valid_protocol && x.protocols.indexOf(_) === -1)
          return !1;
      } else {
        if (x.require_protocol)
          return !1;
        if (w.slice(0, 2) === "//") {
          if (!x.allow_protocol_relative_urls)
            return !1;
          O[0] = w.slice(2);
        }
      }
      if (w = O.join("://"), w === "")
        return !1;
      if (O = w.split("/"), w = O.shift(), w === "" && !x.require_host)
        return !0;
      if (O = w.split("@"), O.length > 1) {
        if (x.disallow_auth || O[0] === "" || (b = O.shift(), b.indexOf(":") >= 0 && b.split(":").length > 2))
          return !1;
        var L = b.split(":"), H = o(L, 2), E = H[0], N = H[1];
        if (E === "" && N === "")
          return !1;
      }
      I = O.join("@"), R = null, D = null;
      var $ = I.match(v);
      if ($ ? (S = "", D = $[1], R = $[2] || null) : (O = I.split(":"), S = O.shift(), O.length && (R = O.join(":"))), R !== null && R.length > 0) {
        if (C = parseInt(R, 10), !/^[0-9]+$/.test(R) || C <= 0 || C > 65535)
          return !1;
      } else if (x.require_port)
        return !1;
      return x.host_whitelist ? h(S, x.host_whitelist) : S === "" && !x.require_host ? !0 : !(!(0, r.default)(S) && !(0, a.default)(S, x) && (!D || !(0, r.default)(D, 6)) || (S = S || D, x.host_blacklist && h(S, x.host_blacklist)));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(er, er.exports)), er.exports;
}
var tr = { exports: {} }, dl;
function A_() {
  return dl || (dl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = a(/* @__PURE__ */ X());
    function a(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var r = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/, i = /^([0-9a-fA-F]){12}$/, s = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/, o = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/, l = /^([0-9a-fA-F]){16}$/, u = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
    function f(d, c) {
      return (0, n.default)(d), c != null && c.eui && (c.eui = String(c.eui)), c != null && c.no_colons || c != null && c.no_separators ? c.eui === "48" ? i.test(d) : c.eui === "64" ? l.test(d) : i.test(d) || l.test(d) : c?.eui === "48" ? r.test(d) || s.test(d) : c?.eui === "64" ? o.test(d) || u.test(d) : f(d, {
        eui: "48"
      }) || f(d, {
        eui: "64"
      });
    }
    e.exports = t.default, e.exports.default = t.default;
  })(tr, tr.exports)), tr.exports;
}
var nr = { exports: {} }, fl;
function E_() {
  return fl || (fl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ ai());
    function r(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var i = /^\d{1,3}$/, s = 32, o = 128;
    function l(u) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, n.default)(u);
      var d = u.split("/");
      if (d.length !== 2 || !i.test(d[1]) || d[1].length > 1 && d[1].startsWith("0"))
        return !1;
      var c = (0, a.default)(d[0], f);
      if (!c)
        return !1;
      var m = null;
      switch (String(f)) {
        case "4":
          m = s;
          break;
        case "6":
          m = o;
          break;
        default:
          m = (0, a.default)(d[0], "6") ? o : s;
      }
      return d[1] <= m && d[1] >= 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(nr, nr.exports)), nr.exports;
}
var rr = { exports: {} }, hl;
function Cf() {
  return hl || (hl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = v;
    var n = a(/* @__PURE__ */ De());
    function a(g) {
      return g && g.__esModule ? g : { default: g };
    }
    function r(g, h) {
      return o(g) || s(g, h) || u(g, h) || i();
    }
    function i() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function s(g, h) {
      var y = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
      if (y != null) {
        var w, x, _, b, S = [], I = !0, C = !1;
        try {
          if (_ = (y = y.call(g)).next, h !== 0) for (; !(I = (w = _.call(y)).done) && (S.push(w.value), S.length !== h); I = !0) ;
        } catch (R) {
          C = !0, x = R;
        } finally {
          try {
            if (!I && y.return != null && (b = y.return(), Object(b) !== b)) return;
          } finally {
            if (C) throw x;
          }
        }
        return S;
      }
    }
    function o(g) {
      if (Array.isArray(g)) return g;
    }
    function l(g, h) {
      var y = typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
      if (!y) {
        if (Array.isArray(g) || (y = u(g)) || h) {
          y && (g = y);
          var w = 0, x = function() {
          };
          return { s: x, n: function() {
            return w >= g.length ? { done: !0 } : { done: !1, value: g[w++] };
          }, e: function(C) {
            throw C;
          }, f: x };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var _ = !0, b = !1, S;
      return { s: function() {
        y = y.call(g);
      }, n: function() {
        var C = y.next();
        return _ = C.done, C;
      }, e: function(C) {
        b = !0, S = C;
      }, f: function() {
        try {
          !_ && y.return != null && y.return();
        } finally {
          if (b) throw S;
        }
      } };
    }
    function u(g, h) {
      if (g) {
        if (typeof g == "string") return f(g, h);
        var y = Object.prototype.toString.call(g).slice(8, -1);
        if (y === "Object" && g.constructor && (y = g.constructor.name), y === "Map" || y === "Set") return Array.from(g);
        if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return f(g, h);
      }
    }
    function f(g, h) {
      (h == null || h > g.length) && (h = g.length);
      for (var y = 0, w = new Array(h); y < h; y++) w[y] = g[y];
      return w;
    }
    var d = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1
    };
    function c(g) {
      return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(g);
    }
    function m(g, h) {
      for (var y = [], w = Math.min(g.length, h.length), x = 0; x < w; x++)
        y.push([g[x], h[x]]);
      return y;
    }
    function v(g, h) {
      if (typeof h == "string" ? h = (0, n.default)({
        format: h
      }, d) : h = (0, n.default)(h, d), typeof g == "string" && c(h.format)) {
        var y = h.delimiters.find(function(N) {
          return h.format.indexOf(N) !== -1;
        }), w = h.strictMode ? y : h.delimiters.find(function(N) {
          return g.indexOf(N) !== -1;
        }), x = m(g.split(w), h.format.toLowerCase().split(y)), _ = {}, b = l(x), S;
        try {
          for (b.s(); !(S = b.n()).done; ) {
            var I = r(S.value, 2), C = I[0], R = I[1];
            if (C.length !== R.length)
              return !1;
            _[R.charAt(0)] = C;
          }
        } catch (N) {
          b.e(N);
        } finally {
          b.f();
        }
        var O = _.y;
        if (O.startsWith("-"))
          return !1;
        if (_.y.length === 2) {
          var D = parseInt(_.y, 10);
          if (isNaN(D))
            return !1;
          var L = (/* @__PURE__ */ new Date()).getFullYear() % 100;
          D < L ? O = "20".concat(_.y) : O = "19".concat(_.y);
        }
        var H = _.m;
        _.m.length === 1 && (H = "0".concat(_.m));
        var E = _.d;
        return _.d.length === 1 && (E = "0".concat(_.d)), new Date("".concat(O, "-").concat(H, "-").concat(E, "T00:00:00.000Z")).getUTCDate() === +_.d;
      }
      return h.strictMode ? !1 : Object.prototype.toString.call(g) === "[object Date]" && isFinite(g);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(rr, rr.exports)), rr.exports;
}
var ar = { exports: {} }, pl;
function M_() {
  return pl || (pl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ De());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = {
      hourFormat: "hour24",
      mode: "default"
    }, i = {
      hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
      },
      hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
      }
    };
    function s(o, l) {
      return l = (0, n.default)(l, r), typeof o != "string" ? !1 : i[l.hourFormat][l.mode].test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ar, ar.exports)), ar.exports;
}
var ir = { exports: {} }, gl;
function I_() {
  return gl || (gl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ X());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = {
      loose: !1
    }, i = ["true", "false", "1", "0"], s = [].concat(i, ["yes", "no"]);
    function o(l) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r;
      return (0, n.default)(l), u.loose ? s.includes(l.toLowerCase()) : i.includes(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ir, ir.exports)), ir.exports;
}
var sr = { exports: {} }, ml;
function C_() {
  return ml || (ml = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = w;
    var n = a(/* @__PURE__ */ X());
    function a(x) {
      return x && x.__esModule ? x : { default: x };
    }
    var r = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})", i = "(([a-zA-Z]{2,3}(-".concat(r, ")?)|([a-zA-Z]{5,8}))"), s = "([A-Za-z]{4})", o = "([A-Za-z]{2}|\\d{3})", l = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))", u = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])", f = "(".concat(u, "(-[A-Za-z0-9]{2,8})+)"), d = "(x(-[A-Za-z0-9]{1,8})+)", c = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))", m = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))", v = "(".concat(c, "|").concat(m, ")"), g = "(-|_)", h = "".concat(i, "(").concat(g).concat(s, ")?(").concat(g).concat(o, ")?(").concat(g).concat(l, ")*(").concat(g).concat(f, ")*(").concat(g).concat(d, ")?"), y = new RegExp("(^".concat(d, "$)|(^").concat(v, "$)|(^").concat(h, "$)"));
    function w(x) {
      return (0, n.default)(x), y.test(x);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(sr, sr.exports)), sr.exports;
}
var or = { exports: {} }, vl;
function N_() {
  return vl || (vl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
    function i(s) {
      if ((0, n.default)(s), !r.test(s)) return !1;
      for (var o = 0, l = 0; l < s.length; l++)
        l % 3 === 0 ? o += s[l] * 3 : l % 3 === 1 ? o += s[l] * 7 : o += s[l] * 1;
      return o % 10 === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(or, or.exports)), or.exports;
}
var St = {}, xl;
function R_() {
  if (xl) return St;
  xl = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = a, St.locales = void 0;
  var e = n(/* @__PURE__ */ X()), t = /* @__PURE__ */ bn();
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (0, e.default)(r);
    var o = r, l = s.ignore;
    if (l)
      if (l instanceof RegExp)
        o = o.replace(l, "");
      else if (typeof l == "string")
        o = o.replace(new RegExp("[".concat(l.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
      else
        throw new Error("ignore should be instance of a String or RegExp");
    if (i in t.alpha)
      return t.alpha[i].test(o);
    throw new Error("Invalid locale '".concat(i, "'"));
  }
  return St.locales = Object.keys(t.alpha), St;
}
var bt = {}, yl;
function $_() {
  if (yl) return bt;
  yl = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = a, bt.locales = void 0;
  var e = n(/* @__PURE__ */ X()), t = /* @__PURE__ */ bn();
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (0, e.default)(r);
    var o = r, l = s.ignore;
    if (l)
      if (l instanceof RegExp)
        o = o.replace(l, "");
      else if (typeof l == "string")
        o = o.replace(new RegExp("[".concat(l.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
      else
        throw new Error("ignore should be instance of a String or RegExp");
    if (i in t.alphanumeric)
      return t.alphanumeric[i].test(o);
    throw new Error("Invalid locale '".concat(i, "'"));
  }
  return bt.locales = Object.keys(t.alphanumeric), bt;
}
var lr = { exports: {} }, _l;
function D_() {
  return _l || (_l = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = /* @__PURE__ */ bn();
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = /^[0-9]+$/;
    function s(o, l) {
      return (0, n.default)(o), l && l.no_symbols ? i.test(o) : new RegExp("^[+-]?([0-9]*[".concat((l || {}).locale ? a.decimal[l.locale] : ".", "])?[0-9]+$")).test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(lr, lr.exports)), lr.exports;
}
var ur = { exports: {} }, wl;
function P_() {
  return wl || (wl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      AM: /^[A-Z]{2}\d{7}$/,
      // ARMENIA
      AR: /^[A-Z]{3}\d{6}$/,
      // ARGENTINA
      AT: /^[A-Z]\d{7}$/,
      // AUSTRIA
      AU: /^[A-Z]\d{7}$/,
      // AUSTRALIA
      AZ: /^[A-Z]{1}\d{8}$/,
      // AZERBAIJAN
      BE: /^[A-Z]{2}\d{6}$/,
      // BELGIUM
      BG: /^\d{9}$/,
      // BULGARIA
      BR: /^[A-Z]{2}\d{6}$/,
      // BRAZIL
      BY: /^[A-Z]{2}\d{7}$/,
      // BELARUS
      CA: /^[A-Z]{2}\d{6}$/,
      // CANADA
      CH: /^[A-Z]\d{7}$/,
      // SWITZERLAND
      CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
      // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
      CY: /^[A-Z](\d{6}|\d{8})$/,
      // CYPRUS
      CZ: /^\d{8}$/,
      // CZECH REPUBLIC
      DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
      // GERMANY
      DK: /^\d{9}$/,
      // DENMARK
      DZ: /^\d{9}$/,
      // ALGERIA
      EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
      // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
      ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
      // SPAIN
      FI: /^[A-Z]{2}\d{7}$/,
      // FINLAND
      FR: /^\d{2}[A-Z]{2}\d{5}$/,
      // FRANCE
      GB: /^\d{9}$/,
      // UNITED KINGDOM
      GR: /^[A-Z]{2}\d{7}$/,
      // GREECE
      HR: /^\d{9}$/,
      // CROATIA
      HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
      // HUNGARY
      IE: /^[A-Z0-9]{2}\d{7}$/,
      // IRELAND
      IN: /^[A-Z]{1}-?\d{7}$/,
      // INDIA
      ID: /^[A-C]\d{7}$/,
      // INDONESIA
      IR: /^[A-Z]\d{8}$/,
      // IRAN
      IS: /^(A)\d{7}$/,
      // ICELAND
      IT: /^[A-Z0-9]{2}\d{7}$/,
      // ITALY
      JM: /^[Aa]\d{7}$/,
      // JAMAICA
      JP: /^[A-Z]{2}\d{7}$/,
      // JAPAN
      KR: /^[MS]\d{8}$/,
      // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
      KZ: /^[a-zA-Z]\d{7}$/,
      // KAZAKHSTAN
      LI: /^[a-zA-Z]\d{5}$/,
      // LIECHTENSTEIN
      LT: /^[A-Z0-9]{8}$/,
      // LITHUANIA
      LU: /^[A-Z0-9]{8}$/,
      // LUXEMBURG
      LV: /^[A-Z0-9]{2}\d{7}$/,
      // LATVIA
      LY: /^[A-Z0-9]{8}$/,
      // LIBYA
      MT: /^\d{7}$/,
      // MALTA
      MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
      // MOZAMBIQUE
      MY: /^[AHK]\d{8}$/,
      // MALAYSIA
      MX: /^\d{10,11}$/,
      // MEXICO
      NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
      // NETHERLANDS
      NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
      // NEW ZEALAND
      PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
      // PHILIPPINES
      PK: /^[A-Z]{2}\d{7}$/,
      // PAKISTAN
      PL: /^[A-Z]{2}\d{7}$/,
      // POLAND
      PT: /^[A-Z]\d{6}$/,
      // PORTUGAL
      RO: /^\d{8,9}$/,
      // ROMANIA
      RU: /^\d{9}$/,
      // RUSSIAN FEDERATION
      SE: /^\d{8}$/,
      // SWEDEN
      SL: /^(P)[A-Z]\d{7}$/,
      // SLOVENIA
      SK: /^[0-9A-Z]\d{7}$/,
      // SLOVAKIA
      TH: /^[A-Z]{1,2}\d{6,7}$/,
      // THAILAND
      TR: /^[A-Z]\d{8}$/,
      // TURKEY
      UA: /^[A-Z]{2}\d{6}$/,
      // UKRAINE
      US: /^\d{9}$/,
      // UNITED STATES
      ZA: /^[TAMD]\d{8}$/
      // SOUTH AFRICA
    };
    function i(s, o) {
      (0, n.default)(s);
      var l = s.replace(/\s/g, "").toUpperCase();
      return o.toUpperCase() in r && r[o].test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ur, ur.exports)), ur.exports;
}
var cr = { exports: {} }, dr = { exports: {} }, Sl;
function Ns() {
  return Sl || (Sl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ X());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, i = /^[-+]?[0-9]+$/;
    function s(o, l) {
      (0, n.default)(o), l = l || {};
      var u = l.allow_leading_zeroes === !1 ? r : i, f = !l.hasOwnProperty("min") || o >= l.min, d = !l.hasOwnProperty("max") || o <= l.max, c = !l.hasOwnProperty("lt") || o < l.lt, m = !l.hasOwnProperty("gt") || o > l.gt;
      return u.test(o) && f && d && c && m;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(dr, dr.exports)), dr.exports;
}
var bl;
function k_() {
  return bl || (bl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ Ns());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i, {
        allow_leading_zeroes: !1,
        min: 0,
        max: 65535
      });
    }
    e.exports = t.default, e.exports.default = t.default;
  })(cr, cr.exports)), cr.exports;
}
var fr = { exports: {} }, Al;
function T_() {
  return Al || (Al = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i === i.toLowerCase();
    }
    e.exports = t.default, e.exports.default = t.default;
  })(fr, fr.exports)), fr.exports;
}
var hr = { exports: {} }, El;
function L_() {
  return El || (El = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i === i.toUpperCase();
    }
    e.exports = t.default, e.exports.default = t.default;
  })(hr, hr.exports)), hr.exports;
}
var pr = { exports: {} }, Ml;
function O_() {
  return Ml || (Ml = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ X());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^[0-9]{15}$/, i = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
    function s(o, l) {
      (0, n.default)(o), l = l || {};
      var u = r;
      if (l.allow_hyphens && (u = i), !u.test(o))
        return !1;
      o = o.replace(/-/g, "");
      for (var f = 0, d = 2, c = 14, m = 0; m < c; m++) {
        var v = o.substring(c - m - 1, c - m), g = parseInt(v, 10) * d;
        g >= 10 ? f += g % 10 + 1 : f += g, d === 1 ? d += 1 : d -= 1;
      }
      var h = (10 - f % 10) % 10;
      return h === parseInt(o.substring(14, 15), 10);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(pr, pr.exports)), pr.exports;
}
var gr = { exports: {} }, Il;
function B_() {
  return Il || (Il = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[\x00-\x7F]+$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(gr, gr.exports)), gr.exports;
}
var At = {}, Cl;
function Nf() {
  if (Cl) return At;
  Cl = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = a, At.fullWidth = void 0;
  var e = t(/* @__PURE__ */ X());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = At.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
  function a(r) {
    return (0, e.default)(r), n.test(r);
  }
  return At;
}
var Et = {}, Nl;
function Rf() {
  if (Nl) return Et;
  Nl = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.default = a, Et.halfWidth = void 0;
  var e = t(/* @__PURE__ */ X());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = Et.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
  function a(r) {
    return (0, e.default)(r), n.test(r);
  }
  return Et;
}
var mr = { exports: {} }, Rl;
function F_() {
  return Rl || (Rl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = i(/* @__PURE__ */ X()), a = /* @__PURE__ */ Nf(), r = /* @__PURE__ */ Rf();
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function s(o) {
      return (0, n.default)(o), a.fullWidth.test(o) && r.halfWidth.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(mr, mr.exports)), mr.exports;
}
var vr = { exports: {} }, $l;
function H_() {
  return $l || ($l = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /[^\x00-\x7F]/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(vr, vr.exports)), vr.exports;
}
var xr = { exports: {} }, yr = { exports: {} }, Dl;
function Z_() {
  return Dl || (Dl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = n;
    function n(a, r) {
      var i = a.join("");
      return new RegExp(i, r);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(yr, yr.exports)), yr.exports;
}
var Pl;
function q_() {
  return Pl || (Pl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Z_());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = (0, a.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
    function s(o) {
      return (0, n.default)(o), i.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(xr, xr.exports)), xr.exports;
}
var _r = { exports: {} }, kl;
function z_() {
  return kl || (kl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(_r, _r.exports)), _r.exports;
}
var wr = { exports: {} }, Sr = { exports: {} }, Tl;
function U_() {
  return Tl || (Tl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = function(r, i) {
      return r.some(function(s) {
        return i === s;
      });
    };
    t.default = n, e.exports = t.default, e.exports.default = t.default;
  })(Sr, Sr.exports)), Sr.exports;
}
var Ll;
function j_() {
  return Ll || (Ll = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = s(/* @__PURE__ */ De()), a = s(/* @__PURE__ */ X()), r = s(/* @__PURE__ */ U_()), i = /* @__PURE__ */ bn();
    function s(d) {
      return d && d.__esModule ? d : { default: d };
    }
    function o(d) {
      var c = new RegExp("^[-+]?([0-9]+)?(\\".concat(i.decimal[d.locale], "[0-9]{").concat(d.decimal_digits, "})").concat(d.force_decimal ? "" : "?", "$"));
      return c;
    }
    var l = {
      force_decimal: !1,
      decimal_digits: "1,",
      locale: "en-US"
    }, u = ["", "-", "+"];
    function f(d, c) {
      if ((0, a.default)(d), c = (0, n.default)(c, l), c.locale in i.decimal)
        return !(0, r.default)(u, d.replace(/ /g, "")) && o(c).test(d);
      throw new Error("Invalid locale '".concat(c.locale, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(wr, wr.exports)), wr.exports;
}
var br = { exports: {} }, Ol;
function $f() {
  return Ol || (Ol = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(0x|0h)?[0-9A-F]+$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(br, br.exports)), br.exports;
}
var Ar = { exports: {} }, Bl;
function V_() {
  return Bl || (Bl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(0o)?[0-7]+$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Ar, Ar.exports)), Ar.exports;
}
var Er = { exports: {} }, Fl;
function W_() {
  return Fl || (Fl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Af());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s, o) {
      return (0, n.default)(s), (0, a.default)(s) % parseInt(o, 10) === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Er, Er.exports)), Er.exports;
}
var Mr = { exports: {} }, Hl;
function G_() {
  return Hl || (Hl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Mr, Mr.exports)), Mr.exports;
}
var Ir = { exports: {} }, Zl;
function K_() {
  return Zl || (Zl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = a(/* @__PURE__ */ X());
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var r = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/, i = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/, s = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/, o = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
    function l(u) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (0, n.default)(u), f ? r.test(u) || i.test(u) || s.test(u) || o.test(u) : r.test(u) || i.test(u);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Ir, Ir.exports)), Ir.exports;
}
var Cr = { exports: {} }, ql;
function Y_() {
  return ql || (ql = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ X());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i, i = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
    function s(o) {
      (0, n.default)(o);
      var l = o.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
      return l.indexOf(",") !== -1 ? r.test(l) : i.test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Cr, Cr.exports)), Cr.exports;
}
var Nr = { exports: {} }, zl;
function X_() {
  return zl || (zl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Nr, Nr.exports)), Nr.exports;
}
var Mt = {}, Ul;
function J_() {
  if (Ul) return Mt;
  Ul = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = s, Mt.locales = void 0;
  var e = t(/* @__PURE__ */ X());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    DZ: /^(DZ\d{24})$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MA: /^(MA[0-9]{26})$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    MZ: /^(MZ[0-9]{2})\d{21}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/
  };
  function a(o) {
    var l = o.filter(function(u) {
      return !(u in n);
    });
    return !(l.length > 0);
  }
  function r(o, l) {
    var u = o.replace(/[\s\-]+/gi, "").toUpperCase(), f = u.slice(0, 2).toUpperCase(), d = f in n;
    if (l.whitelist) {
      if (!a(l.whitelist))
        return !1;
      var c = l.whitelist.includes(f);
      if (!c)
        return !1;
    }
    if (l.blacklist) {
      var m = l.blacklist.includes(f);
      if (m)
        return !1;
    }
    return d && n[f].test(u);
  }
  function i(o) {
    var l = o.replace(/[^A-Z0-9]+/gi, "").toUpperCase(), u = l.slice(4) + l.slice(0, 4), f = u.replace(/[A-Z]/g, function(c) {
      return c.charCodeAt(0) - 55;
    }), d = f.match(/\d{1,7}/g).reduce(function(c, m) {
      return Number(c + m) % 97;
    }, "");
    return d === 1;
  }
  function s(o) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, e.default)(o), r(o, l) && i(o);
  }
  return Mt.locales = Object.keys(n), Mt;
}
var Rr = { exports: {} }, It = {}, jl;
function Df() {
  if (jl) return It;
  jl = 1, Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.CountryCodes = void 0, It.default = a;
  var e = t(/* @__PURE__ */ X());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
  function a(r) {
    return (0, e.default)(r), n.has(r.toUpperCase());
  }
  return It.CountryCodes = n, It;
}
var Vl;
function Q_() {
  return Vl || (Vl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = /* @__PURE__ */ Df();
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
    function s(o) {
      (0, n.default)(o);
      var l = o.slice(4, 6).toUpperCase();
      return !a.CountryCodes.has(l) && l !== "XK" ? !1 : i.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Rr, Rr.exports)), Rr.exports;
}
var $r = { exports: {} }, Wl;
function ew() {
  return Wl || (Wl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[a-f0-9]{32}$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })($r, $r.exports)), $r.exports;
}
var Dr = { exports: {} }, Gl;
function tw() {
  return Gl || (Gl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      md5: 32,
      md4: 32,
      sha1: 40,
      sha256: 64,
      sha384: 96,
      sha512: 128,
      ripemd128: 32,
      ripemd160: 40,
      tiger128: 32,
      tiger160: 40,
      tiger192: 48,
      crc32: 8,
      crc32b: 8
    };
    function i(s, o) {
      (0, n.default)(s);
      var l = new RegExp("^[a-fA-F0-9]{".concat(r[o], "}$"));
      return l.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Dr, Dr.exports)), Dr.exports;
}
var Pr = { exports: {} }, kr = { exports: {} }, Kl;
function Pf() {
  return Kl || (Kl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ De());
    function r(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var i = /[^A-Z0-9+\/=]/i, s = /^[A-Z0-9_\-]*$/i, o = {
      urlSafe: !1
    };
    function l(u, f) {
      (0, n.default)(u), f = (0, a.default)(f, o);
      var d = u.length;
      if (f.urlSafe)
        return s.test(u);
      if (d % 4 !== 0 || i.test(u))
        return !1;
      var c = u.indexOf("=");
      return c === -1 || c === d - 1 || c === d - 2 && u[d - 1] === "=";
    }
    e.exports = t.default, e.exports.default = t.default;
  })(kr, kr.exports)), kr.exports;
}
var Yl;
function nw() {
  return Yl || (Yl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Pf());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s) {
      (0, n.default)(s);
      var o = s.split("."), l = o.length;
      return l !== 3 ? !1 : o.reduce(function(u, f) {
        return u && (0, a.default)(f, {
          urlSafe: !0
        });
      }, !0);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Pr, Pr.exports)), Pr.exports;
}
var Tr = { exports: {} }, Xl;
function rw() {
  return Xl || (Xl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ De());
    function r(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function i(l) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
        return typeof u;
      } : function(u) {
        return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
      }, i(l);
    }
    var s = {
      allow_primitives: !1
    };
    function o(l, u) {
      (0, n.default)(l);
      try {
        u = (0, a.default)(u, s);
        var f = [];
        u.allow_primitives && (f = [null, !1, !0]);
        var d = JSON.parse(l);
        return f.includes(d) || !!d && i(d) === "object";
      } catch {
      }
      return !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Tr, Tr.exports)), Tr.exports;
}
var Lr = { exports: {} }, Jl;
function aw() {
  return Jl || (Jl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ De());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = {
      ignore_whitespace: !1
    };
    function s(o, l) {
      return (0, n.default)(o), l = (0, a.default)(l, i), (l.ignore_whitespace ? o.trim().length : o.length) === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Lr, Lr.exports)), Lr.exports;
}
var Or = { exports: {} }, Ql;
function iw() {
  return Ql || (Ql = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function r(s) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, r(s);
    }
    function i(s, o) {
      (0, n.default)(s);
      var l, u;
      r(o) === "object" ? (l = o.min || 0, u = o.max) : (l = arguments[1] || 0, u = arguments[2]);
      var f = s.match(/(\uFE0F|\uFE0E)/g) || [], d = s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], c = s.length - f.length - d.length;
      return c >= l && (typeof u > "u" || c <= u);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Or, Or.exports)), Or.exports;
}
var Br = { exports: {} }, eu;
function sw() {
  return eu || (eu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    function i(s, o) {
      (0, n.default)(s);
      var l = r[[void 0, null].includes(o) ? "all" : o];
      return !!l && l.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Br, Br.exports)), Br.exports;
}
var Fr = { exports: {} }, tu;
function ow() {
  return tu || (tu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ $f());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s) {
      return (0, n.default)(s), (0, a.default)(s) && s.length === 24;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Fr, Fr.exports)), Fr.exports;
}
var Hr = { exports: {} }, nu;
function lw() {
  return nu || (nu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ Is());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      var o = s?.comparisonDate || s || Date().toString(), l = (0, n.default)(o), u = (0, n.default)(i);
      return !!(u && l && u > l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Hr, Hr.exports)), Hr.exports;
}
var Zr = { exports: {} }, ru;
function uw() {
  return ru || (ru = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Is());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
      (0, n.default)(s);
      var l = (0, a.default)(o), u = (0, a.default)(s);
      return !!(u && l && u < l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Zr, Zr.exports)), Zr.exports;
}
var qr = { exports: {} }, au;
function cw() {
  return au || (au = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Ef());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function i(o) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
        return typeof l;
      } : function(l) {
        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
      }, i(o);
    }
    function s(o, l) {
      (0, n.default)(o);
      var u;
      if (Object.prototype.toString.call(l) === "[object Array]") {
        var f = [];
        for (u in l)
          ({}).hasOwnProperty.call(l, u) && (f[u] = (0, a.default)(l[u]));
        return f.indexOf(o) >= 0;
      } else {
        if (i(l) === "object")
          return l.hasOwnProperty(o);
        if (l && typeof l.indexOf == "function")
          return l.indexOf(o) >= 0;
      }
      return !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(qr, qr.exports)), qr.exports;
}
var zr = { exports: {} }, iu;
function kf() {
  return iu || (iu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      (0, n.default)(i);
      for (var s = i.replace(/[- ]+/g, ""), o = 0, l, u, f, d = s.length - 1; d >= 0; d--)
        l = s.substring(d, d + 1), u = parseInt(l, 10), f ? (u *= 2, u >= 10 ? o += u % 10 + 1 : o += u) : o += u, f = !f;
      return !!(o % 10 === 0 && s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(zr, zr.exports)), zr.exports;
}
var Ur = { exports: {} }, su;
function dw() {
  return su || (su = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ kf());
    function r(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var i = {
      amex: /^3[47][0-9]{13}$/,
      dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
      // /^[25][1-7][0-9]{14}$/;
      unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
      visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
    }, s = (function() {
      var l = [];
      for (var u in i)
        i.hasOwnProperty(u) && l.push(i[u]);
      return l;
    })();
    function o(l) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, n.default)(l);
      var f = u.provider, d = l.replace(/[- ]+/g, "");
      if (f && f.toLowerCase() in i) {
        if (!i[f.toLowerCase()].test(d))
          return !1;
      } else {
        if (f && !(f.toLowerCase() in i))
          throw new Error("".concat(f, " is not a valid credit card provider."));
        if (!s.some(function(c) {
          return c.test(d);
        }))
          return !1;
      }
      return (0, a.default)(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Ur, Ur.exports)), Ur.exports;
}
var jr = { exports: {} }, ou;
function fw() {
  return ou || (ou = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Ns());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = {
      PL: function(l) {
        (0, n.default)(l);
        var u = {
          1: 1,
          2: 3,
          3: 7,
          4: 9,
          5: 1,
          6: 3,
          7: 7,
          8: 9,
          9: 1,
          10: 3,
          11: 0
        };
        if (l != null && l.length === 11 && (0, a.default)(l, {
          allow_leading_zeroes: !0
        })) {
          var f = l.split("").slice(0, -1), d = f.reduce(function(v, g, h) {
            return v + Number(g) * u[h + 1];
          }, 0), c = d % 10, m = Number(l.charAt(l.length - 1));
          if (c === 0 && m === 0 || m === 10 - c)
            return !0;
        }
        return !1;
      },
      ES: function(l) {
        (0, n.default)(l);
        var u = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/, f = {
          X: 0,
          Y: 1,
          Z: 2
        }, d = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"], c = l.trim().toUpperCase();
        if (!u.test(c))
          return !1;
        var m = c.slice(0, -1).replace(/[X,Y,Z]/g, function(v) {
          return f[v];
        });
        return c.endsWith(d[m % 23]);
      },
      FI: function(l) {
        if ((0, n.default)(l), l.length !== 11 || !l.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))
          return !1;
        var u = "0123456789ABCDEFHJKLMNPRSTUVWXY", f = parseInt(l.slice(0, 6), 10) * 1e3 + parseInt(l.slice(7, 10), 10), d = f % 31, c = u[d];
        return c === l.slice(10, 11);
      },
      IN: function(l) {
        var u = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/, f = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], c = l.trim();
        if (!u.test(c))
          return !1;
        var m = 0, v = c.replace(/\s/g, "").split("").map(Number).reverse();
        return v.forEach(function(g, h) {
          m = f[m][d[h % 8][g]];
        }), m === 0;
      },
      IR: function(l) {
        if (!l.match(/^\d{10}$/) || (l = "0000".concat(l).slice(l.length - 6), parseInt(l.slice(3, 9), 10) === 0)) return !1;
        for (var u = parseInt(l.slice(9, 10), 10), f = 0, d = 0; d < 9; d++)
          f += parseInt(l.slice(d, d + 1), 10) * (10 - d);
        return f %= 11, f < 2 && u === f || f >= 2 && u === 11 - f;
      },
      IT: function(l) {
        return l.length !== 9 || l === "CA00000AA" ? !1 : l.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
      },
      NO: function(l) {
        var u = l.trim();
        if (isNaN(Number(u)) || u.length !== 11 || u === "00000000000") return !1;
        var f = u.split("").map(Number), d = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11, c = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * d) % 11) % 11;
        return !(d !== f[9] || c !== f[10]);
      },
      TH: function(l) {
        if (!l.match(/^[1-8]\d{12}$/)) return !1;
        for (var u = 0, f = 0; f < 12; f++)
          u += parseInt(l[f], 10) * (13 - f);
        return l[12] === ((11 - u % 11) % 10).toString();
      },
      LK: function(l) {
        var u = /^[1-9]\d{8}[vx]$/i, f = /^[1-9]\d{11}$/i;
        return l.length === 10 && u.test(l) ? !0 : !!(l.length === 12 && f.test(l));
      },
      "he-IL": function(l) {
        var u = /^\d{9}$/, f = l.trim();
        if (!u.test(f))
          return !1;
        for (var d = f, c = 0, m, v = 0; v < d.length; v++)
          m = Number(d[v]) * (v % 2 + 1), c += m > 9 ? m - 9 : m;
        return c % 10 === 0;
      },
      "ar-LY": function(l) {
        var u = /^(1|2)\d{11}$/, f = l.trim();
        return !!u.test(f);
      },
      "ar-TN": function(l) {
        var u = /^\d{8}$/, f = l.trim();
        return !!u.test(f);
      },
      "zh-CN": function(l) {
        var u = [
          "11",
          // 北京
          "12",
          // 天津
          "13",
          // 河北
          "14",
          // 山西
          "15",
          // 内蒙古
          "21",
          // 辽宁
          "22",
          // 吉林
          "23",
          // 黑龙江
          "31",
          // 上海
          "32",
          // 江苏
          "33",
          // 浙江
          "34",
          // 安徽
          "35",
          // 福建
          "36",
          // 江西
          "37",
          // 山东
          "41",
          // 河南
          "42",
          // 湖北
          "43",
          // 湖南
          "44",
          // 广东
          "45",
          // 广西
          "46",
          // 海南
          "50",
          // 重庆
          "51",
          // 四川
          "52",
          // 贵州
          "53",
          // 云南
          "54",
          // 西藏
          "61",
          // 陕西
          "62",
          // 甘肃
          "63",
          // 青海
          "64",
          // 宁夏
          "65",
          // 新疆
          "71",
          // 台湾
          "81",
          // 香港
          "82",
          // 澳门
          "91"
          // 国外
        ], f = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"], d = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], c = function(_) {
          return u.includes(_);
        }, m = function(_) {
          var b = parseInt(_.substring(0, 4), 10), S = parseInt(_.substring(4, 6), 10), I = parseInt(_.substring(6), 10), C = new Date(b, S - 1, I);
          return C > /* @__PURE__ */ new Date() ? !1 : C.getFullYear() === b && C.getMonth() === S - 1 && C.getDate() === I;
        }, v = function(_) {
          for (var b = _.substring(0, 17), S = 0, I = 0; I < 17; I++)
            S += parseInt(b.charAt(I), 10) * parseInt(f[I], 10);
          var C = S % 11;
          return d[C];
        }, g = function(_) {
          return v(_) === _.charAt(17).toUpperCase();
        }, h = function(_) {
          var b = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(_);
          if (!b) return !1;
          var S = _.substring(0, 2);
          if (b = c(S), !b) return !1;
          var I = "19".concat(_.substring(6, 12));
          return b = m(I), !!b;
        }, y = function(_) {
          var b = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(_);
          if (!b) return !1;
          var S = _.substring(0, 2);
          if (b = c(S), !b) return !1;
          var I = _.substring(6, 14);
          return b = m(I), b ? g(_) : !1;
        }, w = function(_) {
          var b = /^\d{15}|(\d{17}(\d|x|X))$/.test(_);
          return b ? _.length === 15 ? h(_) : y(_) : !1;
        };
        return w(l);
      },
      "zh-HK": function(l) {
        l = l.trim();
        var u = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/, f = /^[0-9]$/;
        if (l = l.toUpperCase(), !u.test(l)) return !1;
        l = l.replace(/\[|\]|\(|\)/g, ""), l.length === 8 && (l = "3".concat(l));
        for (var d = 0, c = 0; c <= 7; c++) {
          var m = void 0;
          f.test(l[c]) ? m = l[c] : m = (l[c].charCodeAt(0) - 55) % 11, d += m * (9 - c);
        }
        d %= 11;
        var v;
        return d === 0 ? v = "0" : d === 1 ? v = "A" : v = String(11 - d), v === l[l.length - 1];
      },
      "zh-TW": function(l) {
        var u = {
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          G: 16,
          H: 17,
          I: 34,
          J: 18,
          K: 19,
          L: 20,
          M: 21,
          N: 22,
          O: 35,
          P: 23,
          Q: 24,
          R: 25,
          S: 26,
          T: 27,
          U: 28,
          V: 29,
          W: 32,
          X: 30,
          Y: 31,
          Z: 33
        }, f = l.trim().toUpperCase();
        return /^[A-Z][0-9]{9}$/.test(f) ? Array.from(f).reduce(function(d, c, m) {
          if (m === 0) {
            var v = u[c];
            return v % 10 * 9 + Math.floor(v / 10);
          }
          return m === 9 ? (10 - d % 10 - Number(c)) % 10 === 0 : d + Number(c) * (9 - m);
        }, 0) : !1;
      }
    };
    function s(o, l) {
      if ((0, n.default)(o), l in i)
        return i[l](o);
      if (l === "any") {
        for (var u in i)
          if (i.hasOwnProperty(u)) {
            var f = i[u];
            if (f(o))
              return !0;
          }
        return !1;
      }
      throw new Error("Invalid locale '".concat(l, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(jr, jr.exports)), jr.exports;
}
var Vr = { exports: {} }, lu;
function hw() {
  return lu || (lu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = u;
    var n = a(/* @__PURE__ */ X());
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var r = 8, i = 14, s = /^(\d{8}|\d{13}|\d{14})$/;
    function o(f, d) {
      return f === r || f === i ? d % 2 === 0 ? 3 : 1 : d % 2 === 0 ? 1 : 3;
    }
    function l(f) {
      var d = f.slice(0, -1).split("").map(function(m, v) {
        return Number(m) * o(f.length, v);
      }).reduce(function(m, v) {
        return m + v;
      }, 0), c = 10 - d % 10;
      return c < 10 ? c : 0;
    }
    function u(f) {
      (0, n.default)(f);
      var d = Number(f.slice(-1));
      return s.test(f) && d === l(f);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Vr, Vr.exports)), Vr.exports;
}
var Wr = { exports: {} }, uu;
function pw() {
  return uu || (uu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
    function i(s) {
      if ((0, n.default)(s), !r.test(s))
        return !1;
      for (var o = !0, l = 0, u = s.length - 2; u >= 0; u--)
        if (s[u] >= "A" && s[u] <= "Z")
          for (var f = s[u].charCodeAt(0) - 55, d = f % 10, c = Math.trunc(f / 10), m = 0, v = [d, c]; m < v.length; m++) {
            var g = v[m];
            o ? g >= 5 ? l += 1 + (g - 5) * 2 : l += g * 2 : l += g, o = !o;
          }
        else {
          var h = s[u].charCodeAt(0) - 48;
          o ? h >= 5 ? l += 1 + (h - 5) * 2 : l += h * 2 : l += h, o = !o;
        }
      var y = Math.trunc((l + 9) / 10) * 10 - l;
      return +s[s.length - 1] === y;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Wr, Wr.exports)), Wr.exports;
}
var Gr = { exports: {} }, cu;
function gw() {
  return cu || (cu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ X());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^(?:[0-9]{9}X|[0-9]{10})$/, i = /^(?:[0-9]{13})$/, s = [1, 3];
    function o(l, u) {
      (0, n.default)(l);
      var f = String(u?.version || u);
      if (!(u != null && u.version || u))
        return o(l, {
          version: 10
        }) || o(l, {
          version: 13
        });
      var d = l.replace(/[\s-]+/g, ""), c = 0;
      if (f === "10") {
        if (!r.test(d))
          return !1;
        for (var m = 0; m < f - 1; m++)
          c += (m + 1) * d.charAt(m);
        if (d.charAt(9) === "X" ? c += 100 : c += 10 * d.charAt(9), c % 11 === 0)
          return !0;
      } else if (f === "13") {
        if (!i.test(d))
          return !1;
        for (var v = 0; v < 12; v++)
          c += s[v % 2] * d.charAt(v);
        if (d.charAt(12) - (10 - c % 10) % 10 === 0)
          return !0;
      }
      return !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Gr, Gr.exports)), Gr.exports;
}
var Kr = { exports: {} }, du;
function mw() {
  return du || (du = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = "^\\d{4}-?\\d{3}[\\dX]$";
    function i(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, n.default)(s);
      var l = r;
      if (l = o.require_hyphen ? l.replace("?", "") : l, l = o.case_sensitive ? new RegExp(l) : new RegExp(l, "i"), !l.test(s))
        return !1;
      for (var u = s.replace("-", "").toUpperCase(), f = 0, d = 0; d < u.length; d++) {
        var c = u[d];
        f += (c === "X" ? 10 : +c) * (8 - d);
      }
      return f % 11 === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Kr, Kr.exports)), Kr.exports;
}
var Yr = { exports: {} }, lt = {}, fu;
function Tf() {
  if (fu) return lt;
  fu = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  }), lt.iso7064Check = e, lt.luhnCheck = t, lt.reverseMultiplyAndSum = n, lt.verhoeffCheck = a;
  function e(r) {
    for (var i = 10, s = 0; s < r.length - 1; s++)
      i = (parseInt(r[s], 10) + i) % 10 === 0 ? 20 % 11 : (parseInt(r[s], 10) + i) % 10 * 2 % 11;
    return i = i === 1 ? 0 : 11 - i, i === parseInt(r[10], 10);
  }
  function t(r) {
    for (var i = 0, s = !1, o = r.length - 1; o >= 0; o--) {
      if (s) {
        var l = parseInt(r[o], 10) * 2;
        l > 9 ? i += l.toString().split("").map(function(u) {
          return parseInt(u, 10);
        }).reduce(function(u, f) {
          return u + f;
        }, 0) : i += l;
      } else
        i += parseInt(r[o], 10);
      s = !s;
    }
    return i % 10 === 0;
  }
  function n(r, i) {
    for (var s = 0, o = 0; o < r.length; o++)
      s += r[o] * (i - o);
    return s;
  }
  function a(r) {
    for (var i = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], s = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], o = r.split("").reverse().join(""), l = 0, u = 0; u < o.length; u++)
      l = i[l][s[u % 8][parseInt(o[u], 10)]];
    return l === 0;
  }
  return lt;
}
var hu;
function vw() {
  return hu || (hu = 1, (function(e, t) {
    function n(A) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
        return typeof M;
      } : function(M) {
        return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
      }, n(A);
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = be;
    var a = l(/* @__PURE__ */ X()), r = o(/* @__PURE__ */ Tf()), i = l(/* @__PURE__ */ Cf());
    function s(A) {
      if (typeof WeakMap != "function") return null;
      var M = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap();
      return (s = function(V) {
        return V ? k : M;
      })(A);
    }
    function o(A, M) {
      if (A && A.__esModule) return A;
      if (A === null || n(A) != "object" && typeof A != "function") return { default: A };
      var k = s(M);
      if (k && k.has(A)) return k.get(A);
      var U = { __proto__: null }, V = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var K in A) if (K !== "default" && {}.hasOwnProperty.call(A, K)) {
        var ie = V ? Object.getOwnPropertyDescriptor(A, K) : null;
        ie && (ie.get || ie.set) ? Object.defineProperty(U, K, ie) : U[K] = A[K];
      }
      return U.default = A, k && k.set(A, U), U;
    }
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function u(A) {
      return m(A) || c(A) || d(A) || f();
    }
    function f() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function d(A, M) {
      if (A) {
        if (typeof A == "string") return v(A, M);
        var k = Object.prototype.toString.call(A).slice(8, -1);
        if (k === "Object" && A.constructor && (k = A.constructor.name), k === "Map" || k === "Set") return Array.from(A);
        if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return v(A, M);
      }
    }
    function c(A) {
      if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
    }
    function m(A) {
      if (Array.isArray(A)) return v(A);
    }
    function v(A, M) {
      (M == null || M > A.length) && (M = A.length);
      for (var k = 0, U = new Array(M); k < M; k++) U[k] = A[k];
      return U;
    }
    function g(A) {
      var M = A.slice(0, 2), k = parseInt(A.slice(2, 4), 10);
      k > 40 ? (k -= 40, M = "20".concat(M)) : k > 20 ? (k -= 20, M = "18".concat(M)) : M = "19".concat(M), k < 10 && (k = "0".concat(k));
      var U = "".concat(M, "/").concat(k, "/").concat(A.slice(4, 6));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      for (var V = A.split("").map(function(he) {
        return parseInt(he, 10);
      }), K = [2, 4, 8, 5, 10, 9, 7, 3, 6], ie = 0, ce = 0; ce < K.length; ce++)
        ie += V[ce] * K[ce];
      return ie = ie % 11 === 10 ? 0 : ie % 11, ie === V[9];
    }
    function h(A) {
      var M = A.split(""), k = M.filter(function(V, K) {
        return K % 2;
      }).map(function(V) {
        return Number(V) * 2;
      }).join("").split(""), U = M.filter(function(V, K) {
        return !(K % 2);
      }).concat(k).map(function(V) {
        return Number(V);
      }).reduce(function(V, K) {
        return V + K;
      });
      return U % 10 === 0;
    }
    function y(A) {
      A = A.replace(/\W/, "");
      var M = parseInt(A.slice(0, 2), 10);
      if (A.length === 10)
        M < 54 ? M = "20".concat(M) : M = "19".concat(M);
      else {
        if (A.slice(6) === "000")
          return !1;
        if (M < 54)
          M = "19".concat(M);
        else
          return !1;
      }
      M.length === 3 && (M = [M.slice(0, 2), "0", M.slice(2)].join(""));
      var k = parseInt(A.slice(2, 4), 10);
      if (k > 50 && (k -= 50), k > 20) {
        if (parseInt(M, 10) < 2004)
          return !1;
        k -= 20;
      }
      k < 10 && (k = "0".concat(k));
      var U = "".concat(M, "/").concat(k, "/").concat(A.slice(4, 6));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      if (A.length === 10 && parseInt(A, 10) % 11 !== 0) {
        var V = parseInt(A.slice(0, 9), 10) % 11;
        if (parseInt(M, 10) < 1986 && V === 10) {
          if (parseInt(A.slice(9), 10) !== 0)
            return !1;
        } else
          return !1;
      }
      return !0;
    }
    function w(A) {
      return r.luhnCheck(A);
    }
    function x(A) {
      for (var M = A.split("").map(function(he) {
        return parseInt(he, 10);
      }), k = [], U = 0; U < M.length - 1; U++) {
        k.push("");
        for (var V = 0; V < M.length - 1; V++)
          M[U] === M[V] && (k[U] += V);
      }
      if (k = k.filter(function(he) {
        return he.length > 1;
      }), k.length !== 2 && k.length !== 3)
        return !1;
      if (k[0].length === 3) {
        for (var K = k[0].split("").map(function(he) {
          return parseInt(he, 10);
        }), ie = 0, ce = 0; ce < K.length - 1; ce++)
          K[ce] + 1 === K[ce + 1] && (ie += 1);
        if (ie === 2)
          return !1;
      }
      return r.iso7064Check(A);
    }
    function _(A) {
      A = A.replace(/\W/, "");
      var M = parseInt(A.slice(4, 6), 10), k = A.slice(6, 7);
      switch (k) {
        case "0":
        case "1":
        case "2":
        case "3":
          M = "19".concat(M);
          break;
        case "4":
        case "9":
          M < 37 ? M = "20".concat(M) : M = "19".concat(M);
          break;
        default:
          if (M < 37)
            M = "20".concat(M);
          else if (M > 58)
            M = "18".concat(M);
          else
            return !1;
          break;
      }
      M.length === 3 && (M = [M.slice(0, 2), "0", M.slice(2)].join(""));
      var U = "".concat(M, "/").concat(A.slice(2, 4), "/").concat(A.slice(0, 2));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      for (var V = A.split("").map(function(he) {
        return parseInt(he, 10);
      }), K = 0, ie = 4, ce = 0; ce < 9; ce++)
        K += V[ce] * ie, ie -= 1, ie === 1 && (ie = 7);
      return K %= 11, K === 1 ? !1 : K === 0 ? V[9] === 0 : V[9] === 11 - K;
    }
    function b(A) {
      for (var M = A.slice(0, 8).split("").map(function(K) {
        return parseInt(K, 10);
      }), k = 0, U = 1; U < M.length; U += 2)
        k += M[U];
      for (var V = 0; V < M.length; V += 2)
        M[V] < 2 ? k += 1 - M[V] : (k += 2 * (M[V] - 2) + 5, M[V] > 4 && (k += 2));
      return String.fromCharCode(k % 26 + 65) === A.charAt(8);
    }
    function S(A) {
      for (var M = A.split("").map(function(V) {
        return parseInt(V, 10);
      }), k = 0, U = 0; U < 8; U++)
        k += M[U] * Math.pow(2, 8 - U);
      return k % 11 % 10 === M[8];
    }
    function I(A) {
      var M = r.reverseMultiplyAndSum(A.split("").slice(0, 7).map(function(k) {
        return parseInt(k, 10);
      }), 8);
      return A.length === 9 && A[8] !== "W" && (M += (A[8].charCodeAt(0) - 64) * 9), M %= 23, M === 0 ? A[7].toUpperCase() === "W" : A[7].toUpperCase() === String.fromCharCode(64 + M);
    }
    var C = {
      andover: ["10", "12"],
      atlanta: ["60", "67"],
      austin: ["50", "53"],
      brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
      cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
      fresno: ["15", "24"],
      internet: ["20", "26", "27", "45", "46", "47"],
      kansas: ["40", "44"],
      memphis: ["94", "95"],
      ogden: ["80", "90"],
      philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
      sba: ["31"]
    };
    function R() {
      var A = [];
      for (var M in C)
        C.hasOwnProperty(M) && A.push.apply(A, u(C[M]));
      return A;
    }
    function O(A) {
      return R().indexOf(A.slice(0, 2)) !== -1;
    }
    function D(A) {
      for (var M = 0, k = A.split(""), U = parseInt(k.pop(), 10), V = 0; V < k.length; V++)
        M += k[9 - V] * (2 + V % 6);
      var K = 11 - M % 11;
      return K === 11 ? K = 0 : K === 10 && (K = 9), U === K;
    }
    function L(A) {
      var M = A.toUpperCase().split("");
      if (isNaN(parseInt(M[0], 10)) && M.length > 1) {
        var k = 0;
        switch (M[0]) {
          case "Y":
            k = 1;
            break;
          case "Z":
            k = 2;
            break;
        }
        M.splice(0, 1, k);
      } else
        for (; M.length < 9; )
          M.unshift(0);
      var U = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      M = M.join("");
      var V = parseInt(M.slice(0, 8), 10) % 23;
      return M[8] === U[V];
    }
    function H(A) {
      var M = A.slice(1, 3), k = A.slice(0, 1);
      switch (k) {
        case "1":
        case "2":
          M = "18".concat(M);
          break;
        case "3":
        case "4":
          M = "19".concat(M);
          break;
        default:
          M = "20".concat(M);
          break;
      }
      var U = "".concat(M, "/").concat(A.slice(3, 5), "/").concat(A.slice(5, 7));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      for (var V = A.split("").map(function(ve) {
        return parseInt(ve, 10);
      }), K = 0, ie = 1, ce = 0; ce < 10; ce++)
        K += V[ce] * ie, ie += 1, ie === 10 && (ie = 1);
      if (K % 11 === 10) {
        K = 0, ie = 3;
        for (var he = 0; he < 10; he++)
          K += V[he] * ie, ie += 1, ie === 10 && (ie = 1);
        if (K % 11 === 10)
          return V[10] === 0;
      }
      return K % 11 === V[10];
    }
    function E(A) {
      var M = A.slice(4, 6), k = A.slice(6, 7);
      switch (k) {
        case "+":
          M = "18".concat(M);
          break;
        case "-":
          M = "19".concat(M);
          break;
        default:
          M = "20".concat(M);
          break;
      }
      var U = "".concat(M, "/").concat(A.slice(2, 4), "/").concat(A.slice(0, 2));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      var V = parseInt(A.slice(0, 6) + A.slice(7, 10), 10) % 31;
      if (V < 10)
        return V === parseInt(A.slice(10), 10);
      V -= 10;
      var K = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
      return K[V] === A.slice(10);
    }
    function N(A) {
      if (A.slice(2, 4) !== "00" || A.slice(4, 6) !== "00") {
        var M = "".concat(A.slice(0, 2), "/").concat(A.slice(2, 4), "/").concat(A.slice(4, 6));
        if (!(0, i.default)(M, "YY/MM/DD"))
          return !1;
      }
      var k = 97 - parseInt(A.slice(0, 9), 10) % 97, U = parseInt(A.slice(9, 11), 10);
      return !(k !== U && (k = 97 - parseInt("2".concat(A.slice(0, 9)), 10) % 97, k !== U));
    }
    function $(A) {
      A = A.replace(/\s/g, "");
      var M = parseInt(A.slice(0, 10), 10) % 511, k = parseInt(A.slice(10, 13), 10);
      return M === k;
    }
    function P(A) {
      var M = "".concat(A.slice(0, 4), "/").concat(A.slice(4, 6), "/").concat(A.slice(6, 8));
      return !(0, i.default)(M, "YYYY/MM/DD") || !r.luhnCheck(A.slice(0, 12)) ? !1 : r.verhoeffCheck("".concat(A.slice(0, 11)).concat(A[12]));
    }
    function B(A) {
      return r.iso7064Check(A);
    }
    function T(A) {
      for (var M = A.split("").map(function(V) {
        return parseInt(V, 10);
      }), k = 8, U = 1; U < 9; U++)
        k += M[U] * (U + 1);
      return k % 11 === M[9];
    }
    function q(A) {
      for (var M = !1, k = !1, U = 0; U < 3; U++)
        if (!M && /[AEIOU]/.test(A[U]))
          M = !0;
        else if (!k && M && A[U] === "X")
          k = !0;
        else if (U > 0 && (M && !k && !/[AEIOU]/.test(A[U]) || k && !/X/.test(A[U])))
          return !1;
      return !0;
    }
    function z(A) {
      var M = A.toUpperCase().split("");
      if (!q(M.slice(0, 3)) || !q(M.slice(3, 6)))
        return !1;
      for (var k = [6, 7, 9, 10, 12, 13, 14], U = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
      }, V = 0, K = k; V < K.length; V++) {
        var ie = K[V];
        M[ie] in U && M.splice(ie, 1, U[M[ie]]);
      }
      var ce = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
      }, he = ce[M[8]], ve = parseInt(M[9] + M[10], 10);
      ve > 40 && (ve -= 40), ve < 10 && (ve = "0".concat(ve));
      var Re = "".concat(M[6]).concat(M[7], "/").concat(he, "/").concat(ve);
      if (!(0, i.default)(Re, "YY/MM/DD"))
        return !1;
      for (var Oe = 0, Pe = 1; Pe < M.length - 1; Pe += 2) {
        var st = parseInt(M[Pe], 10);
        isNaN(st) && (st = M[Pe].charCodeAt(0) - 65), Oe += st;
      }
      for (var ot = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
      }, Ue = 0; Ue < M.length - 1; Ue += 2) {
        var Je = 0;
        if (M[Ue] in ot)
          Je = ot[M[Ue]];
        else {
          var xt = parseInt(M[Ue], 10);
          Je = 2 * xt + 1, xt > 4 && (Je += 2);
        }
        Oe += Je;
      }
      return String.fromCharCode(65 + Oe % 26) === M[15];
    }
    function Z(A) {
      A = A.replace(/\W/, "");
      var M = A.slice(0, 2);
      if (M !== "32") {
        var k = A.slice(2, 4);
        if (k !== "00") {
          var U = A.slice(4, 6);
          switch (A[6]) {
            case "0":
              U = "18".concat(U);
              break;
            case "1":
              U = "19".concat(U);
              break;
            default:
              U = "20".concat(U);
              break;
          }
          var V = "".concat(U, "/").concat(A.slice(2, 4), "/").concat(M);
          if (!(0, i.default)(V, "YYYY/MM/DD"))
            return !1;
        }
        for (var K = 1101, ie = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2], ce = 0; ce < A.length - 1; ce++)
          K -= parseInt(A[ce], 10) * ie[ce];
        return parseInt(A[10], 10) === K % 11;
      }
      return !0;
    }
    function re(A) {
      if (A.length !== 9) {
        for (var M = A.toUpperCase().split(""); M.length < 8; )
          M.unshift(0);
        switch (A[7]) {
          case "A":
          case "P":
            if (parseInt(M[6], 10) === 0)
              return !1;
            break;
          default: {
            var k = parseInt(M.join("").slice(0, 5), 10);
            if (k > 32e3)
              return !1;
            var U = parseInt(M.join("").slice(5, 7), 10);
            if (k === U)
              return !1;
          }
        }
      }
      return !0;
    }
    function ne(A) {
      return r.reverseMultiplyAndSum(A.split("").slice(0, 8).map(function(M) {
        return parseInt(M, 10);
      }), 9) % 11 === parseInt(A[8], 10);
    }
    function W(A) {
      if (A.length === 10) {
        for (var M = [6, 5, 7, 2, 3, 4, 5, 6, 7], k = 0, U = 0; U < M.length; U++)
          k += parseInt(A[U], 10) * M[U];
        return k %= 11, k === 10 ? !1 : k === parseInt(A[9], 10);
      }
      var V = A.slice(0, 2), K = parseInt(A.slice(2, 4), 10);
      K > 80 ? (V = "18".concat(V), K -= 80) : K > 60 ? (V = "22".concat(V), K -= 60) : K > 40 ? (V = "21".concat(V), K -= 40) : K > 20 ? (V = "20".concat(V), K -= 20) : V = "19".concat(V), K < 10 && (K = "0".concat(K));
      var ie = "".concat(V, "/").concat(K, "/").concat(A.slice(4, 6));
      if (!(0, i.default)(ie, "YYYY/MM/DD"))
        return !1;
      for (var ce = 0, he = 1, ve = 0; ve < A.length - 1; ve++)
        ce += parseInt(A[ve], 10) * he % 10, he += 2, he > 10 ? he = 1 : he === 5 && (he += 2);
      return ce = 10 - ce % 10, ce === parseInt(A[10], 10);
    }
    function Q(A) {
      if (A.length === 11) {
        var M, k;
        if (M = 0, // Reject known invalid CPFs
        A === "11111111111" || A === "22222222222" || A === "33333333333" || A === "44444444444" || A === "55555555555" || A === "66666666666" || A === "77777777777" || A === "88888888888" || A === "99999999999" || A === "00000000000") return !1;
        for (var U = 1; U <= 9; U++) M += parseInt(A.substring(U - 1, U), 10) * (11 - U);
        if (k = M * 10 % 11, k === 10 && (k = 0), k !== parseInt(A.substring(9, 10), 10)) return !1;
        M = 0;
        for (var V = 1; V <= 10; V++) M += parseInt(A.substring(V - 1, V), 10) * (12 - V);
        return k = M * 10 % 11, k === 10 && (k = 0), k === parseInt(A.substring(10, 11), 10);
      }
      if (
        // Reject know invalid CNPJs
        A === "00000000000000" || A === "11111111111111" || A === "22222222222222" || A === "33333333333333" || A === "44444444444444" || A === "55555555555555" || A === "66666666666666" || A === "77777777777777" || A === "88888888888888" || A === "99999999999999"
      )
        return !1;
      for (var K = A.length - 2, ie = A.substring(0, K), ce = A.substring(K), he = 0, ve = K - 7, Re = K; Re >= 1; Re--)
        he += ie.charAt(K - Re) * ve, ve -= 1, ve < 2 && (ve = 9);
      var Oe = he % 11 < 2 ? 0 : 11 - he % 11;
      if (Oe !== parseInt(ce.charAt(0), 10))
        return !1;
      K += 1, ie = A.substring(0, K), he = 0, ve = K - 7;
      for (var Pe = K; Pe >= 1; Pe--)
        he += ie.charAt(K - Pe) * ve, ve -= 1, ve < 2 && (ve = 9);
      return Oe = he % 11 < 2 ? 0 : 11 - he % 11, Oe === parseInt(ce.charAt(1), 10);
    }
    function J(A) {
      var M = 11 - r.reverseMultiplyAndSum(A.split("").slice(0, 8).map(function(k) {
        return parseInt(k, 10);
      }), 9) % 11;
      return M > 9 ? parseInt(A[8], 10) === 0 : M === parseInt(A[8], 10);
    }
    function F(A) {
      if (A.slice(0, 4) !== "9000") {
        var M = A.slice(1, 3);
        switch (A[0]) {
          case "1":
          case "2":
            M = "19".concat(M);
            break;
          case "3":
          case "4":
            M = "18".concat(M);
            break;
          case "5":
          case "6":
            M = "20".concat(M);
            break;
        }
        var k = "".concat(M, "/").concat(A.slice(3, 5), "/").concat(A.slice(5, 7));
        if (k.length === 8) {
          if (!(0, i.default)(k, "YY/MM/DD"))
            return !1;
        } else if (!(0, i.default)(k, "YYYY/MM/DD"))
          return !1;
        for (var U = A.split("").map(function(ce) {
          return parseInt(ce, 10);
        }), V = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], K = 0, ie = 0; ie < V.length; ie++)
          K += U[ie] * V[ie];
        return K % 11 === 10 ? U[12] === 1 : U[12] === K % 11;
      }
      return !0;
    }
    function ee(A) {
      if (A.length === 9) {
        if (A = A.replace(/\W/, ""), A.slice(6) === "000")
          return !1;
        var M = parseInt(A.slice(0, 2), 10);
        if (M > 53)
          return !1;
        M < 10 ? M = "190".concat(M) : M = "19".concat(M);
        var k = parseInt(A.slice(2, 4), 10);
        k > 50 && (k -= 50), k < 10 && (k = "0".concat(k));
        var U = "".concat(M, "/").concat(k, "/").concat(A.slice(4, 6));
        if (!(0, i.default)(U, "YYYY/MM/DD"))
          return !1;
      }
      return !0;
    }
    function ue(A) {
      var M = 11 - r.reverseMultiplyAndSum(A.split("").slice(0, 7).map(function(k) {
        return parseInt(k, 10);
      }), 8) % 11;
      return M === 10 ? parseInt(A[7], 10) === 0 : M === parseInt(A[7], 10);
    }
    function le(A) {
      var M = A.slice(0);
      A.length > 11 && (M = M.slice(2));
      var k = "", U = M.slice(2, 4), V = parseInt(M.slice(4, 6), 10);
      if (A.length > 11)
        k = A.slice(0, 4);
      else if (k = A.slice(0, 2), A.length === 11 && V < 60) {
        var K = (/* @__PURE__ */ new Date()).getFullYear().toString(), ie = parseInt(K.slice(0, 2), 10);
        if (K = parseInt(K, 10), A[6] === "-")
          parseInt("".concat(ie).concat(k), 10) > K ? k = "".concat(ie - 1).concat(k) : k = "".concat(ie).concat(k);
        else if (k = "".concat(ie - 1).concat(k), K - parseInt(k, 10) < 100)
          return !1;
      }
      V > 60 && (V -= 60), V < 10 && (V = "0".concat(V));
      var ce = "".concat(k, "/").concat(U, "/").concat(V);
      if (ce.length === 8) {
        if (!(0, i.default)(ce, "YY/MM/DD"))
          return !1;
      } else if (!(0, i.default)(ce, "YYYY/MM/DD"))
        return !1;
      return r.luhnCheck(A.replace(/\W/, ""));
    }
    function G(A) {
      for (var M = A.split("").map(function(K) {
        return parseInt(K, 10);
      }), k = [-1, 5, 7, 9, 4, 6, 10, 5, 7], U = 0, V = 0; V < k.length; V++)
        U += M[V] * k[V];
      return U % 11 === 10 ? M[9] === 0 : M[9] === U % 11;
    }
    var j = {
      "bg-BG": /^\d{10}$/,
      "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
      "de-AT": /^\d{9}$/,
      "de-DE": /^[1-9]\d{10}$/,
      "dk-DK": /^\d{6}-{0,1}\d{4}$/,
      "el-CY": /^[09]\d{7}[A-Z]$/,
      "el-GR": /^([0-4]|[7-9])\d{8}$/,
      "en-CA": /^\d{9}$/,
      "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
      "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
      "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
      "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
      "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
      "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
      "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
      "fr-BE": /^\d{11}$/,
      "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
      // Conforms both to official spec and provided example
      "fr-LU": /^\d{13}$/,
      "hr-HR": /^\d{11}$/,
      "hu-HU": /^8\d{9}$/,
      "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
      "lv-LV": /^\d{6}-{0,1}\d{5}$/,
      // Conforms both to DG TAXUD spec and original research
      "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
      "nl-NL": /^\d{9}$/,
      "pl-PL": /^\d{10,11}$/,
      "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
      "pt-PT": /^\d{9}$/,
      "ro-RO": /^\d{13}$/,
      "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
      "sl-SI": /^[1-9]\d{7}$/,
      "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
      "uk-UA": /^\d{10}$/
    };
    j["lb-LU"] = j["fr-LU"], j["lt-LT"] = j["et-EE"], j["nl-BE"] = j["fr-BE"], j["fr-CA"] = j["en-CA"];
    var ae = {
      "bg-BG": g,
      "cs-CZ": y,
      "de-AT": w,
      "de-DE": x,
      "dk-DK": _,
      "el-CY": b,
      "el-GR": S,
      "en-CA": h,
      "en-IE": I,
      "en-US": O,
      "es-AR": D,
      "es-ES": L,
      "et-EE": H,
      "fi-FI": E,
      "fr-BE": N,
      "fr-FR": $,
      "fr-LU": P,
      "hr-HR": B,
      "hu-HU": T,
      "it-IT": z,
      "lv-LV": Z,
      "mt-MT": re,
      "nl-NL": ne,
      "pl-PL": W,
      "pt-BR": Q,
      "pt-PT": J,
      "ro-RO": F,
      "sk-SK": ee,
      "sl-SI": ue,
      "sv-SE": le,
      "uk-UA": G
    };
    ae["lb-LU"] = ae["fr-LU"], ae["lt-LT"] = ae["et-EE"], ae["nl-BE"] = ae["fr-BE"], ae["fr-CA"] = ae["en-CA"];
    var te = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g, de = {
      "de-AT": te,
      "de-DE": /[\/\\]/g,
      "fr-BE": te
    };
    de["nl-BE"] = de["fr-BE"];
    function be(A) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      (0, a.default)(A);
      var k = A.slice(0);
      if (M in j)
        return M in de && (k = k.replace(de[M], "")), j[M].test(k) ? M in ae ? ae[M](k) : !0 : !1;
      throw new Error("Invalid locale '".concat(M, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Yr, Yr.exports)), Yr.exports;
}
var Ct = {}, pu;
function xw() {
  if (pu) return Ct;
  pu = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = a, Ct.locales = void 0;
  var e = t(/* @__PURE__ */ X());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = {
    "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
    "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
    "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
    "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
    "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
    "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
    "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
    "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
    "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
    "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-TN": /^(\+?216)?[2459]\d{7}$/,
    "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
    "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
    "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
    "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
    "ca-AD": /^(\+376)?[346]\d{5}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
    "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
    "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
    "de-LU": /^(\+352)?((6\d1)\d{6})$/,
    "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
    "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
    "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
    "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
    "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-GG": /^(\+?44|0)1481\d{6}$/,
    "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
    "en-GY": /^(\+592|0)6\d{6}$/,
    "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
    "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
    "en-JM": /^(\+?876)?\d{7}$/,
    "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
    "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
    "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
    "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
    "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
    "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    "en-MU": /^(\+?230|0)?\d{8}$/,
    "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
    "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
    "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
    "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
    "en-PH": /^(09|\+639)\d{9}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-SG": /^(\+65)?[3689]\d{7}$/,
    "en-SL": /^(\+?232|0)\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "en-ZW": /^(\+263)[0-9]{9}$/,
    "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
    "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
    "es-BO": /^(\+?591)?(6|7)\d{7}$/,
    "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
    "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    "es-CR": /^(\+506)?[2-8]\d{7}$/,
    "es-CU": /^(\+53|0053)?5\d{7}$/,
    "es-DO": /^(\+?1)?8[024]9\d{7}$/,
    "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
    "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    "es-ES": /^(\+?34)?[6|7]\d{8}$/,
    "es-PE": /^(\+?51)?9\d{8}$/,
    "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
    "es-NI": /^(\+?505)\d{7,8}$/,
    "es-PA": /^(\+?507)\d{7,8}$/,
    "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
    "es-SV": /^(\+?503)?[67]\d{7}$/,
    "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
    "es-VE": /^(\+?58)?(2|4)\d{9}$/,
    "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
    "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "fr-BF": /^(\+226|0)[67]\d{7}$/,
    "fr-BJ": /^(\+229)\d{8}$/,
    "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
    "fr-CM": /^(\+?237)6[0-9]{8}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
    "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
    "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
    "fr-PF": /^(\+?689)?8[789]\d{6}$/,
    "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
    "fr-WF": /^(\+681)?\d{6}$/,
    "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
    "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    "ir-IR": /^(\+98|0)?9\d{9}$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
    "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
    "kk-KZ": /^(\+?7|8)?7\d{9}$/,
    "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "lv-LV": /^(\+?371)2\d{7}$/,
    "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
    "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
    "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
    "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
    "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "ne-NP": /^(\+?977)?9[78]\d{8}$/,
    "nl-BE": /^(\+?32|0)4\d{8}$/,
    "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "pt-AO": /^(\+244)\d{9}$/,
    "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
    "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
    "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
    "sq-AL": /^(\+355|0)6[789]\d{6}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
    "th-TH": /^(\+66|66|0)\d{9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "tk-TM": /^(\+993|993|8)\d{8}$/,
    "uk-UA": /^(\+?38|8)?0\d{9}$/,
    "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
    "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
    "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
    "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
    "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
    "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
    "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
  };
  n["en-CA"] = n["en-US"], n["fr-CA"] = n["en-CA"], n["fr-BE"] = n["nl-BE"], n["zh-HK"] = n["en-HK"], n["zh-MO"] = n["en-MO"], n["ga-IE"] = n["en-IE"], n["fr-CH"] = n["de-CH"], n["it-CH"] = n["fr-CH"];
  function a(r, i, s) {
    if ((0, e.default)(r), s && s.strictMode && !r.startsWith("+"))
      return !1;
    if (Array.isArray(i))
      return i.some(function(u) {
        if (n.hasOwnProperty(u)) {
          var f = n[u];
          if (f.test(r))
            return !0;
        }
        return !1;
      });
    if (i in n)
      return n[i].test(r);
    if (!i || i === "any") {
      for (var o in n)
        if (n.hasOwnProperty(o)) {
          var l = n[o];
          if (l.test(r))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(i, "'"));
  }
  return Ct.locales = Object.keys(n), Ct;
}
var Xr = { exports: {} }, gu;
function yw() {
  return gu || (gu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(0x)[0-9a-f]{40}$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Xr, Xr.exports)), Xr.exports;
}
var Jr = { exports: {} }, mu;
function _w() {
  return mu || (mu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = r(/* @__PURE__ */ De()), a = r(/* @__PURE__ */ X());
    function r(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function i(l) {
      var u = "\\d{".concat(l.digits_after_decimal[0], "}");
      l.digits_after_decimal.forEach(function(w, x) {
        x !== 0 && (u = "".concat(u, "|\\d{").concat(w, "}"));
      });
      var f = "(".concat(l.symbol.replace(/\W/, function(w) {
        return "\\".concat(w);
      }), ")").concat(l.require_symbol ? "" : "?"), d = "-?", c = "[1-9]\\d*", m = "[1-9]\\d{0,2}(\\".concat(l.thousands_separator, "\\d{3})*"), v = ["0", c, m], g = "(".concat(v.join("|"), ")?"), h = "(\\".concat(l.decimal_separator, "(").concat(u, "))").concat(l.require_decimal ? "" : "?"), y = g + (l.allow_decimal || l.require_decimal ? h : "");
      return l.allow_negatives && !l.parens_for_negatives && (l.negative_sign_after_digits ? y += d : l.negative_sign_before_digits && (y = d + y)), l.allow_negative_sign_placeholder ? y = "( (?!\\-))?".concat(y) : l.allow_space_after_symbol ? y = " ?".concat(y) : l.allow_space_after_digits && (y += "( (?!$))?"), l.symbol_after_digits ? y += f : y = f + y, l.allow_negatives && (l.parens_for_negatives ? y = "(\\(".concat(y, "\\)|").concat(y, ")") : l.negative_sign_before_digits || l.negative_sign_after_digits || (y = d + y)), new RegExp("^(?!-? )(?=.*\\d)".concat(y, "$"));
    }
    var s = {
      symbol: "$",
      require_symbol: !1,
      allow_space_after_symbol: !1,
      symbol_after_digits: !1,
      allow_negatives: !0,
      parens_for_negatives: !1,
      negative_sign_before_digits: !1,
      negative_sign_after_digits: !1,
      allow_negative_sign_placeholder: !1,
      thousands_separator: ",",
      decimal_separator: ".",
      allow_decimal: !0,
      require_decimal: !1,
      digits_after_decimal: [2],
      allow_space_after_digits: !1
    };
    function o(l, u) {
      return (0, a.default)(l), u = (0, n.default)(u, s), i(u).test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Jr, Jr.exports)), Jr.exports;
}
var Qr = { exports: {} }, vu;
function ww() {
  return vu || (vu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ X());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^(bc1)[a-z0-9]{25,39}$/, i = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
    function s(o) {
      return (0, n.default)(o), r.test(o) || i.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Qr, Qr.exports)), Qr.exports;
}
var Nt = {}, xu;
function Sw() {
  if (xu) return Nt;
  xu = 1, Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.isFreightContainerID = void 0, Nt.isISO6346 = r;
  var e = t(/* @__PURE__ */ X());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/, a = /^[0-9]$/;
  function r(i) {
    if ((0, e.default)(i), i = i.toUpperCase(), !n.test(i)) return !1;
    if (i.length === 11) {
      for (var s = 0, o = 0; o < i.length - 1; o++)
        if (a.test(i[o]))
          s += i[o] * Math.pow(2, o);
        else {
          var l = void 0, u = i.charCodeAt(o) - 55;
          u < 11 ? l = u : u >= 11 && u <= 20 ? l = 12 + u % 11 : u >= 21 && u <= 30 ? l = 23 + u % 21 : l = 34 + u % 31, s += l * Math.pow(2, o);
        }
      var f = s % 11;
      return Number(i[i.length - 1]) === f;
    }
    return !0;
  }
  return Nt.isFreightContainerID = r, Nt;
}
var ea = { exports: {} }, yu;
function bw() {
  return yu || (yu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
    function i(s) {
      return (0, n.default)(s), r.has(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ea, ea.exports)), ea.exports;
}
var ta = { exports: {} }, _u;
function Aw() {
  return _u || (_u = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ X());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, i = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, s = function(u) {
      var f = u.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
      if (f) {
        var d = Number(f[1]), c = Number(f[2]);
        return d % 4 === 0 && d % 100 !== 0 || d % 400 === 0 ? c <= 366 : c <= 365;
      }
      var m = u.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number), v = m[1], g = m[2], h = m[3], y = g && "0".concat(g).slice(-2), w = h && "0".concat(h).slice(-2), x = new Date("".concat(v, "-").concat(y || "01", "-").concat(w || "01"));
      return g && h ? x.getUTCFullYear() === v && x.getUTCMonth() + 1 === g && x.getUTCDate() === h : !0;
    };
    function o(l) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, n.default)(l);
      var f = u.strictSeparator ? i.test(l) : r.test(l);
      return f && u.strict ? s(l) : f;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ta, ta.exports)), ta.exports;
}
var na = { exports: {} }, wu;
function Ew() {
  return wu || (wu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = y;
    var n = a(/* @__PURE__ */ X());
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var r = /[0-9]{4}/, i = /(0[1-9]|1[0-2])/, s = /([12]\d|0[1-9]|3[01])/, o = /([01][0-9]|2[0-3])/, l = /[0-5][0-9]/, u = /([0-5][0-9]|60)/, f = /(\.[0-9]+)?/, d = new RegExp("[-+]".concat(o.source, ":").concat(l.source)), c = new RegExp("([zZ]|".concat(d.source, ")")), m = new RegExp("".concat(o.source, ":").concat(l.source, ":").concat(u.source).concat(f.source)), v = new RegExp("".concat(r.source, "-").concat(i.source, "-").concat(s.source)), g = new RegExp("".concat(m.source).concat(c.source)), h = new RegExp("^".concat(v.source, "[ tT]").concat(g.source, "$"));
    function y(w) {
      return (0, n.default)(w), h.test(w);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(na, na.exports)), na.exports;
}
var ra = { exports: {} }, Su;
function Mw() {
  return Su || (Su = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
    function i(s) {
      return (0, n.default)(s), r.has(s.toUpperCase());
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ra, ra.exports)), ra.exports;
}
var Rt = {}, bu;
function Iw() {
  if (bu) return Rt;
  bu = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.CurrencyCodes = void 0, Rt.default = a;
  var e = t(/* @__PURE__ */ X());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
  function a(r) {
    return (0, e.default)(r), n.has(r.toUpperCase());
  }
  return Rt.CurrencyCodes = n, Rt;
}
var aa = { exports: {} }, Au;
function Cw() {
  return Au || (Au = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ De());
    function r(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var i = /^[A-Z2-7]+=*$/, s = /^[A-HJKMNP-TV-Z0-9]+$/, o = {
      crockford: !1
    };
    function l(u, f) {
      if ((0, n.default)(u), f = (0, a.default)(f, o), f.crockford)
        return s.test(u);
      var d = u.length;
      return !!(d % 8 === 0 && i.test(u));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(aa, aa.exports)), aa.exports;
}
var ia = { exports: {} }, Eu;
function Nw() {
  return Eu || (Eu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[A-HJ-NP-Za-km-z1-9]*$/;
    function i(s) {
      return (0, n.default)(s), !!r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ia, ia.exports)), ia.exports;
}
var sa = { exports: {} }, Mu;
function Rw() {
  return Mu || (Mu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ X());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^[a-z]+\/[a-z0-9\-\+\._]+$/i, i = /^[a-z\-]+=[a-z0-9\-]+$/i, s = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
    function o(l) {
      (0, n.default)(l);
      var u = l.split(",");
      if (u.length < 2)
        return !1;
      var f = u.shift().trim().split(";"), d = f.shift();
      if (d.slice(0, 5) !== "data:")
        return !1;
      var c = d.slice(5);
      if (c !== "" && !r.test(c))
        return !1;
      for (var m = 0; m < f.length; m++)
        if (!(m === f.length - 1 && f[m].toLowerCase() === "base64") && !i.test(f[m]))
          return !1;
      for (var v = 0; v < u.length; v++)
        if (!s.test(u[v]))
          return !1;
      return !0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(sa, sa.exports)), sa.exports;
}
var oa = { exports: {} }, Iu;
function $w() {
  return Iu || (Iu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
    function i(s) {
      return (0, n.default)(s), s.indexOf("magnet:?") !== 0 ? !1 : r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(oa, oa.exports)), oa.exports;
}
var la = { exports: {} }, ua = { exports: {} }, ca = { exports: {} }, Cu;
function Lf() {
  return Cu || (Cu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      if ((0, n.default)(i), s) {
        var o = new RegExp("[".concat(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return i.replace(o, "");
      }
      for (var l = i.length - 1; /\s/.test(i.charAt(l)); )
        l -= 1;
      return i.slice(0, l + 1);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ca, ca.exports)), ca.exports;
}
var da = { exports: {} }, Nu;
function Of() {
  return Nu || (Nu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      (0, n.default)(i);
      var o = s ? new RegExp("^[".concat(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
      return i.replace(o, "");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(da, da.exports)), da.exports;
}
var Ru;
function Bf() {
  return Ru || (Ru = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ Lf()), a = r(/* @__PURE__ */ Of());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s, o) {
      return (0, n.default)((0, a.default)(s, o), o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ua, ua.exports)), ua.exports;
}
var $u;
function Dw() {
  return $u || ($u = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = v;
    var n = i(/* @__PURE__ */ Bf()), a = i(/* @__PURE__ */ If()), r = i(/* @__PURE__ */ X());
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    function s(g, h) {
      return u(g) || l(g, h) || d(g, h) || o();
    }
    function o() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function l(g, h) {
      var y = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
      if (y != null) {
        var w, x, _, b, S = [], I = !0, C = !1;
        try {
          if (_ = (y = y.call(g)).next, h !== 0) for (; !(I = (w = _.call(y)).done) && (S.push(w.value), S.length !== h); I = !0) ;
        } catch (R) {
          C = !0, x = R;
        } finally {
          try {
            if (!I && y.return != null && (b = y.return(), Object(b) !== b)) return;
          } finally {
            if (C) throw x;
          }
        }
        return S;
      }
    }
    function u(g) {
      if (Array.isArray(g)) return g;
    }
    function f(g, h) {
      var y = typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
      if (!y) {
        if (Array.isArray(g) || (y = d(g)) || h) {
          y && (g = y);
          var w = 0, x = function() {
          };
          return { s: x, n: function() {
            return w >= g.length ? { done: !0 } : { done: !1, value: g[w++] };
          }, e: function(C) {
            throw C;
          }, f: x };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var _ = !0, b = !1, S;
      return { s: function() {
        y = y.call(g);
      }, n: function() {
        var C = y.next();
        return _ = C.done, C;
      }, e: function(C) {
        b = !0, S = C;
      }, f: function() {
        try {
          !_ && y.return != null && y.return();
        } finally {
          if (b) throw S;
        }
      } };
    }
    function d(g, h) {
      if (g) {
        if (typeof g == "string") return c(g, h);
        var y = Object.prototype.toString.call(g).slice(8, -1);
        if (y === "Object" && g.constructor && (y = g.constructor.name), y === "Map" || y === "Set") return Array.from(g);
        if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return c(g, h);
      }
    }
    function c(g, h) {
      (h == null || h > g.length) && (h = g.length);
      for (var y = 0, w = new Array(h); y < h; y++) w[y] = g[y];
      return w;
    }
    function m(g) {
      var h = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), y = {
        cc: "",
        bcc: ""
      }, w = !1, x = g.split("&");
      if (x.length > 4)
        return !1;
      var _ = f(x), b;
      try {
        for (_.s(); !(b = _.n()).done; ) {
          var S = b.value, I = S.split("="), C = s(I, 2), R = C[0], O = C[1];
          if (R && !h.has(R)) {
            w = !0;
            break;
          }
          O && (R === "cc" || R === "bcc") && (y[R] = O), R && h.delete(R);
        }
      } catch (D) {
        _.e(D);
      } finally {
        _.f();
      }
      return w ? !1 : y;
    }
    function v(g, h) {
      if ((0, r.default)(g), g.indexOf("mailto:") !== 0)
        return !1;
      var y = g.replace("mailto:", "").split("?"), w = s(y, 2), x = w[0], _ = w[1], b = _ === void 0 ? "" : _;
      if (!x && !b)
        return !0;
      var S = m(b);
      return S ? "".concat(x, ",").concat(S.cc, ",").concat(S.bcc).split(",").every(function(I) {
        return I = (0, n.default)(I, " "), I ? (0, a.default)(I, h) : !0;
      }) : !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(la, la.exports)), la.exports;
}
var fa = { exports: {} }, Du;
function Pw() {
  return Du || (Du = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ X());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i, i = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i, s = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
    function o(l) {
      return (0, n.default)(l), r.test(l) || i.test(l) || s.test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(fa, fa.exports)), fa.exports;
}
var ha = { exports: {} }, Pu;
function kw() {
  return Pu || (Pu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ De());
    function r(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var i = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/, s = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/, o = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i, l = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i, u = {
      checkDMS: !1
    };
    function f(d, c) {
      if ((0, n.default)(d), c = (0, a.default)(c, u), !d.includes(",")) return !1;
      var m = d.split(",");
      return m[0].startsWith("(") && !m[1].endsWith(")") || m[1].endsWith(")") && !m[0].startsWith("(") ? !1 : c.checkDMS ? o.test(m[0]) && l.test(m[1]) : i.test(m[0]) && s.test(m[1]);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ha, ha.exports)), ha.exports;
}
var $t = {}, ku;
function Tw() {
  if (ku) return $t;
  ku = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.default = o, $t.locales = void 0;
  var e = t(/* @__PURE__ */ X());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var n = /^\d{3}$/, a = /^\d{4}$/, r = /^\d{5}$/, i = /^\d{6}$/, s = {
    AD: /^AD\d{3}$/,
    AT: a,
    AU: a,
    AZ: /^AZ\d{4}$/,
    BA: /^([7-8]\d{4}$)/,
    BE: a,
    BG: a,
    BR: /^\d{5}-\d{3}$/,
    BY: /^2[1-4]\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: a,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: r,
    DK: a,
    DO: r,
    DZ: r,
    EE: r,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: r,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: a,
    ID: r,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
    IS: n,
    IT: r,
    JP: /^\d{3}\-\d{4}$/,
    KE: r,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: a,
    LV: /^LV\-\d{4}$/,
    LK: r,
    MG: n,
    MX: r,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: r,
    NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
    NO: a,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: a,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: i,
    RU: i,
    SA: r,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: i,
    SI: a,
    SK: /^\d{3}\s?\d{2}$/,
    TH: r,
    TN: a,
    TW: /^\d{3}(\d{2})?$/,
    UA: r,
    US: /^\d{5}(-\d{4})?$/,
    ZA: a,
    ZM: r
  };
  $t.locales = Object.keys(s);
  function o(l, u) {
    if ((0, e.default)(l), u in s)
      return s[u].test(l);
    if (u === "any") {
      for (var f in s)
        if (s.hasOwnProperty(f)) {
          var d = s[f];
          if (d.test(l))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(u, "'"));
  }
  return $t;
}
var pa = { exports: {} }, Tu;
function Lw() {
  return Tu || (Tu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(pa, pa.exports)), pa.exports;
}
var ga = { exports: {} }, Lu;
function Ow() {
  return Lu || (Lu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ga, ga.exports)), ga.exports;
}
var ma = { exports: {} }, va = { exports: {} }, Ou;
function Ff() {
  return Ou || (Ou = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), i.replace(new RegExp("[".concat(s, "]+"), "g"), "");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(va, va.exports)), va.exports;
}
var Bu;
function Bw() {
  return Bu || (Bu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ X()), a = r(/* @__PURE__ */ Ff());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s, o) {
      (0, n.default)(s);
      var l = o ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
      return (0, a.default)(s, l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ma, ma.exports)), ma.exports;
}
var xa = { exports: {} }, Fu;
function Fw() {
  return Fu || (Fu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), i.replace(new RegExp("[^".concat(s, "]+"), "g"), "");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(xa, xa.exports)), xa.exports;
}
var ya = { exports: {} }, Hu;
function Hw() {
  return Hu || (Hu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ X());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      (0, n.default)(i);
      for (var o = i.length - 1; o >= 0; o--)
        if (s.indexOf(i[o]) === -1)
          return !1;
      return !0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ya, ya.exports)), ya.exports;
}
var _a = { exports: {} }, Zu;
function Zw() {
  return Zu || (Zu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = a(/* @__PURE__ */ De());
    function a(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var r = {
      // The following options apply to all email addresses
      // Lowercases the local part of the email address.
      // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
      // The domain is always lowercased, as per RFC 1035
      all_lowercase: !0,
      // The following conversions are specific to GMail
      // Lowercases the local part of the GMail address (known to be case-insensitive)
      gmail_lowercase: !0,
      // Removes dots from the local part of the email address, as that's ignored by GMail
      gmail_remove_dots: !0,
      // Removes the subaddress (e.g. "+foo") from the email address
      gmail_remove_subaddress: !0,
      // Conversts the googlemail.com domain to gmail.com
      gmail_convert_googlemaildotcom: !0,
      // The following conversions are specific to Outlook.com / Windows Live / Hotmail
      // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
      outlookdotcom_lowercase: !0,
      // Removes the subaddress (e.g. "+foo") from the email address
      outlookdotcom_remove_subaddress: !0,
      // The following conversions are specific to Yahoo
      // Lowercases the local part of the Yahoo address (known to be case-insensitive)
      yahoo_lowercase: !0,
      // Removes the subaddress (e.g. "-foo") from the email address
      yahoo_remove_subaddress: !0,
      // The following conversions are specific to Yandex
      // Lowercases the local part of the Yandex address (known to be case-insensitive)
      yandex_lowercase: !0,
      // The following conversions are specific to iCloud
      // Lowercases the local part of the iCloud address (known to be case-insensitive)
      icloud_lowercase: !0,
      // Removes the subaddress (e.g. "+foo") from the email address
      icloud_remove_subaddress: !0
    }, i = ["icloud.com", "me.com"], s = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], o = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"], l = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
    function u(d) {
      return d.length > 1 ? d : "";
    }
    function f(d, c) {
      c = (0, n.default)(c, r);
      var m = d.split("@"), v = m.pop(), g = m.join("@"), h = [g, v];
      if (h[1] = h[1].toLowerCase(), h[1] === "gmail.com" || h[1] === "googlemail.com") {
        if (c.gmail_remove_subaddress && (h[0] = h[0].split("+")[0]), c.gmail_remove_dots && (h[0] = h[0].replace(/\.+/g, u)), !h[0].length)
          return !1;
        (c.all_lowercase || c.gmail_lowercase) && (h[0] = h[0].toLowerCase()), h[1] = c.gmail_convert_googlemaildotcom ? "gmail.com" : h[1];
      } else if (i.indexOf(h[1]) >= 0) {
        if (c.icloud_remove_subaddress && (h[0] = h[0].split("+")[0]), !h[0].length)
          return !1;
        (c.all_lowercase || c.icloud_lowercase) && (h[0] = h[0].toLowerCase());
      } else if (s.indexOf(h[1]) >= 0) {
        if (c.outlookdotcom_remove_subaddress && (h[0] = h[0].split("+")[0]), !h[0].length)
          return !1;
        (c.all_lowercase || c.outlookdotcom_lowercase) && (h[0] = h[0].toLowerCase());
      } else if (o.indexOf(h[1]) >= 0) {
        if (c.yahoo_remove_subaddress) {
          var y = h[0].split("-");
          h[0] = y.length > 1 ? y.slice(0, -1).join("-") : y[0];
        }
        if (!h[0].length)
          return !1;
        (c.all_lowercase || c.yahoo_lowercase) && (h[0] = h[0].toLowerCase());
      } else l.indexOf(h[1]) >= 0 ? ((c.all_lowercase || c.yandex_lowercase) && (h[0] = h[0].toLowerCase()), h[1] = "yandex.ru") : c.all_lowercase && (h[0] = h[0].toLowerCase());
      return h.join("@");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(_a, _a.exports)), _a.exports;
}
var wa = { exports: {} }, qu;
function qw() {
  return qu || (qu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(wa, wa.exports)), wa.exports;
}
var Sa = { exports: {} }, zu;
function zw() {
  return zu || (zu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ X());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      "cs-CZ": function(o) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(o);
      },
      "de-DE": function(o) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(o);
      },
      "de-LI": function(o) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(o);
      },
      "en-IN": function(o) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(o);
      },
      "es-AR": function(o) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(o);
      },
      "fi-FI": function(o) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(o);
      },
      "hu-HU": function(o) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(o);
      },
      "pt-BR": function(o) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(o);
      },
      "pt-PT": function(o) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(o);
      },
      "sq-AL": function(o) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(o);
      },
      "sv-SE": function(o) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(o.trim());
      },
      "en-PK": function(o) {
        return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(o.trim());
      }
    };
    function i(s, o) {
      if ((0, n.default)(s), o in r)
        return r[o](s);
      if (o === "any") {
        for (var l in r) {
          var u = r[l];
          if (u(s))
            return !0;
        }
        return !1;
      }
      throw new Error("Invalid locale '".concat(o, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Sa, Sa.exports)), Sa.exports;
}
var ba = { exports: {} }, Uu;
function Uw() {
  return Uu || (Uu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = m;
    var n = r(/* @__PURE__ */ De()), a = r(/* @__PURE__ */ X());
    function r(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var i = /^[A-Z]$/, s = /^[a-z]$/, o = /^[0-9]$/, l = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/, u = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: !1,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    };
    function f(v) {
      var g = {};
      return Array.from(v).forEach(function(h) {
        var y = g[h];
        y ? g[h] += 1 : g[h] = 1;
      }), g;
    }
    function d(v) {
      var g = f(v), h = {
        length: v.length,
        uniqueChars: Object.keys(g).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
      };
      return Object.keys(g).forEach(function(y) {
        i.test(y) ? h.uppercaseCount += g[y] : s.test(y) ? h.lowercaseCount += g[y] : o.test(y) ? h.numberCount += g[y] : l.test(y) && (h.symbolCount += g[y]);
      }), h;
    }
    function c(v, g) {
      var h = 0;
      return h += v.uniqueChars * g.pointsPerUnique, h += (v.length - v.uniqueChars) * g.pointsPerRepeat, v.lowercaseCount > 0 && (h += g.pointsForContainingLower), v.uppercaseCount > 0 && (h += g.pointsForContainingUpper), v.numberCount > 0 && (h += g.pointsForContainingNumber), v.symbolCount > 0 && (h += g.pointsForContainingSymbol), h;
    }
    function m(v) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      (0, a.default)(v);
      var h = d(v);
      return g = (0, n.default)(g || {}, u), g.returnScore ? c(h, g) : h.length >= g.minLength && h.lowercaseCount >= g.minLowercase && h.uppercaseCount >= g.minUppercase && h.numberCount >= g.minNumbers && h.symbolCount >= g.minSymbols;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ba, ba.exports)), ba.exports;
}
var Dt = {}, ju;
function jw() {
  if (ju) return Dt;
  ju = 1;
  function e(d) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
      return typeof c;
    } : function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, e(d);
  }
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.default = f, Dt.vatMatchers = void 0;
  var t = i(/* @__PURE__ */ X()), n = r(/* @__PURE__ */ Tf());
  function a(d) {
    if (typeof WeakMap != "function") return null;
    var c = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (a = function(g) {
      return g ? m : c;
    })(d);
  }
  function r(d, c) {
    if (d && d.__esModule) return d;
    if (d === null || e(d) != "object" && typeof d != "function") return { default: d };
    var m = a(c);
    if (m && m.has(d)) return m.get(d);
    var v = { __proto__: null }, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var h in d) if (h !== "default" && {}.hasOwnProperty.call(d, h)) {
      var y = g ? Object.getOwnPropertyDescriptor(d, h) : null;
      y && (y.get || y.set) ? Object.defineProperty(v, h, y) : v[h] = d[h];
    }
    return v.default = d, m && m.set(d, v), v;
  }
  function i(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var s = function(c) {
    var m = c.match(/^(AU)?(\d{11})$/);
    if (!m)
      return !1;
    var v = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    c = c.replace(/^AU/, "");
    for (var g = (parseInt(c.slice(0, 1), 10) - 1).toString() + c.slice(1), h = 0, y = 0; y < 11; y++)
      h += v[y] * g.charAt(y);
    return h !== 0 && h % 89 === 0;
  }, o = function(c) {
    var m = function(g) {
      var h = g.pop(), y = [5, 4, 3, 2, 7, 6, 5, 4], w = (11 - g.reduce(function(x, _, b) {
        return x + _ * y[b];
      }, 0) % 11) % 11;
      return h === w;
    };
    return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(c) && m(c.match(/\d/g).map(function(v) {
      return +v;
    }));
  }, l = function(c) {
    var m = c.match(/^(PT)?(\d{9})$/);
    if (!m)
      return !1;
    var v = m[2], g = 11 - n.reverseMultiplyAndSum(v.split("").slice(0, 8).map(function(h) {
      return parseInt(h, 10);
    }), 9) % 11;
    return g > 9 ? parseInt(v[8], 10) === 0 : g === parseInt(v[8], 10);
  }, u = Dt.vatMatchers = {
    /**
     * European Union VAT identification numbers
     */
    AT: function(c) {
      return /^(AT)?U\d{8}$/.test(c);
    },
    BE: function(c) {
      return /^(BE)?\d{10}$/.test(c);
    },
    BG: function(c) {
      return /^(BG)?\d{9,10}$/.test(c);
    },
    HR: function(c) {
      return /^(HR)?\d{11}$/.test(c);
    },
    CY: function(c) {
      return /^(CY)?\w{9}$/.test(c);
    },
    CZ: function(c) {
      return /^(CZ)?\d{8,10}$/.test(c);
    },
    DK: function(c) {
      return /^(DK)?\d{8}$/.test(c);
    },
    EE: function(c) {
      return /^(EE)?\d{9}$/.test(c);
    },
    FI: function(c) {
      return /^(FI)?\d{8}$/.test(c);
    },
    FR: function(c) {
      return /^(FR)?\w{2}\d{9}$/.test(c);
    },
    DE: function(c) {
      return /^(DE)?\d{9}$/.test(c);
    },
    EL: function(c) {
      return /^(EL)?\d{9}$/.test(c);
    },
    HU: function(c) {
      return /^(HU)?\d{8}$/.test(c);
    },
    IE: function(c) {
      return /^(IE)?\d{7}\w{1}(W)?$/.test(c);
    },
    IT: function(c) {
      return /^(IT)?\d{11}$/.test(c);
    },
    LV: function(c) {
      return /^(LV)?\d{11}$/.test(c);
    },
    LT: function(c) {
      return /^(LT)?\d{9,12}$/.test(c);
    },
    LU: function(c) {
      return /^(LU)?\d{8}$/.test(c);
    },
    MT: function(c) {
      return /^(MT)?\d{8}$/.test(c);
    },
    NL: function(c) {
      return /^(NL)?\d{9}B\d{2}$/.test(c);
    },
    PL: function(c) {
      return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(c);
    },
    PT: l,
    RO: function(c) {
      return /^(RO)?\d{2,10}$/.test(c);
    },
    SK: function(c) {
      return /^(SK)?\d{10}$/.test(c);
    },
    SI: function(c) {
      return /^(SI)?\d{8}$/.test(c);
    },
    ES: function(c) {
      return /^(ES)?\w\d{7}[A-Z]$/.test(c);
    },
    SE: function(c) {
      return /^(SE)?\d{12}$/.test(c);
    },
    /**
     * VAT numbers of non-EU countries
     */
    AL: function(c) {
      return /^(AL)?\w{9}[A-Z]$/.test(c);
    },
    MK: function(c) {
      return /^(MK)?\d{13}$/.test(c);
    },
    AU: s,
    BY: function(c) {
      return /^(УНП )?\d{9}$/.test(c);
    },
    CA: function(c) {
      return /^(CA)?\d{9}$/.test(c);
    },
    IS: function(c) {
      return /^(IS)?\d{5,6}$/.test(c);
    },
    IN: function(c) {
      return /^(IN)?\d{15}$/.test(c);
    },
    ID: function(c) {
      return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(c);
    },
    IL: function(c) {
      return /^(IL)?\d{9}$/.test(c);
    },
    KZ: function(c) {
      return /^(KZ)?\d{12}$/.test(c);
    },
    NZ: function(c) {
      return /^(NZ)?\d{9}$/.test(c);
    },
    NG: function(c) {
      return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(c);
    },
    NO: function(c) {
      return /^(NO)?\d{9}MVA$/.test(c);
    },
    PH: function(c) {
      return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(c);
    },
    RU: function(c) {
      return /^(RU)?(\d{10}|\d{12})$/.test(c);
    },
    SM: function(c) {
      return /^(SM)?\d{5}$/.test(c);
    },
    SA: function(c) {
      return /^(SA)?\d{15}$/.test(c);
    },
    RS: function(c) {
      return /^(RS)?\d{9}$/.test(c);
    },
    CH: o,
    TR: function(c) {
      return /^(TR)?\d{10}$/.test(c);
    },
    UA: function(c) {
      return /^(UA)?\d{12}$/.test(c);
    },
    GB: function(c) {
      return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(c);
    },
    UZ: function(c) {
      return /^(UZ)?\d{9}$/.test(c);
    },
    /**
     * VAT numbers of Latin American countries
     */
    AR: function(c) {
      return /^(AR)?\d{11}$/.test(c);
    },
    BO: function(c) {
      return /^(BO)?\d{7}$/.test(c);
    },
    BR: function(c) {
      return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(c);
    },
    CL: function(c) {
      return /^(CL)?\d{8}-\d{1}$/.test(c);
    },
    CO: function(c) {
      return /^(CO)?\d{10}$/.test(c);
    },
    CR: function(c) {
      return /^(CR)?\d{9,12}$/.test(c);
    },
    EC: function(c) {
      return /^(EC)?\d{13}$/.test(c);
    },
    SV: function(c) {
      return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(c);
    },
    GT: function(c) {
      return /^(GT)?\d{7}-\d{1}$/.test(c);
    },
    HN: function(c) {
      return /^(HN)?$/.test(c);
    },
    MX: function(c) {
      return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(c);
    },
    NI: function(c) {
      return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(c);
    },
    PA: function(c) {
      return /^(PA)?$/.test(c);
    },
    PY: function(c) {
      return /^(PY)?\d{6,8}-\d{1}$/.test(c);
    },
    PE: function(c) {
      return /^(PE)?\d{11}$/.test(c);
    },
    DO: function(c) {
      return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(c);
    },
    UY: function(c) {
      return /^(UY)?\d{12}$/.test(c);
    },
    VE: function(c) {
      return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(c);
    }
  };
  function f(d, c) {
    if ((0, t.default)(d), (0, t.default)(c), c in u)
      return u[c](d);
    throw new Error("Invalid country code: '".concat(c, "'"));
  }
  return Dt;
}
var Vu;
function Vw() {
  return Vu || (Vu = 1, (function(e, t) {
    function n(ye) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Le) {
        return typeof Le;
      } : function(Le) {
        return Le && typeof Symbol == "function" && Le.constructor === Symbol && Le !== Symbol.prototype ? "symbol" : typeof Le;
      }, n(ye);
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = Y(/* @__PURE__ */ Is()), r = Y(/* @__PURE__ */ Af()), i = Y(/* @__PURE__ */ x_()), s = Y(/* @__PURE__ */ y_()), o = Y(/* @__PURE__ */ __()), l = Y(/* @__PURE__ */ w_()), u = Y(/* @__PURE__ */ S_()), f = Y(/* @__PURE__ */ If()), d = Y(/* @__PURE__ */ b_()), c = Y(/* @__PURE__ */ A_()), m = Y(/* @__PURE__ */ ai()), v = Y(/* @__PURE__ */ E_()), g = Y(/* @__PURE__ */ Cs()), h = Y(/* @__PURE__ */ Cf()), y = Y(/* @__PURE__ */ M_()), w = Y(/* @__PURE__ */ I_()), x = Y(/* @__PURE__ */ C_()), _ = Y(/* @__PURE__ */ N_()), b = Qe(/* @__PURE__ */ R_()), S = Qe(/* @__PURE__ */ $_()), I = Y(/* @__PURE__ */ D_()), C = Y(/* @__PURE__ */ P_()), R = Y(/* @__PURE__ */ k_()), O = Y(/* @__PURE__ */ T_()), D = Y(/* @__PURE__ */ L_()), L = Y(/* @__PURE__ */ O_()), H = Y(/* @__PURE__ */ B_()), E = Y(/* @__PURE__ */ Nf()), N = Y(/* @__PURE__ */ Rf()), $ = Y(/* @__PURE__ */ F_()), P = Y(/* @__PURE__ */ H_()), B = Y(/* @__PURE__ */ q_()), T = Y(/* @__PURE__ */ z_()), q = Y(/* @__PURE__ */ Ns()), z = Qe(/* @__PURE__ */ bf()), Z = Y(/* @__PURE__ */ j_()), re = Y(/* @__PURE__ */ $f()), ne = Y(/* @__PURE__ */ V_()), W = Y(/* @__PURE__ */ W_()), Q = Y(/* @__PURE__ */ G_()), J = Y(/* @__PURE__ */ K_()), F = Y(/* @__PURE__ */ Y_()), ee = Y(/* @__PURE__ */ X_()), ue = Qe(/* @__PURE__ */ J_()), le = Y(/* @__PURE__ */ Q_()), G = Y(/* @__PURE__ */ ew()), j = Y(/* @__PURE__ */ tw()), ae = Y(/* @__PURE__ */ nw()), te = Y(/* @__PURE__ */ rw()), de = Y(/* @__PURE__ */ aw()), be = Y(/* @__PURE__ */ iw()), A = Y(/* @__PURE__ */ Mf()), M = Y(/* @__PURE__ */ sw()), k = Y(/* @__PURE__ */ ow()), U = Y(/* @__PURE__ */ lw()), V = Y(/* @__PURE__ */ uw()), K = Y(/* @__PURE__ */ cw()), ie = Y(/* @__PURE__ */ kf()), ce = Y(/* @__PURE__ */ dw()), he = Y(/* @__PURE__ */ fw()), ve = Y(/* @__PURE__ */ hw()), Re = Y(/* @__PURE__ */ pw()), Oe = Y(/* @__PURE__ */ gw()), Pe = Y(/* @__PURE__ */ mw()), st = Y(/* @__PURE__ */ vw()), ot = Qe(/* @__PURE__ */ xw()), Ue = Y(/* @__PURE__ */ yw()), Je = Y(/* @__PURE__ */ _w()), xt = Y(/* @__PURE__ */ ww()), An = /* @__PURE__ */ Sw(), ii = Y(/* @__PURE__ */ bw()), si = Y(/* @__PURE__ */ Aw()), oi = Y(/* @__PURE__ */ Ew()), li = Y(/* @__PURE__ */ Df()), ui = Y(/* @__PURE__ */ Mw()), ci = Y(/* @__PURE__ */ Iw()), di = Y(/* @__PURE__ */ Cw()), fi = Y(/* @__PURE__ */ Nw()), hi = Y(/* @__PURE__ */ Pf()), pi = Y(/* @__PURE__ */ Rw()), gi = Y(/* @__PURE__ */ $w()), mi = Y(/* @__PURE__ */ Dw()), vi = Y(/* @__PURE__ */ Pw()), xi = Y(/* @__PURE__ */ kw()), En = Qe(/* @__PURE__ */ Tw()), yi = Y(/* @__PURE__ */ Of()), _i = Y(/* @__PURE__ */ Lf()), wi = Y(/* @__PURE__ */ Bf()), Si = Y(/* @__PURE__ */ Lw()), bi = Y(/* @__PURE__ */ Ow()), Ai = Y(/* @__PURE__ */ Bw()), Ei = Y(/* @__PURE__ */ Fw()), Mi = Y(/* @__PURE__ */ Ff()), Ii = Y(/* @__PURE__ */ Hw()), Mn = Y(/* @__PURE__ */ Zw()), In = Y(/* @__PURE__ */ qw()), Cn = Y(/* @__PURE__ */ zw()), Ci = Y(/* @__PURE__ */ Uw()), Ni = Y(/* @__PURE__ */ jw());
    function Nn(ye) {
      if (typeof WeakMap != "function") return null;
      var Le = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap();
      return (Nn = function(Jt) {
        return Jt ? je : Le;
      })(ye);
    }
    function Qe(ye, Le) {
      if (ye && ye.__esModule) return ye;
      if (ye === null || n(ye) != "object" && typeof ye != "function") return { default: ye };
      var je = Nn(Le);
      if (je && je.has(ye)) return je.get(ye);
      var et = { __proto__: null }, Jt = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var tt in ye) if (tt !== "default" && {}.hasOwnProperty.call(ye, tt)) {
        var yt = Jt ? Object.getOwnPropertyDescriptor(ye, tt) : null;
        yt && (yt.get || yt.set) ? Object.defineProperty(et, tt, yt) : et[tt] = ye[tt];
      }
      return et.default = ye, je && je.set(ye, et), et;
    }
    function Y(ye) {
      return ye && ye.__esModule ? ye : { default: ye };
    }
    var Ri = "13.12.0", Rn = {
      version: Ri,
      toDate: a.default,
      toFloat: r.default,
      toInt: i.default,
      toBoolean: s.default,
      equals: o.default,
      contains: l.default,
      matches: u.default,
      isEmail: f.default,
      isURL: d.default,
      isMACAddress: c.default,
      isIP: m.default,
      isIPRange: v.default,
      isFQDN: g.default,
      isBoolean: w.default,
      isIBAN: ue.default,
      isBIC: le.default,
      isAbaRouting: _.default,
      isAlpha: b.default,
      isAlphaLocales: b.locales,
      isAlphanumeric: S.default,
      isAlphanumericLocales: S.locales,
      isNumeric: I.default,
      isPassportNumber: C.default,
      isPort: R.default,
      isLowercase: O.default,
      isUppercase: D.default,
      isAscii: H.default,
      isFullWidth: E.default,
      isHalfWidth: N.default,
      isVariableWidth: $.default,
      isMultibyte: P.default,
      isSemVer: B.default,
      isSurrogatePair: T.default,
      isInt: q.default,
      isIMEI: L.default,
      isFloat: z.default,
      isFloatLocales: z.locales,
      isDecimal: Z.default,
      isHexadecimal: re.default,
      isOctal: ne.default,
      isDivisibleBy: W.default,
      isHexColor: Q.default,
      isRgbColor: J.default,
      isHSL: F.default,
      isISRC: ee.default,
      isMD5: G.default,
      isHash: j.default,
      isJWT: ae.default,
      isJSON: te.default,
      isEmpty: de.default,
      isLength: be.default,
      isLocale: x.default,
      isByteLength: A.default,
      isUUID: M.default,
      isMongoId: k.default,
      isAfter: U.default,
      isBefore: V.default,
      isIn: K.default,
      isLuhnNumber: ie.default,
      isCreditCard: ce.default,
      isIdentityCard: he.default,
      isEAN: ve.default,
      isISIN: Re.default,
      isISBN: Oe.default,
      isISSN: Pe.default,
      isMobilePhone: ot.default,
      isMobilePhoneLocales: ot.locales,
      isPostalCode: En.default,
      isPostalCodeLocales: En.locales,
      isEthereumAddress: Ue.default,
      isCurrency: Je.default,
      isBtcAddress: xt.default,
      isISO6346: An.isISO6346,
      isFreightContainerID: An.isFreightContainerID,
      isISO6391: ii.default,
      isISO8601: si.default,
      isRFC3339: oi.default,
      isISO31661Alpha2: li.default,
      isISO31661Alpha3: ui.default,
      isISO4217: ci.default,
      isBase32: di.default,
      isBase58: fi.default,
      isBase64: hi.default,
      isDataURI: pi.default,
      isMagnetURI: gi.default,
      isMailtoURI: mi.default,
      isMimeType: vi.default,
      isLatLong: xi.default,
      ltrim: yi.default,
      rtrim: _i.default,
      trim: wi.default,
      escape: Si.default,
      unescape: bi.default,
      stripLow: Ai.default,
      whitelist: Ei.default,
      blacklist: Mi.default,
      isWhitelisted: Ii.default,
      normalizeEmail: Mn.default,
      toString,
      isSlug: In.default,
      isStrongPassword: Ci.default,
      isTaxID: st.default,
      isDate: h.default,
      isTime: y.default,
      isLicensePlate: Cn.default,
      isVAT: Ni.default,
      ibanLocales: ue.locales
    };
    t.default = Rn, e.exports = t.default, e.exports.default = t.default;
  })(Fn, Fn.exports)), Fn.exports;
}
var Ww = /* @__PURE__ */ Vw();
const Gw = /* @__PURE__ */ ec(Ww), Kw = ({
  automationId: e,
  subject: t,
  lexical: n,
  validateForm: a,
  onClose: r
}) => {
  const { data: i } = Ih(), { mutateAsync: s } = Zh(), [o, l] = pe(i?.email || ""), [u, f] = pe(""), [d, c] = pe("idle"), m = oe(null);
  fe(() => () => {
    m.current && clearTimeout(m.current);
  }, []), fe(() => {
    i?.email && l(i.email);
  }, [i?.email]), fe(() => {
    const g = (h) => {
      h.key === "Escape" && (h.stopPropagation(), r());
    };
    return document.addEventListener("keydown", g, !0), () => document.removeEventListener("keydown", g, !0);
  }, [r]);
  const v = async () => {
    if (f(""), !Gw.isEmail(o)) {
      f("Please enter a valid email address");
      return;
    }
    if (!a()) {
      f("Please complete the required fields");
      return;
    }
    c("sending");
    try {
      await s({
        id: e,
        email: o,
        subject: t,
        lexical: n
      }), c("sent"), m.current && clearTimeout(m.current), m.current = setTimeout(() => c("idle"), 2e3);
    } catch (g) {
      c("idle");
      let h;
      g instanceof ac && g.data && g.data.errors[0] ? h = g.data.errors[0].context || g.data.errors[0].message : g instanceof Error && (h = g.message), f(h || "Failed to send test email");
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "absolute top-full right-0 z-10 mt-2 w-[260px] rounded border border-grey-300 bg-white p-4 shadow-lg dark:border-grey-950 dark:bg-grey-950", "data-testid": "test-email-dropdown", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ p.jsx("label", { className: "mb-2 block text-sm font-semibold", htmlFor: "test-email-input", children: "Send test email" }),
      /* @__PURE__ */ p.jsx(
        Ua,
        {
          id: "test-email-input",
          placeholder: "you@yoursite.com",
          value: o,
          onChange: (g) => {
            l(g.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      Ee,
      {
        className: "w-full",
        disabled: d === "sending",
        onClick: v,
        children: d === "sent" ? "Sent" : d === "sending" ? "Sending..." : "Send"
      }
    ),
    u && /* @__PURE__ */ p.jsx("span", { className: "mt-2 block text-xs text-destructive", children: u })
  ] });
}, Yw = (e) => {
  if (!e)
    return !0;
  try {
    const n = JSON.parse(e)?.root?.children;
    return !n || n.length === 0 || n.length === 1 && n[0].type === "paragraph" && (!n[0].children || n[0].children.length === 0);
  } catch {
    return !0;
  }
}, Hf = (e) => {
  const t = {};
  return e.subject?.trim() || (t.subject = "A subject is required"), Yw(e.lexical) && (t.lexical = "Email content is required"), t;
}, Xw = "AutomatedEmailsResponseType", Jw = rc({
  dataType: Xw,
  path: "/automated_emails/"
}), Qw = (e) => {
  if (typeof DOMParser > "u")
    return e;
  const n = new DOMParser().parseFromString(e, "text/html");
  return n.querySelectorAll("a[href]").forEach((a) => {
    a.target = "_blank", a.rel = "noopener noreferrer";
  }), `<!doctype html>${n.documentElement.outerHTML}`;
}, eS = (e) => {
  const t = "Failed to render preview";
  return e instanceof ac && e.data?.errors?.[0] ? e.data.errors[0].context || e.data.errors[0].message || t : e instanceof Error && e.message ? e.message : t;
}, tS = ({ automationId: e, previewAutomationEmail: t, setErrors: n }) => {
  const [a, r] = pe({ status: "idle" }), i = oe(0), s = () => {
    i.current += 1, r({ status: "idle" }), n({});
  }, o = async (u) => {
    const f = i.current + 1;
    i.current = f;
    const d = Hf(u);
    if (d.lexical) {
      n({ lexical: d.lexical }), r({
        status: "invalid",
        message: d.lexical
      });
      return;
    }
    n({}), r({ status: "loading" });
    try {
      const c = await t({
        id: e,
        subject: u.subject,
        lexical: u.lexical
      });
      if (i.current !== f)
        return;
      const m = c.automation_email_previews?.[0];
      if (!m?.html || !m?.plaintext || !m?.subject)
        throw new Error("Preview response was incomplete");
      r({
        status: "success",
        preview: {
          ...m,
          html: Qw(m.html)
        }
      });
    } catch (c) {
      if (i.current !== f)
        return;
      r({
        status: "error",
        message: eS(c)
      });
    }
  };
  let l = { status: "loading" };
  return a.status === "success" ? l = { status: "success", html: a.preview.html } : (a.status === "error" || a.status === "invalid") && (l = { status: a.status, message: a.message }), {
    previewFrameState: l,
    previewState: a,
    enterPreview: o,
    exitPreview: s
  };
}, Rs = (e, t, n) => cs(t) && !lc(t) && n ? n : e.sender_email || n || "", nS = (e, t, n, a) => e.sender_reply_to === "newsletter" ? cs(t) ? "" : Rs(e, t, a) : e.sender_reply_to === "support" ? n || a || "" : e.sender_reply_to, rS = (e, t, n, a) => {
  const r = nS(e, t, n, a);
  return r || (e.sender_reply_to === "newsletter" ? Rs(e, t, a) || n || a || "" : n || a || "");
}, Wu = {
  free: "member-welcome-email-free",
  paid: "member-welcome-email-paid"
}, at = (e) => e?.trim() || "", Ui = (...e) => e.map(at).find(Boolean) || "", aS = ({
  automatedEmails: e = [],
  config: t,
  defaultEmailAddress: n,
  newsletter: a,
  siteTitle: r,
  supportEmailAddress: i
}) => {
  const s = e.find((I) => I.slug === Wu.free), o = e.find((I) => I.slug === Wu.paid), l = Ui(s?.sender_name, o?.sender_name), u = Ui(s?.sender_email, o?.sender_email), f = Ui(s?.sender_reply_to, o?.sender_reply_to), d = at(a?.sender_name), c = a ? at(Rs(a, t, n || void 0)) : "", m = a ? at(rS(a, t, i || void 0, n || void 0)) : "", v = d || at(r) || "Your site name", g = c || at(n), h = m || at(i) || at(n), y = l || v, w = u || g || "", x = f || h || "", _ = x !== "" && x !== w, b = cs(t), S = lc(t);
  return {
    hasDistinctReplyTo: _,
    replyToEmailInput: f,
    replyToEmailPlaceholder: h,
    resolvedReplyToEmail: x,
    resolvedSenderEmail: w,
    resolvedSenderName: y,
    senderEmailDomain: S ? Lh(t) : null,
    senderEmailInput: u,
    senderEmailPlaceholder: g,
    senderNameInput: l,
    senderNamePlaceholder: v,
    showSenderEmailInput: !b || S
  };
}, iS = "NewslettersResponseType", sS = Ch({
  dataType: iS,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (e, t) => ({
    ...t,
    page: (e.meta?.pagination.next || 1).toString()
  }),
  returnData: (e) => {
    const { pages: t } = e, n = t.flatMap((r) => r.newsletters), a = t[t.length - 1].meta;
    return {
      newsletters: n,
      meta: a,
      isEnd: a ? a.pagination.pages === a.pagination.page : !0
    };
  }
}), oS = (e = []) => {
  const { data: t } = qa(), { data: n } = us(), a = t?.settings || [], r = Ce(() => n?.config || {}, [n]), [i, s, o] = za(a, ["title", "default_email_address", "support_email_address"]), { data: l } = sS({
    searchParams: {
      filter: "status:active",
      limit: "1"
    }
  }), u = l?.newsletters?.[0];
  return Ce(() => aS({
    automatedEmails: e,
    config: r,
    defaultEmailAddress: s,
    newsletter: u,
    siteTitle: i,
    supportEmailAddress: o
  }), [e, r, s, u, i, o]);
}, Zf = Ne.forwardRef(({ title: e, centeredHeaderContent: t, headerActions: n, children: a, className: r, isEditMode: i = !1 }, s) => /* @__PURE__ */ p.jsxs(
  "div",
  {
    ref: s,
    className: xe(
      "flex h-full w-full flex-col gap-0 overflow-hidden p-0",
      i ? "bg-white" : "bg-gray-100",
      "dark:bg-gray-975",
      r
    ),
    children: [
      /* @__PURE__ */ p.jsxs("div", { className: "sticky top-0 grid shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-gray-200 bg-white px-5 py-3 dark:border-gray-900 dark:bg-gray-950", children: [
        /* @__PURE__ */ p.jsx("h3", { className: "justify-self-start text-xl font-semibold", children: e }),
        /* @__PURE__ */ p.jsx("div", { className: "justify-self-center", children: t }),
        /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-2 justify-self-end", children: n })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "flex min-h-0 grow flex-col overflow-y-auto [scrollbar-gutter:stable]", children: a })
    ]
  }
));
Zf.displayName = "EmailPreviewModalContent";
const lS = ({ children: e, className: t }) => /* @__PURE__ */ p.jsx("div", { className: xe(
  "relative z-20 isolate mx-auto w-full max-w-[780px] rounded-t-lg border border-b-0 border-gray-200 bg-white px-6 py-4 transition-[max-width,padding] duration-300 ease-out motion-reduce:transition-none dark:border-grey-900 dark:bg-grey-975",
  t
), children: e }), uS = ({ children: e, className: t }) => /* @__PURE__ */ p.jsx("div", { className: xe(
  "flex mx-auto w-full rounded-b-lg transition-[max-width,height,padding] duration-300 ease-out motion-reduce:transition-none dark:border-grey-900 dark:shadow-none grow max-w-[780px]",
  t
), children: e }), cS = ({
  automationId: e,
  initialMode: t = "edit",
  initialSubject: n,
  initialLexical: a,
  isDiscardNavigationBlocked: r = !1,
  onClose: i,
  onDirtyChange: s,
  onDiscardBlockedNavigation: o,
  onKeepEditingAfterBlockedNavigation: l,
  onSave: u
}) => {
  const { mutateAsync: f } = qh(), { data: d } = Jw(), [c, m] = pe(!1), [v, g] = pe(t), [h, y] = pe(null), [w, x] = pe(!1), _ = oe(!1), b = oe(null), S = oe(a || ""), I = oe(!1), C = oe(!1), R = Nh(), O = d?.automated_emails || [], { resolvedSenderName: D, resolvedSenderEmail: L, resolvedReplyToEmail: H, hasDistinctReplyTo: E } = oS(O), { formState: N, saveState: $, updateForm: P, setFormState: B, setErrors: T, handleSave: q, okProps: z, errors: Z, clearError: re } = Np({
    initialState: {
      subject: n || "",
      lexical: a || ""
    },
    savingDelay: 500,
    onSave: async (te) => {
      u({ subject: te.subject, lexical: te.lexical });
    },
    onSaveError: R
  }), ne = ge(() => {
    const te = Hf(N);
    return T(te), Object.values(te).every((de) => !de);
  }, [N, T]), W = z.label || "Save", { previewFrameState: Q, enterPreview: J, exitPreview: F } = tS({
    automationId: e,
    previewAutomationEmail: f,
    setErrors: T
  });
  fe(() => {
    t !== "preview" || _.current || (_.current = !0, J(N));
  }, [J, N, t]);
  const ee = $ === "unsaved";
  fe(() => (s?.(ee && !C.current), () => {
    s?.(!1);
  }), [ee, s]);
  const ue = ge(() => {
    ee ? x(!0) : i();
  }, [ee, i]), le = ge(async () => {
    await q({ fakeWhenUnchanged: !0 });
  }, [q]);
  fe(() => {
    const te = (de) => {
      b.current && !b.current.contains(de.target) && m(!1);
    };
    return c && document.addEventListener("mousedown", te), () => {
      document.removeEventListener("mousedown", te);
    };
  }, [c]);
  const G = oe(le);
  fe(() => {
    G.current = le;
  }, [le]), fe(() => {
    const te = (de) => {
      (de.metaKey || de.ctrlKey) && de.key === "s" && (de.preventDefault(), G.current());
    };
    return window.addEventListener("keydown", te), () => {
      window.removeEventListener("keydown", te);
    };
  }, []);
  const j = ge((te) => {
    g(te), te === "preview" ? (y(null), J(N)) : (m(!1), y(null), F());
  }, [J, F, N]), ae = ge((te) => {
    if (!I.current) {
      S.current = te, B((de) => ({ ...de, lexical: te }));
      return;
    }
    te !== S.current ? P((de) => ({ ...de, lexical: te })) : B((de) => ({ ...de, lexical: te }));
  }, [B, P]);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Xh, { open: !0, onOpenChange: (te) => {
      te || ue();
    }, children: /* @__PURE__ */ p.jsxs(
      Jh,
      {
        "aria-describedby": void 0,
        className: "top-0 left-0 h-[100dvh] w-full max-w-full translate-x-0 translate-y-0 grid-rows-[1fr] gap-0 rounded-none border-0 p-0 shadow-none outline-hidden sm:rounded-none dark:bg-[#151719]",
        onEscapeKeyDown: (te) => {
          te.preventDefault(), te.stopPropagation(), ue();
        },
        children: [
          /* @__PURE__ */ p.jsx(Qh, { className: "sr-only", children: "Edit email" }),
          /* @__PURE__ */ p.jsx(
            Zf,
            {
              centeredHeaderContent: /* @__PURE__ */ p.jsx(
                ep,
                {
                  "data-testid": "email-mode-toggle",
                  value: v,
                  variant: "segmented-sm",
                  onValueChange: (te) => te && j(te),
                  children: /* @__PURE__ */ p.jsxs(tp, { className: "grid w-[240px] grid-cols-2 bg-gray-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]", children: [
                    /* @__PURE__ */ p.jsx(Zs, { className: "w-full justify-center data-[state=active]:bg-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black", "data-testid": "email-mode-edit", value: "edit", children: "Email content" }),
                    /* @__PURE__ */ p.jsx(Zs, { className: "w-full justify-center", "data-testid": "email-mode-preview", value: "preview", children: "Preview" })
                  ] })
                }
              ),
              headerActions: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                /* @__PURE__ */ p.jsx(Ee, { variant: "outline", onClick: ue, children: "Close" }),
                /* @__PURE__ */ p.jsx(
                  Ee,
                  {
                    disabled: z.disabled,
                    onClick: le,
                    children: W
                  }
                )
              ] }),
              isEditMode: v === "edit",
              title: "Edit email",
              children: /* @__PURE__ */ p.jsxs("div", { className: "flex grow flex-col items-center p-6", children: [
                v === "preview" && /* @__PURE__ */ p.jsx(lS, { className: "border-x-0 border-t-0 border-b", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center py-1", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "w-20 shrink-0 text-sm font-semibold", children: "From:" }),
                    /* @__PURE__ */ p.jsx("div", { className: "min-w-0 grow pr-4 text-sm", children: /* @__PURE__ */ p.jsxs("span", { className: "flex gap-1 truncate whitespace-nowrap", children: [
                      /* @__PURE__ */ p.jsx("span", { children: D }),
                      /* @__PURE__ */ p.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: `<${L}>` })
                    ] }) }),
                    /* @__PURE__ */ p.jsxs("div", { ref: b, className: "relative", children: [
                      /* @__PURE__ */ p.jsxs(Ee, { variant: "outline", onClick: () => m(!c), children: [
                        /* @__PURE__ */ p.jsx(_h, { className: "size-4" }),
                        "Test"
                      ] }),
                      c && /* @__PURE__ */ p.jsx(Kw, { automationId: e, lexical: N.lexical, subject: N.subject, validateForm: ne, onClose: () => m(!1) })
                    ] })
                  ] }),
                  E && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "w-20 shrink-0 text-sm font-semibold", children: "Reply-to:" }),
                    /* @__PURE__ */ p.jsx("div", { className: "grow text-sm text-gray-500 dark:text-gray-400", children: H })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "w-20 shrink-0 text-sm font-semibold", children: "Subject:" }),
                    /* @__PURE__ */ p.jsxs("div", { className: "grow", children: [
                      /* @__PURE__ */ p.jsx(
                        Ua,
                        {
                          className: "w-full",
                          "data-testid": "email-preview-subject",
                          value: h ?? N.subject,
                          onChange: (te) => {
                            const de = te.target.value;
                            y(de), P((be) => ({ ...be, subject: de })), re("subject");
                          }
                        }
                      ),
                      Z.subject && /* @__PURE__ */ p.jsx("span", { className: "mt-2 block text-xs text-destructive", children: Z.subject })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ p.jsxs(uS, { className: xe(
                  v === "preview" && "shadow-sm bg-white dark:bg-grey-975",
                  v === "edit" && "px-6",
                  v === "edit" && "rounded-lg",
                  v === "edit" && Z.lexical && "border border-red-500"
                ), children: [
                  /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: xe(
                        "mx-auto w-full max-w-[600px] pt-10 pb-8 transition-[max-width,padding] duration-300 ease-out motion-reduce:transition-none",
                        v === "preview" && "hidden"
                      ),
                      "data-testid": "email-editor",
                      onFocus: () => {
                        I.current = !0;
                      },
                      children: /* @__PURE__ */ p.jsx(
                        m_,
                        {
                          className: "automation-email-editor",
                          placeholder: "Begin writing your email...",
                          value: N.lexical,
                          onChange: ae
                        }
                      )
                    }
                  ),
                  v === "preview" && /* @__PURE__ */ p.jsx(v_, { previewState: Q })
                ] }),
                v === "edit" && Z.lexical && /* @__PURE__ */ p.jsx("span", { className: "mt-2 block max-w-[740px] text-xs text-destructive", children: Z.lexical })
              ] })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p.jsx(
      Pt,
      {
        open: w || r,
        onOpenChange: (te) => {
          if (te) {
            x(!0);
            return;
          }
          x(!1), r && l?.();
        },
        children: /* @__PURE__ */ p.jsxs(kt, { children: [
          /* @__PURE__ */ p.jsxs(Tt, { children: [
            /* @__PURE__ */ p.jsx(Lt, { children: "Discard changes?" }),
            /* @__PURE__ */ p.jsx(Ot, { children: "Your changes to this email haven't been saved." })
          ] }),
          /* @__PURE__ */ p.jsxs(Bt, { children: [
            /* @__PURE__ */ p.jsx(Ft, { children: "Keep editing" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                variant: "destructive",
                onClick: () => {
                  if (x(!1), r) {
                    o?.();
                    return;
                  }
                  C.current = !0, s?.(!1), i();
                },
                children: "Discard"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, dS = 180, fS = [1.5, 1, 0.75, 0.5, 0.25], hS = () => {
  const [e, t] = pe(!1), { fitView: n, zoomIn: a, zoomOut: r, zoomTo: i } = ni(), { zoom: s } = ky(), o = { duration: dS }, l = Math.round(s * 100), u = (d) => {
    t(!1), i(d, o);
  }, f = () => {
    t(!1), n(o);
  };
  return /* @__PURE__ */ p.jsxs(
    Vy,
    {
      className: "gap-1 overflow-hidden rounded-md bg-surface-elevated p-0.5 text-foreground shadow-sm",
      orientation: "horizontal",
      showFitView: !1,
      showInteractive: !1,
      showZoom: !1,
      style: { bottom: 24, left: 24 },
      children: [
        /* @__PURE__ */ p.jsx(
          Ee,
          {
            "aria-label": "Zoom out",
            className: "rounded-sm text-text-secondary hover:text-foreground",
            size: "icon",
            title: "Zoom out",
            type: "button",
            variant: "ghost",
            onClick: () => {
              r(o);
            },
            children: /* @__PURE__ */ p.jsx(tc, { className: "size-5", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ p.jsxs(yp, { open: e, onOpenChange: t, children: [
          /* @__PURE__ */ p.jsx(_p, { asChild: !0, children: /* @__PURE__ */ p.jsxs(
            Ee,
            {
              "aria-label": `Zoom level ${Aa(l)}%`,
              className: "h-9 min-w-14 rounded-sm px-2 font-semibold",
              type: "button",
              variant: "ghost",
              children: [
                Aa(l),
                "%"
              ]
            }
          ) }),
          /* @__PURE__ */ p.jsxs(wp, { align: "center", className: "w-40", side: "top", sideOffset: 12, children: [
            fS.map((d) => {
              const c = Math.round(d * 100), m = Math.abs(s - d) < 0.01;
              return /* @__PURE__ */ p.jsxs(qs, { onSelect: () => u(d), children: [
                Aa(c),
                "%",
                m && /* @__PURE__ */ p.jsx(Sp, { children: /* @__PURE__ */ p.jsx(cc, { className: "size-4 text-text-secondary", strokeWidth: 1.5 }) })
              ] }, d);
            }),
            /* @__PURE__ */ p.jsx(bp, {}),
            /* @__PURE__ */ p.jsx(qs, { onSelect: f, children: "Fit to view" })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx(
          Ee,
          {
            "aria-label": "Zoom in",
            className: "rounded-sm text-text-secondary hover:text-foreground",
            size: "icon",
            title: "Zoom in",
            type: "button",
            variant: "ghost",
            onClick: () => {
              a(o);
            },
            children: /* @__PURE__ */ p.jsx(Za, { className: "size-5", strokeWidth: 1.5 })
          }
        )
      ]
    }
  );
}, We = "__trigger__", ft = "__tail__", pS = ({ sourceId: e, targetId: t }) => ({
  previousActionId: e === We ? void 0 : e,
  nextActionId: t === ft ? void 0 : t
}), gS = {
  background: "transparent",
  border: "none",
  height: 0,
  minHeight: 0,
  minWidth: 0,
  opacity: 0,
  pointerEvents: "none",
  width: 0
}, vn = ({ type: e, position: t }) => /* @__PURE__ */ p.jsx(mn, { isConnectable: !1, position: t, style: gS, type: e }), qf = ({ children: e, className: t, data: n }) => {
  const a = oe(!1);
  return /* @__PURE__ */ p.jsxs(c0, { onOpenChange: (r) => {
    r || (a.current = !1);
  }, children: [
    /* @__PURE__ */ p.jsx(d0, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      "button",
      {
        "aria-invalid": !!n.errorMessage,
        "aria-label": n.value ? `${n.label}: ${n.value}` : n.label,
        "aria-pressed": n.selected,
        className: xe(
          "flex w-64 items-center gap-3 rounded-lg border border-transparent bg-surface-elevated p-3 text-left text-sm text-foreground shadow-sm transition-all focus-visible:border-border-strong focus-visible:outline-none",
          (n.errorMessage || n.warningMessage) && "items-start",
          !n.selected && "hover:border-border-strong",
          n.selected && !n.errorMessage && "border-gray-700 shadow-[inset_0_0_0_1px_var(--color-gray-700),0_1px_2px_0_rgb(0_0_0_/_0.05)]",
          n.errorMessage && "border-destructive",
          !n.errorMessage && n.warningMessage && "border-yellow-600",
          n.isNew && "animate-in fade-in-0 zoom-in-90 duration-250 ease-out motion-reduce:animate-none",
          t
        ),
        type: "button",
        onClick: (r) => {
          if (r.stopPropagation(), r.button !== 0 || a.current) {
            a.current = !1;
            return;
          }
          n.onSelect();
        },
        onContextMenu: (r) => {
          a.current = !0, r.stopPropagation();
        },
        onPointerDown: (r) => {
          r.button === 2 && r.stopPropagation();
        },
        children: e
      }
    ) }),
    /* @__PURE__ */ p.jsx(
      Hc,
      {
        className: "w-44",
        onClick: (r) => r.stopPropagation(),
        onPointerDown: (r) => r.stopPropagation(),
        children: n.contextMenuItems.map((r) => {
          if (r.type === "separator")
            return /* @__PURE__ */ p.jsx(qc, {}, r.id);
          const i = r.icon;
          return /* @__PURE__ */ p.jsxs(Zc, { variant: r.variant, onSelect: r.onSelect, children: [
            i && /* @__PURE__ */ p.jsx(i, { className: "size-4" }),
            r.label
          ] }, r.label);
        })
      }
    )
  ] });
}, zf = ({ data: e }) => {
  const t = e.icon, n = e.errorMessage || e.warningMessage;
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: xe("flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", n && "mt-[3px]"), children: /* @__PURE__ */ p.jsx(t, { className: "size-4" }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 flex-col text-left", children: [
      /* @__PURE__ */ p.jsx("span", { className: "text-sm text-text-secondary", children: e.label }),
      e.value && /* @__PURE__ */ p.jsx("span", { className: xe("truncate text-base font-medium", e.isPlaceholderValue && "opacity-50"), children: e.value }),
      e.errorMessage && /* @__PURE__ */ p.jsx("span", { className: "mt-1 text-xs text-destructive", children: e.errorMessage }),
      !e.errorMessage && e.warningMessage && /* @__PURE__ */ p.jsx("span", { className: "mt-1 text-xs text-yellow-600", children: e.warningMessage })
    ] })
  ] });
}, Uf = Ne.memo(({ data: e }) => /* @__PURE__ */ p.jsxs(qf, { data: e, children: [
  /* @__PURE__ */ p.jsx(zf, { data: e }),
  /* @__PURE__ */ p.jsx(vn, { position: se.Bottom, type: "source" })
] }));
Uf.displayName = "TriggerNode";
const jf = Ne.memo(({ data: e }) => /* @__PURE__ */ p.jsxs(qf, { data: e, children: [
  /* @__PURE__ */ p.jsx(vn, { position: se.Top, type: "target" }),
  /* @__PURE__ */ p.jsx(zf, { data: e }),
  /* @__PURE__ */ p.jsx(vn, { position: se.Bottom, type: "source" })
] }));
jf.displayName = "StepNode";
const mS = ({ data: e }) => {
  const [t, n] = pe(!1), a = (i) => {
    n(!1), e.onPick(i, e.anchor);
  }, r = "flex h-12 w-64 items-center justify-center rounded-lg border border-dashed border-border-default bg-surface-page transition-colors hover:border-border-strong focus-visible:border-border-strong focus-visible:outline-none";
  return e.disabled ? /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "flex h-12 w-64 items-center justify-center rounded-lg border border-border-default bg-[repeating-linear-gradient(135deg,var(--color-white)_0,var(--color-white)_12px,var(--color-gray-100)_12px,var(--color-gray-100)_24px)] text-sm font-medium text-text-secondary",
      "data-testid": "step-limit-tail-node",
      children: [
        /* @__PURE__ */ p.jsx(vn, { position: se.Top, type: "target" }),
        /* @__PURE__ */ p.jsx(wh, { className: "mr-2 size-4", strokeWidth: 1.5 }),
        e.disabledReason
      ]
    }
  ) : /* @__PURE__ */ p.jsxs(ic, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ p.jsxs(
      sc,
      {
        "aria-label": "Add step",
        className: xe(r, "cursor-pointer"),
        "data-testid": "add-step-tail-button",
        children: [
          /* @__PURE__ */ p.jsx(vn, { position: se.Top, type: "target" }),
          /* @__PURE__ */ p.jsx(Za, { className: "size-5 text-text-secondary", strokeWidth: 1.5 })
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(oc, { align: "center", className: "border-0 p-0 shadow-lg", side: "top", sideOffset: 12, children: /* @__PURE__ */ p.jsx(zc, { onPick: a }) })
  ] });
}, vS = {
  trigger: Uf,
  step: jf,
  tail: mS
}, Vf = (e) => {
  if (e <= 0)
    throw new Error("Wait time must be a positive number of hours.");
  if (e % 24 === 0) {
    const t = e / 24;
    return t === 1 ? "1 day" : `${t} days`;
  }
  return e === 1 ? "1 hour" : `${e} hours`;
}, Ra = 30, xS = /^\d+$/, ji = (e) => {
  const t = Number(e);
  return !xS.test(e) || !Number.isInteger(t) || t < 1 || t > Ra ? null : t;
}, Wf = ({ children: e, htmlFor: t, label: n }) => /* @__PURE__ */ p.jsxs(x0, { children: [
  /* @__PURE__ */ p.jsx(y0, { className: "text-sm font-medium text-text-secondary", htmlFor: t, children: n }),
  e
] }), Gf = ({ onClick: e }) => /* @__PURE__ */ p.jsxs(
  Ee,
  {
    className: "w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
    type: "button",
    variant: "outline",
    onClick: e,
    children: [
      /* @__PURE__ */ p.jsx(nc, { className: "size-4" }),
      "Delete step"
    ]
  }
), yS = {
  free: "Free",
  paid: "Paid"
}, _S = ({ memberTiers: e }) => {
  const t = e.map((n) => yS[n]).join(", ");
  return /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-5", children: t && /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ p.jsx("span", { className: "text-sm font-medium text-text-secondary", children: "Members" }),
    /* @__PURE__ */ p.jsx("span", { className: "text-base text-foreground", children: t })
  ] }) });
}, wS = ({ action: e, onUpdate: t, onDelete: n }) => {
  if (e.data.wait_hours % 24 !== 0)
    throw new Error(`WaitSidebarBody: wait_hours must be a multiple of 24, received ${e.data.wait_hours}`);
  const a = e.data.wait_hours / 24, [r, i] = pe(String(a)), [s, o] = pe(!1), l = Number(r), u = ji(r) !== null, f = s && !u, d = (v) => {
    const g = v * 24;
    g !== e.data.wait_hours && t(g);
  }, c = (v) => {
    const g = ji(r);
    if (g === null)
      return;
    const h = Math.min(Ra, Math.max(1, g + v));
    i(String(h)), d(h);
  }, m = (v) => {
    const g = v.target.value;
    i(g);
    const h = ji(g);
    h !== null && d(h);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
    /* @__PURE__ */ p.jsxs(Wf, { htmlFor: "automation-wait-days", label: "Wait for", children: [
      /* @__PURE__ */ p.jsxs(
        w0,
        {
          "aria-label": "Wait duration in days",
          className: "h-(--control-height)",
          "data-disabled": f ? "true" : void 0,
          children: [
            /* @__PURE__ */ p.jsx(
              M0,
              {
                "aria-describedby": f ? "automation-wait-days-error" : void 0,
                "aria-invalid": f,
                className: "w-10 min-w-10 flex-none pr-1 font-mono tabular-nums",
                id: "automation-wait-days",
                inputMode: "numeric",
                value: r,
                onBlur: () => o(!0),
                onChange: m,
                onFocus: () => o(!1)
              }
            ),
            /* @__PURE__ */ p.jsx(E0, { className: "mr-auto", children: l === 1 ? "day" : "days" }),
            /* @__PURE__ */ p.jsxs(b0, { align: "inline-end", className: "gap-0.5 pr-2", children: [
              /* @__PURE__ */ p.jsx(
                Gs,
                {
                  "aria-label": "Decrease wait by one day",
                  disabled: !u || l <= 1,
                  size: "icon-xs",
                  title: "Decrease wait by one day",
                  onClick: () => c(-1),
                  children: /* @__PURE__ */ p.jsx(tc, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ p.jsx(
                Gs,
                {
                  "aria-label": "Increase wait by one day",
                  disabled: !u || l >= Ra,
                  size: "icon-xs",
                  title: "Increase wait by one day",
                  onClick: () => c(1),
                  children: /* @__PURE__ */ p.jsx(Za, { className: "size-4" })
                }
              )
            ] })
          ]
        }
      ),
      f && /* @__PURE__ */ p.jsxs(_0, { className: "text-xs", id: "automation-wait-days-error", children: [
        "Enter a delay between 1 and ",
        Aa(Ra),
        " days"
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ p.jsx(Gf, { onClick: n }) })
  ] });
}, SS = ({ action: e, onUpdateSubject: t, onEditEmail: n, onDelete: a }) => {
  const r = oe(null);
  return fe(() => {
    r.current?.focus({ preventScroll: !0 });
  }, [e.id]), /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
    /* @__PURE__ */ p.jsx(Wf, { label: "Subject line", children: /* @__PURE__ */ p.jsx(
      Ua,
      {
        ref: r,
        placeholder: "Subject line",
        value: e.data.email_subject,
        onChange: (i) => t(i.target.value)
      }
    ) }),
    /* @__PURE__ */ p.jsxs(
      Ee,
      {
        className: "w-full",
        type: "button",
        variant: "outline",
        onClick: n,
        children: [
          /* @__PURE__ */ p.jsx(fc, { className: "size-4" }),
          "Edit email"
        ]
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ p.jsx(Gf, { onClick: a }) })
  ] });
}, bS = ({ detail: e }) => {
  switch (e.type) {
    case "trigger":
      return /* @__PURE__ */ p.jsx(_S, { memberTiers: e.memberTiers });
    case "wait":
      return /* @__PURE__ */ p.jsx(wS, { action: e.action, onDelete: e.onDelete, onUpdate: e.onUpdate }, e.action.id);
    case "send_email":
      return /* @__PURE__ */ p.jsx(SS, { action: e.action, onDelete: e.onDelete, onEditEmail: e.onEditEmail, onUpdateSubject: e.onUpdateSubject }, e.action.id);
    default: {
      const t = e;
      throw new Error(`Unknown sidebar type: ${t}`);
    }
  }
}, AS = ({ detail: e }) => {
  const t = e.icon;
  return /* @__PURE__ */ p.jsxs("div", { className: "flex min-h-full flex-col gap-6", children: [
    /* @__PURE__ */ p.jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(t, { className: "size-4" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ p.jsx("span", { className: "block text-sm text-text-secondary", children: e.label }),
        /* @__PURE__ */ p.jsx("h2", { className: xe("truncate text-base leading-tight font-medium text-foreground", e.isPlaceholderTitle && "opacity-50"), children: e.title })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(bS, { detail: e })
  ] });
}, ES = {
  "member-welcome-email-free": ["free"],
  "member-welcome-email-paid": ["paid"]
}, MS = ({ automation: e, stepId: t, onDelete: n, onUpdateWait: a, onUpdateSubject: r, onEditEmail: i }) => {
  if (!t)
    return null;
  if (t === We)
    return {
      icon: dc,
      label: "Trigger",
      title: "Member signs up",
      memberTiers: ES[e.slug] ?? [],
      type: "trigger"
    };
  const s = e.actions.find((o) => o.id === t);
  if (!s)
    return null;
  switch (s.type) {
    case "wait": {
      const o = Vf(s.data.wait_hours);
      return {
        icon: ss,
        label: "Wait",
        title: o,
        action: s,
        onDelete: () => n(s.id),
        onUpdate: (l) => a(s.id, l),
        type: "wait"
      };
    }
    case "send_email":
      return {
        icon: is,
        label: "Send email",
        isPlaceholderTitle: !s.data.email_subject,
        title: s.data.email_subject || "Untitled",
        action: s,
        onDelete: () => n(s.id),
        onUpdateSubject: (o) => r(s.id, o),
        onEditEmail: () => i(s.id),
        type: "send_email"
      };
    default: {
      const o = s;
      throw new Error(`Unknown automation action type: ${o}`);
    }
  }
}, IS = ({ automation: e, stepId: t, onDelete: n, onUpdateWait: a, onUpdateSubject: r, onEditEmail: i, isEmailModalOpen: s, onClose: o }) => {
  const l = MS({
    automation: e,
    stepId: t,
    onDelete: n,
    onUpdateWait: a,
    onUpdateSubject: r,
    onEditEmail: i
  });
  return fe(() => {
    if (!l)
      return;
    const u = (f) => {
      if (f.key === "Escape") {
        if (s)
          return;
        o();
      }
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [l, s, o]), /* @__PURE__ */ p.jsx(
    "aside",
    {
      "aria-hidden": !l,
      "aria-label": "Step details",
      className: xe(
        "absolute inset-y-0 right-0 z-[1] flex w-[calc(100%-6rem)] max-w-none translate-x-full flex-col gap-6 overflow-y-auto bg-background p-6 shadow-sm transition-transform duration-200 ease-out sm:w-[36rem] dark:border-l dark:border-gray-950",
        l ? "translate-x-0" : "pointer-events-none"
      ),
      "data-state": l ? "open" : "closed",
      "data-testid": "automation-step-sidebar",
      children: l && /* @__PURE__ */ p.jsx(AS, { detail: l })
    }
  );
}, $s = (e) => {
  if (!e)
    return !0;
  try {
    const n = JSON.parse(e)?.root?.children;
    return !n || n.length === 0 ? !0 : n.length === 1 && n[0].type === "paragraph" && (!n[0].children || n[0].children.length === 0);
  } catch {
    return !0;
  }
}, $a = 0, CS = 256, NS = $a + CS / 2, Gu = 180, RS = 40, $S = 250, DS = "Maximum steps added", PS = "var(--xy-edge-stroke)", on = "emailStep", kS = {
  "add-step-edge": u_
}, TS = (e) => {
  switch (e.type) {
    case "wait":
      return { icon: ss, label: "Wait", value: Vf(e.data.wait_hours) };
    case "send_email":
      return {
        icon: is,
        isPlaceholderValue: !e.data.email_subject,
        label: "Send email",
        value: e.data.email_subject || "Untitled",
        warningMessage: $s(e.data.email_lexical) ? "Empty email body" : void 0
      };
    default: {
      const t = e;
      throw new Error(`Unknown automation action type: ${t}`);
    }
  }
}, Ku = ({
  canDelete: e = !1,
  canEditEmailBody: t = !1,
  onDelete: n,
  onEditEmailBody: a,
  onPreviewEmail: r,
  onSelectStep: i,
  stepId: s
}) => {
  const o = [{
    icon: Sh,
    label: "Edit settings",
    onSelect: () => i(s)
  }];
  return t && a && o.push({
    icon: fc,
    label: "Edit email body",
    onSelect: () => a(s)
  }), t && r && o.push({
    icon: Th,
    label: "Preview",
    onSelect: () => r(s)
  }), e && n && (t && o.push({ id: "before-delete", type: "separator" }), o.push({
    icon: nc,
    label: "Delete",
    onSelect: () => n(s),
    variant: "destructive"
  })), o;
}, LS = (e) => {
  if (e.actions.length === 0)
    return [];
  const t = new Map(e.actions.map((l) => [l.id, l])), n = new Set(e.edges.map((l) => l.target_action_id)), a = e.actions.find((l) => !n.has(l.id));
  if (!a)
    throw new Error(`Could not determine the starting step for automation ${e.id}.`);
  const r = new Map(e.edges.map((l) => [l.source_action_id, l.target_action_id])), i = [], s = /* @__PURE__ */ new Set();
  let o = a;
  for (; o; ) {
    if (s.has(o.id))
      throw new Error(`Detected a loop in automation ${e.id}.`);
    i.push(o), s.add(o.id);
    const l = r.get(o.id);
    o = l ? t.get(l) : void 0;
  }
  if (i.length !== e.actions.length)
    throw new Error(`Some steps in automation ${e.id} are missing or disconnected.`);
  return i;
}, OS = ({ actionErrors: e, automation: t, disabled: n, onDelete: a, onEditEmailBody: r, onPick: i, onPreviewEmail: s, onSelectStep: o, newStepId: l, selectedStepId: u }) => {
  const f = LS(t), d = {
    draggable: !1,
    selectable: !1,
    connectable: !1,
    focusable: !1
  }, c = n ? DS : void 0, v = {
    sourceId: f[f.length - 1]?.id ?? We,
    targetId: ft
  }, g = [
    {
      id: We,
      type: "trigger",
      position: { x: $a, y: 0 },
      data: {
        contextMenuItems: Ku({
          onSelectStep: o,
          stepId: We
        }),
        icon: dc,
        isNew: !1,
        label: "Trigger",
        value: "Member signs up",
        selected: u === We,
        onSelect: () => o(We)
      },
      ...d
    }
  ];
  f.forEach((w, x) => {
    g.push({
      id: w.id,
      type: "step",
      position: { x: $a, y: Gu * (x + 1) },
      data: {
        ...TS(w),
        contextMenuItems: Ku({
          canDelete: !0,
          canEditEmailBody: w.type === "send_email",
          onDelete: a,
          onEditEmailBody: r,
          onPreviewEmail: s,
          onSelectStep: o,
          stepId: w.id
        }),
        errorMessage: e[w.id],
        isNew: l === w.id,
        selected: u === w.id,
        onSelect: () => o(w.id)
      },
      ...d
    });
  }), g.push({
    id: ft,
    type: "tail",
    position: { x: $a, y: Gu * (f.length + 1) },
    data: { disabled: n, disabledReason: c, onPick: i, anchor: v },
    draggable: !1,
    connectable: !1
  });
  const h = [];
  let y = We;
  return f.forEach((w) => {
    const x = {
      sourceId: y,
      targetId: w.id,
      disabled: n,
      disabledReason: c,
      onPick: i
    };
    h.push({
      id: `e-${y}-${w.id}`,
      source: y,
      target: w.id,
      type: "add-step-edge",
      focusable: !1,
      data: x
    }), y = w.id;
  }), h.push({
    id: `e-${y}-${ft}`,
    source: y,
    target: ft,
    type: "smoothstep",
    focusable: !1,
    style: { stroke: PS }
  }), { nodes: g, edges: h };
}, BS = (e) => ({
  x: Math.round(e / 2 - NS),
  y: RS,
  zoom: 1
}), FS = {
  wait: Vh,
  send_email: jh
}, HS = (e) => !!e && typeof e == "object" && "automationEmailModal" in e && typeof e.automationEmailModal == "boolean", ZS = ({
  actionErrors: e = {},
  automation: t,
  isEmailNavigationBlocked: n = !1,
  isLoading: a,
  isError: r,
  onChange: i,
  onDiscardBlockedEmailNavigation: s,
  onEmailDirtyChange: o,
  onKeepEditingAfterBlockedEmailNavigation: l
}) => {
  const u = ph(), f = gh(), [d, c] = mh(), [m, v] = pe(null), [g, h] = pe("edit"), [y, w] = pe(null), [x, _] = pe(null), b = y?.id ?? null, S = d.get(on), I = HS(u.state) && u.state.automationEmailModal, C = ge((W) => {
    const Q = new URLSearchParams(d);
    Q.delete(on), c(Q, { replace: W?.replace ?? !0 });
  }, [d, c]), R = ge((W, Q) => {
    if (!t || t.actions.length >= Fs)
      return;
    const J = pS(Q), F = FS[W], ee = F({ detail: t, anchor: J }), ue = ee.actions.find((le) => !t.actions.some((G) => G.id === le.id));
    v(ue?.id ?? null), ue && w({ id: ue.id }), i(ee);
  }, [t, i]);
  fe(() => {
    if (!m)
      return;
    const W = window.setTimeout(() => {
      v(null);
    }, $S);
    return () => window.clearTimeout(W);
  }, [m]);
  const O = ge((W) => {
    if (!t)
      return;
    const Q = zh({ detail: t, actionId: W });
    S === W && C(), w(null), _(null), i(Q);
  }, [t, S, i, C]), D = ge((W) => {
    if (!t)
      return;
    const Q = t.actions.find((J) => J.id === W);
    if (Q?.type === "send_email" && !$s(Q.data.email_lexical)) {
      _(Q.id);
      return;
    }
    O(W);
  }, [t, O]), L = ge((W, Q) => {
    t && i(Uh({ detail: t, actionId: W, waitHours: Q }));
  }, [t, i]), H = ge((W, Q) => {
    if (!t)
      return;
    const J = t.actions.find((F) => F.id === W && F.type === "send_email");
    J && i(Hs({ detail: t, actionId: W, emailSubject: Q, emailLexical: J.data.email_lexical }));
  }, [t, i]), E = ge((W, Q = "edit") => {
    h(Q);
    const J = new URLSearchParams(d);
    J.set(on, W), c(J, {
      state: {
        ...u.state && typeof u.state == "object" ? u.state : {},
        automationEmailModal: !0
      }
    });
  }, [u.state, d, c]), N = ge((W, Q = "edit") => {
    w(null), E(W, Q);
  }, [E]), $ = ge((W) => {
    N(W, "preview");
  }, [N]), P = S && t ? t.actions.find((W) => W.id === S && W.type === "send_email") : void 0, B = t && x ? t.actions.find((W) => W.id === x && W.type === "send_email") : void 0, T = oe(BS(window.innerWidth)), q = Ce(() => t ? OS({
    actionErrors: e,
    automation: t,
    disabled: t.actions.length >= Fs,
    onDelete: D,
    onEditEmailBody: N,
    onPick: R,
    onPreviewEmail: $,
    onSelectStep: (W) => w({ id: W }),
    newStepId: m,
    selectedStepId: b
  }) : null, [e, t, N, $, R, D, m, b]), z = ge(() => {
    w(null);
  }, []), Z = () => {
    if (h("edit"), I) {
      f(-1);
      return;
    }
    C();
  }, re = ge(() => {
    h("edit"), C();
  }, [C]);
  fe(() => {
    if (!t || !S)
      return;
    t.actions.some((Q) => Q.id === S && Q.type === "send_email") || C();
  }, [t, S, C]);
  const ne = ge((W, Q) => {
    if (W.stopPropagation(), !t || Q.id === ft || Q.id === We)
      return;
    const J = t.actions.find((F) => F.id === Q.id);
    J?.type === "send_email" && E(J.id);
  }, [t, E]);
  return a ? /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 items-center justify-center bg-surface-page", "data-testid": "automation-canvas-loading", children: /* @__PURE__ */ p.jsx(dt, { size: "lg" }) }) : r || !t || !q ? /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 items-start justify-center bg-surface-page px-4 py-8", children: /* @__PURE__ */ p.jsx(hc, { className: "max-w-md", role: "alert", variant: "destructive", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ p.jsx(kh, { className: "mt-0.5 size-5 text-red" }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("strong", { className: "block", children: "Couldn't load automation" }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Try refreshing the page." })
    ] })
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "relative flex-1 overflow-hidden bg-surface-page", "data-testid": "automation-canvas", children: [
    /* @__PURE__ */ p.jsxs(
      Ry,
      {
        className: "[--xy-background-color:var(--color-grey-50)] [--xy-background-pattern-color:var(--color-grey-500)] [--xy-edge-stroke:var(--color-grey-300)] dark:[--xy-background-color:var(--color-black)] dark:[--xy-background-pattern-color:var(--color-grey-900)] dark:[--xy-edge-stroke:var(--color-grey-800)]",
        defaultViewport: T.current,
        edges: q.edges,
        edgesFocusable: !1,
        edgeTypes: kS,
        nodes: q.nodes,
        nodesConnectable: !1,
        nodesDraggable: !1,
        nodesFocusable: !1,
        nodeTypes: vS,
        proOptions: { hideAttribution: !0 },
        zoomOnDoubleClick: !1,
        zoomOnScroll: !1,
        panOnScroll: !0,
        onNodeClick: (W, Q) => {
          W.button === 0 && Q.id !== ft && w({ id: Q.id });
        },
        onNodeDoubleClick: ne,
        onPaneClick: z,
        children: [
          /* @__PURE__ */ p.jsx(Fy, { variant: Ke.Dots }),
          /* @__PURE__ */ p.jsx(hS, {})
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(
      IS,
      {
        automation: t,
        isEmailModalOpen: !!P || !!B,
        stepId: b,
        onClose: z,
        onDelete: D,
        onEditEmail: E,
        onUpdateSubject: H,
        onUpdateWait: L
      }
    ),
    P && t && /* @__PURE__ */ p.jsx(
      cS,
      {
        automationId: t.id,
        initialLexical: P.data.email_lexical,
        initialMode: g,
        initialSubject: P.data.email_subject,
        isDiscardNavigationBlocked: n,
        onClose: Z,
        onDirtyChange: o,
        onDiscardBlockedNavigation: () => s?.(re),
        onKeepEditingAfterBlockedNavigation: l,
        onSave: ({ subject: W, lexical: Q }) => {
          i(Hs({ detail: t, actionId: P.id, emailSubject: W, emailLexical: Q }));
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pt,
      {
        open: !!B,
        onOpenChange: (W) => {
          W || _(null);
        },
        children: /* @__PURE__ */ p.jsxs(kt, { children: [
          /* @__PURE__ */ p.jsxs(Tt, { children: [
            /* @__PURE__ */ p.jsx(Lt, { children: "Delete this email?" }),
            /* @__PURE__ */ p.jsx(Ot, { children: "This email will be removed from the automation. Save or publish the automation to apply this change." })
          ] }),
          /* @__PURE__ */ p.jsxs(Bt, { children: [
            /* @__PURE__ */ p.jsx(Ft, { children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                variant: "destructive",
                onClick: () => {
                  B && O(B.id);
                },
                children: "Delete email"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, qS = ({
  automation: e,
  isLoadingAutomation: t,
  isSaveButtonEnabled: n,
  isPublishButtonEnabled: a,
  saveButtonVariant: r,
  publishButtonVariant: i,
  isTurnOffButtonEnabled: s,
  saveButtonChildren: o,
  publishButtonChildren: l,
  onSave: u,
  onPublish: f,
  onTurnOff: d
}) => {
  const c = e?.name, m = e?.status;
  return /* @__PURE__ */ p.jsxs("header", { className: "relative z-10 flex h-14 shrink-0 items-center justify-between bg-background px-4 shadow-sm dark:border-b dark:border-gray-950", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
      /* @__PURE__ */ p.jsx(Ee, { variant: "ghost", asChild: !0, children: /* @__PURE__ */ p.jsx(vh, { "aria-label": "Back to automations", to: "/automations", children: /* @__PURE__ */ p.jsx(Eh, { strokeWidth: 2 }) }) }),
      t ? /* @__PURE__ */ p.jsx(Ap, { className: "h-5 w-40" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx("span", { className: "truncate text-lg font-semibold", children: c }),
        m && /* @__PURE__ */ p.jsx(Wh, { status: m })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
      m === "active" && /* @__PURE__ */ p.jsxs(
        Ee,
        {
          disabled: !s,
          variant: "outline",
          onClick: d,
          children: [
            /* @__PURE__ */ p.jsx(bh, {}),
            "Turn off"
          ]
        }
      ),
      m === "inactive" && /* @__PURE__ */ p.jsx(
        Ee,
        {
          disabled: !n,
          variant: r,
          onClick: u,
          children: o
        }
      ),
      /* @__PURE__ */ p.jsx(
        Ee,
        {
          disabled: !a,
          variant: i,
          onClick: f,
          children: l
        }
      )
    ] })
  ] });
};
var Yu = Object.prototype.hasOwnProperty;
function Xu(e, t, n) {
  for (n of e.keys())
    if (ln(n, t)) return n;
}
function ln(e, t) {
  var n, a, r;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((a = e.length) === t.length)
        for (; a-- && ln(e[a], t[a]); ) ;
      return a === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (a of e)
        if (r = a, r && typeof r == "object" && (r = Xu(t, r), !r) || !t.has(r)) return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (a of e)
        if (r = a[0], r && typeof r == "object" && (r = Xu(t, r), !r) || !ln(a[1], t.get(r)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((a = e.byteLength) === t.byteLength)
        for (; a-- && e.getInt8(a) === t.getInt8(a); ) ;
      return a === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((a = e.byteLength) === t.byteLength)
        for (; a-- && e[a] === t[a]; ) ;
      return a === -1;
    }
    if (!n || typeof e == "object") {
      a = 0;
      for (n in e)
        if (Yu.call(e, n) && ++a && !Yu.call(t, n) || !(n in t) || !ln(e[n], t[n])) return !1;
      return Object.keys(t).length === a;
    }
  }
  return e !== e && t !== t;
}
const zS = "Add a subject line.", US = "Add an email body.", jS = "Add a subject line and email body.", Ju = (e) => ({
  status: e.status,
  actions: e.actions,
  edges: e.edges
}), VS = (e) => e.phase === "failed", Vi = (e) => {
  const t = {};
  for (const n of e.actions) {
    if (n.type !== "send_email")
      continue;
    const a = !n.data.email_subject.trim(), r = $s(n.data.email_lexical);
    a && r ? t[n.id] = jS : a ? t[n.id] = zS : r && (t[n.id] = US);
  }
  return t;
}, vb = () => {
  const { id: e = "" } = xh(), { data: t, isLoading: n, isError: a } = Gh(e, {
    defaultErrorHandler: !1
  }), r = t?.automations[0], i = Kh(), [s, o] = Ne.useState({ phase: "idle" }), [l, u] = Ne.useState({}), [f, d] = Ne.useState(!1), c = Ne.useRef(!1), m = Ne.useRef(null), v = Ne.useRef(!1), [g, h] = Ne.useState(void 0);
  Ne.useEffect(() => {
    r && h((G) => G?.id === r.id ? G : r);
  }, [r]);
  const y = !!g && !!r && !ln(Ju(g), Ju(r)), w = (G) => {
    h(G), u((j) => {
      if (Object.keys(j).length === 0)
        return j;
      const ae = Vi(G);
      return Object.fromEntries(
        Object.entries(j).filter(([te]) => ae[te])
      );
    }), o((j) => VS(j) ? { phase: "idle" } : j);
  }, x = (G, j) => {
    const ae = Vi(G);
    return Object.keys(ae).length > 0 ? (u(ae), o(j), Di.error("Automation needs a few details", {
      description: "Fix the highlighted steps and try again."
    }), !1) : !0;
  }, _ = (G) => {
    if (!g)
      throw new Error("Cannot edit an automation that has not loaded.");
    let j, ae;
    const te = g.status, de = G ?? te, be = `${te} -> ${de}`;
    switch (be) {
      case "active -> active":
        j = { phase: "submitting", action: "republish" }, ae = { phase: "failed", action: "republish" };
        break;
      case "inactive -> inactive":
        j = { phase: "submitting", action: "save" }, ae = { phase: "failed", action: "save" };
        break;
      case "inactive -> active":
        j = { phase: "submitting", action: "publish" }, ae = { phase: "failed", action: "publish" };
        break;
      case "active -> inactive":
        j = { phase: "submitting", action: "unpublish" }, ae = { phase: "failed", action: "unpublish" };
        break;
      default: {
        const A = be;
        throw new Error(`Unhandled status transition: ${A}`);
      }
    }
    de === "active" && !x(g, ae) || (o(j), i.mutate(
      {
        id: g.id,
        status: de,
        actions: g.actions,
        edges: g.edges
      },
      {
        onSuccess: (A) => {
          h(A.automations[0]), u({}), o({ phase: "idle" });
        },
        onError: (A) => {
          const M = de === "active" ? Vi(g) : {}, k = Object.keys(M).length > 0;
          k && u(M), o(ae), k ? Di.error("Automation needs a few details", {
            description: "Fix the highlighted steps and try again."
          }) : Di.error("Automation couldn’t be saved");
        }
      }
    ));
  }, b = s.action === "publish", S = s.action === "unpublish", I = s.action === "republish", C = s.phase === "submitting";
  let R = !!g && g.actions.length > 0 && g.status === "inactive" && y, O = "outline", D = "Save", L = !!g && g.actions.length > 0 && (g.status === "inactive" || y);
  const H = "default", E = g?.status === "active" ? y ? "Publish changes" : "Published" : "Publish";
  let N = !0, $ = "Turn off", P = !0, B = "default", T = "Publish", q = !0, z = "default", Z = "Publish changes";
  switch (s.phase) {
    case "idle":
      break;
    case "submitting":
      switch (R = !1, L = !1, N = !1, s.action) {
        case "save":
          D = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Saving..." })
          ] });
          break;
        case "publish":
          P = !1, T = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { color: "light", size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Publishing..." })
          ] });
          break;
        case "republish":
          q = !1, Z = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { color: "light", size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Publishing..." })
          ] });
          break;
        case "unpublish":
          $ = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { color: "light", size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Turning off..." })
          ] });
          break;
      }
      break;
    case "confirming":
      switch (s.action) {
        case "publish":
          R = !1, L = !1;
          break;
        case "republish":
          L = !1, N = !1;
          break;
        case "unpublish":
          R = !1, L = !1, N = !1;
          break;
      }
      break;
    case "failed":
      switch (s.action) {
        case "save":
          O = "destructive", D = "Retry";
          break;
        case "publish":
          R = !1, L = !1, B = "destructive", T = "Retry";
          break;
        case "republish":
          L = !1, N = !1, z = "destructive", Z = "Retry";
          break;
        case "unpublish":
          N = !0, $ = "Retry";
          break;
      }
      break;
    default: {
      const G = s;
      throw new Error(`Unhandled edit state: ${G}`);
    }
  }
  const re = (G) => {
    o((j) => {
      switch (j.phase) {
        case "confirming":
        case "failed":
          return j.action === "unpublish" && !G ? { phase: "idle" } : j;
        case "idle":
          return G ? { phase: "confirming", action: "unpublish" } : j;
        default:
          return j;
      }
    });
  }, ne = (G) => {
    o((j) => {
      switch (j.phase) {
        case "confirming":
        case "failed":
          return j.action === "publish" && !G ? { phase: "idle" } : j;
        case "idle":
          return G ? { phase: "confirming", action: "publish" } : j;
        default:
          return j;
      }
    });
  }, W = (G) => {
    o((j) => {
      switch (j.phase) {
        case "confirming":
        case "failed":
          return j.action === "republish" && !G ? { phase: "idle" } : j;
        case "idle":
          return G ? { phase: "confirming", action: "republish" } : j;
        default:
          return j;
      }
    });
  }, Q = () => {
    if (!g)
      throw new Error("Cannot publish an automation that has not loaded.");
    switch (g.status) {
      case "active":
        if (!x(g, { phase: "idle" }))
          return;
        o({ phase: "confirming", action: "republish" });
        break;
      case "inactive":
        if (!x(g, { phase: "idle" }))
          return;
        o({ phase: "confirming", action: "publish" });
        break;
      default: {
        const G = g.status;
        throw new Error(`Unhandled status: ${G}`);
      }
    }
  };
  Cp(C || y || f);
  const J = yh(({ currentLocation: G, nextLocation: j }) => {
    const ae = new URLSearchParams(G.search).get(on), te = new URLSearchParams(j.search).get(on);
    return c.current && ae && ae !== te ? (m.current = "email", v.current = G.pathname !== j.pathname, !0) : y && G.pathname !== j.pathname ? (m.current = "automation", v.current = !1, !0) : (m.current = null, v.current = !1, !1);
  }), F = J.state === "blocked" && m.current === "email", ee = J.state === "blocked" && m.current === "automation", ue = (G) => {
    !G && ee && J.reset();
  }, le = Ne.useCallback((G) => {
    c.current = G, d(G);
  }, []);
  return /* @__PURE__ */ p.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col bg-background", "data-testid": "automation-editor", children: [
    /* @__PURE__ */ p.jsx(
      qS,
      {
        automation: g,
        isLoadingAutomation: n,
        isPublishButtonEnabled: L,
        isSaveButtonEnabled: R,
        isTurnOffButtonEnabled: N,
        publishButtonChildren: E,
        publishButtonVariant: H,
        saveButtonChildren: D,
        saveButtonVariant: O,
        onPublish: Q,
        onSave: () => _(),
        onTurnOff: () => o({ phase: "confirming", action: "unpublish" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      ZS,
      {
        actionErrors: l,
        automation: g,
        isEmailNavigationBlocked: F,
        isError: a,
        isLoading: n,
        onChange: w,
        onDiscardBlockedEmailNavigation: (G) => {
          if (le(!1), v.current) {
            v.current = !1, J.reset?.(), G();
            return;
          }
          v.current = !1, J.proceed?.();
        },
        onEmailDirtyChange: le,
        onKeepEditingAfterBlockedEmailNavigation: () => {
          v.current = !1, J.reset?.();
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pt,
      {
        open: ee,
        onOpenChange: ue,
        children: /* @__PURE__ */ p.jsxs(kt, { children: [
          /* @__PURE__ */ p.jsxs(Tt, { children: [
            /* @__PURE__ */ p.jsx(Lt, { children: "Discard unsaved changes?" }),
            /* @__PURE__ */ p.jsx(Ot, { children: "Your changes will be lost if you leave this automation." })
          ] }),
          /* @__PURE__ */ p.jsxs(Bt, { children: [
            /* @__PURE__ */ p.jsx(Ft, { children: "Keep working" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                variant: "destructive",
                onClick: () => J.proceed?.(),
                children: "Discard changes"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pt,
      {
        open: b,
        onOpenChange: ne,
        children: /* @__PURE__ */ p.jsxs(kt, { children: [
          /* @__PURE__ */ p.jsxs(Tt, { children: [
            /* @__PURE__ */ p.jsx(Lt, { children: "Start your automation?" }),
            /* @__PURE__ */ p.jsx(Ot, { children: "Once published, your automation goes live. Any member who meets the trigger will be enrolled automatically." })
          ] }),
          /* @__PURE__ */ p.jsxs(Bt, { children: [
            /* @__PURE__ */ p.jsx(Ft, { disabled: C, children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                disabled: !P,
                variant: B,
                onClick: () => _("active"),
                children: T
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pt,
      {
        open: S,
        onOpenChange: re,
        children: /* @__PURE__ */ p.jsxs(kt, { children: [
          /* @__PURE__ */ p.jsxs(Tt, { children: [
            /* @__PURE__ */ p.jsx(Lt, { children: "Turn off automation?" }),
            /* @__PURE__ */ p.jsx(Ot, { children: "Your automation will no longer run, and any members currently in progress will be removed." })
          ] }),
          /* @__PURE__ */ p.jsxs(Bt, { children: [
            /* @__PURE__ */ p.jsx(Ft, { disabled: C, children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                disabled: C,
                variant: s.phase === "failed" && s.action === "unpublish" ? "destructive" : "default",
                onClick: () => _("inactive"),
                children: $
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pt,
      {
        open: I,
        onOpenChange: W,
        children: /* @__PURE__ */ p.jsxs(kt, { children: [
          /* @__PURE__ */ p.jsxs(Tt, { children: [
            /* @__PURE__ */ p.jsx(Lt, { children: "Update your automation?" }),
            /* @__PURE__ */ p.jsx(Ot, { children: "Once published, your changes apply immediately to members already in progress and to any new members who enter the automation." })
          ] }),
          /* @__PURE__ */ p.jsxs(Bt, { children: [
            /* @__PURE__ */ p.jsx(Ft, { disabled: C, children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                disabled: !q,
                variant: z,
                onClick: () => _(),
                children: Z
              }
            )
          ] })
        ] })
      }
    )
  ] });
};
export {
  vb as default
};
//# sourceMappingURL=editor-3HPW_xW4.js.map
