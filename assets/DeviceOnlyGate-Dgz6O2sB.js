import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./EmptyState-2xvoY1cD.js";function i({children:e,surfaceName:t,available:n,className:i}){return n?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)(r,{icon:`smartphone`,heading:`Phone only`,description:`${t??`This app`} is only available on a phone with secure storage set up.`,className:i})}var a,o=e((()=>{n(),a=t(),i.__docgenInfo={description:`DeviceOnlyGate — blocks a \`device-only\`-tier plugin's content from
rendering on a surface that cannot provide the durable, encrypted,
device-auth-gated store that tier requires, showing an explanatory empty
state instead of a broken screen (research 0012, epic tasks 2.33 + 3.36).

A \`device-only\` plugin wraps its own root content in this the same way
Console and Account wrap theirs in \`OfflineGate\` — an opt-in pattern each
surface applies to itself, not a platform-level route gate. The launcher
tile's own "Phone only" badge (\`useOfflineTileState\`) is advisory UI on top
of this; this component is the actual gate, since a user can always reach a
route directly (a bookmark, a deep link) without passing through the
launcher tile at all.

**Not a security boundary.** Availability here is a capability signal, not
an authorization check — the real protection for \`device-only\` data is
that it is encrypted and the key requires device auth to release (epic task
1.22), so it stays inaccessible regardless of whether this gate is present,
bypassed, or simply never reached (e.g. a hand-crafted request against the
plugin's own API routes).`,methods:[],displayName:`DeviceOnlyGate`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},surfaceName:{required:!1,tsType:{name:`string`},description:`Defaults to a generic "this app" phrasing — pass the plugin's own name.`},available:{required:!0,tsType:{name:`boolean`},description:"The caller's own `isDeviceOnlyTierAvailable()` result (from\n`@sovereignfs/sdk/device-client`) — taken as a plain boolean rather than\ncomputed inside this component, so `@sovereignfs/ui` never depends on\n`@sovereignfs/sdk` (this package must stay usable standalone, outside the\nplugin runtime — RFC 0073)."},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{o as n,i as t};