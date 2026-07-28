import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Marker-D2-PQUZm.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/Marker`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Inline citation/reference marker, for attributing part of an assistant answer to a source (Sovereign Harness "source trace").`}}},args:{index:1,label:`Source: Notes`}},o={},s={args:{onClick:()=>{}}},c={render:()=>(0,i.jsxs)(`p`,{style:{fontSize:14,maxWidth:400},children:[`Your next task deadline is Thursday`,(0,i.jsx)(r,{index:1,label:`Source: Tasks`,onClick:()=>{}}),`, and you have two unread messages from the team`,(0,i.jsx)(r,{index:2,label:`Source: Notes`,onClick:()=>{}}),`.`]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => {}
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    fontSize: 14,
    maxWidth: 400
  }}>
      Your next task deadline is Thursday
      <Marker index={1} label="Source: Tasks" onClick={() => {}} />, and you have two unread
      messages from the team
      <Marker index={2} label="Source: Notes" onClick={() => {}} />.
    </p>
}`,...c.parameters?.docs?.source}}},l=[`Static`,`Clickable`,`InContext`]}))();export{s as Clickable,c as InContext,o as Static,l as __namedExportsOrder,a as default};