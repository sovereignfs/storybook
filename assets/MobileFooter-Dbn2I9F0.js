import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BSD6rMsc.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Icon-DN8eu8DN.js";import{n as o,t as s}from"./usePublishShellChromeHeight-C4vCcAWZ.js";var c,l,u,d,f,p,m=e((()=>{c=`_footer_11cld_1`,l=`_navItem_11cld_20`,u=`_navItemActive_11cld_48`,d=`_navItemApps_11cld_52`,f=`_navItemAppsOpen_11cld_56`,p={footer:c,navItem:l,navItemActive:u,navItemApps:d,navItemAppsOpen:f}}));function h({icon:e,label:t,href:n,onClick:r,active:i}){let a=[p.navItem,i?p.navItemActive:``].filter(Boolean).join(` `);return n?(0,v.jsx)(`a`,{href:n,className:a,"aria-label":t,"aria-current":i?`page`:void 0,children:e}):(0,v.jsx)(`button`,{type:`button`,className:a,"aria-label":t,onClick:r,children:e})}function g({onOpenApps:e,launcherIcon:t,launcherOpen:n,leftIcons:r,rightIcons:i,className:s,...c}){let l=(0,_.useRef)(null);o(l,`--sv-shell-footer-height`);let u=[p.footer,s].filter(Boolean).join(` `),d=[p.navItem,p.navItemApps,n?p.navItemAppsOpen:``].filter(Boolean).join(` `);return(0,v.jsxs)(`nav`,{...c,ref:l,className:u,"aria-label":`App navigation`,children:[r.map(e=>(0,v.jsx)(h,{...e},e.label)),(0,v.jsx)(`button`,{type:`button`,className:d,"aria-label":`Apps`,"aria-expanded":n,"aria-haspopup":`dialog`,onClick:e,children:t??(0,v.jsx)(a,{name:`grid-2x2`,size:`md`,"aria-hidden":!0})}),i.map(e=>(0,v.jsx)(h,{...e},e.label))]})}var _,v,y=e((()=>{_=t(n(),1),i(),s(),m(),v=r(),g.__docgenInfo={description:`The mobile footer bar: a centered, fixed "Apps" launcher flanked by 1 or 2
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
overlapped by them).`,methods:[],displayName:`MobileFooter`,props:{onOpenApps:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Opens the app drawer/launcher. Always rendered as the centered slot;
not overridable.`},launcherIcon:{required:!1,tsType:{name:`ReactNode`},description:`Custom launcher icon (e.g. a plugin-supplied image). Defaults to a
generic grid icon.`},launcherOpen:{required:!1,tsType:{name:`boolean`},description:`Whether the launcher's own drawer is currently open (applies the
pressed/active visual state).`},leftIcons:{required:!0,tsType:{name:`Array`,elements:[{name:`FooterIcon`}],raw:`FooterIcon[]`},description:`1 or 2 icons rendered to the left of the centered launcher.`},rightIcons:{required:!0,tsType:{name:`Array`,elements:[{name:`FooterIcon`}],raw:`FooterIcon[]`},description:`1 or 2 icons rendered to the right of the centered launcher. Must match
\`leftIcons.length\` — the launcher stays visually centered, so a mismatch
is flagged (dev-mode only, never thrown) rather than silently allowed.`}},composes:[`HTMLAttributes`]}}));export{y as n,g as t};