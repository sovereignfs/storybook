import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./useIsOffline-DQnxkdn1.js";import{n as i,t as a}from"./EmptyState-2xvoY1cD.js";function o({children:e,surfaceName:t,className:r}){return n()?(0,s.jsx)(a,{icon:`alert-triangle`,heading:`You're offline`,description:`${t??`This section`} needs a connection — reconnect to continue.`,className:r}):(0,s.jsx)(s.Fragment,{children:e})}var s,c=e((()=>{r(),i(),s=t(),o.__docgenInfo={description:`OfflineGate — blocks administrative/settings surfaces from rendering
(possibly stale) cached content while the device has no network, showing an
explanatory empty state instead (research 0012, epic task 2.32).

Distinct from \`OfflineBanner\`: the banner is an informational overlay that
coexists with normal content everywhere in the shell. This is a hard block
for surfaces where operating against stale data is actively wrong — e.g. a
Console user list or an Account billing page reflects a point-in-time
snapshot the moment it's server-rendered, and any cached copy replayed
later has no way to signal that it may already be stale. \`OfflineGate\`
doesn't try to tell staleness apart from freshness; it removes the
question by not rendering the content at all while offline.

\`children\` is rendered unconditionally while online, so this adds no cost
to the common case — it only decides what to show, never how the wrapped
content itself is fetched or cached.`,methods:[],displayName:`OfflineGate`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},surfaceName:{required:!1,tsType:{name:`string`},description:`Defaults to a generic "this section" phrasing — pass the surface's own name.`},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{c as n,o as t};