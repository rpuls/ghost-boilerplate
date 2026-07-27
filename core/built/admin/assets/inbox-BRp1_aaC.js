import{o as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-Bb3IsNbi.js";import{t as r}from"./jsx-runtime-DX3WBWVO.js";import{m as i}from"./chunk-KS7C4IRE-DG9HTHQ3.js";import{s as a}from"./router-provider-C1R4AZ2o.js";import{t as o}from"./empty-indicator-oX1u1Pkn.js";import{$ as s,Ar as c,B as l,Ct as u,Dr as d,Dt as f,Er as p,F as m,Gt as h,Ht as g,Ir as _,Ja as v,Kt as y,Na as b,Pt as x,Q as S,R as ee,Ut as C,Wn as te,Wt as w,Y as T,Z as ne,_r as E,at as D,er as re,et as O,hr as k,it as A,kr as j,lt as ie,nt as M,ot as ae,rt as N,tr as P,tt as oe,ut as se,vr as F,wr as I,xo as L,zs as R}from"./index-BBf502Wg.js";import"./layout-Bw4GnxXp.js";import{t as z}from"./topic-filter-DZGjEcz3.js";import{i as ce,n as le,r as ue,t as de}from"./use-reply-chain-data-DuYZGDan.js";var B=e(n(),1),V=r(),H=[`1.5rem`,`1.6rem`,`1.7rem`,`1.8rem`,`2rem`],U={BACKGROUND_COLOR:`ghost-ap-background-color`,FONT_SIZE:`ghost-ap-font-size`,FONT_FAMILY:`ghost-ap-font-family`,FONT_STYLE:`ghost-ap-font-style`},W={SYSTEM:{id:`system`,color:`#fff`,background:`bg-white dark:bg-black`,button:`bg-white dark:bg-black`,border:`border-black/[8%] dark:border-gray-950`},SEPIA:{id:`sepia`,color:`#FCF8F1`,background:`bg-[#FCF8F1]`,button:`bg-[#FCF8F1] hover:bg-black/[3%] text-black hover:text-black`,border:`border-black/[8%]`},LIGHT:{id:`light`,color:`#fff`,background:`bg-white`,button:`hover:bg-black/[3%] text-black hover:text-black`,border:`border-black/[8%] dark:border-gray-950`},DARK:{id:`dark`,color:`#15171a`,background:`bg-black`,button:`text-white dark:bg-black dark:hover:bg-gray-900`,border:`border-black/[8%] dark:border-gray-950`}},fe=()=>{let[e,t]=(0,B.useState)(()=>localStorage.getItem(U.BACKGROUND_COLOR)?.toUpperCase()||`SYSTEM`),[n,r]=(0,B.useState)(()=>{let e=localStorage.getItem(U.FONT_SIZE);return e?parseInt(e):2}),[i,a]=(0,B.useState)(()=>localStorage.getItem(U.FONT_STYLE)||`sans`);return(0,B.useEffect)(()=>{localStorage.setItem(U.FONT_SIZE,n.toString())},[n]),(0,B.useEffect)(()=>{localStorage.setItem(U.FONT_STYLE,i)},[i]),{backgroundColor:e,currentFontSizeIndex:n,fontStyle:i,handleColorChange:e=>{t(e),localStorage.setItem(U.BACKGROUND_COLOR,W[e].id)},setFontStyle:a,increaseFontSize:()=>{r(e=>Math.min(e+1,H.length-1))},decreaseFontSize:()=>{r(e=>Math.max(e-1,0))},resetFontSize:()=>r(2),fontSize:H[n]}},pe=({backgroundColor:e,currentFontSizeIndex:t,fontStyle:n,onColorChange:r,onFontStyleChange:i,onDecreaseFontSize:a,onIncreaseFontSize:o,onResetFontSize:s,onOpenChange:c})=>(0,V.jsx)(G,{backgroundColor:e,currentFontSizeIndex:t,fontStyle:n,isActiveColor:t=>e===t,isActiveFont:e=>n===e,onColorChange:r,onDecreaseFontSize:a,onFontStyleChange:i,onIncreaseFontSize:o,onOpenChange:c,onResetFontSize:s}),G=({backgroundColor:e,isActiveColor:t,isActiveFont:n,onColorChange:r,onFontStyleChange:i,currentFontSizeIndex:a,onDecreaseFontSize:o,onIncreaseFontSize:s,onResetFontSize:c,onOpenChange:l})=>(0,V.jsxs)(k,{modal:!1,onOpenChange:l,children:[(0,V.jsx)(F,{asChild:!0,children:(0,V.jsx)(_,{className:`size-9 rounded-full ${W[e].button}`,variant:`ghost`,children:(0,V.jsx)(R.Typography,{className:`size-[18px]!`})})}),(0,V.jsx)(E,{align:`end`,className:`w-[224px]`,onCloseAutoFocus:e=>e.preventDefault(),onOpenAutoFocus:e=>e.preventDefault(),children:(0,V.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between gap-[6px]`,children:[(0,V.jsx)(_,{className:`h-7 flex-1 rounded-[6px] bg-gray-200 p-0 text-[1.1rem] text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px] ${t(`SYSTEM`)?`outline-2 outline-green`:``}`,variant:`secondary`,onClick:()=>r(`SYSTEM`),children:`Auto`}),(0,V.jsx)(_,{className:`h-7 flex-1 rounded-[6px] bg-[#ece6d9] p-0 hover:bg-[#ece6d9] ${t(`SEPIA`)?`outline-2 outline-green`:`border border-[#ece6d9]`}`,onClick:()=>r(`SEPIA`)}),(0,V.jsx)(_,{className:`h-7 flex-1 rounded-[6px] bg-white p-0 hover:bg-white ${t(`LIGHT`)?`outline-2 outline-green`:`border border-gray-200`}`,onClick:()=>r(`LIGHT`)}),(0,V.jsx)(_,{className:`h-7 flex-1 rounded-[6px] bg-black p-0 hover:bg-black dark:border dark:border-gray-950 ${t(`DARK`)?`outline-2 outline-green`:``}`,onClick:()=>r(`DARK`)})]}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsxs)(_,{className:`flex h-auto w-full flex-col gap-1 rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 ${n(`sans`)&&`outline-2 outline-green`}`,variant:`secondary`,onClick:()=>i(`sans`),children:[(0,V.jsx)(`span`,{className:`text-[2rem] leading-none font-bold`,children:`Aa`}),(0,V.jsx)(`span`,{className:`text-[1.1rem]`,children:`System`})]}),(0,V.jsxs)(_,{className:`flex h-auto w-full flex-col gap-1 rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 ${n(`serif`)&&`outline-2 outline-green`}`,variant:`secondary`,onClick:()=>i(`serif`),children:[(0,V.jsx)(`span`,{className:`pt-1 font-serif text-[2rem] leading-none font-bold`,children:`Aa`}),(0,V.jsx)(`span`,{className:`font-serif text-[1.2rem]`,children:`Serif`})]})]}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(_,{className:`h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px]`,disabled:a===0,variant:`secondary`,onClick:o,children:(0,V.jsx)(v,{})}),(0,V.jsx)(_,{className:`h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900`,variant:`secondary`,onClick:c,children:(0,V.jsx)(`span`,{className:`text-[1.6rem] font-bold`,children:`Aa`})}),(0,V.jsx)(_,{className:`h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px]`,disabled:a===H.length-1,variant:`secondary`,onClick:s,children:(0,V.jsx)(b,{})})]})]})})]}),me=({tocItems:e,iframeElement:t,modalRef:n,className:r=`visible! absolute inset-y-0 right-7 z-40 hidden lg:block!`,onOpenChange:i})=>{let[a,o]=(0,B.useState)(null),s=B.useRef(!1);return(0,B.useEffect)(()=>{if(!t?.contentDocument||e.length<=1)return;let r=n.current;if(!r)return;let i=()=>{if(s.current)return;let n=t.contentDocument;if(!n)return;let i=r.scrollTop,a=e.map(e=>n.getElementById(e.id)).filter(e=>e!==null).map(e=>({id:e.id,top:e.offsetTop}));if(!a.length)return;let c=a.reduce((e,t)=>t.top-100<=i?t:e);o(c?.id||null)},a=()=>{requestAnimationFrame(i)};return r.addEventListener(`scroll`,a),i(),()=>{r.removeEventListener(`scroll`,a)}},[t,e,n]),e.length<=1?null:(0,V.jsx)(`div`,{className:r,children:(0,V.jsx)(`div`,{className:`sticky top-1/2 -translate-y-1/2`,children:(0,V.jsx)(K,{activeHeading:a||``,items:e,onItemClick:e=>{if(!t?.contentDocument)return;let r=t.contentDocument.getElementById(e);r&&n.current&&(s.current=!0,o(e),n.current.scrollTo({top:r.offsetTop-20,behavior:`smooth`}),setTimeout(()=>{s.current=!1},1e3))},onOpenChange:i})})})},he={1:`w-3`,2:`w-2`,3:`w-1`},ge={1:`pl-2`,2:`pl-6`,3:`pl-10`},K=({items:e,activeHeading:t,onItemClick:n,onOpenChange:r})=>{let[i,a]=(0,B.useState)(!1),o=B.useRef();if(B.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]),e.length===0)return null;let s=e=>Math.min(e,3),c=e=>he[s(e)],l=e=>ge[s(e)],u=()=>{o.current&&clearTimeout(o.current),a(!0),r?.(!0)},d=()=>{o.current=setTimeout(()=>{a(!1),r?.(!1)},100)};return(0,V.jsxs)(k,{modal:!1,open:i,onOpenChange:a,children:[(0,V.jsx)(F,{asChild:!0,children:(0,V.jsx)(`div`,{className:`absolute top-1/2 right-2 flex -translate-y-1/2 flex-col items-end gap-2 rounded-md p-2 text-base dark:bg-black`,onMouseEnter:u,onMouseLeave:d,children:e.map(e=>(0,V.jsx)(`div`,{className:`h-[2px] rounded-sm ${t===e.id?`bg-black dark:bg-white`:`bg-gray-400 dark:bg-gray-700`} pr-1 transition-all ${c(e.level)}`},e.id))})}),(0,V.jsx)(E,{align:`center`,className:`w-[240px] p-2`,side:`left`,sideOffset:-28,onCloseAutoFocus:e=>e.preventDefault(),onMouseEnter:u,onMouseLeave:d,onOpenAutoFocus:e=>e.preventDefault(),children:(0,V.jsx)(`nav`,{"aria-label":`Table of contents navigation`,className:`max-h-[60vh] overflow-y-auto`,role:`navigation`,children:e.map(e=>(0,V.jsx)(`button`,{className:`line-clamp-2 block w-full cursor-pointer rounded py-1 text-left text-sm leading-tight ${t===e.id?`text-black dark:text-white`:`text-gray-700 dark:text-gray-600`} hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-grey-950 dark:hover:text-white ${l(e.level)}`,type:`button`,onClick:()=>n(e.id),children:(0,V.jsx)(`span`,{className:`line-clamp-2`,children:e.text})},e.id))})})]})},_e=()=>`<style>

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

</style>`,ve=t({default:()=>ye}),ye=`(function() {
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
`,be=t({default:()=>q}),q=`(function() {
    const images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        const container = image.closest('.kg-gallery-image');
        const width = image.attributes.width.value;
        const height = image.attributes.height.value;
        const ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    })
})();
`,xe=t({default:()=>Se}),Se=`(function() {
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
`,J=t({default:()=>Ce}),Ce=`(function() {
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
`,Y=t({default:()=>X}),X=`.kg-audio-card,
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
`,we=t({default:()=>Te}),Te=`.kg-blockquote-alt {
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
`,Ee=t({default:()=>Z}),Z=`.kg-bookmark-card,
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
`,De=t({default:()=>Oe}),Oe=`.kg-button-card,
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
}`,ke=t({default:()=>Q}),Q=`.kg-callout-card,
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
}`,Ae=t({default:()=>je}),je=`.kg-collection-card {
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
}`,Me=t({default:()=>Ne}),Ne=`.kg-cta-card,
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

`,Pe=t({default:()=>Fe}),Fe=`.kg-file-card,
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
`,Ie=t({default:()=>Le}),Le=`.kg-gallery-card,
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
`,Re=t({default:()=>ze}),ze=`.kg-header-card,
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
`,Be=t({default:()=>Ve}),Ve=`.kg-header-card.kg-v2 {
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
`,He=t({default:()=>Ue}),Ue=`.kg-nft-card,
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
}`,We=t({default:()=>Ge}),Ge=`.kg-product-card,
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
`,Ke=t({default:()=>qe}),qe=`.kg-signup-card {
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
`,Je=t({default:()=>Ye}),Ye=`.kg-toggle-card,
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
`,Xe=t({default:()=>Ze}),Ze=`.kg-transistor-card {
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
`,Qe=t({default:()=>$e}),$e=`.kg-video-card,
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
    background: rgba(0,0,0,.5);
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

`,et=Object.assign({"../../ghost/core/core/frontend/src/cards/js/audio.js":ve,"../../ghost/core/core/frontend/src/cards/js/gallery.js":be,"../../ghost/core/core/frontend/src/cards/js/toggle.js":xe,"../../ghost/core/core/frontend/src/cards/js/video.js":J}),tt=Object.assign({"../../ghost/core/core/frontend/src/cards/css/audio.css":Y,"../../ghost/core/core/frontend/src/cards/css/blockquote.css":we,"../../ghost/core/core/frontend/src/cards/css/bookmark.css":Ee,"../../ghost/core/core/frontend/src/cards/css/button.css":De,"../../ghost/core/core/frontend/src/cards/css/callout.css":ke,"../../ghost/core/core/frontend/src/cards/css/collection.css":Ae,"../../ghost/core/core/frontend/src/cards/css/cta.css":Me,"../../ghost/core/core/frontend/src/cards/css/file.css":Pe,"../../ghost/core/core/frontend/src/cards/css/gallery.css":Ie,"../../ghost/core/core/frontend/src/cards/css/header.css":Re,"../../ghost/core/core/frontend/src/cards/css/header_v2.css":Be,"../../ghost/core/core/frontend/src/cards/css/nft.css":He,"../../ghost/core/core/frontend/src/cards/css/product.css":We,"../../ghost/core/core/frontend/src/cards/css/signup.css":Ke,"../../ghost/core/core/frontend/src/cards/css/toggle.css":Je,"../../ghost/core/core/frontend/src/cards/css/transistor.css":Xe,"../../ghost/core/core/frontend/src/cards/css/video.css":Qe}),nt=Object.values(et).map(e=>e.default).join(`

`),rt=Object.values(tt).map(e=>e.default).join(`

`),it=({postUrl:e,heading:t,image:n,excerpt:r,authors:i,html:a,backgroundColor:o,fontSize:s,fontStyle:c,onHeadingsExtracted:l,onIframeLoad:u,onLoadingChange:d,isPopoverOpen:f})=>{let p=(0,B.useRef)(null),[m,h]=(0,B.useState)(!0),[g,_]=(0,B.useState)(`0px`),v=document.documentElement.classList.contains(`dark`)&&o===`SYSTEM`||o===`DARK`,y=_e(),b=typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(hover: none) and (pointer: coarse)`).matches,x=(0,B.useMemo)(()=>ae(D(b?M(a):a)),[a,b]),S=`
        <html class="has-${v?`light`:`dark`}-text has-${c}-body ${o===`SEPIA`&&`has-sepia-bg`}">
        <head>
            ${y}
            <style>
                :root {
                    --font-size: ${s};
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
                ${rt}
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
                <h1 class='gh-article-title is-title' data-test-article-heading>${N(t)}</h1>
                ${r?`<p class='gh-article-excerpt'>${N(r)}</p>`:``}
                <a href="${e&&A(e)?N(e):`#`}" target="_blank" rel="noopener noreferrer" class="gh-article-meta">
                    ${i&&i.length>0?`
                        <div class="gh-article-author-image">
                        ${i.map(e=>`
                                <span>
                                    ${e.profile_image?`<img src="${N(e.profile_image)}" alt="${N(e.name)}">`:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M6.75 6a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 1 0 -10.5 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M2.25 23.25a9.75 9.75 0 0 1 19.5 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>`}
                                </span>
                            `).join(``)}
                        </div>
                    `:``}
                    <div class="gh-article-meta-wrapper">
                        ${i&&i.length>0?`
                            <span class="gh-article-author-name">
                                ${i.length>1?`${N(i[0].name)} and ${i.length-1} ${i.length-1==1?`other`:`others`}`:N(i[0].name)}
                            </span>
                        `:``}
                        <span class="gh-article-source">${e&&A(e)?N(new URL(e).hostname):``} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></span>
                    </div>
                </a>
                ${n?`
                <figure class='gh-article-image'>
                    <img src='${N(n)}' alt='${N(t)}' />
                </figure>
                `:``}
            </header>
            <div class='gh-content gh-canvas is-body'>
                ${x}
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
                ${nt}
            <\/script>
        </body>
        </html>
    `;return(0,B.useEffect)(()=>{let e=p.current;if(!e)return;e.srcdoc||=S;let t=t=>{if(t.data.type===`resize`){let n=`${t.data.bodyHeight+24}px`;_(n),e.style.height=n,t.data.isLoaded&&h(!1)}},n=e=>{if(e.key===`Escape`){e.preventDefault(),e.stopPropagation();let t=new KeyboardEvent(`keydown`,{key:`Escape`,code:`Escape`,keyCode:27,which:27,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}},r=()=>{let t=e.contentWindow;t&&t.addEventListener(`keydown`,n)};return e.addEventListener(`load`,r),window.addEventListener(`message`,t),()=>{window.removeEventListener(`message`,t),e.removeEventListener(`load`,r);let i=e.contentWindow;i&&i.removeEventListener(`keydown`,n)}},[S]),(0,B.useEffect)(()=>{let e=p.current;if(!e)return;let t=e.contentDocument||e.contentWindow?.document;if(!t)return;let n=t.documentElement;n.style.setProperty(`--font-size`,s),n.classList.remove(`has-sans-body`,`has-serif-body`),n.classList.add(`has-${c}-body`),n.classList.remove(`has-dark-text`,`has-light-text`),n.classList.add(`has-${v?`light`:`dark`}-text`),o===`SEPIA`?n.classList.add(`has-sepia-bg`):n.classList.remove(`has-sepia-bg`);let r=e.contentWindow;if(r&&typeof r.resizeIframe==`function`)r.resizeIframe();else{let e=new Event(`resize`);t.dispatchEvent(e)}},[s,c,o,v]),(0,B.useEffect)(()=>{let e=p.current;if(!e)return;let t=()=>{if(!e.contentDocument)return;let t=Array.from(e.contentDocument.querySelectorAll(`.gh-content > :is(h2, h3, h4, h5, h6)[id]`));if(t.length===0)return;let n=Math.min(...t.map(e=>parseInt(e.tagName[1]))),r=t.map((e,t)=>{let r=`heading-${t}`;e.id=r;let i=parseInt(e.tagName[1])-n+1;return{id:r,text:e.textContent||``,level:i,element:e}});l?.(r),u?.(e)};return e.addEventListener(`load`,t),()=>e.removeEventListener(`load`,t)},[l,u]),(0,B.useEffect)(()=>{d?.(m)},[m,d]),(0,V.jsx)(`div`,{className:`w-full pb-6`,children:(0,V.jsxs)(`div`,{className:`relative -mx-6`,children:[m&&(0,V.jsxs)(`div`,{className:`mx-auto mt-6 w-full max-w-[640px] max-lg:px-4`,children:[(0,V.jsxs)(`div`,{className:`mb-6 flex flex-col gap-2`,children:[(0,V.jsx)(P,{className:`h-8`}),(0,V.jsx)(P,{className:`h-8 w-full max-w-md`})]}),(0,V.jsx)(P,{className:`mt-2 h-4`,count:4,randomize:!0}),(0,V.jsx)(P,{className:`mt-8 h-[400px]`}),(0,V.jsx)(P,{className:`mt-2 h-4`,containerClassName:`block mt-7 mb-4`,count:8,randomize:!0})]}),(0,V.jsx)(`iframe`,{ref:p,id:`gh-ap-article-iframe`,style:{width:`100%`,border:`none`,height:g,overflow:`hidden`,opacity:+!m,transition:`opacity 0.2s ease-in-out`,pointerEvents:f?`none`:`auto`},title:`Embedded Content`})]})})},at=()=>(0,V.jsx)(`div`,{className:`h-px bg-black/[8%] dark:bg-gray-950`}),$=new Map,ot=({postId:e=null,onClose:t})=>{let{backgroundColor:n,currentFontSizeIndex:r,fontStyle:i,fontSize:a,handleColorChange:o,setFontStyle:c,increaseFontSize:u,decreaseFontSize:d,resetFontSize:f}=fe(),p=(0,B.useRef)(null),[m,_]=(0,B.useState)(!1),[v,b]=(0,B.useState)(!1),[x,ee]=(0,B.useState)(new Set),[C,te]=(0,B.useState)(new Set),[E,D]=(0,B.useState)(new Set),[k,A]=(0,B.useState)(!1),j=(0,B.useRef)(null),M=(0,B.useRef)(null),{post:ae,processedReplies:N,isLoading:F,loadMoreChildren:I,loadMoreChildReplies:L,hasMoreChildren:R,hasMoreChildReplies:z}=de(e??``,{includeAncestors:!1}),H=ae,U=H?.object,G=H?.actor,he=H?.object?.metadata?.ghostAuthors,ge=U?.replyCount??0;(0,B.useEffect)(()=>{if(!R)return;j.current&&j.current.disconnect();let e=p.current;if(e)return j.current=new IntersectionObserver(async e=>{if(e[0].isIntersecting&&R&&!k){A(!0);try{await I()}catch(e){console.error(`Failed to load more top-level replies:`,e)}finally{A(!1)}}},{root:e,rootMargin:`200px`}),M.current&&j.current.observe(M.current),()=>{j.current&&j.current.disconnect()}},[R,k,I]);function K(){}function _e(e){ee(t=>{let n=new Set(t);return n.has(e)?n.delete(e):(n.add(e),te(t=>{let n=new Set(t);return n.add(e),n})),n})}async function ve(e,t){if(!E.has(e)){D(t=>new Set(t).add(e));try{L&&await L(t)}catch(e){console.error(`Failed to load more replies for chain:`,e)}finally{D(t=>{let n=new Set(t);return n.delete(e),n})}}}let ye=()=>{},be=(0,B.useRef)(null),q=`640px`,[xe,Se]=(0,B.useState)(0),[J,Ce]=(0,B.useState)(!0),[Y]=l(Se,100);(0,B.useEffect)(()=>{let e=p.current,t=document.getElementById(`object-content`),n=()=>{if(J||!e||!t)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();if(n.height<=r.height){Y(100);return}let i=Math.max(0,r.top-n.top),a=t.offsetHeight-e.offsetHeight,o=Math.min(Math.max(i/a*100,0),100),s=Math.round(o/1)*1;Y(s)};if(J)return;let r=new MutationObserver(n);return t&&r.observe(t,{childList:!0,subtree:!0,characterData:!0}),e?.addEventListener(`scroll`,n),n(),()=>{e?.removeEventListener(`scroll`,n),r.disconnect()}},[J,Y]);let[X,we]=(0,B.useState)([]),[Te,Ee]=(0,B.useState)(null),[Z,De]=(0,B.useState)(null),Oe=(0,B.useCallback)(e=>{we(e)},[]),ke=(0,B.useCallback)(e=>{De(e)},[]);(0,B.useEffect)(()=>{if(!Z?.contentDocument||!X.length)return;let e=setTimeout(()=>{let e=p.current;if(!e)return;let t=()=>{let t=Z.contentDocument;if(!t||!t.documentElement)return;let n=e.scrollTop,r=X.map(e=>t.getElementById(e.id)).filter(e=>e!==null).map(e=>({element:e,id:e.id,top:e.offsetTop}));if(!r.length)return;let i=null;for(let e of r)if(e.top-100<=n)i=e;else break;Ee(i?.id||null)};return e.addEventListener(`scroll`,t),t(),()=>{e.removeEventListener(`scroll`,t)}},100);return()=>clearTimeout(e)},[Z,X,Te]);let Q=y();return(0,B.useEffect)(()=>{let t=p.current;return()=>{t&&e&&$.set(e,t.scrollTop)}},[e]),(0,B.useEffect)(()=>{if(!J&&!F&&e&&p.current){let t=$.get(e);t!==void 0&&t>0&&setTimeout(()=>{p.current&&(p.current.scrollTop=t)},100)}},[J,F,e]),F?(0,V.jsx)(`div`,{className:`max-h-full overflow-auto rounded-md ${n===`DARK`&&`dark`} ${(n===`LIGHT`||n===`SEPIA`)&&`light`} ${W[n].background}`,children:(0,V.jsx)(`div`,{className:`flex h-full flex-col`,children:(0,V.jsxs)(`div`,{className:`relative flex-1`,children:[(0,V.jsx)(`div`,{className:`sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${W[n].background} ${W[n].border}`,children:(0,V.jsxs)(`div`,{className:`grid w-full px-8 max-lg:px-4`,style:{gridTemplateColumns:`1fr minmax(0,${q}) 1fr`},children:[(0,V.jsx)(`div`,{className:`flex items-center`,children:(0,V.jsx)(h,{className:W[n].button,onClick:t})}),(0,V.jsxs)(`div`,{className:`col-[2/3] mx-auto flex w-full items-center gap-3 max-md:hidden`,children:[(0,V.jsx)(P,{className:`size-10 rounded-full`}),(0,V.jsxs)(`div`,{className:`grow pt-1`,children:[(0,V.jsx)(P,{className:`w-full`}),(0,V.jsx)(P,{className:`w-2/3`})]})]}),(0,V.jsx)(`div`,{className:`col-[3/4] flex items-center justify-end gap-2`,children:(0,V.jsx)(pe,{backgroundColor:n,currentFontSizeIndex:r,fontStyle:i,onColorChange:o,onDecreaseFontSize:d,onFontStyleChange:c,onIncreaseFontSize:u,onOpenChange:_,onResetFontSize:f})})]})}),(0,V.jsx)(`div`,{className:`relative flex-1 max-lg:px-4`,children:(0,V.jsxs)(`div`,{className:`mx-auto mt-11 w-full max-w-[640px]`,children:[(0,V.jsxs)(`div`,{className:`mb-6 flex flex-col gap-2`,children:[(0,V.jsx)(P,{className:`h-8`}),(0,V.jsx)(P,{className:`h-8 w-full max-w-md`})]}),(0,V.jsx)(P,{className:`mt-2 h-4`,count:4,randomize:!0}),(0,V.jsx)(P,{className:`mt-8 h-[400px]`}),(0,V.jsx)(P,{className:`mt-2 h-4`,containerClassName:`block mt-7 mb-4`,count:8,randomize:!0})]})})]})})}):ae?(0,V.jsx)(`div`,{ref:p,className:`max-h-full overflow-auto rounded-md ${n===`DARK`&&`dark`} ${(n===`LIGHT`||n===`SEPIA`)&&`light`} ${W[n].background}`,"data-scrollable-container":!0,children:(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,V.jsxs)(`div`,{className:`relative flex-1`,children:[(0,V.jsx)(`div`,{className:`sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${W[n].background} ${W[n].border}`,children:(0,V.jsxs)(`div`,{className:`grid w-full px-8 max-lg:px-4`,style:{gridTemplateColumns:`1fr minmax(0,${q}) 1fr`},children:[(0,V.jsx)(`div`,{className:`flex items-center`,children:(0,V.jsx)(h,{className:W[n].button,onClick:t})}),(0,V.jsxs)(`div`,{className:`col-[2/3] mx-auto flex w-full items-center justify-between gap-3 max-md:hidden`,children:[(0,V.jsx)(oe,{actor:G,isCurrentUser:U.authored,children:(0,V.jsxs)(`div`,{className:`flex cursor-pointer items-center gap-3`,children:[(0,V.jsx)(`div`,{className:`relative z-10 pt-0.5`,children:(0,V.jsx)(se,{author:G})}),(0,V.jsxs)(`div`,{className:`relative z-10 mt-0.5 flex min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]`,onClick:e=>S(G,Q,e),children:[(0,V.jsx)(`div`,{className:`flex w-full`,children:(0,V.jsx)(`span`,{className:`min-w-0 truncate font-semibold whitespace-nowrap text-black hover:underline dark:text-white`,children:F?(0,V.jsx)(P,{className:`w-20`}):G.name})}),(0,V.jsxs)(`div`,{className:`flex w-full`,children:[!F&&(0,V.jsx)(`span`,{className:`truncate text-gray-700 after:mx-1 after:font-normal after:text-gray-700 after:content-["·"]`,children:w(G)}),(0,V.jsx)(`span`,{className:`text-gray-700`,children:F?(0,V.jsx)(P,{className:`w-[120px]`}):ne(U,!U.authored)})]})]})]})}),!U.authored&&!F&&(0,V.jsx)(ie,{following:G.followedByMe??!1,handle:w(G)})]}),(0,V.jsx)(`div`,{className:`col-[3/4] flex items-center justify-end gap-2`,children:(0,V.jsx)(pe,{backgroundColor:n,currentFontSizeIndex:r,fontStyle:i,onColorChange:o,onDecreaseFontSize:d,onFontStyleChange:c,onIncreaseFontSize:u,onOpenChange:_,onResetFontSize:f})})]})}),(0,V.jsxs)(`div`,{className:`relative flex-1`,children:[(0,V.jsx)(me,{iframeElement:Z,modalRef:p,tocItems:X,onOpenChange:b}),!F&&(0,V.jsx)(`div`,{className:`grow overflow-y-auto`,children:(0,V.jsxs)(`div`,{className:`mx-auto px-6 pt-5 pb-10`,style:{maxWidth:`904px`},children:[(0,V.jsxs)(`div`,{className:`flex flex-col items-center pb-8`,id:`object-content`,children:[(0,V.jsx)(it,{authors:he,backgroundColor:n,excerpt:U.summary??``,fontSize:a,fontStyle:i,heading:U.name,html:U.content??``,image:typeof U.image==`string`?U.image:U.image?.url,isPopoverOpen:m||v,postUrl:U?.url||``,onHeadingsExtracted:Oe,onIframeLoad:ke,onLoadingChange:Ce}),(0,V.jsx)(`div`,{className:`-ml-3 w-full`,style:{maxWidth:q},children:(0,V.jsx)(O,{actor:G,commentCount:ge,layout:`modal`,likeCount:U.likeCount??0,object:U,repostCount:U.repostCount??0,onLikeClick:ye})})]}),U.type===`Tombstone`&&(0,V.jsx)(ue,{last:!0}),(0,V.jsxs)(`div`,{className:`mx-auto w-full border-t border-black/[8%] dark:border-gray-950`,style:{maxWidth:q},children:[(0,V.jsx)(ce,{object:U}),(0,V.jsx)(at,{})]}),F&&(0,V.jsx)(re,{size:`lg`}),(0,V.jsxs)(`div`,{ref:be,className:`mx-auto w-full`,style:{maxWidth:q},children:[N.map((t,n)=>{let r=n===N.length-1,i=t.mainReply.id,a=x.has(i),o=C.has(i),s=E.has(i),c=t.chain.length>0;return(0,V.jsxs)(B.Fragment,{children:[(0,V.jsx)(T,{actor:t.mainReply.actor,allowDelete:t.mainReply.object.authored,commentCount:t.mainReply.object.replyCount??0,isChainParent:c,isPending:g(t.mainReply.id),last:!c,layout:`reply`,likeCount:t.mainReply.object.likeCount??0,object:t.mainReply.object,parentId:U.id,repostCount:t.mainReply.object.repostCount??0,type:`Note`,onClick:()=>{let n=p.current;n&&e&&$.set(e,n.scrollTop),Q(`/notes/${encodeURIComponent(t.mainReply.id)}`)},onDelete:K}),c&&t.chain[0]&&(0,V.jsx)(T,{actor:t.chain[0].actor,allowDelete:t.chain[0].object.authored,commentCount:t.chain[0].object.replyCount??0,isChainContinuation:!0,isPending:g(t.chain[0].id),last:t.chain.length===1,layout:`reply`,likeCount:t.chain[0].object.likeCount??0,object:t.chain[0].object,parentId:U.id,repostCount:t.chain[0].object.repostCount??0,type:`Note`,onClick:()=>{let n=p.current;n&&e&&$.set(e,n.scrollTop),Q(`/notes/${encodeURIComponent(t.chain[0].id)}`)},onDelete:K},t.chain[0].id),c&&a&&t.chain.slice(1).map((r,i)=>{let a=i===t.chain.slice(1).length-1,o=z&&z(n),s=a&&o;return(0,V.jsx)(T,{actor:r.actor,allowDelete:r.object.authored,commentCount:r.object.replyCount??0,isChainContinuation:!0,isPending:g(r.id),last:a&&!s,layout:`reply`,likeCount:r.object.likeCount??0,object:r.object,parentId:U.id,repostCount:r.object.repostCount??0,type:`Note`,onClick:()=>{let t=p.current;t&&e&&$.set(e,t.scrollTop),Q(`/notes/${encodeURIComponent(r.id)}`)},onDelete:K},r.id)}),c&&t.chain.length>1&&!a&&(0,V.jsx)(le,{variant:`expand`,onClick:()=>_e(i)}),c&&a&&o&&z&&z(n)&&(0,V.jsx)(le,{loading:s,variant:`loadMore`,onClick:()=>ve(i,n)}),!r&&(0,V.jsx)(at,{})]},t.mainReply.id)}),k&&(0,V.jsx)(`div`,{className:`flex flex-col items-center justify-center text-center`,children:(0,V.jsx)(re,{size:`md`})})]}),R&&(0,V.jsx)(`div`,{ref:M,className:`h-1`})]})})]})]}),!F&&(0,V.jsxs)(`div`,{className:`pointer-events-none visible! sticky bottom-0 hidden items-end justify-between px-10 pb-[42px] lg:flex!`,children:[(0,V.jsx)(`div`,{className:`pointer-events-auto text-gray-600`,children:s(U.content??``)}),(0,V.jsxs)(`div`,{className:`pointer-events-auto min-w-10 text-right text-gray-600 transition-all duration-200 ease-out`,children:[xe,`%`]},xe)]})]})})}):(0,V.jsx)(`div`,{className:`max-h-full overflow-auto rounded-md ${n===`DARK`&&`dark`} ${(n===`LIGHT`||n===`SEPIA`)&&`light`} ${W[n].background}`,children:(0,V.jsx)(`div`,{className:`flex h-full flex-col`,children:(0,V.jsx)(`div`,{className:`relative flex-1`,children:(0,V.jsx)(`div`,{className:`sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${W[n].background} ${W[n].border}`,children:(0,V.jsxs)(`div`,{className:`grid w-full px-8 max-lg:px-4`,style:{gridTemplateColumns:`1fr minmax(0,${q}) 1fr`},children:[(0,V.jsx)(`div`,{className:`flex items-center`,children:(0,V.jsx)(h,{className:W[n].button,onClick:t})}),(0,V.jsx)(`div`,{className:`col-[2/3] mx-auto flex w-full items-center gap-3 max-md:hidden`,children:(0,V.jsx)(`div`,{className:`grow text-center`,children:(0,V.jsx)(`span`,{children:`Error loading article.`})})})]})})})})})},st=({isLoading:e,activities:t,currentTopic:n,fetchNextPage:r,hasNextPage:s,isFetchingNextPage:l,onTopicChange:u})=>{let f=y(),{canGoBack:m,goBack:h}=a(),[v,b]=(0,B.useState)(!1),S=i(),{topicsQuery:C}=x(),{data:w}=C,ne=w&&w.topics.length>0;(0,B.useEffect)(()=>{b(!!S.postId)},[S.postId]);let E=(0,B.useRef)(null),D=(0,B.useRef)(null),O=(0,B.useRef)(null);(0,B.useEffect)(()=>(E.current&&E.current.disconnect(),E.current=new IntersectionObserver(e=>{e[0].isIntersecting&&s&&!l&&r()}),D.current&&E.current.observe(D.current),O.current&&E.current.observe(O.current),()=>{E.current&&E.current.disconnect()}),[s,l,r]);let k=Math.max(0,Math.floor(t.length*.75)-1);return(0,V.jsxs)(ee,{children:[ne&&(0,V.jsx)(z,{currentTopic:n,excludeTopics:[`top`],onTopicChange:u}),(0,V.jsx)(`div`,{className:`flex w-full flex-col`,children:(0,V.jsx)(`div`,{className:`w-full`,children:t.length>0?(0,V.jsx)(`div`,{className:`my-4`,children:(0,V.jsx)(`div`,{className:`mx-auto flex min-h-[calc(100dvh_-_117px)] items-start gap-11`,children:(0,V.jsx)(`div`,{className:`flex w-full min-w-0 flex-col items-center`,children:(0,V.jsxs)(`div`,{className:`flex w-full min-w-0 flex-col items-start`,children:[(0,V.jsxs)(`ul`,{className:`mx-auto flex w-full flex-col`,"data-testid":`inbox-list`,children:[t.map((n,r)=>(0,V.jsxs)(`li`,{"data-testid":`inbox-item`,"data-test-view-article":!0,children:[(0,V.jsx)(T,{actor:n.actor,allowDelete:n.object.authored,commentCount:n.object.replyCount??0,isLoading:e,isPending:g(n.id),layout:`inbox`,likeCount:n.object.likeCount??0,object:n.object,repostCount:n.object.repostCount??0,type:n.type,onClick:()=>{f(`/reader/${encodeURIComponent(n.id)}`)}}),r<t.length-1&&(0,V.jsx)(te,{}),r===k&&(0,V.jsx)(`div`,{ref:D,className:`h-1`})]},`${n.id}-${n.type}-${r}`)),l&&(0,V.jsx)(`li`,{className:`flex flex-col items-center justify-center gap-4 text-center`,children:(0,V.jsx)(re,{size:`md`})})]}),(0,V.jsx)(`div`,{ref:O,className:`h-1`})]})})})}):n===`following`?(0,V.jsx)(`div`,{className:`mt-[24vh]`,children:(0,V.jsx)(o,{actions:ne?(0,V.jsx)(_,{onClick:()=>f(`/explore`),children:`Find accounts to follow →`}):(0,V.jsx)(_,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://explore.ghost.org/social-web`,rel:`noopener noreferrer`,target:`_blank`,children:`Find accounts to follow →`})}),description:`Start following publishers to see their long-form posts here.`,title:`Your Reader is empty`,children:(0,V.jsx)(L,{})})}):(0,V.jsx)(`div`,{className:`mt-[24vh]`,children:(0,V.jsx)(o,{description:`Explore other topics for more content.`,title:`Nothing here yet`,children:(0,V.jsx)(L,{})})})})}),(0,V.jsx)(I,{open:v,onOpenChange:e=>{e||(m?h():f(`/reader`)),b(e)},children:(0,V.jsxs)(p,{className:`inset-y-3 h-[calc(100vh-24px)] w-screen max-w-[calc(100vw-24px)] animate-none! p-0 focus:outline-hidden dark:bg-gray-950`,children:[(0,V.jsxs)(j,{className:`hidden`,children:[(0,V.jsx)(c,{children:`Reader`}),(0,V.jsx)(d,{children:`Ghost reader for long form articles`})]}),S.postId&&(0,V.jsx)(ot,{postId:S.postId,onClose:()=>{m?h():f(`/reader`)}})]})})]})},ct=()=>{let[e,t]=(0,B.useState)(`following`),{inboxQuery:n}=f({enabled:e===`following`}),{discoveryFeedQuery:r}=u({enabled:e!==`following`,topic:e}),{data:i,error:a,fetchNextPage:o,hasNextPage:s,isFetchingNextPage:c,isLoading:l}=e===`following`?n:r,d=a&&C(a)&&a.statusCode===404&&e!==`following`;return a&&C(a)&&!d?(0,V.jsx)(m,{errorCode:a.code,statusCode:a.statusCode}):(0,V.jsx)(st,{activities:d?[]:i?.pages.flatMap(e=>e.posts)??Array.from({length:5},(e,t)=>({id:`placeholder-${t}`,object:{}})),currentTopic:e,fetchNextPage:o,hasNextPage:s,isFetchingNextPage:c,isLoading:l,onTopicChange:t})};export{ct as default};