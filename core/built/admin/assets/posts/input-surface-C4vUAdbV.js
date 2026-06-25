import { i as e } from "./index-Dqn5WIFh.js";
const i = {
  base: "rounded-md border border-border-default bg-surface-elevated transition-colors",
  focusSelf: "focus-visible:outline-hidden focus-visible:bg-transparent focus-visible:border-focus-ring focus-visible:ring-2 focus-visible:ring-focus-ring/25",
  focusWithin: "has-[:focus-visible]:outline-hidden has-[:focus-visible]:bg-transparent has-[:focus-visible]:border-focus-ring has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus-ring/25",
  invalidSelf: "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40",
  invalidWithin: "has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-destructive/20 dark:has-[[aria-invalid=true]]:ring-destructive/40",
  disabledSelf: "disabled:cursor-not-allowed disabled:opacity-50"
};
function a(r = "self") {
  return r === "self" ? e(
    i.base,
    i.focusSelf,
    i.invalidSelf,
    i.disabledSelf
  ) : e(
    i.base,
    i.focusWithin,
    i.invalidWithin
  );
}
export {
  i as a,
  a as i
};
//# sourceMappingURL=input-surface-C4vUAdbV.js.map
