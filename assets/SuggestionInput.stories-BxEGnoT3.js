import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-CQafbFrs.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./SuggestionInput-CnmgVHlO.js";function o({withCreateRow:e=!0}){let[t,n]=(0,s.useState)(``),[r,i]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{style:{width:320},children:[(0,c.jsx)(a,{value:t,onChange:n,options:(0,s.useMemo)(()=>t.trim()?u.filter(e=>e.label.toLowerCase().includes(t.trim().toLowerCase())):[],[t]),onSelect:e=>{i(e.label),n(``)},placeholder:`Add an item…`,"aria-label":`Add an item`,createLabel:e?e=>`Add "${e}" as a new item`:void 0,onCreate:e?e=>{i(e),n(``)}:void 0}),r&&(0,c.jsxs)(`p`,{style:{marginTop:12,fontSize:13},children:[`Added: `,r]})]})}var s,c,l,u,d,f,p,m,h,g,_;e((()=>{s=t(n(),1),i(),c=r(),l={title:`Components/SuggestionInput`,component:a,parameters:{layout:`padded`,docs:{description:{component:`A text field with an anchored, keyboard-navigable list of async suggestions, plus an optional trailing "create new" row so free text is always a valid commit.`}}},args:{value:``,onChange:()=>{},options:[],onSelect:()=>{},"aria-label":`Add an item`}},u=[{id:`1`,label:`Bananas`,icon:`🍌`,meta:`bought 4× recently`},{id:`2`,label:`Banana bread mix`,icon:`🍞`},{id:`3`,label:`Milk`,icon:`🥛`},{id:`4`,label:`Eggs`,icon:`🥚`},{id:`5`,label:`Olive oil`,icon:`🫒`}],d={render:()=>(0,c.jsx)(o,{})},f={name:`Without create row (matched options only)`,render:()=>(0,c.jsx)(o,{withCreateRow:!1})},p={render:()=>(0,c.jsx)(`div`,{style:{width:320},children:(0,c.jsx)(a,{value:`ban`,onChange:()=>{},options:u.slice(0,2),onSelect:()=>{},"aria-label":`Add an item`,createLabel:e=>`Add "${e}" as a new item`,onCreate:()=>{}})})},m={render:()=>(0,c.jsx)(`div`,{style:{width:320},children:(0,c.jsx)(a,{value:`ban`,onChange:()=>{},options:[],onSelect:()=>{},loading:!0,"aria-label":`Add an item`})})},h={name:`Empty (no matches, no create row)`,render:()=>(0,c.jsx)(`div`,{style:{width:320},children:(0,c.jsx)(a,{value:`xyz`,onChange:()=>{},options:[],onSelect:()=>{},"aria-label":`Add an item`})})},g={render:()=>(0,c.jsx)(`div`,{style:{width:320},children:(0,c.jsx)(a,{value:``,onChange:()=>{},options:[],onSelect:()=>{},disabled:!0,placeholder:`Add an item…`,"aria-label":`Add an item`})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSuggestionInput />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Without create row (matched options only)',
  render: () => <ControlledSuggestionInput withCreateRow={false} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <SuggestionInput value="ban" onChange={() => {}} options={CATALOG.slice(0, 2)} onSelect={() => {}} aria-label="Add an item" createLabel={v => \`Add "\${v}" as a new item\`} onCreate={() => {}} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <SuggestionInput value="ban" onChange={() => {}} options={[]} onSelect={() => {}} loading aria-label="Add an item" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Empty (no matches, no create row)',
  render: () => <div style={{
    width: 320
  }}>
      <SuggestionInput value="xyz" onChange={() => {}} options={[]} onSelect={() => {}} aria-label="Add an item" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <SuggestionInput value="" onChange={() => {}} options={[]} onSelect={() => {}} disabled placeholder="Add an item…" aria-label="Add an item" />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`NoCreateRow`,`OpenWithOptions`,`Loading`,`Empty`,`Disabled`]}))();export{d as Default,g as Disabled,h as Empty,m as Loading,f as NoCreateRow,p as OpenWithOptions,_ as __namedExportsOrder,l as default};