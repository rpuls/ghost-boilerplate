import { R as o, x as l, ak as u, a9 as z, S as H, i as n } from "./index-Dqn5WIFh.js";
import { m as A, d as L, j as G, g as W } from "./check-fsC5BvGC.js";
import { R as V, j as D, P as Y, W as q, a as B, T as J, D as K, C as v, O as Q, i as U } from "./dialog-3KY3A8t5.js";
import { b as f } from "./button-CG2Dpjqy.js";
var x = "AlertDialog", [X] = W(x, [
  D
]), i = D(), N = (e) => {
  const { __scopeAlertDialog: a, ...t } = e, s = i(a);
  return /* @__PURE__ */ o.jsx(V, { ...s, ...t, modal: !0 });
};
N.displayName = x;
var Z = "AlertDialogTrigger", ee = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(U, { ...r, ...s, ref: a });
  }
);
ee.displayName = Z;
var ae = "AlertDialogPortal", y = (e) => {
  const { __scopeAlertDialog: a, ...t } = e, s = i(a);
  return /* @__PURE__ */ o.jsx(Y, { ...s, ...t });
};
y.displayName = ae;
var te = "AlertDialogOverlay", _ = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(Q, { ...r, ...s, ref: a });
  }
);
_.displayName = te;
var c = "AlertDialogContent", [oe, se] = X(c), re = G("AlertDialogContent"), b = l(
  (e, a) => {
    const { __scopeAlertDialog: t, children: s, ...r } = e, g = i(t), p = u(null), F = A(a, p), m = u(null);
    return /* @__PURE__ */ o.jsx(
      q,
      {
        contentName: c,
        titleName: j,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ o.jsx(oe, { scope: t, cancelRef: m, children: /* @__PURE__ */ o.jsxs(
          B,
          {
            role: "alertdialog",
            ...g,
            ...r,
            ref: F,
            onOpenAutoFocus: L(r.onOpenAutoFocus, (d) => {
              d.preventDefault(), m.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ o.jsx(re, { children: s }),
              /* @__PURE__ */ o.jsx(ie, { contentRef: p })
            ]
          }
        ) })
      }
    );
  }
);
b.displayName = c;
var j = "AlertDialogTitle", C = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(J, { ...r, ...s, ref: a });
  }
);
C.displayName = j;
var E = "AlertDialogDescription", P = l((e, a) => {
  const { __scopeAlertDialog: t, ...s } = e, r = i(t);
  return /* @__PURE__ */ o.jsx(K, { ...r, ...s, ref: a });
});
P.displayName = E;
var le = "AlertDialogAction", h = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(v, { ...r, ...s, ref: a });
  }
);
h.displayName = le;
var S = "AlertDialogCancel", T = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, { cancelRef: r } = se(S, t), g = i(t), p = A(a, r);
    return /* @__PURE__ */ o.jsx(v, { ...g, ...s, ref: p });
  }
);
T.displayName = S;
var ie = ({ contentRef: e }) => {
  const a = `\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${E}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return z(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(a);
  }, [a, e]), null;
}, ne = N, ce = y, O = _, R = b, $ = h, w = T, M = C, I = P;
const _e = ne, de = ce, k = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  O,
  {
    className: n(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...a,
    ref: t
  }
));
k.displayName = O.displayName;
const pe = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(de, { children: /* @__PURE__ */ o.jsxs("div", { className: H, children: [
  /* @__PURE__ */ o.jsx(k, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ o.jsx(
    R,
    {
      ref: t,
      className: n(
        "fixed left-[50%] top-[20%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-20%] gap-6 bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[18%] data-[state=open]:slide-in-from-top-[18%] sm:rounded-lg",
        e
      ),
      ...a
    }
  )
] }) }));
pe.displayName = R.displayName;
const ge = ({
  className: e,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: n(
      "flex flex-col gap-y-2 text-center sm:text-left",
      e
    ),
    ...a
  }
);
ge.displayName = "AlertDialogHeader";
const me = ({
  className: e,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 [&>button]:min-w-20",
      e
    ),
    ...a
  }
);
me.displayName = "AlertDialogFooter";
const ue = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  M,
  {
    ref: t,
    className: n("text-xl font-semibold", e),
    ...a
  }
));
ue.displayName = M.displayName;
const Ae = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  I,
  {
    ref: t,
    className: n("text-base", e),
    ...a
  }
));
Ae.displayName = I.displayName;
const De = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  $,
  {
    ref: t,
    className: n(f(), e),
    ...a
  }
));
De.displayName = $.displayName;
const ve = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  w,
  {
    ref: t,
    className: n(
      f({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...a
  }
));
ve.displayName = w.displayName;
export {
  _e as A,
  De as a,
  ve as b,
  pe as c,
  Ae as d,
  me as e,
  ge as f,
  ue as g
};
//# sourceMappingURL=alert-dialog-cQK32v9G.js.map
