import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-CQafbFrs.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./FormField-CfxE7iBV.js";import{n as o,t as s}from"./RadioGroup-CWc2Noez.js";var c,l,u,d,f,p,m,h;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`Components/RadioGroup`,component:s,parameters:{layout:`padded`,docs:{description:{component:'Single-select list of options. Renders real `<input type="radio">` elements sharing one `name`, so keyboard arrow-key navigation between options is native browser behavior.'}}},args:{items:[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`}],value:`md`,onChange:()=>{},"aria-label":`Size`}},d={render:e=>{let[t,n]=(0,c.useState)(e.value);return(0,l.jsx)(s,{...e,value:t,onChange:n})}},f={render:e=>{let[t,n]=(0,c.useState)(e.value);return(0,l.jsx)(s,{...e,items:[...e.items,{label:`X-Large (out of stock)`,value:`xl`,disabled:!0}],value:t,onChange:n})}},p={args:{disabled:!0}},m={render:e=>{let[t,n]=(0,c.useState)(e.value);return(0,l.jsx)(a,{label:`Shirt size`,error:`Select a size to continue.`,children:r=>(0,l.jsx)(s,{...e,...r,value:t,onChange:n})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <RadioGroup {...args} items={[...args.items, {
      label: 'X-Large (out of stock)',
      value: 'xl',
      disabled: true
    }]} value={value} onChange={setValue} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <FormField label="Shirt size" error="Select a size to continue.">
        {field => <RadioGroup {...args} {...field} value={value} onChange={setValue} />}
      </FormField>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithDisabledItem`,`Disabled`,`InFormField`]}))();export{d as Default,p as Disabled,m as InFormField,f as WithDisabledItem,h as __namedExportsOrder,u as default};