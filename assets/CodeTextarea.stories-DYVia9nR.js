import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./CodeTextarea-CgrlcCdR.js";import{n as i,t as a}from"./FormField-CfxE7iBV.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i(),o=t(),s=`---
title: Editorial calendar
tags:
  - planning
  - launch
---

# Launch notes

Draft the announcement and verify links before publishing.`,c={title:`Components/CodeTextarea`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Monospace textarea for Markdown, YAML, JSON, and other whitespace-sensitive content.`}}},args:{defaultValue:s,"aria-label":`Markdown source`}},l={},u={render:()=>(0,o.jsx)(a,{label:`Frontmatter`,hint:`YAML is saved exactly as typed.`,id:`frontmatter-source`,children:e=>(0,o.jsx)(r,{...e,defaultValue:s})})},d={render:()=>(0,o.jsx)(a,{label:`Raw YAML`,error:`Line 3: expected a value.`,id:`yaml-source`,children:e=>(0,o.jsx)(r,{...e,invalid:!0,defaultValue:`title:
tags:
  -`})})},f={args:{disabled:!0,defaultValue:s}},p={args:{defaultValue:Array.from({length:24},(e,t)=>`- item-${t+1}: pending`).join(`
`)}},m={parameters:{viewport:{defaultViewport:`mobile1`}},args:{defaultValue:s}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Frontmatter" hint="YAML is saved exactly as typed." id="frontmatter-source">
      {field => <CodeTextarea {...field} defaultValue={sampleMarkdown} />}
    </FormField>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Raw YAML" error="Line 3: expected a value." id="yaml-source">
      {field => <CodeTextarea {...field} invalid defaultValue={'title:\\ntags:\\n  -'} />}
    </FormField>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: sampleMarkdown
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: Array.from({
      length: 24
    }, (_, index) => \`- item-\${index + 1}: pending\`).join('\\n')
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    defaultValue: sampleMarkdown
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithFormField`,`Error`,`Disabled`,`LongContent`,`Mobile`]}))();export{l as Default,f as Disabled,d as Error,p as LongContent,m as Mobile,u as WithFormField,h as __namedExportsOrder,c as default};