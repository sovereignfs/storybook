import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./useSnapCarousel-CvQuPLJK.js";var o,s,c,l,u=e((()=>{o=`_dots_taoj8_1`,s=`_dot_taoj8_1`,c=`_dotActive_taoj8_41`,l={dots:o,dot:s,dotActive:c}}));function d({count:e,activeIndex:t,onJump:n,labels:r,"aria-label":i,className:a}){return(0,f.jsx)(`div`,{role:`tablist`,"aria-label":i,className:[l.dots,a].filter(Boolean).join(` `),children:Array.from({length:e},(i,a)=>{let o=a===t;return(0,f.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":o,"aria-label":r?.[a]??`Slide ${a+1} of ${e}`,className:[l.dot,o?l.dotActive:``].filter(Boolean).join(` `),onClick:()=>n(a)},a)})})}var f,p=e((()=>{u(),f=r(),d.__docgenInfo={description:`SwipableMobileCarouselDots — a real, tappable, labeled slide indicator.
Standalone (not carousel-only): reusable anywhere a set of positions needs
a dot indicator (e.g. an image gallery, an onboarding stepper), and is also
SwipableMobileCarousel's default \`renderIndicator\`.

Replaces the \`aria-hidden\`, non-interactive dots pattern both
sovereign-tasks and sovereign-shopper currently hand-roll — every dot here
is a real \`role="tab"\` button with its own accessible name, reachable by
keyboard. No roving tabIndex/arrow-key handling: \`Tabs\` (this library's
other \`role="tablist"\` component) has none either, so this stays
consistent with it rather than gold-plating past its sibling.`,methods:[],displayName:`SwipableMobileCarouselDots`,props:{count:{required:!0,tsType:{name:`number`},description:``},activeIndex:{required:!0,tsType:{name:`number`},description:``},onJump:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},labels:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`(string | undefined)[]`},description:`Per-dot accessible names, e.g. ["Lists", "Starred", "Groceries"]. Falls
 back to "Slide N of count" for any index without one.`},"aria-label":{required:!0,tsType:{name:`string`},description:`Labels the whole group — required, no generic fallback (mirrors
 SwipableMobileCarousel's own required aria-label).`},className:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g=e((()=>{m=t(n(),1),h=(0,m.createContext)(null)}));function _({children:e}){return(0,v.useContext)(h)?.isMounted?(0,y.jsx)(y.Fragment,{children:e}):null}var v,y,b=e((()=>{v=t(n(),1),g(),y=r(),_.__docgenInfo={description:`SwipableMobileCarouselSlide — a single slide of a SwipableMobileCarousel.
Renders its children only while within the carousel's mount window (the
active slide ± its configured prefetchDistance); outside that window it
renders nothing, matching both sovereign-tasks and sovereign-shopper's
existing "never fetch/render a non-neighbor slide" behavior, now
centralized instead of hand-rolled per plugin.`,methods:[],displayName:`SwipableMobileCarouselSlide`,props:{slideKey:{required:!0,tsType:{name:`string`},description:`Stable identity for this slide, independent of its position among
 siblings — required. This is what makes SwipableMobileCarousel's
 reorder-jump fix possible: a plain array index can't distinguish "this
 slide moved to position 2" from "this slide was removed and a
 different one is now at position 2." Reuse whatever id the caller
 already keys their \`.map()\` on (e.g. a list's own id).`},label:{required:!1,tsType:{name:`string`},description:`Accessible label surfaced to the default dots indicator (e.g.
 "Groceries"). Falls back to "Slide N of count" if omitted — omitting it
 logs a dev-mode warning, since every real slide usually has a title
 available synchronously already.`},children:{required:!0,tsType:{name:`ReactNode`},description:`SwipableMobileCarouselSlideHeader/Body/Footer, in any order/subset.`}}}})),x,S,C,w,T,E=e((()=>{x=`_wrap_cf57g_1`,S=`_scroller_cf57g_7`,C=`_slide_cf57g_27`,w=`_dots_cf57g_42`,T={wrap:x,scroller:S,slide:C,dots:w}}));function D(e){let t=[];return k.Children.forEach(e,(e,n)=>{if(e==null||e===!1||e===!0||!(0,k.isValidElement)(e)||e.type!==_)return;let r=e.props;t.push({key:r.slideKey,label:r.label,element:e})}),t}function O({activeIndex:e,onSettle:t,prefetchDistance:n=1,settleDebounceMs:r=120,"aria-label":a,renderIndicator:o,className:s,children:c}){let l=(0,k.useMemo)(()=>D(c),[c]),u=l.length,f=u===0?0:Math.max(0,Math.min(u-1,e)),{scrollRef:p,scrollToIndex:m}=i({itemCount:u,onSettle:t,debounceMs:r}),g=(0,k.useRef)(f);(0,k.useLayoutEffect)(()=>{m(g.current,`instant`)},[]);let _=(0,k.useRef)(!1);(0,k.useEffect)(()=>{if(!_.current){_.current=!0;return}m(f,`smooth`)},[f,m]);let v=(0,k.useRef)(null);(0,k.useLayoutEffect)(()=>{let e=l.map(e=>e.key),n=v.current;if(n&&!(n.length===e.length&&n.every((t,n)=>t===e[n]))){let r=n[f];if(r!==void 0){let n=e.indexOf(r);n!==-1&&n!==f&&(m(n,`instant`),t(n))}}v.current=e});function y(e){m(e,`smooth`),t(e)}let b=l.map(e=>e.label),x=o===null?null:o?o({count:u,activeIndex:f,labels:b,onJump:y}):(0,A.jsx)(d,{className:T.dots,count:u,activeIndex:f,labels:b,"aria-label":a,onJump:y});return(0,A.jsxs)(`div`,{className:[T.wrap,s].filter(Boolean).join(` `),children:[(0,A.jsx)(`div`,{className:T.scroller,ref:p,role:`region`,"aria-label":a,children:l.map((e,t)=>(0,A.jsx)(`div`,{className:T.slide,children:(0,A.jsx)(h.Provider,{value:{isMounted:Math.abs(t-f)<=n},children:e.element})},e.key))}),x]})}var k,A,j=e((()=>{k=t(n(),1),a(),p(),b(),g(),E(),A=r(),O.__docgenInfo={description:`SwipableMobileCarousel — a compound component for swiping between full-
width slides (each an independent route/view on mobile), wrapping
useSnapCarousel. This library's first compound component: every other
component here is flat/prop-based, but slide content is large, arbitrary,
per-plugin subtrees that need a header-known/body-loading split an
array-of-objects prop would only express with worse JSX ergonomics.

Owns rendering and mount-window mechanics only — it has no opinion on
where slide data lives. Do NOT: (a) aggregate cross-slide data inside a
SwipableMobileCarouselSlideBody (that recomputes on every slide render
regardless of which slide is active — belongs in the parent, which
already knows every slide exists); (b) mount a detail overlay (Sheet,
Dialog) inside a Slide's children — mount it as a sibling of
SwipableMobileCarousel instead, controlled by the same state that would
otherwise drive a routed page's overlay. sovereign-tasks' current
hand-rolled carousel does both and is measurably laggier than
sovereign-shopper's equivalent, which keeps its overlay in the routed pane.`,methods:[],displayName:`SwipableMobileCarousel`,props:{activeIndex:{required:!0,tsType:{name:`number`},description:`Controlled active slide index — the caller owns this (typically via
 useCarouselRouteSync, or plain useState).`},onSettle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when a swipe gesture settles on a different index, or when the
 reorder-jump fix re-snaps after the active slide's position changes.
 The caller is responsible for updating \`activeIndex\` in response.`},prefetchDistance:{required:!1,tsType:{name:`number`},description:`How many slides on each side of the active one stay mounted. Default 1
 matches both sovereign-tasks' and sovereign-shopper's existing "swipe
 never shows a spinner" behavior. Slides outside this window keep their
 DOM slot (so scroll-snap's position-based indexing stays correct) but
 their children are not mounted at all.`,defaultValue:{value:`1`,computed:!1}},settleDebounceMs:{required:!1,tsType:{name:`number`},description:`Passed straight through to the internal useSnapCarousel.`,defaultValue:{value:`120`,computed:!1}},"aria-label":{required:!0,tsType:{name:`string`},description:`Required — labels the scroller region for assistive tech. No generic
 fallback, since one would be wrong for every actual consumer.`},renderIndicator:{required:!1,tsType:{name:`union`,raw:`null | ((props: SwipableMobileCarouselIndicatorProps) => ReactNode)`,elements:[{name:`null`},{name:`unknown`}]},description:"Renders the indicator. Defaults to SwipableMobileCarouselDots. Pass\n `null` to render no indicator at all."},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`Must be SwipableMobileCarouselSlide elements (nullish/boolean children
 are safely skipped for conditional slides). A dev-mode warning is
 logged for any other child type — see resolveSlides below.`}}}})),M,N,P,F,I,L=e((()=>{M=`_header_1l8zq_1`,N=`_footer_1l8zq_2`,P=`_body_1l8zq_6`,F=`_loading_1l8zq_22`,I={header:M,footer:N,body:P,loading:F}}));function R({children:e,className:t}){return(0,z.jsx)(`div`,{className:[I.header,t].filter(Boolean).join(` `),children:e})}var z,B=e((()=>{L(),z=r(),R.__docgenInfo={description:`SwipableMobileCarouselSlideHeader — always renders its children, no
loading concept. Meant for content already known synchronously (a list's
title, color, item count from data the caller already has) so it can
render immediately even while SwipableMobileCarouselSlideBody's own
content is still loading — see that component's doc comment.`,methods:[],displayName:`SwipableMobileCarouselSlideHeader`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));function V({children:e,loading:t=!1,loadingFallback:n,className:r}){return(0,H.jsx)(`div`,{className:[I.body,r].filter(Boolean).join(` `),children:t?n??U:e})}var H,U,W=e((()=>{L(),H=r(),U=(0,H.jsx)(`div`,{className:I.loading,children:`Loading…`}),V.__docgenInfo={description:`SwipableMobileCarouselSlideBody — the scrollable region of a slide.

Deliberately does not set \`touch-action: pan-y\` on its scroll container
(see SwipableMobileCarouselSlideParts.module.css's \`.body\` rule) — that
would intersect-to-empty against the carousel's own horizontal
touch-action handling (docs/architecture-rules.md's touch-action
intersection rule), breaking both the vertical scroll here and the
horizontal swipe between slides.`,methods:[],displayName:`SwipableMobileCarouselSlideBody`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:`While true, renders \`loadingFallback\` INSTEAD OF children — scoped to
 just this region, not the whole slide. This is what fixes the
 "whole slide blanks out, title included, until its own fetch resolves"
 bug: a caller renders \`<SwipableMobileCarouselSlideHeader>\` from
 already-known metadata unconditionally, and gates only this component's
 \`loading\` on the slower fetch — the natural way to compose
 Header/Body/Footer as siblings already produces that behavior, instead
 of gating the entire slide behind one boolean.`,defaultValue:{value:`false`,computed:!1}},loadingFallback:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{I as a,j as c,d,p as f,B as i,_ as l,W as n,L as o,R as r,O as s,V as t,b as u};