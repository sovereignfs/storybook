import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-CuQSTx1W.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./SystemBanner-BvWkxV9h.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/SystemBanner`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:"Full-width `position: sticky` strip for platform-level notices. Stack multiple banners by rendering multiple `<SystemBanner>` elements. Dismiss button only appears when `onDismiss` is provided."}}},argTypes:{variant:{control:`select`,options:[`info`,`warning`,`error`]}},args:{children:`Notice`}},l={args:{variant:`info`,children:`Platform is in read-only mode during migration.`}},u={args:{variant:`warning`,children:`License for Example: Monetized expires in 7 days.`}},d={args:{variant:`error`,children:`Maintenance mode is active — only admins can sign in.`}},f={render:e=>{let[t,n]=(0,o.useState)(!0);return t?(0,s.jsx)(a,{variant:`warning`,onDismiss:()=>n(!1),children:`License for Example: Monetized expires in 7 days.`}):(0,s.jsx)(`div`,{style:{padding:16,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-muted)`},children:`Banner dismissed.`})}},p={render:e=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(a,{variant:`error`,children:`Maintenance mode is active — only admins can sign in.`}),(0,s.jsx)(a,{variant:`warning`,children:`License for Example: Monetized expires in 7 days.`}),(0,s.jsx)(a,{variant:`info`,children:`Platform is in read-only mode during migration.`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Platform is in read-only mode during migration.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'License for Example: Monetized expires in 7 days.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Maintenance mode is active — only admins can sign in.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [visible, setVisible] = useState(true);
    return visible ? <SystemBanner variant="warning" onDismiss={() => setVisible(false)}>
        License for Example: Monetized expires in 7 days.
      </SystemBanner> : <div style={{
      padding: 16,
      fontFamily: 'var(--sv-font-family)',
      fontSize: 'var(--sv-font-size-sm)',
      color: 'var(--sv-color-text-muted)'
    }}>
        Banner dismissed.
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _args => <div>
      <SystemBanner variant="error">
        Maintenance mode is active — only admins can sign in.
      </SystemBanner>
      <SystemBanner variant="warning">
        License for Example: Monetized expires in 7 days.
      </SystemBanner>
      <SystemBanner variant="info">Platform is in read-only mode during migration.</SystemBanner>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`All three variants stacked — as they appear when multiple notices are active.`,...p.parameters?.docs?.description}}},m=[`Info`,`Warning`,`Error`,`Dismissible`,`Stacked`]}))();export{f as Dismissible,d as Error,l as Info,p as Stacked,u as Warning,m as __namedExportsOrder,c as default};