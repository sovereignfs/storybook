import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DIgLXUbX.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i,a,o,s,c,l,u=e((()=>{i=`_container_f2f84_1`,a=`_panel_f2f84_6`,o=`_right_f2f84_46`,s=`_left_f2f84_51`,c=`_upward_f2f84_59`,l={container:i,panel:a,"sv-popover-in":`_sv-popover-in_f2f84_1`,right:o,left:s,upward:c,"sv-popover-in-upward":`_sv-popover-in-upward_f2f84_1`}}));function d({trigger:e,open:t,onClose:n,align:r=`right`,width:i=288,panelStyle:a,"aria-label":o,children:s}){let c=(0,f.useRef)(null),u=(0,f.useRef)(null),[d,g]=(0,f.useState)(null),[_,v]=(0,f.useState)(!1),[y,b]=(0,f.useState)(null);return(0,f.useEffect)(()=>{if(i!==`trigger`)return;let e=c.current?.firstElementChild;if(!e)return;function t(){e&&g(e.getBoundingClientRect().width)}t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i]),(0,f.useLayoutEffect)(()=>{if(!t){v(!1),b(null);return}let e=c.current,n=u.current;if(!e||!n)return;let r=()=>{let t=e.getBoundingClientRect();return{panelHeight:n.getBoundingClientRect().height,spaceBelow:window.innerHeight-t.bottom-m-h,spaceAbove:t.top-m-h}},{panelHeight:i,spaceBelow:a,spaceAbove:o}=r();i>a&&i>o&&(e.scrollIntoView({block:`start`,behavior:`instant`}),{panelHeight:i,spaceBelow:a,spaceAbove:o}=r());let s=i>a&&o>a;v(s);let l=s?o:a;b(i>l?Math.max(l,0):null)},[t,s]),(0,f.useEffect)(()=>{if(!t)return;function e(e){c.current?.contains(e.target)||n()}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[t,n]),(0,f.useEffect)(()=>{if(!t)return;function e(e){e.key===`Escape`&&n()}return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[t,n]),(0,p.jsxs)(`div`,{ref:c,className:l.container,children:[e,t&&(0,p.jsx)(`div`,{ref:u,role:`dialog`,"aria-label":o,"aria-modal":!1,className:[l.panel,l[r],_?l.upward:``].filter(Boolean).join(` `),style:{width:i===`trigger`?d??void 0:i,maxHeight:y??void 0,...a},children:s})]})}var f,p,m,h,g=e((()=>{f=t(n(),1),u(),p=r(),m=8,h=4,d.__docgenInfo={description:`Popover — floating panel anchored to a trigger element, below it by
default.

Positioning is \`position: absolute\` inside a \`position: relative\` wrapper —
no floating-ui dependency. Supports left/right alignment against the trigger
edge, and automatically opens on whichever side (above or below the
trigger) has more room within the viewport.

If the panel doesn't fit on *either* side as the trigger currently sits —
common for a tall panel (e.g. a full calendar month) nested partway down a
long scrollable mobile sheet — the trigger's scrollable ancestor is
scrolled so the trigger sits at the top of it first, maximizing the room
available below, then the panel opens downward against that. This mirrors
how most mobile date pickers behave (scroll the page, not the picker) and
avoids the panel needing its own internal scroll in the vast majority of
cases. If it's still too tall even after that (a genuinely tiny viewport,
or an unusually tall panel), it's capped to whatever room actually exists
and scrolls internally as a last resort, rather than rendering past the
edge of the viewport with no way to reach the rest of it.

Closes on outside click or Escape. Does not trap focus (it is non-modal).`,methods:[],displayName:`Popover`,props:{trigger:{required:!0,tsType:{name:`ReactElement`},description:`The element that opens the popover — rendered as-is; caller wires its onClick.`},open:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Which edge of the trigger the panel aligns to. Default: 'right'.`,defaultValue:{value:`'right'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | 'trigger'`,elements:[{name:`number`},{name:`literal`,value:`'trigger'`}]},description:`Panel width in px, or \`'trigger'\` to match the trigger element's own
 rendered width exactly (e.g. a dropdown under a full-width form field,
 where a fixed pixel width would either overflow or leave a gap
 depending on viewport size). Default: 288.`,defaultValue:{value:`288`,computed:!1}},panelStyle:{required:!1,tsType:{name:`CSSProperties`},description:`Inline style overrides for the panel, merged after \`width\`. Escape hatch
for callers that need to override the panel's own chrome (e.g. no
rounded corners for a compact swatch picker) — inline styles always win
regardless of CSS module load order, unlike passing an extra className.`},"aria-label":{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}}));export{g as n,d as t};