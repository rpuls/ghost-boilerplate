import { aj as d, an as zt, j as r, ae as de, ak as Yt, al as N, am as g, c as h, e as O, aV as K, aW as Te, aX as Xt, af as V, aY as Wt, b as ie, aZ as Ht, W as R, a_ as Zt, aC as qt, ag as Jt, a$ as Qt, b0 as en, b1 as tn, ao as nn, b2 as on, aD as Pe, b3 as rn, b4 as an, a6 as sn, s as _, C as cn, b5 as Se, Y as dn, ai as un, ah as J, b6 as ue, B as ln } from "./index-BpBf-VFB.mjs";
import { u as pn, c as Q, R as Ee, I as je, a as mn } from "./index-v6r11Olh.mjs";
var ee = "Tabs", [fn] = de(ee, [
  Q
]), Ae = Q(), [vn, le] = fn(ee), Re = d(
  (e, n) => {
    const {
      __scopeTabs: t,
      value: o,
      onValueChange: a,
      defaultValue: s,
      orientation: c = "horizontal",
      dir: u,
      activationMode: f = "automatic",
      ...v
    } = e, l = pn(u), [i, m] = zt({
      prop: o,
      onChange: a,
      defaultProp: s ?? "",
      caller: ee
    });
    return /* @__PURE__ */ r.jsx(
      vn,
      {
        scope: t,
        baseId: Yt(),
        value: i,
        onValueChange: m,
        orientation: c,
        dir: l,
        activationMode: f,
        children: /* @__PURE__ */ r.jsx(
          N.div,
          {
            dir: l,
            "data-orientation": c,
            ...v,
            ref: n
          }
        )
      }
    );
  }
);
Re.displayName = ee;
var Oe = "TabsList", ke = d(
  (e, n) => {
    const { __scopeTabs: t, loop: o = !0, ...a } = e, s = le(Oe, t), c = Ae(t);
    return /* @__PURE__ */ r.jsx(
      Ee,
      {
        asChild: !0,
        ...c,
        orientation: s.orientation,
        dir: s.dir,
        loop: o,
        children: /* @__PURE__ */ r.jsx(
          N.div,
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
ke.displayName = Oe;
var Fe = "TabsTrigger", Le = d(
  (e, n) => {
    const { __scopeTabs: t, value: o, disabled: a = !1, ...s } = e, c = le(Fe, t), u = Ae(t), f = Ke(c.baseId, o), v = Ve(c.baseId, o), l = o === c.value;
    return /* @__PURE__ */ r.jsx(
      je,
      {
        asChild: !0,
        ...u,
        focusable: !a,
        active: l,
        children: /* @__PURE__ */ r.jsx(
          N.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": l,
            "aria-controls": v,
            "data-state": l ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: f,
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
              !l && !a && i && c.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Le.displayName = Fe;
var Ge = "TabsContent", $e = d(
  (e, n) => {
    const { __scopeTabs: t, value: o, forceMount: a, children: s, ...c } = e, u = le(Ge, t), f = Ke(u.baseId, o), v = Ve(u.baseId, o), l = o === u.value, i = h(l);
    return O(() => {
      const m = requestAnimationFrame(() => i.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ r.jsx(K, { present: a || l, children: ({ present: m }) => /* @__PURE__ */ r.jsx(
      N.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": f,
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
$e.displayName = Ge;
function Ke(e, n) {
  return `${e}-trigger-${n}`;
}
function Ve(e, n) {
  return `${e}-content-${n}`;
}
var Be = Re, Ue = ke, pe = Le, ze = $e, ce = ["Enter", " "], gn = ["ArrowDown", "PageUp", "Home"], Ye = ["ArrowUp", "PageDown", "End"], xn = [...gn, ...Ye], bn = {
  ltr: [...ce, "ArrowRight"],
  rtl: [...ce, "ArrowLeft"]
}, hn = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, te = "Menu", [G, Mn, _n] = mn(te), [P, Xe] = de(te, [
  _n,
  Te,
  Q
]), me = Te(), We = Q(), [Bo, S] = P(te), [Uo, B] = P(te), yn = "MenuAnchor", fe = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, a = me(t);
    return /* @__PURE__ */ r.jsx(Xt, { ...a, ...o, ref: n });
  }
);
fe.displayName = yn;
var ve = "MenuPortal", [wn, He] = P(ve, {
  forceMount: void 0
}), Ze = (e) => {
  const { __scopeMenu: n, forceMount: t, children: o, container: a } = e, s = S(ve, n);
  return /* @__PURE__ */ r.jsx(wn, { scope: n, forceMount: t, children: /* @__PURE__ */ r.jsx(K, { present: t || s.open, children: /* @__PURE__ */ r.jsx(an, { asChild: !0, container: a, children: o }) }) });
};
Ze.displayName = ve;
var w = "MenuContent", [Cn, ge] = P(w), qe = d(
  (e, n) => {
    const t = He(w, e.__scopeMenu), { forceMount: o = t.forceMount, ...a } = e, s = S(w, e.__scopeMenu), c = B(w, e.__scopeMenu);
    return /* @__PURE__ */ r.jsx(G.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(K, { present: o || s.open, children: /* @__PURE__ */ r.jsx(G.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ r.jsx(Nn, { ...a, ref: n }) : /* @__PURE__ */ r.jsx(In, { ...a, ref: n }) }) }) });
  }
), Nn = d(
  (e, n) => {
    const t = S(w, e.__scopeMenu), o = h(null), a = V(n, o);
    return O(() => {
      const s = o.current;
      if (s) return Wt(s);
    }, []), /* @__PURE__ */ r.jsx(
      xe,
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
), In = d((e, n) => {
  const t = S(w, e.__scopeMenu);
  return /* @__PURE__ */ r.jsx(
    xe,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Dn = Jt("MenuContent.ScrollLock"), xe = d(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: o = !1,
      trapFocus: a,
      onOpenAutoFocus: s,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: u,
      onEntryFocus: f,
      onEscapeKeyDown: v,
      onPointerDownOutside: l,
      onFocusOutside: i,
      onInteractOutside: m,
      onDismiss: x,
      disableOutsideScroll: b,
      ...T
    } = e, E = S(w, t), k = B(w, t), z = me(t), Y = We(t), _e = Mn(t), [Gt, ye] = ie(null), X = h(null), $t = V(n, X, E.onContentChange), W = h(0), H = h(""), Kt = h(0), oe = h(null), we = h("right"), re = h(0), Vt = b ? Zt : qt, Bt = b ? { as: Dn, allowPinchZoom: !0 } : void 0, Ut = (p) => {
      var A, Ne;
      const y = H.current + p, C = _e().filter((I) => !I.disabled), D = document.activeElement, ae = (A = C.find((I) => I.ref.current === D)) == null ? void 0 : A.textValue, se = C.map((I) => I.textValue), Ce = Gn(se, y, ae), F = (Ne = C.find((I) => I.textValue === Ce)) == null ? void 0 : Ne.ref.current;
      (function I(Ie) {
        H.current = Ie, window.clearTimeout(W.current), Ie !== "" && (W.current = window.setTimeout(() => I(""), 1e3));
      })(y), F && setTimeout(() => F.focus());
    };
    O(() => () => window.clearTimeout(W.current), []), Ht();
    const j = R((p) => {
      var C, D;
      return we.current === ((C = oe.current) == null ? void 0 : C.side) && Kn(p, (D = oe.current) == null ? void 0 : D.area);
    }, []);
    return /* @__PURE__ */ r.jsx(
      Cn,
      {
        scope: t,
        searchRef: H,
        onItemEnter: R(
          (p) => {
            j(p) && p.preventDefault();
          },
          [j]
        ),
        onItemLeave: R(
          (p) => {
            var y;
            j(p) || ((y = X.current) == null || y.focus(), ye(null));
          },
          [j]
        ),
        onTriggerLeave: R(
          (p) => {
            j(p) && p.preventDefault();
          },
          [j]
        ),
        pointerGraceTimerRef: Kt,
        onPointerGraceIntentChange: R((p) => {
          oe.current = p;
        }, []),
        children: /* @__PURE__ */ r.jsx(Vt, { ...Bt, children: /* @__PURE__ */ r.jsx(
          Qt,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: g(s, (p) => {
              var y;
              p.preventDefault(), (y = X.current) == null || y.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ r.jsx(
              en,
              {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onEscapeKeyDown: v,
                onPointerDownOutside: l,
                onFocusOutside: i,
                onInteractOutside: m,
                onDismiss: x,
                children: /* @__PURE__ */ r.jsx(
                  Ee,
                  {
                    asChild: !0,
                    ...Y,
                    dir: k.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: Gt,
                    onCurrentTabStopIdChange: ye,
                    onEntryFocus: g(f, (p) => {
                      k.isUsingKeyboardRef.current || p.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ r.jsx(
                      tn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": mt(E.open),
                        "data-radix-menu-content": "",
                        dir: k.dir,
                        ...z,
                        ...T,
                        ref: $t,
                        style: { outline: "none", ...T.style },
                        onKeyDown: g(T.onKeyDown, (p) => {
                          const C = p.target.closest("[data-radix-menu-content]") === p.currentTarget, D = p.ctrlKey || p.altKey || p.metaKey, ae = p.key.length === 1;
                          C && (p.key === "Tab" && p.preventDefault(), !D && ae && Ut(p.key));
                          const se = X.current;
                          if (p.target !== se || !xn.includes(p.key)) return;
                          p.preventDefault();
                          const F = _e().filter((A) => !A.disabled).map((A) => A.ref.current);
                          Ye.includes(p.key) && F.reverse(), Fn(F);
                        }),
                        onBlur: g(e.onBlur, (p) => {
                          p.currentTarget.contains(p.target) || (window.clearTimeout(W.current), H.current = "");
                        }),
                        onPointerMove: g(
                          e.onPointerMove,
                          $((p) => {
                            const y = p.target, C = re.current !== p.clientX;
                            if (p.currentTarget.contains(y) && C) {
                              const D = p.clientX > re.current ? "right" : "left";
                              we.current = D, re.current = p.clientX;
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
qe.displayName = w;
var Tn = "MenuGroup", be = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(N.div, { role: "group", ...o, ref: n });
  }
);
be.displayName = Tn;
var Pn = "MenuLabel", Je = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(N.div, { ...o, ref: n });
  }
);
Je.displayName = Pn;
var Z = "MenuItem", De = "menu.itemSelect", ne = d(
  (e, n) => {
    const { disabled: t = !1, onSelect: o, ...a } = e, s = h(null), c = B(Z, e.__scopeMenu), u = ge(Z, e.__scopeMenu), f = V(n, s), v = h(!1), l = () => {
      const i = s.current;
      if (!t && i) {
        const m = new CustomEvent(De, { bubbles: !0, cancelable: !0 });
        i.addEventListener(De, (x) => o == null ? void 0 : o(x), { once: !0 }), rn(i, m), m.defaultPrevented ? v.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ r.jsx(
      Qe,
      {
        ...a,
        ref: f,
        disabled: t,
        onClick: g(e.onClick, l),
        onPointerDown: (i) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, i), v.current = !0;
        },
        onPointerUp: g(e.onPointerUp, (i) => {
          var m;
          v.current || (m = i.currentTarget) == null || m.click();
        }),
        onKeyDown: g(e.onKeyDown, (i) => {
          const m = u.searchRef.current !== "";
          t || m && i.key === " " || ce.includes(i.key) && (i.currentTarget.click(), i.preventDefault());
        })
      }
    );
  }
);
ne.displayName = Z;
var Qe = d(
  (e, n) => {
    const { __scopeMenu: t, disabled: o = !1, textValue: a, ...s } = e, c = ge(Z, t), u = We(t), f = h(null), v = V(n, f), [l, i] = ie(!1), [m, x] = ie("");
    return O(() => {
      const b = f.current;
      b && x((b.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ r.jsx(
      G.ItemSlot,
      {
        scope: t,
        disabled: o,
        textValue: a ?? m,
        children: /* @__PURE__ */ r.jsx(je, { asChild: !0, ...u, focusable: !o, children: /* @__PURE__ */ r.jsx(
          N.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: v,
            onPointerMove: g(
              e.onPointerMove,
              $((b) => {
                o ? c.onItemLeave(b) : (c.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: g(
              e.onPointerLeave,
              $((b) => c.onItemLeave(b))
            ),
            onFocus: g(e.onFocus, () => i(!0)),
            onBlur: g(e.onBlur, () => i(!1))
          }
        ) })
      }
    );
  }
), Sn = "MenuCheckboxItem", et = d(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: o, ...a } = e;
    return /* @__PURE__ */ r.jsx(at, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ r.jsx(
      ne,
      {
        role: "menuitemcheckbox",
        "aria-checked": q(t) ? "mixed" : t,
        ...a,
        ref: n,
        "data-state": Me(t),
        onSelect: g(
          a.onSelect,
          () => o == null ? void 0 : o(q(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
et.displayName = Sn;
var tt = "MenuRadioGroup", [En, jn] = P(
  tt,
  { value: void 0, onValueChange: () => {
  } }
), nt = d(
  (e, n) => {
    const { value: t, onValueChange: o, ...a } = e, s = nn(o);
    return /* @__PURE__ */ r.jsx(En, { scope: e.__scopeMenu, value: t, onValueChange: s, children: /* @__PURE__ */ r.jsx(be, { ...a, ref: n }) });
  }
);
nt.displayName = tt;
var ot = "MenuRadioItem", rt = d(
  (e, n) => {
    const { value: t, ...o } = e, a = jn(ot, e.__scopeMenu), s = t === a.value;
    return /* @__PURE__ */ r.jsx(at, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ r.jsx(
      ne,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": Me(s),
        onSelect: g(
          o.onSelect,
          () => {
            var c;
            return (c = a.onValueChange) == null ? void 0 : c.call(a, t);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
rt.displayName = ot;
var he = "MenuItemIndicator", [at, An] = P(
  he,
  { checked: !1 }
), st = d(
  (e, n) => {
    const { __scopeMenu: t, forceMount: o, ...a } = e, s = An(he, t);
    return /* @__PURE__ */ r.jsx(
      K,
      {
        present: o || q(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ r.jsx(
          N.span,
          {
            ...a,
            ref: n,
            "data-state": Me(s.checked)
          }
        )
      }
    );
  }
);
st.displayName = he;
var Rn = "MenuSeparator", it = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(
      N.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }
);
it.displayName = Rn;
var On = "MenuArrow", ct = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, a = me(t);
    return /* @__PURE__ */ r.jsx(on, { ...a, ...o, ref: n });
  }
);
ct.displayName = On;
var kn = "MenuSub", [zo, dt] = P(kn), L = "MenuSubTrigger", ut = d(
  (e, n) => {
    const t = S(L, e.__scopeMenu), o = B(L, e.__scopeMenu), a = dt(L, e.__scopeMenu), s = ge(L, e.__scopeMenu), c = h(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: f } = s, v = { __scopeMenu: e.__scopeMenu }, l = R(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return O(() => l, [l]), O(() => {
      const i = u.current;
      return () => {
        window.clearTimeout(i), f(null);
      };
    }, [u, f]), /* @__PURE__ */ r.jsx(fe, { asChild: !0, ...v, children: /* @__PURE__ */ r.jsx(
      Qe,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": a.contentId,
        "data-state": mt(t.open),
        ...e,
        ref: Pe(n, a.onTriggerChange),
        onClick: (i) => {
          var m;
          (m = e.onClick) == null || m.call(e, i), !(e.disabled || i.defaultPrevented) && (i.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: g(
          e.onPointerMove,
          $((i) => {
            s.onItemEnter(i), !i.defaultPrevented && !e.disabled && !t.open && !c.current && (s.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              t.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: g(
          e.onPointerLeave,
          $((i) => {
            var x, b;
            l();
            const m = (x = t.content) == null ? void 0 : x.getBoundingClientRect();
            if (m) {
              const T = (b = t.content) == null ? void 0 : b.dataset.side, E = T === "right", k = E ? -5 : 5, z = m[E ? "left" : "right"], Y = m[E ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: i.clientX + k, y: i.clientY },
                  { x: z, y: m.top },
                  { x: Y, y: m.top },
                  { x: Y, y: m.bottom },
                  { x: z, y: m.bottom }
                ],
                side: T
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
          var x;
          const m = s.searchRef.current !== "";
          e.disabled || m && i.key === " " || bn[o.dir].includes(i.key) && (t.onOpenChange(!0), (x = t.content) == null || x.focus(), i.preventDefault());
        })
      }
    ) });
  }
);
ut.displayName = L;
var lt = "MenuSubContent", pt = d(
  (e, n) => {
    const t = He(w, e.__scopeMenu), { forceMount: o = t.forceMount, ...a } = e, s = S(w, e.__scopeMenu), c = B(w, e.__scopeMenu), u = dt(lt, e.__scopeMenu), f = h(null), v = V(n, f);
    return /* @__PURE__ */ r.jsx(G.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(K, { present: o || s.open, children: /* @__PURE__ */ r.jsx(G.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(
      xe,
      {
        id: u.contentId,
        "aria-labelledby": u.triggerId,
        ...a,
        ref: v,
        align: "start",
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          var i;
          c.isUsingKeyboardRef.current && ((i = f.current) == null || i.focus()), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: g(e.onFocusOutside, (l) => {
          l.target !== u.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: g(e.onEscapeKeyDown, (l) => {
          c.onClose(), l.preventDefault();
        }),
        onKeyDown: g(e.onKeyDown, (l) => {
          var x;
          const i = l.currentTarget.contains(l.target), m = hn[c.dir].includes(l.key);
          i && m && (s.onOpenChange(!1), (x = u.trigger) == null || x.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
pt.displayName = lt;
function mt(e) {
  return e ? "open" : "closed";
}
function q(e) {
  return e === "indeterminate";
}
function Me(e) {
  return q(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Fn(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function Ln(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
function Gn(e, n, t) {
  const a = n.length > 1 && Array.from(n).every((v) => v === n[0]) ? n[0] : n, s = t ? e.indexOf(t) : -1;
  let c = Ln(e, Math.max(s, 0));
  a.length === 1 && (c = c.filter((v) => v !== t));
  const f = c.find(
    (v) => v.toLowerCase().startsWith(a.toLowerCase())
  );
  return f !== t ? f : void 0;
}
function $n(e, n) {
  const { x: t, y: o } = e;
  let a = !1;
  for (let s = 0, c = n.length - 1; s < n.length; c = s++) {
    const u = n[s], f = n[c], v = u.x, l = u.y, i = f.x, m = f.y;
    l > o != m > o && t < (i - v) * (o - l) / (m - l) + v && (a = !a);
  }
  return a;
}
function Kn(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return $n(t, n);
}
function $(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Vn = fe, Bn = Ze, Un = qe, zn = be, Yn = Je, Xn = ne, Wn = et, Hn = nt, Zn = rt, qn = st, Jn = it, Qn = ct, eo = ut, to = pt, ft = "DropdownMenu", [no] = de(
  ft,
  [Xe]
), M = Xe(), [Yo, vt] = no(ft), gt = "DropdownMenuTrigger", xt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: o = !1, ...a } = e, s = vt(gt, t), c = M(t);
    return /* @__PURE__ */ r.jsx(Vn, { asChild: !0, ...c, children: /* @__PURE__ */ r.jsx(
      N.button,
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
        ref: Pe(n, s.triggerRef),
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
xt.displayName = gt;
var oo = "DropdownMenuPortal", bt = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, o = M(n);
  return /* @__PURE__ */ r.jsx(Bn, { ...o, ...t });
};
bt.displayName = oo;
var ht = "DropdownMenuContent", Mt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = vt(ht, t), s = M(t), c = h(!1);
    return /* @__PURE__ */ r.jsx(
      Un,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...s,
        ...o,
        ref: n,
        onCloseAutoFocus: g(e.onCloseAutoFocus, (u) => {
          var f;
          c.current || (f = a.triggerRef.current) == null || f.focus(), c.current = !1, u.preventDefault();
        }),
        onInteractOutside: g(e.onInteractOutside, (u) => {
          const f = u.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, l = f.button === 2 || v;
          (!a.modal || l) && (c.current = !0);
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
Mt.displayName = ht;
var ro = "DropdownMenuGroup", ao = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
    return /* @__PURE__ */ r.jsx(zn, { ...a, ...o, ref: n });
  }
);
ao.displayName = ro;
var so = "DropdownMenuLabel", _t = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
    return /* @__PURE__ */ r.jsx(Yn, { ...a, ...o, ref: n });
  }
);
_t.displayName = so;
var io = "DropdownMenuItem", yt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
    return /* @__PURE__ */ r.jsx(Xn, { ...a, ...o, ref: n });
  }
);
yt.displayName = io;
var co = "DropdownMenuCheckboxItem", wt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(Wn, { ...a, ...o, ref: n });
});
wt.displayName = co;
var uo = "DropdownMenuRadioGroup", lo = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(Hn, { ...a, ...o, ref: n });
});
lo.displayName = uo;
var po = "DropdownMenuRadioItem", Ct = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(Zn, { ...a, ...o, ref: n });
});
Ct.displayName = po;
var mo = "DropdownMenuItemIndicator", Nt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(qn, { ...a, ...o, ref: n });
});
Nt.displayName = mo;
var fo = "DropdownMenuSeparator", It = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(Jn, { ...a, ...o, ref: n });
});
It.displayName = fo;
var vo = "DropdownMenuArrow", go = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
    return /* @__PURE__ */ r.jsx(Qn, { ...a, ...o, ref: n });
  }
);
go.displayName = vo;
var xo = "DropdownMenuSubTrigger", Dt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(eo, { ...a, ...o, ref: n });
});
Dt.displayName = xo;
var bo = "DropdownMenuSubContent", Tt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = M(t);
  return /* @__PURE__ */ r.jsx(
    to,
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
Tt.displayName = bo;
var ho = xt, Mo = bt, Pt = Mt, St = _t, Et = yt, jt = wt, At = Ct, Rt = Nt, Ot = It, kt = Dt, Ft = Tt;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], yo = sn("circle", _o), wo = ho, Co = d(({ className: e, inset: n, children: t, ...o }, a) => /* @__PURE__ */ r.jsxs(
  kt,
  {
    ref: a,
    className: _(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      n && "pl-8",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ r.jsx(cn, { className: "ml-auto" })
    ]
  }
));
Co.displayName = kt.displayName;
const No = d(({ className: e, ...n }, t) => /* @__PURE__ */ r.jsx("div", { className: Se, children: /* @__PURE__ */ r.jsx(
  Ft,
  {
    ref: t,
    className: _(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
No.displayName = Ft.displayName;
const Io = d(({ className: e, sideOffset: n = 4, ...t }, o) => /* @__PURE__ */ r.jsx(Mo, { children: /* @__PURE__ */ r.jsx("div", { className: Se, children: /* @__PURE__ */ r.jsx(
  Pt,
  {
    ref: o,
    className: _(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: n,
    ...t
  }
) }) }));
Io.displayName = Pt.displayName;
const Do = d(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ r.jsx(
  Et,
  {
    ref: o,
    className: _(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      n && "pl-8",
      e
    ),
    ...t
  }
));
Do.displayName = Et.displayName;
const To = d(({ className: e, children: n, checked: t, ...o }, a) => /* @__PURE__ */ r.jsxs(
  jt,
  {
    ref: a,
    checked: t,
    className: _(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(Rt, { children: /* @__PURE__ */ r.jsx(dn, { className: "size-4" }) }) }),
      n
    ]
  }
));
To.displayName = jt.displayName;
const Po = d(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ r.jsxs(
  At,
  {
    ref: o,
    className: _(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(Rt, { children: /* @__PURE__ */ r.jsx(yo, { className: "size-2 fill-current" }) }) }),
      n
    ]
  }
));
Po.displayName = At.displayName;
const So = d(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ r.jsx(
  St,
  {
    ref: o,
    className: _(
      "px-2 py-1.5 text-sm font-semibold",
      n && "pl-8",
      e
    ),
    ...t
  }
));
So.displayName = St.displayName;
const Eo = d(({ className: e, ...n }, t) => /* @__PURE__ */ r.jsx(
  Ot,
  {
    ref: t,
    className: _("-mx-1 my-1 h-px bg-muted", e),
    ...n
  }
));
Eo.displayName = Ot.displayName;
const U = un("segmented"), jo = d(({ variant: e = "segmented", ...n }, t) => /* @__PURE__ */ r.jsx(U.Provider, { value: e, children: /* @__PURE__ */ r.jsx(Be, { ref: t, ...n }) }));
jo.displayName = Be.displayName;
const Ao = ue(
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
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), Ro = d(({ className: e, ...n }, t) => {
  const o = J(U);
  return /* @__PURE__ */ r.jsx(
    Ue,
    {
      ref: t,
      className: _(Ao({ variant: o, className: e })),
      ...n
    }
  );
});
Ro.displayName = Ue.displayName;
const Lt = ue(
  "inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-sm font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-xs font-medium data-[state=active]:shadow-md",
        button: "h-(--control-height) gap-1.5 rounded-md py-2 text-sm font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-xs font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-9 px-0 text-md font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        navbar: 'relative h-[52px] px-px text-md font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        pill: "relative h-[30px] rounded-md px-3 text-md font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground",
        kpis: 'relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), Oo = d(({ className: e, ...n }, t) => {
  const o = J(U);
  return /* @__PURE__ */ r.jsx(
    pe,
    {
      ref: t,
      className: _(Lt({ variant: o, className: e })),
      ...n
    }
  );
});
Oo.displayName = pe.displayName;
const ko = ({ className: e = "", children: n }) => /* @__PURE__ */ r.jsx("span", { className: `mt-px ml-1.5 flex h-5 items-center justify-center rounded-full bg-surface-elevated px-1.5 py-0 text-xs leading-[21px] font-semibold text-text-secondary ${e}`, children: n });
ko.displayName = "TabsTriggerCount";
const Fo = ue(
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
), Lo = d(({ className: e, ...n }, t) => {
  const o = J(U);
  return /* @__PURE__ */ r.jsx(
    ze,
    {
      ref: t,
      className: _(Fo({ variant: o, className: e })),
      ...n
    }
  );
});
Lo.displayName = ze.displayName;
const Go = d(
  ({ variant: e = "dropdown", className: n, ...t }, o) => /* @__PURE__ */ r.jsx(
    ln,
    {
      ref: o,
      className: _(
        "h-auto w-full rounded-none border-x-0 border-t-0 focus-visible:ring-0 bg-transparent py-5",
        n
      ),
      variant: e,
      ...t
    }
  )
);
Go.displayName = "KpiDropdownButton";
const $o = d(({
  children: e,
  className: n,
  ...t
}, o) => {
  const a = J(U);
  return /* @__PURE__ */ r.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ r.jsx(
      pe,
      {
        ref: o,
        className: _(Lt({ variant: a, className: n })),
        ...t,
        children: /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ r.jsx(
      wo,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (s) => {
          s.preventDefault();
        }
      }
    )
  ] });
});
$o.displayName = "TabsDropdownTrigger";
export {
  jo as T,
  Ro as a,
  Oo as b,
  Lo as c,
  ko as d
};
//# sourceMappingURL=tabs-CU1GihRT.mjs.map
