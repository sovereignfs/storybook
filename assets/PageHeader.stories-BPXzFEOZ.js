import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Button-DBRN-3RW.js";var i,a,o,s,c,l,u=e((()=>{i=`_header_1wzzi_1`,a=`_text_1wzzi_9`,o=`_title_1wzzi_16`,s=`_description_1wzzi_24`,c=`_action_1wzzi_30`,l={header:i,text:a,title:o,description:s,action:c}}));function d({title:e,description:t,action:n,className:r}){return(0,f.jsxs)(`header`,{className:[l.header,r].filter(Boolean).join(` `),children:[(0,f.jsxs)(`div`,{className:l.text,children:[(0,f.jsx)(`h1`,{className:l.title,children:e}),t&&(0,f.jsx)(`p`,{className:l.description,children:t})]}),n&&(0,f.jsx)(`div`,{className:l.action,children:n})]})}var f,p=e((()=>{u(),f=t(),d.__docgenInfo={description:``,methods:[],displayName:`PageHeader`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g,_,v,y;e((()=>{p(),n(),m=t(),h={title:`Components/PageHeader`,component:d,parameters:{layout:`padded`}},g={args:{title:`Users`}},_={args:{title:`Users`,description:`Manage who has access to this instance.`}},v={args:{title:`Users`,description:`Manage who has access to this instance.`,action:(0,m.jsx)(r,{size:`sm`,children:`Invite user`})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users',
    description: 'Manage who has access to this instance.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users',
    description: 'Manage who has access to this instance.',
    action: <Button size="sm">Invite user</Button>
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithDescription`,`WithAction`]}))();export{g as Default,v as WithAction,_ as WithDescription,y as __namedExportsOrder,h as default};