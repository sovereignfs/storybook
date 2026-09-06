import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BSD6rMsc.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Input-XSxmvFU8.js";function o(e){return(e/100).toFixed(2)}function s(e){let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?Math.round(n*100):null}function c({valueCents:e,onValueChange:t,...n}){let[r,i]=(0,l.useState)(()=>e==null?``:o(e));return s(r)!==e&&i(e==null?``:o(e)),(0,u.jsx)(a,{...n,type:`text`,inputMode:`decimal`,value:r,onChange:e=>{let n=e.currentTarget.value;i(n),t(s(n))}})}var l,u,d=e((()=>{l=t(n(),1),i(),u=r(),c.__docgenInfo={description:`CurrencyInput — decimal amount entry that reports its value as integer
cents, matching Sovereign's "amounts are always smallest-unit integers"
data-model convention (never a float in application state).

Keeps its own text buffer rather than deriving display text from
\`valueCents\` on every keystroke — reformatting mid-type (e.g. "12." → the
trailing decimal point) would fight the user's cursor. It only
re-syncs from \`valueCents\` when the prop changes to something the current
text doesn't already represent (an external reset/prefill), so typing
remains uninterrupted while the parsed amount stays in lockstep with the
parent's state.`,methods:[],displayName:`CurrencyInput`,props:{valueCents:{required:!0,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:`Smallest currency unit (cents) — never a float. Null when the field is empty or unparsable.`},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(cents: number | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},name:`cents`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}}));export{d as n,c as t};