import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./FormField-C_kxSvc2.js";import{n as i,t as a}from"./Input-C8k9l1_s.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),o=t(),s={title:`Components/FormField`,component:r,parameters:{layout:`padded`}},c={args:{label:`Email address`,id:`email`,children:e=>(0,o.jsx)(a,{...e,type:`email`,placeholder:`you@example.com`})}},l={args:{label:`Username`,hint:`Letters, numbers, and underscores only.`,id:`username`,children:e=>(0,o.jsx)(a,{...e,placeholder:`your_username`})}},u={args:{label:`Password`,error:`Password must be at least 8 characters.`,id:`password`,children:e=>(0,o.jsx)(a,{...e,type:`password`})}},d={args:{label:`Full name`,required:!0,id:`name`,children:e=>(0,o.jsx)(a,{...e,placeholder:`Jane Smith`})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    id: 'email',
    children: field => <Input {...field} type="email" placeholder="you@example.com" />
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    hint: 'Letters, numbers, and underscores only.',
    id: 'username',
    children: field => <Input {...field} placeholder="your_username" />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters.',
    id: 'password',
    children: field => <Input {...field} type="password" />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full name',
    required: true,
    id: 'name',
    children: field => <Input {...field} placeholder="Jane Smith" />
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithHint`,`WithError`,`Required`]}))();export{c as Default,d as Required,u as WithError,l as WithHint,f as __namedExportsOrder,s as default};