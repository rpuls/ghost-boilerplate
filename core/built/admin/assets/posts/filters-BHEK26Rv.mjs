import { i as z, a as U, h as T, u as H, j as n, b as V, k as M, x as wr, y as Se, z as _e, A as rt, F as jr, J as Cr, s as D, w as $e, v as Le, T as Nr, m as I, S as Ct, E as Y } from "./index-BWRct4la.mjs";
import { a as De, P as Nt, D as Pt, h as Pr, R as Sr, u as _r, F as kr, d as Er, e as Tr, O as Ar, f as Fr, X as St, C as ke } from "./dialog-ChCs58Pc.mjs";
import { b as we, u as nt, c as at, P as je, e as G, a as ae, j as Ir, g as Or, h as ge } from "./button-BOW1bLRE.mjs";
import { S as zr, P as Rr, k as $r, L as Xe } from "./app-utils-bFFqatF8.mjs";
import { u as Lr, c as Ve, R as _t, A as ot, C as kt, a as Et, D as Dr, b as Vr, d as Mr, e as Hr } from "./separator-eM4IfLr1.mjs";
function qr(e) {
  const r = z({ value: e, previous: e });
  return U(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e]);
}
var Me = "Switch", [Br] = at(Me), [Wr, Kr] = Br(Me), Tt = T(
  (e, r) => {
    const {
      __scopeSwitch: t,
      name: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: c,
      value: u = "on",
      onCheckedChange: d,
      form: l,
      ...f
    } = e, [g, x] = H(null), m = we(r, (O) => x(O)), y = z(!1), b = g ? l || !!g.closest("form") : !0, [j, S] = nt({
      prop: a,
      defaultProp: s ?? !1,
      onChange: d,
      caller: Me
    });
    return /* @__PURE__ */ n.jsxs(Wr, { scope: t, checked: j, disabled: c, children: [
      /* @__PURE__ */ n.jsx(
        je.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": j,
          "aria-required": i,
          "data-state": Ot(j),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: u,
          ...f,
          ref: m,
          onClick: G(e.onClick, (O) => {
            S((A) => !A), b && (y.current = O.isPropagationStopped(), y.current || O.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ n.jsx(
        It,
        {
          control: g,
          bubbles: !y.current,
          name: o,
          value: u,
          checked: j,
          required: i,
          disabled: c,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Tt.displayName = Me;
var At = "SwitchThumb", Ft = T(
  (e, r) => {
    const { __scopeSwitch: t, ...o } = e, a = Kr(At, t);
    return /* @__PURE__ */ n.jsx(
      je.span,
      {
        "data-state": Ot(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: r
      }
    );
  }
);
Ft.displayName = At;
var Ur = "SwitchBubbleInput", It = T(
  ({
    __scopeSwitch: e,
    control: r,
    checked: t,
    bubbles: o = !0,
    ...a
  }, s) => {
    const i = z(null), c = we(i, s), u = qr(t), d = Lr(r);
    return V(() => {
      const l = i.current;
      if (!l) return;
      const f = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (u !== t && x) {
        const m = new Event("click", { bubbles: o });
        x.call(l, t), l.dispatchEvent(m);
      }
    }, [u, t, o]), /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: t,
        ...a,
        tabIndex: -1,
        ref: c,
        style: {
          ...a.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
It.displayName = Ur;
function Ot(e) {
  return e ? "checked" : "unchecked";
}
var zt = Tt, Gr = Ft, Yr = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Xr = "VisuallyHidden", Rt = T(
  (e, r) => /* @__PURE__ */ n.jsx(
    je.span,
    {
      ...e,
      ref: r,
      style: { ...Yr, ...e.style }
    }
  )
);
Rt.displayName = Xr;
var Zr = Rt, [He] = at("Tooltip", [
  Ve
]), qe = Ve(), $t = "TooltipProvider", Jr = 700, Ze = "tooltip.open", [Qr, st] = He($t), Lt = (e) => {
  const {
    __scopeTooltip: r,
    delayDuration: t = Jr,
    skipDelayDuration: o = 300,
    disableHoverableContent: a = !1,
    children: s
  } = e, i = z(!0), c = z(!1), u = z(0);
  return V(() => {
    const d = u.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ n.jsx(
    Qr,
    {
      scope: r,
      isOpenDelayedRef: i,
      delayDuration: t,
      onOpen: M(() => {
        window.clearTimeout(u.current), i.current = !1;
      }, []),
      onClose: M(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => i.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: M((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: a,
      children: s
    }
  );
};
Lt.displayName = $t;
var Ee = "Tooltip", [en, Te] = He(Ee), Dt = (e) => {
  const {
    __scopeTooltip: r,
    children: t,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, u = st(Ee, e.__scopeTooltip), d = qe(r), [l, f] = H(null), g = ae(), x = z(0), m = i ?? u.disableHoverableContent, y = c ?? u.delayDuration, b = z(!1), [j, S] = nt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: (L) => {
      L ? (u.onOpen(), document.dispatchEvent(new CustomEvent(Ze))) : u.onClose(), s == null || s(L);
    },
    caller: Ee
  }), O = U(() => j ? b.current ? "delayed-open" : "instant-open" : "closed", [j]), A = M(() => {
    window.clearTimeout(x.current), x.current = 0, b.current = !1, S(!0);
  }, [S]), $ = M(() => {
    window.clearTimeout(x.current), x.current = 0, S(!1);
  }, [S]), C = M(() => {
    window.clearTimeout(x.current), x.current = window.setTimeout(() => {
      b.current = !0, S(!0), x.current = 0;
    }, y);
  }, [y, S]);
  return V(() => () => {
    x.current && (window.clearTimeout(x.current), x.current = 0);
  }, []), /* @__PURE__ */ n.jsx(_t, { ...d, children: /* @__PURE__ */ n.jsx(
    en,
    {
      scope: r,
      contentId: g,
      open: j,
      stateAttribute: O,
      trigger: l,
      onTriggerChange: f,
      onTriggerEnter: M(() => {
        u.isOpenDelayedRef.current ? C() : A();
      }, [u.isOpenDelayedRef, C, A]),
      onTriggerLeave: M(() => {
        m ? $() : (window.clearTimeout(x.current), x.current = 0);
      }, [$, m]),
      onOpen: A,
      onClose: $,
      disableHoverableContent: m,
      children: t
    }
  ) });
};
Dt.displayName = Ee;
var Je = "TooltipTrigger", Vt = T(
  (e, r) => {
    const { __scopeTooltip: t, ...o } = e, a = Te(Je, t), s = st(Je, t), i = qe(t), c = z(null), u = we(r, c, a.onTriggerChange), d = z(!1), l = z(!1), f = M(() => d.current = !1, []);
    return V(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ n.jsx(ot, { asChild: !0, ...i, children: /* @__PURE__ */ n.jsx(
      je.button,
      {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...o,
        ref: u,
        onPointerMove: G(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !l.current && !s.isPointerInTransitRef.current && (a.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: G(e.onPointerLeave, () => {
          a.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: G(e.onPointerDown, () => {
          a.open && a.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: G(e.onFocus, () => {
          d.current || a.onOpen();
        }),
        onBlur: G(e.onBlur, a.onClose),
        onClick: G(e.onClick, a.onClose)
      }
    ) });
  }
);
Vt.displayName = Je;
var lt = "TooltipPortal", [tn, rn] = He(lt, {
  forceMount: void 0
}), Mt = (e) => {
  const { __scopeTooltip: r, forceMount: t, children: o, container: a } = e, s = Te(lt, r);
  return /* @__PURE__ */ n.jsx(tn, { scope: r, forceMount: t, children: /* @__PURE__ */ n.jsx(De, { present: t || s.open, children: /* @__PURE__ */ n.jsx(Nt, { asChild: !0, container: a, children: o }) }) });
};
Mt.displayName = lt;
var xe = "TooltipContent", Ht = T(
  (e, r) => {
    const t = rn(xe, e.__scopeTooltip), { forceMount: o = t.forceMount, side: a = "top", ...s } = e, i = Te(xe, e.__scopeTooltip);
    return /* @__PURE__ */ n.jsx(De, { present: o || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ n.jsx(qt, { side: a, ...s, ref: r }) : /* @__PURE__ */ n.jsx(nn, { side: a, ...s, ref: r }) });
  }
), nn = T((e, r) => {
  const t = Te(xe, e.__scopeTooltip), o = st(xe, e.__scopeTooltip), a = z(null), s = we(r, a), [i, c] = H(null), { trigger: u, onClose: d } = t, l = a.current, { onPointerInTransitChange: f } = o, g = M(() => {
    c(null), f(!1);
  }, [f]), x = M(
    (m, y) => {
      const b = m.currentTarget, j = { x: m.clientX, y: m.clientY }, S = cn(j, b.getBoundingClientRect()), O = un(j, S), A = dn(y.getBoundingClientRect()), $ = mn([...O, ...A]);
      c($), f(!0);
    },
    [f]
  );
  return V(() => () => g(), [g]), V(() => {
    if (u && l) {
      const m = (b) => x(b, l), y = (b) => x(b, u);
      return u.addEventListener("pointerleave", m), l.addEventListener("pointerleave", y), () => {
        u.removeEventListener("pointerleave", m), l.removeEventListener("pointerleave", y);
      };
    }
  }, [u, l, x, g]), V(() => {
    if (i) {
      const m = (y) => {
        const b = y.target, j = { x: y.clientX, y: y.clientY }, S = (u == null ? void 0 : u.contains(b)) || (l == null ? void 0 : l.contains(b)), O = !pn(j, i);
        S ? g() : O && (g(), d());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [u, l, i, d, g]), /* @__PURE__ */ n.jsx(qt, { ...e, ref: s });
}), [an, on] = He(Ee, { isInside: !1 }), sn = Ir("TooltipContent"), qt = T(
  (e, r) => {
    const {
      __scopeTooltip: t,
      children: o,
      "aria-label": a,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...c
    } = e, u = Te(xe, t), d = qe(t), { onClose: l } = u;
    return V(() => (document.addEventListener(Ze, l), () => document.removeEventListener(Ze, l)), [l]), V(() => {
      if (u.trigger) {
        const f = (g) => {
          const x = g.target;
          x != null && x.contains(u.trigger) && l();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [u.trigger, l]), /* @__PURE__ */ n.jsx(
      Pt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ n.jsxs(
          kt,
          {
            "data-state": u.stateAttribute,
            ...d,
            ...c,
            ref: r,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ n.jsx(sn, { children: o }),
              /* @__PURE__ */ n.jsx(an, { scope: t, isInside: !0, children: /* @__PURE__ */ n.jsx(Zr, { id: u.contentId, role: "tooltip", children: a || o }) })
            ]
          }
        )
      }
    );
  }
);
Ht.displayName = xe;
var Bt = "TooltipArrow", ln = T(
  (e, r) => {
    const { __scopeTooltip: t, ...o } = e, a = qe(t);
    return on(
      Bt,
      t
    ).isInside ? null : /* @__PURE__ */ n.jsx(Et, { ...a, ...o, ref: r });
  }
);
ln.displayName = Bt;
function cn(e, r) {
  const t = Math.abs(r.top - e.y), o = Math.abs(r.bottom - e.y), a = Math.abs(r.right - e.x), s = Math.abs(r.left - e.x);
  switch (Math.min(t, o, a, s)) {
    case s:
      return "left";
    case a:
      return "right";
    case t:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function un(e, r, t = 5) {
  const o = [];
  switch (r) {
    case "top":
      o.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      o.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      o.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return o;
}
function dn(e) {
  const { top: r, right: t, bottom: o, left: a } = e;
  return [
    { x: a, y: r },
    { x: t, y: r },
    { x: t, y: o },
    { x: a, y: o }
  ];
}
function pn(e, r) {
  const { x: t, y: o } = e;
  let a = !1;
  for (let s = 0, i = r.length - 1; s < r.length; i = s++) {
    const c = r[s], u = r[i], d = c.x, l = c.y, f = u.x, g = u.y;
    l > o != g > o && t < (f - d) * (o - l) / (g - l) + d && (a = !a);
  }
  return a;
}
function mn(e) {
  const r = e.slice();
  return r.sort((t, o) => t.x < o.x ? -1 : t.x > o.x ? 1 : t.y < o.y ? -1 : t.y > o.y ? 1 : 0), vn(r);
}
function vn(e) {
  if (e.length <= 1) return e.slice();
  const r = [];
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (; r.length >= 2; ) {
      const s = r[r.length - 1], i = r[r.length - 2];
      if ((s.x - i.x) * (a.y - i.y) >= (s.y - i.y) * (a.x - i.x)) r.pop();
      else break;
    }
    r.push(a);
  }
  r.pop();
  const t = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const a = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (a.y - i.y) >= (s.y - i.y) * (a.x - i.x)) t.pop();
      else break;
    }
    t.push(a);
  }
  return t.pop(), r.length === 1 && t.length === 1 && r[0].x === t[0].x && r[0].y === t[0].y ? r : r.concat(t);
}
var hn = Lt, fn = Dt, gn = Vt, xn = Mt, Wt = Ht, Be = "Popover", [Kt] = at(Be, [
  Ve
]), Ae = Ve(), [bn, se] = Kt(Be), Ut = (e) => {
  const {
    __scopePopover: r,
    children: t,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !1
  } = e, c = Ae(r), u = z(null), [d, l] = H(!1), [f, g] = nt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: Be
  });
  return /* @__PURE__ */ n.jsx(_t, { ...c, children: /* @__PURE__ */ n.jsx(
    bn,
    {
      scope: r,
      contentId: ae(),
      triggerRef: u,
      open: f,
      onOpenChange: g,
      onOpenToggle: M(() => g((x) => !x), [g]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: M(() => l(!0), []),
      onCustomAnchorRemove: M(() => l(!1), []),
      modal: i,
      children: t
    }
  ) });
};
Ut.displayName = Be;
var Gt = "PopoverAnchor", yn = T(
  (e, r) => {
    const { __scopePopover: t, ...o } = e, a = se(Gt, t), s = Ae(t), { onCustomAnchorAdd: i, onCustomAnchorRemove: c } = a;
    return V(() => (i(), () => c()), [i, c]), /* @__PURE__ */ n.jsx(ot, { ...s, ...o, ref: r });
  }
);
yn.displayName = Gt;
var Yt = "PopoverTrigger", Xt = T(
  (e, r) => {
    const { __scopePopover: t, ...o } = e, a = se(Yt, t), s = Ae(t), i = we(r, a.triggerRef), c = /* @__PURE__ */ n.jsx(
      je.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": tr(a.open),
        ...o,
        ref: i,
        onClick: G(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? c : /* @__PURE__ */ n.jsx(ot, { asChild: !0, ...s, children: c });
  }
);
Xt.displayName = Yt;
var it = "PopoverPortal", [wn, jn] = Kt(it, {
  forceMount: void 0
}), Zt = (e) => {
  const { __scopePopover: r, forceMount: t, children: o, container: a } = e, s = se(it, r);
  return /* @__PURE__ */ n.jsx(wn, { scope: r, forceMount: t, children: /* @__PURE__ */ n.jsx(De, { present: t || s.open, children: /* @__PURE__ */ n.jsx(Nt, { asChild: !0, container: a, children: o }) }) });
};
Zt.displayName = it;
var be = "PopoverContent", Jt = T(
  (e, r) => {
    const t = jn(be, e.__scopePopover), { forceMount: o = t.forceMount, ...a } = e, s = se(be, e.__scopePopover);
    return /* @__PURE__ */ n.jsx(De, { present: o || s.open, children: s.modal ? /* @__PURE__ */ n.jsx(Nn, { ...a, ref: r }) : /* @__PURE__ */ n.jsx(Pn, { ...a, ref: r }) });
  }
);
Jt.displayName = be;
var Cn = Or("PopoverContent.RemoveScroll"), Nn = T(
  (e, r) => {
    const t = se(be, e.__scopePopover), o = z(null), a = we(r, o), s = z(!1);
    return V(() => {
      const i = o.current;
      if (i) return Pr(i);
    }, []), /* @__PURE__ */ n.jsx(Sr, { as: Cn, allowPinchZoom: !0, children: /* @__PURE__ */ n.jsx(
      Qt,
      {
        ...e,
        ref: a,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: G(e.onCloseAutoFocus, (i) => {
          var c;
          i.preventDefault(), s.current || (c = t.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: G(
          e.onPointerDownOutside,
          (i) => {
            const c = i.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
            s.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: G(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Pn = T(
  (e, r) => {
    const t = se(be, e.__scopePopover), o = z(!1), a = z(!1);
    return /* @__PURE__ */ n.jsx(
      Qt,
      {
        ...e,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, c;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (o.current || (c = t.triggerRef.current) == null || c.focus(), s.preventDefault()), o.current = !1, a.current = !1;
        },
        onInteractOutside: (s) => {
          var u, d;
          (u = e.onInteractOutside) == null || u.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const i = s.target;
          ((d = t.triggerRef.current) == null ? void 0 : d.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && a.current && s.preventDefault();
        }
      }
    );
  }
), Qt = T(
  (e, r) => {
    const {
      __scopePopover: t,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: l,
      ...f
    } = e, g = se(be, t), x = Ae(t);
    return _r(), /* @__PURE__ */ n.jsx(
      kr,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: a,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ n.jsx(
          Pt,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: l,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ n.jsx(
              kt,
              {
                "data-state": tr(g.open),
                role: "dialog",
                id: g.contentId,
                ...x,
                ...f,
                ref: r,
                style: {
                  ...f.style,
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
), er = "PopoverClose", Sn = T(
  (e, r) => {
    const { __scopePopover: t, ...o } = e, a = se(er, t);
    return /* @__PURE__ */ n.jsx(
      je.button,
      {
        type: "button",
        ...o,
        ref: r,
        onClick: G(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
Sn.displayName = er;
var _n = "PopoverArrow", kn = T(
  (e, r) => {
    const { __scopePopover: t, ...o } = e, a = Ae(t);
    return /* @__PURE__ */ n.jsx(Et, { ...a, ...o, ref: r });
  }
);
kn.displayName = _n;
function tr(e) {
  return e ? "open" : "closed";
}
var En = Ut, Tn = Xt, An = Zt, rr = Jt, ht = 1, Fn = 0.9, In = 0.8, On = 0.17, Ue = 0.1, Ge = 0.999, zn = 0.9999, Rn = 0.99, $n = /[\\\/_+.#"@\[\(\{&]/, Ln = /[\\\/_+.#"@\[\(\{&]/g, Dn = /[\s-]/, nr = /[\s-]/g;
function Qe(e, r, t, o, a, s, i) {
  if (s === r.length) return a === e.length ? ht : Rn;
  var c = `${a},${s}`;
  if (i[c] !== void 0) return i[c];
  for (var u = o.charAt(s), d = t.indexOf(u, a), l = 0, f, g, x, m; d >= 0; ) f = Qe(e, r, t, o, d + 1, s + 1, i), f > l && (d === a ? f *= ht : $n.test(e.charAt(d - 1)) ? (f *= In, x = e.slice(a, d - 1).match(Ln), x && a > 0 && (f *= Math.pow(Ge, x.length))) : Dn.test(e.charAt(d - 1)) ? (f *= Fn, m = e.slice(a, d - 1).match(nr), m && a > 0 && (f *= Math.pow(Ge, m.length))) : (f *= On, a > 0 && (f *= Math.pow(Ge, d - a))), e.charAt(d) !== r.charAt(s) && (f *= zn)), (f < Ue && t.charAt(d - 1) === o.charAt(s + 1) || o.charAt(s + 1) === o.charAt(s) && t.charAt(d - 1) !== o.charAt(s)) && (g = Qe(e, r, t, o, d + 1, s + 2, i), g * Ue > f && (f = g * Ue)), f > l && (l = f), d = t.indexOf(u, d + 1);
  return i[c] = l, l;
}
function ft(e) {
  return e.toLowerCase().replace(nr, " ");
}
function Vn(e, r, t) {
  return e = t && t.length > 0 ? `${e + " " + t.join(" ")}` : e, Qe(e, r, ft(e), ft(r), 0, 0, {});
}
var Mn = Symbol.for("react.lazy"), ze = wr[" use ".trim().toString()];
function Hn(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ar(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Mn && "_payload" in e && Hn(e._payload);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  const r = /* @__PURE__ */ Bn(e), t = T((o, a) => {
    let { children: s, ...i } = o;
    ar(s) && typeof ze == "function" && (s = ze(s._payload));
    const c = Se.toArray(s), u = c.find(Kn);
    if (u) {
      const d = u.props.children, l = c.map((f) => f === u ? Se.count(d) > 1 ? Se.only(null) : _e(d) ? d.props.children : null : f);
      return /* @__PURE__ */ n.jsx(r, { ...i, ref: a, children: _e(d) ? rt(d, void 0, l) : null });
    }
    return /* @__PURE__ */ n.jsx(r, { ...i, ref: a, children: s });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const r = T((t, o) => {
    let { children: a, ...s } = t;
    if (ar(a) && typeof ze == "function" && (a = ze(a._payload)), _e(a)) {
      const i = Gn(a), c = Un(s, a.props);
      return a.type !== jr && (c.ref = o ? ge(o, i) : i), rt(a, c);
    }
    return Se.count(a) > 1 ? Se.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var Wn = Symbol("radix.slottable");
function Kn(e) {
  return _e(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wn;
}
function Un(e, r) {
  const t = { ...r };
  for (const o in r) {
    const a = e[o], s = r[o];
    /^on[A-Z]/.test(o) ? a && s ? t[o] = (...c) => {
      const u = s(...c);
      return a(...c), u;
    } : a && (t[o] = a) : o === "style" ? t[o] = { ...a, ...s } : o === "className" && (t[o] = [a, s].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Gn(e) {
  var o, a;
  let r = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = r && "isReactWarning" in r && r.isReactWarning;
  return t ? e.ref : (r = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Yn = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], le = Yn.reduce((e, r) => {
  const t = /* @__PURE__ */ qn(`Primitive.${r}`), o = T((a, s) => {
    const { asChild: i, ...c } = a, u = i ? t : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n.jsx(u, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${r}`, { ...e, [r]: o };
}, {}), Ne = '[cmdk-group=""]', Ye = '[cmdk-group-items=""]', Xn = '[cmdk-group-heading=""]', or = '[cmdk-item=""]', gt = `${or}:not([aria-disabled="true"])`, et = "cmdk-item-select", me = "data-value", Zn = (e, r, t) => Vn(e, r, t), sr = Le(void 0), Fe = () => $e(sr), lr = Le(void 0), ct = () => $e(lr), ir = Le(void 0), cr = T((e, r) => {
  let t = ve(() => {
    var p, N;
    return { search: "", value: (N = (p = e.value) != null ? p : e.defaultValue) != null ? N : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = ve(() => /* @__PURE__ */ new Set()), a = ve(() => /* @__PURE__ */ new Map()), s = ve(() => /* @__PURE__ */ new Map()), i = ve(() => /* @__PURE__ */ new Set()), c = ur(e), { label: u, children: d, value: l, onValueChange: f, filter: g, shouldFilter: x, loop: m, disablePointerSelection: y = !1, vimBindings: b = !0, ...j } = e, S = ae(), O = ae(), A = ae(), $ = z(null), C = ia();
  ue(() => {
    if (l !== void 0) {
      let p = l.trim();
      t.current.value = p, L.emit();
    }
  }, [l]), ue(() => {
    C(6, B);
  }, []);
  let L = U(() => ({ subscribe: (p) => (i.current.add(p), () => i.current.delete(p)), snapshot: () => t.current, setState: (p, N, E) => {
    var w, h, v, P;
    if (!Object.is(t.current[p], N)) {
      if (t.current[p] = N, p === "search") R(), X(), C(1, k);
      else if (p === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let _ = document.getElementById(A);
          _ ? _.focus() : (w = document.getElementById(S)) == null || w.focus();
        }
        if (C(7, () => {
          var _;
          t.current.selectedItemId = (_ = W()) == null ? void 0 : _.id, L.emit();
        }), E || C(5, B), ((h = c.current) == null ? void 0 : h.value) !== void 0) {
          let _ = N ?? "";
          (P = (v = c.current).onValueChange) == null || P.call(v, _);
          return;
        }
      }
      L.emit();
    }
  }, emit: () => {
    i.current.forEach((p) => p());
  } }), []), ne = U(() => ({ value: (p, N, E) => {
    var w;
    N !== ((w = s.current.get(p)) == null ? void 0 : w.value) && (s.current.set(p, { value: N, keywords: E }), t.current.filtered.items.set(p, ee(N, E)), C(2, () => {
      X(), L.emit();
    }));
  }, item: (p, N) => (o.current.add(p), N && (a.current.has(N) ? a.current.get(N).add(p) : a.current.set(N, /* @__PURE__ */ new Set([p]))), C(3, () => {
    R(), X(), t.current.value || k(), L.emit();
  }), () => {
    s.current.delete(p), o.current.delete(p), t.current.filtered.items.delete(p);
    let E = W();
    C(4, () => {
      R(), (E == null ? void 0 : E.getAttribute("id")) === p && k(), L.emit();
    });
  }), group: (p) => (a.current.has(p) || a.current.set(p, /* @__PURE__ */ new Set()), () => {
    s.current.delete(p), a.current.delete(p);
  }), filter: () => c.current.shouldFilter, label: u || e["aria-label"], getDisablePointerSelection: () => c.current.disablePointerSelection, listId: S, inputId: A, labelId: O, listInnerRef: $ }), []);
  function ee(p, N) {
    var E, w;
    let h = (w = (E = c.current) == null ? void 0 : E.filter) != null ? w : Zn;
    return p ? h(p, t.current.search, N) : 0;
  }
  function X() {
    if (!t.current.search || c.current.shouldFilter === !1) return;
    let p = t.current.filtered.items, N = [];
    t.current.filtered.groups.forEach((w) => {
      let h = a.current.get(w), v = 0;
      h.forEach((P) => {
        let _ = p.get(P);
        v = Math.max(_, v);
      }), N.push([w, v]);
    });
    let E = $.current;
    Z().sort((w, h) => {
      var v, P;
      let _ = w.getAttribute("id"), F = h.getAttribute("id");
      return ((v = p.get(F)) != null ? v : 0) - ((P = p.get(_)) != null ? P : 0);
    }).forEach((w) => {
      let h = w.closest(Ye);
      h ? h.appendChild(w.parentElement === h ? w : w.closest(`${Ye} > *`)) : E.appendChild(w.parentElement === E ? w : w.closest(`${Ye} > *`));
    }), N.sort((w, h) => h[1] - w[1]).forEach((w) => {
      var h;
      let v = (h = $.current) == null ? void 0 : h.querySelector(`${Ne}[${me}="${encodeURIComponent(w[0])}"]`);
      v == null || v.parentElement.appendChild(v);
    });
  }
  function k() {
    let p = Z().find((E) => E.getAttribute("aria-disabled") !== "true"), N = p == null ? void 0 : p.getAttribute(me);
    L.setState("value", N || void 0);
  }
  function R() {
    var p, N, E, w;
    if (!t.current.search || c.current.shouldFilter === !1) {
      t.current.filtered.count = o.current.size;
      return;
    }
    t.current.filtered.groups = /* @__PURE__ */ new Set();
    let h = 0;
    for (let v of o.current) {
      let P = (N = (p = s.current.get(v)) == null ? void 0 : p.value) != null ? N : "", _ = (w = (E = s.current.get(v)) == null ? void 0 : E.keywords) != null ? w : [], F = ee(P, _);
      t.current.filtered.items.set(v, F), F > 0 && h++;
    }
    for (let [v, P] of a.current) for (let _ of P) if (t.current.filtered.items.get(_) > 0) {
      t.current.filtered.groups.add(v);
      break;
    }
    t.current.filtered.count = h;
  }
  function B() {
    var p, N, E;
    let w = W();
    w && (((p = w.parentElement) == null ? void 0 : p.firstChild) === w && ((E = (N = w.closest(Ne)) == null ? void 0 : N.querySelector(Xn)) == null || E.scrollIntoView({ block: "nearest" })), w.scrollIntoView({ block: "nearest" }));
  }
  function W() {
    var p;
    return (p = $.current) == null ? void 0 : p.querySelector(`${or}[aria-selected="true"]`);
  }
  function Z() {
    var p;
    return Array.from(((p = $.current) == null ? void 0 : p.querySelectorAll(gt)) || []);
  }
  function J(p) {
    let N = Z()[p];
    N && L.setState("value", N.getAttribute(me));
  }
  function Q(p) {
    var N;
    let E = W(), w = Z(), h = w.findIndex((P) => P === E), v = w[h + p];
    (N = c.current) != null && N.loop && (v = h + p < 0 ? w[w.length - 1] : h + p === w.length ? w[0] : w[h + p]), v && L.setState("value", v.getAttribute(me));
  }
  function ie(p) {
    let N = W(), E = N == null ? void 0 : N.closest(Ne), w;
    for (; E && !w; ) E = p > 0 ? sa(E, Ne) : la(E, Ne), w = E == null ? void 0 : E.querySelector(gt);
    w ? L.setState("value", w.getAttribute(me)) : Q(p);
  }
  let te = () => J(Z().length - 1), Ce = (p) => {
    p.preventDefault(), p.metaKey ? te() : p.altKey ? ie(1) : Q(1);
  }, Ie = (p) => {
    p.preventDefault(), p.metaKey ? J(0) : p.altKey ? ie(-1) : Q(-1);
  };
  return D(le.div, { ref: r, tabIndex: -1, ...j, "cmdk-root": "", onKeyDown: (p) => {
    var N;
    (N = j.onKeyDown) == null || N.call(j, p);
    let E = p.nativeEvent.isComposing || p.keyCode === 229;
    if (!(p.defaultPrevented || E)) switch (p.key) {
      case "n":
      case "j": {
        b && p.ctrlKey && Ce(p);
        break;
      }
      case "ArrowDown": {
        Ce(p);
        break;
      }
      case "p":
      case "k": {
        b && p.ctrlKey && Ie(p);
        break;
      }
      case "ArrowUp": {
        Ie(p);
        break;
      }
      case "Home": {
        p.preventDefault(), J(0);
        break;
      }
      case "End": {
        p.preventDefault(), te();
        break;
      }
      case "Enter": {
        p.preventDefault();
        let w = W();
        if (w) {
          let h = new Event(et);
          w.dispatchEvent(h);
        }
      }
    }
  } }, D("label", { "cmdk-label": "", htmlFor: ne.inputId, id: ne.labelId, style: ua }, u), We(e, (p) => D(lr.Provider, { value: L }, D(sr.Provider, { value: ne }, p))));
}), Jn = T((e, r) => {
  var t, o;
  let a = ae(), s = z(null), i = $e(ir), c = Fe(), u = ur(e), d = (o = (t = u.current) == null ? void 0 : t.forceMount) != null ? o : i == null ? void 0 : i.forceMount;
  ue(() => {
    if (!d) return c.item(a, i == null ? void 0 : i.id);
  }, [d]);
  let l = dr(a, s, [e.value, e.children, s], e.keywords), f = ct(), g = oe((C) => C.value && C.value === l.current), x = oe((C) => d || c.filter() === !1 ? !0 : C.search ? C.filtered.items.get(a) > 0 : !0);
  V(() => {
    let C = s.current;
    if (!(!C || e.disabled)) return C.addEventListener(et, m), () => C.removeEventListener(et, m);
  }, [x, e.onSelect, e.disabled]);
  function m() {
    var C, L;
    y(), (L = (C = u.current).onSelect) == null || L.call(C, l.current);
  }
  function y() {
    f.setState("value", l.current, !0);
  }
  if (!x) return null;
  let { disabled: b, value: j, onSelect: S, forceMount: O, keywords: A, ...$ } = e;
  return D(le.div, { ref: ge(s, r), ...$, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!g, "data-disabled": !!b, "data-selected": !!g, onPointerMove: b || c.getDisablePointerSelection() ? void 0 : y, onClick: b ? void 0 : m }, e.children);
}), Qn = T((e, r) => {
  let { heading: t, children: o, forceMount: a, ...s } = e, i = ae(), c = z(null), u = z(null), d = ae(), l = Fe(), f = oe((x) => a || l.filter() === !1 ? !0 : x.search ? x.filtered.groups.has(i) : !0);
  ue(() => l.group(i), []), dr(i, c, [e.value, e.heading, u]);
  let g = U(() => ({ id: i, forceMount: a }), [a]);
  return D(le.div, { ref: ge(c, r), ...s, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, t && D("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, t), We(e, (x) => D("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": t ? d : void 0 }, D(ir.Provider, { value: g }, x))));
}), ea = T((e, r) => {
  let { alwaysRender: t, ...o } = e, a = z(null), s = oe((i) => !i.search);
  return !t && !s ? null : D(le.div, { ref: ge(a, r), ...o, "cmdk-separator": "", role: "separator" });
}), ta = T((e, r) => {
  let { onValueChange: t, ...o } = e, a = e.value != null, s = ct(), i = oe((d) => d.search), c = oe((d) => d.selectedItemId), u = Fe();
  return V(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), D(le.input, { ref: r, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, "aria-activedescendant": c, id: u.inputId, type: "text", value: a ? e.value : i, onChange: (d) => {
    a || s.setState("search", d.target.value), t == null || t(d.target.value);
  } });
}), ra = T((e, r) => {
  let { children: t, label: o = "Suggestions", ...a } = e, s = z(null), i = z(null), c = oe((d) => d.selectedItemId), u = Fe();
  return V(() => {
    if (i.current && s.current) {
      let d = i.current, l = s.current, f, g = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let x = d.offsetHeight;
          l.style.setProperty("--cmdk-list-height", x.toFixed(1) + "px");
        });
      });
      return g.observe(d), () => {
        cancelAnimationFrame(f), g.unobserve(d);
      };
    }
  }, []), D(le.div, { ref: ge(s, r), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": c, "aria-label": o, id: u.listId }, We(e, (d) => D("div", { ref: ge(i, u.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), na = T((e, r) => {
  let { open: t, onOpenChange: o, overlayClassName: a, contentClassName: s, container: i, ...c } = e;
  return D(Er, { open: t, onOpenChange: o }, D(Tr, { container: i }, D(Ar, { "cmdk-overlay": "", className: a }), D(Fr, { "aria-label": e.label, "cmdk-dialog": "", className: s }, D(cr, { ref: r, ...c }))));
}), aa = T((e, r) => oe((t) => t.filtered.count === 0) ? D(le.div, { ref: r, ...e, "cmdk-empty": "", role: "presentation" }) : null), oa = T((e, r) => {
  let { progress: t, children: o, label: a = "Loading...", ...s } = e;
  return D(le.div, { ref: r, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": t, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, We(e, (i) => D("div", { "aria-hidden": !0 }, i)));
}), de = Object.assign(cr, { List: ra, Item: Jn, Input: ta, Group: Qn, Separator: ea, Dialog: na, Empty: aa, Loading: oa });
function sa(e, r) {
  let t = e.nextElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.nextElementSibling;
  }
}
function la(e, r) {
  let t = e.previousElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.previousElementSibling;
  }
}
function ur(e) {
  let r = z(e);
  return ue(() => {
    r.current = e;
  }), r;
}
var ue = typeof window > "u" ? V : Cr;
function ve(e) {
  let r = z();
  return r.current === void 0 && (r.current = e()), r;
}
function oe(e) {
  let r = ct(), t = () => e(r.snapshot());
  return Nr(r.subscribe, t, t);
}
function dr(e, r, t, o = []) {
  let a = z(), s = Fe();
  return ue(() => {
    var i;
    let c = (() => {
      var d;
      for (let l of t) {
        if (typeof l == "string") return l.trim();
        if (typeof l == "object" && "current" in l) return l.current ? (d = l.current.textContent) == null ? void 0 : d.trim() : a.current;
      }
    })(), u = o.map((d) => d.trim());
    s.value(e, c, u), (i = r.current) == null || i.setAttribute(me, c), a.current = c;
  }), a;
}
var ia = () => {
  let [e, r] = H(), t = ve(() => /* @__PURE__ */ new Map());
  return ue(() => {
    t.current.forEach((o) => o()), t.current = /* @__PURE__ */ new Map();
  }, [e]), (o, a) => {
    t.current.set(o, a), r({});
  };
};
function ca(e) {
  let r = e.type;
  return typeof r == "function" ? r(e.props) : "render" in r ? r.render(e.props) : e;
}
function We({ asChild: e, children: r }, t) {
  return e && _e(r) ? rt(ca(r), { ref: r.ref }, t(r.props.children)) : t(r);
}
var ua = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function Re({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    de,
    {
      className: I(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...r
    }
  );
}
function ut({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center border-b border-border px-3", "cmdk-input-wrapper": "", "data-slot": "command-input", children: [
    /* @__PURE__ */ n.jsx(zr, { className: "me-2 size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ n.jsx(
      de.Input,
      {
        className: I(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...r
      }
    )
  ] });
}
function dt({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    de.List,
    {
      className: I("max-h-[300px] p-1 overflow-y-auto overflow-x-hidden", e),
      "data-slot": "command-list",
      ...r
    }
  );
}
function pt({ ...e }) {
  return /* @__PURE__ */ n.jsx(de.Empty, { className: "py-6 text-center text-sm", "data-slot": "command-empty", ...e });
}
function ye({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    de.Group,
    {
      className: I(
        "overflow-hidden p-1.5 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      "data-slot": "command-group",
      ...r
    }
  );
}
function fe({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    de.Separator,
    {
      className: I("-mx-1.5 h-px bg-border", e),
      "data-slot": "command-separator",
      ...r
    }
  );
}
function ce({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    de.Item,
    {
      className: I(
        "relative flex text-foreground cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
        e
      ),
      "data-slot": "command-item",
      ...r
    }
  );
}
const mt = En, vt = Tn, Ke = T(({ className: e, align: r = "center", sideOffset: t = 4, ...o }, a) => /* @__PURE__ */ n.jsx(An, { children: /* @__PURE__ */ n.jsx("div", { className: Ct, children: /* @__PURE__ */ n.jsx(
  rr,
  {
    ref: a,
    align: r,
    className: I(
      "z-50 rounded-md bg-surface-overlay p-5 text-popover-foreground shadow-md border outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      e
    ),
    sideOffset: t,
    ...o
  }
) }) }));
Ke.displayName = rr.displayName;
const da = Y(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        default: "h-5 w-9",
        sm: "h-4 w-7"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), pa = Y(
  "pointer-events-none block rounded-full bg-background ring-0 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.07))] transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "size-4 data-[state=checked]:translate-x-4",
        sm: "size-3 data-[state=checked]:translate-x-3"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), pr = T(({ className: e, size: r, ...t }, o) => /* @__PURE__ */ n.jsx(
  zt,
  {
    className: I(da({ size: r, className: e })),
    ...t,
    ref: o,
    children: /* @__PURE__ */ n.jsx(
      Gr,
      {
        className: I(pa({ size: r }))
      }
    )
  }
));
pr.displayName = zt.displayName;
const Ia = hn, ma = fn, va = gn, mr = T(({ className: e, sideOffset: r = 4, ...t }, o) => /* @__PURE__ */ n.jsx(xn, { children: /* @__PURE__ */ n.jsx("div", { className: Ct, children: /* @__PURE__ */ n.jsx(
  Wt,
  {
    ref: o,
    className: I(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: r,
    ...t
  }
) }) }));
mr.displayName = Wt.displayName;
const he = {
  // UI Labels
  addFilter: "",
  clearFilters: "Clear",
  searchFields: "Search fields...",
  noFieldsFound: "No fields found.",
  noResultsFound: "No results found.",
  loading: "Loading...",
  loadMore: "Load more",
  select: "Select...",
  true: "True",
  false: "False",
  min: "Min",
  max: "Max",
  to: "to",
  typeAndPressEnter: "Type and press Enter to add tag",
  selected: "selected",
  selectedCount: "selected",
  percent: "%",
  defaultCurrency: "$",
  defaultColor: "currentColor",
  addFilterTitle: "",
  // Operators
  operators: {
    is: "is",
    isNot: "is not",
    isAnyOf: "is any of",
    isNotAnyOf: "is not any of",
    includesAll: "includes all",
    excludesAll: "excludes all",
    before: "before",
    after: "after",
    between: "between",
    notBetween: "not between",
    contains: "contains",
    notContains: "does not contain",
    startsWith: "starts with",
    endsWith: "ends with",
    isExactly: "is exactly",
    equals: "equals",
    notEquals: "not equals",
    greaterThan: "greater than",
    lessThan: "less than",
    overlaps: "overlaps",
    includes: "includes",
    excludes: "excludes",
    includesAllOf: "includes all of",
    includesAnyOf: "includes any of",
    empty: "is empty",
    notEmpty: "is not empty"
  },
  // Placeholders
  placeholders: {
    enterField: (e) => `Enter ${e}...`,
    selectField: "Select...",
    searchField: (e) => `Search ${e.toLowerCase()}...`,
    enterKey: "Enter key...",
    enterValue: "Enter value..."
  },
  // Helper functions
  helpers: {
    formatOperator: (e) => e.replace(/_/g, " ")
  },
  // Validation
  validation: {
    invalidEmail: "Invalid email format",
    invalidUrl: "Invalid URL format",
    invalidTel: "Invalid phone format",
    invalid: "Invalid input format"
  }
}, vr = Le({
  variant: "outline",
  size: "md",
  radius: "md",
  i18n: he,
  cursorPointer: !0,
  className: void 0,
  showAddButton: !0,
  addButtonText: void 0,
  addButtonIcon: void 0,
  addButtonClassName: void 0,
  addButton: void 0,
  showSearchInput: !0,
  trigger: void 0,
  allowMultiple: !0
}), pe = () => $e(vr), tt = 200, ha = Y(
  [
    "relative flex shrink-0 items-center text-foreground outline-hidden transition",
    "has-[[data-slot=filters-input]:focus-visible]:ring-focus-ring/30",
    "has-[[data-slot=filters-input]:focus-visible]:border-focus-ring",
    "has-[[data-slot=filters-input]:focus-visible]:outline-hidden",
    "has-[[data-slot=filters-input]:focus-visible]:ring-[3px]",
    "has-[[data-slot=filters-input]:focus-visible]:z-1",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-solid",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive/60",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/10",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/20"
  ],
  {
    variants: {
      variant: {
        solid: "border-0 bg-secondary",
        outline: "border border-border bg-background"
      },
      size: {
        lg: "h-10 px-2.5 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        md: "h-(--control-height) px-2 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        sm: "h-8 px-2 text-xs has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), fa = Y(
  [
    "inline-flex shrink-0 items-center justify-center text-muted-foreground transition hover:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-s-0 border-border hover:bg-secondary"
      },
      size: {
        lg: "size-10 [&_svg:not([class*=size-])]:size-4",
        md: "size-(--control-height) [&_svg:not([class*=size-])]:size-3.5",
        sm: "size-8 [&_svg:not([class*=size-])]:size-3"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      },
      radius: {
        md: "rounded-e-md",
        full: "rounded-e-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "md",
      cursorPointer: !0
    }
  }
), xt = Y(
  [
    "inline-flex shrink-0 items-center justify-center text-foreground transition",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "border border-input hover:bg-secondary/60",
        outline: "border border-border hover:bg-accent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-1.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-md",
        full: "rounded-full"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), ga = Y(
  [
    "relative flex shrink-0 items-center whitespace-nowrap text-muted-foreground transition hover:text-foreground focus-visible:z-1 data-[state=open]:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border bg-background hover:bg-secondary data-[state=open]:bg-secondary [&+[data-slot=filters-remove]]:border-s"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm",
        md: "h-(--control-height) gap-0.5 px-3 text-sm",
        sm: "h-8 gap-1 px-2.5 text-xs"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), xa = Y(
  [
    "flex shrink-0 items-center gap-1.5 px-1.5 py-1 text-foreground",
    "[&_svg:not([class*=size-])]:size-4"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-s-md",
        full: "rounded-s-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md"
    }
  }
), Pe = Y(
  [
    "relative flex min-w-0 shrink items-center gap-1 text-foreground transition focus-visible:z-1",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-border bg-background hover:bg-secondary has-[[data-slot=switch]]:hover:bg-transparent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      cursorPointer: {
        true: "cursor-pointer has-[[data-slot=switch]]:cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), bt = Y("flex shrink-0 items-center justify-center text-foreground", {
  variants: {
    variant: {
      solid: "",
      outline: ""
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), Oe = Y("flex shrink-0 items-center text-muted-foreground", {
  variants: {
    variant: {
      solid: "bg-secondary",
      outline: "border border-x-0 border-border bg-background"
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), ba = Y("relative flex flex-wrap items-center", {
  variants: {
    variant: {
      solid: "gap-2",
      outline: ""
    },
    size: {
      sm: "gap-1.5",
      md: "gap-2.5",
      lg: "gap-3.5"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), ya = Y("flex max-w-[calc(100vw-32px)] items-center", {
  variants: {
    variant: {
      solid: "gap-px",
      outline: ""
    }
  },
  defaultVariants: {
    variant: "outline"
  }
});
function K({
  field: e,
  onChange: r,
  onBlur: t,
  onKeyDown: o,
  onInputChange: a,
  className: s,
  ...i
}) {
  const c = pe(), [u, d] = H(!0), [l, f] = H(""), g = (j, S) => !S || !j ? !0 : new RegExp(S).test(j), x = (j, S = !1) => {
    if ((j === "text" || j === "number") && S)
      return c.i18n.validation.invalid;
    switch (j) {
      case "email":
        return c.i18n.validation.invalidEmail;
      case "url":
        return c.i18n.validation.invalidUrl;
      case "tel":
        return c.i18n.validation.invalidTel;
      default:
        return c.i18n.validation.invalid;
    }
  }, m = (j) => {
    r == null || r(j);
  }, y = (j) => {
    const S = j.target.value, O = (e == null ? void 0 : e.pattern) || i.pattern;
    if (S && O) {
      let A = !0;
      e != null && e.validation ? A = e.validation(S) : A = g(S, O), d(A);
      const $ = !!(e != null && e.pattern || i.pattern);
      f(A ? "" : x((e == null ? void 0 : e.type) || "", $));
    } else
      d(!0), f("");
    a && a(j), t == null || t(j);
  }, b = (j) => {
    if (!u && !["Tab", "Escape", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(j.key) && (d(!0), f("")), j.key === "Enter" && a) {
      const S = {
        ...j,
        target: j.target,
        currentTarget: j.currentTarget
      };
      a(S);
    }
    o == null || o(j);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: I("w-36", ha({ variant: c.variant, size: c.size }), s),
      "data-slot": "filters-input-wrapper",
      children: [
        (e == null ? void 0 : e.prefix) && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: bt({ variant: c.variant, size: c.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "flex w-full items-stretch", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              "aria-describedby": !u && l ? `${(e == null ? void 0 : e.key) || "input"}-error` : void 0,
              "aria-invalid": !u,
              autoComplete: "off",
              className: "w-full bg-transparent outline-hidden dark:!bg-transparent",
              "data-form-type": "other",
              "data-lpignore": "true",
              "data-slot": "filters-input",
              "data-1p-ignore": !0,
              onBlur: y,
              onChange: m,
              onKeyDown: b,
              ...i
            }
          ),
          !u && l && /* @__PURE__ */ n.jsxs(ma, { children: [
            /* @__PURE__ */ n.jsx(va, { asChild: !0, children: /* @__PURE__ */ n.jsx("div", { className: "absolute top-1/2 right-2 flex -translate-y-1/2 items-center", children: /* @__PURE__ */ n.jsx($r, { className: "size-3.5 text-destructive" }) }) }),
            /* @__PURE__ */ n.jsx(mr, { children: /* @__PURE__ */ n.jsx("p", { className: "text-sm", children: l }) })
          ] })
        ] }),
        (e == null ? void 0 : e.suffix) && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: I(bt({ variant: c.variant, size: c.size })),
            "data-slot": "filters-suffix",
            children: e.suffix
          }
        )
      ]
    }
  );
}
function wa({ className: e, icon: r = /* @__PURE__ */ n.jsx(St, {}), ...t }) {
  const o = pe();
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      className: I(
        fa({
          variant: o.variant,
          size: o.size,
          cursorPointer: o.cursorPointer,
          radius: o.radius
        }),
        e
      ),
      "data-slot": "filters-remove",
      ...t,
      type: "button",
      children: r
    }
  );
}
const hr = (e) => "fields" in e && Array.isArray(e.fields), fr = (e) => !!(e.group && e.fields), gr = (e) => e.reduce((r, t) => hr(t) ? [...r, ...t.fields] : fr(t) ? [...r, ...t.fields] : [...r, t], []), ja = (e) => gr(e).reduce(
  (t, o) => (o.key && (t[o.key] = o), t),
  {}
), xr = (e) => ({
  select: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  multiselect: [
    { value: "is_any_of", label: e.operators.isAnyOf },
    { value: "is_not_any_of", label: e.operators.isNotAnyOf },
    { value: "includes_all", label: e.operators.includesAll },
    { value: "excludes_all", label: e.operators.excludesAll },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  date: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  daterange: [
    { value: "between", label: e.operators.between },
    { value: "not_between", label: e.operators.notBetween },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  text: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  number: [
    { value: "equals", label: e.operators.equals },
    { value: "not_equals", label: e.operators.notEquals },
    { value: "greater_than", label: e.operators.greaterThan },
    { value: "less_than", label: e.operators.lessThan },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  numberrange: [
    { value: "between", label: e.operators.between },
    { value: "overlaps", label: e.operators.overlaps },
    { value: "contains", label: e.operators.contains },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  boolean: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  email: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  url: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  tel: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  time: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  datetime: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ]
});
xr(he);
const Ca = (e, r, t) => {
  if (e.operators)
    return e.operators;
  const o = xr(t);
  let a = e.type || "select";
  return a === "select" && r.length > 1 && (a = "multiselect"), a === "multiselect" || e.type === "multiselect" ? o.multiselect : o[a] || o.select;
};
function Na({ field: e, operator: r, values: t, onChange: o }) {
  var a;
  const s = pe(), i = Ca(e, t, s.i18n), c = ((a = i.find((u) => u.value === r)) == null ? void 0 : a.label) || s.i18n.helpers.formatOperator(r);
  return e.hideOperatorSelect ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center self-stretch border border-r-0 px-3 text-sm whitespace-nowrap text-muted-foreground", children: c }) : /* @__PURE__ */ n.jsxs(Dr, { children: [
    /* @__PURE__ */ n.jsx(Vr, { className: ga({ variant: s.variant, size: s.size }), children: c }),
    /* @__PURE__ */ n.jsx(Mr, { align: "start", className: "w-fit min-w-fit", children: i.map((u) => /* @__PURE__ */ n.jsxs(
      Hr,
      {
        className: "flex items-center justify-between",
        onClick: () => o(u.value),
        children: [
          /* @__PURE__ */ n.jsx("span", { children: u.label }),
          /* @__PURE__ */ n.jsx(ke, { className: `ms-auto text-primary ${u.value === r ? "opacity-100" : "opacity-0"}` })
        ]
      },
      u.value
    )) })
  ] });
}
function yt({
  searchable: e,
  label: r,
  searchInput: t,
  isSearching: o,
  className: a,
  onSearchChange: s
}) {
  const i = pe();
  return e ? /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ n.jsx(
      ut,
      {
        className: a,
        placeholder: i.i18n.placeholders.searchField(r || ""),
        value: t,
        onValueChange: s
      }
    ),
    o && /* @__PURE__ */ n.jsx(Xe, { className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-muted-foreground" })
  ] }) : null;
}
function Pa(e, r) {
  const t = r.trim().toLowerCase();
  return t ? e.filter((o) => {
    var a;
    return o.label.toLowerCase().includes(t) || ((a = o.detail) == null ? void 0 : a.toLowerCase().includes(t));
  }) : e;
}
function wt({
  contextLabel: e,
  selectedOptions: r,
  unselectedOptions: t,
  isInitialLoad: o,
  isLoadingMore: a,
  hasMore: s,
  onLoadMore: i,
  onSelectSelected: c,
  onSelectUnselected: u
}) {
  const d = pe();
  return /* @__PURE__ */ n.jsxs(dt, { className: "outline-hidden", children: [
    o ? /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ n.jsx(Xe, { className: "mr-2 size-4 animate-spin" }),
      d.i18n.loading
    ] }) : /* @__PURE__ */ n.jsx(pt, { children: d.i18n.noResultsFound }),
    r.length > 0 && /* @__PURE__ */ n.jsx(ye, { heading: e, children: r.map((l) => /* @__PURE__ */ n.jsxs(
      ce,
      {
        className: "group flex items-center gap-2",
        onSelect: () => c(l),
        children: [
          l.icon && l.icon,
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
            /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: l.label, children: l.label }),
            l.detail && /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: l.detail, children: l.detail })
          ] }),
          /* @__PURE__ */ n.jsx(ke, { className: "ms-auto text-primary" })
        ]
      },
      String(l.value)
    )) }),
    t.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      r.length > 0 && /* @__PURE__ */ n.jsx(fe, {}),
      /* @__PURE__ */ n.jsx(ye, { children: t.map((l) => /* @__PURE__ */ n.jsxs(
        ce,
        {
          className: "group flex items-center gap-2",
          value: l.label + (l.detail ? ` - ${l.detail}` : ""),
          onSelect: () => u(l),
          children: [
            l.icon && l.icon,
            /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: l.label, children: l.label }),
              l.detail && /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: l.detail, children: l.detail })
            ] }),
            /* @__PURE__ */ n.jsx(ke, { className: "ms-auto text-primary opacity-0" })
          ]
        },
        String(l.value)
      )) })
    ] }),
    s && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      (r.length > 0 || t.length > 0) && /* @__PURE__ */ n.jsx(fe, {}),
      /* @__PURE__ */ n.jsx("div", { className: "p-1.5", children: /* @__PURE__ */ n.jsxs(
        "button",
        {
          className: "flex w-full items-center justify-center rounded-xs px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
          disabled: a,
          type: "button",
          onClick: i,
          children: [
            a && /* @__PURE__ */ n.jsx(Xe, { className: "mr-2 size-4 animate-spin" }),
            a ? d.i18n.loading : d.i18n.loadMore
          ]
        }
      ) })
    ] })
  ] });
}
function br({
  field: e,
  values: r,
  onChange: t,
  onClose: o,
  inline: a = !1,
  searchInput: s,
  onSearchChange: i,
  shouldClientFilter: c,
  isInitialLoad: u,
  isSearching: d,
  isLoadingMore: l,
  hasMore: f,
  onLoadMore: g
}) {
  var x;
  const [m, y] = H(!1), [b, j] = H([]), S = pe(), O = e.type === "multiselect" || r.length > 1, A = U(() => e.value ?? r, [e.value, r]);
  V(() => {
    m && e.searchable !== !1 && setTimeout(() => {
      const k = document.querySelector("[cmdk-input]");
      k && k.focus();
    }, 0);
  }, [m, e.searchable]);
  const $ = U(
    () => {
      var k;
      return ((k = e.options) == null ? void 0 : k.filter((R) => A.includes(R.value))) || [];
    },
    [e.options, A]
  );
  V(() => {
    if (A.length === 0) {
      j([]);
      return;
    }
    $.length > 0 && j((k) => {
      const R = [];
      for (const B of A) {
        const W = $.find((Z) => Z.value === B) ?? k.find((Z) => Z.value === B);
        W && R.push(W);
      }
      return R;
    });
  }, [$, A]);
  const C = U(() => A.length === 0 ? [] : b.length > 0 ? b : $, [b, A.length, $]), L = U(() => Pa(C, s), [s, C]), ne = ((x = e.options) == null ? void 0 : x.filter((k) => !A.includes(k.value))) || [], ee = (k) => {
    i(k);
  }, X = () => {
    y(!1), setTimeout(() => i(""), tt), o == null || o();
  };
  return a ? /* @__PURE__ */ n.jsx("div", { className: "w-full", children: /* @__PURE__ */ n.jsxs(Re, { shouldFilter: c, children: [
    /* @__PURE__ */ n.jsx(
      yt,
      {
        className: "h-(--control-height) pr-8 text-sm",
        isSearching: d,
        label: e.label,
        searchable: e.searchable !== !1,
        searchInput: s,
        onSearchChange: ee
      }
    ),
    /* @__PURE__ */ n.jsx(
      wt,
      {
        contextLabel: e.label || "Selected",
        hasMore: f,
        isInitialLoad: u,
        isLoadingMore: l,
        selectedOptions: L,
        unselectedOptions: ne,
        onLoadMore: g,
        onSelectSelected: (k) => {
          if (O) {
            const R = A.filter((B) => B !== k.value);
            e.onValueChange ? e.onValueChange(R) : t(R);
          } else
            e.onValueChange ? e.onValueChange([]) : t([]);
        },
        onSelectUnselected: (k) => {
          if (O) {
            const R = [...A, k.value];
            if (e.maxSelections && R.length > e.maxSelections)
              return;
            e.onValueChange ? e.onValueChange(R) : t(R), e.autoCloseOnSelect && (o == null || o());
          } else
            e.onValueChange ? e.onValueChange([k.value]) : t([k.value]), o == null || o();
        }
      }
    )
  ] }) }) : /* @__PURE__ */ n.jsxs(
    mt,
    {
      open: m,
      onOpenChange: (k) => {
        y(k), k || setTimeout(() => i(""), tt);
      },
      children: [
        /* @__PURE__ */ n.jsx(
          vt,
          {
            className: I(Pe({
              variant: S.variant,
              size: S.size,
              cursorPointer: S.cursorPointer
            }), e.triggerClassName ?? "max-w-60"),
            children: /* @__PURE__ */ n.jsx("div", { className: "flex min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(r, e.options || []) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              C.length > 0 && C.some((k) => k.icon) && /* @__PURE__ */ n.jsx("div", { className: I("-space-x-0.5 flex shrink-0 items-center", e.selectedOptionsClassName), children: C.slice(0, 3).map((k) => /* @__PURE__ */ n.jsx("div", { children: k.icon }, String(k.value))) }),
              C.length === 1 ? /* @__PURE__ */ n.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: C[0].detail ? `${C[0].label} - ${C[0].detail}` : C[0].label, children: C[0].label }) : C.length > 1 ? `${C.length} ${S.i18n.selectedCount}` : S.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ke,
          {
            align: "start",
            className: I(
              "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
              e.className || "w-[200px]"
            ),
            children: /* @__PURE__ */ n.jsxs(Re, { shouldFilter: c, children: [
              /* @__PURE__ */ n.jsx(
                yt,
                {
                  className: "h-(--control-height) pr-8 text-sm",
                  isSearching: d,
                  label: e.label,
                  searchable: e.searchable !== !1,
                  searchInput: s,
                  onSearchChange: ee
                }
              ),
              /* @__PURE__ */ n.jsx(
                wt,
                {
                  hasMore: f,
                  isInitialLoad: u,
                  isLoadingMore: l,
                  selectedOptions: L,
                  unselectedOptions: ne,
                  onLoadMore: g,
                  onSelectSelected: (k) => {
                    t(O ? r.filter((R) => R !== k.value) : []), O || (y(!1), X());
                  },
                  onSelectUnselected: (k) => {
                    if (O) {
                      const R = [...r, k.value];
                      if (e.maxSelections && R.length > e.maxSelections)
                        return;
                      t(R), e.autoCloseOnSelect && X();
                    } else
                      t([k.value]), y(!1), X();
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function Sa({
  field: e,
  values: r,
  onChange: t,
  onClose: o,
  inline: a = !1,
  searchInput: s,
  onSearchChange: i
}) {
  const c = U(() => e.value ?? r, [e.value, r]), u = e.valueSource.useOptions({
    query: s,
    selectedValues: c
  }), d = U(() => ({
    ...e,
    options: u.options
  }), [e, u.options]);
  return /* @__PURE__ */ n.jsx(
    br,
    {
      field: d,
      hasMore: u.hasMore,
      inline: a,
      isInitialLoad: u.isInitialLoad,
      isLoadingMore: u.isLoadingMore,
      isSearching: u.isSearching,
      searchInput: s,
      shouldClientFilter: !1,
      values: r,
      onChange: t,
      onClose: o,
      onLoadMore: u.loadMore,
      onSearchChange: i
    }
  );
}
function yr({
  field: e,
  values: r,
  onChange: t,
  onClose: o,
  inline: a = !1
}) {
  var s;
  const [i, c] = H(""), u = ((s = e.options) == null ? void 0 : s.length) ?? 0;
  return e.valueSource ? /* @__PURE__ */ n.jsx(
    Sa,
    {
      field: e,
      inline: a,
      searchInput: i,
      values: r,
      onChange: t,
      onClose: o,
      onSearchChange: c
    },
    e.valueSource.id
  ) : /* @__PURE__ */ n.jsx(
    br,
    {
      field: e,
      hasMore: !1,
      inline: a,
      isInitialLoad: !!e.isLoading && u === 0,
      isLoadingMore: !1,
      isSearching: !!e.isLoading && u > 0,
      searchInput: i,
      shouldClientFilter: !0,
      values: r,
      onChange: t,
      onClose: o,
      onLoadMore: () => {
      },
      onSearchChange: c
    }
  );
}
function _a({ field: e, values: r, onChange: t, operator: o }) {
  var a, s;
  const [i, c] = H(!1), [u, d] = H(""), l = pe();
  if (V(() => {
    i && e.searchable !== !1 && setTimeout(() => {
      const m = document.querySelector("[cmdk-input]");
      m && m.focus();
    }, 0);
  }, [i, e.searchable]), o === "empty" || o === "not_empty")
    return null;
  if (e.customRenderer)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: Pe({
          variant: l.variant,
          size: l.size,
          cursorPointer: l.cursorPointer
        }),
        children: e.customRenderer({ field: e, values: r, onChange: t, operator: o })
      }
    );
  if (e.type === "boolean") {
    const m = r[0] === !0, y = e.onLabel || l.i18n.true, b = e.offLabel || l.i18n.false;
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: Pe({
          variant: l.variant,
          size: l.size,
          cursorPointer: l.cursorPointer
        }),
        children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n.jsx(pr, { checked: m, size: "sm", onCheckedChange: (j) => t([j]) }),
          e.onLabel && e.offLabel && /* @__PURE__ */ n.jsx("span", { className: "text-xs text-muted-foreground", children: m ? y : b })
        ] })
      }
    );
  }
  if (e.type === "time") {
    if (o === "between") {
      const m = r[0] || "", y = r[1] || "";
      return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ n.jsx(
          K,
          {
            className: e.className,
            field: e,
            type: "time",
            value: m,
            onChange: (b) => t([b.target.value, y]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: Oe({ variant: l.variant, size: l.size }),
            "data-slot": "filters-between",
            children: l.i18n.to
          }
        ),
        /* @__PURE__ */ n.jsx(
          K,
          {
            className: e.className,
            field: e,
            type: "time",
            value: y,
            onChange: (b) => t([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ n.jsx(
      K,
      {
        className: e.className,
        field: e,
        type: "time",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "datetime") {
    if (o === "between") {
      const m = r[0] || "", y = r[1] || "";
      return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ n.jsx(
          K,
          {
            className: I("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: m,
            onChange: (b) => t([b.target.value, y]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: Oe({ variant: l.variant, size: l.size }),
            "data-slot": "filters-between",
            children: l.i18n.to
          }
        ),
        /* @__PURE__ */ n.jsx(
          K,
          {
            className: I("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: y,
            onChange: (b) => t([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ n.jsx(
      K,
      {
        className: I("w-36 max-w-full", e.className),
        field: e,
        type: "datetime-local",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (["email", "url", "tel"].includes(e.type || "")) {
    const m = () => {
      switch (e.type) {
        case "email":
          return "email";
        case "url":
          return "url";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, y = () => {
      switch (e.type) {
        case "email":
          return "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
        case "url":
          return "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$";
        case "tel":
          return "^[\\+]?[1-9][\\d]{0,15}$";
        default:
          return;
      }
    };
    return /* @__PURE__ */ n.jsx(
      K,
      {
        className: e.className,
        field: e,
        pattern: e.pattern || y(),
        placeholder: e.placeholder || l.i18n.placeholders.enterField(e.type || "text"),
        type: m(),
        value: r[0] || "",
        onChange: (b) => t([b.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "daterange") {
    const m = r[0] || "", y = r[1] || "";
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: Pe({
          variant: l.variant,
          size: l.size,
          cursorPointer: l.cursorPointer
        }),
        children: [
          /* @__PURE__ */ n.jsx(
            K,
            {
              className: I("w-24 max-w-full", e.className),
              field: e,
              type: "date",
              value: m,
              onChange: (b) => t([b.target.value, y]),
              onInputChange: e.onInputChange
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: Oe({ variant: l.variant, size: l.size }),
              "data-slot": "filters-between",
              children: l.i18n.to
            }
          ),
          /* @__PURE__ */ n.jsx(
            K,
            {
              className: I("w-24 max-w-full", e.className),
              field: e,
              type: "date",
              value: y,
              onChange: (b) => t([m, b.target.value]),
              onInputChange: e.onInputChange
            }
          )
        ]
      }
    );
  }
  if (e.type === "text" || e.type === "number") {
    if (e.type === "number" && o === "between") {
      const m = r[0] || "", y = r[1] || "";
      return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ n.jsx(
          K,
          {
            className: I("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: l.i18n.min,
            step: e.step,
            type: "number",
            value: m,
            onChange: (b) => t([b.target.value, y]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: Oe({ variant: l.variant, size: l.size }),
            "data-slot": "filters-between",
            children: l.i18n.to
          }
        ),
        /* @__PURE__ */ n.jsx(
          K,
          {
            className: I("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: l.i18n.max,
            step: e.step,
            type: "number",
            value: y,
            onChange: (b) => t([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ n.jsx("div", { className: "flex items-center", "data-slot": "filters-item", children: /* @__PURE__ */ n.jsx(
      K,
      {
        className: I("w-36", e.className),
        field: e,
        max: e.type === "number" ? e.max : void 0,
        min: e.type === "number" ? e.min : void 0,
        pattern: e.pattern,
        placeholder: e.placeholder,
        step: e.type === "number" ? e.step : void 0,
        type: e.type === "number" ? "number" : "text",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    ) });
  }
  if (e.type === "date")
    return /* @__PURE__ */ n.jsx(
      K,
      {
        className: I("w-16", e.className),
        field: e,
        type: "date",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  if (e.type === "select" || e.type === "multiselect")
    return /* @__PURE__ */ n.jsx(yr, { field: e, values: r, onChange: t });
  const f = r.length > 1, g = ((a = e.options) == null ? void 0 : a.filter((m) => r.includes(m.value))) || [], x = ((s = e.options) == null ? void 0 : s.filter((m) => !r.includes(m.value))) || [];
  return /* @__PURE__ */ n.jsxs(
    mt,
    {
      open: i,
      onOpenChange: (m) => {
        c(m), m || setTimeout(() => d(""), tt);
      },
      children: [
        /* @__PURE__ */ n.jsx(
          vt,
          {
            className: Pe({
              variant: l.variant,
              size: l.size,
              cursorPointer: l.cursorPointer
            }),
            children: /* @__PURE__ */ n.jsx("div", { className: "flex w-full min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(r, e.options || []) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              g.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "flex shrink-0 items-center -space-x-1.5", children: g.slice(0, 3).map((m) => /* @__PURE__ */ n.jsx("div", { children: m.icon }, String(m.value))) }),
              g.length === 1 ? /* @__PURE__ */ n.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: g[0].detail ? `${g[0].label} - ${g[0].detail}` : g[0].label, children: g[0].label }) : g.length > 1 ? `${g.length} ${l.i18n.selectedCount}` : l.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ n.jsx(Ke, { className: I("w-36 p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!", e.popoverContentClassName), children: /* @__PURE__ */ n.jsxs(Re, { children: [
          e.searchable !== !1 && /* @__PURE__ */ n.jsx(
            ut,
            {
              className: "h-(--control-height) text-sm",
              placeholder: l.i18n.placeholders.searchField(e.label || ""),
              value: u,
              onValueChange: d
            }
          ),
          /* @__PURE__ */ n.jsxs(dt, { className: "outline-hidden", children: [
            /* @__PURE__ */ n.jsx(pt, { children: l.i18n.noResultsFound }),
            g.length > 0 && /* @__PURE__ */ n.jsx(ye, { children: g.map((m) => /* @__PURE__ */ n.jsxs(
              ce,
              {
                className: "group flex items-center gap-2",
                onSelect: () => {
                  t(f ? r.filter((y) => y !== m.value) : []), f || c(!1);
                },
                children: [
                  m.icon && m.icon,
                  /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", children: m.label }),
                  /* @__PURE__ */ n.jsx(ke, { className: "ms-auto text-primary" })
                ]
              },
              String(m.value)
            )) }),
            x.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              g.length > 0 && /* @__PURE__ */ n.jsx(fe, {}),
              /* @__PURE__ */ n.jsx(ye, { children: x.map((m) => /* @__PURE__ */ n.jsxs(
                ce,
                {
                  className: "group flex items-center gap-2",
                  value: m.label,
                  onSelect: () => {
                    if (f) {
                      const y = [...r, m.value];
                      if (e.maxSelections && y.length > e.maxSelections)
                        return;
                      t(y);
                    } else
                      t([m.value]), c(!1);
                  },
                  children: [
                    m.icon && m.icon,
                    /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", children: m.label }),
                    /* @__PURE__ */ n.jsx(ke, { className: "ms-auto text-primary opacity-0" })
                  ]
                },
                String(m.value)
              )) })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function Oa({
  filters: e,
  fields: r,
  onChange: t,
  className: o,
  showAddButton: a = !0,
  addButtonText: s,
  addButtonIcon: i,
  addButtonClassName: c,
  addButton: u,
  showClearButton: d = !1,
  clearButtonText: l,
  clearButtonIcon: f,
  clearButtonClassName: g,
  clearButton: x,
  onClear: m,
  variant: y = "outline",
  size: b = "md",
  radius: j = "md",
  i18n: S,
  showSearchInput: O = !0,
  cursorPointer: A = !0,
  trigger: $,
  allowMultiple: C = !0,
  popoverContentClassName: L,
  popoverAlign: ne = "start",
  keyboardShortcut: ee,
  onActiveFieldChange: X
}) {
  const [k, R] = H(!1), [B, W] = H(null), [Z, J] = H([]);
  V(() => {
    X == null || X(B);
  }, [B, X]), V(() => {
    if (!ee)
      return;
    const h = (v) => {
      const P = v.target;
      P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable || v.key.toLowerCase() === ee.toLowerCase() && !v.metaKey && !v.ctrlKey && !v.altKey && (v.preventDefault(), R((_) => !_));
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [ee]), V(() => {
    k && setTimeout(() => {
      const h = document.querySelector("[cmdk-input]");
      if (h)
        h.focus();
      else {
        const v = document.querySelector("[cmdk-root]");
        v && v.focus();
      }
    }, 0);
  }, [k, B, O]);
  const Q = {
    ...he,
    ...S,
    operators: {
      ...he.operators,
      ...S == null ? void 0 : S.operators
    },
    placeholders: {
      ...he.placeholders,
      ...S == null ? void 0 : S.placeholders
    },
    validation: {
      ...he.validation,
      ...S == null ? void 0 : S.validation
    }
  }, ie = U(() => ja(r), [r]), te = B ? ie[B] : null, Ce = M(
    (h, v) => {
      t(
        e.map((P) => {
          if (P.id === h) {
            const _ = { ...P, ...v };
            return (v.operator === "empty" || v.operator === "not_empty") && (_.values = []), _;
          }
          return P;
        })
      );
    },
    [e, t]
  ), Ie = M(
    (h) => {
      t(e.filter((v) => v.id !== h));
    },
    [e, t]
  ), p = M(() => {
    R(!1), W(null), J([]);
  }, []), N = M(
    (h) => {
      const v = ie[h];
      if (!(v != null && v.key))
        return;
      if (v.type === "select" || v.type === "multiselect") {
        if (W(v.key), !C && v.type === "multiselect") {
          const q = e.find((re) => re.field === h);
          J(q ? q.values : []);
        } else
          J([]);
        return;
      }
      const P = v.defaultOperator || (v.type === "daterange" || v.type === "numberrange" ? "between" : "is");
      let _ = [];
      v.defaultValue !== void 0 ? _ = [v.defaultValue] : ["text", "number", "date", "email", "url", "tel", "time", "datetime"].includes(v.type || "") ? _ = [""] : v.type === "daterange" ? _ = ["", ""] : v.type === "numberrange" ? _ = [v.min || 0, v.max || 100] : v.type === "boolean" && (_ = [!1]);
      const F = jt(h, P, _);
      t([...e, F]), p();
    },
    [C, p, ie, e, t]
  ), E = M(
    (h, v, P = !0) => {
      if (!h.key)
        return;
      if (!C) {
        const q = e.find((re) => re.field === h.key);
        if (q) {
          t(e.map((re) => re.id === q.id ? { ...re, values: v } : re)), J(v), P && p();
          return;
        }
      }
      const _ = h.defaultOperator || (h.type === "multiselect" ? "is_any_of" : "is"), F = jt(h.key, _, v);
      t([...e, F]), P ? p() : J(v);
    },
    [C, p, e, t]
  ), w = U(() => gr(r).filter((v) => !v.key || v.type === "separator" ? !1 : C ? !0 : !e.some((P) => P.field === v.key)), [r, e, C]);
  return /* @__PURE__ */ n.jsx(
    vr.Provider,
    {
      value: {
        variant: y,
        size: b,
        radius: j,
        i18n: Q,
        cursorPointer: A,
        className: o,
        showAddButton: a,
        addButtonText: s,
        addButtonIcon: i,
        addButtonClassName: c,
        addButton: u,
        showSearchInput: O,
        trigger: $,
        allowMultiple: C
      },
      children: /* @__PURE__ */ n.jsxs("div", { className: I(
        ba({ variant: y, size: b }),
        e.length > 0 && "w-full",
        d && e.length > 0 && "sm:pr-24",
        o
      ), children: [
        e.map((h) => {
          const v = ie[h.field];
          return v ? /* @__PURE__ */ n.jsxs("div", { className: ya({ variant: y }), "data-slot": "filter-item", children: [
            /* @__PURE__ */ n.jsxs("div", { className: xa({ variant: y, size: b, radius: j }), children: [
              v.icon,
              v.label
            ] }),
            /* @__PURE__ */ n.jsx(
              Na,
              {
                field: v,
                operator: h.operator,
                values: h.values,
                onChange: (P) => Ce(h.id, { operator: P })
              }
            ),
            /* @__PURE__ */ n.jsx(
              _a,
              {
                field: v,
                operator: h.operator,
                values: h.values,
                onChange: (P) => Ce(h.id, { values: P })
              }
            ),
            /* @__PURE__ */ n.jsx(wa, { onClick: () => Ie(h.id) })
          ] }, h.id) : null;
        }),
        a && w.length > 0 && /* @__PURE__ */ n.jsxs(
          mt,
          {
            open: k,
            onOpenChange: (h) => {
              R(h), h || (W(null), J([]));
            },
            children: [
              /* @__PURE__ */ n.jsx(vt, { asChild: !0, children: u || /* @__PURE__ */ n.jsxs(
                "button",
                {
                  className: I(
                    xt({
                      variant: y,
                      size: b,
                      cursorPointer: A,
                      radius: j
                    }),
                    c
                  ),
                  title: Q.addFilterTitle,
                  type: "button",
                  children: [
                    i || /* @__PURE__ */ n.jsx(Rr, {}),
                    s || Q.addFilter
                  ]
                }
              ) }),
              /* @__PURE__ */ n.jsx(
                Ke,
                {
                  align: ne,
                  className: I(
                    "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
                    (te == null ? void 0 : te.className) || L || "w-[220px]"
                  ),
                  children: te ? (
                    // Show original select/multiselect rendering without back button
                    // SelectOptionsPopover renders its own Command component when inline={true}
                    /* @__PURE__ */ n.jsx(
                      yr,
                      {
                        field: te,
                        inline: !0,
                        values: Z,
                        onChange: (h) => {
                          const v = te.type === "select";
                          E(te, h, v);
                        },
                        onClose: p
                      }
                    )
                  ) : (
                    // Show field selection - needs Command wrapper for search/list
                    /* @__PURE__ */ n.jsxs(Re, { className: "outline-hidden", tabIndex: O ? void 0 : 0, children: [
                      O && /* @__PURE__ */ n.jsx(ut, { className: "h-(--control-height)", placeholder: Q.searchFields }),
                      /* @__PURE__ */ n.jsxs(dt, { className: "outline-hidden", children: [
                        /* @__PURE__ */ n.jsx(pt, { children: Q.noFieldsFound }),
                        r.map((h, v) => {
                          if (hr(h)) {
                            const _ = h.fields.filter((F) => F.type === "separator" || C ? !0 : !e.some((q) => q.field === F.key));
                            return _.length === 0 ? null : /* @__PURE__ */ n.jsx(ye, { heading: h.group || "Fields", children: _.map((F, q) => {
                              if (F.type === "separator") {
                                const re = F.key ?? `${h.group ?? `group-${v}`}-separator-${q}`;
                                return /* @__PURE__ */ n.jsx(fe, {}, re);
                              }
                              return /* @__PURE__ */ n.jsxs(
                                ce,
                                {
                                  className: "min-w-0",
                                  onSelect: () => F.key && N(F.key),
                                  children: [
                                    F.icon,
                                    /* @__PURE__ */ n.jsx("span", { className: "truncate", children: F.label })
                                  ]
                                },
                                F.key ?? `${h.group ?? `group-${v}`}-field-${q}`
                              );
                            }) }, h.group || `group-${v}`);
                          }
                          if (fr(h)) {
                            const _ = h.fields.filter((F) => F.type === "separator" || C ? !0 : !e.some((q) => q.field === F.key));
                            return _.length === 0 ? null : /* @__PURE__ */ n.jsx(ye, { heading: h.group || "Fields", children: _.map((F) => {
                              if (F.type === "separator") {
                                const q = F.key || `${h.group || `group-${v}`}-separator-${F.label || Math.random()}`;
                                return /* @__PURE__ */ n.jsx(fe, {}, q);
                              }
                              return /* @__PURE__ */ n.jsxs(ce, { className: "min-w-0", onSelect: () => F.key && N(F.key), children: [
                                F.icon,
                                /* @__PURE__ */ n.jsx("span", { className: "truncate", children: F.label })
                              ] }, F.key);
                            }) }, h.group || `group-${v}`);
                          }
                          const P = h;
                          if (P.type === "separator") {
                            const _ = P.key || `flat-separator-${P.label || v}`;
                            return /* @__PURE__ */ n.jsx(fe, {}, _);
                          }
                          return !C && e.some((_) => _.field === P.key) ? null : /* @__PURE__ */ n.jsxs(ce, { className: "min-w-0", onSelect: () => P.key && N(P.key), children: [
                            P.icon,
                            /* @__PURE__ */ n.jsx("span", { className: "truncate", children: P.label })
                          ] }, P.key);
                        })
                      ] })
                    ] })
                  )
                }
              )
            ]
          }
        ),
        d && e.length > 0 && (x || /* @__PURE__ */ n.jsxs(
          "button",
          {
            className: I(
              xt({
                variant: y,
                size: b,
                cursorPointer: A,
                radius: j
              }),
              "border-0 bg-transparent hover:bg-transparent hover:text-foreground",
              "sm:absolute sm:right-0 sm:top-0",
              g
            ),
            type: "button",
            onClick: () => {
              m ? m() : t([]);
            },
            children: [
              f || /* @__PURE__ */ n.jsx(St, {}),
              l || Q.clearFilters
            ]
          }
        ))
      ] })
    }
  );
}
const jt = (e, r, t = []) => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  field: e,
  operator: r || "is",
  values: t
});
export {
  Oa as F,
  Ia as T,
  Yr as V,
  ma as a,
  va as b,
  jt as c,
  mr as d,
  qr as u
};
//# sourceMappingURL=filters-BHEK26Rv.mjs.map
