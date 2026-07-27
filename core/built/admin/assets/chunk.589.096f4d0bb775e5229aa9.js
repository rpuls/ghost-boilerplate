(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[589],{46175(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.cleanBasicHtml=function(e="",t={}){const r=Object.assign({},{},t)
if(!r.createDocument){const e="undefined"!=typeof DOMParser&&DOMParser||"undefined"!=typeof window&&window.DOMParser
if(!e)throw new Error("cleanBasicHtml() must be passed a `createDocument` function as an option when used in a non-browser environment")
r.createDocument=function(t){return(new e).parseFromString(t,"text/html")}}let s=e
if(r.allowBr&&"<br>"!==s||(s=s.replace(/<br\s?\/?>/g," ")),r.removeCodeWrappers&&(s=function(e){return e.replace(/<code\b[^>]*>((.*?){.*?}(.*?))<\/code>/gi,"$1")}(s)),s=s.replace(/(\s|&nbsp;){2,}/g," ").trim().replace(/^&nbsp;|&nbsp$/g,"").trim(),s){const e=r.createDocument(s)
if(""===e.body.textContent)return""
e.body.querySelectorAll("*").forEach(t=>{if(!t.textContent?.trim().replace(/\u200c+/g,"")){if(r.allowBr&&"BR"===t.tagName)return
if(r.allowBr&&t.querySelector("br"))return t.replaceWith(e.createElement("br"))
if(t.textContent&&t.textContent.length>0){const r=e.createTextNode(" ")
return t.replaceWith(r)}return t.remove()}}),s=r.firstChildInnerContent&&e.body.firstElementChild?e.body.firstElementChild.innerHTML.trim():e.body.innerHTML.trim()}return s}},91075(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.cleanBasicHtml=void 0
var s=r(46175)
Object.defineProperty(t,"cleanBasicHtml",{enumerable:!0,get:function(){return s.cleanBasicHtml}})},26942(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=t.lexicalToMobiledoc=void 0
var s=r(89538)
Object.defineProperty(t,"lexicalToMobiledoc",{enumerable:!0,get:function(){return s.lexicalToMobiledoc}}),Object.defineProperty(t,"mobiledocToLexical",{enumerable:!0,get:function(){return s.mobiledocToLexical}})},89538(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=t.lexicalToMobiledoc=void 0
const s=r(46107)
Object.defineProperty(t,"lexicalToMobiledoc",{enumerable:!0,get:function(){return s.lexicalToMobiledoc}})
const n=r(60403)
Object.defineProperty(t,"mobiledocToLexical",{enumerable:!0,get:function(){return n.mobiledocToLexical}})},46107(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.lexicalToMobiledoc=function(e){if(null==e||""===e)return JSON.stringify(n)
const t=JSON.parse(e)
if(!t.root)return JSON.stringify(n)
const a={version:r,ghostVersion:s,atoms:[],cards:[],markups:[],sections:[]}
return t.root.children?.forEach(e=>function(e,t){"paragraph"===e.type&&p(e,t),o.includes(e.type)&&p(e,t,e.tag),"quote"===e.type&&p(e,t,"blockquote"),"aside"===e.type&&p(e,t,"aside"),"list"===e.type&&function(e,t,r="ul"){const s=function(e,t){const r=[]
return function(e){const t=[];(function e(r){r.children?.forEach(r=>{r.children?.forEach(t=>{"list"===t.type&&(e(t),r.children.splice(r.children.indexOf(t),1))}),"listitem"===r.type&&r.children?.length&&t.push(r)})})(e),e.children=t}(e),e.children?.forEach(e=>{if("listitem"===e.type){const s=m(e,t)
r.push(s)}}),r}(e,t),n=[3,r,s]
t.sections.push(n)}(e,t,e.tag),l.includes(e.type)&&function(e,t){const r=e.type
let s=e.type
u[s]&&(s=u[s])
const n={}
for(const i of Object.keys(e))"type"!==i&&(n[i]=e[i])
if(c[r]){const e=c[r]
for(const[t,r]of Object.entries(e))n[r]=n[t],delete n[t]}const a=[s,n]
t.cards.push(a)
const o=[10,t.cards.length-1]
t.sections.push(o)}(e,t)}(e,a)),JSON.stringify(a)}
const r="0.3.1",s="4.0",n={version:r,ghostVersion:s,markups:[],atoms:[],cards:[],sections:[[1,"p",[[0,[],0,""]]]]},a=new Map([[1,"strong"],[2,"em"],[4,"s"],[8,"u"],[16,"code"],[32,"sub"],[64,"sup"]]),o=["heading","extended-heading"],i=["text","extended-text"],l=["audio","bookmark","button","callout","codeblock","email-cta","email","embed","file","gallery","header","horizontalrule","html","image","markdown","paywall","product","signup","toggle","video"],u={codeblock:"code",horizontalrule:"hr"},c={embed:{embedType:"type"}}
function d(e,t){let r=t.markups.findIndex(t=>t[0]===e)
return-1===r&&(t.markups.push([e]),r=t.markups.length-1),r}function p(e,t,r="p"){const s=[1,r,m(e,t)]
t.sections.push(s)}function m(e,t){const r=[]
if(e.children?.length){let s=[]
e.children.forEach((n,a)=>{if(i.includes(n.type))if(0!==n.format){const o=[]
let l=0
if(h(n.format).forEach(e=>{s.includes(e)||(s.push(e),o.push(e))}),e.children[a+1]&&i.includes(e.children[a+1].type)){const t=h(e.children[a+1].format),r=s.findIndex(e=>!t.includes(e));-1!==r&&(l=s.slice(r).length,s=s.slice(0,r))}else l=s.length,s=[]
const u=o.map(e=>d(e,t))
r.push([0,u,l,n.text])}else{const e=s.length
s=[],r.push([0,[],e,n.text])}if("link"===n.type){const e=["a",["href",n.url]],a=t.markups.push(e)-1
n.children?.forEach((o,i)=>{if(0!==o.format){const l=[],u=[]
0===i&&(s.push(e),l.push(a))
let c=0
if(h(o.format).forEach(e=>{s.includes(e)||(s.push(e),u.push(e))}),n.children[i+1]){const t=h(n.children[i+1].format),r=s.findIndex(r=>!(JSON.stringify(r)===JSON.stringify(e)||t.includes(r)));-1!==r&&(c=s.slice(r).length,s=s.slice(0,r))}else c=s.length,s=[]
l.push(...u.map(e=>d(e,t))),r.push([0,l,c,o.text])}else{const t=[]
0===i&&(s.push(e),t.push(a))
let l=s.length-1
n.children[i+1]||(l+=1,s=[]),r.push([0,t,l,o.text])}})}if("linebreak"===n.type){const e=function(e,t){let r=t.atoms.findIndex(t=>t===e)
return-1===r&&(t.atoms.push(e),r=t.atoms.length-1),r}(["soft-return","",{}],t)
r.push([1,[],0,e])}})}else r.push([0,[],0,""])
return r}function h(e){const t=[]
return a.forEach((r,s)=>{0!==(e&s)&&t.push(r)}),t}},60403(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=function(e){if(null==e||""===e)return JSON.stringify(r)
const t=JSON.parse(e)
if(!t.sections)return JSON.stringify(r)
const s={root:{children:[],direction:null,format:"",indent:0,type:"root",version:1}}
return t.sections.forEach(e=>function(e,t,r){const s=e[0]
if(1===s){const s=function(e,t){const r=e[1],s=e[2],n=d(r)
return u(n,s,t),n}(e,t)
r.root.children.push(s),s.children&&s.children.length>0&&(r.root.direction="ltr")}else if(2===s);else if(3===s){const s=function(e,t){const r=e[1],s=e[2],n=d(r,{tag:r,type:"list",listType:"ul"===r?"bullet":"number",start:1,direction:"ltr"})
return s?.forEach((e,r)=>{const s=d("li",{type:"listitem",value:r+1,direction:"ltr"})
u(s,e,t),n.children.push(s)}),n}(e,t)
r.root.children.push(s),r.root.direction="ltr"}else if(10===s){const s=function(e,t){const r=e[1]
let[s,n]=t.cards[r]
if(s=o[s]||s,i[s]){const e=i[s]
for(const[t,r]of Object.entries(e))n[r]=n[t],delete n[t]}return l[s]&&(n=l[s](n)),delete n.type,{type:s,...n}}(e,t)
r.root.children.push(s)}}(e,t,s)),JSON.stringify(s)}
const r={root:{children:[],direction:null,format:"",indent:0,type:"root",version:1}},s={p:{type:"paragraph"},h1:{type:"heading",tag:"h1"},h2:{type:"heading",tag:"h2"},h3:{type:"heading",tag:"h3"},h4:{type:"heading",tag:"h4"},h5:{type:"heading",tag:"h5"},h6:{type:"heading",tag:"h6"},blockquote:{type:"quote"},aside:{type:"aside"},a:{type:"link",rel:null,target:null,title:null,url:null}},n={"soft-return":{type:"linebreak",version:1}},a={strong:1,b:1,em:2,i:2,s:4,u:8,code:16,sub:32,sup:64},o={code:"codeblock",hr:"horizontalrule"},i={embed:{type:"embedType"}},l={callout:e=>(e.backgroundColor&&!e.backgroundColor.match(/^[a-zA-Z\d-]+$/)&&(e.backgroundColor="white"),e)}
function u(e,t,r){const s=r.markups,a=r.atoms,o=[]
let i,l,u,h=!1
for(let f=0;f<t.length;f++){const[r,g,y,b]=t[f]
if("atom"==(0===r?"markup":"atom")){const t=a[b][0]
p(e,n[t])
continue}if(g.forEach(e=>{const t=s[e]
if("a"===t[0]){h=!0
const e=t[1]
e&&"href"===e[0]&&(l=e[1]),e&&"rel"===e[2]&&(u=e[3])}o.push(t)}),void 0!==b){const t=m(o)
h?(i=void 0!==i?i:d("a",{url:l,rel:u||null}),p(i,c(b,t))):p(e,c(b,t))}for(let t=0;t<y;t++){const t=o.pop()
t&&"a"===t[0]&&(p(e,i),h=!1,l=void 0,i=void 0)}}}function c(e,t){return{detail:0,format:t,mode:"normal",style:"",text:e,type:"text",version:1}}function d(e,t={}){const r=s[e]
return{children:[],direction:"ltr",format:"",indent:0,...r,...t,type:r?.type||t.type||e,version:1}}function p(e,t){t&&(e.children.push(t),t&&"text"in t&&t.text&&(e.direction="ltr"))}function m(e){let t=0
return e.forEach(e=>{const r=e[0]
r in a&&(t|=a[r])}),t}},54551(e,t,r){var s={"./af":82909,"./af.js":82909,"./ar":12785,"./ar-dz":93396,"./ar-dz.js":93396,"./ar-kw":69208,"./ar-kw.js":69208,"./ar-ly":677,"./ar-ly.js":677,"./ar-ma":45668,"./ar-ma.js":45668,"./ar-ps":43583,"./ar-ps.js":43583,"./ar-sa":70870,"./ar-sa.js":70870,"./ar-tn":30120,"./ar-tn.js":30120,"./ar.js":12785,"./az":12617,"./az.js":12617,"./be":4963,"./be.js":4963,"./bg":13925,"./bg.js":13925,"./bm":22091,"./bm.js":22091,"./bn":14990,"./bn-bd":95993,"./bn-bd.js":95993,"./bn.js":14990,"./bo":47949,"./bo.js":47949,"./br":81162,"./br.js":81162,"./bs":51417,"./bs.js":51417,"./ca":95606,"./ca.js":95606,"./cs":53724,"./cs.js":53724,"./cv":1223,"./cv.js":1223,"./cy":45390,"./cy.js":45390,"./da":789,"./da.js":789,"./de":78041,"./de-at":44451,"./de-at.js":44451,"./de-ch":99237,"./de-ch.js":99237,"./de.js":78041,"./dv":30768,"./dv.js":30768,"./el":88975,"./el.js":88975,"./en-au":16628,"./en-au.js":16628,"./en-ca":92550,"./en-ca.js":92550,"./en-gb":86295,"./en-gb.js":86295,"./en-ie":78140,"./en-ie.js":78140,"./en-il":10155,"./en-il.js":10155,"./en-in":53293,"./en-in.js":53293,"./en-nz":39342,"./en-nz.js":39342,"./en-sg":28928,"./en-sg.js":28928,"./eo":91490,"./eo.js":91490,"./es":78038,"./es-do":32730,"./es-do.js":32730,"./es-mx":6430,"./es-mx.js":6430,"./es-us":56443,"./es-us.js":56443,"./es.js":78038,"./et":71255,"./et.js":71255,"./eu":29952,"./eu.js":29952,"./fa":69419,"./fa.js":69419,"./fi":52291,"./fi.js":52291,"./fil":66559,"./fil.js":66559,"./fo":79465,"./fo.js":79465,"./fr":66014,"./fr-ca":79383,"./fr-ca.js":79383,"./fr-ch":69864,"./fr-ch.js":69864,"./fr.js":66014,"./fy":66355,"./fy.js":66355,"./ga":4442,"./ga.js":4442,"./gd":72581,"./gd.js":72581,"./gl":17997,"./gl.js":17997,"./gom-deva":2480,"./gom-deva.js":2480,"./gom-latn":74347,"./gom-latn.js":74347,"./gu":42198,"./gu.js":42198,"./he":77861,"./he.js":77861,"./hi":94129,"./hi.js":94129,"./hr":30528,"./hr.js":30528,"./hu":47381,"./hu.js":47381,"./hy-am":42380,"./hy-am.js":42380,"./id":79187,"./id.js":79187,"./is":45082,"./is.js":45082,"./it":65123,"./it-ch":63303,"./it-ch.js":63303,"./it.js":65123,"./ja":92063,"./ja.js":92063,"./jv":58222,"./jv.js":58222,"./ka":69550,"./ka.js":69550,"./kk":38748,"./kk.js":38748,"./km":39994,"./km.js":39994,"./kn":43719,"./kn.js":43719,"./ko":19568,"./ko.js":19568,"./ku":38226,"./ku-kmr":2729,"./ku-kmr.js":2729,"./ku.js":38226,"./ky":80630,"./ky.js":80630,"./lb":25732,"./lb.js":25732,"./lo":80135,"./lo.js":80135,"./lt":73586,"./lt.js":73586,"./lv":46824,"./lv.js":46824,"./me":93576,"./me.js":93576,"./mi":9516,"./mi.js":9516,"./mk":21270,"./mk.js":21270,"./ml":14487,"./ml.js":14487,"./mn":7481,"./mn.js":7481,"./mr":20365,"./mr.js":20365,"./ms":71054,"./ms-my":43925,"./ms-my.js":43925,"./ms.js":71054,"./mt":32207,"./mt.js":32207,"./my":79388,"./my.js":79388,"./nb":1318,"./nb.js":1318,"./ne":20999,"./ne.js":20999,"./nl":73624,"./nl-be":48492,"./nl-be.js":48492,"./nl.js":73624,"./nn":85378,"./nn.js":85378,"./oc-lnc":91966,"./oc-lnc.js":91966,"./pa-in":92733,"./pa-in.js":92733,"./pl":80854,"./pl.js":80854,"./pt":95950,"./pt-br":90051,"./pt-br.js":90051,"./pt.js":95950,"./ro":7485,"./ro.js":7485,"./ru":44195,"./ru.js":44195,"./sd":25225,"./sd.js":25225,"./se":12698,"./se.js":12698,"./si":65550,"./si.js":65550,"./sk":85316,"./sk.js":85316,"./sl":71070,"./sl.js":71070,"./sq":50454,"./sq.js":50454,"./sr":4275,"./sr-cyrl":5630,"./sr-cyrl.js":5630,"./sr.js":4275,"./ss":4012,"./ss.js":4012,"./sv":8983,"./sv.js":8983,"./sw":19264,"./sw.js":19264,"./ta":86117,"./ta.js":86117,"./te":53801,"./te.js":53801,"./tet":42425,"./tet.js":42425,"./tg":10311,"./tg.js":10311,"./th":94126,"./th.js":94126,"./tk":43755,"./tk.js":43755,"./tl-ph":72347,"./tl-ph.js":72347,"./tlh":51440,"./tlh.js":51440,"./tr":32588,"./tr.js":32588,"./tzl":22746,"./tzl.js":22746,"./tzm":77801,"./tzm-latn":73819,"./tzm-latn.js":73819,"./tzm.js":77801,"./ug-cn":88722,"./ug-cn.js":88722,"./uk":70750,"./uk.js":70750,"./ur":16517,"./ur.js":16517,"./uz":50541,"./uz-latn":92055,"./uz-latn.js":92055,"./uz.js":50541,"./vi":93811,"./vi.js":93811,"./x-pseudo":97415,"./x-pseudo.js":97415,"./yo":43886,"./yo.js":43886,"./zh-cn":89900,"./zh-cn.js":89900,"./zh-hk":2732,"./zh-hk.js":2732,"./zh-mo":82433,"./zh-mo.js":82433,"./zh-tw":51244,"./zh-tw.js":51244}
function n(e){var t=a(e)
return r(t)}function a(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id=54551},50752(){},21901(){},83896(e,t){window._eai_r=require,window._eai_d=define},82211(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var s="ConfigResponseType",n=s,a=r(90665).createQuery({dataType:s,path:"/config/"})
t.configDataType=n,t.hasSendingDomain=e=>{const t=e?.hostSettings?.managedEmail?.sendingDomain
return"string"==typeof t&&t.length>0},t.isManagedEmail=e=>!!e?.hostSettings?.managedEmail?.enabled,t.sendingDomain=e=>e?.hostSettings?.managedEmail?.sendingDomain,t.useBrowseConfig=a},48808(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(51184),n=r(79522)
let a=r(53270),o=r(1799)
var i="UsersResponseType",l=n.apiUrl("/users/me/",{include:"roles"}),u=[i,l]
t.currentUserQueryKey=u,t.useCurrentUser=()=>{const e=n.useFetchApi(),t=s(),r=(0,o.useQuery)({queryKey:u,queryFn:()=>e(l),select:e=>e.users[0]})
return(0,a.useEffect)(()=>{r.error&&t(r.error)},[t,r.error]),r},t.usersDataType=i},37380(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665),n=r(72215)
let a=r(1799)
var o="OffersResponseType",i=s.createQuery({dataType:o,path:"/offers/",defaultSearchParams:{}}),l=s.createQueryWithId({dataType:o,path:e=>`/offers/${e}/`}),u=s.createMutation({method:"PUT",path:e=>`/offers/${e.id}/`,body:e=>({offers:[e]}),updateQueries:{dataType:o,emberUpdateType:"createOrUpdate",update:n.updateQueryCache("offers")}}),c=s.createMutation({method:"POST",path:()=>"/offers/",body:e=>({offers:[e]}),updateQueries:{dataType:o,emberUpdateType:"createOrUpdate",update:n.insertToQueryCache("offers")}})
t.useAddOffer=c,t.useBrowseOffers=i,t.useBrowseOffersById=l,t.useEditOffer=u,t.useInvalidateOffers=()=>{const e=(0,a.useQueryClient)()
return()=>e.invalidateQueries({queryKey:[o]})}},42262(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665)
var n="PostsResponseType",a=s.createQuery({dataType:n,path:"/posts/"}),o=s.createInfiniteQuery({dataType:n,path:"/posts/",defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.posts),s=t[t.length-1].meta
return{posts:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}}),i=s.createQueryWithId({dataType:n,path:e=>`/posts/${e}/`}),l=s.createMutation({method:"DELETE",path:e=>`/posts/${e}/`}),u=s.createQuery({dataType:n,path:"/search-index/posts/"})
t.getPost=i,t.useBrowsePosts=a,t.useBrowsePostsInfinite=o,t.useDeletePost=l,t.useSearchIndexPosts=u},12098(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665)
var n="SettingsResponseType",a=s.createQuery({dataType:n,path:"/settings/",defaultSearchParams:{group:"site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"}}),o=s.createMutation({method:"PUT",path:()=>"/settings/",body:e=>({settings:e.map(({key:e,value:t})=>({key:e,value:t}))}),updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:e=>({...e,settings:e.settings})},invalidateQueries:{filters:{predicate:e=>e.queryKey[0]!==n}}}),i=s.createMutation({method:"POST",path:()=>"/settings/access_code/regenerate/",updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:e=>({...e,settings:e.settings})},invalidateQueries:{filters:{predicate:e=>e.queryKey[0]!==n}}}),l=s.createMutation({method:"DELETE",path:()=>"/settings/stripe/connect/",invalidateQueries:{dataType:n}}),u=s.createMutation({method:"POST",path:()=>"/slack/test/"})
t.checkStripeEnabled=function(e,t){const r=t=>e.some(e=>e.key===t&&e.value),s=r("stripe_secret_key")&&r("stripe_publishable_key"),n=r("stripe_connect_secret_key")&&r("stripe_connect_publishable_key")
return t.stripeDirect?s:n||s},t.getSettingValue=function(e,t){return e&&e.find(e=>e.key===t)?.value||null},t.getSettingValues=function(e,t){return t.map(t=>e?.find(e=>e.key===t)?.value)},t.humanizeSettingKey=function(e){return e.replace(/^[a-z]/,e=>e.toUpperCase()).replace(/_/g," ").replace(new RegExp(`\\b(${["API","CTA","RSS"].join("|")})\\b`,"ig"),e=>e.toUpperCase())},t.isSettingReadOnly=function(e,t){if(e)return e.find(e=>e.key===t)?.is_read_only||!1},t.useBrowseSettings=a,t.useDeleteStripeSettings=l,t.useEditSettings=o,t.useRegenerateAccessCode=i,t.useTestSlack=u},88950(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(51184),n=r(63501),a=r(20031),o=r(27057),i=r(48078),l=r(99767),u=r(77699),c=r(26781),d=r(99489)
t.koenigFileUploadTypes=l.koenigFileUploadTypes,t.useConfirmUnload=a.useConfirmUnload,t.useFilterableApi=i,t.useForm=o,t.useHandleError=s,t.useKoenigFetchEmbed=u.useKoenigFetchEmbed,t.useKoenigFileUpload=l.useKoenigFileUpload,t.useKoenigLinkSuggestions=c.useKoenigLinkSuggestions,t.usePermission=n.usePermission,t.usePinturaConfig=d.usePinturaConfig},20031(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(2940)
let n=r(53270)
n=s.__toESM(n,1),t.useConfirmUnload=function(e){n.useEffect(()=>{if(!e)return
const t=e=>{e.preventDefault(),e.returnValue=""}
return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e])}},48078(e,t,r){const s=r(79522),n=r(1597)
let a=r(53270)
var o=(e=[],t,r)=>e&&r?e.filter(e=>e[t]?.toLowerCase().includes(r.toLowerCase())):e
e.exports=({path:e,filterKey:t,responseKey:r,limit:i=20})=>{const l=s.useFetchApi(),u=(0,a.useRef)({}),c=async a=>{if((u.current.allLoaded||u.current.lastInput===a)&&u.current.data)return o(u.current.data,t,a)
const c=await l(s.apiUrl(e,{filter:a?`${t}:~${n.escapeNqlString(a)}`:"",limit:i.toString()}))
return u.current.data=c[r],u.current.allLoaded=!a&&!c.meta?.pagination.next,u.current.lastInput=a,o(c[r],t,a)}
return{loadData:c,loadInitialValues:async(t,n)=>{await c("")
const a=[...u.current.data||[]],o=t.filter(e=>!u.current.data?.find(t=>t[n]===e))
if(o.length){const t=await l(s.apiUrl(e,{filter:`${n}:[${o.join(",")}]`,limit:"100"}))
a.push(...t[r])}return t.map(e=>a.find(t=>t[n]===e))}}}},27057(e,t,r){let s=r(53270)
e.exports=({initialState:e,savingDelay:t,savedDelay:r=2e3,onSave:n,onSaveError:a,onSavedStateReset:o,onValidate:i})=>{const[l,u]=(0,s.useState)(e),[c,d]=(0,s.useState)(""),[p,m]=(0,s.useState)({});(0,s.useEffect)(()=>{"saved"===c&&setTimeout(()=>{o?.(),d(e=>"saved"===e?"":e)},r)},[c,r])
const h=e=>0===Object.values(e).filter(Boolean).length,f=(0,s.useCallback)(()=>{if(!i)return!0
const e=i(l)
return m(e),h(e)},[l,i]),g=(0,s.useCallback)(async(e={})=>{if(!f())return d("error"),!1
if("unsaved"!==c&&!e.force&&!e.fakeWhenUnchanged)return!0
const r=Date.now()
d("saving")
try{("unsaved"===c||e.force)&&await n(l)
const s=Date.now()-r
return t&&s<t&&await new Promise(e=>{setTimeout(e,t-s)}),d("saved"),!0}catch(e){throw await(a?.(e)),d("unsaved"),e}},[l,c,t,n,a,f]),y=(0,s.useCallback)(e=>{u(e),d("unsaved")},[])
let b="default"
"saved"===c?b="default":"error"===c&&(b="destructive")
let w=""
"saved"===c?w="Saved":"saving"===c?w="Saving...":"error"===c&&(w="Retry")
const j={disabled:"saving"===c,variant:b,label:w||void 0}
return{formState:l,saveState:c,handleSave:g,updateForm:y,setFormState:u,reset(){u(e),d("")},validate:f,isValid:h(p),clearError:e=>{m(t=>({...t,[e]:""}))},errors:p,setErrors:m,okProps:j}}},51184(e,t,r){const s=r(2940),n=r(85089),a=r(27621)
let o=r(53270),i=r(46355)
i=s.__toESM(i,1)
let l=r(59150)
function u(e){l.toast.dismiss(),l.toast.error(e)}e.exports=()=>{const{sentryDSN:e}=n.useFramework()
return(0,o.useCallback)((t,{withToast:r=!0}={})=>{console.error(t),!e||t instanceof a.SessionExpiredError||i.withScope(e=>{t instanceof a.APIError&&t.response&&(e.setTag("api_url",t.response.url),e.setTag("api_response_status",t.response.status)),i.captureException(t)}),r&&(t instanceof a.APIError&&418===t.response?.status||t instanceof a.SessionExpiredError?l.toast.dismiss():t instanceof a.APIError?u(a.getErrorMessage(t,t.message)):u("Something went wrong, please try again."))},[e])}},77699(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(65955),n=r(79522)
let a=r(53270)
t.useKoenigFetchEmbed=()=>{const e=n.useFetchApi()
return(0,a.useCallback)(async(t,{type:r}={})=>{const n=new URL(`${s.getGhostPaths().apiRoot}/oembed/`,window.location.origin)
return n.searchParams.set("url",t),r&&n.searchParams.set("type",r),await e(n)},[e])}},99767(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(65955),n=r(79522)
let a=r(53270)
var o={image:{mimeTypes:["image/gif","image/jpg","image/jpeg","image/png","image/svg+xml","image/webp"],extensions:["gif","jpg","jpeg","png","svg","svgz","webp"],endpoint:"/images/upload/",requestMethod:"post",resourceName:"images"},video:{mimeTypes:["video/mp4","video/webm","video/ogg"],extensions:["mp4","webm","ogv"],endpoint:"/media/upload/",requestMethod:"post",resourceName:"media"},audio:{mimeTypes:["audio/mp3","audio/mpeg","audio/ogg","audio/wav","audio/vnd.wav","audio/wave","audio/x-wav","audio/mp4","audio/x-m4a"],extensions:["mp3","wav","ogg","m4a"],endpoint:"/media/upload/",requestMethod:"post",resourceName:"media"},mediaThumbnail:{mimeTypes:["image/gif","image/jpg","image/jpeg","image/png","image/webp"],extensions:["gif","jpg","jpeg","png","webp"],endpoint:"/media/thumbnail/upload/",requestMethod:"put",resourceName:"media"},file:{extensions:[],endpoint:"/files/upload/",requestMethod:"post",resourceName:"files"}},i=(e,t)=>{let r=e
for(const s of t){if(!r||"object"!=typeof r||!(s in r))return null
r=r[s]}return"string"==typeof r?r:null}
t.koenigFileUploadTypes=o,t.useKoenigFileUpload=(e="image")=>{const[t,r]=(0,a.useState)(0),[l,u]=(0,a.useState)(!1),[c,d]=(0,a.useState)([]),[p,m]=(0,a.useState)(0),h=(0,a.useRef)(new Map),f=n.useFetchApi()
function g(){if(0===h.current.size)return void r(0)
let e=0
h.current.forEach(t=>{e+=t}),r(Math.round(e/h.current.size))}const y=t=>{if("file"===e)return!0
const r=o[e].extensions,[,s]=/(?:\.([^.]+))?$/.exec(t.name)??[]
return!r||!(!s||-1===r.indexOf(s.toLowerCase()))||`The file type you uploaded is not supported. Please use .${r.join(", .").toUpperCase()}`},b=async(t,{formData:r={}}={})=>{h.current.set(t,0)
const n=new FormData
n.append("file",t,t.name),Object.keys(r).forEach(e=>{n.append(e,r[e])})
const a=`${s.getGhostPaths().apiRoot}${o[e].endpoint}`
try{const r=await f(a,{method:o[e].requestMethod,body:n,onUploadProgress(e){h.current.set(t,e),g()}})
let s
if(h.current.set(t,100),g(),r){const t=r[o[e].resourceName]
t&&Array.isArray(t)&&t[0]&&(s=t[0].url)}return{url:s,fileName:t.name}}catch(e){console.error(e)
const s=i(e,["data","errors",0,"context"])||"",n=i(e,["data","errors",0,"message"])||i(e,["message"])||""
throw{message:s||n,context:s,fileName:t.name}}}
return{progress:t,isLoading:l,upload:async(e=[],t={})=>{m(e.length),u(!0),d([])
const s=((e=[])=>{const t=[]
for(let r=0;r<e.length;r+=1){const s=e[r],n=y(s)
!0!==n&&t.push({fileName:s.name,message:n})}return t})(e)
if(s.length)return d(s),u(!1),r(100),null
const n=[]
for(let r=0;r<e.length;r+=1){const s=e[r]
n.push(b(s,t))}try{const e=await Promise.all(n)
return r(100),h.current.clear(),u(!1),d([]),e}catch(e){return console.error(e),d([e]),u(!1),r(100),h.current.clear(),null}},errors:c,filesNumber:p}}},26781(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(48078),n=r(37380),a=r(42262)
let o=r(53270)
t.useKoenigLinkSuggestions=({siteUrl:e,membersSignupAccess:t,donationsEnabled:r,recommendationsEnabled:i,includeShareLink:l=!1,shareLinkLabel:u="Share"})=>{const{data:c}=n.useBrowseOffers(),{data:d}=a.useBrowsePosts({searchParams:{filter:"status:published",fields:"id,url,title,visibility,published_at",order:"published_at desc",limit:"5"}}),p=s({path:"/search-index/posts/",filterKey:"title",responseKey:"posts"}),m=s({path:"/search-index/pages/",filterKey:"title",responseKey:"pages"}),h=(0,o.useMemo)(()=>[{label:"Latest posts",items:(d?.posts||[]).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))}],[d?.posts])
return{fetchAutocompleteLinks:(0,o.useCallback)(async()=>[{label:"Homepage",value:e},{label:"Free signup",value:"#/portal/signup/free"},..."all"===t?[{label:"Paid signup",value:"#/portal/signup"},{label:"Upgrade or change plan",value:"#/portal/account/plans"}]:[],...r?[{label:"Tips and donations",value:"#/portal/support"}]:[],...l?[{label:u,value:"#/share"}]:[],...i?[{label:"Recommendations",value:"#/portal/recommendations"}]:[],...(c?.offers||[]).filter(e=>"active"===e.status&&"signup"===e.redemption_type).map(t=>({label:`Offer - ${t.name}`,value:new URL(t.code,e).toString()}))],[r,l,t,c?.offers,i,u,e]),searchLinks:(0,o.useCallback)(async e=>{if(!e)return h
const[t,r]=await Promise.all([p.loadData(e),m.loadData(e)])
return[{label:"Posts",items:t.filter(e=>"published"===e.status).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))},{label:"Pages",items:r.filter(e=>"published"===e.status).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))}].filter(e=>e.items.length>0)},[h,m,p])}}},9047(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
let s=r(53270)
t.usePagination=({limit:e,meta:t,page:r,setPage:n})=>{const[a,o]=(0,s.useState)(t)
return(0,s.useEffect)(()=>{t&&(o(t),t.pages>0&&t.pages<r&&n(t.pages))},[t,n,r]),{page:r,setPage:n,pages:a?.pages??null,limit:a?.limit&&"all"!==a.limit?a.limit:e,total:a?.total??null,nextPage:()=>n(Math.min(r+1,a?.pages?a.pages:r)),prevPage:()=>n(Math.max(1,r-1))}}},63501(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(48808)
t.usePermission=e=>{const{data:t}=s.useCurrentUser()
if(!e||0===e.length)return!0
const r=t?.roles.map(e=>e.name)
return!!r&&e.some(e=>r.includes(e))}},99489(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(65955),n=r(82211),a=r(12098)
let o=r(53270)
var i=e=>{if(null!=e){if("string"==typeof e)return e
throw new TypeError("Expected value to be null, undefined, or a string")}},l=e=>{if(e.startsWith("/")){const{adminRoot:t}=s.getGhostPaths()
return window.location.origin+t.replace(/\/$/,"")+e}return e}
t.usePinturaConfig=function(){const{data:e}=n.useBrowseConfig(),{data:t}=a.useBrowseSettings(),r=(e?.config)?.hostSettings?.pintura,[s,u,c]=a.getSettingValues(t?.settings??null,["pintura","pintura_js_url","pintura_css_url"])
let d,p
return s&&(d=r?.js||i(u),p=r?.css||i(c)),(0,o.useMemo)(()=>d&&p?{jsUrl:l(d),cssUrl:l(p)}:null,[d,p])}},85089(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(5852)
let n=r(53270),a=r(46355),o=r(1799),i=r(88902)
var l=(0,n.createContext)({ghostVersion:"",externalNavigate:()=>{},unsplashConfig:{Authorization:"","Accept-Version":"","Content-Type":"","App-Pragma":"","X-Unsplash-Cache":!0},sentryDSN:null,onUpdate:()=>{},onInvalidate:()=>{},onDelete:()=>{}})
t.FrameworkProvider=function({children:e,queryClient:t,queryClientOptions:r,...u}){return(0,i.jsx)(a.ErrorBoundary,{children:(0,i.jsx)(o.QueryClientProvider,{client:(0,n.useMemo)(()=>t||(r?new o.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:r.refetchOnWindowFocus??!1,staleTime:r.staleTime??3e5,refetchOnMount:r.refetchOnMount??!1,gcTime:6e5,retry:!1,networkMode:"always"}}}):s),[t,r]),children:(0,i.jsx)(l.Provider,{value:u,children:e})})})},t.useFramework=()=>(0,n.useContext)(l)},2940(e,t){var r=Object.create,s=Object.defineProperty,n=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,l=(e,t,l)=>(l=null!=e?r(o(e)):{},((e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(var l,u=a(t),c=0,d=u.length;c<d;c++)l=u[c],i.call(e,l)||void 0===l||s(e,l,{get:(e=>t[e]).bind(null,l),enumerable:!(o=n(t,l))||o.enumerable})
return e})(!t&&e&&e.__esModule?l:s(l,"default",{value:e,enumerable:!0}),e))
Object.defineProperty(t,"__toESM",{enumerable:!0,get:function(){return l}})},79522(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(2940),n=r(85089),a=r(27621),o=r(65955),i=r(95167)
let l=r(53270),u=r(46355)
u=s.__toESM(u,1)
var c=e=>{const t=new Headers,r=e.getAllResponseHeaders()?.split("\r\n")||[]
for(const s of r){const e=s.indexOf(":")
if(-1===e)continue
const r=s.slice(0,e),n=s.slice(e+1).trim()
t.append(r,n)}return t},d=/\/ghost\/api\//,p=/\/ghost\/api\/admin\/session([/?#]|$)/,m=/^#\/(?:reset|setup|signin|signup)(?:[/?]|$)/,h=!1,f=e=>{const t=e.toString()
return d.test(t)&&!p.test(t)},g=()=>{const{adminRoot:e}=o.getGhostPaths()
h||(e=>window.location.pathname===e&&(!window.location.hash||"#/"===window.location.hash||m.test(window.location.hash)))(e)||(h=!0,window.location.replace(e))},y=(e,t,{method:r,headers:s,credentials:n,body:a,signal:o})=>new Promise((i,l)=>{const u=()=>{l(new DOMException("Aborted","AbortError"))}
if(o.aborted)return void u()
const d=new XMLHttpRequest
switch(d.open(r,t.toString(),!0),n){case"omit":throw new Error('"omit" credentials cannot be represented with legacy XMLHttpRequest. Consider "same-origin".')
case"same-origin":d.withCredentials=!1
break
case"include":d.withCredentials=!0
break
default:throw new Error(n)}d.responseType="arraybuffer"
for(const[e,t]of Object.entries(s))d.setRequestHeader(e,t)
d.upload.onprogress=t=>{t.lengthComputable&&e(t.loaded/t.total*100)},d.onload=()=>{i((e=>new Response(e.response,{status:e.status,statusText:e.statusText,headers:c(e)}))(d))},d.onerror=()=>{l(new TypeError("Network request failed"))},d.onabort=u
const p=()=>d.abort()
o.addEventListener("abort",p),d.onloadend=()=>{o.removeEventListener("abort",p)},d.send(a)}),{apiRoot:b,activityPubRoot:w}=o.getGhostPaths()
t.apiUrl=(e,t={},r=!1)=>{const s=new URL(`${r?w:b}${e}`,window.location.origin)
return s.search=new URLSearchParams(t).toString(),s.toString()},t.useFetchApi=()=>{const{ghostVersion:e,sentryDSN:t}=n.useFramework()
return(0,l.useCallback)(async(r,{method:s="GET",headers:n={},body:o,credentials:l="include",timeout:c,retry:d=!0,onUploadProgress:p}={})=>{const m=new AbortController,h={method:s,headers:{"app-pragma":"no-cache",...e?{"x-ghost-version":e}:{},..."string"==typeof o?{"content-type":"application/json"}:{},...n},credentials:l,mode:"cors",body:o,signal:m.signal}
let b=0,w=0
const j=Date.now(),v=[500,1e3],S=[a.ServerUnreachableError,a.MaintenanceError,TypeError],E=(e,t)=>{const s={errorName:e?.name,attempts:b,totalSeconds:w/1e3,endpoint:r.toString()}
return r.toString().includes("/ghost/api/")&&(s.server=t?.headers.get("server")),s},P=p?y.bind(null,p):fetch,T=c?setTimeout(()=>m.abort(),c):void 0
try{for(;0===b||d;)try{return await i(await P(r,h))}catch(e){if(w=Date.now()-j,d&&S.some(t=>e instanceof t)&&w<=15e3){await new Promise(e=>{setTimeout(e,v[b]||v[v.length-1])}),b+=1
continue}if(0!==b&&t&&u.captureMessage("Request failed after multiple attempts",{extra:E()}),e&&"object"==typeof e&&"name"in e&&"AbortError"===e.name)throw new a.TimeoutError
if(e instanceof a.UnauthorizedError&&f(r))throw g(),new a.SessionExpiredError(e.response,e.data,{cause:e})
let n=e
throw e instanceof a.APIError||(n=new a.ServerUnreachableError({cause:e})),n}}finally{clearTimeout(T)}},[e,t])}},95167(e,t,r){const s=r(27621)
e.exports=async e=>{if(0===e.status)throw new s.ServerUnreachableError
if(503===e.status)throw new s.MaintenanceError(e,await e.text())
if(415===e.status)throw new s.UnsupportedMediaTypeError(e,await e.text())
if(413===e.status)throw new s.RequestEntityTooLargeError(e,await e.text())
if(401===e.status){if(e.headers.get("content-type")?.includes("json"))throw new s.UnauthorizedError(e,await e.json())
throw new s.UnauthorizedError(e,await e.text())}if(e.ok)return 204===e.status?void 0:e.headers.get("content-type")?.includes("text/csv")?await e.text():await e.json()
{if(!e.headers.get("content-type")?.includes("json"))throw new s.APIError(e,await e.text())
const t=await e.json()
throw 403===e.status&&"Authorization failed"===t.errors?.[0]?.message?new s.UnauthorizedError(e,t):"VersionMismatchError"===t.errors?.[0]?.type?new s.VersionMismatchError(e,t):"ValidationError"===t.errors?.[0]?.type||"NoPermissionError"===t.errors?.[0]?.type?new s.ValidationError(e,t):"ThemeValidationError"===t.errors?.[0]?.type?new s.ThemeValidationError(e,t):"HostLimitError"===t.errors?.[0]?.type?new s.HostLimitError(e,t):"EmailError"===t.errors?.[0]?.type?new s.EmailError(e,t):new s.JSONError(e,t)}}},90665(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(85089),n=r(51184),a=r(9047),o=r(79522),i=r(63501)
let l=r(53270),u=r(1799)
var c=e=>({searchParams:t,...r}={})=>{const s=o.apiUrl(e.path,t||e.defaultSearchParams,e?.useActivityPub),a=o.useFetchApi(),c=n(),d=i.usePermission(e.permissions),p=(0,u.useQuery)({...r,enabled:d&&(r.enabled??!0),queryKey:[e.dataType,s],queryFn:()=>a(s,{...e})}),m=(0,l.useMemo)(()=>p.data&&e.returnData?e.returnData(p.data):p.data,[p.data])
return(0,l.useEffect)(()=>{p.error&&!1!==r.defaultErrorHandler&&c(p.error)},[c,p.error,r.defaultErrorHandler]),{...p,data:m}}
t.createInfiniteQuery=e=>({searchParams:t,getNextPageParams:r,...s}={})=>{const a=o.useFetchApi(),c=n(),d=i.usePermission(e.permissions),p=r||e.defaultNextPageParams||(()=>({})),m=(0,u.useInfiniteQuery)({...s,enabled:d&&(s.enabled??!0),queryKey:[e.dataType,o.apiUrl(e.path,t||e.defaultSearchParams,e?.useActivityPub)],queryFn:({pageParam:r})=>a(o.apiUrl(e.path,r||t||e.defaultSearchParams,e?.useActivityPub)),initialPageParam:void 0,getNextPageParam:r=>p(r,t||e.defaultSearchParams||{})}),h=(0,l.useMemo)(()=>m.data&&e.returnData(m.data),[m.data])
return(0,l.useEffect)(()=>{m.error&&!1!==s.defaultErrorHandler&&c(m.error)},[c,m.error,s.defaultErrorHandler]),{...m,data:h}},t.createMutation=({path:e,searchParams:t,defaultSearchParams:r,updateQueries:n,invalidateQueries:a,...i})=>()=>{const c=o.useFetchApi(),d=(0,u.useQueryClient)(),{onUpdate:p,onInvalidate:m,onDelete:h}=s.useFramework()
return(0,u.useMutation)({mutationFn:s=>(({fetchApi:e,path:t,payload:r,searchParams:s,options:n})=>{const{defaultSearchParams:a,body:i,...l}=n,u=o.apiUrl(t,s||a,n?.useActivityPub),c=r&&i?.(r)
let d
return c instanceof FormData?d=c:c&&(d=JSON.stringify(c)),e(u,{body:d,...l})})({fetchApi:c,path:e(s),payload:s,searchParams:t?.(s)||r,options:i}),onSuccess:(0,l.useCallback)((e,t)=>{if(a&&"dataType"in a?(d.invalidateQueries({queryKey:[a.dataType]}),m(a.dataType)):a&&d.invalidateQueries(a.filters,a.options),n)if(d.setQueriesData({queryKey:[n.dataType]},r=>n.update(e,r,t)),"createOrUpdate"===n.emberUpdateType)p(n.dataType,e)
else if("delete"===n.emberUpdateType){if("string"!=typeof t)throw new Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook")
h(n.dataType,t)}},[m,p,h,d])})},t.createPaginatedQuery=e=>({searchParams:t,...r}={})=>{const[s,c]=(0,l.useState)(1),d=t?.limit||e.defaultSearchParams?.limit?parseInt(t?.limit||e.defaultSearchParams?.limit||"15"):15,p=t||e.defaultSearchParams||{}
p.page=s.toString()
const m=o.apiUrl(e.path,p,e?.useActivityPub),h=o.useFetchApi(),f=n(),g=i.usePermission(e.permissions),y=(0,u.useQuery)({...r,enabled:g&&(r.enabled??!0),queryKey:[e.dataType,m],queryFn:()=>h(m,{...e})}),b=(0,l.useMemo)(()=>y.data&&e.returnData?e.returnData(y.data):y.data,[y.data]),w=a.usePagination({page:s,setPage:c,limit:d,meta:y.isFetching?void 0:b?.meta?.pagination})
return(0,l.useEffect)(()=>{y.error&&!1!==r.defaultErrorHandler&&f(y.error)},[f,y.error,r.defaultErrorHandler]),{...y,data:b,pagination:w}},t.createQuery=c,t.createQueryWithId=e=>(t,{searchParams:r,...s}={})=>c({...e,path:e.path(t)})({searchParams:r||e.defaultSearchParams,...s})},72215(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t.deleteFromQueryCache=(e,t)=>(r,s,n)=>{if(!s)return s
const a=t?.(n)||[n]
if("object"==typeof s&&"pages"in s){const{pages:t}=s
return{...s,pages:t.map(t=>({...t,[e]:t[e].filter(e=>!a.includes(e.id))}))}}return{...s,[e]:s[e].filter(e=>!a.includes(e.id))}},t.insertToQueryCache=(e,t)=>(r,s)=>{if(!s)return s
const n=t||(t=>t[e])
if("object"==typeof s&&"pages"in s){const{pages:t}=s,a=t[t.length-1]
return{...s,pages:t.slice(0,-1).concat({...a,[e]:a[e].concat(n(r))})}}return{...s,[e]:s[e].concat(n(r))}},t.updateQueryCache=(e,t)=>(r,s)=>{if(!s)return s
const n=(t||(t=>t[e].reduce((e,t)=>({...e,[t.id]:t}),{})))(r)
if("object"==typeof s&&"pages"in s){const{pages:t}=s
return{...s,pages:t.map(t=>({...t,[e]:t[e].map(e=>n[e.id]||e)}))}}return{...s,[e]:s[e].map(e=>n[e.id]||e)}}},27621(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r=class extends Error{response
data
constructor(e,t,r,s){!r&&e&&e.url.includes("/ghost/api/admin/")&&(r=`Something went wrong while loading ${e.url.replace(/.+\/ghost\/api\/admin\//,"").replace(/\W.*/,"").replace("_"," ")}, please try again.`),super(r||"Something went wrong, please try again.",s),this.response=e,this.data=t}},s=class extends r{data
constructor(e,t,r,s){super(e,t,r,s),this.data=t}},n=class extends r{constructor(e,t,r){super(e,t,"You are not authorised to make this request.",r)}},a=class extends s{constructor(e,t,r){super(e,t,"Theme is not compatible or contains errors.",r)}},o=class extends s{constructor(e,t,r){super(e,t,"A hosting plan limit was reached or exceeded.",r)}},i=class extends s{constructor(e,t,r){super(e,t,"Please verify your email settings",r)}},l=class extends s{constructor(e,t,r){super(e,t,t.errors[0].message,r)}},u=[l,a,o,i],c=class extends Error{constructor(e){super(e)}}
t.APIError=r,t.AlreadyExistsError=c,t.EmailError=i,t.HostLimitError=o,t.JSONError=s,t.MaintenanceError=class extends r{constructor(e,t,r){super(e,t,"Ghost is currently undergoing maintenance, please wait a moment then retry.",r)}},t.RequestEntityTooLargeError=class extends r{constructor(e,t,r){super(e,t,"Request is larger than the maximum file size the server allows",r)}},t.ServerUnreachableError=class extends r{constructor(e){super(void 0,void 0,"Something went wrong, please try again.",e)}},t.SessionExpiredError=class extends n{},t.ThemeValidationError=a,t.TimeoutError=class extends r{constructor(e){super(void 0,void 0,"Request timed out, please try again.",e)}},t.UnauthorizedError=n,t.UnsupportedMediaTypeError=class extends r{constructor(e,t,r){super(e,t,"Request contains an unknown or unsupported file type.",r)}},t.ValidationError=l,t.VersionMismatchError=class extends s{constructor(e,t,r){super(e,t,"API server is running a newer version of Ghost, please upgrade.",r)}},t.errorsWithMessage=u,t.getErrorMessage=function(e,t){return e instanceof l&&e.data?.errors[0]?e.data.errors[0].context||e.data.errors[0].message:t}},65955(e,t){function r(){const e=window.location.pathname,t=e.substr(0,e.search("/ghost/"))
return{subdir:t,adminRoot:`${t}/ghost/`,assetRoot:`${t}/ghost/assets/`,apiRoot:`${t}/ghost/api/admin`,activityPubRoot:`${t}/.ghost/activitypub`}}function s(e){let t=document.getElementById("iframeDownload")
t||(t=document.createElement("iframe"),t.id="iframeDownload",t.style.display="none",document.body.append(t)),t.setAttribute("src",e)}function n(e){if(!e)return
const t=e.match(/filename\*=([^;]+)/i)
if(t?.[1]){const e="'",r=t[1].trim(),s=r.indexOf(e),n=-1===s?-1:r.indexOf(e,s+1),a=-1===n?r:r.slice(n+1)
try{return decodeURIComponent(a.replace(/^["']|["']$/g,""))}catch{}}const r=e.match(/filename="([^"]*)"/i)
if(r?.[1])return r[1].trim()
const s=e.match(/filename=([^;]+)/i)
return s?.[1]?s[1].trim():void 0}async function a(e,t){const r=await fetch(e,{method:"GET"})
if(!r.ok)throw new Error(`Download failed: ${r.status} ${r.statusText}`)
const s=n(r.headers.get("content-disposition"))??t??"download",a=await r.blob(),o=window.URL.createObjectURL(a),i=document.createElement("a")
i.href=o,i.download=s,document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(o)}Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t.blobDownload=a,t.blobDownloadFromEndpoint=async function(e,t){return a(`${r().apiRoot}${e}`,t)},t.downloadFile=s,t.downloadFromEndpoint=function(e){s(`${r().apiRoot}${e}`)},t.getFilenameFromContentDisposition=n,t.getGhostPaths=r},1597(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t.escapeNqlString=function(e){return`'${e.replace(/'/g,"\\'")}'`}},5852(e,t,r){let s=r(1799)
var n=window.adminXQueryClient||new s.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:3e5,gcTime:6e5,retry:!1,networkMode:"always"}}})
window.__TANSTACK_QUERY_CLIENT__=n,window.adminXQueryClient||(window.adminXQueryClient=n),e.exports=n}}])

//# sourceMappingURL=chunk.589.096f4d0bb775e5229aa9.map