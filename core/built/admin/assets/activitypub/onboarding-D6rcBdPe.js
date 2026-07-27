import { a as e, d as t } from "./_react-D4KM8XEu.js";
import { S as n, r } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { i, n as a } from "./users-BLeiOTHc.js";
//#region src/utils/accessibility.ts
t();
function o(e) {
	if (!e) return {};
	try {
		return JSON.parse(e);
	} catch {
		return {};
	}
}
function s(e, t) {
	let n = o(e);
	return JSON.stringify({
		...n,
		...t
	});
}
//#endregion
//#region src/components/layout/onboarding/onboarding.tsx
var c = n(), l = () => {
	let { data: t } = i(), { mutateAsync: n } = a(), r = e.useMemo(() => t?.accessibility && o(t.accessibility).apOnboarding || {}, [t?.accessibility]), c = e.useCallback(async (e) => {
		if (!t) return;
		let r = o(t.accessibility), i = s(t.accessibility, { apOnboarding: {
			...r.apOnboarding,
			...e
		} });
		await n({
			...t,
			accessibility: i
		});
	}, [t, n]);
	return {
		isOnboarded: !!r.welcomeStepsFinished,
		isExplainerClosed: !!r.exploreExplainerClosed,
		setOnboarded: (e) => c({ welcomeStepsFinished: e }),
		setExplainerClosed: (e) => c({ exploreExplainerClosed: e })
	};
}, u = () => /* @__PURE__ */ (0, c.jsx)("div", {
	className: "h-full pt-14",
	children: /* @__PURE__ */ (0, c.jsx)(r, {})
});
//#endregion
export { l as n, u as t };

//# sourceMappingURL=onboarding-D6rcBdPe.js.map