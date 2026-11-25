import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-oZvRfAfF.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./useSnapCarousel-Dp0oiitS.js";import{n as a,t as o}from"./SwipableMobileCarouselDots-Bs2x7xXF.js";var s,c;function l(){return(l=e((()=>{s=t(),c=(0,s.createContext)(null)})))()}function u({children:e}){return(0,d.useContext)(c)?.isMounted?(0,f.jsx)(f.Fragment,{children:e}):null}var d,f;function p(){return(p=e((()=>{d=t(),l(),f=n(),u.__docgenInfo={description:`SwipableMobileCarouselSlide — a single slide of a SwipableMobileCarousel.
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
 available synchronously already.`},children:{required:!0,tsType:{name:`ReactNode`},description:`SwipableMobileCarouselSlideHeader/Body/Footer, in any order/subset.`}}}})))()}var m,h,g,_,v;function y(){return(y=e((()=>{m=`_wrap_toa2s_1`,h=`_scroller_toa2s_7`,g=`_slide_toa2s_27`,_=`_indicatorSlot_toa2s_42`,v={wrap:m,scroller:h,slide:g,indicatorSlot:_}})))()}function b(e){let t=[];return S.Children.forEach(e,(e,n)=>{if(e==null||e===!1||e===!0||!(0,S.isValidElement)(e)||e.type!==u)return;let r=e.props;t.push({key:r.slideKey,label:r.label,element:e})}),t}function x({activeIndex:e,onSettle:t,prefetchDistance:n=1,settleDebounceMs:i=120,"aria-label":a,renderIndicator:s,className:l,children:u}){let d=(0,S.useMemo)(()=>b(u),[u]),f=d.length,p=f===0?0:Math.max(0,Math.min(f-1,e)),m=(0,S.useRef)(p),{scrollRef:h,scrollToIndex:g,liveIndex:_}=r({itemCount:f,onSettle:t,debounceMs:i,initialIndex:m.current});(0,S.useLayoutEffect)(()=>{g(m.current,`instant`)},[]);let y=(0,S.useRef)(!1);(0,S.useEffect)(()=>{y.current?g(p,`smooth`):y.current=!0},[p,g]);let x=(0,S.useRef)(null);(0,S.useLayoutEffect)(()=>{let e=d.map(e=>e.key),n=x.current;if(n&&!(n.length===e.length&&n.every((t,n)=>t===e[n]))){let r=n[p];if(r!==void 0){let n=e.indexOf(r);n!==-1&&n!==p&&(g(n,`instant`),t(n))}}x.current=e});function w(e){g(e,`smooth`),t(e)}let T=d.map(e=>e.label),E=s===null?null:s?s({count:f,activeIndex:p,labels:T,onJump:w}):(0,C.jsx)(o,{count:f,activeIndex:p,labels:T,"aria-label":a,onJump:w});return(0,C.jsxs)(`div`,{className:[v.wrap,l].filter(Boolean).join(` `),children:[(0,C.jsx)(`div`,{className:v.scroller,ref:h,role:`region`,"aria-label":a,children:d.map((e,t)=>(0,C.jsx)(`div`,{className:v.slide,children:(0,C.jsx)(c.Provider,{value:{isMounted:Math.abs(t-p)<=n||Math.abs(t-_)<=n},children:e.element})},e.key))}),E&&(0,C.jsx)(`div`,{className:v.indicatorSlot,children:E})]})}var S,C;function w(){return(w=e((()=>{S=t(),i(),a(),p(),l(),y(),C=n(),x.__docgenInfo={description:`SwipableMobileCarousel — a compound component for swiping between full-
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
 logged for any other child type — see resolveSlides below.`}}}})))()}var T,E,D,O,k;function A(){return(A=e((()=>{T=`_header_1l8zq_1`,E=`_footer_1l8zq_2`,D=`_body_1l8zq_6`,O=`_loading_1l8zq_22`,k={header:T,footer:E,body:D,loading:O}})))()}function j({children:e,className:t}){return(0,M.jsx)(`div`,{className:[k.header,t].filter(Boolean).join(` `),children:e})}var M;function N(){return(N=e((()=>{A(),M=n(),j.__docgenInfo={description:`SwipableMobileCarouselSlideHeader — always renders its children, no
loading concept. Meant for content already known synchronously (a list's
title, color, item count from data the caller already has) so it can
render immediately even while SwipableMobileCarouselSlideBody's own
content is still loading — see that component's doc comment.`,methods:[],displayName:`SwipableMobileCarouselSlideHeader`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function P({children:e,loading:t=!1,loadingFallback:n,className:r}){return(0,F.jsx)(`div`,{className:[k.body,r].filter(Boolean).join(` `),children:t?n??I:e})}var F,I;function L(){return(L=e((()=>{A(),F=n(),I=(0,F.jsx)(`div`,{className:k.loading,children:`Loading…`}),P.__docgenInfo={description:`SwipableMobileCarouselSlideBody — the scrollable region of a slide.

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
 of gating the entire slide behind one boolean.`,defaultValue:{value:`false`,computed:!1}},loadingFallback:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{k as a,w as c,N as i,u as l,L as n,A as o,j as r,x as s,P as t,p as u};