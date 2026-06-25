import { x as v, R as s, ak as g, am as E, a6 as x, a9 as A, S as G, i as K } from "./index-Dqn5WIFh.js";
import { m as j, b, d as m, n as B, p as U, a as N, P as V, g as W, l as Z, R as q, i as J, o as Q, F as X, D as Y } from "./check-fsC5BvGC.js";
import { A as y, s as ee, B as S, f as oe, b as te } from "./skeleton-Bihnkn8q.js";
var O = "Popover", [F] = W(O, [
  S
]), C = S(), [re, f] = F(O), w = (e) => {
  const {
    __scopePopover: n,
    children: r,
    open: a,
    defaultOpen: o,
    onOpenChange: t,
    modal: c = !1
  } = e, i = C(n), u = g(null), [l, P] = E(!1), [d, p] = B({
    prop: a,
    defaultProp: o ?? !1,
    onChange: t,
    caller: O
  });
  return /* @__PURE__ */ s.jsx(ee, { ...i, children: /* @__PURE__ */ s.jsx(
    re,
    {
      scope: n,
      contentId: U(),
      triggerRef: u,
      open: d,
      onOpenChange: p,
      onOpenToggle: x(() => p((R) => !R), [p]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: x(() => P(!0), []),
      onCustomAnchorRemove: x(() => P(!1), []),
      modal: c,
      children: r
    }
  ) });
};
w.displayName = O;
var D = "PopoverAnchor", ne = v(
  (e, n) => {
    const { __scopePopover: r, ...a } = e, o = f(D, r), t = C(r), { onCustomAnchorAdd: c, onCustomAnchorRemove: i } = o;
    return A(() => (c(), () => i()), [c, i]), /* @__PURE__ */ s.jsx(y, { ...t, ...a, ref: n });
  }
);
ne.displayName = D;
var M = "PopoverTrigger", k = v(
  (e, n) => {
    const { __scopePopover: r, ...a } = e, o = f(M, r), t = C(r), c = j(n, o.triggerRef), i = /* @__PURE__ */ s.jsx(
      b.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": H(o.open),
        ...a,
        ref: c,
        onClick: m(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ s.jsx(y, { asChild: !0, ...t, children: i });
  }
);
k.displayName = M;
var _ = "PopoverPortal", [ae, se] = F(_, {
  forceMount: void 0
}), I = (e) => {
  const { __scopePopover: n, forceMount: r, children: a, container: o } = e, t = f(_, n);
  return /* @__PURE__ */ s.jsx(ae, { scope: n, forceMount: r, children: /* @__PURE__ */ s.jsx(N, { present: r || t.open, children: /* @__PURE__ */ s.jsx(V, { asChild: !0, container: o, children: a }) }) });
};
I.displayName = _;
var h = "PopoverContent", T = v(
  (e, n) => {
    const r = se(h, e.__scopePopover), { forceMount: a = r.forceMount, ...o } = e, t = f(h, e.__scopePopover);
    return /* @__PURE__ */ s.jsx(N, { present: a || t.open, children: t.modal ? /* @__PURE__ */ s.jsx(ie, { ...o, ref: n }) : /* @__PURE__ */ s.jsx(pe, { ...o, ref: n }) });
  }
);
T.displayName = h;
var ce = J("PopoverContent.RemoveScroll"), ie = v(
  (e, n) => {
    const r = f(h, e.__scopePopover), a = g(null), o = j(n, a), t = g(!1);
    return A(() => {
      const c = a.current;
      if (c) return Z(c);
    }, []), /* @__PURE__ */ s.jsx(q, { as: ce, allowPinchZoom: !0, children: /* @__PURE__ */ s.jsx(
      L,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: m(e.onCloseAutoFocus, (c) => {
          c.preventDefault(), t.current || r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: m(
          e.onPointerDownOutside,
          (c) => {
            const i = c.detail.originalEvent, u = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || u;
            t.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: m(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), pe = v(
  (e, n) => {
    const r = f(h, e.__scopePopover), a = g(!1), o = g(!1);
    return /* @__PURE__ */ s.jsx(
      L,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          e.onCloseAutoFocus?.(t), t.defaultPrevented || (a.current || r.triggerRef.current?.focus(), t.preventDefault()), a.current = !1, o.current = !1;
        },
        onInteractOutside: (t) => {
          e.onInteractOutside?.(t), t.defaultPrevented || (a.current = !0, t.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const c = t.target;
          r.triggerRef.current?.contains(c) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && o.current && t.preventDefault();
        }
      }
    );
  }
), L = v(
  (e, n) => {
    const {
      __scopePopover: r,
      trapFocus: a,
      onOpenAutoFocus: o,
      onCloseAutoFocus: t,
      disableOutsidePointerEvents: c,
      onEscapeKeyDown: i,
      onPointerDownOutside: u,
      onFocusOutside: l,
      onInteractOutside: P,
      ...d
    } = e, p = f(h, r), R = C(r);
    return Q(), /* @__PURE__ */ s.jsx(
      X,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: o,
        onUnmountAutoFocus: t,
        children: /* @__PURE__ */ s.jsx(
          Y,
          {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onInteractOutside: P,
            onEscapeKeyDown: i,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ s.jsx(
              oe,
              {
                "data-state": H(p.open),
                role: "dialog",
                id: p.contentId,
                ...R,
                ...d,
                ref: n,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), $ = "PopoverClose", le = v(
  (e, n) => {
    const { __scopePopover: r, ...a } = e, o = f($, r);
    return /* @__PURE__ */ s.jsx(
      b.button,
      {
        type: "button",
        ...a,
        ref: n,
        onClick: m(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
le.displayName = $;
var de = "PopoverArrow", ue = v(
  (e, n) => {
    const { __scopePopover: r, ...a } = e, o = C(r);
    return /* @__PURE__ */ s.jsx(te, { ...o, ...a, ref: n });
  }
);
ue.displayName = de;
function H(e) {
  return e ? "open" : "closed";
}
var ve = w, fe = k, Pe = I, z = T;
const xe = ({
  open: e,
  defaultOpen: n,
  onOpenChange: r,
  children: a,
  ...o
}) => {
  const t = e !== void 0, [c, i] = E(n ?? !1), u = t ? e : c, l = x((d) => {
    t || i(d), r?.(d);
  }, [t, r]), P = g(l);
  return A(() => {
    P.current = l;
  }, [l]), A(() => {
    if (!u)
      return;
    const d = (p) => {
      p.key === "Escape" && (p.preventDefault(), p.stopPropagation(), P.current(!1));
    };
    return document.addEventListener("keydown", d, { capture: !0 }), () => document.removeEventListener("keydown", d, { capture: !0 });
  }, [u]), /* @__PURE__ */ s.jsx(
    ve,
    {
      ...o,
      open: u,
      onOpenChange: l,
      children: a
    }
  );
}, Ae = fe, ge = v(({ className: e, align: n = "center", sideOffset: r = 4, ...a }, o) => /* @__PURE__ */ s.jsx(Pe, { children: /* @__PURE__ */ s.jsx("div", { className: G, children: /* @__PURE__ */ s.jsx(
  z,
  {
    ref: o,
    align: n,
    className: K(
      "z-50 rounded-md bg-popover p-5 text-popover-foreground shadow-md border outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      e
    ),
    sideOffset: r,
    ...a
  }
) }) }));
ge.displayName = z.displayName;
export {
  xe as P,
  ge as a,
  Ae as b
};
//# sourceMappingURL=popover-DdbdKflP.js.map
