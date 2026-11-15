import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CN9byy10.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";var r,i,a,o,s;function c(){return(c=e((()=>{r=`_root_leyup_1`,i=`_scrollContainer_leyup_7`,a=`_spacer_leyup_34`,o=`_jumpButton_leyup_39`,s={root:r,scrollContainer:i,spacer:a,jumpButton:o}})))()}function l({children:e,className:t}){let n=(0,u.useRef)(null),r=(0,u.useRef)(!0),[i,a]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let e=n.current;e&&(r.current?(e.scrollTop=e.scrollHeight,a(!1)):a(!0))},[e]);function o(e){let t=e.currentTarget,n=t.scrollHeight-t.scrollTop-t.clientHeight;r.current=n<f,r.current&&a(!1)}function c(){let e=n.current;e&&(e.scrollTo({top:e.scrollHeight,behavior:`smooth`}),r.current=!0,a(!1))}return(0,d.jsxs)(`div`,{className:[s.root,t].filter(Boolean).join(` `),children:[(0,d.jsxs)(`div`,{className:s.scrollContainer,ref:n,onScroll:o,children:[(0,d.jsx)(`div`,{className:s.spacer,"aria-hidden":`true`}),e]}),i&&(0,d.jsx)(`button`,{type:`button`,className:s.jumpButton,onClick:c,children:`New messages ↓`})]})}var u,d,f;function p(){return(p=e((()=>{u=t(),c(),d=n(),f=80,l.__docgenInfo={description:`MessageScroller — auto-scrolling chat container.

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
scrolling is unaffected.`,methods:[],displayName:`MessageScroller`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{p as n,l as t};