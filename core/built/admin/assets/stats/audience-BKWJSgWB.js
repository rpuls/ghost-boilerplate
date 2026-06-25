import { a3 as g, J as s, Q as Y, B as u, C as q, W as y, A as R, b as v, a as _ } from "./index-GkZC6bm6.js";
import { bC as J, bF as E, bB as P, am as D, a_ as f, al as b, ak as K, b1 as Z, bl as z, an as X, bE as ee, V as te, L as oe, b4 as ne, b0 as re } from "./stats-BfDVnooj.js";
var C = "Dialog", [O] = Z(C), [ae, l] = O(C), T = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: a,
    defaultOpen: r,
    onOpenChange: n,
    modal: c = !0
  } = e, i = g(null), p = g(null), [x, h] = J({
    prop: a,
    defaultProp: r ?? !1,
    onChange: n,
    caller: C
  });
  return /* @__PURE__ */ s.jsx(
    ae,
    {
      scope: t,
      triggerRef: i,
      contentRef: p,
      contentId: E(),
      titleId: E(),
      descriptionId: E(),
      open: x,
      onOpenChange: h,
      onOpenToggle: Y(() => h((Q) => !Q), [h]),
      modal: c,
      children: o
    }
  );
};
T.displayName = C;
var j = "DialogTrigger", F = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(j, o), n = P(t, r.triggerRef);
    return /* @__PURE__ */ s.jsx(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.open ? r.contentId : void 0,
        "data-state": I(r.open),
        ...a,
        ref: n,
        onClick: f(e.onClick, r.onOpenToggle)
      }
    );
  }
);
F.displayName = j;
var A = "DialogPortal", [se, M] = O(A, {
  forceMount: void 0
}), S = (e) => {
  const { __scopeDialog: t, forceMount: o, children: a, container: r } = e, n = l(A, t);
  return /* @__PURE__ */ s.jsx(se, { scope: t, forceMount: o, children: q.map(a, (c) => /* @__PURE__ */ s.jsx(b, { present: o || n.open, children: /* @__PURE__ */ s.jsx(K, { asChild: !0, container: r, children: c }) })) });
};
S.displayName = A;
var m = "DialogOverlay", W = u(
  (e, t) => {
    const o = M(m, e.__scopeDialog), { forceMount: a = o.forceMount, ...r } = e, n = l(m, e.__scopeDialog);
    return n.modal ? /* @__PURE__ */ s.jsx(b, { present: a || n.open, children: /* @__PURE__ */ s.jsx(ce, { ...r, ref: t }) }) : null;
  }
);
W.displayName = m;
var ie = ne("DialogOverlay.RemoveScroll"), ce = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(m, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s.jsx(X, { as: ie, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ s.jsx(
        D.div,
        {
          "data-state": I(r.open),
          ...a,
          ref: t,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), d = "DialogContent", $ = u(
  (e, t) => {
    const o = M(d, e.__scopeDialog), { forceMount: a = o.forceMount, ...r } = e, n = l(d, e.__scopeDialog);
    return /* @__PURE__ */ s.jsx(b, { present: a || n.open, children: n.modal ? /* @__PURE__ */ s.jsx(le, { ...r, ref: t }) : /* @__PURE__ */ s.jsx(ue, { ...r, ref: t }) });
  }
);
$.displayName = d;
var le = u(
  (e, t) => {
    const o = l(d, e.__scopeDialog), a = g(null), r = P(t, o.contentRef, a);
    return y(() => {
      const n = a.current;
      if (n) return z(n);
    }, []), /* @__PURE__ */ s.jsx(
      w,
      {
        ...e,
        ref: r,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: f(e.onCloseAutoFocus, (n) => {
          n.preventDefault(), o.triggerRef.current?.focus();
        }),
        onPointerDownOutside: f(e.onPointerDownOutside, (n) => {
          const c = n.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && n.preventDefault();
        }),
        onFocusOutside: f(
          e.onFocusOutside,
          (n) => n.preventDefault()
        )
      }
    );
  }
), ue = u(
  (e, t) => {
    const o = l(d, e.__scopeDialog), a = g(!1), r = g(!1);
    return /* @__PURE__ */ s.jsx(
      w,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (n) => {
          e.onCloseAutoFocus?.(n), n.defaultPrevented || (a.current || o.triggerRef.current?.focus(), n.preventDefault()), a.current = !1, r.current = !1;
        },
        onInteractOutside: (n) => {
          e.onInteractOutside?.(n), n.defaultPrevented || (a.current = !0, n.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const c = n.target;
          o.triggerRef.current?.contains(c) && n.preventDefault(), n.detail.originalEvent.type === "focusin" && r.current && n.preventDefault();
        }
      }
    );
  }
), w = u(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: n, ...c } = e, i = l(d, o), p = g(null), x = P(t, p);
    return ee(), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        te,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: n,
          children: /* @__PURE__ */ s.jsx(
            oe,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": I(i.open),
              ...c,
              ref: x,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(de, { titleId: i.titleId }),
        /* @__PURE__ */ s.jsx(pe, { contentRef: p, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), N = "DialogTitle", L = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(N, o);
    return /* @__PURE__ */ s.jsx(D.h2, { id: r.titleId, ...a, ref: t });
  }
);
L.displayName = N;
var k = "DialogDescription", G = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(k, o);
    return /* @__PURE__ */ s.jsx(D.p, { id: r.descriptionId, ...a, ref: t });
  }
);
G.displayName = k;
var B = "DialogClose", U = u(
  (e, t) => {
    const { __scopeDialog: o, ...a } = e, r = l(B, o);
    return /* @__PURE__ */ s.jsx(
      D.button,
      {
        type: "button",
        ...a,
        ref: t,
        onClick: f(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
U.displayName = B;
function I(e) {
  return e ? "open" : "closed";
}
var H = "DialogTitleWarning", [me, V] = re(H, {
  contentName: d,
  titleName: N,
  docsSlug: "dialog"
}), de = ({ titleId: e }) => {
  const t = V(H), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return y(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, ge = "DialogDescriptionWarning", pe = ({ contentRef: e, descriptionId: t }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${V(ge).contentName}}.`;
  return y(() => {
    const r = e.current?.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(a));
  }, [a, e, t]), null;
}, Ce = T, xe = F, he = S, _e = W, Ee = $, ye = L, Pe = G, be = U;
function fe(e, t) {
  if (!e || !t)
    return "";
  try {
    const o = new URL(t), a = o.pathname.endsWith("/") ? o.pathname : `${o.pathname}/`, r = e.replace(/^\//, ""), n = `${a}${r}`;
    return `${o.origin}${n}`;
  } catch {
    return "";
  }
}
function Ae(e, t, o, a, r) {
  return () => {
    if (t && e && r === "post") {
      a(`/posts/analytics/${t}`, { crossApp: !0 });
      return;
    }
    if (e && o) {
      const n = fe(e, o);
      n && window.open(n, "_blank", "noopener,noreferrer");
    }
  };
}
const Ne = ({ postId: e, hasEmailData: t, analytics: o }) => e ? !o?.webAnalytics && !o?.membersTrackSources && !t ? `/editor/post/${e}` : `/posts/analytics/${e}` : "/posts/analytics", Ie = (e) => !e || e.length === 0 ? R : v.filter((t) => e.includes(t.value)).reduce((t, o) => t | o.bit, 0) || R, Re = (e) => {
  const t = [];
  return (e & _.PUBLIC) !== 0 && t.push(v[0].value), (e & _.FREE) !== 0 && t.push(v[1].value), (e & _.PAID) !== 0 && t.push(v[2].value), t.join(",");
};
export {
  be as C,
  Pe as D,
  _e as O,
  he as P,
  Ce as R,
  ye as T,
  Ee as a,
  xe as b,
  Re as c,
  Ae as d,
  Ne as e,
  Ie as g
};
//# sourceMappingURL=audience-BKWJSgWB.js.map
