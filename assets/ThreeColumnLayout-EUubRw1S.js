import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BSD6rMsc.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i,a,o,s,c,l,u=e((()=>{i=`_shell_14vc2_1`,a=`_sidebar_14vc2_7`,o=`_sidebarHidden_14vc2_19`,s=`_main_14vc2_23`,c=`_detail_14vc2_30`,l={shell:i,sidebar:a,sidebarHidden:o,main:s,detail:c}}));function d({children:e,sidebarWidth:t=280,detailWidth:n=360,sidebarHidden:r=!1,className:i}){let[a,o,s]=f.Children.toArray(e);return(0,p.jsxs)(`div`,{className:[l.shell,i].filter(Boolean).join(` `),children:[(0,p.jsx)(`div`,{className:[l.sidebar,r&&l.sidebarHidden].filter(Boolean).join(` `),style:r?void 0:{width:t},hidden:r,children:a}),(0,p.jsx)(`div`,{className:l.main,children:o}),s&&(0,p.jsx)(`div`,{className:l.detail,style:{width:n},children:s})]})}var f,p,m=e((()=>{f=t(n(),1),u(),p=r(),d.__docgenInfo={description:`ThreeColumnLayout — sidebar + main + optional detail column, for the
common "list app" shape (a list sidebar, a primary content list, and a
detail pane that only takes up space once something is selected).

Purely positional and structural — it has no awareness of what's inside
each slot (no injected landmarks/labels; those belong to the children
themselves) and no responsive behavior of its own. Collapsing further at
narrow desktop/tablet widths (e.g. swapping the detail column for an
overlay) is the consuming plugin's decision; below the mobile breakpoint,
compose with ResponsiveSurface to fork to a different tree entirely.`,methods:[],displayName:`ThreeColumnLayout`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Exactly 2 (sidebar, main) or 3 (sidebar, main, detail) elements. Omit
the third child entirely to render two columns — e.g.
\`{selected && <Detail />}\` — React.Children.toArray drops falsy
children, so no separate \`detail\` prop is needed to make that
conditional.`},sidebarWidth:{required:!1,tsType:{name:`number`},description:`px. Fixed width of the first (leftmost) column. Default 280.`,defaultValue:{value:`280`,computed:!1}},detailWidth:{required:!1,tsType:{name:`number`},description:`px. Fixed width of the third column, when present. Default 360.`,defaultValue:{value:`360`,computed:!1}},sidebarHidden:{required:!1,tsType:{name:`boolean`},description:`Hides the sidebar column entirely — no width, no border, no layout box
— while keeping it mounted and every sibling in its own stable position.

Prefer this over conditionally omitting the sidebar child, or swapping
to a different wrapper when collapsed. Omitting it shifts \`main\` into
the sidebar slot, and swapping the surrounding element type unmounts
\`main\`'s entire subtree — silently discarding its React state (a live
stream, unsent composer text, an in-memory-only conversation) on every
collapse toggle. Found live in Warden, whose chat column lost all of
that each time the sidebar was shown or hidden.`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{m as n,d as t};