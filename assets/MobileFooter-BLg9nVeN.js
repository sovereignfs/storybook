import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-oZvRfAfF.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Icon-C9m9CoYx.js";import{n as a,t as o}from"./usePublishShellChromeHeight-CZrrWfXs.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=`_footer_6i2s4_1`,c=`_navItem_6i2s4_20`,l=`_navItemActive_6i2s4_48`,u=`_navItemApps_6i2s4_52`,d=`_navItemAppsOpen_6i2s4_56`,f={footer:s,navItem:c,navItemActive:l,navItemApps:u,navItemAppsOpen:d}})))()}function m({icon:e,label:t,href:n,onClick:r,active:i}){let a=[f.navItem,i?f.navItemActive:``].filter(Boolean).join(` `);return n?(0,_.jsx)(`a`,{href:n,className:a,"aria-label":t,"aria-current":i?`page`:void 0,children:e}):(0,_.jsx)(`button`,{type:`button`,className:a,"aria-label":t,onClick:r,children:e})}function h({onOpenApps:e,launcherIcon:t,launcherLabel:n=`Apps`,launcherOpen:r,leftIcons:o,rightIcons:s,className:c,...l}){let u=(0,g.useRef)(null);a(u,`--sv-shell-footer-height`);let d=[f.footer,c].filter(Boolean).join(` `),p=[f.navItem,f.navItemApps,r?f.navItemAppsOpen:``].filter(Boolean).join(` `);return(0,_.jsxs)(`nav`,{...l,ref:u,className:d,"aria-label":`App navigation`,children:[o.map(e=>(0,_.jsx)(m,{...e},e.label)),(0,_.jsx)(`button`,{type:`button`,className:p,"aria-label":n,"aria-expanded":r,"aria-haspopup":`dialog`,onClick:e,children:t??(0,_.jsx)(i,{name:`grid-2x2`,size:`md`,"aria-hidden":!0})}),s.map(e=>(0,_.jsx)(m,{...e},e.label))]})}var g,_;function v(){return(v=e((()=>{g=t(),r(),o(),p(),_=n(),h.__docgenInfo={description:`The mobile footer bar: a centered, fixed "Apps" launcher flanked by 1 or 2
overridable icons on each side (3 or 5 total, matching standard
iOS/Android bottom-nav conventions). Owns its own chrome — background,
border-top, safe-area-aware bottom padding, and a 768px max-width (so it
never stretches full-bleed if mounted outside an actual mobile viewport)
— matching the runtime shell's own mobile footer (MobileNav) exactly,
since this component is meant to replace that hand-rolled markup.
Presentational only — no data fetching; the consumer owns the
drawer/overlay \`onOpenApps\` opens. See RFC 0088 for the
immutable/overridable boundary this enforces.

Self-measures its own rendered height and publishes it as
\`--sv-shell-footer-height\` on the shell root — see
\`usePublishShellChromeHeight\`'s own doc comment for why this exists (it's
what makes a self-rendered footer, the \`shellConfig.mobileFooter: false\`
pattern, correctly clear \`Sheet\`/\`Drawer\`/\`Dialog\` instead of being
overlapped by them).`,methods:[],displayName:`MobileFooter`,props:{onOpenApps:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Opens what the centered button opens: the apps by default, or what `launcherLabel` names (an app's own drawer).\nAlways rendered as the centered slot."},launcherLabel:{required:!1,tsType:{name:`string`},description:`The centered button's name, read by assistive technology: "Apps" when not given. An app whose middle button opens
something of its own (its lists, say) names it here, with \`launcherIcon\` to match.`,defaultValue:{value:`'Apps'`,computed:!1}},launcherIcon:{required:!1,tsType:{name:`ReactNode`},description:`Custom launcher icon (e.g. a plugin-supplied image). Defaults to a
generic grid icon.`},launcherOpen:{required:!1,tsType:{name:`boolean`},description:`Whether the launcher's own drawer is currently open (applies the
pressed/active visual state).`},leftIcons:{required:!0,tsType:{name:`Array`,elements:[{name:`FooterIcon`}],raw:`FooterIcon[]`},description:`1 or 2 icons rendered to the left of the centered launcher.`},rightIcons:{required:!0,tsType:{name:`Array`,elements:[{name:`FooterIcon`}],raw:`FooterIcon[]`},description:`1 or 2 icons rendered to the right of the centered launcher. Must match
\`leftIcons.length\` — the launcher stays visually centered, so a mismatch
is flagged (dev-mode only, never thrown) rather than silently allowed.`}},composes:[`HTMLAttributes`]}})))()}export{v as n,h as t};