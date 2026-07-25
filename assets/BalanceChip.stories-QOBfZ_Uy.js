import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./BalanceChip-Cha917ao.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/BalanceChip`,component:r,parameters:{layout:`centered`,docs:{description:{component:`Inline net-balance indicator — green when owed to them, red when they owe, neutral when settled. Not tied to expense-splitting specifically: any plugin tracking a signed balance between people can use it.`}}},args:{amountCents:2500,currency:`USD`}},o={args:{amountCents:2500,currency:`USD`}},s={args:{amountCents:-1350,currency:`USD`}},c={args:{amountCents:0,currency:`USD`}},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--sv-space-2)`},children:[(0,i.jsx)(r,{amountCents:2500,currency:`USD`}),(0,i.jsx)(r,{amountCents:-1350,currency:`USD`}),(0,i.jsx)(r,{amountCents:0,currency:`USD`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amountCents: 2500,
    currency: 'USD'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amountCents: -1350,
    currency: 'USD'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amountCents: 0,
    currency: 'USD'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--sv-space-2)'
  }}>
      <BalanceChip amountCents={2500} currency="USD" />
      <BalanceChip amountCents={-1350} currency="USD" />
      <BalanceChip amountCents={0} currency="USD" />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Owed`,`Owes`,`SettledUp`,`AllStates`]}))();export{l as AllStates,o as Owed,s as Owes,c as SettledUp,u as __namedExportsOrder,a as default};