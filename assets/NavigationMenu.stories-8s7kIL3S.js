import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./NavigationMenu-BzFTe-pN.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={title:`Components/NavigationMenu`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Top-level nav bar where some items open a flyout panel. Desktop-oriented by design — a hover-triggered flyout bar has no mobile equivalent. Once one flyout is open, hovering a sibling switches directly to it; ArrowLeft/ArrowRight move focus between triggers.`}}},args:{"aria-label":`Main`}},o=({links:e})=>(0,i.jsx)(`div`,{style:{padding:`var(--sv-space-3)`,display:`flex`,flexDirection:`column`,gap:4},children:e.map(e=>(0,i.jsx)(`a`,{href:`/${e.toLowerCase().replace(/\s+/g,`-`)}`,style:{fontSize:14,color:`var(--sv-color-text-primary)`,textDecoration:`none`,padding:`var(--sv-space-1) var(--sv-space-2)`},children:e},e))}),s={args:{items:[{label:`Home`,href:`/home`},{label:`Products`,content:(0,i.jsx)(o,{links:[`Tasks`,`Ledger`,`Shopper`,`Wallet`]})},{label:`Company`,content:(0,i.jsx)(o,{links:[`About`,`Blog`,`Careers`]})},{label:`Docs`,href:`/docs`}]}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/home'
    }, {
      label: 'Products',
      content: <FlyoutContent links={['Tasks', 'Ledger', 'Shopper', 'Wallet']} />
    }, {
      label: 'Company',
      content: <FlyoutContent links={['About', 'Blog', 'Careers']} />
    }, {
      label: 'Docs',
      href: '/docs'
    }]
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,a as default};