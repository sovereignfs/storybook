import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./Menubar-CPrw_oN3.js";var r,i,a;e((()=>{t(),r={title:`Components/Menubar`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Desktop app-style menu bar (File/Edit/View...). A thin composition of NavigationMenu with MenuEntries as each item's flyout content — no positioning or list-rendering logic duplicated.`}}}},i={args:{menus:[{label:`File`,items:[{label:`New conversation`,onSelect:()=>{}},{label:`Export`,onSelect:()=>{}},{type:`separator`},{label:`Close`,onSelect:()=>{}}]},{label:`Edit`,items:[{label:`Undo`,onSelect:()=>{}},{label:`Redo`,onSelect:()=>{}}]},{label:`View`,items:[{type:`label`,label:`Layout`},{label:`Compact`,checked:!1,onSelect:()=>{}},{label:`Comfortable`,checked:!0,onSelect:()=>{}}]}]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    menus: [{
      label: 'File',
      items: [{
        label: 'New conversation',
        onSelect: () => {}
      }, {
        label: 'Export',
        onSelect: () => {}
      }, {
        type: 'separator'
      }, {
        label: 'Close',
        onSelect: () => {}
      }]
    }, {
      label: 'Edit',
      items: [{
        label: 'Undo',
        onSelect: () => {}
      }, {
        label: 'Redo',
        onSelect: () => {}
      }]
    }, {
      label: 'View',
      items: [{
        type: 'label',
        label: 'Layout'
      }, {
        label: 'Compact',
        checked: false,
        onSelect: () => {}
      }, {
        label: 'Comfortable',
        checked: true,
        onSelect: () => {}
      }]
    }]
  }
}`,...i.parameters?.docs?.source}}},a=[`Default`]}))();export{i as Default,a as __namedExportsOrder,r as default};