import { f as u, n as p, j as s, p as Q, C as Z, o as P, A as y, Q as m, T as _ } from "./index-LBcSX-Bd.mjs";
import { W as q, Y as z, a2 as E, V as A, Z as v, _ as D, a5 as N, a6 as K, ac as J, ad as X, ae as ee, af as te, ag as oe, a7 as ne, bz as re } from "./stats-CYKBl8ke.mjs";
var x = "Dialog", [b] = z(x), [ae, l] = b(x), T = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: a,
    defaultOpen: r,
    onOpenChange: n,
    modal: i = !0
  } = e, c = p(null), d = p(null), [f, h] = q({
    prop: a,
    defaultProp: r ?? !1,
    onChange: n,
    caller: x
  });
  return /* @__PURE__ */ s.jsx(
    ae,
    {
      scope: t,
      triggerRef: c,
      contentRef: d,
      contentId: E(),
      titleId: E(),
      descriptionId: E(),
      open: f,
      onOpenChange: h,
      onOpenToggle: Q(() => h((Y) => !Y), [h]),
      modal: i,
      children: o
    }
  );
};
T.displayName = x;
var j = "DialogTrigger", F = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(j, o), n = A(t, r.triggerRef);
    return /* @__PURE__ */ s.jsx(
      v.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": O(r.open),
        ...a,
        ref: n,
        onClick: D(e.onClick, r.onOpenToggle)
      }
    );
  }
);
F.displayName = j;
var I = "DialogPortal", [se, M] = b(I, {
  forceMount: void 0
}), S = (e) => {
  const { __scopeDialog: t, forceMount: o, children: a, container: r } = e, n = l(I, t);
  return /* @__PURE__ */ s.jsx(se, { scope: t, forceMount: o, children: Z.map(a, (i) => /* @__PURE__ */ s.jsx(N, { present: o || n.open, children: /* @__PURE__ */ s.jsx(K, { asChild: !0, container: r, children: i }) })) });
};
S.displayName = I;
var C = "DialogOverlay", W = u(
  (e, t) => {
    const o = M(C, e.__scopeDialog), { forceMount: a = o.forceMount, ...r } = e, n = l(C, e.__scopeDialog);
    return n.modal ? /* @__PURE__ */ s.jsx(N, { present: a || n.open, children: /* @__PURE__ */ s.jsx(ce, { ...r, ref: t }) }) : null;
  }
);
W.displayName = C;
var ie = ee("DialogOverlay.RemoveScroll"), ce = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(C, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s.jsx(X, { as: ie, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ s.jsx(
        v.div,
        {
          "data-state": O(r.open),
          ...a,
          ref: t,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), g = "DialogContent", $ = u(
  (e, t) => {
    const o = M(g, e.__scopeDialog), { forceMount: a = o.forceMount, ...r } = e, n = l(g, e.__scopeDialog);
    return /* @__PURE__ */ s.jsx(N, { present: a || n.open, children: n.modal ? /* @__PURE__ */ s.jsx(le, { ...r, ref: t }) : /* @__PURE__ */ s.jsx(ue, { ...r, ref: t }) });
  }
);
$.displayName = g;
var le = u(
  (e, t) => {
    const o = l(g, e.__scopeDialog), a = p(null), r = A(t, o.contentRef, a);
    return P(() => {
      const n = a.current;
      if (n) return J(n);
    }, []), /* @__PURE__ */ s.jsx(
      w,
      {
        ...e,
        ref: r,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (n) => {
          var i;
          n.preventDefault(), (i = o.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: D(e.onPointerDownOutside, (n) => {
          const i = n.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || c) && n.preventDefault();
        }),
        onFocusOutside: D(
          e.onFocusOutside,
          (n) => n.preventDefault()
        )
      }
    );
  }
), ue = u(
  (e, t) => {
    const o = l(g, e.__scopeDialog), a = p(!1), r = p(!1);
    return /* @__PURE__ */ s.jsx(
      w,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (n) => {
          var i, c;
          (i = e.onCloseAutoFocus) == null || i.call(e, n), n.defaultPrevented || (a.current || (c = o.triggerRef.current) == null || c.focus(), n.preventDefault()), a.current = !1, r.current = !1;
        },
        onInteractOutside: (n) => {
          var d, f;
          (d = e.onInteractOutside) == null || d.call(e, n), n.defaultPrevented || (a.current = !0, n.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const i = n.target;
          ((f = o.triggerRef.current) == null ? void 0 : f.contains(i)) && n.preventDefault(), n.detail.originalEvent.type === "focusin" && r.current && n.preventDefault();
        }
      }
    );
  }
), w = u(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: n, ...i } = e, c = l(g, o), d = p(null), f = A(t, d);
    return te(), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        oe,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: n,
          children: /* @__PURE__ */ s.jsx(
            ne,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": O(c.open),
              ...i,
              ref: f,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(de, { titleId: c.titleId }),
        /* @__PURE__ */ s.jsx(fe, { contentRef: d, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), R = "DialogTitle", L = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(R, o);
    return /* @__PURE__ */ s.jsx(v.h2, { id: r.titleId, ...a, ref: t });
  }
);
L.displayName = R;
var k = "DialogDescription", G = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(k, o);
    return /* @__PURE__ */ s.jsx(v.p, { id: r.descriptionId, ...a, ref: t });
  }
);
G.displayName = k;
var B = "DialogClose", U = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(B, o);
    return /* @__PURE__ */ s.jsx(
      v.button,
      {
        type: "button",
        ...a,
        ref: t,
        onClick: D(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
U.displayName = B;
function O(e) {
  return e ? "open" : "closed";
}
var H = "DialogTitleWarning", [me, V] = re(H, {
  contentName: g,
  titleName: R,
  docsSlug: "dialog"
}), de = ({ titleId: e }) => {
  const t = V(H), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return P(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, ge = "DialogDescriptionWarning", fe = ({ contentRef: e, descriptionId: t }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${V(ge).contentName}}.`;
  return P(() => {
    var n;
    const r = (n = e.current) == null ? void 0 : n.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(a));
  }, [a, e, t]), null;
}, Ce = T, xe = F, he = S, _e = W, Ee = $, Pe = L, Ae = G, Ne = U;
function pe(e, t) {
  if (!e || !t)
    return "";
  try {
    const o = new URL(t), a = o.pathname.endsWith("/") ? o.pathname : `${o.pathname}/`, r = e.replace(/^\//, ""), n = `${a}${r}`;
    return `${o.origin}${n}`;
  } catch {
    return "";
  }
}
function Ie(e, t, o, a, r) {
  return () => {
    if (t && e && r === "post") {
      a(`/posts/analytics/${t}`, { crossApp: !0 });
      return;
    }
    if (e && o) {
      const n = pe(e, o);
      n && window.open(n, "_blank", "noopener,noreferrer");
    }
  };
}
const Re = ({ postId: e, hasEmailData: t, analytics: o }) => e ? !(o != null && o.webAnalytics) && !(o != null && o.membersTrackSources) && !t ? `/editor/post/${e}` : `/posts/analytics/${e}` : "/posts/analytics", Oe = (e) => !e || e.length === 0 ? y : m.filter((t) => e.includes(t.value)).reduce((t, o) => t | o.bit, 0) || y, ye = (e) => {
  const t = [];
  return e & _.PUBLIC && t.push(m[0].value), e & _.FREE && t.push(m[1].value), e & _.PAID && t.push(m[2].value), t.join(",");
};
export {
  Ee as C,
  Ae as D,
  _e as O,
  he as P,
  Ce as R,
  xe as T,
  Pe as a,
  ye as b,
  Oe as c,
  Ie as d,
  Ne as e,
  Re as g
};
//# sourceMappingURL=audience-BEeBtpYR.mjs.map
