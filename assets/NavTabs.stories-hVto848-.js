import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n,r,i,a,o=e((()=>{n=`_nav_36ys9_1`,r=`_link_36ys9_8`,i=`_active_36ys9_30`,a={nav:n,link:r,active:i}}));function s({items:e,className:t,"aria-label":n}){return(0,c.jsx)(`nav`,{className:[a.nav,t].filter(Boolean).join(` `),"aria-label":n??`Page navigation`,children:e.map(e=>(0,c.jsx)(`a`,{href:e.href,className:[a.link,e.active&&a.active].filter(Boolean).join(` `),"aria-current":e.active?`page`:void 0,children:e.label},e.href))})}var c,l=e((()=>{o(),c=t(),s.__docgenInfo={description:``,methods:[],displayName:`NavTabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`NavTabItem`}],raw:`NavTabItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})),u,d,f,p;e((()=>{l(),u={title:`Components/NavTabs`,component:s,parameters:{layout:`padded`},args:{items:[{label:`Overview`,href:`#overview`,active:!0},{label:`Users`,href:`#users`},{label:`Plugins`,href:`#plugins`},{label:`Settings`,href:`#settings`}]}},d={},f={args:{items:[{label:`Profile`,href:`#profile`,active:!0},{label:`Security`,href:`#security`},{label:`Notifications`,href:`#notifications`},{label:`Preferences`,href:`#preferences`},{label:`Data & Privacy`,href:`#data`},{label:`Sessions`,href:`#sessions`}]},parameters:{viewport:{defaultViewport:`mobile`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Profile',
      href: '#profile',
      active: true
    }, {
      label: 'Security',
      href: '#security'
    }, {
      label: 'Notifications',
      href: '#notifications'
    }, {
      label: 'Preferences',
      href: '#preferences'
    }, {
      label: 'Data & Privacy',
      href: '#data'
    }, {
      label: 'Sessions',
      href: '#sessions'
    }]
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`ManyTabs`]}))();export{d as Default,f as ManyTabs,p as __namedExportsOrder,u as default};