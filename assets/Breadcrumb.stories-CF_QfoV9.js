import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Breadcrumb-BD0LCUVD.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/Breadcrumb`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Link trail. The last item (no href) renders as plain text with aria-current="page". Pass renderLink to use a client-side router Link instead of a plain <a> — matters inside overlay-shell plugins, where a full page reload breaks the dismiss flow.`}}},args:{items:[{label:`Console`,href:`/console`},{label:`Plugins`,href:`/console/plugins`},{label:`sovereign-tasks`}]}},o={},s={args:{items:[{label:`Console`,href:`/console`},{label:`Settings`}]}},c={name:`With custom renderLink`,args:{renderLink:(e,t)=>(0,i.jsx)(`a`,{href:e.href,"data-client-side-nav":`true`,children:t})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Console',
      href: '/console'
    }, {
      label: 'Settings'
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With custom renderLink',
  args: {
    renderLink: (item, children) => <a href={item.href} data-client-side-nav="true">
        {children}
      </a>
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`TwoLevels`,`WithRenderLink`]}))();export{o as Default,s as TwoLevels,c as WithRenderLink,l as __namedExportsOrder,a as default};