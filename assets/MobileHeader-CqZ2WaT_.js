import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n,r,i,a,o,s,c=e((()=>{n=`_header_jqxrb_1`,r=`_brandGroup_jqxrb_25`,i=`_defaultLogo_jqxrb_34`,a=`_title_jqxrb_48`,o=`_right_jqxrb_57`,s={header:n,brandGroup:r,defaultLogo:i,title:a,right:o}}));function l(){return(0,d.jsx)(`span`,{className:s.defaultLogo,"aria-hidden":`true`,children:`S`})}function u({logo:e,title:t,bell:n,avatarMenu:r,className:i,...a}){return(0,d.jsxs)(`div`,{className:[s.header,i].filter(Boolean).join(` `),...a,children:[(0,d.jsxs)(`div`,{className:s.brandGroup,children:[e??(0,d.jsx)(l,{}),t&&(0,d.jsx)(`span`,{className:s.title,children:t})]}),(0,d.jsxs)(`div`,{className:s.right,children:[n,r]})]})}var d,f=e((()=>{c(),d=t(),u.__docgenInfo={description:`The mobile header bar: brand/logo (always shown), an optional contextual
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
enforces.`,methods:[],displayName:`MobileHeader`,props:{logo:{required:!1,tsType:{name:`ReactNode`},description:`The brand/logo element — already a complete, clickable link home (e.g. an
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
more than a bare bell icon here.`},avatarMenu:{required:!0,tsType:{name:`ReactNode`},description:`Avatar / account menu trigger — always rendered; not overridable.`}},composes:[`HTMLAttributes`]}}));export{f as n,u as t};