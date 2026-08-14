import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Combobox-D8D0hHvS.js";function o(){let[e,t]=(0,s.useState)(null);return(0,c.jsx)(`div`,{style:{width:280},children:(0,c.jsx)(a,{options:l,value:e,onChange:t,placeholder:`Select a plugin`,"aria-label":`Plugin`})})}var s,c,l,u,d,f,p,m;e((()=>{s=t(n(),1),i(),c=r(),l=[{value:`tasks`,label:`sovereign-tasks`},{value:`ledger`,label:`sovereign-ledger`},{value:`shopper`,label:`sovereign-shopper`},{value:`healthlog`,label:`sovereign-healthlog`},{value:`plainwrite`,label:`sovereign-plainwrite`}],u={title:`Components/Combobox`,component:a,parameters:{layout:`padded`,docs:{description:{component:`A searchable single-select: Popover on desktop, a bottom-sheet Drawer on mobile — the same adaptive pattern as Menu and DatePicker. For a short fixed list where search adds no value, use Select's native <select> instead.`}}},args:{options:l,value:null,onChange:()=>{},"aria-label":`Plugin`}},d={render:()=>(0,c.jsx)(o,{})},f={render:()=>{function e(){let[e,t]=(0,s.useState)(`ledger`);return(0,c.jsx)(`div`,{style:{width:280},children:(0,c.jsx)(a,{options:l,value:e,onChange:t,"aria-label":`Plugin`})})}return(0,c.jsx)(e,{})}},p={render:()=>(0,c.jsx)(`div`,{style:{width:280},children:(0,c.jsx)(a,{options:l,value:null,onChange:()=>{},placeholder:`Select a plugin`,"aria-label":`Plugin`,disabled:!0})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ComboboxDemo />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [value, setValue] = useState<string | null>('ledger');
      return <div style={{
        width: 280
      }}>
          <Combobox options={OPTIONS} value={value} onChange={setValue} aria-label="Plugin" />
        </div>;
    }
    return <Demo />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280
  }}>
      <Combobox options={OPTIONS} value={null} onChange={() => {}} placeholder="Select a plugin" aria-label="Plugin" disabled />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Preselected`,`Disabled`]}))();export{d as Default,p as Disabled,f as Preselected,m as __namedExportsOrder,u as default};