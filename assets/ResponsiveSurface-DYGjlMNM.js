import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./useResponsiveLayout-DmQcP7_0.js";function i({web:e,mobile:t,breakpointPx:r}){let{value:i}=n({web:e,mobile:t,breakpointPx:r});return(0,a.jsx)(a.Fragment,{children:i})}var a,o=e((()=>{r(),a=t(),i.__docgenInfo={description:`ResponsiveSurface — thin JSX convenience wrapper around
\`useResponsiveLayout\` for the common two-tree case: render an entirely
different component tree below the breakpoint, not a CSS squeeze of the
same one. Renders only whichever side is active — the other tree is never
mounted.

This does not replace a plugin's own shell component (e.g. a
\`MobileAwareShell\` that also threads plugin-specific props like a refresh
signal) — those stay a thin per-plugin wrapper around this.`,methods:[],displayName:`ResponsiveSurface`,props:{web:{required:!0,tsType:{name:`ReactNode`},description:``},mobile:{required:!0,tsType:{name:`ReactNode`},description:``},breakpointPx:{required:!1,tsType:{name:`number`},description:``}}}}));export{o as n,i as t};