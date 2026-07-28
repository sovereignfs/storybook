import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Input-C8k9l1_s.js";function i({label:e,...t}){return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:[(0,a.jsx)(`label`,{htmlFor:`sb-input`,style:{fontSize:14,color:`var(--sv-color-text-primary)`,fontFamily:`system-ui`},children:e}),(0,a.jsx)(r,{id:`sb-input`,...t})]})}var a,o,s,c,l,u,d,f;e((()=>{n(),a=t(),o={title:`Components/Input`,component:r,parameters:{layout:`centered`,docs:{description:{component:"The primitive text field. RSC-safe; forwards all native `<input>` props. No label is built-in — always pair with a `<label>` for accessibility."}}}},s={render:e=>(0,a.jsx)(i,{label:`Display name`,type:`text`,placeholder:`e.g. Jane Smith`})},c={render:e=>(0,a.jsx)(i,{label:`Email address`,type:`email`,placeholder:`you@example.com`})},l={render:e=>(0,a.jsx)(i,{label:`Password`,type:`password`,placeholder:`••••••••`})},u={render:e=>(0,a.jsx)(i,{label:`Read-only field`,type:`text`,defaultValue:`Cannot be changed`,disabled:!0})},d={render:e=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:[(0,a.jsx)(`label`,{htmlFor:`sb-input-err`,style:{fontSize:14,color:`var(--sv-color-text-primary)`,fontFamily:`system-ui`},children:`Email address`}),(0,a.jsx)(r,{id:`sb-input-err`,type:`email`,defaultValue:`not-an-email`,"aria-invalid":`true`,"aria-describedby":`sb-input-err-msg`,style:{borderColor:`var(--sv-color-error-border)`,outline:`none`}}),(0,a.jsx)(`span`,{id:`sb-input-err-msg`,style:{fontSize:12,color:`var(--sv-color-error-text)`,fontFamily:`system-ui`},children:`Enter a valid email address.`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: _args => <Labeled label="Display name" type="text" placeholder="e.g. Jane Smith" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: _args => <Labeled label="Email address" type="email" placeholder="you@example.com" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: _args => <Labeled label="Password" type="password" placeholder="••••••••" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: _args => <Labeled label="Read-only field" type="text" defaultValue="Cannot be changed" disabled />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  }}>
      <label htmlFor="sb-input-err" style={{
      fontSize: 14,
      color: 'var(--sv-color-text-primary)',
      fontFamily: 'system-ui'
    }}>
        Email address
      </label>
      <Input id="sb-input-err" type="email" defaultValue="not-an-email" aria-invalid="true" aria-describedby="sb-input-err-msg" style={{
      borderColor: 'var(--sv-color-error-border)',
      outline: 'none'
    }} />
      <span id="sb-input-err-msg" style={{
      fontSize: 12,
      color: 'var(--sv-color-error-text)',
      fontFamily: 'system-ui'
    }}>
        Enter a valid email address.
      </span>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Mimics an error state — the container adds red border via CSS token.`,...d.parameters?.docs?.description}}},f=[`Text`,`Email`,`Password`,`Disabled`,`ErrorState`]}))();export{u as Disabled,c as Email,d as ErrorState,l as Password,s as Text,f as __namedExportsOrder,o as default};