import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./StatusBadge-5kOrugsX.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Components/StatusBadge`,component:r,parameters:{layout:`centered`,docs:{description:{component:`Compact inline status indicator for draft, sync, conflict, and delete-pending editor workflows.`}}},args:{status:`draft`}},o={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--sv-space-2)`},children:[(0,i.jsx)(r,{status:`unmodified`}),(0,i.jsx)(r,{status:`draft`}),(0,i.jsx)(r,{status:`committed`}),(0,i.jsx)(r,{status:`synced`})]})},s={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--sv-space-2)`},children:[(0,i.jsx)(r,{status:`conflict`}),(0,i.jsx)(r,{status:`pending-delete`}),(0,i.jsx)(r,{status:`warning`}),(0,i.jsx)(r,{status:`error`})]})},c={render:()=>(0,i.jsx)(r,{status:`draft`,"aria-label":`Draft with unpublished changes`,children:`D`})},l={render:()=>(0,i.jsx)(`div`,{style:{width:180},children:(0,i.jsx)(r,{status:`warning`,children:`Preview requires frontmatter migration`})})},u={parameters:{viewport:{defaultViewport:`mobile1`}},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--sv-space-2)`,maxWidth:320},children:[(0,i.jsx)(r,{status:`draft`}),(0,i.jsx)(r,{status:`synced`}),(0,i.jsx)(r,{status:`conflict`}),(0,i.jsx)(r,{status:`pending-delete`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--sv-space-2)'
  }}>
      <StatusBadge status="unmodified" />
      <StatusBadge status="draft" />
      <StatusBadge status="committed" />
      <StatusBadge status="synced" />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--sv-space-2)'
  }}>
      <StatusBadge status="conflict" />
      <StatusBadge status="pending-delete" />
      <StatusBadge status="warning" />
      <StatusBadge status="error" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <StatusBadge status="draft" aria-label="Draft with unpublished changes">
      D
    </StatusBadge>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 180
  }}>
      <StatusBadge status="warning">Preview requires frontmatter migration</StatusBadge>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--sv-space-2)',
    maxWidth: 320
  }}>
      <StatusBadge status="draft" />
      <StatusBadge status="synced" />
      <StatusBadge status="conflict" />
      <StatusBadge status="pending-delete" />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`ErrorStates`,`AccessibleLabel`,`LongContent`,`MobileWrap`]}))();export{c as AccessibleLabel,o as Default,s as ErrorStates,l as LongContent,u as MobileWrap,d as __namedExportsOrder,a as default};