import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C1v9ttaf.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./usePublishShellChromeHeight-BYYJak8f.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=`_header_1jhix_1`,o=`_brandGroup_1jhix_38`,s=`_defaultLogo_1jhix_47`,c=`_title_1jhix_61`,l=`_right_1jhix_70`,u={header:a,brandGroup:o,defaultLogo:s,title:c,right:l}})))()}function f(){return(0,h.jsx)(`span`,{className:u.defaultLogo,"aria-hidden":`true`,children:`S`})}function p({logo:e,title:t,bell:n,avatarMenu:i,className:a,...o}){let s=(0,m.useRef)(null);r(s,`--sv-shell-header-height`);let c=[u.header,a].filter(Boolean).join(` `);return(0,h.jsxs)(`div`,{className:c,...o,ref:s,children:[(0,h.jsxs)(`div`,{className:u.brandGroup,children:[e??(0,h.jsx)(f,{}),t&&(0,h.jsx)(`span`,{className:u.title,children:t})]}),(0,h.jsxs)(`div`,{className:u.right,children:[n,i]})]})}var m,h;function g(){return(g=e((()=>{m=t(),i(),d(),h=n(),p.__docgenInfo={description:`The mobile header bar: brand/logo (always shown), an optional contextual
title, and a fixed bell + avatar-menu cluster. Owns its own chrome —
background, border-bottom, sticky positioning, safe-area-aware padding,
and a 768px max-width (so it never stretches full-bleed if mounted outside
an actual mobile viewport) — matching the runtime shell's own mobile
header exactly, since this component is meant to replace that hand-rolled
markup. Presentational only — no data fetching; the consumer supplies
\`bell\`/\`avatarMenu\` (and, optionally, \`logo\`) as already-wired components
(their own sizing — 36px logo/avatar, 44px bell tap target — is the
consumer's responsibility, matching the reference implementation in the
runtime shell). See RFC 0088 for the immutable/overridable boundary this
enforces.

Self-measures its own rendered height and publishes it as
\`--sv-shell-header-height\` on the shell root — see
\`usePublishShellChromeHeight\`'s own doc comment for why this exists (it's
what makes a self-rendered header, the \`shellConfig.mobileHeader: false\`
pattern, correctly position \`Dialog\`'s inset and any other consumer of
that variable instead of being overlapped by it).`,methods:[],displayName:`MobileHeader`,props:{logo:{required:!1,tsType:{name:`ReactNode`},description:`The brand/logo element — already a complete, clickable link home (e.g. an
instance logo wrapped in the consumer's own router \`Link\`). Always
rendered. \`MobileHeader\` stays router-agnostic, so this is provided
fully built rather than as a bare icon + href. Optional — omit it to get
a default "S" badge (matching the runtime shell's own fallback brand
icon when no instance logo is configured), sized and styled to the same
36px/radius-md convention a custom logo is expected to follow.`},title:{required:!1,tsType:{name:`string`},description:`Optional contextual title rendered beside the logo (e.g. the active
plugin's name). Absent by default — this is the one overridable part of
the header. See RFC 0088.`},bell:{required:!0,tsType:{name:`ReactNode`},description:`Notification bell — always rendered; not overridable.
TODO: this is just an icon slot today (the consumer wires up its own
click handler/content) — it doesn't yet accommodate a full notification
feature (unread badge, dropdown panel, etc. — see the runtime shell's
own NotificationBell). Deferred; revisit once a plugin actually needs
more than a bare bell icon here.`},avatarMenu:{required:!0,tsType:{name:`ReactNode`},description:`Avatar / account menu trigger — always rendered; not overridable.`}},composes:[`HTMLAttributes`]}})))()}export{g as n,p as t};