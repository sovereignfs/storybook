import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Checkbox-ef-0CQlR.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Checkbox`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:e,onChange:t,label:`Task title`})}},u={render:()=>{let[e,t]=(0,o.useState)(!0);return(0,s.jsx)(a,{checked:e,onChange:t,label:`Already done`})}},d={name:`Strike-through on complete`,render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:e,onChange:t,label:`Click to complete`,strikeThrough:!0})}},f={render:()=>(0,s.jsx)(a,{checked:!1,onChange:()=>{},label:`Cannot interact`,disabled:!0})},p={render:()=>(0,s.jsx)(a,{checked:!0,onChange:()=>{},label:`Locked complete`,disabled:!0})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="Task title" />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Checkbox checked={checked} onChange={setChecked} label="Already done" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Strike-through on complete',
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="Click to complete" strikeThrough />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Checkbox checked={false} onChange={() => {}} label="Cannot interact" disabled />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Checkbox checked onChange={() => {}} label="Locked complete" disabled />
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Checked`,`WithStrikeThrough`,`Disabled`,`DisabledChecked`]}))();export{u as Checked,l as Default,f as Disabled,p as DisabledChecked,d as WithStrikeThrough,m as __namedExportsOrder,c as default};