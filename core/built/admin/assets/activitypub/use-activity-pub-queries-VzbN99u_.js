import { T as e, a as t, d as n, g as r, u as i, v as a } from "./_react-D4KM8XEu.js";
import { S as o, x as s } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { c, l, o as u, s as d } from "./users-BLeiOTHc.js";
import { y as f } from "./use-navigate-with-base-path-CAwXTmqH.js";
//#region ../shade/es/components/primitives/text.js
n();
var p = o(), m = {
	"2xs": "text-2xs",
	xs: "text-xs",
	sm: "text-sm",
	md: "text-md",
	lg: "text-lg",
	xl: "text-xl",
	"2xl": "text-2xl",
	"3xl": "text-3xl"
}, h = {
	regular: "font-normal",
	medium: "font-medium",
	semibold: "font-semibold",
	bold: "font-bold"
}, g = {
	primary: "text-text-primary",
	secondary: "text-text-secondary",
	tertiary: "text-text-tertiary"
}, _ = {
	none: "leading-none",
	snug: "leading-snug",
	normal: "leading-normal",
	relaxed: "leading-relaxed",
	tight: "leading-tight",
	tighter: "leading-tighter",
	supertight: "leading-supertight",
	body: "leading-body",
	heading: "leading-heading"
}, v = t.forwardRef(function({ as: e = "p", className: t, size: n = "md", weight: r = "regular", tone: i = "primary", leading: a = "body", truncate: o = !1, ...s }, c) {
	return /* @__PURE__ */ (0, p.jsx)(e, {
		ref: c,
		className: f(m[n], h[r], g[i], _[a], o && "truncate", t),
		...s
	});
});
//#endregion
//#region ../shade/es/components/layout/heading.js
v.displayName = "Text", n();
var y = i(({ className: e, ...t }, n) => /* @__PURE__ */ (0, p.jsx)(v, {
	ref: n,
	as: "h1",
	className: f("scroll-m-20 leading-[1.1em] tracking-tighter", e),
	size: "2xl",
	weight: "bold",
	...t
}));
y.displayName = "H1";
var b = i(({ className: e, ...t }, n) => /* @__PURE__ */ (0, p.jsx)(v, {
	ref: n,
	as: "h2",
	className: f("scroll-m-20 tracking-tighter first:mt-0", e),
	size: "xl",
	weight: "bold",
	...t
}));
b.displayName = "H2";
var x = i(({ className: e, ...t }, n) => /* @__PURE__ */ (0, p.jsx)(v, {
	ref: n,
	as: "h3",
	className: f("scroll-m-20 tracking-tight", e),
	size: "lg",
	weight: "semibold",
	...t
}));
x.displayName = "H3";
var S = i(({ className: e, ...t }, n) => /* @__PURE__ */ (0, p.jsx)(v, {
	ref: n,
	as: "h4",
	className: f("scroll-m-20 tracking-tight", e),
	size: "md",
	weight: "semibold",
	...t
}));
S.displayName = "H4";
var ee = i(({ className: e, ...t }, n) => /* @__PURE__ */ (0, p.jsx)(v, {
	ref: n,
	as: "div",
	className: f("tracking-wide uppercase", e),
	size: "sm",
	tone: "secondary",
	weight: "medium",
	...t
}));
ee.displayName = "HTable";
//#endregion
//#region src/api/activitypub.ts
function te() {
	return {
		destination: {
			handle: "",
			apId: ""
		},
		aliases: []
	};
}
function C(e) {
	return e === null || !("destination" in e) ? te() : {
		destination: e.destination,
		aliases: "aliases" in e && Array.isArray(e.aliases) ? e.aliases : []
	};
}
var w = {
	Note: 0,
	Article: 1,
	Tombstone: 2
}, T = (e) => typeof e == "object" && !!e && "statusCode" in e && "message" in e && typeof e.statusCode == "number" && typeof e.message == "string", ne = class {
	apiUrl;
	authApiUrl;
	handle;
	fetch;
	constructor(e, t, n, r = window.fetch.bind(window)) {
		this.apiUrl = e, this.authApiUrl = t, this.handle = n, this.fetch = r;
	}
	async getToken() {
		try {
			return (await (await this.fetch(this.authApiUrl)).json())?.identities?.[0]?.token || null;
		} catch {
			return null;
		}
	}
	async fetchJSON(e, t = "GET", n) {
		let r = {
			method: t,
			headers: {
				Authorization: `Bearer ${await this.getToken()}`,
				Accept: "application/activity+json"
			}
		};
		n && (r.body = JSON.stringify(n), r.headers["Content-Type"] = "application/json");
		let i = await this.fetch(e, r);
		if (i.status === 204 || i.status === 202) return null;
		if (!i.ok) {
			let e = {
				message: "Something went wrong, please try again.",
				statusCode: i.status
			};
			try {
				let t = await i.json(), n = t.message || t.error;
				n && (e.message = n), t.code && (e.code = t.code);
			} catch {}
			throw e;
		}
		return await i.json();
	}
	async blockDomain(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/block/domain/${encodeURIComponent(e.href)}`, this.apiUrl);
		return await this.fetchJSON(t, "POST"), !0;
	}
	async unblockDomain(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/unblock/domain/${encodeURIComponent(e.href)}`, this.apiUrl);
		return await this.fetchJSON(t, "POST"), !0;
	}
	async block(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/block/${encodeURIComponent(e.href)}`, this.apiUrl);
		return await this.fetchJSON(t, "POST"), !0;
	}
	async unblock(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/unblock/${encodeURIComponent(e.href)}`, this.apiUrl);
		return await this.fetchJSON(t, "POST"), !0;
	}
	async follow(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/follow/${e}`, this.apiUrl);
		return await this.fetchJSON(t, "POST");
	}
	async unfollow(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/unfollow/${e}`, this.apiUrl);
		return await this.fetchJSON(t, "POST");
	}
	async like(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/like/${encodeURIComponent(e)}`, this.apiUrl);
		await this.fetchJSON(t, "POST");
	}
	async unlike(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/unlike/${encodeURIComponent(e)}`, this.apiUrl);
		await this.fetchJSON(t, "POST");
	}
	async repost(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/repost/${encodeURIComponent(e)}`, this.apiUrl);
		await this.fetchJSON(t, "POST");
	}
	async derepost(e) {
		let t = new URL(`.ghost/activitypub/v1/actions/derepost/${encodeURIComponent(e)}`, this.apiUrl);
		await this.fetchJSON(t, "POST");
	}
	async reply(e, t, n) {
		let r = new URL(`.ghost/activitypub/v1/actions/reply/${encodeURIComponent(e)}`, this.apiUrl), i = { content: t };
		return n && (i.image = n), await this.fetchJSON(r, "POST", i);
	}
	async note(e, t) {
		let n = new URL(".ghost/activitypub/v1/actions/note", this.apiUrl), r = { content: e };
		return t && (r.image = t), (await this.fetchJSON(n, "POST", r)).post;
	}
	async delete(e) {
		let t = new URL(`.ghost/activitypub/v1/post/${encodeURIComponent(e)}`, this.apiUrl);
		await this.fetchJSON(t, "DELETE");
	}
	get userApiUrl() {
		return new URL(`.ghost/activitypub/users/${this.handle}`, this.apiUrl);
	}
	async getUser() {
		return await this.fetchJSON(this.userApiUrl);
	}
	get searchApiUrl() {
		return new URL(".ghost/activitypub/v1/actions/search", this.apiUrl);
	}
	async search(e) {
		let t = this.searchApiUrl;
		t.searchParams.set("query", e);
		let n = await this.fetchJSON(t, "GET");
		return n && "accounts" in n ? n : { accounts: [] };
	}
	async getThread(e) {
		let t = new URL(`.ghost/activitypub/v1/thread/${encodeURIComponent(e)}`, this.apiUrl);
		return await this.fetchJSON(t);
	}
	async getAccount(e) {
		let t = new URL(`.ghost/activitypub/v1/account/${e}`, this.apiUrl);
		return await this.fetchJSON(t);
	}
	async getAccountFollows(e, t, n) {
		let r = new URL(`.ghost/activitypub/v1/account/${e}/follows/${t}`, this.apiUrl);
		n && r.searchParams.set("next", n);
		let i = await this.fetchJSON(r);
		return i === null || !("accounts" in i) ? {
			accounts: [],
			next: null
		} : {
			accounts: Array.isArray(i.accounts) ? i.accounts : [],
			next: "next" in i && typeof i.next == "string" ? i.next : null
		};
	}
	async getAccountAliases() {
		let e = new URL(".ghost/activitypub/v1/aliases", this.apiUrl);
		return C(await this.fetchJSON(e));
	}
	async getDomain() {
		let e = new URL(".ghost/activitypub/v1/domain", this.apiUrl);
		return await this.fetchJSON(e);
	}
	async updateDomain(e) {
		let t = new URL(".ghost/activitypub/v1/domain", this.apiUrl);
		return await this.fetchJSON(t, "PUT", { domain: e });
	}
	async validateDomain(e) {
		let t = new URL(".ghost/activitypub/v1/domain/validate", this.apiUrl);
		return await this.fetchJSON(t, "POST", { domain: e });
	}
	async addAccountAlias(e) {
		let t = new URL(".ghost/activitypub/v1/aliases", this.apiUrl);
		return C(await this.fetchJSON(t, "POST", { sourceHandle: e }));
	}
	async removeAccountAlias(e) {
		let t = new URL(".ghost/activitypub/v1/aliases", this.apiUrl);
		return C(await this.fetchJSON(t, "DELETE", { actorUri: e }));
	}
	async getFeed(e) {
		return this.getPaginatedPosts(".ghost/activitypub/v1/feed/notes", e);
	}
	async getInbox(e) {
		return this.getPaginatedPosts(".ghost/activitypub/v1/feed/reader", e);
	}
	async getDiscoveryFeed(e, t) {
		let n = `.ghost/activitypub/v1/feed/discover/${e}`;
		return this.getPaginatedPosts(n, t);
	}
	async getExploreAccounts(e, t) {
		let n = `.ghost/activitypub/v1/explore/${e}`;
		return this.getPaginatedExploreAccounts(n, t);
	}
	async getTopics() {
		let e = new URL(".ghost/activitypub/v1/topics", this.apiUrl), t = await this.fetchJSON(e);
		return { topics: t && "topics" in t && Array.isArray(t.topics) ? t.topics : [] };
	}
	async getRecommendations(e) {
		let t = new URL(".ghost/activitypub/v1/recommendations", this.apiUrl);
		e && t.searchParams.set("limit", e.toString());
		let n = await this.fetchJSON(t);
		return { accounts: n && "accounts" in n && Array.isArray(n.accounts) ? n.accounts : [] };
	}
	async getPostsByAccount(e, t) {
		return this.getPaginatedPosts(`.ghost/activitypub/v1/posts/${e}`, t);
	}
	async getPostsLikedByAccount(e) {
		return this.getPaginatedPosts(".ghost/activitypub/v1/posts/me/liked", e);
	}
	async getPaginatedPosts(e, t) {
		let n = new URL(e, this.apiUrl);
		t && n.searchParams.set("next", t);
		let r = await this.fetchJSON(n);
		return r === null || !("posts" in r) ? {
			posts: [],
			next: null
		} : {
			posts: Array.isArray(r.posts) ? r.posts : [],
			next: "next" in r && typeof r.next == "string" ? r.next : null
		};
	}
	async getNotifications(e) {
		let t = new URL(".ghost/activitypub/v1/notifications", this.apiUrl);
		e && t.searchParams.set("next", e);
		let n = await this.fetchJSON(t);
		return n === null || !("notifications" in n) ? {
			notifications: [],
			next: null
		} : {
			notifications: Array.isArray(n.notifications) ? n.notifications : [],
			next: "next" in n && typeof n.next == "string" ? n.next : null
		};
	}
	async getNotificationsCount() {
		let e = new URL(".ghost/activitypub/v1/notifications/unread/count", this.apiUrl), t = await this.fetchJSON(e);
		return t === null ? { count: 0 } : { count: typeof t.count == "number" ? t.count : 0 };
	}
	async resetNotificationsCount() {
		let e = new URL(".ghost/activitypub/v1/notifications/unread/reset", this.apiUrl);
		return await this.fetchJSON(e, "PUT"), !0;
	}
	async getBlockedAccounts(e) {
		let t = new URL(".ghost/activitypub/v1/blocks/accounts", this.apiUrl);
		e && t.searchParams.set("next", e);
		let n = await this.fetchJSON(t);
		return n === null ? {
			accounts: [],
			next: null
		} : {
			accounts: "blocked_accounts" in n && Array.isArray(n.blocked_accounts) ? n.blocked_accounts : [],
			next: "next" in n && typeof n.next == "string" ? n.next : null
		};
	}
	async getBlockedDomains(e) {
		let t = new URL(".ghost/activitypub/v1/blocks/domains", this.apiUrl);
		e && t.searchParams.set("next", e);
		let n = await this.fetchJSON(t);
		return n === null ? {
			domains: [],
			next: null
		} : {
			domains: "blocked_domains" in n && Array.isArray(n.blocked_domains) ? n.blocked_domains : [],
			next: "next" in n && typeof n.next == "string" ? n.next : null
		};
	}
	async getPaginatedExploreAccounts(e, t) {
		let n = new URL(e, this.apiUrl);
		t && n.searchParams.set("next", t);
		let r = await this.fetchJSON(n);
		return r === null || !("accounts" in r) ? {
			accounts: [],
			next: null
		} : {
			accounts: Array.isArray(r.accounts) ? r.accounts : [],
			next: "next" in r && typeof r.next == "string" ? r.next : null
		};
	}
	async getPost(e) {
		let t = new URL(`.ghost/activitypub/v1/post/${encodeURIComponent(e)}`, this.apiUrl);
		return await this.fetchJSON(t);
	}
	async getReplies(e, t) {
		let n = new URL(`.ghost/activitypub/v1/replies/${encodeURIComponent(e)}`, this.apiUrl);
		return t && n.searchParams.set("next", t), await this.fetchJSON(n);
	}
	async updateAccount({ name: e, username: t, bio: n, avatarUrl: r, bannerImageUrl: i }) {
		let a = new URL(".ghost/activitypub/v1/account", this.apiUrl);
		await this.fetchJSON(a, "PUT", {
			name: e,
			username: t,
			bio: n,
			avatarUrl: r,
			bannerImageUrl: i
		});
	}
	async upload(e) {
		let t = new URL(".ghost/activitypub/v1/upload/image", this.apiUrl), n = new FormData();
		n.append("file", e);
		let r = await this.getToken(), i = await this.fetch(t, {
			method: "POST",
			headers: { Authorization: `Bearer ${r}` },
			body: n
		});
		if (!i.ok) throw {
			message: "Upload failed",
			statusCode: i.status
		};
		return (await i.json()).fileUrl;
	}
	async enableBluesky() {
		let e = new URL(".ghost/activitypub/v2/actions/bluesky/enable", this.apiUrl);
		await this.fetchJSON(e, "POST");
	}
	async disableBluesky() {
		let e = new URL(".ghost/activitypub/v2/actions/bluesky/disable", this.apiUrl);
		await this.fetchJSON(e, "POST");
	}
	async confirmBlueskyHandle() {
		let e = new URL(".ghost/activitypub/v2/actions/bluesky/confirm-handle", this.apiUrl), t = await this.fetchJSON(e, "POST");
		return t === null || !("handle" in t) || typeof t.handle != "string" ? "" : String(t.handle);
	}
}, E = "pending-";
function D() {
	return `${E}${crypto.randomUUID()}`;
}
function re(e) {
	return e.startsWith(E);
}
function ie(e, t, n, r) {
	let i = {
		id: e.url,
		icon: e.icon,
		name: e.name,
		preferredUsername: e.preferredUsername,
		"@context": "",
		discoverable: !1,
		featured: "",
		followers: "",
		following: "",
		image: { url: "" },
		inbox: "",
		manuallyApprovesFollowers: !1,
		outbox: "",
		publicKey: {
			id: "",
			owner: "",
			publicKeyPem: ""
		},
		published: "",
		summary: "",
		type: "Person",
		url: ""
	};
	return {
		id: t,
		type: "Create",
		actor: i,
		object: {
			type: "Note",
			name: "",
			content: n,
			summary: null,
			url: "",
			attributedTo: i,
			image: r || "",
			published: (/* @__PURE__ */ new Date()).toISOString(),
			attachment: [],
			preview: {
				type: "Note",
				content: n
			},
			id: t,
			replyCount: 0,
			likeCount: 0,
			liked: !1,
			reposted: !1,
			repostCount: 0,
			authored: !0,
			"@context": ""
		},
		"@context": "",
		to: ""
	};
}
function ae(e) {
	return e.replace(/\n/g, "<br />");
}
//#endregion
//#region src/utils/posts.ts
function O(e) {
	let t = "";
	t = e.repostedBy === null ? "Create" : "Announce";
	let n = {
		id: e.author.url,
		icon: { url: e.author.avatarUrl },
		name: e.author.name,
		handle: e.author.handle,
		preferredUsername: e.author.handle.split("@")[1],
		followedByMe: e.author.followedByMe,
		"@context": "",
		discoverable: !1,
		featured: "",
		followers: "",
		following: "",
		image: { url: "" },
		inbox: "",
		manuallyApprovesFollowers: !1,
		outbox: "",
		publicKey: {
			id: "",
			owner: "",
			publicKeyPem: ""
		},
		published: "",
		summary: "",
		type: "Person",
		url: ""
	}, r = null;
	e.repostedBy !== null && (r = {
		id: e.repostedBy.url,
		icon: { url: e.repostedBy.avatarUrl },
		name: e.repostedBy.name,
		handle: e.repostedBy.handle,
		preferredUsername: e.repostedBy.handle.split("@")[1],
		followedByMe: e.repostedBy.followedByMe,
		"@context": "",
		discoverable: !1,
		featured: "",
		followers: "",
		following: "",
		image: { url: "" },
		inbox: "",
		manuallyApprovesFollowers: !1,
		outbox: "",
		publicKey: {
			id: "",
			owner: "",
			publicKeyPem: ""
		},
		published: "",
		summary: "",
		type: "Person",
		url: ""
	});
	let i = "Note";
	e.type === w.Article ? i = "Article" : e.type === w.Tombstone && (i = "Tombstone");
	let a = {
		type: i,
		name: e.title,
		content: e.content,
		summary: e.summary,
		url: e.url,
		attributedTo: n,
		image: e.featureImageUrl ?? "",
		published: e.publishedAt,
		attachment: e.attachments,
		preview: {
			type: "",
			content: e.excerpt
		},
		id: e.id,
		replyCount: e.replyCount,
		likeCount: e.likeCount,
		liked: e.likedByMe,
		reposted: e.repostedByMe,
		repostCount: e.repostCount,
		authored: e.authoredByMe === !0,
		metadata: e.metadata,
		"@context": ""
	};
	return {
		id: e.id,
		type: t,
		actor: r === null ? n : r,
		object: a,
		"@context": "",
		to: ""
	};
}
//#endregion
//#region src/hooks/use-activity-pub-queries.ts
n();
var k;
async function A() {
	return k ||= (await (await fetch("/ghost/api/admin/site/")).json()).site.url, k;
}
function j(e, t) {
	return new ne(new URL(t), new URL("/ghost/api/admin/identities/", window.location.origin), e);
}
function M(e = "Rate limit exceeded", t = "You've made too many requests. Please try again later.") {
	u.error(e, { description: t });
}
function N(e = "Action failed", t = "This user has restricted who can interact with their account.") {
	u.error(e, { description: t });
}
var P = {
	outbox: (e) => ["outbox", e],
	liked: (e) => ["liked", e],
	user: (e) => ["user", e],
	profilePosts: (e) => e === null ? ["profile_posts"] : ["profile_posts", e],
	account: (e) => ["account", e],
	accountAliases: (e) => ["account_aliases", e],
	accountDomain: (e) => ["account_domain", e],
	accountFollows: (e, t) => [
		"account_follows",
		e,
		t
	],
	searchResults: (e) => ["search_results", e],
	suggestedProfiles: (e, t) => [
		"suggested_profiles",
		e,
		t
	],
	exploreProfiles: (e) => ["explore_profiles", e],
	replyChain: (e) => e === null ? ["reply_chain"] : ["reply_chain", e],
	feed: ["feed"],
	inbox: ["inbox"],
	discoveryFeed: ["discovery_feed"],
	postsByAccount: ["account_posts"],
	postsLikedByAccount: ["account_liked_posts"],
	notifications: (e) => ["notifications", e],
	notificationsCount: (e) => ["notifications_count", e],
	blockedAccounts: (e) => ["blocked_accounts", e],
	blockedDomains: (e) => ["blocked_domains", e],
	topics: () => ["topics"]
};
function F(e, t, n) {
	let r = [
		P.feed,
		P.inbox,
		P.discoveryFeed,
		P.postsLikedByAccount,
		P.profilePosts(null)
	];
	for (let i of r) e.setQueriesData({ queryKey: i }, (e) => e === void 0 ? e : {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			posts: e.posts.map((e) => e.object.id === t ? {
				...e,
				object: {
					...e.object,
					liked: n,
					likeCount: Math.max(n ? (e.object.likeCount || 0) + 1 : (e.object.likeCount || 0) - 1, 0)
				}
			} : e)
		}))
	}), i === P.postsLikedByAccount && (e.setQueriesData({ queryKey: i }, (e) => e && {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			posts: n ? e.posts : e.posts.filter((e) => e.object.id !== t)
		}))
	}), n && e.invalidateQueries({ queryKey: P.postsLikedByAccount }));
}
function I(e, t, n, r) {
	let i = [
		P.feed,
		P.inbox,
		P.discoveryFeed,
		P.profilePosts("index")
	];
	t !== "index" && i.push(P.profilePosts(t));
	let a = n.split("@")[1];
	for (let t of i) e.setQueriesData({ queryKey: t }, (e) => e === void 0 ? e : {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			posts: e.posts.map((e) => e.type !== "Announce" && e.actor?.preferredUsername === a ? {
				...e,
				actor: {
					...e.actor,
					followedByMe: r
				}
			} : e.type === "Announce" && typeof e.object.attributedTo == "object" && e.object.attributedTo && !Array.isArray(e.object.attributedTo) && "preferredUsername" in e.object.attributedTo && e.object.attributedTo.preferredUsername === a ? {
				...e,
				object: {
					...e.object,
					attributedTo: {
						...e.object.attributedTo,
						followedByMe: r
					}
				}
			} : e)
		}))
	});
	let o = P.replyChain(null);
	e.setQueriesData({ queryKey: o }, (e) => {
		if (!e) return e;
		let t = (e) => e.author.handle === n ? {
			...e,
			author: {
				...e.author,
				followedByMe: r
			}
		} : e;
		return {
			...e,
			post: t(e.post),
			ancestors: {
				...e.ancestors,
				chain: e.ancestors.chain.map(t)
			},
			children: e.children.map((e) => ({
				...e,
				post: t(e.post),
				chain: e.chain.map(t)
			}))
		};
	});
}
function L(e, t, n) {
	e.getQueryCache().getAll().forEach((r) => {
		let i = r.queryKey;
		Array.isArray(i) && i[0] === "account_follows" && e.setQueryData(i, (e) => e?.pages ? {
			...e,
			pages: e.pages.map((e) => ({
				...e,
				accounts: e.accounts.map((e) => e.handle === t ? {
					...e,
					isFollowing: n
				} : e)
			}))
		} : e);
	});
}
function R(e, t, n) {
	let r = P.replyChain(null);
	e.setQueriesData({ queryKey: r }, (e) => {
		if (!e) return e;
		let r = (e) => e.id === t ? {
			...e,
			likedByMe: n,
			likeCount: Math.max(n ? (e.likeCount || 0) + 1 : (e.likeCount || 0) - 1, 0)
		} : e;
		return {
			...e,
			post: r(e.post),
			ancestors: {
				...e.ancestors,
				chain: e.ancestors.chain.map(r)
			},
			children: e.children.map((e) => ({
				...e,
				post: r(e.post),
				chain: e.chain.map(r)
			}))
		};
	}), e.setQueryData(P.account("index"), (e) => e && {
		...e,
		likedCount: Math.max(0, e.likedCount + (n ? 1 : -1))
	});
}
function z(e, t, n, r) {
	let i = P.notifications(t);
	e.setQueriesData({ queryKey: i }, (e) => {
		if (!e || !e.pages) return e;
		try {
			return {
				...e,
				pages: e.pages.map((e) => !e || !e.notifications ? e : {
					...e,
					notifications: e.notifications.map((e) => !e || !e.post ? e : e.post.id === n ? {
						...e,
						post: {
							...e.post,
							likedByMe: r,
							likeCount: Math.max(r ? e.post.likeCount + 1 : e.post.likeCount - 1, 0)
						}
					} : e)
				})
			};
		} catch {
			return e;
		}
	});
}
function B(e, t, n, r) {
	let i = P.notifications(t);
	e.setQueriesData({ queryKey: i }, (e) => {
		if (!e || !e.pages) return e;
		try {
			return {
				...e,
				pages: e.pages.map((e) => !e || !e.notifications ? e : {
					...e,
					notifications: e.notifications.map((e) => !e || !e.post ? e : e.post.id === n ? {
						...e,
						post: {
							...e.post,
							repostedByMe: r,
							repostCount: Math.max(r ? e.post.repostCount + 1 : e.post.repostCount - 1, 0)
						}
					} : e)
				})
			};
		} catch {
			return e;
		}
	});
}
function V(e, t, n, r) {
	let i = P.notifications(t);
	e.setQueriesData({ queryKey: i }, (e) => {
		if (!e || !e.pages) return e;
		try {
			return {
				...e,
				pages: e.pages.map((e) => !e || !e.notifications ? e : {
					...e,
					notifications: e.notifications.map((e) => !e || !e.post ? e : e.post.id === n ? {
						...e,
						post: {
							...e.post,
							replyCount: Math.max((e.post.replyCount ?? 0) + r, 0)
						}
					} : e)
				})
			};
		} catch {
			return e;
		}
	});
}
function H(e, t, n) {
	let r = [
		P.feed,
		P.inbox,
		P.discoveryFeed,
		P.profilePosts("index"),
		P.postsLikedByAccount
	];
	for (let i of r) e.setQueriesData({ queryKey: i }, (e) => e && {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			posts: e.posts.map((e) => e.object.id === t ? {
				...e,
				object: {
					...e.object,
					replyCount: Math.max((e.object.replyCount ?? 0) + n, 0)
				}
			} : e)
		}))
	});
}
function U(e, t, n) {
	let r = P.replyChain(null);
	e.setQueriesData({
		queryKey: r,
		exact: !1
	}, (e) => {
		if (!e) return e;
		let r = (e) => e.id === t ? {
			...e,
			replyCount: Math.max((e.replyCount || 0) + n, 0)
		} : e;
		return {
			...e,
			post: r(e.post),
			ancestors: {
				...e.ancestors,
				chain: e.ancestors.chain.map(r)
			},
			children: e.children.map((e) => ({
				...e,
				post: r(e.post),
				chain: e.chain.map(r)
			}))
		};
	});
}
function oe(e) {
	return d({
		queryKey: P.blockedAccounts(e),
		refetchOnMount: "always",
		async queryFn({ pageParam: t }) {
			return j(e, await A()).getBlockedAccounts(t);
		},
		initialPageParam: void 0,
		getNextPageParam(e) {
			return e.next;
		}
	});
}
function se(e) {
	return d({
		queryKey: P.blockedDomains(e),
		refetchOnMount: "always",
		async queryFn({ pageParam: t }) {
			return j(e, await A()).getBlockedDomains(t);
		},
		initialPageParam: void 0,
		getNextPageParam(e) {
			return e.next;
		}
	});
}
function W(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).like(t);
		},
		onMutate: (n) => {
			F(t, n, !0), R(t, n, !0), z(t, e, n, !0);
		},
		onError(n, r) {
			F(t, r, !1), R(t, r, !1), z(t, e, r, !1), n.statusCode === 403 && N(), n.statusCode === 429 && M();
		}
	});
}
function G(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).unlike(t);
		},
		onMutate: (n) => {
			F(t, n, !1), R(t, n, !1), z(t, e, n, !1);
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function K(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).blockDomain(new URL(t.url));
		},
		onMutate: (e) => {
			e.handle && t.setQueryData(P.account(e.handle), (e) => e && {
				...e,
				domainBlockedByMe: !0,
				followedByMe: !1,
				followsMe: !1
			});
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function ce(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).unblockDomain(new URL(t.url));
		},
		onMutate: (e) => {
			e.handle && t.setQueryData(P.account(e.handle), (e) => e && {
				...e,
				domainBlockedByMe: !1
			});
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function le(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).block(new URL(t.apId));
		},
		onMutate: (e) => {
			t.setQueryData(P.account(e.handle), (e) => e && {
				...e,
				blockedByMe: !0,
				followedByMe: !1,
				followsMe: !1
			}), t.invalidateQueries({ queryKey: P.feed }), t.invalidateQueries({ queryKey: P.inbox }), t.invalidateQueries({ queryKey: P.discoveryFeed });
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function ue(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).unblock(new URL(t.apId));
		},
		onMutate: (e) => {
			t.setQueryData(P.account(e.handle), (e) => e && {
				...e,
				blockedByMe: !1
			});
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function q(e, t, n) {
	let r = [
		P.feed,
		P.inbox,
		P.discoveryFeed,
		P.profilePosts(null)
	];
	for (let i of r) e.setQueriesData({ queryKey: i }, (e) => e === void 0 ? e : {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			posts: e.posts.map((e) => e.object.id === t ? {
				...e,
				object: {
					...e.object,
					reposted: n,
					repostCount: Math.max(n ? e.object.repostCount + 1 : e.object.repostCount - 1, 0)
				}
			} : e)
		}))
	});
}
function J(e, t, n) {
	let r = P.replyChain(null);
	e.setQueriesData({ queryKey: r }, (e) => {
		if (!e) return e;
		let r = (e) => e.id === t ? {
			...e,
			repostedByMe: n,
			repostCount: Math.max(n ? (e.repostCount || 0) + 1 : (e.repostCount || 0) - 1, 0)
		} : e;
		return {
			...e,
			post: r(e.post),
			ancestors: {
				...e.ancestors,
				chain: e.ancestors.chain.map(r)
			},
			children: e.children.map((e) => ({
				...e,
				post: r(e.post),
				chain: e.chain.map(r)
			}))
		};
	});
}
function de(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).repost(t);
		},
		onMutate: (n) => {
			q(t, n, !0), J(t, n, !0), B(t, e, n, !0);
		},
		onError(n, r) {
			q(t, r, !1), J(t, r, !1), B(t, e, r, !1), n.statusCode === 403 && N(), n.statusCode === 429 && M();
		}
	});
}
function fe(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).derepost(t);
		},
		onMutate: (n) => {
			q(t, n, !1), J(t, n, !1), B(t, e, n, !1);
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function pe(e) {
	return l({
		queryKey: P.user(e),
		async queryFn() {
			return j(e, await A()).getUser();
		}
	});
}
function me(e, t, n) {
	let r = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).unfollow(t);
		},
		onSuccess(n, i) {
			let a = P.account(i === "me" ? "index" : i);
			r.setQueryData(a, (e) => e && {
				...e,
				followedByMe: !1,
				followerCount: e.followerCount - 1 < 0 ? 0 : e.followerCount - 1
			});
			let o = P.accountFollows(i, "followers");
			r.setQueryData(o, (e) => {
				if (!e?.pages?.[0]) return e;
				let t = r.getQueryData(P.account("index"));
				return t ? {
					...e,
					pages: e.pages.map((e) => ({
						...e,
						accounts: e.accounts.filter((e) => e.name !== t.name)
					}))
				} : e;
			});
			let s = P.account("index");
			r.setQueryData(s, (e) => e && {
				...e,
				followingCount: e.followingCount - 1
			});
			let c = e === "index" ? "me" : e, l = P.accountFollows(c, "following");
			r.getQueryData(l) ? r.setQueryData(l, (e) => e?.pages ? {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					accounts: e.accounts.filter((e) => e.handle !== i)
				}))
			} : e) : r.invalidateQueries({ queryKey: l }), L(r, i, !1), r.setQueryData(P.exploreProfiles(e), (e) => {
				if (!e) return e;
				let t = e.pages.map((e) => {
					let t = Object.entries(e.results).reduce((e, [t, n]) => {
						let r = n.sites.map((e) => e.handle === i ? {
							...e,
							followedByMe: !1,
							followerCount: Math.max(0, e.followerCount - 1)
						} : e);
						return e[t] = {
							...n,
							sites: r
						}, e;
					}, {});
					return {
						...e,
						results: t
					};
				});
				return {
					...e,
					pages: t
				};
			}), r.setQueriesData({
				queryKey: ["suggested_profiles"],
				exact: !1
			}, (e) => e && e.map((e) => e.handle === i ? {
				...e,
				followedByMe: !1,
				followerCount: Math.max(0, e.followerCount - 1)
			} : e)), I(r, e, i, !1), t();
		},
		onError: (e) => {
			e.statusCode === 429 && M(), n();
		}
	});
}
function he(e, t, n) {
	let r = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).follow(t);
		},
		onSuccess(n, i) {
			let a = P.account(i === "me" ? "index" : i);
			r.setQueryData(a, (e) => e && {
				...e,
				followedByMe: !0,
				followerCount: e.followerCount + 1
			});
			let o = P.account("index");
			r.setQueryData(o, (e) => e && {
				...e,
				followingCount: e.followingCount + 1
			});
			let s = P.accountFollows(i, "followers"), c = e === "index" ? "me" : e, l = P.accountFollows(c, "following");
			r.getQueryData(l) ? r.setQueryData(l, (e) => {
				if (!e?.pages?.[0]) return e;
				let t = r.getQueryData(P.account(i === "me" ? "index" : i));
				if (!t) return e;
				let n = {
					id: t.id,
					name: t.name,
					handle: t.handle,
					avatarUrl: t.avatarUrl,
					blockedByMe: t.blockedByMe,
					domainBlockedByMe: t.domainBlockedByMe,
					isFollowing: !0
				};
				return {
					...e,
					pages: [{
						...e.pages[0],
						accounts: [n, ...e.pages[0].accounts]
					}, ...e.pages.slice(1)]
				};
			}) : r.invalidateQueries({ queryKey: l }), L(r, i, !0), r.setQueryData(P.exploreProfiles(e), (e) => {
				if (!e) return e;
				let t = e.pages.map((e) => {
					let t = Object.entries(e.results).reduce((e, [t, n]) => {
						let r = n.sites.map((e) => e.handle === i ? {
							...e,
							followedByMe: !0,
							followerCount: e.followerCount + 1
						} : e);
						return e[t] = {
							...n,
							sites: r
						}, e;
					}, {});
					return {
						...e,
						results: t
					};
				});
				return {
					...e,
					pages: t
				};
			}), r.setQueriesData({
				queryKey: ["suggested_profiles"],
				exact: !1
			}, (e) => e && e.map((e) => e.handle === i ? {
				...e,
				followedByMe: !0,
				followerCount: e.followerCount + 1
			} : e)), r.setQueryData(s, (e) => {
				if (!e?.pages?.[0]) return e;
				let t = r.getQueryData(P.account("index"));
				if (!t) return e;
				let n = {
					id: t.url,
					type: "Person",
					preferredUsername: "index",
					name: t.name,
					url: t.url,
					handle: `index@${new URL(t.url).hostname}`,
					icon: {
						type: "Image",
						url: t.avatarUrl
					},
					isFollowing: !1
				};
				return {
					...e,
					pages: [{
						...e.pages[0],
						accounts: [n, ...e.pages[0].accounts]
					}, ...e.pages.slice(1)]
				};
			}), I(r, e, i, !0), t();
		},
		onError(e) {
			n(), e.statusCode === 429 && M(), e.statusCode === 403 && N();
		}
	});
}
function ge(e, t) {
	let n = s(), r = P.searchResults(t);
	return {
		searchQuery: l({
			queryKey: r,
			enabled: t.length > 0,
			refetchOnMount: "always",
			async queryFn() {
				return j(e, await A()).search(t);
			}
		}),
		updateAccountSearchResult: (e, t) => {
			n.setQueryData(r, (n) => n && {
				...n,
				accounts: n.accounts.map((n) => n.id === e ? {
					...n,
					...t
				} : n)
			});
		}
	};
}
function Y(e, t, n, r) {
	e.setQueryData(t, (e) => e && {
		...e,
		pages: e.pages.map((e, t) => t === 0 ? {
			...e,
			[n]: [r, ...e[n]]
		} : e)
	});
}
function X(e, t, n, r, i) {
	e.setQueryData(t, (e) => e && {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			[n]: e[n].map((e) => e.id === r ? i(e) : e)
		}))
	});
}
function Z(e, t, n, r) {
	e.setQueryData(t, (e) => e && {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			[n]: e[n].filter((e) => e.id !== r)
		}))
	});
}
function _e(e, t) {
	let n = s();
	return c({
		async mutationFn({ inReplyTo: t, content: n, imageUrl: r, altText: i }) {
			let a = j(e, await A()), o = r ? {
				url: r,
				altText: i
			} : void 0;
			return a.reply(t, n, o);
		},
		onMutate: ({ inReplyTo: r }) => {
			if (!t) throw Error("Cannot create reply without actor props");
			let i = D();
			return H(n, r, 1), U(n, r, 1), V(n, e, r, 1), { id: i };
		},
		onSuccess: (e, t) => {
			if (e.id === void 0) throw Error("Activity returned from API has no id");
			n.invalidateQueries({ queryKey: P.replyChain(t.inReplyTo) });
		},
		onError(t, r) {
			console.error(t), H(n, r.inReplyTo, -1), U(n, r.inReplyTo, -1), V(n, e, r.inReplyTo, -1), t.statusCode === 403 && N(), t.statusCode === 429 && M(), u.error("An error occurred while sending your reply.");
		}
	});
}
function ve(e, t) {
	let n = s(), r = P.feed, i = P.outbox(e), a = P.profilePosts("index");
	return c({
		async mutationFn({ content: t, imageUrl: n, altText: r }) {
			let i = j(e, await A()), a = n ? {
				url: n,
				altText: r
			} : void 0;
			return i.note(t, a);
		},
		onMutate: ({ content: e, imageUrl: o }) => {
			if (!t) throw Error("Cannot create note without actor props");
			let s = ae(e), c = D(), l = ie(t, c, s, o);
			return Y(n, r, "posts", l), Y(n, i, "data", l), Y(n, a, "posts", l), { id: c };
		},
		onSuccess: (e, t, o) => {
			if (e.id === void 0) throw Error("Post returned from API has no id");
			let s = O(e);
			X(n, r, "posts", o?.id ?? "", () => s), X(n, i, "data", o?.id ?? "", () => s), X(n, a, "posts", o?.id ?? "", () => s);
		},
		onError(e, t, o) {
			console.error(e), Z(n, r, "posts", o?.id ?? ""), Z(n, i, "data", o?.id ?? ""), Z(n, a, "posts", o?.id ?? ""), e.statusCode === 429 && M(), u.error("An error occurred while posting your note.");
		}
	});
}
function ye(e, t, n) {
	let r = n?.enabled !== !1;
	return l({
		queryKey: P.account(t === "me" ? "index" : t),
		enabled: r,
		async queryFn() {
			return j(e, await A()).getAccount(t);
		}
	});
}
function be(e, t) {
	let n = s();
	return d({
		queryKey: P.accountFollows(e, t),
		async queryFn({ pageParam: r }) {
			let i = await j("index", await A()).getAccountFollows(e, t, r);
			return i.accounts && i.accounts.forEach((e) => {
				n.setQueryData(P.account(e.handle), e);
			}), i;
		},
		initialPageParam: void 0,
		getNextPageParam(e) {
			return e.next;
		}
	});
}
function xe(e) {
	return l({
		queryKey: P.accountAliases(e),
		async queryFn() {
			return j(e, await A()).getAccountAliases();
		}
	});
}
function Se(e) {
	return l({
		queryKey: P.accountDomain(e),
		async queryFn() {
			return j(e, await A()).getDomain();
		}
	});
}
function Ce(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).updateDomain(t);
		},
		onSuccess(n) {
			t.setQueryData(P.accountDomain(e), n), t.invalidateQueries({ queryKey: P.account(e) });
		}
	});
}
function we(e) {
	return c({ async mutationFn(t) {
		return j(e, await A()).validateDomain(t);
	} });
}
function Te(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).addAccountAlias(t);
		},
		onSuccess(n) {
			t.setQueryData(P.accountAliases(e), n);
		}
	});
}
function Ee(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).removeAccountAlias(t);
		},
		onSuccess(n) {
			t.setQueryData(P.accountAliases(e), n);
		}
	});
}
function De(e) {
	let t = P.feed, n = s();
	return {
		feedQuery: d({
			queryKey: t,
			enabled: e.enabled,
			staleTime: 60 * 1e3,
			async queryFn({ pageParam: e }) {
				return j("index", await A()).getFeed(e).then((e) => ({
					posts: e.posts.map(O),
					next: e.next
				}));
			},
			initialPageParam: void 0,
			getNextPageParam(e) {
				return e.next;
			}
		}),
		updateFeedActivity: (e, r) => {
			X(n, t, "posts", e, (e) => ({
				...e,
				...r
			}));
		}
	};
}
function Oe(e) {
	let t = P.inbox, n = s();
	return {
		inboxQuery: d({
			queryKey: t,
			enabled: e.enabled,
			staleTime: 20 * 1e3,
			async queryFn({ pageParam: e }) {
				return j("index", await A()).getInbox(e).then((e) => ({
					posts: e.posts.map(O),
					next: e.next
				}));
			},
			initialPageParam: void 0,
			getNextPageParam(e) {
				return e.next;
			}
		}),
		updateInboxActivity: (e, r) => {
			X(n, t, "posts", e, (e) => ({
				...e,
				...r
			}));
		}
	};
}
function ke(e) {
	let t = [...P.discoveryFeed, e.topic], n = s();
	return {
		discoveryFeedQuery: d({
			queryKey: t,
			enabled: e.enabled,
			staleTime: 20 * 1e3,
			async queryFn({ pageParam: t }) {
				return j("index", await A()).getDiscoveryFeed(e.topic, t).then((e) => ({
					posts: e.posts.map(O),
					next: e.next
				}));
			},
			initialPageParam: void 0,
			getNextPageParam(e) {
				return e.next;
			}
		}),
		updateDiscoveryFeedActivity: (e, r) => {
			X(n, t, "posts", e, (e) => ({
				...e,
				...r
			}));
		}
	};
}
function Ae(e, t) {
	let n = P.profilePosts(e === "me" ? "index" : e), r = s();
	return {
		postsByAccountQuery: d({
			queryKey: n,
			enabled: t.enabled,
			async queryFn({ pageParam: t }) {
				return j("index", await A()).getPostsByAccount(e, t).then((e) => ({
					posts: e.posts.map(O),
					next: e.next
				})).catch(() => ({
					posts: [],
					next: null
				}));
			},
			initialPageParam: void 0,
			getNextPageParam(e) {
				return e.next;
			}
		}),
		updatePostsByAccount: (e, t) => {
			X(r, n, "posts", e, (e) => ({
				...e,
				...t
			}));
		}
	};
}
function je(e) {
	let t = P.postsLikedByAccount, n = s();
	return {
		postsLikedByAccountQuery: d({
			queryKey: t,
			enabled: e.enabled,
			async queryFn({ pageParam: e }) {
				return j("index", await A()).getPostsLikedByAccount(e).then((e) => ({
					posts: e.posts.map(O),
					next: e.next
				}));
			},
			initialPageParam: void 0,
			getNextPageParam(e) {
				return e.next;
			}
		}),
		updatePostsLikedByAccount: (e, r) => {
			X(n, t, "posts", e, (e) => ({
				...e,
				...r
			}));
		}
	};
}
function Me(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).delete(t.id);
		},
		onMutate: ({ id: n, parentId: r }) => {
			let i = t.getQueryData(P.feed);
			t.setQueryData(P.feed, (e) => e && {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					posts: e.posts.filter((e) => e.id !== n).map((e) => e.object.id === r ? {
						...e,
						object: {
							...e.object,
							replyCount: e.object.replyCount - 1
						}
					} : e)
				}))
			});
			let a = t.getQueryData(P.inbox);
			t.setQueryData(P.inbox, (e) => e && {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					posts: e.posts.filter((e) => e.id !== n).map((e) => e.object.id === r ? {
						...e,
						object: {
							...e.object,
							replyCount: e.object.replyCount - 1
						}
					} : e)
				}))
			}), r && V(t, e, r, -1);
			let o = P.outbox(e), s = t.getQueryData(o);
			t.setQueryData(o, (e) => e && {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					data: e.data.filter((e) => e.object.id !== n)
				}))
			});
			let c = P.liked(e), l = t.getQueryData(c), u = !1;
			t.setQueryData(c, (e) => e && {
				...e,
				pages: e.pages.map((e) => (u = e.data.some((e) => e.object.id === n), {
					...e,
					data: e.data.filter((e) => e.object.id !== n)
				}))
			}), [
				P.feed,
				P.inbox,
				P.discoveryFeed,
				P.profilePosts("index"),
				P.postsLikedByAccount
			].some((e) => t.getQueryData(e)?.pages.some((e) => e.posts.some((e) => e.id === n && e.object.liked))) && t.setQueryData(P.account(e === "me" ? "index" : e), (e) => e && {
				...e,
				likedCount: Math.max(0, e.likedCount - 1)
			});
			let d = P.profilePosts(null), f = t.getQueriesData({ queryKey: d });
			t.setQueriesData({ queryKey: d }, (e) => e && {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					posts: e.posts.filter((e) => e.object.id !== n)
				}))
			});
			let p = [], m;
			u && (p = P.account(e === "me" ? "index" : e), m = t.getQueryData(p), t.setQueryData(p, (e) => e && {
				...e,
				likedCount: e.likedCount - 1 < 0 ? 0 : e.likedCount - 1
			}));
			let h = P.profilePosts("index"), g = t.getQueryData(h);
			t.setQueryData(h, (e) => e && {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					posts: e.posts.filter((e) => e.object.id !== n)
				}))
			});
			let _ = P.postsLikedByAccount, v = t.getQueryData(_);
			return t.setQueryData(_, (e) => e && {
				...e,
				pages: e.pages.map((e) => ({
					...e,
					posts: e.posts.filter((e) => e.object.id !== n)
				}))
			}), r && t.setQueriesData({
				queryKey: ["reply_chain"],
				exact: !1
			}, (e) => {
				if (!e) return e;
				let t = e.children.filter((e) => e.post.id !== n).map((e) => ({
					...e,
					chain: e.chain.filter((e) => e.id !== n)
				})), i = e.post;
				return e.post.id === r && (i = {
					...e.post,
					replyCount: Math.max(0, (e.post.replyCount || 0) - 1)
				}), {
					...e,
					post: i,
					children: t
				};
			}), {
				previousFeed: {
					key: P.feed,
					data: i
				},
				previousInbox: {
					key: P.inbox,
					data: a
				},
				previousOutbox: {
					key: o,
					data: s
				},
				previousLiked: {
					key: c,
					data: l
				},
				previousProfilePosts: {
					key: d,
					data: f
				},
				previousAccount: u ? {
					key: p,
					data: m
				} : null,
				previousPostsByAccount: {
					key: P.profilePosts("index"),
					data: g
				},
				previousPostsLikedByAccount: {
					key: P.postsLikedByAccount,
					data: v
				}
			};
		},
		onError: (e, n, r) => {
			r && (t.setQueryData(r.previousFeed.key, r.previousFeed.data), t.setQueryData(r.previousInbox.key, r.previousInbox.data), t.setQueryData(r.previousOutbox.key, r.previousOutbox.data), t.setQueryData(r.previousLiked.key, r.previousLiked.data), r.previousProfilePosts.data.forEach(([e, n]) => {
				t.setQueryData(e, n);
			}), r.previousAccount && t.setQueryData(r.previousAccount.key, r.previousAccount.data), r.previousPostsByAccount && t.setQueryData(P.profilePosts("index"), r.previousPostsByAccount), r.previousPostsLikedByAccount && t.setQueryData(P.postsLikedByAccount, r.previousPostsLikedByAccount));
		},
		onSuccess: (e, { parentId: n }) => {
			t.invalidateQueries({ queryKey: ["reply_chain"] }), n && (t.invalidateQueries({ queryKey: P.feed }), t.invalidateQueries({ queryKey: P.inbox }));
		}
	});
}
function Ne(e) {
	return d({
		queryKey: P.notifications(e),
		async queryFn({ pageParam: t }) {
			return j(e, await A()).getNotifications(t);
		},
		initialPageParam: void 0,
		getNextPageParam(e) {
			return e.next;
		}
	});
}
function Pe(t, n) {
	let i = l({
		queryKey: P.replyChain(n),
		enabled: !!n,
		async queryFn() {
			if (!n) throw Error("Post ID is required");
			let e = j(t, await A());
			try {
				return await e.getReplies(n);
			} catch (t) {
				if (T(t) && t.statusCode === 404) return await e.getPost(n), await e.getReplies(n);
				throw t;
			}
		}
	}), [o, s] = e(null), [c, u] = e(null);
	a(() => {
		i.data ? s(i.data) : i.error && u(i.error);
	}, [i.data, i.error]);
	let d = r(async () => {
		if (!(!o?.ancestors.hasMore || !o?.ancestors.chain[0])) try {
			let e = await j(t, await A()).getReplies(o.ancestors.chain[0].id);
			s((t) => t && {
				...t,
				ancestors: {
					chain: [...e.ancestors.chain, ...t.ancestors.chain],
					hasMore: e.ancestors.hasMore
				}
			});
		} catch (e) {
			u(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to load more ancestors"));
		}
	}, [
		t,
		o?.ancestors.hasMore,
		o?.ancestors.chain
	]), f = r(async () => {
		if (o?.next && n) try {
			let e = await j(t, await A()).getReplies(n, o.next);
			s((t) => t && {
				...t,
				children: [...t.children, ...e.children],
				next: e.next
			});
		} catch (e) {
			u(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to load more children"));
		}
	}, [
		t,
		o?.next,
		n
	]), p = r(async (e) => {
		if (o?.children[e]?.hasMore) try {
			let n = j(t, await A()), r = o.children[e], i = r.chain.length > 1 ? r.chain[r.chain.length - 2] : r.post, a = await n.getReplies(i.id), c = a.children[0].chain;
			s((t) => {
				if (!t) return t;
				let n = [...t.children];
				return n[e] = {
					...r,
					chain: [...r.chain, ...c],
					hasMore: a.children[0].hasMore
				}, {
					...t,
					children: n
				};
			});
		} catch (e) {
			u(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to load more child replies"));
		}
	}, [t, o]);
	return {
		data: o,
		isLoading: i.isLoading,
		error: c,
		loadMoreAncestors: d,
		loadMoreChildren: f,
		loadMoreChildReplies: p,
		hasMoreAncestors: !!o?.ancestors.hasMore,
		hasMoreChildren: !!o?.next,
		hasMoreChildReplies: (e) => !!o?.children[e]?.hasMore
	};
}
function Fe(e) {
	let t = s();
	return c({
		async mutationFn(t) {
			return j(e, await A()).updateAccount(t);
		},
		onSuccess() {
			t.invalidateQueries({ queryKey: P.account("index") }), t.invalidateQueries({ queryKey: P.accountDomain("index") });
		}
	});
}
async function Q(e) {
	return j("index", await A()).upload(e);
}
function Ie(e, t = !0) {
	let n = r(async () => await A(), []), i = r(async () => j(e, await n()), [e, n]);
	return l({
		queryKey: P.notificationsCount(e),
		enabled: t,
		async queryFn() {
			return (await (await i()).getNotificationsCount()).count;
		}
	});
}
function Le(e) {
	let t = s(), n = r(async () => await A(), []), i = r(async () => j(e, await n()), [e, n]);
	return c({ async mutationFn() {
		return t.setQueryData(P.notificationsCount(e), 0), (await i()).resetNotificationsCount();
	} });
}
function Re(e, t) {
	let n = s(), r = [...P.exploreProfiles(e), t];
	return {
		exploreProfilesQuery: d({
			queryKey: r,
			staleTime: 3600 * 1e3,
			async queryFn({ pageParam: r }) {
				let i = await j(e, await A()).getExploreAccounts(t, r);
				return i.accounts.forEach((e) => {
					n.setQueryData(P.account(e.handle), e);
				}), {
					accounts: i.accounts,
					next: i.next
				};
			},
			initialPageParam: void 0,
			getNextPageParam(e) {
				return e.next;
			}
		}),
		updateExploreProfile: (e, t) => {
			n.setQueryData(r, (n) => {
				if (!n) return n;
				let r = n.pages.map((n) => {
					let r = n.accounts.map((n) => n.id === e ? {
						...n,
						...t
					} : n);
					return {
						...n,
						accounts: r
					};
				});
				return {
					...n,
					pages: r
				};
			});
		}
	};
}
function ze(e, t = 3) {
	let n = s(), r = P.suggestedProfiles(e, t);
	return {
		suggestedProfilesQuery: l({
			queryKey: r,
			async queryFn() {
				let e = (await j("index", await A()).getRecommendations(t)).accounts;
				return e.length > 0 && e.forEach((e) => {
					n.setQueryData(P.account(e.handle), e);
				}), e.length > 0 ? e : null;
			},
			retry: !1,
			staleTime: 3600 * 1e3
		}),
		updateSuggestedProfile: (e, t) => {
			n.setQueryData(r, (n) => n && n.map((n) => n.id === e ? {
				...n,
				...t
			} : n));
		}
	};
}
function Be() {
	return { topicsQuery: l({
		queryKey: P.topics(),
		async queryFn() {
			return j("index", await A()).getTopics();
		},
		staleTime: 1440 * 60 * 1e3,
		retry: !1
	}) };
}
function $(e, t) {
	let n = P.account("index");
	e.setQueryData(n, (e) => e && {
		...e,
		...t
	});
}
function Ve(e) {
	let t = s();
	return c({
		async mutationFn() {
			return j(e, await A()).enableBluesky();
		},
		onSuccess() {
			$(t, {
				blueskyEnabled: !0,
				blueskyHandleConfirmed: !1,
				blueskyHandle: null
			}), t.invalidateQueries({ queryKey: P.accountFollows("index", "following") });
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function He(e) {
	let t = s();
	return c({
		async mutationFn() {
			return j(e, await A()).disableBluesky();
		},
		onSuccess() {
			$(t, {
				blueskyEnabled: !1,
				blueskyHandleConfirmed: !1,
				blueskyHandle: null
			}), t.invalidateQueries({ queryKey: P.accountFollows("index", "following") });
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
function Ue(e) {
	let t = s();
	return c({
		async mutationFn() {
			return j(e, await A()).confirmBlueskyHandle();
		},
		onSuccess(e) {
			e !== "" && $(t, {
				blueskyEnabled: !0,
				blueskyHandleConfirmed: !0,
				blueskyHandle: e
			});
		},
		onError(e) {
			e.statusCode === 429 && M();
		}
	});
}
//#endregion
export { de as A, Fe as B, Ie as C, Ee as D, je as E, ce as F, T as G, we as H, ue as I, x as J, y as K, me as L, ge as M, ze as N, Pe as O, Be as P, G as R, ve as S, Ae as T, O as U, pe as V, re as W, S as Y, Re as _, ye as a, Oe as b, le as c, Ue as d, Me as f, Ve as g, ke as h, be as i, Le as j, _e as k, oe as l, He as m, xe as n, Te as o, fe as p, b as q, Se as r, K as s, Q as t, se as u, De as v, Ne as w, W as x, he as y, Ce as z };

//# sourceMappingURL=use-activity-pub-queries-VzbN99u_.js.map