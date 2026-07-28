import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-CQafbFrs.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Slider-1Akuw9JL.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Slider`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Single-thumb range input. A native <input type="range"> under custom styling — arrow keys, Home/End, and touch-drag all come from the browser.`}}},args:{value:50,onChange:()=>{},min:0,max:100,"aria-label":`Value`}},l={render:e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onChange:n})}},u={render:e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,label:`Volume`,value:t,onChange:n})}},d={args:{value:0}},f={args:{value:100}},p={render:e=>{let[t,n]=(0,o.useState)(5);return(0,s.jsx)(a,{value:t,onChange:n,min:0,max:10,step:1,label:`Rating (0–10)`})}},m={args:{disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} value={value} onChange={setValue} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} label="Volume" value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [value, setValue] = useState(5);
    return <Slider value={value} onChange={setValue} min={0} max={10} step={1} label="Rating (0–10)" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithLabel`,`AtMin`,`AtMax`,`SteppedRange`,`Disabled`]}))();export{f as AtMax,d as AtMin,l as Default,m as Disabled,p as SteppedRange,u as WithLabel,h as __namedExportsOrder,c as default};