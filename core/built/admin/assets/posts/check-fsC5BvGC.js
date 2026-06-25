import { a6 as A, k as $, af as D, R as M, a7 as Y, ad as _e, ak as P, a9 as w, am as R, o as ge, C as re, g as H, aj as Je, x as L, N as oe, F as be, p as et, m as tt, l as N } from "./index-Dqn5WIFh.js";
var T = function() {
  return T = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, T.apply(this, arguments);
};
function We(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Wn(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(c) {
      c(a);
    });
  }
  return new (n || (n = Promise))(function(a, c) {
    function i(l) {
      try {
        u(r.next(l));
      } catch (d) {
        c(d);
      }
    }
    function f(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        c(d);
      }
    }
    function u(l) {
      l.done ? a(l.value) : o(l.value).then(i, f);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function nt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Se(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function rt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Se(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Se(e[o], null);
        }
      };
  };
}
function ae(...e) {
  return A(rt(...e), e);
}
function Bn(e, t) {
  const n = $(t);
  n.displayName = e + "Context";
  const r = (a) => {
    const { children: c, ...i } = a, f = D(() => i, Object.values(i));
    return /* @__PURE__ */ M.jsx(n.Provider, { value: f, children: c });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const c = Y(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Un(e, t = []) {
  let n = [];
  function r(a, c) {
    const i = $(c);
    i.displayName = a + "Context";
    const f = n.length;
    n = [...n, c];
    const u = (d) => {
      const { scope: v, children: h, ...y } = d, s = v?.[e]?.[f] || i, m = D(() => y, Object.values(y));
      return /* @__PURE__ */ M.jsx(s.Provider, { value: m, children: h });
    };
    u.displayName = a + "Provider";
    function l(d, v) {
      const h = v?.[e]?.[f] || i, y = Y(h);
      if (y) return y;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [u, l];
  }
  const o = () => {
    const a = n.map((c) => $(c));
    return function(i) {
      const f = i?.[e] || a;
      return D(
        () => ({ [`__scope${e}`]: { ...i, [e]: f } }),
        [i, f]
      );
    };
  };
  return o.scopeName = e, [r, ot(o, ...t)];
}
function ot(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const c = r.reduce((i, { useScope: f, scopeName: u }) => {
        const d = f(a)[`__scope${u}`];
        return { ...i, ...d };
      }, {});
      return D(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var K = globalThis?.document ? _e : () => {
}, at = ge[" useInsertionEffect ".trim().toString()] || K;
function jn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, c] = it({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, f = i ? e : o;
  {
    const l = P(e !== void 0);
    w(() => {
      const d = l.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), l.current = i;
    }, [i, r]);
  }
  const u = A(
    (l) => {
      if (i) {
        const d = ct(l) ? l(e) : l;
        d !== e && c.current?.(d);
      } else
        a(l);
    },
    [i, e, a, c]
  );
  return [f, u];
}
function it({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = R(e), o = P(n), a = P(t);
  return at(() => {
    a.current = t;
  }, [t]), w(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function ct(e) {
  return typeof e == "function";
}
function st(e, t) {
  return Je((n, r) => t[n][r] ?? n, e);
}
var ut = (e) => {
  const { present: t, children: n } = e, r = lt(t), o = typeof n == "function" ? n({ present: r.isPresent }) : re.only(n), a = dt(r.ref, ft(o));
  return typeof n == "function" || r.isPresent ? H(o, { ref: a }) : null;
};
ut.displayName = "Presence";
function lt(e) {
  const [t, n] = R(), r = P(null), o = P(e), a = P("none"), c = e ? "mounted" : "unmounted", [i, f] = st(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return w(() => {
    const u = X(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), K(() => {
    const u = r.current, l = o.current;
    if (l !== e) {
      const v = a.current, h = X(u);
      e ? f("MOUNT") : h === "none" || u?.display === "none" ? f("UNMOUNT") : f(l && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), K(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (h) => {
        const s = X(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && s && (f("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, v = (h) => {
        h.target === t && (a.current = X(r.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: A((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function we(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function dt(...e) {
  const t = P(e);
  return t.current = e, A((n) => {
    const r = t.current;
    let o = !1;
    const a = r.map((c) => {
      const i = we(c, n);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let c = 0; c < a.length; c++) {
          const i = a[c];
          typeof i == "function" ? i() : we(r[c], null);
        }
      };
  }, []);
}
function X(e) {
  return e?.animationName || "none";
}
function ft(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = L((n, r) => {
    let { children: o, ...a } = n, c = null, i = !1;
    const f = [];
    Ce(o) && typeof Z == "function" && (o = Z(o._payload)), re.forEach(o, (v) => {
      if (pt(v)) {
        i = !0;
        const h = v;
        let y = "child" in h.props ? h.props.child : h.props.children;
        Ce(y) && typeof Z == "function" && (y = Z(y._payload)), c = vt(h, y), f.push(c?.props?.children);
      } else
        f.push(v);
    }), c ? c = H(c, void 0, f) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !i && re.count(o) === 1 && oe(o) && (c = o)
    );
    const u = c ? mt(c) : void 0, l = ae(r, u);
    if (!c) {
      if (o || o === 0)
        throw new Error(
          i ? Et(e) : bt(e)
        );
      return o;
    }
    const d = ht(a, c.props ?? {});
    return c.type !== be && (d.ref = r ? l : u), H(c, d);
  });
  return t.displayName = `${e}.Slot`, t;
}
var $n = /* @__PURE__ */ Be("Slot"), Ue = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  const t = (n) => "child" in n ? n.children(n.child) : n.children;
  return t.displayName = `${e}.Slottable`, t.__radixId = Ue, t;
}
var vt = (e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return oe(n) ? H(n, void 0, e.props.children(n.props.children)) : null;
  }
  return oe(t) ? t : null;
};
function ht(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const f = a(...i);
      return o(...i), f;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function pt(e) {
  return oe(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ue;
}
var yt = /* @__PURE__ */ Symbol.for("react.lazy");
function Ce(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === yt && "_payload" in e && gt(e._payload);
}
function gt(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var bt = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, Et = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, Z = ge[" use ".trim().toString()], St = [
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
], ie = St.reduce((e, t) => {
  const n = /* @__PURE__ */ Be(`Primitive.${t}`), r = L((o, a) => {
    const { asChild: c, ...i } = o, f = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ M.jsx(f, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function wt(e, t) {
  e && et(() => e.dispatchEvent(t));
}
var Ct = ge[" useId ".trim().toString()] || (() => {
}), Pt = 0;
function Kn(e) {
  const [t, n] = R(Ct());
  return K(() => {
    n((r) => r ?? String(Pt++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function V(e) {
  const t = P(e);
  return w(() => {
    t.current = e;
  }), D(() => ((...n) => t.current?.(...n)), []);
}
function Nt(e, t = globalThis?.document) {
  const n = V(e);
  w(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ot = "DismissableLayer", pe = "dismissableLayer.update", At = "dismissableLayer.pointerDownOutside", Rt = "dismissableLayer.focusOutside", Pe, je = $({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Tt = L(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: i,
      ...f
    } = e, u = Y(je), [l, d] = R(null), v = l?.ownerDocument ?? globalThis?.document, [, h] = R({}), y = ae(t, (g) => d(g)), s = Array.from(u.layers), [m] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = s.indexOf(m), b = l ? s.indexOf(l) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= p, C = It((g) => {
      const I = g.target, k = [...u.branches].some((j) => j.contains(I));
      !S || k || (o?.(g), c?.(g), g.defaultPrevented || i?.());
    }, v), O = Dt((g) => {
      const I = g.target;
      [...u.branches].some((j) => j.contains(I)) || (a?.(g), c?.(g), g.defaultPrevented || i?.());
    }, v);
    return Nt((g) => {
      b === u.layers.size - 1 && (r?.(g), !g.defaultPrevented && i && (g.preventDefault(), i()));
    }, v), w(() => {
      if (l)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Pe = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Ne(), () => {
          n && (u.layersWithOutsidePointerEventsDisabled.delete(l), u.layersWithOutsidePointerEventsDisabled.size === 0 && (v.body.style.pointerEvents = Pe));
        };
    }, [l, v, n, u]), w(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Ne());
    }, [l, u]), w(() => {
      const g = () => h({});
      return document.addEventListener(pe, g), () => document.removeEventListener(pe, g);
    }, []), /* @__PURE__ */ M.jsx(
      ie.div,
      {
        ...f,
        ref: y,
        style: {
          pointerEvents: E ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Tt.displayName = Ot;
var Lt = "DismissableLayerBranch", xt = L((e, t) => {
  const n = Y(je), r = P(null), o = ae(t, r);
  return w(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ M.jsx(ie.div, { ...e, ref: o });
});
xt.displayName = Lt;
function It(e, t = globalThis?.document) {
  const n = V(e), r = P(!1), o = P(() => {
  });
  return w(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          $e(
            At,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Dt(e, t = globalThis?.document) {
  const n = V(e), r = P(!1);
  return w(() => {
    const o = (a) => {
      a.target && !r.current && $e(Rt, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ne() {
  const e = new CustomEvent(pe);
  document.dispatchEvent(e);
}
function $e(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? wt(o, a) : o.dispatchEvent(a);
}
var Mt = "Portal", kt = L((e, t) => {
  const { container: n, ...r } = e, [o, a] = R(!1);
  K(() => a(!0), []);
  const c = n || o && globalThis?.document?.body;
  return c ? tt(/* @__PURE__ */ M.jsx(ie.div, { ...r, ref: t }), c) : null;
});
kt.displayName = Mt;
var G = 0, F = null;
function Vn() {
  w(() => {
    F || (F = { start: Oe(), end: Oe() });
    const { start: e, end: t } = F;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), G++, () => {
      G === 1 && (F?.start.remove(), F?.end.remove(), F = null), G = Math.max(0, G - 1);
    };
  }, []);
}
function Oe() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ue = "focusScope.autoFocusOnMount", le = "focusScope.autoFocusOnUnmount", Ae = { bubbles: !1, cancelable: !0 }, Ft = "FocusScope", _t = L((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [i, f] = R(null), u = V(o), l = V(a), d = P(null), v = ae(t, (s) => f(s)), h = P({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w(() => {
    if (r) {
      let s = function(E) {
        if (h.paused || !i) return;
        const S = E.target;
        i.contains(S) ? d.current = S : x(d.current, { select: !0 });
      }, m = function(E) {
        if (h.paused || !i) return;
        const S = E.relatedTarget;
        S !== null && (i.contains(S) || x(d.current, { select: !0 }));
      }, p = function(E) {
        if (document.activeElement === document.body)
          for (const C of E)
            C.removedNodes.length > 0 && x(i);
      };
      document.addEventListener("focusin", s), document.addEventListener("focusout", m);
      const b = new MutationObserver(p);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", s), document.removeEventListener("focusout", m), b.disconnect();
      };
    }
  }, [r, i, h.paused]), w(() => {
    if (i) {
      Te.add(h);
      const s = document.activeElement;
      if (!i.contains(s)) {
        const p = new CustomEvent(ue, Ae);
        i.addEventListener(ue, u), i.dispatchEvent(p), p.defaultPrevented || (Wt(Ht(He(i)), { select: !0 }), document.activeElement === s && x(i));
      }
      return () => {
        i.removeEventListener(ue, u), setTimeout(() => {
          const p = new CustomEvent(le, Ae);
          i.addEventListener(le, l), i.dispatchEvent(p), p.defaultPrevented || x(s ?? document.body, { select: !0 }), i.removeEventListener(le, l), Te.remove(h);
        }, 0);
      };
    }
  }, [i, u, l, h]);
  const y = A(
    (s) => {
      if (!n && !r || h.paused) return;
      const m = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, p = document.activeElement;
      if (m && p) {
        const b = s.currentTarget, [E, S] = Bt(b);
        E && S ? !s.shiftKey && p === S ? (s.preventDefault(), n && x(E, { select: !0 })) : s.shiftKey && p === E && (s.preventDefault(), n && x(S, { select: !0 })) : p === b && s.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ M.jsx(ie.div, { tabIndex: -1, ...c, ref: v, onKeyDown: y });
});
_t.displayName = Ft;
function Wt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (x(r, { select: t }), document.activeElement !== n) return;
}
function Bt(e) {
  const t = He(e), n = Re(t, e), r = Re(t.reverse(), e);
  return [n, r];
}
function He(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Re(e, t) {
  for (const n of e)
    if (!Ut(n, { upTo: t })) return n;
}
function Ut(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function jt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function x(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && jt(e) && t && e.select();
  }
}
var Te = $t();
function $t() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Le(e, t), e.unshift(t);
    },
    remove(t) {
      e = Le(e, t), e[0]?.resume();
    }
  };
}
function Le(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ht(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Kt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _ = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), q = {}, de = 0, Ke = function(e) {
  return e && (e.host || Ke(e.parentNode));
}, Vt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ke(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Yt = function(e, t, n, r) {
  var o = Vt(t, Array.isArray(e) ? e : [e]);
  q[n] || (q[n] = /* @__PURE__ */ new WeakMap());
  var a = q[n], c = [], i = /* @__PURE__ */ new Set(), f = new Set(o), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(v) {
      if (i.has(v))
        l(v);
      else
        try {
          var h = v.getAttribute(r), y = h !== null && h !== "false", s = (_.get(v) || 0) + 1, m = (a.get(v) || 0) + 1;
          _.set(v, s), a.set(v, m), c.push(v), s === 1 && y && Q.set(v, !0), m === 1 && v.setAttribute(n, "true"), y || v.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", v, p);
        }
    });
  };
  return l(t), i.clear(), de++, function() {
    c.forEach(function(d) {
      var v = _.get(d) - 1, h = a.get(d) - 1;
      _.set(d, v), a.set(d, h), v || (Q.has(d) || d.removeAttribute(r), Q.delete(d)), h || d.removeAttribute(n);
    }), de--, de || (_ = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), q = {});
  };
}, Yn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Kt(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Yt(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, te = "right-scroll-bar-position", ne = "width-before-scroll-bar", zt = "with-scroll-bars-hidden", Xt = "--removed-body-scroll-bar-size";
function fe(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zt(e, t) {
  var n = R(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Gt = typeof window < "u" ? _e : w, xe = /* @__PURE__ */ new WeakMap();
function Qt(e, t) {
  var n = Zt(null, function(r) {
    return e.forEach(function(o) {
      return fe(o, r);
    });
  });
  return Gt(function() {
    var r = xe.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || fe(i, null);
      }), a.forEach(function(i) {
        o.has(i) || fe(i, c);
      });
    }
    xe.set(n, e);
  }, [e]), n;
}
function qt(e) {
  return e;
}
function Jt(e, t) {
  t === void 0 && (t = qt);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var c = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), c = n;
      }
      var f = function() {
        var l = c;
        c = [], l.forEach(a);
      }, u = function() {
        return Promise.resolve().then(f);
      };
      u(), n = {
        push: function(l) {
          c.push(l), u();
        },
        filter: function(l) {
          return c = c.filter(l), n;
        }
      };
    }
  };
  return o;
}
function en(e) {
  e === void 0 && (e = {});
  var t = Jt(null);
  return t.options = T({ async: !0, ssr: !1 }, e), t;
}
var Ve = function(e) {
  var t = e.sideCar, n = We(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return N(r, T({}, n));
};
Ve.isSideCarExport = !0;
function tn(e, t) {
  return e.useMedium(t), Ve;
}
var Ye = en(), ve = function() {
}, ce = L(function(e, t) {
  var n = P(null), r = R({
    onScrollCapture: ve,
    onWheelCapture: ve,
    onTouchMoveCapture: ve
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, f = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, v = e.sideCar, h = e.noRelative, y = e.noIsolation, s = e.inert, m = e.allowPinchZoom, p = e.as, b = p === void 0 ? "div" : p, E = e.gapMode, S = We(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = v, O = Qt([n, t]), g = T(T({}, S), o);
  return N(
    be,
    null,
    l && N(C, { sideCar: Ye, removeScrollBar: u, shards: d, noRelative: h, noIsolation: y, inert: s, setCallbacks: a, allowPinchZoom: !!m, lockRef: n, gapMode: E }),
    c ? H(re.only(i), T(T({}, g), { ref: O })) : N(b, T({}, g, { className: f, ref: O }), i)
  );
});
ce.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ce.classNames = {
  fullWidth: ne,
  zeroRight: te
};
var nn = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function rn() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = nn();
  return t && e.setAttribute("nonce", t), e;
}
function on(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function an(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = rn()) && (on(t, n), an(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, sn = function() {
  var e = cn();
  return function(t, n) {
    w(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ze = function() {
  var e = sn(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, un = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, he = function(e) {
  return parseInt(e || "", 10) || 0;
}, ln = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [he(n), he(r), he(o)];
}, dn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return un;
  var t = ln(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, fn = ze(), U = "data-scroll-locked", vn = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(zt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(U, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(te, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ne, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(te, " .").concat(te, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ne, " .").concat(ne, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(U, `] {
    `).concat(Xt, ": ").concat(i, `px;
  }
`);
}, Ie = function() {
  var e = parseInt(document.body.getAttribute(U) || "0", 10);
  return isFinite(e) ? e : 0;
}, hn = function() {
  w(function() {
    return document.body.setAttribute(U, (Ie() + 1).toString()), function() {
      var e = Ie() - 1;
      e <= 0 ? document.body.removeAttribute(U) : document.body.setAttribute(U, e.toString());
    };
  }, []);
}, mn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  hn();
  var a = D(function() {
    return dn(o);
  }, [o]);
  return N(fn, { styles: vn(a, !t, o, n ? "" : "!important") });
}, ye = !1;
if (typeof window < "u")
  try {
    var J = Object.defineProperty({}, "passive", {
      get: function() {
        return ye = !0, !0;
      }
    });
    window.addEventListener("test", J, J), window.removeEventListener("test", J, J);
  } catch {
    ye = !1;
  }
var W = ye ? { passive: !1 } : !1, pn = function(e) {
  return e.tagName === "TEXTAREA";
}, Xe = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !pn(e) && n[t] === "visible")
  );
}, yn = function(e) {
  return Xe(e, "overflowY");
}, gn = function(e) {
  return Xe(e, "overflowX");
}, De = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ze(e, r);
    if (o) {
      var a = Ge(e, r), c = a[1], i = a[2];
      if (c > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, bn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, En = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ze = function(e, t) {
  return e === "v" ? yn(t) : gn(t);
}, Ge = function(e, t) {
  return e === "v" ? bn(t) : En(t);
}, Sn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, wn = function(e, t, n, r, o) {
  var a = Sn(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, f = t.contains(i), u = !1, l = c > 0, d = 0, v = 0;
  do {
    if (!i)
      break;
    var h = Ge(e, i), y = h[0], s = h[1], m = h[2], p = s - m - a * y;
    (y || p) && Ze(e, i) && (d += p, v += y);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(v) < 1) && (u = !0), u;
}, ee = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Me = function(e) {
  return [e.deltaX, e.deltaY];
}, ke = function(e) {
  return e && "current" in e ? e.current : e;
}, Cn = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Pn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Nn = 0, B = [];
function On(e) {
  var t = P([]), n = P([0, 0]), r = P(), o = R(Nn++)[0], a = R(ze)[0], c = P(e);
  w(function() {
    c.current = e;
  }, [e]), w(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var s = nt([e.lockRef.current], (e.shards || []).map(ke), !0).filter(Boolean);
      return s.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), s.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = A(function(s, m) {
    if ("touches" in s && s.touches.length === 2 || s.type === "wheel" && s.ctrlKey)
      return !c.current.allowPinchZoom;
    var p = ee(s), b = n.current, E = "deltaX" in s ? s.deltaX : b[0] - p[0], S = "deltaY" in s ? s.deltaY : b[1] - p[1], C, O = s.target, g = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in s && g === "h" && O.type === "range")
      return !1;
    var I = window.getSelection(), k = I && I.anchorNode, j = k ? k === O || k.contains(O) : !1;
    if (j)
      return !1;
    var z = De(g, O);
    if (!z)
      return !0;
    if (z ? C = g : (C = g === "v" ? "h" : "v", z = De(g, O)), !z)
      return !1;
    if (!r.current && "changedTouches" in s && (E || S) && (r.current = C), !C)
      return !0;
    var Ee = r.current || C;
    return wn(Ee, m, s, Ee === "h" ? E : S);
  }, []), f = A(function(s) {
    var m = s;
    if (!(!B.length || B[B.length - 1] !== a)) {
      var p = "deltaY" in m ? Me(m) : ee(m), b = t.current.filter(function(C) {
        return C.name === m.type && (C.target === m.target || m.target === C.shadowParent) && Cn(C.delta, p);
      })[0];
      if (b && b.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!b) {
        var E = (c.current.shards || []).map(ke).filter(Boolean).filter(function(C) {
          return C.contains(m.target);
        }), S = E.length > 0 ? i(m, E[0]) : !c.current.noIsolation;
        S && m.cancelable && m.preventDefault();
      }
    }
  }, []), u = A(function(s, m, p, b) {
    var E = { name: s, delta: m, target: p, should: b, shadowParent: An(p) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), l = A(function(s) {
    n.current = ee(s), r.current = void 0;
  }, []), d = A(function(s) {
    u(s.type, Me(s), s.target, i(s, e.lockRef.current));
  }, []), v = A(function(s) {
    u(s.type, ee(s), s.target, i(s, e.lockRef.current));
  }, []);
  w(function() {
    return B.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", f, W), document.addEventListener("touchmove", f, W), document.addEventListener("touchstart", l, W), function() {
      B = B.filter(function(s) {
        return s !== a;
      }), document.removeEventListener("wheel", f, W), document.removeEventListener("touchmove", f, W), document.removeEventListener("touchstart", l, W);
    };
  }, []);
  var h = e.removeScrollBar, y = e.inert;
  return N(
    be,
    null,
    y ? N(a, { styles: Pn(o) }) : null,
    h ? N(mn, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function An(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Rn = tn(Ye, On);
var Tn = L(function(e, t) {
  return N(ce, T({}, e, { ref: t, sideCar: Rn }));
});
Tn.classNames = ce.classNames;
const Qe = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Ln = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const xn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const Fe = (e) => {
  const t = xn(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const In = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, qe = $({});
function zn({
  children: e,
  size: t,
  color: n,
  strokeWidth: r,
  absoluteStrokeWidth: o,
  className: a
}) {
  const c = D(
    () => ({
      size: t,
      color: n,
      strokeWidth: r,
      absoluteStrokeWidth: o,
      className: a
    }),
    [t, n, r, o, a]
  );
  return N(qe.Provider, { value: c }, e);
}
const Dn = () => Y(qe), Mn = L(
  ({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: o = "", children: a, iconNode: c, ...i }, f) => {
    const {
      size: u = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: d = !1,
      color: v = "currentColor",
      className: h = ""
    } = Dn() ?? {}, y = r ?? d ? Number(n ?? l) * 24 / Number(t ?? u) : n ?? l;
    return N(
      "svg",
      {
        ref: f,
        ...me,
        width: t ?? u ?? me.width,
        height: t ?? u ?? me.height,
        stroke: e ?? v,
        strokeWidth: y,
        className: Qe("lucide", h, o),
        ...!a && !In(i) && { "aria-hidden": "true" },
        ...i
      },
      [
        ...c.map(([s, m]) => N(s, m)),
        ...Array.isArray(a) ? a : [a]
      ]
    );
  }
);
const kn = (e, t) => {
  const n = L(
    ({ className: r, ...o }, a) => N(Mn, {
      ref: a,
      iconNode: t,
      className: Qe(
        `lucide-${Ln(Fe(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Fe(e), n;
};
const Fn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Xn = kn("check", Fn);
export {
  Xn as C,
  Tt as D,
  _t as F,
  Mn as I,
  zn as L,
  kt as P,
  Tn as R,
  $n as S,
  Wn as _,
  ut as a,
  ie as b,
  We as c,
  se as d,
  rt as e,
  Bn as f,
  Un as g,
  kn as h,
  Be as i,
  Hn as j,
  wt as k,
  Yn as l,
  ae as m,
  jn as n,
  Vn as o,
  Kn as p,
  K as q,
  Dn as r,
  V as u
};
//# sourceMappingURL=check-fsC5BvGC.js.map
