import { a_ as e, az as d, bC as L, aK as H, ba as M, bd as F, bM as z, bO as o, a4 as I, _ as R, a3 as S, t as f, a6 as k, ar as $, at as D } from "./index-sudOvKcY.js";
import { L as U } from "./label-KQSsSjmN.js";
const _ = H(
  "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function T({
  className: t,
  orientation: a = "vertical",
  ...s
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: d(_({ orientation: a }), t),
      "data-orientation": a,
      "data-slot": "field",
      role: "group",
      ...s
    }
  );
}
function w({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.jsx(
    U,
    {
      className: d(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        t
      ),
      "data-slot": "field-label",
      ...a
    }
  );
}
function O({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: d(
        "text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        t
      ),
      "data-slot": "field-description",
      ...a
    }
  );
}
function A({
  className: t,
  children: a,
  errors: s,
  ...c
}) {
  const i = L(() => a || (s ? s?.length === 1 && s[0]?.message ? s[0].message : /* @__PURE__ */ e.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: s.map(
    (l) => l?.message && /* @__PURE__ */ e.jsx("li", { children: l.message }, l.message)
  ) }) : null), [a, s]);
  return i ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: d("text-destructive text-control font-normal", t),
      "data-slot": "field-error",
      role: "alert",
      ...c,
      children: i
    }
  ) : null;
}
const V = /^@?[^@\s]+@[^@\s]+$/;
function B(t) {
  const a = t.trim();
  return a.startsWith("@") ? a : `@${a}`;
}
function G(t) {
  try {
    const a = new URL(t), s = a.pathname.match(/^\/users\/([^/]+)\/?$/);
    return s ? `${decodeURIComponent(s[1])}@${a.hostname}` : `${a.hostname}${a.pathname}`;
  } catch {
    return t;
  }
}
function K(t) {
  if (typeof t == "object" && t !== null && "statusCode" in t && typeof t.statusCode == "number") {
    if (t.statusCode === 400)
      return "Enter a valid handle, like old@mastodon.social.";
    if (t.statusCode === 404)
      return "Could not find that profile. Check the handle and try again.";
  }
  return "Something went wrong, please try again.";
}
const Y = () => {
  const {
    data: t,
    isError: a,
    isLoading: s,
    refetch: c
  } = M("index"), i = F("index"), l = z("index"), [x, g] = o(""), [r, u] = o(null), [p, m] = o(null), [v, b] = o(null), y = [...t?.aliases ?? []].reverse(), N = s || a || y.length > 0, C = async (n) => {
    n.preventDefault();
    const j = x.trim();
    if (!V.test(j)) {
      u("Enter a valid handle, like old@mastodon.social.");
      return;
    }
    u(null), m(null);
    try {
      const h = B(j);
      await i.mutateAsync(h), g("");
    } catch (h) {
      u(K(h));
    }
  }, E = async (n) => {
    m(null), b(n);
    try {
      await l.mutateAsync(n);
    } catch {
      m("Could not remove migration profile.");
    } finally {
      b(null);
    }
  };
  return /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx(R, { children: "Account migration" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-3 text-base text-gray-800 dark:text-gray-600", children: /* @__PURE__ */ e.jsxs("p", { children: [
      "You can move your followers from another social web account (eg. ",
      /* @__PURE__ */ e.jsx("a", { className: "underline hover:text-black dark:hover:text-white", href: "https://docs.joinmastodon.org/user/moving/#move", rel: "noopener noreferrer", target: "_blank", children: "Mastodon" }),
      ") to this one by creating an account alias. This action is harmless and reversible. The account migration is initiated from the old account."
    ] }) }),
    /* @__PURE__ */ e.jsx("form", { className: "mt-10", onSubmit: C, children: /* @__PURE__ */ e.jsxs(T, { "data-invalid": r ? !0 : void 0, children: [
      /* @__PURE__ */ e.jsx(w, { htmlFor: "account-migration-source-handle", children: "Old account handle" }),
      /* @__PURE__ */ e.jsx(O, { id: "account-migration-source-handle-description", children: "Specify the username@domain of the account you want to move from" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ e.jsx(
          S,
          {
            "aria-describedby": r ? "account-migration-source-handle-error" : "account-migration-source-handle-description",
            "aria-invalid": r ? !0 : void 0,
            autoComplete: "off",
            className: "sm:flex-1",
            id: "account-migration-source-handle",
            placeholder: "username@domain",
            value: x,
            "data-1p-ignore": !0,
            onChange: (n) => g(n.target.value)
          }
        ),
        /* @__PURE__ */ e.jsxs(f, { className: "relative h-9 text-sm sm:w-auto", disabled: i.isLoading, type: "submit", children: [
          /* @__PURE__ */ e.jsx("span", { className: i.isLoading ? "invisible" : void 0, children: "Create alias" }),
          i.isLoading && /* @__PURE__ */ e.jsxs("span", { className: "absolute inset-0 flex items-center justify-center", children: [
            /* @__PURE__ */ e.jsx(k, { color: "light", size: "sm" }),
            /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Creating alias..." })
          ] })
        ] })
      ] }),
      r && /* @__PURE__ */ e.jsx(A, { id: "account-migration-source-handle-error", children: r }),
      p && /* @__PURE__ */ e.jsx(A, { id: "account-migration-alias-error", children: p })
    ] }) }),
    N && /* @__PURE__ */ e.jsxs("div", { className: "mt-10", "data-testid": "account-migration-aliases", children: [
      /* @__PURE__ */ e.jsx("div", { className: "pb-3", children: /* @__PURE__ */ e.jsx(w, { asChild: !0, children: /* @__PURE__ */ e.jsx("div", { children: "Account aliases" }) }) }),
      s ? /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-200 py-4 dark:border-gray-950", children: /* @__PURE__ */ e.jsx($, { className: "h-5 w-48" }) }) : a ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4 border-t border-gray-200 py-4 text-sm text-gray-700 dark:border-gray-950 dark:text-gray-600", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Could not load account aliases." }),
        /* @__PURE__ */ e.jsx(f, { className: "px-0 font-medium", variant: "link", onClick: () => c(), children: "Retry" })
      ] }) : /* @__PURE__ */ e.jsx("div", { className: "divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-950 dark:border-gray-950", children: y.map((n) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4 py-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate text-base text-black dark:text-white", children: G(n.apId) }),
        /* @__PURE__ */ e.jsx(
          f,
          {
            className: "shrink-0 px-0 font-medium text-gray-700 hover:text-red dark:text-gray-600 dark:hover:text-red",
            disabled: v === n.apId,
            variant: "link",
            onClick: () => E(n.apId),
            children: v === n.apId ? /* @__PURE__ */ e.jsx(k, { size: "sm" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(D, { size: 15 }),
              " Unlink"
            ] })
          }
        )
      ] }, n.apId)) })
    ] })
  ] }) });
};
export {
  Y as default
};
//# sourceMappingURL=account-migration-ClmVrAXr.js.map
