import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./DeviceStorageKeyGate-B2ZS02-1.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a=(0,i.jsx)(`div`,{style:{padding:`var(--sv-space-4)`},children:(0,i.jsx)(`p`,{style:{margin:0,fontFamily:`var(--sv-font-family)`},children:"The wrapped content — a notes list, a health log, anything a `device-only` plugin keeps entirely on-device."})}),o=(0,i.jsx)(`a`,{href:`/account/security`,style:{color:`var(--sv-color-accent)`},children:`Go to Account → Security`}),s={title:`Components/DeviceStorageKeyGate`,component:r,parameters:{layout:`padded`}},c={args:{children:a,status:`set-up`,surfaceName:`Notes`}},l={args:{children:a,status:`not-set-up`,surfaceName:`Notes`,setupAction:o}},u={args:{children:a,status:`not-set-up`,setupAction:o}},d={args:{children:a,status:`unsupported`,surfaceName:`Notes`}},f={args:{children:a,status:`no-device-auth`,surfaceName:`Notes`}},p={args:{children:a,status:`checking`,surfaceName:`Notes`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleContent,
    status: 'set-up',
    surfaceName: 'Notes'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleContent,
    status: 'not-set-up',
    surfaceName: 'Notes',
    setupAction
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleContent,
    status: 'not-set-up',
    setupAction
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleContent,
    status: 'unsupported',
    surfaceName: 'Notes'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleContent,
    status: 'no-device-auth',
    surfaceName: 'Notes'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleContent,
    status: 'checking',
    surfaceName: 'Notes'
  }
}`,...p.parameters?.docs?.source}}},m=[`SetUp`,`NotSetUp`,`NotSetUpGenericPhrasing`,`Unsupported`,`NoDeviceAuth`,`Checking`]}))();export{p as Checking,f as NoDeviceAuth,l as NotSetUp,u as NotSetUpGenericPhrasing,c as SetUp,d as Unsupported,m as __namedExportsOrder,s as default};