import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Input-Ck_qD4Re.js";import{n as i,t as a}from"./FormField-C6iqtJ7q.js";var o,s,c,l,u,d,f;e((()=>{i(),n(),o=t(),s={title:`Components/FormField`,component:a,parameters:{layout:`padded`}},c={args:{label:`Email address`,htmlFor:`email`,children:(0,o.jsx)(r,{id:`email`,type:`email`,placeholder:`you@example.com`})}},l={args:{label:`Username`,hint:`Letters, numbers, and underscores only.`,htmlFor:`username`,children:(0,o.jsx)(r,{id:`username`,placeholder:`your_username`})}},u={args:{label:`Password`,error:`Password must be at least 8 characters.`,htmlFor:`password`,children:(0,o.jsx)(r,{id:`password`,type:`password`})}},d={args:{label:`Full name`,required:!0,htmlFor:`name`,children:(0,o.jsx)(r,{id:`name`,placeholder:`Jane Smith`})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    htmlFor: 'email',
    children: <Input id="email" type="email" placeholder="you@example.com" />
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    hint: 'Letters, numbers, and underscores only.',
    htmlFor: 'username',
    children: <Input id="username" placeholder="your_username" />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters.',
    htmlFor: 'password',
    children: <Input id="password" type="password" />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full name',
    required: true,
    htmlFor: 'name',
    children: <Input id="name" placeholder="Jane Smith" />
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithHint`,`WithError`,`Required`]}))();export{c as Default,d as Required,u as WithError,l as WithHint,f as __namedExportsOrder,s as default};