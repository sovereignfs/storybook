import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Badge-EIaG09qL.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),i=t(),a={title:`Components/Badge`,component:r,parameters:{layout:`centered`,docs:{description:{component:"Compact label for roles (`role`), lifecycle states (`status`), and type/version tags (`mono`). Three sizes (`sm`/`md`/`lg`); ALL CAPS by default, or set `uppercase={false}` for title case. RSC-safe — no state."}}},argTypes:{variant:{control:`select`,options:[`role`,`status`,`mono`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},status:{control:`select`,options:[`active`,`enabled`,`deactivated`,`failed`,`invited`,`pending`,`neutral`]},uppercase:{control:`boolean`}},args:{children:`Badge`}},o={args:{variant:`role`,children:`Owner`}},s={args:{variant:`role`,children:`Admin`}},c={args:{variant:`role`,children:`User`}},l={args:{variant:`role`,children:`Auditor`}},u={args:{variant:`status`,status:`active`,children:`Active`}},d={args:{variant:`status`,status:`deactivated`,children:`Deactivated`}},f={args:{variant:`status`,status:`invited`,children:`Invited`}},p={args:{variant:`status`,status:`failed`,children:`Failed`}},m={args:{variant:`status`,status:`pending`,children:`Pending`}},h={args:{variant:`mono`,children:`platform`}},g={args:{variant:`mono`,children:`community`}},_={args:{variant:`mono`,children:`v0.1.0`}},v={render:()=>{let e={display:`flex`,alignItems:`center`,gap:8};return(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,i.jsxs)(`div`,{style:e,children:[(0,i.jsx)(r,{variant:`role`,size:`sm`,children:`Owner`}),(0,i.jsx)(r,{variant:`role`,size:`md`,children:`Owner`}),(0,i.jsx)(r,{variant:`role`,size:`lg`,children:`Owner`})]}),(0,i.jsxs)(`div`,{style:e,children:[(0,i.jsx)(r,{variant:`status`,status:`active`,size:`sm`,children:`Active`}),(0,i.jsx)(r,{variant:`status`,status:`active`,size:`md`,children:`Active`}),(0,i.jsx)(r,{variant:`status`,status:`active`,size:`lg`,children:`Active`})]}),(0,i.jsxs)(`div`,{style:e,children:[(0,i.jsx)(r,{variant:`mono`,size:`sm`,children:`v0.1.0`}),(0,i.jsx)(r,{variant:`mono`,size:`md`,children:`v0.1.0`}),(0,i.jsx)(r,{variant:`mono`,size:`lg`,children:`v0.1.0`})]})]})})}},y={render:()=>{let e={display:`flex`,alignItems:`center`,gap:8};return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,i.jsxs)(`div`,{style:e,children:[(0,i.jsx)(r,{variant:`role`,children:`Owner`}),(0,i.jsx)(r,{variant:`role`,uppercase:!1,children:`Owner`})]}),(0,i.jsxs)(`div`,{style:e,children:[(0,i.jsx)(r,{variant:`status`,status:`active`,children:`Active`}),(0,i.jsx)(r,{variant:`status`,status:`active`,uppercase:!1,children:`Active`})]}),(0,i.jsxs)(`div`,{style:e,children:[(0,i.jsx)(r,{variant:`mono`,children:`Serve Route`}),(0,i.jsx)(r,{variant:`mono`,uppercase:!1,children:`Serve Route`})]})]})}},b={render:e=>{let t=[`Owner`,`Admin`,`User`,`Auditor`],n=[{status:`active`,label:`Active`},{status:`enabled`,label:`Enabled`},{status:`deactivated`,label:`Deactivated`},{status:`failed`,label:`Failed`},{status:`invited`,label:`Invited`},{status:`pending`,label:`Pending`},{status:`neutral`,label:`Neutral`}],a=[`platform`,`community`,`serve-route`,`v0.1.0`,`admin-only`],o={display:`flex`,flexWrap:`wrap`,gap:8},s={display:`flex`,flexDirection:`column`,gap:8},c={fontSize:11,fontWeight:600,letterSpacing:`0.05em`,textTransform:`uppercase`,color:`var(--sv-color-text-muted)`,fontFamily:`var(--sv-font-family)`};return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Role`}),(0,i.jsx)(`div`,{style:o,children:t.map(e=>(0,i.jsx)(r,{variant:`role`,children:e},e))})]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Status`}),(0,i.jsx)(`div`,{style:o,children:n.map(({status:e,label:t})=>(0,i.jsx)(r,{variant:`status`,status:e,children:t},e))})]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Mono`}),(0,i.jsx)(`div`,{style:o,children:a.map(e=>(0,i.jsx)(r,{variant:`mono`,children:e},e))})]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Sizes (sm / md / lg)`}),(0,i.jsxs)(`div`,{style:{...o,alignItems:`center`},children:[(0,i.jsx)(r,{variant:`role`,size:`sm`,children:`Owner`}),(0,i.jsx)(r,{variant:`role`,size:`md`,children:`Owner`}),(0,i.jsx)(r,{variant:`role`,size:`lg`,children:`Owner`})]})]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(`span`,{style:c,children:`Title case (uppercase=false)`}),(0,i.jsxs)(`div`,{style:{...o,alignItems:`center`},children:[(0,i.jsx)(r,{variant:`role`,uppercase:!1,children:`Owner`}),(0,i.jsx)(r,{variant:`status`,status:`active`,uppercase:!1,children:`Active`}),(0,i.jsx)(r,{variant:`mono`,uppercase:!1,children:`Serve Route`})]})]})]})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  render: () => {
    const rowStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    };
    const sectionStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={sectionStyle}>
          <div style={rowStyle}>
            <Badge variant="role" size="sm">
              Owner
            </Badge>
            <Badge variant="role" size="md">
              Owner
            </Badge>
            <Badge variant="role" size="lg">
              Owner
            </Badge>
          </div>
          <div style={rowStyle}>
            <Badge variant="status" status="active" size="sm">
              Active
            </Badge>
            <Badge variant="status" status="active" size="md">
              Active
            </Badge>
            <Badge variant="status" status="active" size="lg">
              Active
            </Badge>
          </div>
          <div style={rowStyle}>
            <Badge variant="mono" size="sm">
              v0.1.0
            </Badge>
            <Badge variant="mono" size="md">
              v0.1.0
            </Badge>
            <Badge variant="mono" size="lg">
              v0.1.0
            </Badge>
          </div>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`sm / md (default) / lg side by side, across all three variants.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rowStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <div style={rowStyle}>
          <Badge variant="role">Owner</Badge>
          <Badge variant="role" uppercase={false}>
            Owner
          </Badge>
        </div>
        <div style={rowStyle}>
          <Badge variant="status" status="active">
            Active
          </Badge>
          <Badge variant="status" status="active" uppercase={false}>
            Active
          </Badge>
        </div>
        <div style={rowStyle}>
          <Badge variant="mono">Serve Route</Badge>
          <Badge variant="mono" uppercase={false}>
            Serve Route
          </Badge>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:"uppercase (default) vs. title case — same text, `uppercase={false}` on the right.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        <div style={sectionStyle}>
          <span style={headingStyle}>Sizes (sm / md / lg)</span>
          <div style={{
          ...groupStyle,
          alignItems: 'center'
        }}>
            <Badge variant="role" size="sm">
              Owner
            </Badge>
            <Badge variant="role" size="md">
              Owner
            </Badge>
            <Badge variant="role" size="lg">
              Owner
            </Badge>
          </div>
        </div>
        <div style={sectionStyle}>
          <span style={headingStyle}>Title case (uppercase=false)</span>
          <div style={{
          ...groupStyle,
          alignItems: 'center'
        }}>
            <Badge variant="role" uppercase={false}>
              Owner
            </Badge>
            <Badge variant="status" status="active" uppercase={false}>
              Active
            </Badge>
            <Badge variant="mono" uppercase={false}>
              Serve Route
            </Badge>
          </div>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`All variants and statuses at a glance.`,...b.parameters?.docs?.description}}},x=[`Role`,`RoleAdmin`,`RoleUser`,`RoleAuditor`,`StatusActive`,`StatusDeactivated`,`StatusInvited`,`StatusFailed`,`StatusPending`,`MonoPlatform`,`MonoCommunity`,`MonoVersion`,`Sizes`,`TitleCase`,`AllVariants`]}))();export{b as AllVariants,g as MonoCommunity,h as MonoPlatform,_ as MonoVersion,o as Role,s as RoleAdmin,l as RoleAuditor,c as RoleUser,v as Sizes,u as StatusActive,d as StatusDeactivated,p as StatusFailed,f as StatusInvited,m as StatusPending,y as TitleCase,x as __namedExportsOrder,a as default};