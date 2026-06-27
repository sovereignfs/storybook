import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Select-wACY80S2.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/Select`,component:r,parameters:{layout:`centered`,docs:{description:{component:"Styled native `<select>` — same visual language as `Input`. Preserves native picker on mobile for maximum accessibility. RSC-safe."}}},argTypes:{disabled:{control:`boolean`}}},o={render:e=>(0,i.jsxs)(`div`,{style:{width:280,fontFamily:`var(--sv-font-family)`},children:[(0,i.jsx)(`label`,{htmlFor:`role-select`,style:{display:`block`,marginBottom:4,fontSize:`var(--sv-font-size-sm)`,fontWeight:`var(--sv-font-weight-medium)`,color:`var(--sv-color-text-primary)`},children:`Role`}),(0,i.jsxs)(r,{id:`role-select`,defaultValue:`user`,children:[(0,i.jsx)(`option`,{value:`user`,children:`User`}),(0,i.jsx)(`option`,{value:`admin`,children:`Admin`}),(0,i.jsx)(`option`,{value:`owner`,children:`Owner`})]})]})},s={render:e=>(0,i.jsx)(`div`,{style:{width:280},children:(0,i.jsxs)(r,{disabled:!0,defaultValue:`user`,children:[(0,i.jsx)(`option`,{value:`user`,children:`User`}),(0,i.jsx)(`option`,{value:`admin`,children:`Admin`})]})})},c={render:e=>{let t={display:`flex`,flexDirection:`column`,gap:4},n={fontSize:`var(--sv-font-size-sm)`,fontWeight:`var(--sv-font-weight-medium)`,color:`var(--sv-color-text-primary)`,fontFamily:`var(--sv-font-family)`};return(0,i.jsxs)(`div`,{style:{width:320,display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsxs)(`div`,{style:t,children:[(0,i.jsx)(`label`,{htmlFor:`lang-select`,style:n,children:`Language`}),(0,i.jsxs)(r,{id:`lang-select`,defaultValue:`en-us`,children:[(0,i.jsx)(`option`,{value:`en-us`,children:`English (US)`}),(0,i.jsx)(`option`,{value:`en-gb`,children:`English (UK)`}),(0,i.jsx)(`option`,{value:`fr`,children:`Français`}),(0,i.jsx)(`option`,{value:`de`,children:`Deutsch`}),(0,i.jsx)(`option`,{value:`ja`,children:`日本語`})]})]}),(0,i.jsxs)(`div`,{style:t,children:[(0,i.jsx)(`label`,{htmlFor:`tz-select`,style:n,children:`Timezone`}),(0,i.jsxs)(r,{id:`tz-select`,defaultValue:`asia-colombo`,children:[(0,i.jsx)(`option`,{value:`asia-colombo`,children:`Asia/Colombo (UTC+5:30)`}),(0,i.jsx)(`option`,{value:`utc`,children:`UTC`}),(0,i.jsx)(`option`,{value:`america-ny`,children:`America/New_York (UTC−5)`}),(0,i.jsx)(`option`,{value:`europe-london`,children:`Europe/London (UTC+0)`})]})]}),(0,i.jsxs)(`div`,{style:t,children:[(0,i.jsx)(`label`,{htmlFor:`poll-select`,style:n,children:`Poll interval`}),(0,i.jsxs)(r,{id:`poll-select`,defaultValue:`30`,children:[(0,i.jsx)(`option`,{value:`15`,children:`Every 15 seconds`}),(0,i.jsx)(`option`,{value:`30`,children:`Every 30 seconds`}),(0,i.jsx)(`option`,{value:`60`,children:`Every minute`}),(0,i.jsx)(`option`,{value:`300`,children:`Every 5 minutes`})]})]})]})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: _args => <div style={{
    width: 280,
    fontFamily: 'var(--sv-font-family)'
  }}>
      <label htmlFor="role-select" style={{
      display: 'block',
      marginBottom: 4,
      fontSize: 'var(--sv-font-size-sm)',
      fontWeight: 'var(--sv-font-weight-medium)',
      color: 'var(--sv-color-text-primary)'
    }}>
        Role
      </label>
      <Select id="role-select" defaultValue="user">
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="owner">Owner</option>
      </Select>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: _args => <div style={{
    width: 280
  }}>
      <Select disabled defaultValue="user">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </Select>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const fieldStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    };
    const labelStyle: React.CSSProperties = {
      fontSize: 'var(--sv-font-size-sm)',
      fontWeight: 'var(--sv-font-weight-medium)',
      color: 'var(--sv-color-text-primary)',
      fontFamily: 'var(--sv-font-family)'
    };
    return <div style={{
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={fieldStyle}>
          <label htmlFor="lang-select" style={labelStyle}>
            Language
          </label>
          <Select id="lang-select" defaultValue="en-us">
            <option value="en-us">English (US)</option>
            <option value="en-gb">English (UK)</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
          </Select>
        </div>
        <div style={fieldStyle}>
          <label htmlFor="tz-select" style={labelStyle}>
            Timezone
          </label>
          <Select id="tz-select" defaultValue="asia-colombo">
            <option value="asia-colombo">Asia/Colombo (UTC+5:30)</option>
            <option value="utc">UTC</option>
            <option value="america-ny">America/New_York (UTC−5)</option>
            <option value="europe-london">Europe/London (UTC+0)</option>
          </Select>
        </div>
        <div style={fieldStyle}>
          <label htmlFor="poll-select" style={labelStyle}>
            Poll interval
          </label>
          <Select id="poll-select" defaultValue="30">
            <option value="15">Every 15 seconds</option>
            <option value="30">Every 30 seconds</option>
            <option value="60">Every minute</option>
            <option value="300">Every 5 minutes</option>
          </Select>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`Form context — several fields together matching the spec layout.`,...c.parameters?.docs?.description}}},l=[`Default`,`Disabled`,`FormContext`]}))();export{o as Default,s as Disabled,c as FormContext,l as __namedExportsOrder,a as default};