import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./NavTabs-BrmRpBUR.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/NavTabs`,component:r,parameters:{layout:`padded`},args:{items:[{label:`Overview`,href:`#overview`,active:!0},{label:`Users`,href:`#users`},{label:`Plugins`,href:`#plugins`},{label:`Settings`,href:`#settings`}]}},o={},s={args:{items:[{label:`Profile`,href:`#profile`,active:!0},{label:`Security`,href:`#security`},{label:`Notifications`,href:`#notifications`},{label:`Preferences`,href:`#preferences`},{label:`Data & Privacy`,href:`#data`},{label:`Sessions`,href:`#sessions`}]},parameters:{viewport:{defaultViewport:`mobile`}}},c={args:{renderLink:(e,t)=>(0,i.jsx)(`button`,{type:`button`,className:t.className,"aria-current":t[`aria-current`],onClick:()=>console.log(`client-side navigate to ${e.href}`),style:{background:`none`,border:`none`,cursor:`pointer`,font:`inherit`},children:t.children})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    renderLink: (item, linkProps) => <button type="button" className={linkProps.className} aria-current={linkProps['aria-current']} onClick={() => console.log(\`client-side navigate to \${item.href}\`)} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'inherit'
    }}>
        {linkProps.children}
      </button>
  }
}`,...c.parameters?.docs?.source},description:{story:"Simulates a consumer swapping in a client-side router link (e.g. Next's\n`<Link replace>` inside an overlay-shell plugin) instead of a plain `<a>`.",...c.parameters?.docs?.description}}},l=[`Default`,`ManyTabs`,`WithCustomLinkRenderer`]}))();export{o as Default,s as ManyTabs,c as WithCustomLinkRenderer,l as __namedExportsOrder,a as default};