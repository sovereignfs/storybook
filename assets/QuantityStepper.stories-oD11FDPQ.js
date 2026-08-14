import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./QuantityStepper-D3iNjc0h.js";function o({initial:e=1,step:t=1,min:n=0,max:r,unit:i}){let[o,l]=(0,s.useState)(e);return(0,c.jsx)(a,{value:o,onChange:l,step:t,min:n,max:r,unit:i,"aria-label":`Quantity`})}var s,c,l,u,d,f,p,m,h,g;e((()=>{s=t(n(),1),i(),c=r(),l={title:`Components/QuantityStepper`,component:a,parameters:{layout:`padded`,docs:{description:{component:`A numeric input with +/- buttons and an optional read-only unit suffix. Supports fractional step values for quantities like "1.5 kg".`}}},args:{value:1,onChange:()=>{},"aria-label":`Quantity`}},u={render:()=>(0,c.jsx)(o,{initial:1})},d={render:()=>(0,c.jsx)(o,{initial:6,unit:`pcs`})},f={name:`Fractional step (0.5 kg)`,render:()=>(0,c.jsx)(o,{initial:1.5,step:.5,unit:`kg`})},p={render:()=>(0,c.jsx)(o,{initial:0,min:0,unit:`pcs`})},m={render:()=>(0,c.jsx)(o,{initial:9,max:10,unit:`pcs`})},h={render:()=>(0,c.jsx)(a,{value:3,onChange:()=>{},unit:`pcs`,"aria-label":`Quantity`,disabled:!0})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledStepper initial={1} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledStepper initial={6} unit="pcs" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Fractional step (0.5 kg)',
  render: () => <ControlledStepper initial={1.5} step={0.5} unit="kg" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledStepper initial={0} min={0} unit="pcs" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledStepper initial={9} max={10} unit="pcs" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <QuantityStepper value={3} onChange={() => {}} unit="pcs" aria-label="Quantity" disabled />
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithUnit`,`FractionalStep`,`AtMinimum`,`WithMax`,`Disabled`]}))();export{p as AtMinimum,u as Default,h as Disabled,f as FractionalStep,m as WithMax,d as WithUnit,g as __namedExportsOrder,l as default};