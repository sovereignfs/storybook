import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./ContextMenu-kVyPXHpu.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={title:`Components/ContextMenu`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Right-click menu on desktop, long-press on touch. Desktop positioning reuses Popover's existing collision detection anchored to the click point; touch opens the same items in a Drawer bottom sheet — a floating panel at a touch point isn't a pattern touch interfaces have.`}}},args:{children:(0,i.jsx)(`span`,{}),items:[{label:`Rename`,onSelect:()=>{}},{label:`Duplicate`,onSelect:()=>{}},{type:`separator`},{label:`Delete`,destructive:!0,onSelect:()=>{}}],"aria-label":`Row actions`}},o={render:e=>(0,i.jsx)(r,{...e,children:(0,i.jsx)(`div`,{style:{width:240,padding:`var(--sv-space-4)`,border:`1px dashed var(--sv-color-border-strong)`,borderRadius:`var(--sv-radius-md)`,textAlign:`center`,fontSize:14,color:`var(--sv-color-text-muted)`},children:`Right-click here (or long-press on touch)`})})},s={args:{items:[{type:`label`,label:`Sort by`},{label:`Name`,checked:!0,onSelect:()=>{}},{label:`Date modified`,checked:!1,onSelect:()=>{}},{type:`separator`},{label:`Rename`,icon:`pencil`,onSelect:()=>{}},{label:`Delete`,icon:`trash-2`,destructive:!0,onSelect:()=>{}}]},render:e=>(0,i.jsx)(r,{...e,children:(0,i.jsx)(`div`,{style:{width:240,padding:`var(--sv-space-4)`,border:`1px dashed var(--sv-color-border-strong)`,borderRadius:`var(--sv-radius-md)`,textAlign:`center`,fontSize:14,color:`var(--sv-color-text-muted)`},children:`Right-click here`})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args}>
      <div style={{
      width: 240,
      padding: 'var(--sv-space-4)',
      border: '1px dashed var(--sv-color-border-strong)',
      borderRadius: 'var(--sv-radius-md)',
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--sv-color-text-muted)'
    }}>
        Right-click here (or long-press on touch)
      </div>
    </ContextMenu>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      type: 'label',
      label: 'Sort by'
    }, {
      label: 'Name',
      checked: true,
      onSelect: () => {}
    }, {
      label: 'Date modified',
      checked: false,
      onSelect: () => {}
    }, {
      type: 'separator'
    }, {
      label: 'Rename',
      icon: 'pencil',
      onSelect: () => {}
    }, {
      label: 'Delete',
      icon: 'trash-2',
      destructive: true,
      onSelect: () => {}
    }]
  },
  render: args => <ContextMenu {...args}>
      <div style={{
      width: 240,
      padding: 'var(--sv-space-4)',
      border: '1px dashed var(--sv-color-border-strong)',
      borderRadius: 'var(--sv-radius-md)',
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--sv-color-text-muted)'
    }}>
        Right-click here
      </div>
    </ContextMenu>
}`,...s.parameters?.docs?.source}}},c=[`Default`,`WithIconsAndChecked`]}))();export{o as Default,s as WithIconsAndChecked,c as __namedExportsOrder,a as default};