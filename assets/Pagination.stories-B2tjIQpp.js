import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Pagination-_4sp5Loi.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Pagination`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Page-number / prev-next control. Shows first, last, and pages near the current one, with an ellipsis for gaps once the page count grows.`}}},args:{page:1,totalPages:5,onChange:()=>{}}},l={render:e=>{let[t,n]=(0,o.useState)(e.page);return(0,s.jsx)(a,{...e,page:t,totalPages:5,onChange:n})}},u={render:e=>{let[t,n]=(0,o.useState)(8);return(0,s.jsx)(a,{page:t,totalPages:40,onChange:n})}},d={args:{page:1,totalPages:10}},f={args:{page:10,totalPages:10}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(args.page);
    return <Pagination {...args} page={page} totalPages={5} onChange={setPage} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [page, setPage] = useState(8);
    return <Pagination page={page} totalPages={40} onChange={setPage} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 10
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    totalPages: 10
  }
}`,...f.parameters?.docs?.source}}},p=[`FewPages`,`ManyPagesWithEllipsis`,`FirstPage`,`LastPage`]}))();export{l as FewPages,d as FirstPage,f as LastPage,u as ManyPagesWithEllipsis,p as __namedExportsOrder,c as default};