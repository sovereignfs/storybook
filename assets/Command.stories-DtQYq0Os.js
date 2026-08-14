import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-CWJI07PX.js";import{n as o,t as s}from"./Command-SUOm50mD.js";function c(){let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(null);return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(a,{onClick:()=>t(!0),children:`Open command palette`}),n&&(0,u.jsxs)(`p`,{style:{marginTop:`var(--sv-space-3)`,fontSize:14,color:`var(--sv-color-text-muted)`},children:[`Last selected: `,n]}),(0,u.jsx)(s,{open:e,onClose:()=>t(!1),"aria-label":`Command palette`,items:[{id:`new`,label:`New conversation`,group:`Actions`,icon:`plus`,onSelect:()=>r(`New conversation`)},{id:`export`,label:`Export chat`,group:`Actions`,icon:`upload`,keywords:`download save`,onSelect:()=>r(`Export chat`)},{id:`profile`,label:`Go to profile`,group:`Navigation`,icon:`user`,onSelect:()=>r(`Go to profile`)},{id:`settings`,label:`Open settings`,group:`Navigation`,icon:`settings`,onSelect:()=>r(`Open settings`)}]})]})}var l,u,d,f,p,m;e((()=>{l=t(n(),1),o(),i(),u=r(),d={title:`Components/Command`,component:s,parameters:{layout:`padded`,docs:{description:{component:`⌘K-style command palette. Opened via Dialog, which supplies the modal shell — this adds the search input, substring filtering, and arrow-key/Enter selection on top of it. Controlled: the consumer owns the open state and any global shortcut listener that flips it.`}}},args:{open:!1,onClose:()=>{},items:[]}},f={render:()=>(0,u.jsx)(c,{})},p={render:()=>{function e(){let[e,t]=(0,l.useState)(!0);return(0,u.jsx)(s,{open:e,onClose:()=>t(!1),"aria-label":`Command palette`,placeholder:`Try typing something with no matches…`,items:[{id:`a`,label:`Alpha`,onSelect:()=>{}}]})}return(0,u.jsx)(e,{})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CommandDemo />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [open, setOpen] = useState(true);
      return <Command open={open} onClose={() => setOpen(false)} aria-label="Command palette" placeholder="Try typing something with no matches…" items={[{
        id: 'a',
        label: 'Alpha',
        onSelect: () => {}
      }]} />;
    }
    return <Demo />;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`OpenWithNoResults`]}))();export{f as Default,p as OpenWithNoResults,m as __namedExportsOrder,d as default};