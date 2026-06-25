import { h as Y, n as Z, p as h, m as y, b as D, d as m, a as _, P as J, g as Q, l as ee, R as te, o as oe, F as ae, D as ne, i as se, f as re } from "./check-fsC5BvGC.js";
import { ak as g, R as s, a6 as ie, x as i, C as le, a9 as P, S as ce, i as p } from "./index-Dqn5WIFh.js";
const de = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ae = Y("x", de);
var v = "Dialog", [O, Te] = Q(v), [ue, d] = O(v), R = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: r,
    defaultOpen: n,
    onOpenChange: a,
    modal: c = !0
  } = e, l = g(null), f = g(null), [N, C] = Z({
    prop: r,
    defaultProp: n ?? !1,
    onChange: a,
    caller: v
  });
  return /* @__PURE__ */ s.jsx(
    ue,
    {
      scope: t,
      triggerRef: l,
      contentRef: f,
      contentId: h(),
      titleId: h(),
      descriptionId: h(),
      open: N,
      onOpenChange: C,
      onOpenToggle: ie(() => C((X) => !X), [C]),
      modal: c,
      children: o
    }
  );
};
R.displayName = v;
var I = "DialogTrigger", A = i(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = d(I, o), a = y(t, n.triggerRef);
    return /* @__PURE__ */ s.jsx(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": n.open,
        "aria-controls": n.open ? n.contentId : void 0,
        "data-state": j(n.open),
        ...r,
        ref: a,
        onClick: m(e.onClick, n.onOpenToggle)
      }
    );
  }
);
A.displayName = I;
var b = "DialogPortal", [ge, T] = O(b, {
  forceMount: void 0
}), M = (e) => {
  const { __scopeDialog: t, forceMount: o, children: r, container: n } = e, a = d(b, t);
  return /* @__PURE__ */ s.jsx(ge, { scope: t, forceMount: o, children: le.map(r, (c) => /* @__PURE__ */ s.jsx(_, { present: o || a.open, children: /* @__PURE__ */ s.jsx(J, { asChild: !0, container: n, children: c }) })) });
};
M.displayName = b;
var x = "DialogOverlay", S = i(
  (e, t) => {
    const o = T(x, e.__scopeDialog), { forceMount: r = o.forceMount, ...n } = e, a = d(x, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ s.jsx(_, { present: r || a.open, children: /* @__PURE__ */ s.jsx(fe, { ...n, ref: t }) }) : null;
  }
);
S.displayName = x;
var pe = se("DialogOverlay.RemoveScroll"), fe = i(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = d(x, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s.jsx(te, { as: pe, allowPinchZoom: !0, shards: [n.contentRef], children: /* @__PURE__ */ s.jsx(
        D.div,
        {
          "data-state": j(n.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), u = "DialogContent", F = i(
  (e, t) => {
    const o = T(u, e.__scopeDialog), { forceMount: r = o.forceMount, ...n } = e, a = d(u, e.__scopeDialog);
    return /* @__PURE__ */ s.jsx(_, { present: r || a.open, children: a.modal ? /* @__PURE__ */ s.jsx(me, { ...n, ref: t }) : /* @__PURE__ */ s.jsx(De, { ...n, ref: t }) });
  }
);
F.displayName = u;
var me = i(
  (e, t) => {
    const o = d(u, e.__scopeDialog), r = g(null), n = y(t, o.contentRef, r);
    return P(() => {
      const a = r.current;
      if (a) return ee(a);
    }, []), /* @__PURE__ */ s.jsx(
      k,
      {
        ...e,
        ref: n,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: m(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), o.triggerRef.current?.focus();
        }),
        onPointerDownOutside: m(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && a.preventDefault();
        }),
        onFocusOutside: m(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), De = i(
  (e, t) => {
    const o = d(u, e.__scopeDialog), r = g(!1), n = g(!1);
    return /* @__PURE__ */ s.jsx(
      k,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || o.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, n.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (n.current = !0));
          const c = a.target;
          o.triggerRef.current?.contains(c) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && n.current && a.preventDefault();
        }
      }
    );
  }
), k = i(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: n, onCloseAutoFocus: a, ...c } = e, l = d(u, o), f = g(null), N = y(t, f);
    return oe(), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        ae,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: n,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ s.jsx(
            ne,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": j(l.open),
              ...c,
              ref: N,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(xe, { titleId: l.titleId }),
        /* @__PURE__ */ s.jsx(Ne, { contentRef: f, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), E = "DialogTitle", w = i(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = d(E, o);
    return /* @__PURE__ */ s.jsx(D.h2, { id: n.titleId, ...r, ref: t });
  }
);
w.displayName = E;
var W = "DialogDescription", $ = i(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = d(W, o);
    return /* @__PURE__ */ s.jsx(D.p, { id: n.descriptionId, ...r, ref: t });
  }
);
$.displayName = W;
var L = "DialogClose", G = i(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = d(L, o);
    return /* @__PURE__ */ s.jsx(
      D.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: m(e.onClick, () => n.onOpenChange(!1))
      }
    );
  }
);
G.displayName = L;
function j(e) {
  return e ? "open" : "closed";
}
var H = "DialogTitleWarning", [Me, z] = re(H, {
  contentName: u,
  titleName: E,
  docsSlug: "dialog"
}), xe = ({ titleId: e }) => {
  const t = z(H), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return P(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, ve = "DialogDescriptionWarning", Ne = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${z(ve).contentName}}.`;
  return P(() => {
    const n = e.current?.getAttribute("aria-describedby");
    t && n && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ce = R, he = A, ye = M, B = S, V = F, q = w, K = $, Se = G;
const Fe = Ce, ke = he, _e = ye, U = i(({ className: e, ...t }, o) => /* @__PURE__ */ s.jsx(
  B,
  {
    ref: o,
    className: p(
      "fixed inset-0 z-50 bg-black/30 dark:bg-white/8 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...t
  }
));
U.displayName = B.displayName;
const Pe = i(({ className: e, children: t, ...o }, r) => /* @__PURE__ */ s.jsx(_e, { children: /* @__PURE__ */ s.jsxs("div", { className: ce, children: [
  /* @__PURE__ */ s.jsx(U, {}),
  /* @__PURE__ */ s.jsx(
    V,
    {
      ref: r,
      className: p(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-popover p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg outline-hidden",
        e
      ),
      ...o,
      children: t
    }
  )
] }) }));
Pe.displayName = V.displayName;
const be = ({
  className: e,
  ...t
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: p(
      "flex flex-col gap-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
be.displayName = "DialogHeader";
const Ee = ({
  className: e,
  ...t
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: p(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 sm:items-end [&_button]:min-w-20",
      e
    ),
    ...t
  }
);
Ee.displayName = "DialogFooter";
const je = i(({ className: e, ...t }, o) => /* @__PURE__ */ s.jsx(
  q,
  {
    ref: o,
    className: p(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
je.displayName = q.displayName;
const Oe = i(({ className: e, ...t }, o) => /* @__PURE__ */ s.jsx(
  K,
  {
    ref: o,
    className: p("text-sm text-muted-foreground", e),
    ...t
  }
));
Oe.displayName = K.displayName;
export {
  Se as C,
  K as D,
  B as O,
  ye as P,
  Ce as R,
  q as T,
  Me as W,
  Ae as X,
  V as a,
  Fe as b,
  Pe as c,
  Oe as d,
  Ee as e,
  be as f,
  je as g,
  ke as h,
  he as i,
  Te as j
};
//# sourceMappingURL=dialog-3KY3A8t5.js.map
