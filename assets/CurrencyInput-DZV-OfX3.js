import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-oZvRfAfF.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Input-QfnSxCiC.js";function a(e,t){return(e/10**t).toFixed(t)}function o(e,t){let n=e.trim();if(!n)return null;let r=Number(n);return Number.isFinite(r)?Math.round(r*10**t):null}function s({valueCents:e,onValueChange:t,decimals:n=2,...r}){let[s,u]=(0,c.useState)(()=>e==null?``:a(e,n));return o(s,n)!==e&&u(e==null?``:a(e,n)),(0,l.jsx)(i,{...r,type:`text`,inputMode:`decimal`,value:s,onChange:e=>{let r=e.currentTarget.value;u(r),t(o(r,n))}})}var c,l;function u(){return(u=e((()=>{c=t(),r(),l=n(),s.__docgenInfo={description:`CurrencyInput — decimal amount entry that reports its value as an integer
number of the currency's smallest units, matching Sovereign's "amounts are
always smallest-unit integers" data-model convention (never a float in
application state). \`decimals\` says how many of those units make one major
unit; it defaults to 2, so a caller that doesn't pass it gets cents.

Keeps its own text buffer rather than deriving display text from
\`valueCents\` on every keystroke — reformatting mid-type (e.g. "12." → the
trailing decimal point) would fight the user's cursor. It only
re-syncs from \`valueCents\` when the prop changes to something the current
text doesn't already represent (an external reset/prefill), so typing
remains uninterrupted while the parsed amount stays in lockstep with the
parent's state. Changing \`decimals\` re-syncs for the same reason: the same
text means a different integer once the exponent moves.`,methods:[],displayName:`CurrencyInput`,props:{valueCents:{required:!0,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:"Smallest currency unit — never a float. Null when the field is empty or unparsable.\n How many of these make one major unit is `decimals` (hundredths by default)."},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(cents: number | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},name:`cents`}],return:{name:`void`}}},description:``},decimals:{required:!1,tsType:{name:`number`},description:`Fraction digits the currency uses — the exponent relating \`valueCents\` to
the amount on screen (\`valueCents / 10 ** decimals\`). Defaults to \`2\`, so
every existing caller keeps its cents behaviour unchanged.

Not every currency is hundredths: ISO 4217 gives JPY and KRW zero digits
and several Gulf currencies three, and a consumer tracking BTC needs
eight (one satoshi is 1e-8 BTC — at two digits the smallest expressible
amount is 0.01 BTC, which is not a usable granularity for the asset).
Pass the currency's own exponent and \`valueCents\` stays an exact integer
in that currency's smallest unit, which is what keeps money out of
floating point everywhere else.`,defaultValue:{value:`2`,computed:!1}}},composes:[`Omit`]}})))()}export{u as n,s as t};