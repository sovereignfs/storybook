import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-CQafbFrs.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-CWJI07PX.js";import{n as o,t as s}from"./ButtonGroup-COs4aABv.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`Components/ButtonGroup`,component:s,parameters:{layout:`padded`},args:{children:null}},d={render:()=>(0,l.jsxs)(s,{"aria-label":`View`,children:[(0,l.jsx)(a,{variant:`secondary`,size:`sm`,children:`Day`}),(0,l.jsx)(a,{variant:`secondary`,size:`sm`,children:`Week`}),(0,l.jsx)(a,{variant:`secondary`,size:`sm`,children:`Month`})]})},f={render:()=>{let[e,t]=(0,c.useState)(`week`);return(0,l.jsx)(s,{"aria-label":`View`,children:[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`month`,label:`Month`}].map(n=>(0,l.jsx)(a,{variant:n.value===e?`primary`:`secondary`,size:`sm`,onClick:()=>t(n.value),children:n.label},n.value))})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup aria-label="View">
      <Button variant="secondary" size="sm">
        Day
      </Button>
      <Button variant="secondary" size="sm">
        Week
      </Button>
      <Button variant="secondary" size="sm">
        Month
      </Button>
    </ButtonGroup>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<'day' | 'week' | 'month'>('week');
    const options: {
      value: typeof view;
      label: string;
    }[] = [{
      value: 'day',
      label: 'Day'
    }, {
      value: 'week',
      label: 'Week'
    }, {
      value: 'month',
      label: 'Month'
    }];
    return <ButtonGroup aria-label="View">
        {options.map(option => <Button key={option.value} variant={option.value === view ? 'primary' : 'secondary'} size="sm" onClick={() => setView(option.value)}>
            {option.label}
          </Button>)}
      </ButtonGroup>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithActiveSelection`]}))();export{d as Default,f as WithActiveSelection,p as __namedExportsOrder,u as default};