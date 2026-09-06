import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BSD6rMsc.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i,a,o,s,c,l=e((()=>{i=`_root_leyup_1`,a=`_scrollContainer_leyup_7`,o=`_spacer_leyup_34`,s=`_jumpButton_leyup_39`,c={root:i,scrollContainer:a,spacer:o,jumpButton:s}}));function u({children:e,className:t}){let n=(0,d.useRef)(null),r=(0,d.useRef)(!0),[i,a]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=n.current;e&&(r.current?(e.scrollTop=e.scrollHeight,a(!1)):a(!0))},[e]);function o(e){let t=e.currentTarget;r.current=t.scrollHeight-t.scrollTop-t.clientHeight<p,r.current&&a(!1)}function s(){let e=n.current;e&&(e.scrollTo({top:e.scrollHeight,behavior:`smooth`}),r.current=!0,a(!1))}return(0,f.jsxs)(`div`,{className:[c.root,t].filter(Boolean).join(` `),children:[(0,f.jsxs)(`div`,{className:c.scrollContainer,ref:n,onScroll:o,children:[(0,f.jsx)(`div`,{className:c.spacer,"aria-hidden":`true`}),e]}),i&&(0,f.jsx)(`button`,{type:`button`,className:c.jumpButton,onClick:s,children:`New messages ↓`})]})}var d,f,p,m=e((()=>{d=t(n(),1),l(),f=r(),p=80,u.__docgenInfo={description:`MessageScroller — auto-scrolling chat container.

Scrolls to the newest message automatically, but only while the user is
already near the bottom. If they've scrolled up to read history, new
content does not yank them back down — a "New messages" button appears
instead, matching the pattern every chat product (Slack, Discord,
ChatGPT) already uses.

A short conversation is bottom-anchored, not left floating at the top of
the container with empty space below it — a leading flex-grow spacer
absorbs the leftover space and collapses to nothing once messages
overflow. Deliberately not \`justify-content: flex-end\` on the scroll
container itself: Chromium miscomputes \`scrollHeight\` as equal to
\`clientHeight\` for an overflowing flex-end-packed column, which makes the
container look fully scrolled to the bottom and permanently hides the
start of a long conversation (confirmed live before choosing this
approach). The spacer keeps \`justify-content\` at its default, so overflow
scrolling is unaffected.`,methods:[],displayName:`MessageScroller`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{m as n,u as t};