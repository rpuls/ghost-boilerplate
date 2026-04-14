import { b as j, d as fe, f as V, P as L, e as F, n as pt, i as Me, u as yt, c as Et, a as oe, g as bt, o as Ct } from "./button-BOW1bLRE.mjs";
import { y as he, A as Re, u as I, i as S, b as w, k as M, W as St, h as N, w as Ie, v as wt, j as m, X as Nt, J as Dt, s as R, F as Le, a as xt, S as Pt, m as $ } from "./index-BWRct4la.mjs";
var O = function() {
  return O = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, O.apply(this, arguments);
};
function _e(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function rr(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(l) {
      try {
        u(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function f(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      l.done ? a(l.value) : o(l.value).then(i, f);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Ot(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function At(e, t) {
  return St((n, r) => t[n][r] ?? n, e);
}
var ee = (e) => {
  const { present: t, children: n } = e, r = Tt(t), o = typeof n == "function" ? n({ present: r.isPresent }) : he.only(n), a = j(r.ref, Mt(o));
  return typeof n == "function" || r.isPresent ? Re(o, { ref: a }) : null;
};
ee.displayName = "Presence";
function Tt(e) {
  const [t, n] = I(), r = S(null), o = S(e), a = S("none"), s = e ? "mounted" : "unmounted", [i, f] = At(s, {
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
    const u = z(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), fe(() => {
    const u = r.current, l = o.current;
    if (l !== e) {
      const h = a.current, g = z(u);
      e ? f("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? f("UNMOUNT") : f(l && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), fe(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (g) => {
        const c = z(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && c && (f("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (g) => {
        g.target === t && (a.current = z(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: M((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function z(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Mt(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Rt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = V(e);
  w(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var It = "DismissableLayer", ve = "dismissableLayer.update", Lt = "dismissableLayer.pointerDownOutside", _t = "dismissableLayer.focusOutside", Ee, Fe = wt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ke = N(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...f
    } = e, u = Ie(Fe), [l, d] = I(null), h = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = I({}), x = j(t, (y) => d(y)), c = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = c.indexOf(v), D = l ? c.indexOf(l) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, b = D >= p, C = jt((y) => {
      const T = y.target, K = [...u.branches].some((re) => re.contains(T));
      !b || K || (o == null || o(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h), A = Wt((y) => {
      const T = y.target;
      [...u.branches].some((re) => re.contains(T)) || (a == null || a(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h);
    return Rt((y) => {
      D === u.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, h), w(() => {
      if (l)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ee = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), be(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ee);
        };
    }, [l, h, n, u]), w(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), be());
    }, [l, u]), w(() => {
      const y = () => g({});
      return document.addEventListener(ve, y), () => document.removeEventListener(ve, y);
    }, []), /* @__PURE__ */ m.jsx(
      L.div,
      {
        ...f,
        ref: x,
        style: {
          pointerEvents: E ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
ke.displayName = It;
var Ft = "DismissableLayerBranch", kt = N((e, t) => {
  const n = Ie(Fe), r = S(null), o = j(t, r);
  return w(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m.jsx(L.div, { ...e, ref: o });
});
kt.displayName = Ft;
function jt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = V(e), r = S(!1), o = S(() => {
  });
  return w(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          je(
            Lt,
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
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Wt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = V(e), r = S(!1);
  return w(() => {
    const o = (a) => {
      a.target && !r.current && je(_t, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function be() {
  const e = new CustomEvent(ve);
  document.dispatchEvent(e);
}
function je(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pt(o, a) : o.dispatchEvent(a);
}
var Bt = "Portal", We = N((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = I(!1);
  fe(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Nt.createPortal(/* @__PURE__ */ m.jsx(L.div, { ...r, ref: t }), s) : null;
});
We.displayName = Bt;
var ae = 0;
function Ut() {
  w(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ce()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ce()), ae++, () => {
      ae === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ae--;
    };
  }, []);
}
function Ce() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ie = "focusScope.autoFocusOnMount", se = "focusScope.autoFocusOnUnmount", Se = { bubbles: !1, cancelable: !0 }, Ht = "FocusScope", Be = N((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, f] = I(null), u = V(o), l = V(a), d = S(null), h = j(t, (c) => f(c)), g = S({
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
      let c = function(E) {
        if (g.paused || !i) return;
        const b = E.target;
        i.contains(b) ? d.current = b : _(d.current, { select: !0 });
      }, v = function(E) {
        if (g.paused || !i) return;
        const b = E.relatedTarget;
        b !== null && (i.contains(b) || _(d.current, { select: !0 }));
      }, p = function(E) {
        if (document.activeElement === document.body)
          for (const C of E)
            C.removedNodes.length > 0 && _(i);
      };
      document.addEventListener("focusin", c), document.addEventListener("focusout", v);
      const D = new MutationObserver(p);
      return i && D.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", c), document.removeEventListener("focusout", v), D.disconnect();
      };
    }
  }, [r, i, g.paused]), w(() => {
    if (i) {
      Ne.add(g);
      const c = document.activeElement;
      if (!i.contains(c)) {
        const p = new CustomEvent(ie, Se);
        i.addEventListener(ie, u), i.dispatchEvent(p), p.defaultPrevented || ($t(Gt(Ue(i)), { select: !0 }), document.activeElement === c && _(i));
      }
      return () => {
        i.removeEventListener(ie, u), setTimeout(() => {
          const p = new CustomEvent(se, Se);
          i.addEventListener(se, l), i.dispatchEvent(p), p.defaultPrevented || _(c ?? document.body, { select: !0 }), i.removeEventListener(se, l), Ne.remove(g);
        }, 0);
      };
    }
  }, [i, u, l, g]);
  const x = M(
    (c) => {
      if (!n && !r || g.paused) return;
      const v = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = document.activeElement;
      if (v && p) {
        const D = c.currentTarget, [E, b] = Kt(D);
        E && b ? !c.shiftKey && p === b ? (c.preventDefault(), n && _(E, { select: !0 })) : c.shiftKey && p === E && (c.preventDefault(), n && _(b, { select: !0 })) : p === D && c.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ m.jsx(L.div, { tabIndex: -1, ...s, ref: h, onKeyDown: x });
});
Be.displayName = Ht;
function $t(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (_(r, { select: t }), document.activeElement !== n) return;
}
function Kt(e) {
  const t = Ue(e), n = we(t, e), r = we(t.reverse(), e);
  return [n, r];
}
function Ue(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function we(e, t) {
  for (const n of e)
    if (!Vt(n, { upTo: t })) return n;
}
function Vt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function _(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zt(e) && t && e.select();
  }
}
var Ne = Xt();
function Xt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = De(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = De(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function De(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gt(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Yt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, W = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), G = {}, ce = 0, He = function(e) {
  return e && (e.host || He(e.parentNode));
}, Zt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = He(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qt = function(e, t, n, r) {
  var o = Zt(t, Array.isArray(e) ? e : [e]);
  G[n] || (G[n] = /* @__PURE__ */ new WeakMap());
  var a = G[n], s = [], i = /* @__PURE__ */ new Set(), f = new Set(o), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        l(h);
      else
        try {
          var g = h.getAttribute(r), x = g !== null && g !== "false", c = (W.get(h) || 0) + 1, v = (a.get(h) || 0) + 1;
          W.set(h, c), a.set(h, v), s.push(h), c === 1 && x && X.set(h, !0), v === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return l(t), i.clear(), ce++, function() {
    s.forEach(function(d) {
      var h = W.get(d) - 1, g = a.get(d) - 1;
      W.set(d, h), a.set(d, g), h || (X.has(d) || d.removeAttribute(r), X.delete(d)), g || d.removeAttribute(n);
    }), ce--, ce || (W = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), G = {});
  };
}, Qt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Yt(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), qt(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, q = "right-scroll-bar-position", Q = "width-before-scroll-bar", Jt = "with-scroll-bars-hidden", en = "--removed-body-scroll-bar-size";
function ue(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function tn(e, t) {
  var n = I(function() {
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
var nn = typeof window < "u" ? Dt : w, xe = /* @__PURE__ */ new WeakMap();
function rn(e, t) {
  var n = tn(null, function(r) {
    return e.forEach(function(o) {
      return ue(o, r);
    });
  });
  return nn(function() {
    var r = xe.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || ue(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ue(i, s);
      });
    }
    xe.set(n, e);
  }, [e]), n;
}
function on(e) {
  return e;
}
function an(e, t) {
  t === void 0 && (t = on);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
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
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var f = function() {
        var l = s;
        s = [], l.forEach(a);
      }, u = function() {
        return Promise.resolve().then(f);
      };
      u(), n = {
        push: function(l) {
          s.push(l), u();
        },
        filter: function(l) {
          return s = s.filter(l), n;
        }
      };
    }
  };
  return o;
}
function sn(e) {
  e === void 0 && (e = {});
  var t = an(null);
  return t.options = O({ async: !0, ssr: !1 }, e), t;
}
var $e = function(e) {
  var t = e.sideCar, n = _e(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return R(r, O({}, n));
};
$e.isSideCarExport = !0;
function cn(e, t) {
  return e.useMedium(t), $e;
}
var Ke = sn(), le = function() {
}, te = N(function(e, t) {
  var n = S(null), r = I({
    onScrollCapture: le,
    onWheelCapture: le,
    onTouchMoveCapture: le
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, f = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, h = e.sideCar, g = e.noIsolation, x = e.inert, c = e.allowPinchZoom, v = e.as, p = v === void 0 ? "div" : v, D = e.gapMode, E = _e(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = h, C = rn([n, t]), A = O(O({}, E), o);
  return R(
    Le,
    null,
    l && R(b, { sideCar: Ke, removeScrollBar: u, shards: d, noIsolation: g, inert: x, setCallbacks: a, allowPinchZoom: !!c, lockRef: n, gapMode: D }),
    s ? Re(he.only(i), O(O({}, A), { ref: C })) : R(p, O({}, A, { className: f, ref: C }), i)
  );
});
te.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
te.classNames = {
  fullWidth: Q,
  zeroRight: q
};
var un = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ln() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = un();
  return t && e.setAttribute("nonce", t), e;
}
function dn(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fn(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var vn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ln()) && (dn(t, n), fn(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mn = function() {
  var e = vn();
  return function(t, n) {
    w(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ve = function() {
  var e = mn(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, hn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, de = function(e) {
  return parseInt(e || "", 10) || 0;
}, gn = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [de(n), de(r), de(o)];
}, pn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return hn;
  var t = gn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yn = Ve(), H = "data-scroll-locked", En = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Jt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(H, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(q, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Q, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(q, " .").concat(q, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Q, " .").concat(Q, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(H, `] {
    `).concat(en, ": ").concat(i, `px;
  }
`);
}, Pe = function() {
  var e = parseInt(document.body.getAttribute(H) || "0", 10);
  return isFinite(e) ? e : 0;
}, bn = function() {
  w(function() {
    return document.body.setAttribute(H, (Pe() + 1).toString()), function() {
      var e = Pe() - 1;
      e <= 0 ? document.body.removeAttribute(H) : document.body.setAttribute(H, e.toString());
    };
  }, []);
}, Cn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  bn();
  var a = xt(function() {
    return pn(o);
  }, [o]);
  return R(yn, { styles: En(a, !t, o, n ? "" : "!important") });
}, me = !1;
if (typeof window < "u")
  try {
    var Y = Object.defineProperty({}, "passive", {
      get: function() {
        return me = !0, !0;
      }
    });
    window.addEventListener("test", Y, Y), window.removeEventListener("test", Y, Y);
  } catch {
    me = !1;
  }
var B = me ? { passive: !1 } : !1, Sn = function(e) {
  return e.tagName === "TEXTAREA";
}, ze = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Sn(e) && n[t] === "visible")
  );
}, wn = function(e) {
  return ze(e, "overflowY");
}, Nn = function(e) {
  return ze(e, "overflowX");
}, Oe = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Xe(e, r);
    if (o) {
      var a = Ge(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Dn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xe = function(e, t) {
  return e === "v" ? wn(t) : Nn(t);
}, Ge = function(e, t) {
  return e === "v" ? Dn(t) : xn(t);
}, Pn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, On = function(e, t, n, r, o) {
  var a = Pn(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, f = t.contains(i), u = !1, l = s > 0, d = 0, h = 0;
  do {
    var g = Ge(e, i), x = g[0], c = g[1], v = g[2], p = c - v - a * x;
    (x || p) && Xe(e, i) && (d += p, h += x), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(h) < 1) && (u = !0), u;
}, Z = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ae = function(e) {
  return [e.deltaX, e.deltaY];
}, Te = function(e) {
  return e && "current" in e ? e.current : e;
}, An = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Tn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mn = 0, U = [];
function Rn(e) {
  var t = S([]), n = S([0, 0]), r = S(), o = I(Mn++)[0], a = I(Ve)[0], s = S(e);
  w(function() {
    s.current = e;
  }, [e]), w(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var c = Ot([e.lockRef.current], (e.shards || []).map(Te), !0).filter(Boolean);
      return c.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), c.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = M(function(c, v) {
    if ("touches" in c && c.touches.length === 2 || c.type === "wheel" && c.ctrlKey)
      return !s.current.allowPinchZoom;
    var p = Z(c), D = n.current, E = "deltaX" in c ? c.deltaX : D[0] - p[0], b = "deltaY" in c ? c.deltaY : D[1] - p[1], C, A = c.target, y = Math.abs(E) > Math.abs(b) ? "h" : "v";
    if ("touches" in c && y === "h" && A.type === "range")
      return !1;
    var T = Oe(y, A);
    if (!T)
      return !0;
    if (T ? C = y : (C = y === "v" ? "h" : "v", T = Oe(y, A)), !T)
      return !1;
    if (!r.current && "changedTouches" in c && (E || b) && (r.current = C), !C)
      return !0;
    var K = r.current || C;
    return On(K, v, c, K === "h" ? E : b);
  }, []), f = M(function(c) {
    var v = c;
    if (!(!U.length || U[U.length - 1] !== a)) {
      var p = "deltaY" in v ? Ae(v) : Z(v), D = t.current.filter(function(C) {
        return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && An(C.delta, p);
      })[0];
      if (D && D.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!D) {
        var E = (s.current.shards || []).map(Te).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), b = E.length > 0 ? i(v, E[0]) : !s.current.noIsolation;
        b && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = M(function(c, v, p, D) {
    var E = { name: c, delta: v, target: p, should: D, shadowParent: In(p) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== E;
      });
    }, 1);
  }, []), l = M(function(c) {
    n.current = Z(c), r.current = void 0;
  }, []), d = M(function(c) {
    u(c.type, Ae(c), c.target, i(c, e.lockRef.current));
  }, []), h = M(function(c) {
    u(c.type, Z(c), c.target, i(c, e.lockRef.current));
  }, []);
  w(function() {
    return U.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, B), document.addEventListener("touchmove", f, B), document.addEventListener("touchstart", l, B), function() {
      U = U.filter(function(c) {
        return c !== a;
      }), document.removeEventListener("wheel", f, B), document.removeEventListener("touchmove", f, B), document.removeEventListener("touchstart", l, B);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return R(
    Le,
    null,
    x ? R(a, { styles: Tn(o) }) : null,
    g ? R(Cn, { gapMode: e.gapMode }) : null
  );
}
function In(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ln = cn(Ke, Rn);
var Ye = N(function(e, t) {
  return R(te, O({}, e, { ref: t, sideCar: Ln }));
});
Ye.classNames = te.classNames;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], or = Me("check", _n);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ar = Me("x", Fn);
var ne = "Dialog", [Ze, ir] = Et(ne), [kn, P] = Ze(ne), qe = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = S(null), f = S(null), [u, l] = yt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ne
  });
  return /* @__PURE__ */ m.jsx(
    kn,
    {
      scope: t,
      triggerRef: i,
      contentRef: f,
      contentId: oe(),
      titleId: oe(),
      descriptionId: oe(),
      open: u,
      onOpenChange: l,
      onOpenToggle: M(() => l((d) => !d), [l]),
      modal: s,
      children: n
    }
  );
};
qe.displayName = ne;
var Qe = "DialogTrigger", Je = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(Qe, n), a = j(t, o.triggerRef);
    return /* @__PURE__ */ m.jsx(
      L.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ye(o.open),
        ...r,
        ref: a,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Je.displayName = Qe;
var ge = "DialogPortal", [jn, et] = Ze(ge, {
  forceMount: void 0
}), tt = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = P(ge, t);
  return /* @__PURE__ */ m.jsx(jn, { scope: t, forceMount: n, children: he.map(r, (s) => /* @__PURE__ */ m.jsx(ee, { present: n || a.open, children: /* @__PURE__ */ m.jsx(We, { asChild: !0, container: o, children: s }) })) });
};
tt.displayName = ge;
var J = "DialogOverlay", nt = N(
  (e, t) => {
    const n = et(J, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = P(J, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ m.jsx(ee, { present: r || a.open, children: /* @__PURE__ */ m.jsx(Bn, { ...o, ref: t }) }) : null;
  }
);
nt.displayName = J;
var Wn = bt("DialogOverlay.RemoveScroll"), Bn = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(J, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(Ye, { as: Wn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m.jsx(
        L.div,
        {
          "data-state": ye(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), k = "DialogContent", rt = N(
  (e, t) => {
    const n = et(k, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = P(k, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(ee, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m.jsx(Un, { ...o, ref: t }) : /* @__PURE__ */ m.jsx(Hn, { ...o, ref: t }) });
  }
);
rt.displayName = k;
var Un = N(
  (e, t) => {
    const n = P(k, e.__scopeDialog), r = S(null), o = j(t, n.contentRef, r);
    return w(() => {
      const a = r.current;
      if (a) return Qt(a);
    }, []), /* @__PURE__ */ m.jsx(
      ot,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Hn = N(
  (e, t) => {
    const n = P(k, e.__scopeDialog), r = S(!1), o = S(!1);
    return /* @__PURE__ */ m.jsx(
      ot,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var f, u;
          (f = e.onInteractOutside) == null || f.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), ot = N(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = P(k, n), f = S(null), u = j(t, f);
    return Ut(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        Be,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ m.jsx(
            ke,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ye(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx($n, { titleId: i.titleId }),
        /* @__PURE__ */ m.jsx(Vn, { contentRef: f, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), pe = "DialogTitle", at = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(pe, n);
    return /* @__PURE__ */ m.jsx(L.h2, { id: o.titleId, ...r, ref: t });
  }
);
at.displayName = pe;
var it = "DialogDescription", st = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(it, n);
    return /* @__PURE__ */ m.jsx(L.p, { id: o.descriptionId, ...r, ref: t });
  }
);
st.displayName = it;
var ct = "DialogClose", ut = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(ct, n);
    return /* @__PURE__ */ m.jsx(
      L.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ut.displayName = ct;
function ye(e) {
  return e ? "open" : "closed";
}
var lt = "DialogTitleWarning", [sr, dt] = Ct(lt, {
  contentName: k,
  titleName: pe,
  docsSlug: "dialog"
}), $n = ({ titleId: e }) => {
  const t = dt(lt), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return w(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Kn = "DialogDescriptionWarning", Vn = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dt(Kn).contentName}}.`;
  return w(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, zn = qe, Xn = Je, Gn = tt, ft = nt, vt = rt, mt = at, ht = st, cr = ut;
const ur = zn, lr = Xn, Yn = Gn, gt = N(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  ft,
  {
    ref: n,
    className: $(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...t
  }
));
gt.displayName = ft.displayName;
const Zn = N(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m.jsx(Yn, { children: /* @__PURE__ */ m.jsxs("div", { className: Pt, children: [
  /* @__PURE__ */ m.jsx(gt, {}),
  /* @__PURE__ */ m.jsx(
    vt,
    {
      ref: r,
      className: $(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-surface-overlay p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg outline-hidden",
        e
      ),
      ...n,
      children: t
    }
  )
] }) }));
Zn.displayName = vt.displayName;
const qn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: $(
      "flex flex-col gap-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
qn.displayName = "DialogHeader";
const Qn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: $(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 sm:items-end [&_button]:min-w-20",
      e
    ),
    ...t
  }
);
Qn.displayName = "DialogFooter";
const Jn = N(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  mt,
  {
    ref: n,
    className: $(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Jn.displayName = mt.displayName;
const er = N(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  ht,
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
er.displayName = ht.displayName;
export {
  or as C,
  ke as D,
  Be as F,
  ft as O,
  We as P,
  Ye as R,
  mt as T,
  sr as W,
  ar as X,
  rr as _,
  ee as a,
  _e as b,
  ir as c,
  zn as d,
  Gn as e,
  vt as f,
  ht as g,
  Qt as h,
  cr as i,
  Xn as j,
  ur as k,
  lr as l,
  Zn as m,
  qn as n,
  Jn as o,
  er as p,
  Qn as q,
  Ut as u
};
//# sourceMappingURL=dialog-ChCs58Pc.mjs.map
