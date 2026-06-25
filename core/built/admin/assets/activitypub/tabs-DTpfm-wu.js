import { aP as d, bp as Ut, a_ as r, ai as w, bx as Bt, aA as g, bL as h, bs as A, ah as K, aD as se, k as zt, aG as we, bm as $, aT as Xt, bO as re, bw as Yt, bk as j, al as Ht, X as Wt, V as qt, K as Zt, y as Jt, bl as Qt, m as en, aB as Ne, aI as tn, aL as nn, ag as on, aF as rn, w as an, az as C, ao as Ie, C as sn, bo as W, aC as cn, aK as ie } from "./index-sudOvKcY.js";
import { u as dn, R as De, I as Te, a as q, c as un } from "./index-D1EWoXrK.js";
var Z = "Tabs", [ln] = se(Z, [
  q
]), Pe = q(), [pn, ce] = ln(Z), Se = d(
  (e, n) => {
    const {
      __scopeTabs: t,
      value: o,
      onValueChange: a,
      defaultValue: s,
      orientation: c = "horizontal",
      dir: u,
      activationMode: p = "automatic",
      ...v
    } = e, f = dn(u), [i, m] = Ut({
      prop: o,
      onChange: a,
      defaultProp: s ?? "",
      caller: Z
    });
    return /* @__PURE__ */ r.jsx(
      pn,
      {
        scope: t,
        baseId: Bt(),
        value: i,
        onValueChange: m,
        orientation: c,
        dir: f,
        activationMode: p,
        children: /* @__PURE__ */ r.jsx(
          w.div,
          {
            dir: f,
            "data-orientation": c,
            ...v,
            ref: n
          }
        )
      }
    );
  }
);
Se.displayName = Z;
var Ee = "TabsList", je = d(
  (e, n) => {
    const { __scopeTabs: t, loop: o = !0, ...a } = e, s = ce(Ee, t), c = Pe(t);
    return /* @__PURE__ */ r.jsx(
      De,
      {
        asChild: !0,
        ...c,
        orientation: s.orientation,
        dir: s.dir,
        loop: o,
        children: /* @__PURE__ */ r.jsx(
          w.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...a,
            ref: n
          }
        )
      }
    );
  }
);
je.displayName = Ee;
var Ae = "TabsTrigger", Re = d(
  (e, n) => {
    const { __scopeTabs: t, value: o, disabled: a = !1, ...s } = e, c = ce(Ae, t), u = Pe(t), p = Fe(c.baseId, o), v = Le(c.baseId, o), f = o === c.value;
    return /* @__PURE__ */ r.jsx(
      Te,
      {
        asChild: !0,
        ...u,
        focusable: !a,
        active: f,
        children: /* @__PURE__ */ r.jsx(
          w.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": v,
            "data-state": f ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: p,
            ...s,
            ref: n,
            onMouseDown: g(e.onMouseDown, (i) => {
              !a && i.button === 0 && i.ctrlKey === !1 ? c.onValueChange(o) : i.preventDefault();
            }),
            onKeyDown: g(e.onKeyDown, (i) => {
              [" ", "Enter"].includes(i.key) && c.onValueChange(o);
            }),
            onFocus: g(e.onFocus, () => {
              const i = c.activationMode !== "manual";
              !f && !a && i && c.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Re.displayName = Ae;
var ke = "TabsContent", Oe = d(
  (e, n) => {
    const { __scopeTabs: t, value: o, forceMount: a, children: s, ...c } = e, u = ce(ke, t), p = Fe(u.baseId, o), v = Le(u.baseId, o), f = o === u.value, i = h(f);
    return A(() => {
      const m = requestAnimationFrame(() => i.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ r.jsx(K, { present: a || f, children: ({ present: m }) => /* @__PURE__ */ r.jsx(
      w.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": p,
        hidden: !m,
        id: v,
        tabIndex: 0,
        ...c,
        ref: n,
        style: {
          ...e.style,
          animationDuration: i.current ? "0s" : void 0
        },
        children: m && s
      }
    ) });
  }
);
Oe.displayName = ke;
function Fe(e, n) {
  return `${e}-trigger-${n}`;
}
function Le(e, n) {
  return `${e}-content-${n}`;
}
var Ge = Se, Ke = je, de = Re, $e = Oe, ae = ["Enter", " "], fn = ["ArrowDown", "PageUp", "Home"], Ve = ["ArrowUp", "PageDown", "End"], mn = [...fn, ...Ve], vn = {
  ltr: [...ae, "ArrowRight"],
  rtl: [...ae, "ArrowLeft"]
}, gn = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, J = "Menu", [L, xn, hn] = un(J), [I, Ue] = se(J, [
  hn,
  we,
  q
]), ue = we(), Be = q(), [Go, D] = I(J), [Ko, V] = I(J), bn = "MenuAnchor", le = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, a = ue(t);
    return /* @__PURE__ */ r.jsx(zt, { ...a, ...o, ref: n });
  }
);
le.displayName = bn;
var pe = "MenuPortal", [Mn, ze] = I(pe, {
  forceMount: void 0
}), Xe = (e) => {
  const { __scopeMenu: n, forceMount: t, children: o, container: a } = e, s = D(pe, n);
  return /* @__PURE__ */ r.jsx(Mn, { scope: n, forceMount: t, children: /* @__PURE__ */ r.jsx(K, { present: t || s.open, children: /* @__PURE__ */ r.jsx(on, { asChild: !0, container: a, children: o }) }) });
};
Xe.displayName = pe;
var _ = "MenuContent", [_n, fe] = I(_), Ye = d(
  (e, n) => {
    const t = ze(_, e.__scopeMenu), { forceMount: o = t.forceMount, ...a } = e, s = D(_, e.__scopeMenu), c = V(_, e.__scopeMenu);
    return /* @__PURE__ */ r.jsx(L.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(K, { present: o || s.open, children: /* @__PURE__ */ r.jsx(L.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ r.jsx(Cn, { ...a, ref: n }) : /* @__PURE__ */ r.jsx(yn, { ...a, ref: n }) }) }) });
  }
), Cn = d(
  (e, n) => {
    const t = D(_, e.__scopeMenu), o = h(null), a = $(n, o);
    return A(() => {
      const s = o.current;
      if (s) return Xt(s);
    }, []), /* @__PURE__ */ r.jsx(
      me,
      {
        ...e,
        ref: a,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: g(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), yn = d((e, n) => {
  const t = D(_, e.__scopeMenu);
  return /* @__PURE__ */ r.jsx(
    me,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), wn = tn("MenuContent.ScrollLock"), me = d(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: o = !1,
      trapFocus: a,
      onOpenAutoFocus: s,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: u,
      onEntryFocus: p,
      onEscapeKeyDown: v,
      onPointerDownOutside: f,
      onFocusOutside: i,
      onInteractOutside: m,
      onDismiss: y,
      disableOutsideScroll: x,
      ...T
    } = e, R = D(_, t), P = V(_, t), kt = ue(t), Ot = Be(t), he = xn(t), [Ft, be] = re(null), B = h(null), Lt = $(n, B, R.onContentChange), z = h(0), X = h(""), Gt = h(0), ee = h(null), Me = h("right"), te = h(0), Kt = x ? Ht : Wt, $t = x ? { as: wn, allowPinchZoom: !0 } : void 0, Vt = (l) => {
      const E = X.current + l, N = he().filter((M) => !M.disabled), k = document.activeElement, ne = N.find((M) => M.ref.current === k)?.textValue, oe = N.map((M) => M.textValue), _e = On(oe, E, ne), O = N.find((M) => M.textValue === _e)?.ref.current;
      (function M(Ce) {
        X.current = Ce, window.clearTimeout(z.current), Ce !== "" && (z.current = window.setTimeout(() => M(""), 1e3));
      })(E), O && setTimeout(() => O.focus());
    };
    A(() => () => window.clearTimeout(z.current), []), Yt();
    const S = j((l) => Me.current === ee.current?.side && Ln(l, ee.current?.area), []);
    return /* @__PURE__ */ r.jsx(
      _n,
      {
        scope: t,
        searchRef: X,
        onItemEnter: j(
          (l) => {
            S(l) && l.preventDefault();
          },
          [S]
        ),
        onItemLeave: j(
          (l) => {
            S(l) || (B.current?.focus(), be(null));
          },
          [S]
        ),
        onTriggerLeave: j(
          (l) => {
            S(l) && l.preventDefault();
          },
          [S]
        ),
        pointerGraceTimerRef: Gt,
        onPointerGraceIntentChange: j((l) => {
          ee.current = l;
        }, []),
        children: /* @__PURE__ */ r.jsx(Kt, { ...$t, children: /* @__PURE__ */ r.jsx(
          qt,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: g(s, (l) => {
              l.preventDefault(), B.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ r.jsx(
              Zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onEscapeKeyDown: v,
                onPointerDownOutside: f,
                onFocusOutside: i,
                onInteractOutside: m,
                onDismiss: y,
                children: /* @__PURE__ */ r.jsx(
                  De,
                  {
                    asChild: !0,
                    ...Ot,
                    dir: P.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: Ft,
                    onCurrentTabStopIdChange: be,
                    onEntryFocus: g(p, (l) => {
                      P.isUsingKeyboardRef.current || l.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ r.jsx(
                      Jt,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": dt(R.open),
                        "data-radix-menu-content": "",
                        dir: P.dir,
                        ...kt,
                        ...T,
                        ref: Lt,
                        style: { outline: "none", ...T.style },
                        onKeyDown: g(T.onKeyDown, (l) => {
                          const N = l.target.closest("[data-radix-menu-content]") === l.currentTarget, k = l.ctrlKey || l.altKey || l.metaKey, ne = l.key.length === 1;
                          N && (l.key === "Tab" && l.preventDefault(), !k && ne && Vt(l.key));
                          const oe = B.current;
                          if (l.target !== oe || !mn.includes(l.key)) return;
                          l.preventDefault();
                          const O = he().filter((M) => !M.disabled).map((M) => M.ref.current);
                          Ve.includes(l.key) && O.reverse(), Rn(O);
                        }),
                        onBlur: g(e.onBlur, (l) => {
                          l.currentTarget.contains(l.target) || (window.clearTimeout(z.current), X.current = "");
                        }),
                        onPointerMove: g(
                          e.onPointerMove,
                          G((l) => {
                            const E = l.target, N = te.current !== l.clientX;
                            if (l.currentTarget.contains(E) && N) {
                              const k = l.clientX > te.current ? "right" : "left";
                              Me.current = k, te.current = l.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ye.displayName = _;
var Nn = "MenuGroup", ve = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(w.div, { role: "group", ...o, ref: n });
  }
);
ve.displayName = Nn;
var In = "MenuLabel", He = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(w.div, { ...o, ref: n });
  }
);
He.displayName = In;
var Y = "MenuItem", ye = "menu.itemSelect", Q = d(
  (e, n) => {
    const { disabled: t = !1, onSelect: o, ...a } = e, s = h(null), c = V(Y, e.__scopeMenu), u = fe(Y, e.__scopeMenu), p = $(n, s), v = h(!1), f = () => {
      const i = s.current;
      if (!t && i) {
        const m = new CustomEvent(ye, { bubbles: !0, cancelable: !0 });
        i.addEventListener(ye, (y) => o?.(y), { once: !0 }), nn(i, m), m.defaultPrevented ? v.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ r.jsx(
      We,
      {
        ...a,
        ref: p,
        disabled: t,
        onClick: g(e.onClick, f),
        onPointerDown: (i) => {
          e.onPointerDown?.(i), v.current = !0;
        },
        onPointerUp: g(e.onPointerUp, (i) => {
          v.current || i.currentTarget?.click();
        }),
        onKeyDown: g(e.onKeyDown, (i) => {
          const m = u.searchRef.current !== "";
          t || m && i.key === " " || ae.includes(i.key) && (i.currentTarget.click(), i.preventDefault());
        })
      }
    );
  }
);
Q.displayName = Y;
var We = d(
  (e, n) => {
    const { __scopeMenu: t, disabled: o = !1, textValue: a, ...s } = e, c = fe(Y, t), u = Be(t), p = h(null), v = $(n, p), [f, i] = re(!1), [m, y] = re("");
    return A(() => {
      const x = p.current;
      x && y((x.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ r.jsx(
      L.ItemSlot,
      {
        scope: t,
        disabled: o,
        textValue: a ?? m,
        children: /* @__PURE__ */ r.jsx(Te, { asChild: !0, ...u, focusable: !o, children: /* @__PURE__ */ r.jsx(
          w.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: v,
            onPointerMove: g(
              e.onPointerMove,
              G((x) => {
                o ? c.onItemLeave(x) : (c.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: g(
              e.onPointerLeave,
              G((x) => c.onItemLeave(x))
            ),
            onFocus: g(e.onFocus, () => i(!0)),
            onBlur: g(e.onBlur, () => i(!1))
          }
        ) })
      }
    );
  }
), Dn = "MenuCheckboxItem", qe = d(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: o, ...a } = e;
    return /* @__PURE__ */ r.jsx(tt, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ r.jsx(
      Q,
      {
        role: "menuitemcheckbox",
        "aria-checked": H(t) ? "mixed" : t,
        ...a,
        ref: n,
        "data-state": xe(t),
        onSelect: g(
          a.onSelect,
          () => o?.(H(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
qe.displayName = Dn;
var Ze = "MenuRadioGroup", [Tn, Pn] = I(
  Ze,
  { value: void 0, onValueChange: () => {
  } }
), Je = d(
  (e, n) => {
    const { value: t, onValueChange: o, ...a } = e, s = Qt(o);
    return /* @__PURE__ */ r.jsx(Tn, { scope: e.__scopeMenu, value: t, onValueChange: s, children: /* @__PURE__ */ r.jsx(ve, { ...a, ref: n }) });
  }
);
Je.displayName = Ze;
var Qe = "MenuRadioItem", et = d(
  (e, n) => {
    const { value: t, ...o } = e, a = Pn(Qe, e.__scopeMenu), s = t === a.value;
    return /* @__PURE__ */ r.jsx(tt, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ r.jsx(
      Q,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": xe(s),
        onSelect: g(
          o.onSelect,
          () => a.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
et.displayName = Qe;
var ge = "MenuItemIndicator", [tt, Sn] = I(
  ge,
  { checked: !1 }
), nt = d(
  (e, n) => {
    const { __scopeMenu: t, forceMount: o, ...a } = e, s = Sn(ge, t);
    return /* @__PURE__ */ r.jsx(
      K,
      {
        present: o || H(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ r.jsx(
          w.span,
          {
            ...a,
            ref: n,
            "data-state": xe(s.checked)
          }
        )
      }
    );
  }
);
nt.displayName = ge;
var En = "MenuSeparator", ot = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(
      w.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }
);
ot.displayName = En;
var jn = "MenuArrow", rt = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, a = ue(t);
    return /* @__PURE__ */ r.jsx(en, { ...a, ...o, ref: n });
  }
);
rt.displayName = jn;
var An = "MenuSub", [$o, at] = I(An), F = "MenuSubTrigger", st = d(
  (e, n) => {
    const t = D(F, e.__scopeMenu), o = V(F, e.__scopeMenu), a = at(F, e.__scopeMenu), s = fe(F, e.__scopeMenu), c = h(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: p } = s, v = { __scopeMenu: e.__scopeMenu }, f = j(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return A(() => f, [f]), A(() => {
      const i = u.current;
      return () => {
        window.clearTimeout(i), p(null);
      };
    }, [u, p]), /* @__PURE__ */ r.jsx(le, { asChild: !0, ...v, children: /* @__PURE__ */ r.jsx(
      We,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": t.open ? a.contentId : void 0,
        "data-state": dt(t.open),
        ...e,
        ref: Ne(n, a.onTriggerChange),
        onClick: (i) => {
          e.onClick?.(i), !(e.disabled || i.defaultPrevented) && (i.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: g(
          e.onPointerMove,
          G((i) => {
            s.onItemEnter(i), !i.defaultPrevented && !e.disabled && !t.open && !c.current && (s.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              t.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: g(
          e.onPointerLeave,
          G((i) => {
            f();
            const m = t.content?.getBoundingClientRect();
            if (m) {
              const y = t.content?.dataset.side, x = y === "right", T = x ? -5 : 5, R = m[x ? "left" : "right"], P = m[x ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: i.clientX + T, y: i.clientY },
                  { x: R, y: m.top },
                  { x: P, y: m.top },
                  { x: P, y: m.bottom },
                  { x: R, y: m.bottom }
                ],
                side: y
              }), window.clearTimeout(u.current), u.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(i), i.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: g(e.onKeyDown, (i) => {
          const m = s.searchRef.current !== "";
          e.disabled || m && i.key === " " || vn[o.dir].includes(i.key) && (t.onOpenChange(!0), t.content?.focus(), i.preventDefault());
        })
      }
    ) });
  }
);
st.displayName = F;
var it = "MenuSubContent", ct = d(
  (e, n) => {
    const t = ze(_, e.__scopeMenu), { forceMount: o = t.forceMount, align: a = "start", ...s } = e, c = D(_, e.__scopeMenu), u = V(_, e.__scopeMenu), p = at(it, e.__scopeMenu), v = h(null), f = $(n, v);
    return /* @__PURE__ */ r.jsx(L.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(K, { present: o || c.open, children: /* @__PURE__ */ r.jsx(L.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(
      me,
      {
        id: p.contentId,
        "aria-labelledby": p.triggerId,
        ...s,
        ref: f,
        align: a,
        side: u.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (i) => {
          u.isUsingKeyboardRef.current && v.current?.focus(), i.preventDefault();
        },
        onCloseAutoFocus: (i) => i.preventDefault(),
        onFocusOutside: g(e.onFocusOutside, (i) => {
          i.target !== p.trigger && c.onOpenChange(!1);
        }),
        onEscapeKeyDown: g(e.onEscapeKeyDown, (i) => {
          u.onClose(), i.preventDefault();
        }),
        onKeyDown: g(e.onKeyDown, (i) => {
          const m = i.currentTarget.contains(i.target), y = gn[u.dir].includes(i.key);
          m && y && (c.onOpenChange(!1), p.trigger?.focus(), i.preventDefault());
        })
      }
    ) }) }) });
  }
);
ct.displayName = it;
function dt(e) {
  return e ? "open" : "closed";
}
function H(e) {
  return e === "indeterminate";
}
function xe(e) {
  return H(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Rn(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function kn(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
function On(e, n, t) {
  const a = n.length > 1 && Array.from(n).every((v) => v === n[0]) ? n[0] : n, s = t ? e.indexOf(t) : -1;
  let c = kn(e, Math.max(s, 0));
  a.length === 1 && (c = c.filter((v) => v !== t));
  const p = c.find(
    (v) => v.toLowerCase().startsWith(a.toLowerCase())
  );
  return p !== t ? p : void 0;
}
function Fn(e, n) {
  const { x: t, y: o } = e;
  let a = !1;
  for (let s = 0, c = n.length - 1; s < n.length; c = s++) {
    const u = n[s], p = n[c], v = u.x, f = u.y, i = p.x, m = p.y;
    f > o != m > o && t < (i - v) * (o - f) / (m - f) + v && (a = !a);
  }
  return a;
}
function Ln(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Fn(t, n);
}
function G(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Gn = le, Kn = Xe, $n = Ye, Vn = ve, Un = He, Bn = Q, zn = qe, Xn = Je, Yn = et, Hn = nt, Wn = ot, qn = rt, Zn = st, Jn = ct, ut = "DropdownMenu", [Qn] = se(
  ut,
  [Ue]
), b = Ue(), [Vo, lt] = Qn(ut), pt = "DropdownMenuTrigger", ft = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: o = !1, ...a } = e, s = lt(pt, t), c = b(t);
    return /* @__PURE__ */ r.jsx(Gn, { asChild: !0, ...c, children: /* @__PURE__ */ r.jsx(
      w.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...a,
        ref: Ne(n, s.triggerRef),
        onPointerDown: g(e.onPointerDown, (u) => {
          !o && u.button === 0 && u.ctrlKey === !1 && (s.onOpenToggle(), s.open || u.preventDefault());
        }),
        onKeyDown: g(e.onKeyDown, (u) => {
          o || (["Enter", " "].includes(u.key) && s.onOpenToggle(), u.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }
);
ft.displayName = pt;
var eo = "DropdownMenuPortal", mt = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, o = b(n);
  return /* @__PURE__ */ r.jsx(Kn, { ...o, ...t });
};
mt.displayName = eo;
var vt = "DropdownMenuContent", gt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = lt(vt, t), s = b(t), c = h(!1);
    return /* @__PURE__ */ r.jsx(
      $n,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...s,
        ...o,
        ref: n,
        onCloseAutoFocus: g(e.onCloseAutoFocus, (u) => {
          c.current || a.triggerRef.current?.focus(), c.current = !1, u.preventDefault();
        }),
        onInteractOutside: g(e.onInteractOutside, (u) => {
          const p = u.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, f = p.button === 2 || v;
          (!a.modal || f) && (c.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
gt.displayName = vt;
var to = "DropdownMenuGroup", no = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Vn, { ...a, ...o, ref: n });
  }
);
no.displayName = to;
var oo = "DropdownMenuLabel", xt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Un, { ...a, ...o, ref: n });
  }
);
xt.displayName = oo;
var ro = "DropdownMenuItem", ht = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Bn, { ...a, ...o, ref: n });
  }
);
ht.displayName = ro;
var ao = "DropdownMenuCheckboxItem", bt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(zn, { ...a, ...o, ref: n });
});
bt.displayName = ao;
var so = "DropdownMenuRadioGroup", io = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Xn, { ...a, ...o, ref: n });
});
io.displayName = so;
var co = "DropdownMenuRadioItem", Mt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Yn, { ...a, ...o, ref: n });
});
Mt.displayName = co;
var uo = "DropdownMenuItemIndicator", _t = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Hn, { ...a, ...o, ref: n });
});
_t.displayName = uo;
var lo = "DropdownMenuSeparator", Ct = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Wn, { ...a, ...o, ref: n });
});
Ct.displayName = lo;
var po = "DropdownMenuArrow", fo = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(qn, { ...a, ...o, ref: n });
  }
);
fo.displayName = po;
var mo = "DropdownMenuSubTrigger", yt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Zn, { ...a, ...o, ref: n });
});
yt.displayName = mo;
var vo = "DropdownMenuSubContent", wt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(
    Jn,
    {
      ...a,
      ...o,
      ref: n,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
wt.displayName = vo;
var go = ft, xo = mt, Nt = gt, It = xt, Dt = ht, Tt = bt, Pt = Mt, St = _t, Et = Ct, jt = yt, At = wt;
const ho = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], bo = rn("circle", ho), Mo = go, _o = d(({ className: e, inset: n, children: t, ...o }, a) => /* @__PURE__ */ r.jsxs(
  jt,
  {
    ref: a,
    className: C(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-xs px-2 py-1.5 text-control outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      n && "pl-8",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ r.jsx(an, { className: "ml-auto" })
    ]
  }
));
_o.displayName = jt.displayName;
const Co = d(({ className: e, ...n }, t) => /* @__PURE__ */ r.jsx("div", { className: Ie, children: /* @__PURE__ */ r.jsx(
  At,
  {
    ref: t,
    className: C(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Co.displayName = At.displayName;
const yo = d(({ className: e, sideOffset: n = 4, ...t }, o) => /* @__PURE__ */ r.jsx(xo, { children: /* @__PURE__ */ r.jsx("div", { className: Ie, children: /* @__PURE__ */ r.jsx(
  Nt,
  {
    ref: o,
    className: C(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: n,
    ...t
  }
) }) }));
yo.displayName = Nt.displayName;
const wo = d(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ r.jsx(
  Dt,
  {
    ref: o,
    className: C(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-control outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      n && "pl-8",
      e
    ),
    ...t
  }
));
wo.displayName = Dt.displayName;
const No = d(({ className: e, children: n, checked: t, ...o }, a) => /* @__PURE__ */ r.jsxs(
  Tt,
  {
    ref: a,
    checked: t,
    className: C(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-control outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(St, { children: /* @__PURE__ */ r.jsx(sn, { className: "size-4" }) }) }),
      n
    ]
  }
));
No.displayName = Tt.displayName;
const Io = d(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ r.jsxs(
  Pt,
  {
    ref: o,
    className: C(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-control outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(St, { children: /* @__PURE__ */ r.jsx(bo, { className: "size-2 fill-current" }) }) }),
      n
    ]
  }
));
Io.displayName = Pt.displayName;
const Do = d(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ r.jsx(
  It,
  {
    ref: o,
    className: C(
      "px-2 py-1.5 text-control font-semibold",
      n && "pl-8",
      e
    ),
    ...t
  }
));
Do.displayName = It.displayName;
const To = d(({ className: e, ...n }, t) => /* @__PURE__ */ r.jsx(
  Et,
  {
    ref: t,
    className: C("-mx-1 my-1 h-px bg-muted", e),
    ...n
  }
));
To.displayName = Et.displayName;
const U = cn("segmented"), Po = d(({ variant: e = "segmented", ...n }, t) => /* @__PURE__ */ r.jsx(U.Provider, { value: e, children: /* @__PURE__ */ r.jsx(Ge, { ref: t, ...n }) }));
Po.displayName = Ge.displayName;
const So = ie(
  "inline-flex items-center text-muted-foreground",
  {
    variants: {
      variant: {
        segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
        "segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
        button: "gap-2",
        "button-sm": "gap-1",
        underline: "w-full gap-5 border-b border-border-default",
        navbar: "h-[52px] items-end gap-6",
        pill: "-ml-0.5 h-[30px] gap-px",
        // The `kpis` variant is consumed only by `features/kpi/kpi-tabs.tsx`.
        // Kept here so the cva variant set is in one place; not for direct use by app code.
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), Eo = d(({ className: e, ...n }, t) => {
  const o = W(U);
  return /* @__PURE__ */ r.jsx(
    Ke,
    {
      ref: t,
      className: C(So({ variant: o, className: e })),
      ...n
    }
  );
});
Eo.displayName = Ke.displayName;
const Rt = ie(
  "inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-control font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-sm font-medium data-[state=active]:shadow-md",
        button: "h-(--control-height) gap-1.5 rounded-md py-2 text-control font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-sm font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-9 px-0 text-control font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        navbar: 'relative h-[52px] px-px text-control font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        pill: "relative h-[30px] rounded-md px-3 text-control font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground",
        kpis: 'relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), jo = d(({ className: e, ...n }, t) => {
  const o = W(U);
  return /* @__PURE__ */ r.jsx(
    de,
    {
      ref: t,
      className: C(Rt({ variant: o, className: e })),
      ...n
    }
  );
});
jo.displayName = de.displayName;
const Ao = ({ className: e = "", children: n }) => /* @__PURE__ */ r.jsx("span", { className: `mt-px ml-1.5 flex h-5 items-center justify-center rounded-full bg-surface-elevated px-1.5 py-0 text-sm leading-[21px] font-semibold text-text-secondary ${e}`, children: n });
Ao.displayName = "TabsTriggerCount";
const Ro = ie(
  "ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden",
  {
    variants: {
      variant: {
        segmented: "",
        "segmented-sm": "",
        button: "",
        "button-sm": "",
        underline: "",
        navbar: "",
        pill: "",
        kpis: "ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), ko = d(({ className: e, ...n }, t) => {
  const o = W(U);
  return /* @__PURE__ */ r.jsx(
    $e,
    {
      ref: t,
      className: C(Ro({ variant: o, className: e })),
      ...n
    }
  );
});
ko.displayName = $e.displayName;
const Oo = d(({
  children: e,
  className: n,
  ...t
}, o) => {
  const a = W(U);
  return /* @__PURE__ */ r.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ r.jsx(
      de,
      {
        ref: o,
        className: C(Rt({ variant: a, className: n })),
        ...t,
        children: /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ r.jsx(
      Mo,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (s) => {
          s.preventDefault();
        }
      }
    )
  ] });
});
Oo.displayName = "TabsDropdownTrigger";
export {
  Po as T,
  ko as a,
  Eo as b,
  jo as c,
  Ao as d
};
//# sourceMappingURL=tabs-DTpfm-wu.js.map
