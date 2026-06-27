import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-B0-6cYMX.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Input-Ck_qD4Re.js";var o,s,c,l,u,d,f=e((()=>{o=`_field_rqjc6_1`,s=`_label_rqjc6_7`,c=`_required_rqjc6_13`,l=`_hint_rqjc6_18`,u=`_error_rqjc6_24`,d={field:o,label:s,required:c,hint:l,error:u}}));function p({label:e,hint:t,error:n,htmlFor:r,required:i=!1,children:a,className:o}){let s=(0,m.useId)(),c=(0,m.useId)(),l=[t&&s,n&&c].filter(Boolean).join(` `)||void 0;return(0,h.jsxs)(`div`,{className:[d.field,o].filter(Boolean).join(` `),children:[(0,h.jsxs)(`label`,{className:d.label,htmlFor:r,children:[e,i&&(0,h.jsx)(`span`,{className:d.required,"aria-hidden":`true`,children:`*`})]}),(0,h.jsx)(`div`,{"aria-describedby":l,children:a}),t&&!n&&(0,h.jsx)(`p`,{id:s,className:d.hint,children:t}),n&&(0,h.jsx)(`p`,{id:c,className:d.error,role:`alert`,children:n})]})}var m,h,g=e((()=>{m=t(n(),1),f(),h=r(),p.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{label:{required:!0,tsType:{name:`string`},description:``},hint:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},htmlFor:{required:!1,tsType:{name:`string`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),_,v,y,b,x,S,C;e((()=>{g(),i(),_=r(),v={title:`Components/FormField`,component:p,parameters:{layout:`padded`}},y={args:{label:`Email address`,htmlFor:`email`,children:(0,_.jsx)(a,{id:`email`,type:`email`,placeholder:`you@example.com`})}},b={args:{label:`Username`,hint:`Letters, numbers, and underscores only.`,htmlFor:`username`,children:(0,_.jsx)(a,{id:`username`,placeholder:`your_username`})}},x={args:{label:`Password`,error:`Password must be at least 8 characters.`,htmlFor:`password`,children:(0,_.jsx)(a,{id:`password`,type:`password`})}},S={args:{label:`Full name`,required:!0,htmlFor:`name`,children:(0,_.jsx)(a,{id:`name`,placeholder:`Jane Smith`})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    htmlFor: 'email',
    children: <Input id="email" type="email" placeholder="you@example.com" />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    hint: 'Letters, numbers, and underscores only.',
    htmlFor: 'username',
    children: <Input id="username" placeholder="your_username" />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters.',
    htmlFor: 'password',
    children: <Input id="password" type="password" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full name',
    required: true,
    htmlFor: 'name',
    children: <Input id="name" placeholder="Jane Smith" />
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithHint`,`WithError`,`Required`]}))();export{y as Default,S as Required,x as WithError,b as WithHint,C as __namedExportsOrder,v as default};