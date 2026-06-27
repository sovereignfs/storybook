import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DhfQq80Q.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-DBRN-3RW.js";import{n as o,t as s}from"./Popover-W-CtiPCQ.js";var c,l,u,d,f,p,m,h;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`Components/Popover`,component:s,parameters:{layout:`centered`,docs:{description:{component:"Floating panel anchored below a trigger. Non-modal: closes on outside click or Escape. `align` controls which trigger edge the panel aligns to."}}},args:{open:!1,onClose:()=>{},trigger:(0,l.jsx)(`button`,{type:`button`,children:`Trigger`}),"aria-label":`Popover`,children:null}},d={display:`flex`,alignItems:`center`,gap:12,padding:`10px 16px`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`,borderBottom:`1px solid var(--sv-color-border)`,cursor:`pointer`},f={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsxs)(s,{open:t,onClose:()=>n(!1),align:`right`,"aria-label":`Notifications`,trigger:(0,l.jsx)(a,{variant:`ghost`,onClick:()=>n(e=>!e),"aria-label":`Notifications`,children:`🔔`}),children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`12px 16px`,borderBottom:`1px solid var(--sv-color-border)`,fontFamily:`var(--sv-font-family)`},children:[(0,l.jsx)(`span`,{style:{fontWeight:`var(--sv-font-weight-semibold)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`},children:`Notifications`}),(0,l.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`,cursor:`pointer`,fontFamily:`var(--sv-font-family)`},children:`Mark all read`})]}),(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(`span`,{style:{fontSize:20},children:`📦`}),(0,l.jsxs)(`div`,{style:{flex:1},children:[(0,l.jsx)(`div`,{style:{fontWeight:`var(--sv-font-weight-medium)`},children:`Plugin updated`}),(0,l.jsx)(`div`,{style:{fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`},children:`1 hour ago`})]})]}),(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(`span`,{style:{fontSize:20},children:`✉️`}),(0,l.jsxs)(`div`,{style:{flex:1},children:[(0,l.jsx)(`div`,{style:{fontWeight:`var(--sv-font-weight-medium)`},children:`Invite accepted`}),(0,l.jsx)(`div`,{style:{fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`},children:`2 min ago`})]})]})]})})}},p={render:e=>{let[t,n]=(0,c.useState)(!1),r={...d,gap:10,cursor:`default`};return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsxs)(s,{open:t,onClose:()=>n(!1),align:`right`,"aria-label":`User menu`,trigger:(0,l.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),style:{width:32,height:32,borderRadius:`50%`,background:`var(--sv-color-accent)`,color:`var(--sv-color-text-on-accent)`,border:`none`,cursor:`pointer`,fontFamily:`var(--sv-font-family)`,fontWeight:600,fontSize:13},"aria-label":`Open user menu`,children:`KB`}),children:[(0,l.jsxs)(`div`,{style:{padding:`12px 16px`,borderBottom:`1px solid var(--sv-color-border)`,fontFamily:`var(--sv-font-family)`},children:[(0,l.jsx)(`div`,{style:{fontWeight:`var(--sv-font-weight-semibold)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`},children:`Kasun Benthara`}),(0,l.jsx)(`div`,{style:{fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`},children:`kasun@openfs.io`})]}),[`Account`,`Console`,`Sign out`].map(e=>(0,l.jsx)(`div`,{style:r,children:e},e))]})})}},m={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsx)(s,{open:t,onClose:()=>n(!1),align:`left`,"aria-label":`Options`,trigger:(0,l.jsx)(a,{onClick:()=>n(e=>!e),children:`Open (left-aligned)`}),children:(0,l.jsx)(`div`,{style:{padding:16,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-muted)`},children:`Panel aligns to the left edge of the trigger.`})})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <Popover open={open} onClose={() => setOpen(false)} align="right" aria-label="Notifications" trigger={<Button variant="ghost" onClick={() => setOpen(o => !o)} aria-label="Notifications">
              🔔
            </Button>}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: '1px solid var(--sv-color-border)',
          fontFamily: 'var(--sv-font-family)'
        }}>
            <span style={{
            fontWeight: 'var(--sv-font-weight-semibold)',
            fontSize: 'var(--sv-font-size-sm)',
            color: 'var(--sv-color-text-primary)'
          }}>
              Notifications
            </span>
            <button type="button" style={{
            background: 'none',
            border: 'none',
            fontSize: 'var(--sv-font-size-caption)',
            color: 'var(--sv-color-text-muted)',
            cursor: 'pointer',
            fontFamily: 'var(--sv-font-family)'
          }}>
              Mark all read
            </button>
          </div>
          <div style={rowStyle}>
            <span style={{
            fontSize: 20
          }}>📦</span>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontWeight: 'var(--sv-font-weight-medium)'
            }}>Plugin updated</div>
              <div style={{
              fontSize: 'var(--sv-font-size-caption)',
              color: 'var(--sv-color-text-muted)'
            }}>
                1 hour ago
              </div>
            </div>
          </div>
          <div style={rowStyle}>
            <span style={{
            fontSize: 20
          }}>✉️</span>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontWeight: 'var(--sv-font-weight-medium)'
            }}>Invite accepted</div>
              <div style={{
              fontSize: 'var(--sv-font-size-caption)',
              color: 'var(--sv-color-text-muted)'
            }}>
                2 min ago
              </div>
            </div>
          </div>
        </Popover>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Notification bell popover — right-aligned, 288px.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [open, setOpen] = useState(false);
    const menuRowStyle: React.CSSProperties = {
      ...rowStyle,
      gap: 10,
      cursor: 'default'
    };
    return <div style={{
      padding: 40
    }}>
        <Popover open={open} onClose={() => setOpen(false)} align="right" aria-label="User menu" trigger={<button type="button" onClick={() => setOpen(o => !o)} style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--sv-color-accent)',
        color: 'var(--sv-color-text-on-accent)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--sv-font-family)',
        fontWeight: 600,
        fontSize: 13
      }} aria-label="Open user menu">
              KB
            </button>}>
          <div style={{
          padding: '12px 16px',
          borderBottom: '1px solid var(--sv-color-border)',
          fontFamily: 'var(--sv-font-family)'
        }}>
            <div style={{
            fontWeight: 'var(--sv-font-weight-semibold)',
            fontSize: 'var(--sv-font-size-sm)',
            color: 'var(--sv-color-text-primary)'
          }}>
              Kasun Benthara
            </div>
            <div style={{
            fontSize: 'var(--sv-font-size-caption)',
            color: 'var(--sv-color-text-muted)'
          }}>
              kasun@openfs.io
            </div>
          </div>
          {['Account', 'Console', 'Sign out'].map(item => <div key={item} style={menuRowStyle}>
              {item}
            </div>)}
        </Popover>
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`User menu — right-aligned with identity header and nav rows.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <Popover open={open} onClose={() => setOpen(false)} align="left" aria-label="Options" trigger={<Button onClick={() => setOpen(o => !o)}>Open (left-aligned)</Button>}>
          <div style={{
          padding: 16,
          fontFamily: 'var(--sv-font-family)',
          fontSize: 'var(--sv-font-size-sm)',
          color: 'var(--sv-color-text-muted)'
        }}>
            Panel aligns to the left edge of the trigger.
          </div>
        </Popover>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Left-aligned variant.`,...m.parameters?.docs?.description}}},h=[`Notifications`,`UserMenu`,`LeftAligned`]}))();export{m as LeftAligned,f as Notifications,p as UserMenu,h as __namedExportsOrder,u as default};