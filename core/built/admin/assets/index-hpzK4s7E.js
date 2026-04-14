import{r as o,j as n,cp as Sn,cq as En,B as A,cg as Vn,cs as _n,cr as Yn,t as dn,cI as Qn,b as In,cZ as pn,S as E,P as Zn,A as Jn,h as Xn,g as bn,d as Gn,m as ne,bC as ee,e as un,F as on,i as rn,c_ as te,c$ as D,o as ae,d0 as xn,a as oe,u as re,p as ie,L as de,aV as ce,D as se,v as le,w as ge,x as pe,ac as ue,d1 as he,d2 as me,bu as vn,bv as ke}from"./index-fwVn0j7Q.js";import{M as fe}from"./minus-DD8-Ct_T.js";import{u as be,D as xe,A as ve,S as yn}from"./deleted-feed-item-yzfwWSLR.js";import{T as ye}from"./topic-filter-NOP3m1Oe.js";import{E as wn}from"./empty-indicator-uOV8nZ3B.js";import{I as jn}from"./inbox-ahSCEoyV.js";import"./trash-BGbEEF0a.js";const hn=["1.5rem","1.6rem","1.7rem","1.8rem","2rem"],W={BACKGROUND_COLOR:"ghost-ap-background-color",FONT_SIZE:"ghost-ap-font-size",FONT_STYLE:"ghost-ap-font-style"},P={SYSTEM:{id:"system",color:"#fff",background:"bg-white dark:bg-black",button:"bg-white dark:bg-black",border:"border-black/[8%] dark:border-gray-950"},SEPIA:{id:"sepia",color:"#FCF8F1",background:"bg-[#FCF8F1]",button:"bg-[#FCF8F1] hover:bg-black/[3%] text-black hover:text-black",border:"border-black/[8%]"},LIGHT:{id:"light",color:"#fff",background:"bg-white",button:"hover:bg-black/[3%] text-black hover:text-black",border:"border-black/[8%] dark:border-gray-950"},DARK:{id:"dark",color:"#15171a",background:"bg-black",button:"text-white dark:bg-black dark:hover:bg-gray-900",border:"border-black/[8%] dark:border-gray-950"}},we=()=>{const[t,s]=o.useState(()=>localStorage.getItem(W.BACKGROUND_COLOR)?.toUpperCase()||"SYSTEM"),[a,p]=o.useState(()=>{const r=localStorage.getItem(W.FONT_SIZE);return r?parseInt(r):2}),[c,k]=o.useState(()=>localStorage.getItem(W.FONT_STYLE)||"sans"),i=r=>{s(r),localStorage.setItem(W.BACKGROUND_COLOR,P[r].id)};return o.useEffect(()=>{localStorage.setItem(W.FONT_SIZE,a.toString())},[a]),o.useEffect(()=>{localStorage.setItem(W.FONT_STYLE,c)},[c]),{backgroundColor:t,currentFontSizeIndex:a,fontStyle:c,handleColorChange:i,setFontStyle:k,increaseFontSize:()=>{p(r=>Math.min(r+1,hn.length-1))},decreaseFontSize:()=>{p(r=>Math.max(r-1,0))},resetFontSize:()=>p(2),fontSize:hn[a]}},Cn=({backgroundColor:t,currentFontSizeIndex:s,fontStyle:a,onColorChange:p,onFontStyleChange:c,onDecreaseFontSize:k,onIncreaseFontSize:i,onResetFontSize:u,onOpenChange:v})=>{const h=l=>t===l,r=l=>a===l;return n.jsx(je,{backgroundColor:t,currentFontSizeIndex:s,fontStyle:a,isActiveColor:h,isActiveFont:r,onColorChange:p,onDecreaseFontSize:k,onFontStyleChange:c,onIncreaseFontSize:i,onOpenChange:v,onResetFontSize:u})},je=({backgroundColor:t,isActiveColor:s,isActiveFont:a,onColorChange:p,onFontStyleChange:c,currentFontSizeIndex:k,onDecreaseFontSize:i,onIncreaseFontSize:u,onResetFontSize:v,onOpenChange:h})=>n.jsxs(Sn,{modal:!1,onOpenChange:h,children:[n.jsx(En,{asChild:!0,children:n.jsx(A,{className:`size-9 rounded-full ${P[t].button}`,variant:"ghost",children:n.jsx(Vn.Typography,{className:"size-[18px]!"})})}),n.jsx(_n,{align:"end",className:"w-[224px]",onCloseAutoFocus:r=>r.preventDefault(),onOpenAutoFocus:r=>r.preventDefault(),children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center justify-between gap-[6px]",children:[n.jsx(A,{className:`h-7 flex-1 rounded-[6px] bg-gray-200 p-0 text-[1.1rem] text-black hover:bg-gray-250 dark:bg-gray-925 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px] ${s("SYSTEM")?"outline outline-2 outline-green":""}`,variant:"secondary",onClick:()=>p("SYSTEM"),children:"Auto"}),n.jsx(A,{className:`h-7 flex-1 rounded-[6px] bg-[#ece6d9] p-0 hover:bg-[#ece6d9] ${s("SEPIA")?"outline outline-2 outline-green":"border border-[#ece6d9]"}`,onClick:()=>p("SEPIA")}),n.jsx(A,{className:`h-7 flex-1 rounded-[6px] bg-white p-0 hover:bg-white ${s("LIGHT")?"outline outline-2 outline-green":"border border-gray-200"}`,onClick:()=>p("LIGHT")}),n.jsx(A,{className:`h-7 flex-1 rounded-[6px] bg-black p-0 hover:bg-black dark:border dark:border-gray-925 ${s("DARK")?"outline outline-2 outline-green":""}`,onClick:()=>p("DARK")})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs(A,{className:`flex h-auto w-full flex-col gap-1 rounded-[6px] bg-gray-200 text-black hover:bg-gray-250 dark:bg-gray-925 dark:text-white dark:hover:bg-gray-900 ${a("sans")&&"outline outline-2 outline-green"}`,variant:"secondary",onClick:()=>c("sans"),children:[n.jsx("span",{className:"text-[2rem] leading-none font-bold",children:"Aa"}),n.jsx("span",{className:"text-[1.1rem]",children:"System"})]}),n.jsxs(A,{className:`flex h-auto w-full flex-col gap-1 rounded-[6px] bg-gray-200 text-black hover:bg-gray-250 dark:bg-gray-925 dark:text-white dark:hover:bg-gray-900 ${a("serif")&&"outline outline-2 outline-green"}`,variant:"secondary",onClick:()=>c("serif"),children:[n.jsx("span",{className:"pt-1 font-serif text-[2rem] leading-none font-bold",children:"Aa"}),n.jsx("span",{className:"font-serif text-[1.2rem]",children:"Serif"})]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx(A,{className:"h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-250 dark:bg-gray-925 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px]",disabled:k===0,variant:"secondary",onClick:i,children:n.jsx(fe,{})}),n.jsx(A,{className:"h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-250 dark:bg-gray-925 dark:text-white dark:hover:bg-gray-900",variant:"secondary",onClick:v,children:n.jsx("span",{className:"text-[1.6rem] font-bold",children:"Aa"})}),n.jsx(A,{className:"h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-250 dark:bg-gray-925 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px]",disabled:k===hn.length-1,variant:"secondary",onClick:u,children:n.jsx(Yn,{})})]})]})})]}),Ce=({tocItems:t,iframeElement:s,modalRef:a,className:p="visible! absolute inset-y-0 right-7 z-40 hidden lg:block!",onOpenChange:c})=>{const[k,i]=o.useState(null),u=dn.useRef(!1),v=h=>{if(!s?.contentDocument)return;const r=s.contentDocument.getElementById(h);r&&a.current&&(u.current=!0,i(h),a.current.scrollTo({top:r.offsetTop-20,behavior:"smooth"}),setTimeout(()=>{u.current=!1},1e3))};return o.useEffect(()=>{if(!s?.contentDocument||t.length<=1)return;const h=a.current;if(!h)return;const r=()=>{if(u.current)return;const d=s.contentDocument;if(!d)return;const _=h.scrollTop,F=100,B=t.map(z=>d.getElementById(z.id)).filter(z=>z!==null).map(z=>({id:z.id,top:z.offsetTop}));if(!B.length)return;const L=B.reduce((z,M)=>M.top-F<=_?M:z);i(L?.id||null)},l=()=>{requestAnimationFrame(r)};return h.addEventListener("scroll",l),r(),()=>{h.removeEventListener("scroll",l)}},[s,t,a]),t.length<=1?null:n.jsx("div",{className:p,children:n.jsx("div",{className:"sticky top-1/2 -translate-y-1/2",children:n.jsx(Ee,{activeHeading:k||"",items:t,onItemClick:v,onOpenChange:c})})})},ze={1:"w-3",2:"w-2",3:"w-1"},Se={1:"pl-2",2:"pl-6",3:"pl-10"},Ee=({items:t,activeHeading:s,onItemClick:a,onOpenChange:p})=>{const[c,k]=o.useState(!1),i=dn.useRef();if(dn.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),t.length===0)return null;const u=d=>Math.min(d,3),v=d=>ze[u(d)],h=d=>Se[u(d)],r=()=>{i.current&&clearTimeout(i.current),k(!0),p?.(!0)},l=()=>{i.current=setTimeout(()=>{k(!1),p?.(!1)},100)};return n.jsxs(Sn,{modal:!1,open:c,onOpenChange:k,children:[n.jsx(En,{asChild:!0,children:n.jsx("div",{className:"absolute top-1/2 right-2 flex -translate-y-1/2 flex-col items-end gap-2 rounded-md p-2 text-base dark:bg-black",onMouseEnter:r,onMouseLeave:l,children:t.map(d=>n.jsx("div",{className:`h-[2px] rounded-sm ${s===d.id?"bg-black dark:bg-white":"bg-gray-400 dark:bg-gray-700"} pr-1 transition-all ${v(d.level)}`},d.id))})}),n.jsx(_n,{align:"center",className:"w-[240px] p-2",side:"left",sideOffset:-28,onCloseAutoFocus:d=>d.preventDefault(),onMouseEnter:r,onMouseLeave:l,onOpenAutoFocus:d=>d.preventDefault(),children:n.jsx("nav",{"aria-label":"Table of contents navigation",className:"max-h-[60vh] overflow-y-auto",role:"navigation",children:t.map(d=>n.jsx("button",{className:`line-clamp-2 block w-full cursor-pointer rounded py-1 text-left text-sm leading-tight ${s===d.id?"text-black dark:text-white":"text-gray-700 dark:text-gray-600"} hover:bg-gray-75 hover:text-gray-900 dark:hover:bg-grey-925 dark:hover:text-white ${h(d.level)}`,type:"button",onClick:()=>a(d.id),children:n.jsx("span",{className:"line-clamp-2",children:d.text})},d.id))})})]})},_e=()=>`<style>

/* Variables */

:root {
    --color-white: #fff;
    --color-lighter-gray: rgb(0 0 0 / 0.05);
    --color-light-gray: #e6e6e6;
    --color-mid-gray: #ccc;
    --color-dark-gray: #444;
    --color-darker-gray: #15171a;
    --color-black: #000;
    --color-primary-text: var(--color-darker-gray);
    --color-secondary-text: rgb(124 139 154);
    --color-border: rgb(0 0 0 / 0.08);
    --color-dark-border: rgb(0 0 0 / 0.55);
    --background-color: #fff;
    --font-sans: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-serif: "EB Garamond", Georgia, Times, serif;
    --font-serif-alt: Georgia, Times, serif;
    --font-mono: "JetBrains Mono", Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace;
    --letter-spacing: 0;
    --container-width: 1320px;
    --container-gap: clamp(24px, 1.7032rem + 1.9355vw, 48px);
    --ghost-accent-color: #15171a;
}

:root.has-light-text,
:is(.gh-navigation, .gh-footer).has-accent-color {
    --color-lighter-gray: rgb(255 255 255 / 0.1);
    --color-darker-gray: #fff;
    --color-secondary-text: rgb(255 255 255 / 0.64);
    --color-border: rgb(255 255 255 / 0.15);
    --color-dark-border: rgb(255 255 255 / 0.5);
    --background-color: #15171a;
}

/* Resets */

*, *::before, *::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    font-family: var(--font-sans);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
    display: block;
    height: auto;
    max-width: 100%;
}

iframe {
    display: block;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-sans);
    line-height: 1.2;
}

/* Globals */

html {
    --container-width: 840px;
    --content-width: 640px;
}

body {
    font-family: var(--font-sans);
    font-size: 1.6rem;
    background-color: var(--background-color);
    color: var(--color-primary-text);
}

a {
    color: var(--color-darker-gray);
    text-decoration: none;
}

a:not([class]):hover {
    opacity: 0.8;
}

.gh-canvas,
.kg-width-full.kg-content-wide {
    --main: min(var(--content-width, 720px), 100% - var(--container-gap) * 2);
    --wide: minmax(0, calc((var(--container-width, 1200px) - var(--content-width, 720px)) / 2));
    --full: minmax(var(--container-gap), 1fr);

    display: grid;
    grid-template-columns:
        [full-start] var(--full)
        [wide-start] var(--wide)
        [main-start] var(--main) [main-end]
        var(--wide) [wide-end]
        var(--full) [full-end];
}

.gh-canvas > * {
    grid-column: main;
}

.kg-width-wide,
.kg-content-wide > div {
    grid-column: full;
}

.kg-width-full {
    grid-column: full;
}

/* Article */

.gh-article-header {
    margin: 24px 0 40px;
}

.gh-article-title {
    font-weight: 700;
    text-wrap: pretty;
    font-size: 3.6rem;
    letter-spacing: -0.015em;
    line-height: 1.1;
}

.gh-article-excerpt {
    margin-top: 12px;
    font-size: calc(var(--font-size) * 1.06 * var(--font-size-multiplier, 1));
    line-height: 1.4;
    text-wrap: pretty;
}

.has-serif-body .gh-article-excerpt {
    font-family: var(--font-serif-alt);
}

.gh-article-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
}

.gh-article-meta:hover {
    opacity: 1;
}

.gh-article-author-image {
    display: flex;
    margin-right: 8px;
    margin-left: 6px;
}

.gh-article-author-image span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 46px;
    height: 46px;
    overflow: hidden;
    margin: 0 -8px;
    background-color: #F4F5F6;
    border-radius: 50%;
    border: 3px solid var(--background-color);
}

html.has-sepia-bg .gh-article-author-image span {
    background-color: #EFEDE6;
}

html.has-light-text .gh-article-author-image span {
    background-color: #394047;
}

.gh-article-author-image span:first-child {
    z-index: 10;
}

.gh-article-author-image span:nth-child(2) {
    z-index: 9;
}

.gh-article-author-image span:nth-child(3) {
    z-index: 8;
}

.gh-article-author-image img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gh-article-author-image svg {
    width: 18px;
    height: 18px;
    color: #95A1AD;
}

.gh-article-meta-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin-top: -2px;
}

.gh-article-author-name {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.008em;
}

.gh-article-source {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 1.5rem;
    line-height: 1.2;
    color: var(--color-secondary-text);
    width: fit-content;
}

.gh-article-source svg {
    width: 12px;
    height: 12px;
    margin-top: 1px;
}

.gh-article-meta:hover .gh-article-source {
    text-decoration: underline;
}

.gh-article-image {
    grid-column: full;
    margin-top: 40px;
}

.gh-article-image img {
    width: 100%;
}

/* Content */

/* Content refers to styling all page and post content that is
created within the Ghost editor. The main content handles
headings, text, images and lists. We deal with cards lower down. */

.gh-content {
    font-size: calc(var(--font-size) * var(--font-size-multiplier, 1));
    overflow-x: hidden;
    letter-spacing: var(--letter-spacing);
    line-height: var(--line-height);
}

/* Default vertical spacing */
.gh-content > * + * {
    margin-top: calc(28px * var(--content-spacing-factor, 1));
    margin-bottom: 0;
}

/* Remove space between full-width cards */
.gh-content > .kg-width-full + .kg-width-full:not(.kg-width-full.kg-card-hascaption + .kg-width-full) {
    margin-top: 0;
}

/* Add back a top margin to all headings,
unless a heading is the very first element in the post content */
.gh-content > [id]:not(:first-child) {
    margin-top: calc(40px * var(--content-spacing-factor, 1));
}

/* Add a small margin between a heading and paragraph after it */
.gh-content > [id] + p {
    margin-top: calc(12px * var(--content-spacing-factor, 1));
}

/* A larger margin before/after dividers, blockquotes and embeds */
.gh-content > :is(hr, blockquote, iframe) {
    position: relative;
    margin-top: calc(48px * var(--content-spacing-factor, 1)) !important;
}

.gh-content > :is(hr, blockquote, iframe) + * {
    margin-top: calc(48px * var(--content-spacing-factor, 1)) !important;
}

/* Now the content typography styles */
.gh-content [id] {
    letter-spacing: -0.005em;
}

.gh-content h1 {
    font-size: 1.9em;
}

.gh-content h2 {
    font-size: 1.6em;
}

.gh-content h3 {
    font-size: 1.3em;
}

.gh-content h4 {
    font-size: 1.2em;
}

.gh-content h5 {
    font-size: 1.1em;
}

.gh-content h6 {
    font-size: 1em;
}

.gh-content a:not([class]) {
    color: #14B8FF;
    text-decoration: underline;
}

html.has-light-text .gh-content a:not([class]) {
    color: #14B8FF;
}

html.has-sepia-bg .gh-content a:not([class]) {
    color: #DD6B02;
}

.gh-content .kg-callout-card .kg-callout-text,
.gh-content .kg-toggle-card .kg-toggle-content > :is(ul, ol, p) {
    font-size: 0.95em;
}

.has-serif-body .gh-content > blockquote,
.has-serif-body .gh-content > ol,
.has-serif-body .gh-content > ul,
.has-serif-body .gh-content > dl,
.has-serif-body .gh-content > p,
.has-serif-body .gh-content .kg-callout-text,
.has-serif-body .gh-content .kg-toggle-content > ol,
.has-serif-body .gh-content .kg-toggle-content > ul,
.has-serif-body .gh-content .kg-toggle-content > p {
    font-family: var(--font-serif-alt);
}

.gh-content :is(ul, ol) {
    padding-left: 28px;
}

.gh-content :is(li + li, li :is(ul, ol)) {
    margin-top: 8px;
}

.gh-content ol ol li {
    list-style-type: lower-alpha;
}

.gh-content ol ol ol li {
    list-style-type: lower-roman;
}

.gh-content hr {
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    border: 0;
}

.gh-content .gh-table {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
}

.gh-content .gh-table table {
    width: 100%;
    font-family: var(--font-sans);
    font-size: 1.5rem;
    white-space: nowrap;
    vertical-align: top;
    border-spacing: 0;
    border-collapse: collapse;
}

.gh-content .gh-table table th {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-darkgrey);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.2px;
}

.gh-content .gh-table table :is(th, td),
.gh-content .gh-table table td {
    padding: 6px 12px;
    border-bottom: 1px solid var(--color-border);
}

.gh-content .gh-table table :is(th, td):first-child {
    padding-left: 0;
}

.gh-content .gh-table table :is(th, td):last-child {
    padding-right: 0;
}

.gh-content pre {
    overflow: auto;
    padding: 16px;
    font-size: 1.5rem;
    line-height: 1.5em;
    background: var(--color-lighter-gray);
    border-radius: 6px;
    font-family: var(--font-mono);
}

.gh-content :not(pre) > code {
    vertical-align: baseline;
    padding: 0.15em 0.4em;
    font-weight: 400;
    font-size: 0.95em;
    line-height: 1em;
    background: var(--color-lighter-gray);
    border-radius: 0.25em;
    font-family: var(--font-mono);
}

.gh-content mark {
    color: inherit;
    background: rgb(255 225 54 / 25%);
}

/* Cards */

/* Add extra margin before/after any cards, except for when immediately preceeded by a heading */

.gh-content :not(.kg-card):not(table):not([id]) + :is(.kg-card, table) {
    margin-top: calc(48px * var(--content-spacing-factor, 1));
}

.gh-content :is(.kg-card, table) + :not(.kg-card):not(table):not([id]) {
    margin-top: calc(48px * var(--content-spacing-factor, 1));
}

.gh-content :not(.kg-card):not([id]) + .kg-card.kg-width-full {
    margin-top: calc(68px * var(--content-spacing-factor, 1));
}

.gh-content .kg-card.kg-width-full + :not(.kg-card):not([id]) {
    margin-top: calc(68px * var(--content-spacing-factor, 1));
}

.kg-image {
    margin-right: auto;
    margin-left: auto;
}

.kg-embed-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.kg-image-card a:hover,
.kg-gallery-image a:hover {
    opacity: 1 !important;
}

blockquote:not([class]) {
    padding-left: 2rem;
    border-left: 4px solid var(--ghost-accent-color);
}

blockquote.kg-blockquote-alt {
    font-style: normal;
    font-weight: 400;
    color: var(--color-secondary-text);
}

.has-serif-body .kg-header-card h3.kg-header-card-subheader {
    font-family: var(--font-serif);
}

.has-serif-body .kg-product-card-description :is(p, ul, ol) {
    font-family: var(--font-serif-alt);
}

/* Caption */

figcaption {
    margin-top: 12px;
    font-size: 1.3rem;
    text-align: center;
}

.kg-card.kg-width-full figcaption {
    padding: 0 16px;
}

figcaption a {
    color: rgb(29 78 216);
    text-decoration: underline;
}

/* Paid content styles */

.gh-paid-content-notice {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 36px;
    background: rgba(0, 0, 0, 0.035);
    border-radius: 14px;
    font-size: 16px;
}

html.has-light-text .gh-paid-content-notice {
    background: rgba(255, 255, 255, 0.035);
}

.gh-paid-content-notice h3 {
    letter-spacing: -0.015em !important;
}

.gh-paid-content-notice p {
    max-width: 350px;
    text-align: center;
    line-height: 1.3em;
}

.gh-paid-content-cta {
    display: block;
    color: var(--background-color) !important;
    background: var(--color-primary-text);
    text-decoration: none !important;
    font-weight: 600;
    font-size: 0.9em;
    padding: 8px 16px;
    margin-top: 8px;
    border-radius: 6px;
}

/* Design settings /*

.has-serif-body {
    --font-size-multiplier: 1.1;
}

.has-serif-body .gh-content > blockquote,
.has-serif-body .gh-content > ol,
.has-serif-body .gh-content > ul,
.has-serif-body .gh-content > dl,
.has-serif-body .gh-content > p,
.has-serif-body .gh-content .kg-callout-card .kg-callout-text,
.has-serif-body .gh-content .kg-toggle-card .kg-toggle-content > ol,
.has-serif-body .gh-content .kg-toggle-card .kg-toggle-content > ul,
.has-serif-body .gh-content .kg-toggle-card .kg-toggle-content > p {
    font-family: var(--font-serif-alt);
}

</style>`,Ie=`(function() {
    const handleAudioPlayer = function (audioElementContainer) {
        const audioPlayerContainer = audioElementContainer.querySelector('.kg-audio-player-container');
        const playIconContainer = audioElementContainer.querySelector('.kg-audio-play-icon');
        const pauseIconContainer = audioElementContainer.querySelector('.kg-audio-pause-icon');
        const seekSlider = audioElementContainer.querySelector('.kg-audio-seek-slider');
        const playbackRateContainer = audioElementContainer.querySelector('.kg-audio-playback-rate');
        const muteIconContainer = audioElementContainer.querySelector('.kg-audio-mute-icon');
        const unmuteIconContainer = audioElementContainer.querySelector('.kg-audio-unmute-icon');
        const volumeSlider = audioElementContainer.querySelector('.kg-audio-volume-slider');
        const audio = audioElementContainer.querySelector('audio');
        const durationContainer = audioElementContainer.querySelector('.kg-audio-duration');
        const currentTimeContainer = audioElementContainer.querySelector('.kg-audio-current-time');
        let playbackRates = [{
            rate: 0.75,
            label: '0.7×'
        }, {
            rate: 1.0,
            label: '1×'
        }, {
            rate: 1.25,
            label: '1.2×'
        }, {
            rate: 1.75,
            label: '1.7×'
        }, {
            rate: 2.0,
            label: '2×'
        }];

        let raf = null;
        let currentPlaybackRateIdx = 1;

        const whilePlaying = () => {
            seekSlider.value = Math.floor(audio.currentTime);
            currentTimeContainer.textContent = calculateTime(seekSlider.value);
            audioPlayerContainer.style.setProperty('--seek-before-width', \`\${seekSlider.value / seekSlider.max * 100}%\`);
            raf = requestAnimationFrame(whilePlaying);
        }

        const showRangeProgress = (rangeInput) => {
            if (rangeInput === seekSlider) {
                audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
            }
            else {
                audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
            }
        }

        const calculateTime = (secs) => {
            const minutes = Math.floor(secs / 60);
            const seconds = Math.floor(secs % 60);
            const returnedSeconds = seconds < 10 ? \`0\${seconds}\` : \`\${seconds}\`;
            return \`\${minutes}:\${returnedSeconds}\`;
        }

        const displayDuration = () => {
            durationContainer.textContent = calculateTime(audio.duration);
        }

        const setSliderMax = () => {
            seekSlider.max = Math.floor(audio.duration);
        }

        const displayBufferedAmount = () => {
            if (audio.buffered.length > 0) {
                const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
                audioPlayerContainer.style.setProperty('--buffered-width', \`\${(bufferedAmount / seekSlider.max) * 100}%\`);
            }
        }

        if (audio.readyState > 0) {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
        } else {
            audio.addEventListener('loadedmetadata', () => {
                displayDuration();
                setSliderMax();
                displayBufferedAmount();
            });
        }

        playIconContainer.addEventListener('click', () => {
            playIconContainer.classList.add("kg-audio-hide");
            pauseIconContainer.classList.remove("kg-audio-hide");
            audio.play();
            requestAnimationFrame(whilePlaying);
        });

        pauseIconContainer.addEventListener('click', () => {
            pauseIconContainer.classList.add("kg-audio-hide");
            playIconContainer.classList.remove("kg-audio-hide");
            audio.pause();
            cancelAnimationFrame(raf);
        });

        muteIconContainer.addEventListener('click', () => {
            muteIconContainer.classList.add("kg-audio-hide");
            unmuteIconContainer.classList.remove("kg-audio-hide");
            audio.muted = false;
        });

        unmuteIconContainer.addEventListener('click', () => {
            unmuteIconContainer.classList.add("kg-audio-hide");
            muteIconContainer.classList.remove("kg-audio-hide");
            audio.muted = true;
        });

        playbackRateContainer.addEventListener('click', () => {
            let nextPlaybackRate = playbackRates[(currentPlaybackRateIdx + 1) % 5];
            currentPlaybackRateIdx = currentPlaybackRateIdx + 1;
            audio.playbackRate = nextPlaybackRate.rate;
            playbackRateContainer.textContent = nextPlaybackRate.label;
        });

        audio.addEventListener('progress', displayBufferedAmount);

        seekSlider.addEventListener('input', (e) => {
            showRangeProgress(e.target);
            currentTimeContainer.textContent = calculateTime(seekSlider.value);
            if (!audio.paused) {
                cancelAnimationFrame(raf);
            }
        });

        seekSlider.addEventListener('change', () => {
            audio.currentTime = seekSlider.value;
            if (!audio.paused) {
                requestAnimationFrame(whilePlaying);
            }
        });

        volumeSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            showRangeProgress(e.target);
            audio.volume = value / 100;
        });
    }

    const audioCardElements = document.querySelectorAll('.kg-audio-card');

    for (let i = 0; i < audioCardElements.length; i++) {
        handleAudioPlayer(audioCardElements[i]);
    }
})();
`,Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"})),Pe=`(function() {
    const images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        const container = image.closest('.kg-gallery-image');
        const width = image.attributes.width.value;
        const height = image.attributes.height.value;
        const ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    })
})();
`,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"})),Le=`(function() {
    const toggleHeadingElements = document.getElementsByClassName("kg-toggle-heading");

    const toggleFn = function(event) {
        const targetElement = event.target;
        const parentElement = targetElement.closest('.kg-toggle-card');
        var toggleState = parentElement.getAttribute("data-kg-toggle-state");
        if (toggleState === 'close') {
            parentElement.setAttribute('data-kg-toggle-state', 'open');
        } else {
            parentElement.setAttribute('data-kg-toggle-state', 'close');
        }
    };

    for (let i = 0; i < toggleHeadingElements.length; i++) {
        toggleHeadingElements[i].addEventListener('click', toggleFn, false);
    }
})();
`,Re=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"})),Oe=`(function() {
    const handleVideoPlayer = function (videoElementContainer) {
        const videoPlayer = videoElementContainer.querySelector('.kg-video-player');
        const videoPlayerContainer = videoElementContainer.querySelector('.kg-video-player-container');
        const playIconContainer = videoElementContainer.querySelector('.kg-video-play-icon');
        const pauseIconContainer = videoElementContainer.querySelector('.kg-video-pause-icon');
        const seekSlider = videoElementContainer.querySelector('.kg-video-seek-slider');
        const playbackRateContainer = videoElementContainer.querySelector('.kg-video-playback-rate');
        const muteIconContainer = videoElementContainer.querySelector('.kg-video-mute-icon');
        const unmuteIconContainer = videoElementContainer.querySelector('.kg-video-unmute-icon');
        const volumeSlider = videoElementContainer.querySelector('.kg-video-volume-slider');
        const videoEl = videoElementContainer.querySelector('video');
        const durationContainer = videoElementContainer.querySelector('.kg-video-duration');
        const currentTimeContainer = videoElementContainer.querySelector('.kg-video-current-time');
        const largePlayIcon = videoElementContainer.querySelector('.kg-video-large-play-icon');
        const videoOverlay = videoElementContainer.querySelector('.kg-video-overlay');
        let playbackRates = [{
            rate: 0.75,
            label: '0.7×'
        }, {
            rate: 1.0,
            label: '1×'
        }, {
            rate: 1.25,
            label: '1.2×'
        }, {
            rate: 1.75,
            label: '1.7×'
        }, {
            rate: 2.0,
            label: '2×'
        }];

        let raf = null;
        let currentPlaybackRateIdx = 1;
        if (!!videoEl.loop) {
            largePlayIcon.classList.add("kg-video-hide-animated");
            videoOverlay.classList.add("kg-video-hide-animated");
        }
        const whilePlaying = () => {
            seekSlider.value = Math.floor(videoEl.currentTime);
            currentTimeContainer.textContent = calculateTime(seekSlider.value);
            videoPlayer.style.setProperty('--seek-before-width', \`\${seekSlider.value / seekSlider.max * 100}%\`);
            raf = requestAnimationFrame(whilePlaying);
        }

        const showRangeProgress = (rangeInput) => {
            if (rangeInput === seekSlider) {
                videoPlayer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
            }
            else {
                videoPlayer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
            }
        }

        const calculateTime = (secs) => {
            const minutes = Math.floor(secs / 60);
            const seconds = Math.floor(secs % 60);
            const returnedSeconds = seconds < 10 ? \`0\${seconds}\` : \`\${seconds}\`;
            return \`\${minutes}:\${returnedSeconds}\`;
        }

        const displayDuration = () => {
            durationContainer.textContent = calculateTime(videoEl.duration);
        }

        const setSliderMax = () => {
            seekSlider.max = Math.floor(videoEl.duration);
        }

        const displayBufferedAmount = () => {
            if (videoEl.buffered.length > 0) {
                const bufferedAmount = Math.floor(videoEl.buffered.end(videoEl.buffered.length - 1));
                videoPlayer.style.setProperty('--buffered-width', \`\${(bufferedAmount / seekSlider.max) * 100}%\`);
            }
        }

        if (videoEl.readyState > 0) {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
            if (videoEl.autoplay) {
                raf = requestAnimationFrame(whilePlaying);
                playIconContainer.classList.add("kg-video-hide");
                pauseIconContainer.classList.remove("kg-video-hide");
            }
            if (videoEl.muted) {
                unmuteIconContainer.classList.add("kg-video-hide");
                muteIconContainer.classList.remove("kg-video-hide");
            }
        } else {
            videoEl.addEventListener('loadedmetadata', () => {
                displayDuration();
                setSliderMax();
                displayBufferedAmount();
                if (videoEl.autoplay) {
                    raf = requestAnimationFrame(whilePlaying);
                    playIconContainer.classList.add("kg-video-hide");
                    pauseIconContainer.classList.remove("kg-video-hide");
                }
                if (videoEl.muted) {
                    unmuteIconContainer.classList.add("kg-video-hide");
                    muteIconContainer.classList.remove("kg-video-hide");
                }
            });
        }

        videoElementContainer.onmouseover = () => {
            if (!videoEl.loop) {
                videoPlayerContainer.classList.remove("kg-video-hide-animated");
            }
        }

        videoElementContainer.onmouseleave = () => {
            const isPlaying = !!(videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended && videoEl.readyState > 2);
            if (isPlaying) {
                videoPlayerContainer.classList.add("kg-video-hide-animated");
            }
        }

        videoElementContainer.addEventListener('click', () => {
            if (!videoEl.loop) {
                const isPlaying = !!(videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended && videoEl.readyState > 2);
                if (isPlaying) {
                    handleOnPause();
                } else {
                    handleOnPlay();
                }
            }
        });

        videoEl.onplay = () => {
            largePlayIcon.classList.add("kg-video-hide-animated");
            videoOverlay.classList.add("kg-video-hide-animated");
            playIconContainer.classList.add("kg-video-hide");
            pauseIconContainer.classList.remove("kg-video-hide");
        };

        const handleOnPlay = () => {
            largePlayIcon.classList.add("kg-video-hide-animated");
            videoOverlay.classList.add("kg-video-hide-animated");
            playIconContainer.classList.add("kg-video-hide");
            pauseIconContainer.classList.remove("kg-video-hide");
            videoEl.play();
            raf = requestAnimationFrame(whilePlaying);
        }

        const handleOnPause = () => {
            pauseIconContainer.classList.add("kg-video-hide");
            playIconContainer.classList.remove("kg-video-hide");
            videoEl.pause();
            cancelAnimationFrame(raf);
        }

        largePlayIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            handleOnPlay();
        });

        playIconContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            handleOnPlay();
        });

        pauseIconContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            handleOnPause();
        });

        muteIconContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            muteIconContainer.classList.add("kg-video-hide");
            unmuteIconContainer.classList.remove("kg-video-hide");
            videoEl.muted = false;
        });

        unmuteIconContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            unmuteIconContainer.classList.add("kg-video-hide");
            muteIconContainer.classList.remove("kg-video-hide");
            videoEl.muted = true;
        });

        playbackRateContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            let nextPlaybackRate = playbackRates[(currentPlaybackRateIdx + 1) % 5];
            currentPlaybackRateIdx = currentPlaybackRateIdx + 1;
            videoEl.playbackRate = nextPlaybackRate.rate;
            playbackRateContainer.textContent = nextPlaybackRate.label;
        });

        videoEl.addEventListener('progress', displayBufferedAmount);

        seekSlider.addEventListener('input', (e) => {
            e.stopPropagation();
            showRangeProgress(e.target);
            currentTimeContainer.textContent = calculateTime(seekSlider.value);
            if (!videoEl.paused) {
                cancelAnimationFrame(raf);
            }
        });

        seekSlider.addEventListener('change', (event) => {
            event.stopPropagation();
            videoEl.currentTime = seekSlider.value;
            if (!videoEl.paused) {
                requestAnimationFrame(whilePlaying);
            }
        });

        volumeSlider.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        seekSlider.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        volumeSlider.addEventListener('input', (e) => {
            e.stopPropagation();
            const value = e.target.value;
            showRangeProgress(e.target);
            videoEl.volume = value / 100;
        });
    }

    const setVideoContainerAspectRatio = function(videoCard) {
        const container = videoCard.querySelector('.kg-video-container');
        const video = container.querySelector('video');
        if (container && video.width && video.height) {
            const aspectRatio = (video.height / video.width * 100).toFixed(3);
            container.style.paddingBottom = \`\${aspectRatio}%\`;
        }
    };

    const videoCardElements = document.querySelectorAll('.kg-video-card');

    for (let i = 0; i < videoCardElements.length; i++) {
        setVideoContainerAspectRatio(videoCardElements[i]);
        handleVideoPlayer(videoCardElements[i]);
    }
})();
`,Te=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),Me=`.kg-audio-card,
.kg-audio-card * {
    box-sizing: border-box;
}

.kg-audio-card {
    display: flex;
    width: 100%;
    min-height: 96px;
    border-radius: 6px;
    padding: 4px;
    background: #fff;
    color: #222;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.kg-audio-card+.kg-audio-card {
    margin-top: 1em;
}

.kg-audio-thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    min-width: 80px;
    margin: 8px;
    background: transparent;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 3px;
}

.kg-audio-thumbnail.placeholder {
    background: var(--ghost-accent-color);
}

.kg-audio-thumbnail.placeholder svg {
    width: 24px;
    height: 24px;
    fill: white;
}

.kg-audio-player-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    --seek-before-width: 0%;
    --volume-before-width: 100%;
    --buffered-width: 0%;
}

.kg-audio-title {
    width: 100%;
    margin: 8px 0 0 0;
    padding: 8px 12px;
    border: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.15em;
    background: transparent;
}

.kg-audio-player {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 8px 12px;
}

.kg-audio-current-time {
    min-width: 38px;
    padding: 0 4px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1em;
    white-space: nowrap;
}

.kg-audio-time {
    width: 56px;
    color: #ababab;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1em;
    white-space: nowrap;
}

.kg-audio-duration {
    padding: 0 4px;
}

.kg-audio-play-icon,
.kg-audio-pause-icon {
    position: relative;
    bottom: 1px;
    padding: 0px 4px 0 0;
    font-size: 0;
    background: transparent;
}

.kg-audio-hide {
    display: none !important;
}

.kg-audio-play-icon svg,
.kg-audio-pause-icon svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
}

.kg-audio-seek-slider {
    flex-grow: 1;
    margin: 0 4px;
}

@media (max-width: 640px) {
    .kg-audio-seek-slider {
        display: none;
    }
}

.kg-audio-playback-rate {
    min-width: 37px;
    padding: 0 4px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 600;
    line-height: 1em;
    text-align: left;
    background: transparent;
    white-space: nowrap;
}

@media (max-width: 640px) {
    .kg-audio-playback-rate {
        padding-left: 8px;
    }
}

.kg-audio-mute-icon,
.kg-audio-unmute-icon {
    position: relative;
    bottom: -1px;
    padding: 0 4px;
    font-size: 0;
    background: transparent;
}

@media (max-width: 640px) {
    .kg-audio-mute-icon,
    .kg-audio-unmute-icon  {
        margin-left: auto;
    }
}

.kg-audio-mute-icon svg,
.kg-audio-unmute-icon svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}

.kg-audio-volume-slider {
    width: 80px;
}

@media (max-width: 400px) {
    .kg-audio-volume-slider {
        display: none;
    }
}

.kg-audio-seek-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--seek-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: currentColor;
    border-radius: 2px;
}

.kg-audio-volume-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--volume-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: currentColor;
    border-radius: 2px;
}

/* Resetting browser styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type=range] {
    position: relative;
    -webkit-appearance: none;
    background: transparent;
}

.kg-audio-player-container input[type=range]:focus {
    outline: none;
}

.kg-audio-player-container input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.kg-audio-player-container input[type=range]::-ms-track {
    cursor: pointer;
    border-color: transparent;
    color: transparent;
    background: transparent;
}

.kg-audio-player-container button {
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
}

.kg-audio-player-container input[type="range"] {
    height: auto;
    padding: 0;
    border: 0;
}

/* Chrome & Safari styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(124, 139, 154, 0.25);
    border-radius: 2px;
}

.kg-audio-player-container input[type="range"]::-webkit-slider-thumb {
    position: relative;
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    margin: -5px 0 0 0;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-audio-player-container input[type="range"]:active::-webkit-slider-thumb {
    transform: scale(1.2);
}

/* Firefox styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(124, 139, 154, 0.25);
    border-radius: 2px;
}

.kg-audio-player-container input[type="range"]::-moz-range-progress {
    background: currentColor;
    border-radius: 2px;
}

.kg-audio-player-container input[type="range"]::-moz-range-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-audio-player-container input[type="range"]:active::-moz-range-thumb {
    transform: scale(1.2);
}

/* Edge & IE styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type="range"]::-ms-track {
    width: 100%;
    height: 3px;
    border: solid transparent;
    color: transparent;
    cursor: pointer;
    background: transparent;
}

.kg-audio-player-container input[type="range"]::-ms-fill-lower {
    background: #fff;
}

.kg-audio-player-container input[type="range"]::-ms-fill-upper {
    background: currentColor;
}

.kg-audio-player-container input[type="range"]::-ms-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-audio-player-container input[type="range"]:active::-ms-thumb {
    transform: scale(1.2);
}
`,Ae=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),$e=`.kg-blockquote-alt {
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.7em;
  text-align: center;
  padding: 0 2.5em;
}

@media (max-width: 800px) {
  .kg-blockquote-alt {
    font-size: 1.4em;
    padding-left: 2em;
    padding-right: 2em;
  }
}

@media (max-width: 600px) {
  .kg-blockquote-alt {
    font-size: 1.2em;
    padding-left: 1.75em;
    padding-right: 1.75em;
  } 
}
`,De=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"})),Be=`.kg-bookmark-card,
.kg-bookmark-card * {
    box-sizing: border-box;
}

.kg-bookmark-card,
.kg-bookmark-publisher {
    position: relative;
    /* width: 100%; */
}

.kg-bookmark-card a.kg-bookmark-container,
.kg-bookmark-card a.kg-bookmark-container:hover {
    display: flex;
    background: #fff;
    text-decoration: none;
    border-radius: 6px;
    border: 1px solid rgb(124 139 154 / 25%);
    overflow: hidden;
    color: #222;
}

.kg-bookmark-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.kg-bookmark-title {
    font-size: 15px;
    line-height: 1.4em;
    font-weight: 600;
}

.kg-bookmark-description {
    display: -webkit-box;
    font-size: 14px;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    max-height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.kg-bookmark-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
}

.kg-bookmark-metadata > *:not(img) {
    opacity: 0.7;
}

.kg-bookmark-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}

.kg-bookmark-author,
.kg-bookmark-publisher {
    display: inline;
}

.kg-bookmark-publisher {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 240px;
    white-space: nowrap;
    display: block;
    line-height: 1.65em;
}

.kg-bookmark-metadata > span:nth-of-type(2) {
    font-weight: 400;
}

.kg-bookmark-metadata > span:nth-of-type(2):before {
    content: "•";
    margin: 0 6px;
}

.kg-bookmark-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
}

.kg-bookmark-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
}

.kg-bookmark-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 2px 2px 0;
}
`,qe=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),He=`.kg-button-card,
.kg-button-card * {
    box-sizing: border-box;
}

.kg-button-card {
    display: flex;
    position: static;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.kg-button-card.kg-align-left {
    justify-content: flex-start;
}

.kg-button-card a.kg-btn {
    display: flex;
    position: static;
    align-items: center;
    padding: 0 1.2em;
    height: 2.4em;
    line-height: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 0.95em;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    transition: opacity 0.2s ease-in-out;
}

.kg-button-card a.kg-btn:hover {
    opacity: 0.85;
}

.kg-button-card a.kg-btn-accent {
    background-color: var(--ghost-accent-color);
    color: #fff;
}`,Ue=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"})),We=`.kg-callout-card,
.kg-callout-card * {
    box-sizing: border-box;
}

.kg-callout-card {
    display: flex;
    padding: 1.2em 1.6em;
    border-radius: 8px;
}

.kg-callout-card-grey {
    background: rgba(124, 139, 154, 0.13);
}

.kg-callout-card-white {
    background: transparent;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.2);
}

.kg-callout-card-blue {
    background: rgba(33, 172, 232, 0.12);
}

.kg-callout-card-green {
    background: rgba(52, 183, 67, 0.12);
}

.kg-callout-card-yellow {
    background: rgba(240, 165, 15, 0.13);
}

.kg-callout-card-red {
    background: rgba(209, 46, 46, 0.11);
}

.kg-callout-card-pink {
    background: rgba(225, 71, 174, 0.11);
}

.kg-callout-card-purple {
    background: rgba(135, 85, 236, 0.12);
}

.kg-callout-card-accent {
    background: var(--ghost-accent-color);
    color: #fff;
}

.kg-callout-card.kg-callout-card-accent a {
    color: #fff;
    text-decoration: underline;
}

.kg-callout-card div.kg-callout-emoji {
    padding-right: .8em;
    line-height: 1.25em;
    font-size: 1.15em;
}

.kg-callout-card div.kg-callout-text {
    font-size: .95em;
    line-height: 1.5em;
}

.kg-callout-card + .kg-callout-card {
    margin-top: 1em;
}`,Ke=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"})),Ve=`.kg-collection-card {
    width: 100%;
    margin-top: 6vmin;
}

.kg-collection-card + * { 
    margin-top: 6vmin; 
}

.kg-collection-card-title {
    margin: .8rem 0 1.6rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
}

a.kg-collection-card-post-wrapper {
    text-decoration: none;
    color: var(--text-color);
}

a.kg-collection-card-post-wrapper:hover {
    opacity: 1;
}


.kg-collection-card-post {
    display: flex;
    gap: 3.2rem;
}

.kg-collection-card-img {
    position: relative;
    aspect-ratio: 3/2;
}

.kg-collection-card-img img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

a.kg-collection-card-post-wrapper:hover img {
    opacity: .92;
    transition: all .2s ease;
}

.kg-collection-card-content {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
}

h2.kg-collection-card-post-title {
    margin: 0;
    font-size: 2.4rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

p.kg-collection-card-post-excerpt {
    margin-top: 1.2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.4;
}

.kg-collection-card-post-meta {
    display: flex;
    opacity: .5;
    margin-top: 1.2rem;
    font-size: 1.3rem;
    font-weight: 500;
}

/* List layout */

.kg-collection-card-list {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
}

@media (max-width: 767px) {
    .kg-collection-card-list .kg-collection-card-post {
        flex-direction: column;
    }
}

.kg-collection-card-list .kg-collection-card-img {
    flex: 0 0 30%;
}

/* Grid layout */

.kg-collection-card-grid {
    display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
    gap: 2.4rem;
}

@media (min-width: 640px) {
    .kg-collection-card-grid:not(.columns-1) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
}

@media (min-width: 1024px) {
    .kg-collection-card-grid:not(.columns-1):not(.columns-2) {
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 3.2rem
    }

    .kg-collection-card-grid.columns-1 {
        gap: 4.8rem
    }

    .kg-collection-card-grid.columns-2 {
        gap: 4rem
    }
}

@media (min-width: 1280px) {
    .kg-collection-card-grid:not(.columns-1):not(.columns-2):not(.columns-3) {
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
}

.kg-collection-card-grid .kg-collection-card-post {
    flex-direction: column;
    gap: 1.2rem;
}

@media (min-width: 1024px) {
    .kg-collection-card-grid.columns-1 .kg-collection-card-post {
        gap: 2rem
    }

    .kg-collection-card-grid.columns-2 .kg-collection-card-post {
        gap: 1.6rem
    }
}

.kg-collection-card-grid.columns-1 .kg-collection-card-img,
.kg-collection-card-grid.columns-2 .kg-collection-card-img {
    aspect-ratio: 16/9;
}

.kg-collection-card-grid .kg-collection-card-content {
    font-size: 1.5rem;
}

@media (min-width: 640px) {
    .kg-collection-card-grid .kg-collection-card-content {
        font-size: 1.6rem;
    }
}

@media (min-width: 1024px) {
    .kg-collection-card-grid.columns-1 .kg-collection-card-content {
        font-size: 1.8rem;
    }

    .kg-collection-card-grid.columns-3 .kg-collection-card-content,
    .kg-collection-card-grid.columns-4 .kg-collection-card-content {
        font-size: 1.5rem;
    }
}

.kg-collection-card-grid h2.kg-collection-card-post-title {
    font-size: 1.7rem;
}

.kg-collection-card-grid .kg-collection-card-post-meta {
    font-size: 1.25rem;
}

@media (min-width: 640px) {
    .kg-collection-card-grid h2.kg-collection-card-post-title {
        font-size: 1.9rem;
    }

    .kg-collection-card-grid.columns-1 h2.kg-collection-card-post-title {
        font-size: 2.4rem;
    }

    .kg-collection-card-grid:not(.columns-3):not(.columns-4) .kg-collection-card-post-meta {
        font-size: 1.3rem;
    }
}

@media (min-width: 1024px) {
    .kg-collection-card-grid.columns-1 h2.kg-collection-card-post-title {
        font-size: 3.6rem;
    }

    .kg-collection-card-grid.columns-2 h2.kg-collection-card-post-title {
        font-size: 2.4rem;
    }

    .kg-collection-card-grid.columns-1 .kg-collection-card-post-meta {
        font-size: 1.4rem;
    }
}

@media (min-width: 1280px) {
    .kg-collection-card-grid.columns-4 h2.kg-collection-card-post-title {
        font-size: 1.7rem;
    }
}`,Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"})),Qe=`.kg-cta-card,
.kg-cta-card * {
    box-sizing: border-box;
}

.kg-cta-card {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
}

.kg-cta-bg-grey {
    background: rgba(151, 163, 175, 0.14)
}

.kg-cta-bg-white {
    background: transparent;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.2);
}

.kg-cta-bg-blue {
    background: rgba(33, 172, 232, 0.12);
}

.kg-cta-bg-green {
    background: rgba(52, 183, 67, 0.12);
}

.kg-cta-bg-yellow {
    background: rgba(240, 165, 15, 0.13);
}

.kg-cta-bg-red {
    background: rgba(209, 46, 46, 0.11);
}

.kg-cta-bg-pink {
    background: rgba(225, 71, 174, 0.11);
}

.kg-cta-bg-purple {
    background: rgba(135, 85, 236, 0.12);
}

.kg-cta-sponsor-label-wrapper {
    margin: 0 1.5em;
    padding: .7em 0;
    border-bottom: 1px solid rgba(124, 139, 154, 0.2);
}

@media (max-width: 600px) {
    .kg-cta-sponsor-label-wrapper {
        margin: 0 1.25em;
        padding: .5em 0;
    }
}

.kg-cta-bg-none .kg-cta-sponsor-label-wrapper {
    margin: 0;
    padding-top: 0;
}

.kg-cta-has-img .kg-cta-sponsor-label-wrapper:not(.kg-cta-bg-none .kg-cta-sponsor-label-wrapper):not(.kg-cta-minimal .kg-cta-sponsor-label-wrapper),
.kg-cta-bg-none.kg-cta-no-dividers .kg-cta-sponsor-label-wrapper {
    border-bottom: 0;
}

.kg-cta-sponsor-label {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    text-wrap: pretty;
}

.kg-cta-sponsor-label span:not(a span) {
    color: color-mix(in srgb, currentColor 45%, transparent);
}

.kg-cta-sponsor-label a,
.kg-cta-sponsor-label a span {
    color: currentColor;
    transition: opacity 0.15s ease-in-out;
}

.kg-cta-sponsor-label a:hover,
.kg-cta-sponsor-label a:hover span {
    color: currentColor;
    opacity: 0.85;
}

.kg-cta-link-accent .kg-cta-sponsor-label a {
    color: var(--ghost-accent-color);
}

.kg-cta-content {
    display: flex;
    padding: 1.5em;
    gap: 1.5em;
}

@media (max-width: 600px) {
    .kg-cta-content {
        padding: 1.25em;
        gap: 1.25em;
    }
}

.kg-cta-has-img .kg-cta-sponsor-label-wrapper + .kg-cta-content:not(.kg-cta-bg-none .kg-cta-content):not(.kg-cta-minimal .kg-cta-content) {
    padding-top: 0;
}

.kg-cta-bg-none .kg-cta-content {
    padding: 1.5em 0;
    border-bottom: 1px solid rgba(124, 139, 154, 0.2);
}

.kg-cta-bg-none.kg-cta-no-dividers .kg-cta-content {
    padding: 0;
    border-bottom: none;
}

.kg-cta-bg-none:not(.kg-cta-no-dividers) .kg-cta-content:not(.kg-cta-sponsor-label-wrapper + .kg-cta-content) {
    border-top: 1px solid rgba(124, 139, 154, 0.2);
}

@media (max-width: 600px) {
    .kg-cta-bg-none .kg-cta-content {
        padding: 1.25em 0;
    }
}

.kg-cta-minimal .kg-cta-content {
    flex-direction: row;
}

@media (max-width: 600px) {
    .kg-cta-minimal .kg-cta-content {
        flex-direction: column;
        gap: 1.6rem;
    }
}

.kg-cta-immersive .kg-cta-content {
    flex-direction: column;
}

.kg-cta-content-inner {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
}

@media (max-width: 600px) {
    .kg-cta-content-inner {
        gap: 1.25em;
    }
}

.kg-cta-immersive.kg-cta-centered .kg-cta-content-inner {
    align-items: center;
}

.kg-cta-image-container {
    flex-shrink: 0;
}

.kg-cta-image-container img {
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: cover;
    border-radius: 6px;
}


.kg-cta-minimal .kg-cta-image-container img {
    width: 64px;
    height: 64px;
}

@media (max-width: 600px) {
    .kg-cta-minimal .kg-cta-image-container img {
        width: 52px;
        height: 52px;
    }
}

.kg-cta-text p {
    margin: 0;
    line-height: 1.5em;
    text-wrap: pretty;
}

.kg-cta-bg-none .kg-cta-text p {
    line-height: unset;
}

.kg-cta-immersive.kg-cta-centered .kg-cta-text {
    text-align: center;
}

.kg-cta-text p + p {
    margin-top: 1.25em;
}

.kg-cta-text a {
    color: currentColor;
    transition: opacity 0.15s ease-in-out;
}

.kg-cta-text a:hover {
    color: currentColor;
    opacity: 0.85;
}

.kg-cta-link-accent .kg-cta-text a {
    color: var(--ghost-accent-color);
}

a.kg-cta-button {
    display: flex;
    position: static;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    height: 2.5em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 0.95em;
    font-weight: 500;
    line-height: 1.65;
    text-decoration: none;
    border-radius: 6px;
    transition: opacity 0.15s ease-in-out;
}

a.kg-cta-button:hover {
    opacity: 0.85;
}

a.kg-cta-button.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

a.kg-cta-button {
    width: max-content;
}

.kg-cta-immersive.kg-cta-has-img a.kg-cta-button {
    width: 100%;
}

`,Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"})),Je=`.kg-file-card,
.kg-file-card * {
    box-sizing: border-box;
}

.kg-file-card {
    display: flex;
}

.kg-file-card a.kg-file-card-container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    color: inherit;
    padding: 12px;
    min-height: 92px;
    background: #fff;
    color: #222;
    border: 1px solid rgb(124 139 154 / 25%);
    border-radius: 5px;
    transition: all ease-in-out 0.35s;
    text-decoration: none;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.kg-file-card a.kg-file-card-container:hover {
    border: 1px solid rgb(124 139 154 / 35%);
}

.kg-file-card-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4px 8px;
    width: 100%
}

.kg-file-card-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3em;
}

.kg-file-card-caption {
    font-size: 14px;
    line-height: 1.3em;
    opacity: 0.7;
}

.kg-file-card-title + .kg-file-card-caption {
    flex-grow: 1;
    margin-top: 3px;
}

.kg-file-card-metadata {
    display: inline;
    font-size: 14px;
    line-height: 1.3em;
    margin-top: 5px;
}

.kg-file-card-filename {
    display: inline;
    font-weight: 500;
}

.kg-file-card-filesize {
    display: inline-block;
    font-size: 14px;
    opacity: 0.6;
}

.kg-file-card-filesize:before {
    display: inline-block;
    content: "\\2022";
    margin-left: 6px;
    margin-right: 6px;
}

.kg-file-card-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-width: 80px;
    height: 100%;
    min-height: 80px;
}

.kg-file-card-icon:before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: currentColor;
    opacity: 0.06;
    transition: opacity ease-in-out 0.35s;
    border-radius: 3px;
}

.kg-file-card a.kg-file-card-container:hover .kg-file-card-icon:before {
    opacity: 0.08;
}

.kg-file-card-icon svg {
    width: 24px;
    height: 24px;
    color: var(--ghost-accent-color);
}

/* Size variations */
.kg-file-card-medium a.kg-file-card-container {
    min-height: 72px;
}

.kg-file-card-medium .kg-file-card-caption {
    opacity: 1.0;
    font-weight: 500;
}

.kg-file-card-small a.kg-file-card-container {
    align-items: center;
    min-height: 52px;
}

.kg-file-card-small .kg-file-card-metadata {
    font-size: 14px;
    margin-top: 0;
}

.kg-file-card-small .kg-file-card-icon svg {
    width: 20px;
    height: 20px;
}

.kg-file-card + .kg-file-card {
    margin-top: 1em;
}
`,Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"})),Ge=`.kg-gallery-card,
.kg-gallery-card * {
    box-sizing: border-box;
}

.kg-gallery-card,
.kg-image-card {
    --gap: 1.2rem;
}

.kg-image-card:not(.kg-card-hascaption) + .kg-image-card,
.kg-image-card:not(.kg-card-hascaption) + .kg-gallery-card,
.kg-gallery-card:not(.kg-card-hascaption) + .kg-image-card,
.kg-gallery-card:not(.kg-card-hascaption) + .kg-gallery-card {
    margin-top: var(--gap);
}

.kg-gallery-container {
    position: relative;
}

.kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.kg-gallery-image img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
}

.kg-gallery-row:not(:first-of-type) {
    margin: var(--gap) 0 0;
}

.kg-gallery-image:not(:first-of-type) {
    margin: 0 0 0 var(--gap);
}

@media (max-width: 600px) {
    .kg-gallery-card,
    .kg-image-card {
        --gap: 0.6rem;
    }
}
`,nt=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),et=`.kg-header-card,
.kg-header-card * {
    box-sizing: border-box;
}

.kg-header-card {
    padding: 12vmin 4em;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.kg-header-card.kg-size-small {
    padding-top: 14vmin;
    padding-bottom: 14vmin;
    min-height: 40vh;
}

.kg-header-card.kg-size-large {
    padding-top: 18vmin;
    padding-bottom: 18vmin;
    min-height: 80vh;
}

.kg-header-card.kg-align-left {
    text-align: left;
    align-items: flex-start;
}

.kg-header-card.kg-style-dark {
    background: #151515;
    color: #ffffff;
}

.kg-header-card.kg-style-light {
    background-color: #fafafa;
}

.kg-header-card.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-header-card.kg-style-image {
    position: relative;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: center;
}

.kg-header-card.kg-style-image::before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
}

.kg-header-card h2.kg-header-card-header {
    font-size: 5em;
    font-weight: 700;
    line-height: 1.1em;
    letter-spacing: -0.01em;
    margin: 0;
}

.kg-header-card h2.kg-header-card-header strong {
    font-weight: 800;
}

.kg-header-card.kg-size-small h2.kg-header-card-header {
    font-size: 4em;
}

.kg-header-card.kg-size-large h2.kg-header-card-header {
    font-size: 6em;
}

.kg-header-card h3.kg-header-card-subheader {
    font-size: 1.5em;
    font-weight: 500;
    line-height: 1.4em;
    margin: 0;
    max-width: 40em;
}

.kg-header-card h2 + h3.kg-header-card-subheader {
    margin: 0.35em 0 0;
}

.kg-header-card h3.kg-header-card-subheader strong {
    font-weight: 600;
}

.kg-header-card.kg-size-small h3.kg-header-card-subheader {
    font-size: 1.25em;
}

.kg-header-card.kg-size-large h3.kg-header-card-subheader {
    font-size: 1.75em;
}

.kg-header-card:not(.kg-style-light) h2.kg-header-card-header,
.kg-header-card:not(.kg-style-light) h3.kg-header-card-subheader {
    color: #ffffff;
}

.kg-header-card.kg-style-accent h3.kg-header-card-subheader,
.kg-header-card.kg-style-image h3.kg-header-card-subheader {
    opacity: 1.0;
}

.kg-header-card.kg-style-image h2.kg-header-card-header,
.kg-header-card.kg-style-image h3.kg-header-card-subheader,
.kg-header-card.kg-style-image a.kg-header-card-button {
    z-index: 999;
}

.kg-header-card h2.kg-header-card-header a,
.kg-header-card h3.kg-header-card-subheader a {
    color: var(--ghost-accent-color);
}

.kg-header-card.kg-style-accent h2.kg-header-card-header a,
.kg-header-card.kg-style-accent h3.kg-header-card-subheader a,
.kg-header-card.kg-style-image h2.kg-header-card-header a,
.kg-header-card.kg-style-image h3.kg-header-card-subheader a {
    color: #fff;
}

.kg-header-card a.kg-header-card-button {
    display: flex;
    position: static;
    align-items: center;
    fill: #fff;
    background: #fff;
    border-radius: 3px;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1.05em;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #151515;
    height: 2.7em;
    padding: 0 1.2em;
    transition: opacity .2s ease;
}

.kg-header-card h2 + a.kg-header-card-button,
.kg-header-card h3 + a.kg-header-card-button {
    margin: 1.75em 0 0;
}

.kg-header-card a.kg-header-card-button:hover {
    opacity: 0.85;
}

.kg-header-card.kg-size-large a.kg-header-card-button {
    font-size: 1.1em;
    height: 2.9em;
}

.kg-header-card.kg-size-large h2 + a.kg-header-card-button,
.kg-header-card.kg-size-large h3 + a.kg-header-card-button {
    margin-top: 2em;
}

.kg-header-card.kg-size-small a.kg-header-card-button {
    height: 2.4em;
    font-size: 1em;
}

.kg-header-card.kg-size-small h2 + a.kg-header-card-button,
.kg-header-card.kg-size-small h3 + a.kg-header-card-button {
    margin-top: 1.5em;
}

.kg-header-card.kg-style-image a.kg-header-card-button,
.kg-header-card.kg-style-dark a.kg-header-card-button {
    background: #fff;
    color: #151515;
}

.kg-header-card.kg-style-light a.kg-header-card-button {
    background: var(--ghost-accent-color);
    color: #fff;
}

.kg-header-card.kg-style-accent a.kg-header-card-button {
    background: #fff;
    color: #151515;
}

@media (max-width: 640px) {
    .kg-header-card {
        padding-left: 1em;
        padding-right: 1em;
    }

    .kg-header-card h2.kg-header-card-header {
        font-size: 3.5em;
    }

    .kg-header-card.kg-size-large h2.kg-header-card-header {
        font-size: 4em;
    }

    .kg-header-card.kg-size-small h2.kg-header-card-header {
        font-size: 3em;
    }

    .kg-header-card h3.kg-header-card-subheader {
        font-size: 1.25em;
    }

    .kg-header-card.kg-size-large h3.kg-header-card-subheader {
        font-size: 1.5em;
    }

    .kg-header-card.kg-size-small h3.kg-header-card-subheader {
        font-size: 1em;
    }
}
`,tt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),at=`.kg-header-card.kg-v2 {
    position: relative;
    padding: 0;
    min-height: initial;
    text-align: initial;
}

.kg-header-card.kg-v2,
.kg-header-card.kg-v2 * {
    box-sizing: border-box;
}

.kg-header-card.kg-v2 a,
.kg-header-card.kg-v2 a span {
    color: currentColor;
}

.kg-header-card.kg-style-accent.kg-v2 {
    background-color: var(--ghost-accent-color);
}

.kg-header-card-content {
    width: 100%;
}

.kg-layout-split .kg-header-card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.kg-header-card-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    padding: min(6.4vmax, 120px) min(4vmax, 80px);
    background-size: cover;
    background-position: center;
    text-align: left;
}

.kg-width-wide .kg-header-card-text {
    padding: min(10vmax, 220px) min(6.4vmax, 140px);
}

.kg-width-full .kg-header-card-text {
    padding: min(12vmax, 260px) 0;
}

.kg-layout-split .kg-header-card-text {
    padding: min(12vmax, 260px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide .kg-header-card-text {
    padding: min(10vmax, 220px) 0 min(10vmax, 220px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide.kg-swapped .kg-header-card-text {
    padding: min(10vmax, 220px) min(4vmax, 80px) min(10vmax, 220px) 0;
}

.kg-swapped .kg-header-card-text {
    grid-row: 1;
}

.kg-header-card-text.kg-align-center {
    align-items: center;
    text-align: center;
}

.kg-header-card.kg-style-image h2.kg-header-card-heading,
.kg-header-card.kg-style-image .kg-header-card-subheading,
.kg-header-card.kg-style-image.kg-v2 .kg-header-card-button {
    z-index: 999;
}

/* Background image */

.kg-header-card > picture > .kg-header-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-color: #FFFFFF;
    pointer-events: none;
}

/* Split layout image */

.kg-header-card-content .kg-header-card-image {
    width: 100%;
    /* this will force the image to follow the signup card height */
    height: 0;
    min-height: 100%;
    /**/
    object-fit: cover;
    object-position: center;
}

.kg-content-wide .kg-header-card-content .kg-header-card-image {
    height: 100%;
    padding: 5.6em 0;
    object-fit: contain;
}

/* Heading */

.kg-header-card h2.kg-header-card-heading {
    margin: 0;
    font-size: clamp(1.7em, 4vw, 2.5em);
    font-weight: 700;
    line-height: 1.05em;
    letter-spacing: -0.01em;
}

.kg-header-card.kg-width-wide h2.kg-header-card-heading {
    font-size: clamp(1.7em, 5vw, 3.3em);
}

.kg-header-card.kg-width-full h2.kg-header-card-heading {
    font-size: clamp(1.9em, 5.6vw, 4.2em);
}

.kg-header-card.kg-width-full.kg-layout-split h2.kg-header-card-heading {
    font-size: clamp(1.9em, 4vw, 3.3em);
}

/* Subheading */

.kg-header-card-subheading {
    margin: 0 0 2em;
}

.kg-header-card .kg-header-card-subheading {
    max-width: 40em;
    margin: 0;
    font-size: clamp(1.05em, 2vw, 1.4em);
    font-weight: 500;
    line-height: 1.2em;
}

.kg-header-card h2 + .kg-header-card-subheading {
    margin: 0.6em 0 0;
}

.kg-header-card .kg-header-card-subheading strong {
    font-weight: 600;
}

.kg-header-card.kg-width-wide .kg-header-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

.kg-header-card.kg-width-full .kg-header-card-subheading:not(.kg-layout-split .kg-header-card-subheading) {
    max-width: min(65vmax, 1200px);
    font-size: clamp(1.05em, 2vw, 1.7em);
}

.kg-header-card.kg-width-full.kg-layout-split .kg-header-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

.kg-header-card.kg-v2 .kg-header-card-button {
    display: flex;
    position: relative;
    align-items: center;
    height: 2.9em;
    min-height: 46px;
    padding: 0 1.2em;
    outline: none;
    border: none;
    font-size: 1em;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 3px;
    transition: opacity .2s ease;
}

.kg-header-card.kg-v2 .kg-header-card-button.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-header-card.kg-v2 h2 + .kg-header-card-button,
.kg-header-card.kg-v2 p + .kg-header-card-button {
    margin: 1.5em 0 0;
}

.kg-header-card.kg-v2 .kg-header-card-button:hover {
    opacity: 0.85;
}

.kg-header-card.kg-v2.kg-width-wide .kg-header-card-button {
    font-size: 1.05em;
}

.kg-header-card.kg-v2.kg-width-wide h2 + .kg-header-card-button,
.kg-header-card.kg-v2.kg-width-wide p + .kg-header-card-button {
    margin-top: 1.75em;
}

.kg-header-card.kg-v2.kg-width-full .kg-header-card-button {
    font-size: 1.1em;
}

.kg-header-card.kg-v2.kg-width-full h2 + .kg-header-card-button,
.kg-header-card.kg-v2.kg-width-full p + .kg-header-card-button {
    margin-top: 2em;
}

/* Responsive styles */

@media (max-width: 640px) {
    .kg-layout-split .kg-header-card-content {
        grid-template-columns: 1fr;
    }

    .kg-width-wide .kg-header-card-text {
        padding: min(6.4vmax, 120px) min(4vmax, 80px);
    }

    .kg-layout-split.kg-content-wide .kg-header-card-text,
    .kg-layout-split.kg-content-wide.kg-swapped .kg-header-card-text {
        padding: min(9.6vmax, 180px) 0;
    }

    .kg-header-card.kg-width-full .kg-header-card-subheading:not(.kg-layout-split .kg-header-card-subheading) {
        max-width: unset;
    }

    .kg-header-card-content .kg-header-card-image:not(.kg-content-wide .kg-header-card-content .kg-header-card-image) {
        height: auto;
        min-height: unset;
        aspect-ratio: 1 / 1;
    }

    .kg-content-wide .kg-header-card-content .kg-header-card-image {
        padding: 1.7em 0 0;
    }

    .kg-content-wide.kg-swapped .kg-header-card-content .kg-header-card-image {
        padding: 0 0 1.7em;
    }

    .kg-header-card.kg-v2 .kg-header-card-button {
        height: 2.9em;
    }

    .kg-header-card.kg-v2.kg-width-wide .kg-header-card-button,
    .kg-header-card.kg-v2.kg-width-full .kg-header-card-button {
        font-size: 1em;
    }
}
`,ot=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),rt=`.kg-nft-card,
.kg-nft-card * {
    box-sizing: border-box;
}

.kg-nft-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.kg-nft-card a.kg-nft-card-container {
    position: static;
    display: flex;
    flex: auto;
    flex-direction: column;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont,
                'avenir next', avenir,
                'helvetica neue', helvetica,
                ubuntu,
                roboto, noto,
                'segoe ui', arial,
                sans-serif;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 2px 6px -2px rgb(0 0 0 / 10%), 0 0 1px rgb(0 0 0 / 40%);
    width: 100%;
    max-width: 512px;
    color: #222;
    background: #fff;
    border-radius: 5px;
    transition: none;
}

.kg-nft-card * {
    position: static;
}

.kg-nft-metadata {
    padding: 20px;
    width: 100%;
}

.kg-nft-image {
    border-radius: 5px 5px 0 0;
    width: 100%;
}

.kg-nft-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.kg-nft-header h4.kg-nft-title {
    font-family: inherit;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.3em;
    min-width: unset;
    max-width: unset;
    margin: 0;
    color: #222;
}

.kg-nft-opensea-logo {
    margin-top: 2px;
    width: 100px;
    object-fit: scale-down;
}

.kg-nft-creator {
    font-family: inherit;
    line-height: 1.4em;
    margin: 4px 0 0;
    color: #ababab;
}

.kg-nft-creator span {
    font-weight: 500;
    color: #222;
}

.kg-nft-card p.kg-nft-description {
    font-family: inherit;
    font-size: 14px;
    line-height: 1.4em;
    margin: 20px 0 0;
    color: #222;
}`,it=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),dt=`.kg-product-card,
.kg-product-card * {
    box-sizing: border-box;
}

.kg-product-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.kg-product-card-container {
    display: grid;
    grid-template-columns: auto min-content;
    align-items: center;
    grid-row-gap: 16px;
    background: transparent;
    max-width: 550px;
    padding: 20px;
    width: 100%;
    background: #fff;
    color: #222;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px rgb(124 139 154 / 25%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.kg-product-card-image {
    grid-column: 1 / 3;
    justify-self: center;
    height: auto;
}

.kg-product-card-title-container {
    grid-column: 1 / 2;
}

.kg-product-card h4.kg-product-card-title {
    text-decoration: none;
    font-weight: 600;
    font-size: 21px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.15em;
}

.kg-product-card-description {
    grid-column: 1 / 3;
}

.kg-product-card .kg-product-card-description p,
.kg-product-card .kg-product-card-description ol,
.kg-product-card .kg-product-card-description ul {
    font-size: 14px;
    line-height: 1.5em;
    opacity: .7;
    margin-bottom: 0;
}

.kg-product-card .kg-product-card-description p:first-of-type {
    margin-top: -4px;
}

.kg-product-card .kg-product-card-description p:not(:first-of-type),
.kg-product-card .kg-product-card-description ul,
.kg-product-card .kg-product-card-description ol {
    margin-top: 0.95em;
}

.kg-product-card .kg-product-card-description li+li {
    margin-top: 0.5em;
}

.kg-product-card-rating {
    display: flex;
    align-items: center;
    grid-column: 2 / 3;
    align-self: start;
    justify-self: end;
    padding-left: 16px;
}

@media (max-width: 400px) {
    .kg-product-card-title-container {
        grid-column: 1 / 3;
    }

    .kg-product-card-rating {
        grid-column: 1 / 3;
        justify-self: start;
        margin-top: -15px;
        padding-left: 0;
    }
}

.kg-product-card-rating-star {
    height: 20px;
    width: 20px;
}

.kg-product-card-rating-star svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    opacity: 0.15;
}

.kg-product-card-rating-active.kg-product-card-rating-star svg {
    opacity: 1;
}

.kg-product-card a.kg-product-card-button {
    justify-content: center;
    grid-column: 1 / 3;
    display: flex;
    position: static;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1em;
    text-decoration: none;
    width: 100%;
    height: 38px;
    border-radius: 6px;
    padding: 0 12px;
    transition: opacity 0.2s ease-in-out;
}

.kg-product-card a.kg-product-card-btn-accent {
    background-color: var(--ghost-accent-color);
    color: #fff;
}
`,ct=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),st=`.kg-signup-card {
    position: relative;
}

.kg-signup-card,
.kg-signup-card * {
    box-sizing: border-box;
}

.kg-signup-card a,
.kg-signup-card a span {
    color: currentColor;
}

.kg-signup-card.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-layout-split .kg-signup-card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.kg-signup-card-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    padding: min(4vmax, 80px);
    background-size: cover;
    background-position: center;
    text-align: left;
}

.kg-width-wide .kg-signup-card-text {
    padding: min(6.4vmax, 120px);
}

.kg-width-full .kg-signup-card-text {
    padding: min(12vmax, 260px) 0;
}

.kg-layout-split .kg-signup-card-text {
    padding: min(12vmax, 260px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide .kg-signup-card-text {
    padding: min(10vmax, 220px) 0 min(10vmax, 220px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide.kg-swapped .kg-signup-card-text {
    padding: min(10vmax, 220px) min(4vmax, 80px) min(10vmax, 220px) 0;
}

.kg-swapped .kg-signup-card-text {
    grid-row: 1;
}

.kg-signup-card-text.kg-align-center {
    align-items: center;
    text-align: center;
}

.kg-signup-card.kg-style-image h2.kg-signup-card-heading,
.kg-signup-card.kg-style-image .kg-signup-card-subheading,
.kg-signup-card.kg-style-image .kg-signup-card-button {
    z-index: 999;
}

/* Background image */

.kg-signup-card > picture > .kg-signup-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-color: #FFFFFF;
    pointer-events: none;
}

/* Split layout image */

.kg-signup-card-content .kg-signup-card-image {
    width: 100%;
    /* this will force the image to follow the signup card height */
    height: 0;
    min-height: 100%;
    /**/
    object-fit: cover;
    object-position: center;
}

.kg-content-wide .kg-signup-card-content .kg-signup-card-image {
    height: 100%;
    padding: 5.6em 0;
    object-fit: contain;
}

/* Heading */

.kg-signup-card h2.kg-signup-card-heading {
    margin: 0;
    font-size: clamp(1.7em, 4vw, 2.5em);
    font-weight: 700;
    line-height: 1.05em;
    letter-spacing: -0.01em;
}

.kg-signup-card.kg-width-wide h2.kg-signup-card-heading {
    font-size: clamp(1.7em, 5vw, 3.3em);
}

.kg-signup-card.kg-width-full h2.kg-signup-card-heading {
    font-size: clamp(1.9em, 5.6vw, 4.2em);
}

.kg-signup-card.kg-width-full.kg-layout-split h2.kg-signup-card-heading {
    font-size: clamp(1.9em, 4vw, 3.3em);
}

/* Subheading */

.kg-signup-card-subheading {
    margin: 0 0 2em;
}

.kg-signup-card .kg-signup-card-subheading {
    max-width: 40em;
    margin: 0;
    font-size: clamp(1.05em, 2vw, 1.4em);
    font-weight: 500;
    line-height: 1.2em;
}

.kg-signup-card h2 + .kg-signup-card-subheading {
    margin: 0.6em 0 0;
}

.kg-signup-card .kg-signup-card-subheading strong {
    font-weight: 600;
}

.kg-signup-card.kg-width-wide .kg-signup-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

.kg-signup-card.kg-width-full .kg-signup-card-subheading:not(.kg-layout-split .kg-signup-card-subheading) {
    max-width: min(65vmax, 1200px);
    font-size: clamp(1.05em, 2vw, 1.7em);
}

.kg-signup-card.kg-width-full.kg-layout-split .kg-signup-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

/* Subscribe form */

.kg-signup-card-form {
    position: relative;
    display: flex;
    flex-shrink: 0;
    width: 100%;
}

.kg-align-center .kg-signup-card-form {
    justify-content: center;
}

.kg-signup-card-heading + .kg-signup-card-form,
.kg-signup-card-subheading + .kg-signup-card-form {
    margin: min(2.4vmax, 48px) 0 0;
}

.kg-width-wide .kg-signup-card-heading + .kg-signup-card-form,
.kg-width-wide .kg-signup-card-subheading + .kg-signup-card-form {
    margin: min(3.2vmax, 64px) 0 0;
}

.kg-width-full .kg-signup-card-heading + .kg-signup-card-form,
.kg-width-full .kg-signup-card-subheading + .kg-signup-card-form {
    margin: min(4vmax, 80px) 0 0;
}

.kg-signup-card-fields {
    display: flex;
    width: 100%;
    padding: 3px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 4px;
}

.kg-width-wide .kg-signup-card-fields,
.kg-width-full .kg-signup-card-fields {
    width: 100%;
    max-width: 500px;
}

.kg-signup-card-input {
    width: 100%;
    height: 2.9em;
    min-height: 46px;
    margin: 0 3px 0 0;
    padding: 12px 16px;
    border: none;
    background: #FFFFFF;
    font-size: 1.1em;
}

.kg-signup-card-input:focus,
.kg-signup-card-input:focus-visible {
    outline: none;
}

.kg-signup-card-button {
    display: flex;
    position: relative;
    align-items: center;
    height: 2.9em;
    min-height: 46px;
    height: 100%;
    padding: 0 1.2em;
    outline: none;
    border: none;
    font-size: 1em;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 3px;
    transition: opacity .2s ease;
    cursor: pointer;
}

.kg-signup-card-button.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-signup-card h2 + .kg-signup-card-button,
.kg-signup-card p + .kg-signup-card-button {
    margin: 1.5em 0 0;
}

.kg-signup-card .kg-signup-card-button:hover {
    opacity: 0.85;
}

.kg-signup-card.kg-width-wide .kg-signup-card-button {
    font-size: 1.05em;
}

.kg-signup-card.kg-width-wide h2 + .kg-signup-card-button,
.kg-signup-card.kg-width-wide p + .kg-signup-card-button {
    margin-top: 1.75em;
}

.kg-signup-card.kg-width-full .kg-signup-card-button {
    font-size: 1.1em;
}

.kg-signup-card.kg-width-full h2 + .kg-signup-card-button,
.kg-signup-card.kg-width-full p + .kg-signup-card-button {
    margin-top: 2em;
}

/* Subscribe form states */

.kg-signup-card-success,
.kg-signup-card-error {
    display: none;
}

.kg-signup-card-form.success .kg-signup-card-fields {
    display: none;
}

.kg-signup-card-form.success .kg-signup-card-success {
    display: flex;
    align-items: center;
    height: 3em;
    font-size: 1.25em;
    font-weight: 500;
    line-height: 1.4em;
}

.kg-signup-card-form.error .kg-signup-card-fields {
    border: 1px solid #FF0000;
    box-shadow: inset 0 0 0 1px rgba(255, 0, 0, 0.2);
}

.kg-signup-card-form.error .kg-signup-card-error {
    position: absolute;
    bottom: calc(-1rem - 1.6em);
    display: block;
    font-size: inherit;
}

.kg-signup-card-button-loading {
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    display: none;
}

.kg-signup-card-form.loading .kg-signup-card-button-default {
    color: transparent;
}

.kg-signup-card-form.loading .kg-signup-card-button-loading {
    display: flex;
}

/* Disclaimer */

.kg-signup-card-disclaimer {
    margin: 1rem 0 0;
}

.kg-signup-card-form.success + .kg-signup-card-disclaimer,
.kg-signup-card-form.error + .kg-signup-card-disclaimer {
    visibility: hidden;
}


/* Responsive styles */

@media (max-width: 640px) {
    .kg-layout-split .kg-signup-card-content {
        grid-template-columns: 1fr;
    }

    .kg-width-wide .kg-signup-card-text {
        padding: min(6.4vmax, 120px) min(4vmax, 80px);
    }

    .kg-layout-split.kg-content-wide .kg-signup-card-text,
    .kg-layout-split.kg-content-wide.kg-swapped .kg-signup-card-text {
        padding: min(9.6vmax, 180px) 0;
    }

    .kg-signup-card.kg-width-full .kg-signup-card-subheading:not(.kg-layout-split .kg-signup-card-subheading) {
        max-width: unset;
    }

    .kg-signup-card-content .kg-signup-card-image:not(.kg-content-wide .kg-signup-card-content .kg-signup-card-image) {
        height: auto;
        min-height: unset;
        aspect-ratio: 1 / 1;
    }

    .kg-content-wide .kg-signup-card-content .kg-signup-card-image {
        padding: 1.7em 0 0;
    }

    .kg-content-wide.kg-swapped .kg-signup-card-content .kg-signup-card-image {
        padding: 0 0 1.7em;
    }

    .kg-signup-card-input {
        height: 2.9em;
        padding: 6px 12px;
        font-size: 1em;
    }

    .kg-signup-card-button {
        height: 2.9em;
    }

    .kg-signup-card.kg-width-wide .kg-signup-card-button,
    .kg-signup-card.kg-width-full .kg-signup-card-button {
        font-size: 1em;
    }
}
`,lt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"})),gt=`.kg-toggle-card,
.kg-toggle-card * {
    box-sizing: border-box;
}

.kg-toggle-card {
    background: transparent;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);
    border-radius: 4px;
    padding: 1.2em;
}

.kg-toggle-card[data-kg-toggle-state="close"] .kg-toggle-content{
    height: 0;
    overflow: hidden;
    transition: opacity .5s ease, top .35s ease;
    opacity: 0;
    top: -0.5em;
    position: relative;
}

.kg-toggle-content {
    height: auto;
    opacity: 1;
    transition: opacity 1s ease, top .35s ease;
    top: 0;
    position: relative;
}

.kg-toggle-card[data-kg-toggle-state="close"] svg {
    transform: unset;
}

.kg-toggle-heading {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.kg-toggle-card h4.kg-toggle-heading-text {
    font-size: 1.15em;
    font-weight: 700;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 0;
}

.kg-toggle-content p:first-of-type {
    margin-top: 0.5em;
}

.kg-toggle-card .kg-toggle-content p,
.kg-toggle-card .kg-toggle-content ol,
.kg-toggle-card .kg-toggle-content ul {
    font-size: 0.95em;
    line-height: 1.5em;
    margin-top: 0.95em;
    margin-bottom: 0;
}

.kg-toggle-card li + li {
    margin-top: 0.5em;
}

.kg-toggle-card-icon {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
}

.kg-toggle-heading svg {
    width: 14px;
    color: rgba(124, 139, 154, 0.5);
    transition: all 0.3s;
    transform: rotate(-180deg);
}

.kg-toggle-heading path {
    fill: none;
    stroke: currentcolor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
    fill-rule: evenodd;
}

.kg-toggle-card + .kg-toggle-card {
    margin-top: 1em;
}
`,pt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),ut=`.kg-transistor-card {
    display: flex;
    justify-content: center;
}

.kg-transistor-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
    max-width: 100%;
    padding: 3rem 2.4rem;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
    background: color-mix(in srgb, currentColor 4%, transparent);
    color: inherit;
    text-align: center;
    box-sizing: border-box;
}

.kg-transistor-icon {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 116px;
    height: 116px;
    border-radius: 14px;
    background: var(--ghost-accent-color, #b8a5ac);
    color: #fff;
}

.kg-transistor-icon svg {
    display: block;
    width: 56px;
    height: 56px;
}

.kg-transistor-content {
    min-width: 0;
    max-width: 640px;
}

.kg-transistor-title {
    margin: 0;
    color: inherit;
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.2;
}

.kg-transistor-description {
    margin-top: 1.6rem;
    color: inherit;
    font-size: 1.6rem;
    line-height: 1.5;
    opacity: 0.65;
}

@media (max-width: 640px) {
    .kg-transistor-placeholder {
        gap: 1.6rem;
        padding: 2.4rem 1.8rem;
    }

    .kg-transistor-icon {
        width: 88px;
        height: 88px;
        border-radius: 12px;
    }

    .kg-transistor-icon svg {
        width: 44px;
        height: 44px;
    }

    .kg-transistor-title {
        font-size: 1.8rem;
    }

    .kg-transistor-description {
        margin-top: 1rem;
        font-size: 1.45rem;
    }
}
`,ht=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),mt=`.kg-video-card,
.kg-video-card * {
    box-sizing: border-box;
}

.kg-video-card {
    position: relative;
    --seek-before-width: 0%;
    --volume-before-width: 100%;
    --buffered-width: 0%;
}

.kg-video-card video {
    display: block;
    max-width: 100%;
    height: auto;
}

.kg-video-container {
    position: relative;
    height: 0;
    width: 100%;
    overflow: hidden;
}

.kg-video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.kg-video-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(180deg,rgba(0,0,0,0.3) 0,transparent 70%,transparent 100%);
    z-index: 999;
    transition: opacity .2s ease-in-out;
}

.kg-video-large-play-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    transition: opacity .2s ease-in-out;
}

.kg-video-large-play-icon svg {
    width: 20px;
    height: auto;
    margin-left: 2px;
    fill: #fff;
}

.kg-video-player-container {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
    z-index: 999;
    transition: opacity .2s ease-in-out;
}

.kg-video-player {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 9999;
    padding: 12px 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.kg-video-current-time {
    min-width: 38px;
    padding: 0 4px;
    color: #fff;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.4em;
    white-space: nowrap;
}

.kg-video-time {
    color: rgba(255, 255, 255, 0.6);
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.4em;
    white-space: nowrap;
}

.kg-video-duration {
    padding: 0 4px;
}

.kg-video-play-icon,
.kg-video-pause-icon {
    position: relative;
    padding: 0px 4px 0 0;
    font-size: 0;
    background: transparent;
}

.kg-video-hide {
    display: none !important;
}

.kg-video-hide-animated {
    opacity: 0 !important;
    transition: opacity .2s ease-in-out;
    cursor: initial;
}

.kg-video-play-icon svg,
.kg-video-pause-icon svg {
    width: 14px;
    height: 14px;
    fill: #fff;
}

.kg-video-seek-slider {
    flex-grow: 1;
    margin: 0 4px;
}

@media (max-width: 520px) {
    .kg-video-seek-slider {
        display: none;
    }
}

.kg-video-playback-rate {
    min-width: 37px;
    padding: 0 4px;
    color: #fff;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 600;
    line-height: 1.4em;
    text-align: left;
    background: transparent;
    white-space: nowrap;
}

@media (max-width: 520px) {
    .kg-video-playback-rate {
        padding-left: 8px;
    }
}

.kg-video-mute-icon,
.kg-video-unmute-icon {
    position: relative;
    bottom: -1px;
    padding: 0 4px;
    font-size: 0;
    background: transparent;
}

@media (max-width: 520px) {
    .kg-video-mute-icon,
    .kg-video-unmute-icon  {
        margin-left: auto;
    }
}

.kg-video-mute-icon svg,
.kg-video-unmute-icon svg {
    width: 16px;
    height: 16px;
    fill: #fff;
}

.kg-video-volume-slider {
    width: 80px;
}

@media (max-width: 300px) {
    .kg-video-volume-slider {
        display: none;
    }
}

.kg-video-seek-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--seek-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: #EBEEF0;
    border-radius: 2px;
}

.kg-video-volume-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--volume-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: #EBEEF0;
    border-radius: 2px;
}

/* Resetting browser styles
/* --------------------------------------------------------------- */

.kg-video-card input[type=range] {
    position: relative;
    -webkit-appearance: none;
    background: transparent;
}

.kg-video-card input[type=range]:focus {
    outline: none;
}

.kg-video-card input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.kg-video-card input[type=range]::-ms-track {
    cursor: pointer;
    border-color: transparent;
    color: transparent;
    background: transparent;
}

.kg-video-card button {
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
}

.kg-video-card input[type="range"] {
    height: auto;
    padding: 0;
    border: 0;
}

/* Chrome & Safari styles
/* --------------------------------------------------------------- */

.kg-video-card input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
}

.kg-video-card input[type="range"]::-webkit-slider-thumb {
    position: relative;
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    margin: -5px 0 0 0;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-video-card input[type="range"]:active::-webkit-slider-thumb {
    transform: scale(1.2);
}

/* Firefox styles
/* --------------------------------------------------------------- */

.kg-video-card input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
}

.kg-video-card input[type="range"]::-moz-range-progress {
    background: #EBEEF0;
    border-radius: 2px;
}

.kg-video-card input[type="range"]::-moz-range-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-video-card input[type="range"]:active::-moz-range-thumb {
    transform: scale(1.2);
}

/* Edge & IE styles
/* --------------------------------------------------------------- */

.kg-video-card input[type="range"]::-ms-track {
    width: 100%;
    height: 3px;
    border: solid transparent;
    color: transparent;
    cursor: pointer;
    background: transparent;
}

.kg-video-card input[type="range"]::-ms-fill-lower {
    background: #fff;
}

.kg-video-card input[type="range"]::-ms-fill-upper {
    background: #EBEEF0;
}

.kg-video-card input[type="range"]::-ms-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-video-card input[type="range"]:active::-ms-thumb {
    transform: scale(1.2);
}

`,kt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),ft=Object.assign({"../../ghost/core/core/frontend/src/cards/js/audio.js":Ne,"../../ghost/core/core/frontend/src/cards/js/gallery.js":Fe,"../../ghost/core/core/frontend/src/cards/js/toggle.js":Re,"../../ghost/core/core/frontend/src/cards/js/video.js":Te}),bt=Object.assign({"../../ghost/core/core/frontend/src/cards/css/audio.css":Ae,"../../ghost/core/core/frontend/src/cards/css/blockquote.css":De,"../../ghost/core/core/frontend/src/cards/css/bookmark.css":qe,"../../ghost/core/core/frontend/src/cards/css/button.css":Ue,"../../ghost/core/core/frontend/src/cards/css/callout.css":Ke,"../../ghost/core/core/frontend/src/cards/css/collection.css":Ye,"../../ghost/core/core/frontend/src/cards/css/cta.css":Ze,"../../ghost/core/core/frontend/src/cards/css/file.css":Xe,"../../ghost/core/core/frontend/src/cards/css/gallery.css":nt,"../../ghost/core/core/frontend/src/cards/css/header.css":tt,"../../ghost/core/core/frontend/src/cards/css/header_v2.css":ot,"../../ghost/core/core/frontend/src/cards/css/nft.css":it,"../../ghost/core/core/frontend/src/cards/css/product.css":ct,"../../ghost/core/core/frontend/src/cards/css/signup.css":lt,"../../ghost/core/core/frontend/src/cards/css/toggle.css":pt,"../../ghost/core/core/frontend/src/cards/css/transistor.css":ht,"../../ghost/core/core/frontend/src/cards/css/video.css":kt}),xt=Object.values(ft).map(t=>t.default).join(`

`),vt=Object.values(bt).map(t=>t.default).join(`

`),yt=({postUrl:t,heading:s,image:a,excerpt:p,authors:c,html:k,backgroundColor:i,fontSize:u,fontStyle:v,onHeadingsExtracted:h,onIframeLoad:r,onLoadingChange:l,isPopoverOpen:d})=>{const _=o.useRef(null),[F,B]=o.useState(!0),[L,z]=o.useState("0px"),M=document.documentElement.classList.contains("dark")&&i==="SYSTEM"||i==="DARK",K=_e(),f=`
        <html class="has-${M?"light":"dark"}-text has-${v}-body ${i==="SEPIA"&&"has-sepia-bg"}">
        <head>
            ${K}
            <style>
                :root {
                    --font-size: ${u};
                }
                body {
                    margin: 0;
                    padding: 0;
                    overflow-y: hidden;
                }
                .has-sepia-bg {
                    --background-color: #FCF8F1;
                }
            </style>
            <style>
                ${vt}
            </style>

            <script>
                function resizeIframe() {
                    const height = document.body.scrollHeight;
                    window.parent.postMessage({
                        type: 'resize',
                        bodyHeight: height,
                        isLoaded: true
                    }, '*');
                }

                // Initialize resize observers
                function setupResizeObservers() {
                    // ResizeObserver for overall size changes
                    const resizeObserver = new ResizeObserver(() => {
                        resizeIframe();
                    });
                    resizeObserver.observe(document.body);

                    // MutationObserver for DOM changes
                    const mutationObserver = new MutationObserver(() => {
                        resizeIframe();
                    });
                    mutationObserver.observe(document.body, {
                        childList: true,
                        subtree: true,
                        attributes: true
                    });

                    // Handle window resize
                    window.addEventListener('resize', resizeIframe);

                    // Initial resize
                    resizeIframe();

                    // Clean up function
                    return () => {
                        resizeObserver.disconnect();
                        mutationObserver.disconnect();
                        window.removeEventListener('resize', resizeIframe);
                    };
                }

                // Wait for images to load
                function waitForImages() {
                    const images = document.getElementsByTagName('img');
                    Promise.all(Array.from(images).map(img => {
                        if (img.complete) return Promise.resolve();
                        return new Promise(resolve => {
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                    })).then(resizeIframe);
                }

                // Handle external resize triggers
                window.addEventListener('message', (event) => {
                    if (event.data.type === 'triggerResize') {
                        resizeIframe();
                    }
                });

                // Initialize everything once DOM is ready
                document.addEventListener('DOMContentLoaded', () => {
                    setupResizeObservers();
                    waitForImages();
                });
            <\/script>

            <!-- Reframe.js — a plugin that makes iframes and videos responsive -->
            <script>!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reframe=t()}(this,function(){"use strict";function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),o=0,t=0;t<n;t++)for(var r=arguments[t],f=0,d=r.length;f<d;f++,o++)i[o]=r[f];return i}return function(e,s){return void 0===s&&(s="js-reframe"),("string"==typeof e?t(document.querySelectorAll(e)):"length"in e?t(e):[e]).forEach(function(e){var t,n,i,o,r,f,d,l;-1!==e.className.split(" ").indexOf(s)||-1<e.style.width.indexOf("%")||(i=e.getAttribute("height")||e.offsetHeight,o=e.getAttribute("width")||e.offsetWidth,r=("string"==typeof i?parseInt(i):i)/("string"==typeof o?parseInt(o):o)*100,(f=document.createElement("div")).className=s,(d=f.style).position="relative",d.width="100%",d.paddingTop=r+"%",(l=e.style).position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null!==(t=e.parentNode)&&void 0!==t&&t.insertBefore(f,e),null!==(n=e.parentNode)&&void 0!==n&&n.removeChild(e),f.appendChild(e))})}});<\/script>
        </head>
        <body>
            <header class='gh-article-header gh-canvas'>
                <h1 class='gh-article-title is-title' data-test-article-heading>${D(s)}</h1>
                ${p?`<p class='gh-article-excerpt'>${D(p)}</p>`:""}
                <a href="${t&&xn(t)?D(t):"#"}" target="_blank" rel="noopener noreferrer" class="gh-article-meta">
                    ${c&&c.length>0?`
                        <div class="gh-article-author-image">
                        ${c.map(g=>`
                                <span>
                                    ${g.profile_image?`<img src="${D(g.profile_image)}" alt="${D(g.name)}">`:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M6.75 6a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 1 0 -10.5 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M2.25 23.25a9.75 9.75 0 0 1 19.5 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>'}
                                </span>
                            `).join("")}
                        </div>
                    `:""}
                    <div class="gh-article-meta-wrapper">
                        ${c&&c.length>0?`
                            <span class="gh-article-author-name">
                                ${c.length>1?`${D(c[0].name)} and ${c.length-1} ${c.length-1===1?"other":"others"}`:D(c[0].name)}
                            </span>
                        `:""}
                        <span class="gh-article-source">${t&&xn(t)?D(new URL(t).hostname):""} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></span>
                    </div>
                </a>
                ${a?`
                <figure class='gh-article-image'>
                    <img src='${D(a)}' alt='${D(s)}' />
                </figure>
                `:""}
            </header>
            <div class='gh-content gh-canvas is-body'>
                ${ae(k)}
            </div>
            <script>
                (function () {
                    const sources = [
                        '.gh-content iframe[src*="youtube.com"]',
                        '.gh-content iframe[src*="youtube-nocookie.com"]',
                        '.gh-content iframe[src*="player.vimeo.com"]',
                        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
                        '.gh-content object',
                        '.gh-content embed',
                    ];
                    reframe(document.querySelectorAll(sources.join(',')));
                })();
            <\/script>
            <script>
                ${xt}
            <\/script>
        </body>
        </html>
    `;return o.useEffect(()=>{const g=_.current;if(!g)return;g.srcdoc||(g.srcdoc=f);const R=b=>{if(b.data.type==="resize"){const I=`${b.data.bodyHeight+24}px`;z(I),g.style.height=I,b.data.isLoaded&&B(!1)}},j=b=>{if(b.key==="Escape"){b.preventDefault(),b.stopPropagation();const I=new KeyboardEvent("keydown",{key:"Escape",code:"Escape",keyCode:27,which:27,bubbles:!0,cancelable:!0});document.dispatchEvent(I)}},S=()=>{const b=g.contentWindow;b&&b.addEventListener("keydown",j)};return g.addEventListener("load",S),window.addEventListener("message",R),()=>{window.removeEventListener("message",R),g.removeEventListener("load",S);const b=g.contentWindow;b&&b.removeEventListener("keydown",j)}},[f]),o.useEffect(()=>{const g=_.current;if(!g)return;const R=g.contentDocument||g.contentWindow?.document;if(!R)return;const j=R.documentElement;j.style.setProperty("--font-size",u),j.classList.remove("has-sans-body","has-serif-body"),j.classList.add(`has-${v}-body`),j.classList.remove("has-dark-text","has-light-text"),j.classList.add(`has-${M?"light":"dark"}-text`),i==="SEPIA"?j.classList.add("has-sepia-bg"):j.classList.remove("has-sepia-bg");const S=g.contentWindow;if(S&&typeof S.resizeIframe=="function")S.resizeIframe();else{const b=new Event("resize");R.dispatchEvent(b)}},[u,v,i,M]),o.useEffect(()=>{const g=_.current;if(!g)return;const R=()=>{if(!g.contentDocument)return;const j=Array.from(g.contentDocument.querySelectorAll(".gh-content > :is(h2, h3, h4, h5, h6)[id]"));if(j.length===0)return;const S=Math.min(...j.map(I=>parseInt(I.tagName[1]))),b=j.map((I,Z)=>{const O=`heading-${Z}`;I.id=O;const J=parseInt(I.tagName[1])-S+1;return{id:O,text:I.textContent||"",level:J,element:I}});h?.(b),r?.(g)};return g.addEventListener("load",R),()=>g.removeEventListener("load",R)},[h,r]),o.useEffect(()=>{l?.(F)},[F,l]),n.jsx("div",{className:"w-full pb-6",children:n.jsxs("div",{className:"relative -mx-6",children:[F&&n.jsxs("div",{className:"mx-auto mt-6 w-full max-w-[640px] max-lg:px-4",children:[n.jsxs("div",{className:"mb-6 flex flex-col gap-2",children:[n.jsx(E,{className:"h-8"}),n.jsx(E,{className:"h-8 w-full max-w-md"})]}),n.jsx(E,{className:"mt-2 h-4",count:4,randomize:!0}),n.jsx(E,{className:"mt-8 h-[400px]"}),n.jsx(E,{className:"mt-2 h-4",containerClassName:"block mt-7 mb-4",count:8,randomize:!0})]}),n.jsx("iframe",{ref:_,id:"gh-ap-article-iframe",style:{width:"100%",border:"none",height:L,overflow:"hidden",opacity:F?0:1,transition:"opacity 0.2s ease-in-out",pointerEvents:d?"none":"auto"},title:"Embedded Content"})]})})},zn=()=>n.jsx("div",{className:"h-px bg-black/[8%] dark:bg-gray-950"}),Q=new Map,wt=({postId:t=null,onClose:s})=>{const{backgroundColor:a,currentFontSizeIndex:p,fontStyle:c,fontSize:k,handleColorChange:i,setFontStyle:u,increaseFontSize:v,decreaseFontSize:h,resetFontSize:r}=we(),l=o.useRef(null),[d,_]=o.useState(!1),[F,B]=o.useState(!1),[L,z]=o.useState(new Set),[M,K]=o.useState(new Set),[f,g]=o.useState(new Set),[R,j]=o.useState(!1),S=o.useRef(null),b=o.useRef(null),{post:I,processedReplies:Z,isLoading:O,loadMoreChildren:cn,loadMoreChildReplies:J,hasMoreChildren:X,hasMoreChildReplies:G}=be(t??"",{includeAncestors:!1}),sn=I,x=sn?.object,q=sn?.actor,Nn=sn?.object?.metadata?.ghostAuthors,Pn=x?.replyCount??0;o.useEffect(()=>{if(!X)return;S.current&&S.current.disconnect();const e=l.current;if(e)return S.current=new IntersectionObserver(async w=>{if(w[0].isIntersecting&&X&&!R){j(!0);try{await cn()}catch(m){console.error("Failed to load more top-level replies:",m)}finally{j(!1)}}},{root:e,rootMargin:"200px"}),b.current&&S.current.observe(b.current),()=>{S.current&&S.current.disconnect()}},[X,R,cn]);function ln(){}function Fn(e){z(w=>{const m=new Set(w);return m.has(e)?m.delete(e):(m.add(e),K(C=>{const T=new Set(C);return T.add(e),T})),m})}async function Ln(e,w){if(!f.has(e)){g(m=>new Set(m).add(e));try{J&&await J(w)}catch(m){console.error("Failed to load more replies for chain:",m)}finally{g(m=>{const C=new Set(m);return C.delete(e),C})}}}const Rn=()=>{},On=o.useRef(null),Tn="904px",H="640px",[mn,Mn]=o.useState(0),[V,An]=o.useState(!0),[gn]=Qn(Mn,100),kn=1;o.useEffect(()=>{const e=l.current,w=document.getElementById("object-content"),m=()=>{if(V||!e||!w)return;const T=w.getBoundingClientRect(),U=e.getBoundingClientRect();if(T.height<=U.height){gn(100);return}const $=Math.max(0,U.top-T.top),y=w.offsetHeight-e.offsetHeight,N=Math.min(Math.max($/y*100,0),100),an=Math.round(N/kn)*kn;gn(an)};if(V)return;const C=new MutationObserver(m);return w&&C.observe(w,{childList:!0,subtree:!0,characterData:!0}),e?.addEventListener("scroll",m),m(),()=>{e?.removeEventListener("scroll",m),C.disconnect()}},[V,gn]);const[nn,$n]=o.useState([]),[Dn,Bn]=o.useState(null),[en,qn]=o.useState(null),Hn=o.useCallback(e=>{$n(e)},[]),Un=o.useCallback(e=>{qn(e)},[]);o.useEffect(()=>{if(!en?.contentDocument||!nn.length)return;const w=setTimeout(()=>{const m=l.current;if(!m)return;const C=()=>{const T=en.contentDocument;if(!T||!T.documentElement)return;const U=m.scrollTop,Y=nn.map(N=>T.getElementById(N.id)).filter(N=>N!==null).map(N=>({element:N,id:N.id,top:N.offsetTop}));if(!Y.length)return;const $=100;let y=null;for(const N of Y)if(N.top-$<=U)y=N;else break;Bn(y?.id||null)};return m.addEventListener("scroll",C),C(),()=>{m.removeEventListener("scroll",C)}},100);return()=>clearTimeout(w)},[en,nn,Dn]);const tn=In();return o.useEffect(()=>{const e=l.current;return()=>{e&&t&&Q.set(t,e.scrollTop)}},[t]),o.useEffect(()=>{if(!V&&!O&&t&&l.current){const e=Q.get(t);e!==void 0&&e>0&&setTimeout(()=>{l.current&&(l.current.scrollTop=e)},100)}},[V,O,t]),O?n.jsx("div",{className:`max-h-full overflow-auto rounded-md ${a==="DARK"&&"dark"} ${(a==="LIGHT"||a==="SEPIA")&&"light"} ${P[a].background}`,children:n.jsx("div",{className:"flex h-full flex-col",children:n.jsxs("div",{className:"relative flex-1",children:[n.jsx("div",{className:`sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${P[a].background} ${P[a].border}`,children:n.jsxs("div",{className:"grid w-full px-8 max-lg:px-4",style:{gridTemplateColumns:`1fr minmax(0,${H}) 1fr`},children:[n.jsx("div",{className:"flex items-center",children:n.jsx(pn,{className:P[a].button,onClick:s})}),n.jsxs("div",{className:"col-[2/3] mx-auto flex w-full items-center gap-3 max-md:hidden",children:[n.jsx(E,{className:"size-10 rounded-full"}),n.jsxs("div",{className:"grow pt-1",children:[n.jsx(E,{className:"w-full"}),n.jsx(E,{className:"w-2/3"})]})]}),n.jsx("div",{className:"col-[3/4] flex items-center justify-end gap-2",children:n.jsx(Cn,{backgroundColor:a,currentFontSizeIndex:p,fontStyle:c,onColorChange:i,onDecreaseFontSize:h,onFontStyleChange:u,onIncreaseFontSize:v,onOpenChange:_,onResetFontSize:r})})]})}),n.jsx("div",{className:"relative flex-1 max-lg:px-4",children:n.jsxs("div",{className:"mx-auto mt-11 w-full max-w-[640px]",children:[n.jsxs("div",{className:"mb-6 flex flex-col gap-2",children:[n.jsx(E,{className:"h-8"}),n.jsx(E,{className:"h-8 w-full max-w-md"})]}),n.jsx(E,{className:"mt-2 h-4",count:4,randomize:!0}),n.jsx(E,{className:"mt-8 h-[400px]"}),n.jsx(E,{className:"mt-2 h-4",containerClassName:"block mt-7 mb-4",count:8,randomize:!0})]})})]})})}):I?n.jsx("div",{ref:l,className:`max-h-full overflow-auto rounded-md ${a==="DARK"&&"dark"} ${(a==="LIGHT"||a==="SEPIA")&&"light"} ${P[a].background}`,"data-scrollable-container":!0,children:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex h-full flex-col",children:[n.jsxs("div",{className:"relative flex-1",children:[n.jsx("div",{className:`sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${P[a].background} ${P[a].border}`,children:n.jsxs("div",{className:"grid w-full px-8 max-lg:px-4",style:{gridTemplateColumns:`1fr minmax(0,${H}) 1fr`},children:[n.jsx("div",{className:"flex items-center",children:n.jsx(pn,{className:P[a].button,onClick:s})}),n.jsxs("div",{className:"col-[2/3] mx-auto flex w-full items-center justify-between gap-3 max-md:hidden",children:[n.jsx(Zn,{actor:q,isCurrentUser:x.authored,children:n.jsxs("div",{className:"flex cursor-pointer items-center gap-3",children:[n.jsx("div",{className:"relative z-10 pt-0.5",children:n.jsx(Jn,{author:q})}),n.jsxs("div",{className:"relative z-10 mt-0.5 flex min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]",onClick:e=>Xn(q,tn,e),children:[n.jsx("div",{className:"flex w-full",children:n.jsx("span",{className:"min-w-0 truncate font-semibold whitespace-nowrap text-black hover:underline dark:text-white",children:O?n.jsx(E,{className:"w-20"}):q.name})}),n.jsxs("div",{className:"flex w-full",children:[!O&&n.jsx("span",{className:'truncate text-gray-700 after:mx-1 after:font-normal after:text-gray-700 after:content-["·"]',children:bn(q)}),n.jsx("span",{className:"text-gray-700",children:O?n.jsx(E,{className:"w-[120px]"}):Gn(x,!x.authored)})]})]})]})}),!x.authored&&!O&&n.jsx(ne,{following:q.followedByMe??!1,handle:bn(q)})]}),n.jsx("div",{className:"col-[3/4] flex items-center justify-end gap-2",children:n.jsx(Cn,{backgroundColor:a,currentFontSizeIndex:p,fontStyle:c,onColorChange:i,onDecreaseFontSize:h,onFontStyleChange:u,onIncreaseFontSize:v,onOpenChange:_,onResetFontSize:r})})]})}),n.jsxs("div",{className:"relative flex-1",children:[n.jsx(Ce,{iframeElement:en,modalRef:l,tocItems:nn,onOpenChange:B}),!O&&n.jsx("div",{className:"grow overflow-y-auto",children:n.jsxs("div",{className:"mx-auto px-6 pt-5 pb-10",style:{maxWidth:Tn},children:[n.jsxs("div",{className:"flex flex-col items-center pb-8",id:"object-content",children:[n.jsx(yt,{authors:Nn,backgroundColor:a,excerpt:x.summary??"",fontSize:k,fontStyle:c,heading:x.name,html:x.content??"",image:typeof x.image=="string"?x.image:x.image?.url,isPopoverOpen:d||F,postUrl:x?.url||"",onHeadingsExtracted:Hn,onIframeLoad:Un,onLoadingChange:An}),n.jsx("div",{className:"-ml-3 w-full",style:{maxWidth:H},children:n.jsx(ee,{actor:q,commentCount:Pn,layout:"modal",likeCount:x.likeCount??0,object:x,repostCount:x.repostCount??0,onLikeClick:Rn})})]}),x.type==="Tombstone"&&n.jsx(xe,{last:!0}),n.jsxs("div",{className:"mx-auto w-full border-t border-black/[8%] dark:border-gray-950",style:{maxWidth:H},children:[n.jsx(ve,{object:x}),n.jsx(zn,{})]}),O&&n.jsx(un,{size:"lg"}),n.jsxs("div",{ref:On,className:"mx-auto w-full",style:{maxWidth:H},children:[Z.map((e,w)=>{const m=w===Z.length-1,C=e.mainReply.id,T=L.has(C),U=M.has(C),Y=f.has(C),$=e.chain.length>0;return n.jsxs(dn.Fragment,{children:[n.jsx(on,{actor:e.mainReply.actor,allowDelete:e.mainReply.object.authored,commentCount:e.mainReply.object.replyCount??0,isChainParent:$,isPending:rn(e.mainReply.id),last:!$,layout:"reply",likeCount:e.mainReply.object.likeCount??0,object:e.mainReply.object,parentId:x.id,repostCount:e.mainReply.object.repostCount??0,type:"Note",onClick:()=>{const y=l.current;y&&t&&Q.set(t,y.scrollTop),tn(`/notes/${encodeURIComponent(e.mainReply.id)}`)},onDelete:ln}),$&&e.chain[0]&&n.jsx(on,{actor:e.chain[0].actor,allowDelete:e.chain[0].object.authored,commentCount:e.chain[0].object.replyCount??0,isChainContinuation:!0,isPending:rn(e.chain[0].id),last:e.chain.length===1,layout:"reply",likeCount:e.chain[0].object.likeCount??0,object:e.chain[0].object,parentId:x.id,repostCount:e.chain[0].object.repostCount??0,type:"Note",onClick:()=>{const y=l.current;y&&t&&Q.set(t,y.scrollTop),tn(`/notes/${encodeURIComponent(e.chain[0].id)}`)},onDelete:ln},e.chain[0].id),$&&T&&e.chain.slice(1).map((y,N)=>{const an=N===e.chain.slice(1).length-1,Wn=G&&G(w),Kn=an&&Wn;return n.jsx(on,{actor:y.actor,allowDelete:y.object.authored,commentCount:y.object.replyCount??0,isChainContinuation:!0,isPending:rn(y.id),last:an&&!Kn,layout:"reply",likeCount:y.object.likeCount??0,object:y.object,parentId:x.id,repostCount:y.object.repostCount??0,type:"Note",onClick:()=>{const fn=l.current;fn&&t&&Q.set(t,fn.scrollTop),tn(`/notes/${encodeURIComponent(y.id)}`)},onDelete:ln},y.id)}),$&&e.chain.length>1&&!T&&n.jsx(yn,{variant:"expand",onClick:()=>Fn(C)}),$&&T&&U&&G&&G(w)&&n.jsx(yn,{loading:Y,variant:"loadMore",onClick:()=>Ln(C,w)}),!m&&n.jsx(zn,{})]},e.mainReply.id)}),R&&n.jsx("div",{className:"flex flex-col items-center justify-center text-center",children:n.jsx(un,{size:"md"})})]}),X&&n.jsx("div",{ref:b,className:"h-1"})]})})]})]}),!O&&n.jsxs("div",{className:"pointer-events-none visible! sticky bottom-0 hidden items-end justify-between px-10 pb-[42px] lg:flex!",children:[n.jsx("div",{className:"pointer-events-auto text-gray-600",children:te(x.content??"")}),n.jsxs("div",{className:"pointer-events-auto min-w-10 text-right text-gray-600 transition-all duration-200 ease-out",children:[mn,"%"]},mn)]})]})})}):n.jsx("div",{className:`max-h-full overflow-auto rounded-md ${a==="DARK"&&"dark"} ${(a==="LIGHT"||a==="SEPIA")&&"light"} ${P[a].background}`,children:n.jsx("div",{className:"flex h-full flex-col",children:n.jsx("div",{className:"relative flex-1",children:n.jsx("div",{className:`sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${P[a].background} ${P[a].border}`,children:n.jsxs("div",{className:"grid w-full px-8 max-lg:px-4",style:{gridTemplateColumns:`1fr minmax(0,${H}) 1fr`},children:[n.jsx("div",{className:"flex items-center",children:n.jsx(pn,{className:P[a].button,onClick:s})}),n.jsx("div",{className:"col-[2/3] mx-auto flex w-full items-center gap-3 max-md:hidden",children:n.jsx("div",{className:"grow text-center",children:n.jsx("span",{children:"Error loading article."})})})]})})})})})},jt=({isLoading:t,activities:s,currentTopic:a,fetchNextPage:p,hasNextPage:c,isFetchingNextPage:k,onTopicChange:i})=>{const u=In(),{canGoBack:v,goBack:h}=oe(),[r,l]=o.useState(!1),d=re(),{topicsQuery:_}=ie(),{data:F}=_,B=F&&F.topics.length>0;o.useEffect(()=>{l(!!d.postId)},[d.postId]);const L=o.useRef(null),z=o.useRef(null),M=o.useRef(null);o.useEffect(()=>(L.current&&L.current.disconnect(),L.current=new IntersectionObserver(f=>{f[0].isIntersecting&&c&&!k&&p()}),z.current&&L.current.observe(z.current),M.current&&L.current.observe(M.current),()=>{L.current&&L.current.disconnect()}),[c,k,p]);const K=Math.max(0,Math.floor(s.length*.75)-1);return n.jsxs(de,{children:[B&&n.jsx(ye,{currentTopic:a,excludeTopics:["top"],onTopicChange:i}),n.jsx("div",{className:"flex w-full flex-col",children:n.jsx("div",{className:"w-full",children:s.length>0?n.jsx("div",{className:"my-4",children:n.jsx("div",{className:"mx-auto flex min-h-[calc(100dvh_-_117px)] items-start gap-11",children:n.jsx("div",{className:"flex w-full min-w-0 flex-col items-center",children:n.jsxs("div",{className:"flex w-full min-w-0 flex-col items-start",children:[n.jsxs("ul",{className:"mx-auto flex w-full flex-col","data-testid":"inbox-list",children:[s.map((f,g)=>n.jsxs("li",{"data-testid":"inbox-item","data-test-view-article":!0,children:[n.jsx(on,{actor:f.actor,allowDelete:f.object.authored,commentCount:f.object.replyCount??0,isLoading:t,isPending:rn(f.id),layout:"inbox",likeCount:f.object.likeCount??0,object:f.object,repostCount:f.object.repostCount??0,type:f.type,onClick:()=>{u(`/reader/${encodeURIComponent(f.id)}`)}}),g<s.length-1&&n.jsx(ce,{}),g===K&&n.jsx("div",{ref:z,className:"h-1"})]},`${f.id}-${f.type}-${g}`)),k&&n.jsx("li",{className:"flex flex-col items-center justify-center gap-4 text-center",children:n.jsx(un,{size:"md"})})]}),n.jsx("div",{ref:M,className:"h-1"})]})})})}):a!=="following"?n.jsx("div",{className:"mt-[24vh]",children:n.jsx(wn,{description:"Explore other topics for more content.",title:"Nothing here yet",children:n.jsx(jn,{})})}):n.jsx("div",{className:"mt-[24vh]",children:n.jsx(wn,{actions:B?n.jsx(A,{onClick:()=>u("/explore"),children:"Find accounts to follow →"}):n.jsx(A,{asChild:!0,children:n.jsx("a",{href:"https://explore.ghost.org/social-web",rel:"noopener noreferrer",target:"_blank",children:"Find accounts to follow →"})}),description:"Start following publishers to see their long-form posts here.",title:"Your Reader is empty",children:n.jsx(jn,{})})})})}),n.jsx(se,{open:r,onOpenChange:f=>{f||(v?h():u("/reader")),l(f)},children:n.jsxs(le,{className:"inset-y-3 h-[calc(100vh-24px)] w-screen max-w-[calc(100vw-24px)] animate-none! p-0 focus:outline-hidden dark:bg-gray-950",children:[n.jsxs(ge,{className:"hidden",children:[n.jsx(pe,{children:"Reader"}),n.jsx(ue,{children:"Ghost reader for long form articles"})]}),d.postId&&n.jsx(wt,{postId:d.postId,onClose:()=>{v?h():u("/reader")}})]})})]})},Pt=()=>{const[t,s]=o.useState("following"),{inboxQuery:a}=he({enabled:t==="following"}),{discoveryFeedQuery:p}=me({enabled:t!=="following",topic:t}),c=t==="following"?a:p,{data:k,error:i,fetchNextPage:u,hasNextPage:v,isFetchingNextPage:h,isLoading:r}=c,l=i&&vn(i)&&i.statusCode===404&&t!=="following";if(i&&vn(i)&&!l)return n.jsx(ke,{errorCode:i.code,statusCode:i.statusCode});const d=l?[]:k?.pages.flatMap(_=>_.posts)??Array.from({length:5},(_,F)=>({id:`placeholder-${F}`,object:{}}));return n.jsx(jt,{activities:d,currentTopic:t,fetchNextPage:u,hasNextPage:v,isFetchingNextPage:h,isLoading:r,onTopicChange:s})};export{Pt as default};
