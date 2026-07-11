import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DIgLXUbX.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Tabs-f5lbZm48.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Tabs`,component:a,parameters:{layout:`padded`,docs:{description:{component:"Underline tab nav. Stateless — caller owns `value` + `onChange` and renders the active panel. Mobile: scrolls horizontally with the scrollbar hidden."}}},args:{items:[{label:`Tab`,value:`tab`}],value:`tab`,onChange:()=>{},"aria-label":`Tabs`}},l=[{label:`Overview`,value:`overview`},{label:`Users`,value:`users`},{label:`Plugins`,value:`plugins`},{label:`Settings`,value:`settings`},{label:`Health`,value:`health`}],u=[{label:`Profile`,value:`profile`},{label:`Security`,value:`security`},{label:`Appearance`,value:`appearance`},{label:`Notifications`,value:`notifications`},{label:`Billing`,value:`billing`},{label:`Data`,value:`data`}],d={render:e=>{let[t,n]=(0,o.useState)(`overview`);return(0,s.jsxs)(`div`,{style:{fontFamily:`var(--sv-font-family)`},children:[(0,s.jsx)(a,{items:l,value:t,onChange:n,"aria-label":`Console`}),(0,s.jsxs)(`div`,{style:{padding:`var(--sv-space-4)`,color:`var(--sv-color-text-muted)`,fontSize:`var(--sv-font-size-sm)`},children:[`Showing: `,(0,s.jsx)(`strong`,{style:{color:`var(--sv-color-text-primary)`},children:t})]})]})}},f={render:e=>{let[t,n]=(0,o.useState)(`profile`);return(0,s.jsxs)(`div`,{style:{fontFamily:`var(--sv-font-family)`,maxWidth:480},children:[(0,s.jsx)(a,{items:u,value:t,onChange:n,"aria-label":`Account settings`}),(0,s.jsxs)(`div`,{style:{padding:`var(--sv-space-4)`,color:`var(--sv-color-text-muted)`,fontSize:`var(--sv-font-size-sm)`},children:[`Showing: `,(0,s.jsx)(`strong`,{style:{color:`var(--sv-color-text-primary)`},children:t})]})]})}},p={parameters:{viewport:{defaultViewport:`mobile1`}},render:e=>{let[t,n]=(0,o.useState)(`profile`);return(0,s.jsx)(`div`,{style:{fontFamily:`var(--sv-font-family)`},children:(0,s.jsx)(a,{items:u,value:t,onChange:n,"aria-label":`Account settings`})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [tab, setTab] = useState('overview');
    return <div style={{
      fontFamily: 'var(--sv-font-family)'
    }}>
        <Tabs items={CONSOLE_TABS} value={tab} onChange={setTab} aria-label="Console" />
        <div style={{
        padding: 'var(--sv-space-4)',
        color: 'var(--sv-color-text-muted)',
        fontSize: 'var(--sv-font-size-sm)'
      }}>
          Showing: <strong style={{
          color: 'var(--sv-color-text-primary)'
        }}>{tab}</strong>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`Console panel navigation.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [tab, setTab] = useState('profile');
    return <div style={{
      fontFamily: 'var(--sv-font-family)',
      maxWidth: 480
    }}>
        <Tabs items={ACCOUNT_TABS} value={tab} onChange={setTab} aria-label="Account settings" />
        <div style={{
        padding: 'var(--sv-space-4)',
        color: 'var(--sv-color-text-muted)',
        fontSize: 'var(--sv-font-size-sm)'
      }}>
          Showing: <strong style={{
          color: 'var(--sv-color-text-primary)'
        }}>{tab}</strong>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Account settings — more tabs, scrolls on narrow viewports.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: _args => {
    const [tab, setTab] = useState('profile');
    return <div style={{
      fontFamily: 'var(--sv-font-family)'
    }}>
        <Tabs items={ACCOUNT_TABS} value={tab} onChange={setTab} aria-label="Account settings" />
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`Narrow viewport — confirms horizontal scroll behaviour.`,...p.parameters?.docs?.description}}},m=[`Console`,`Account`,`NarrowScroll`]}))();export{f as Account,d as Console,p as NarrowScroll,m as __namedExportsOrder,c as default};