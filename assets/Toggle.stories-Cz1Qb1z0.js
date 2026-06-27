import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-B16KTd9u.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Toggle-BH-Agr91.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Toggle`,component:a,parameters:{layout:`centered`,docs:{description:{component:'38×22px binary switch for settings rows. Renders as `<button role="switch">` for reliable VoiceOver support. `aria-label` is required.'}}},argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`}},args:{checked:!1,onChange:()=>{},"aria-label":`Toggle setting`}},l={args:{checked:!1}},u={args:{checked:!0}},d={args:{checked:!1,disabled:!0}},f={args:{checked:!0,disabled:!0}},p={render:e=>{let[t,n]=(0,o.useState)(e.checked);return(0,s.jsx)(a,{...e,checked:t,onChange:n})}},m={render:e=>{let[t,n]=(0,o.useState)(!0),[r,i]=(0,o.useState)(!1),c={display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:32,padding:`12px 0`,borderBottom:`1px solid var(--sv-color-border)`,fontFamily:`var(--sv-font-family)`},l={display:`flex`,flexDirection:`column`,gap:2},u={fontSize:`var(--sv-font-size-sm)`,fontWeight:`var(--sv-font-weight-medium)`,color:`var(--sv-color-text-primary)`},d={fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`};return(0,s.jsxs)(`div`,{style:{width:320},children:[(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsxs)(`div`,{style:l,children:[(0,s.jsx)(`span`,{style:u,children:`Two-factor authentication`}),(0,s.jsx)(`span`,{style:d,children:`Require a code when signing in.`})]}),(0,s.jsx)(a,{checked:t,onChange:n,"aria-label":`Two-factor authentication`})]}),(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsxs)(`div`,{style:l,children:[(0,s.jsx)(`span`,{style:u,children:`Email notifications`}),(0,s.jsx)(`span`,{style:d,children:`Receive digests and alerts.`})]}),(0,s.jsx)(a,{checked:r,onChange:i,"aria-label":`Email notifications`})]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
  }
}`,...p.parameters?.docs?.source},description:{story:`Interactive — click to toggle.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [twoFA, setTwoFA] = useState(true);
    const [email, setEmail] = useState(false);
    const rowStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      padding: '12px 0',
      borderBottom: '1px solid var(--sv-color-border)',
      fontFamily: 'var(--sv-font-family)'
    };
    const labelStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    };
    const titleStyle: React.CSSProperties = {
      fontSize: 'var(--sv-font-size-sm)',
      fontWeight: 'var(--sv-font-weight-medium)',
      color: 'var(--sv-color-text-primary)'
    };
    const descStyle: React.CSSProperties = {
      fontSize: 'var(--sv-font-size-caption)',
      color: 'var(--sv-color-text-muted)'
    };
    return <div style={{
      width: 320
    }}>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <span style={titleStyle}>Two-factor authentication</span>
            <span style={descStyle}>Require a code when signing in.</span>
          </div>
          <Toggle checked={twoFA} onChange={setTwoFA} aria-label="Two-factor authentication" />
        </div>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <span style={titleStyle}>Email notifications</span>
            <span style={descStyle}>Receive digests and alerts.</span>
          </div>
          <Toggle checked={email} onChange={setEmail} aria-label="Email notifications" />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Settings rows — typical usage with adjacent label text.`,...m.parameters?.docs?.description}}},h=[`Off`,`On`,`Disabled`,`DisabledOn`,`Interactive`,`SettingsRows`]}))();export{d as Disabled,f as DisabledOn,p as Interactive,l as Off,u as On,m as SettingsRows,h as __namedExportsOrder,c as default};