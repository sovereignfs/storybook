import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DrAmumIN.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./SegmentedControl-Cz3NBEcf.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/SegmentedControl`,component:a,parameters:{layout:`centered`,docs:{description:{component:'Pill-based 2–3 option picker for inline use in table rows and dialogs. Renders as `role="radiogroup"` with `role="radio"` segments.'}}},args:{value:`a`,onChange:()=>{},options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],"aria-label":`Select option`}},l={render:e=>{let[t,n]=(0,o.useState)(`user`);return(0,s.jsx)(a,{value:t,onChange:n,options:[{label:`User`,value:`user`},{label:`Admin`,value:`admin`}],"aria-label":`Role`})}},u={render:e=>{let[t,n]=(0,o.useState)(`user`);return(0,s.jsx)(a,{value:t,onChange:n,options:[{label:`User`,value:`user`},{label:`Admin`,value:`admin`},{label:`Owner`,value:`owner`}],"aria-label":`Role`})}},d={render:e=>{let[t,n]=(0,o.useState)(`user`);return(0,s.jsx)(a,{value:t,onChange:n,size:`sm`,options:[{label:`User`,value:`user`},{label:`Admin`,value:`admin`}],"aria-label":`Role`})}},f={render:e=>{let[t,n]=(0,o.useState)(`user`);return(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,padding:`10px 12px`,border:`1px solid var(--sv-color-border)`,borderRadius:`var(--sv-radius-md)`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`},children:[(0,s.jsx)(`span`,{children:`Test User`}),(0,s.jsx)(a,{value:t,onChange:n,size:`sm`,options:[{label:`User`,value:`user`},{label:`Admin`,value:`admin`}],"aria-label":`User role`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [role, setRole] = useState<'user' | 'admin'>('user');
    return <SegmentedControl value={role} onChange={setRole} options={[{
      label: 'User',
      value: 'user'
    }, {
      label: 'Admin',
      value: 'admin'
    }]} aria-label="Role" />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [role, setRole] = useState<'user' | 'admin' | 'owner'>('user');
    return <SegmentedControl value={role} onChange={setRole} options={[{
      label: 'User',
      value: 'user'
    }, {
      label: 'Admin',
      value: 'admin'
    }, {
      label: 'Owner',
      value: 'owner'
    }]} aria-label="Role" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [role, setRole] = useState<'user' | 'admin'>('user');
    return <SegmentedControl value={role} onChange={setRole} size="sm" options={[{
      label: 'User',
      value: 'user'
    }, {
      label: 'Admin',
      value: 'admin'
    }]} aria-label="Role" />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [role, setRole] = useState<'user' | 'admin'>('user');
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 12px',
      border: '1px solid var(--sv-color-border)',
      borderRadius: 'var(--sv-radius-md)',
      fontFamily: 'var(--sv-font-family)',
      fontSize: 'var(--sv-font-size-sm)',
      color: 'var(--sv-color-text-primary)'
    }}>
        <span>Test User</span>
        <SegmentedControl value={role} onChange={setRole} size="sm" options={[{
        label: 'User',
        value: 'user'
      }, {
        label: 'Admin',
        value: 'admin'
      }]} aria-label="User role" />
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Table-row context — sm size next to other table content.`,...f.parameters?.docs?.description}}},p=[`TwoOption`,`ThreeOption`,`SmallSize`,`InTableRow`]}))();export{f as InTableRow,d as SmallSize,u as ThreeOption,l as TwoOption,p as __namedExportsOrder,c as default};