import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./Badge-BdfbBtLz.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),i=r(),a={title:`Components/Badge`,component:n,parameters:{layout:`centered`,docs:{description:{component:"Compact label for roles (`role`), lifecycle states (`status`), and type/version tags (`mono`). RSC-safe — no state."}}},argTypes:{variant:{control:`select`,options:[`role`,`status`,`mono`]},status:{control:`select`,options:[`active`,`enabled`,`deactivated`,`failed`,`invited`,`pending`,`neutral`]}},args:{children:`Badge`}},o={args:{variant:`role`,children:`Owner`}},s={args:{variant:`role`,children:`Admin`}},c={args:{variant:`role`,children:`User`}},l={args:{variant:`role`,children:`Auditor`}},u={args:{variant:`status`,status:`active`,children:`Active`}},d={args:{variant:`status`,status:`deactivated`,children:`Deactivated`}},f={args:{variant:`status`,status:`invited`,children:`Invited`}},p={args:{variant:`status`,status:`failed`,children:`Failed`}},m={args:{variant:`status`,status:`pending`,children:`Pending`}},h={args:{variant:`mono`,children:`platform`}},g={args:{variant:`mono`,children:`community`}},_={args:{variant:`mono`,children:`v0.1.0`}},v={render:e=>{let t=[`Owner`,`Admin`,`User`,`Auditor`],r=[{status:`active`,label:`Active`},{status:`enabled`,label:`Enabled`},{status:`deactivated`,label:`Deactivated`},{status:`failed`,label:`Failed`},{status:`invited`,label:`Invited`},{status:`pending`,label:`Pending`},{status:`neutral`,label:`Neutral`}],a=[`platform`,`community`,`serve-route`,`v0.1.0`,`admin-only`],o={display:`flex`,flexWrap:`wrap`,gap:8},s={display:`flex`,flexDirection:`column`,gap:8},c={fontSize:11,fontWeight:600,letterSpacing:`0.05em`,textTransform:`uppercase`,color:`var(--sv-color-text-muted)`,fontFamily:`var(--sv-font-family)`};return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Role`}),(0,i.jsx)(`div`,{style:o,children:t.map(e=>(0,i.jsx)(n,{variant:`role`,children:e},e))})]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Status`}),(0,i.jsx)(`div`,{style:o,children:r.map(({status:e,label:t})=>(0,i.jsx)(n,{variant:`status`,status:e,children:t},e))})]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Mono`}),(0,i.jsx)(`div`,{style:o,children:a.map(e=>(0,i.jsx)(n,{variant:`mono`,children:e},e))})]})]})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'role',
    children: 'Owner'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'role',
    children: 'Admin'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'role',
    children: 'User'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'role',
    children: 'Auditor'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status',
    status: 'active',
    children: 'Active'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status',
    status: 'deactivated',
    children: 'Deactivated'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status',
    status: 'invited',
    children: 'Invited'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status',
    status: 'failed',
    children: 'Failed'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status',
    status: 'pending',
    children: 'Pending'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mono',
    children: 'platform'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mono',
    children: 'community'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mono',
    children: 'v0.1.0'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const roleLabels = ['Owner', 'Admin', 'User', 'Auditor'];
    const statuses: {
      status: BadgeStatus;
      label: string;
    }[] = [{
      status: 'active',
      label: 'Active'
    }, {
      status: 'enabled',
      label: 'Enabled'
    }, {
      status: 'deactivated',
      label: 'Deactivated'
    }, {
      status: 'failed',
      label: 'Failed'
    }, {
      status: 'invited',
      label: 'Invited'
    }, {
      status: 'pending',
      label: 'Pending'
    }, {
      status: 'neutral',
      label: 'Neutral'
    }];
    const monoLabels = ['platform', 'community', 'serve-route', 'v0.1.0', 'admin-only'];
    const groupStyle: React.CSSProperties = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    };
    const sectionStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    };
    const headingStyle: React.CSSProperties = {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--sv-color-text-muted)',
      fontFamily: 'var(--sv-font-family)'
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 16
    }}>
        <div style={sectionStyle}>
          <span style={headingStyle}>Role</span>
          <div style={groupStyle}>
            {roleLabels.map(l => <Badge key={l} variant="role">
                {l}
              </Badge>)}
          </div>
        </div>
        <div style={sectionStyle}>
          <span style={headingStyle}>Status</span>
          <div style={groupStyle}>
            {statuses.map(({
            status,
            label
          }) => <Badge key={status} variant="status" status={status}>
                {label}
              </Badge>)}
          </div>
        </div>
        <div style={sectionStyle}>
          <span style={headingStyle}>Mono</span>
          <div style={groupStyle}>
            {monoLabels.map(l => <Badge key={l} variant="mono">
                {l}
              </Badge>)}
          </div>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`All variants and statuses at a glance.`,...v.parameters?.docs?.description}}},y=[`Role`,`RoleAdmin`,`RoleUser`,`RoleAuditor`,`StatusActive`,`StatusDeactivated`,`StatusInvited`,`StatusFailed`,`StatusPending`,`MonoPlatform`,`MonoCommunity`,`MonoVersion`,`AllVariants`]}))();export{v as AllVariants,g as MonoCommunity,h as MonoPlatform,_ as MonoVersion,o as Role,s as RoleAdmin,l as RoleAuditor,c as RoleUser,u as StatusActive,d as StatusDeactivated,p as StatusFailed,f as StatusInvited,m as StatusPending,y as __namedExportsOrder,a as default};