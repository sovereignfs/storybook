import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-XGARfBWZ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-CUP6Q5Pz.js";import{n as o,t as s}from"./Popover-B52qODx5.js";var c,l,u,d,f,p,m,h,g,_,v;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`Components/Popover`,component:s,parameters:{layout:`centered`,docs:{description:{component:"Floating panel anchored to a trigger, below it by default. Non-modal: closes on outside click or Escape. `align` controls which trigger edge the panel aligns to; `width` accepts a fixed px number or `\"trigger\"` to match the trigger's own rendered width. Automatically flips to open upward instead of downward if the panel wouldn't fit below the trigger within the viewport."}}},args:{open:!1,onClose:()=>{},trigger:(0,l.jsx)(`button`,{type:`button`,children:`Trigger`}),"aria-label":`Popover`,children:null}},d={display:`flex`,alignItems:`center`,gap:12,padding:`10px 16px`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`,borderBottom:`1px solid var(--sv-color-border)`,cursor:`pointer`},f={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsxs)(s,{open:t,onClose:()=>n(!1),align:`right`,"aria-label":`Notifications`,trigger:(0,l.jsx)(a,{variant:`ghost`,onClick:()=>n(e=>!e),"aria-label":`Notifications`,children:`🔔`}),children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`12px 16px`,borderBottom:`1px solid var(--sv-color-border)`,fontFamily:`var(--sv-font-family)`},children:[(0,l.jsx)(`span`,{style:{fontWeight:`var(--sv-font-weight-semibold)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`},children:`Notifications`}),(0,l.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`,cursor:`pointer`,fontFamily:`var(--sv-font-family)`},children:`Mark all read`})]}),(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(`span`,{style:{fontSize:20},children:`📦`}),(0,l.jsxs)(`div`,{style:{flex:1},children:[(0,l.jsx)(`div`,{style:{fontWeight:`var(--sv-font-weight-medium)`},children:`Plugin updated`}),(0,l.jsx)(`div`,{style:{fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`},children:`1 hour ago`})]})]}),(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(`span`,{style:{fontSize:20},children:`✉️`}),(0,l.jsxs)(`div`,{style:{flex:1},children:[(0,l.jsx)(`div`,{style:{fontWeight:`var(--sv-font-weight-medium)`},children:`Invite accepted`}),(0,l.jsx)(`div`,{style:{fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`},children:`2 min ago`})]})]})]})})}},p={render:e=>{let[t,n]=(0,c.useState)(!1),r={...d,gap:10,cursor:`default`};return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsxs)(s,{open:t,onClose:()=>n(!1),align:`right`,"aria-label":`User menu`,trigger:(0,l.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),style:{width:32,height:32,borderRadius:`50%`,background:`var(--sv-color-accent)`,color:`var(--sv-color-text-on-accent)`,border:`none`,cursor:`pointer`,fontFamily:`var(--sv-font-family)`,fontWeight:600,fontSize:13},"aria-label":`Open user menu`,children:`KB`}),children:[(0,l.jsxs)(`div`,{style:{padding:`12px 16px`,borderBottom:`1px solid var(--sv-color-border)`,fontFamily:`var(--sv-font-family)`},children:[(0,l.jsx)(`div`,{style:{fontWeight:`var(--sv-font-weight-semibold)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`},children:`Kasun Benthara`}),(0,l.jsx)(`div`,{style:{fontSize:`var(--sv-font-size-caption)`,color:`var(--sv-color-text-muted)`},children:`kasun@openfs.io`})]}),[`Account`,`Console`,`Sign out`].map(e=>(0,l.jsx)(`div`,{style:r,children:e},e))]})})}},m={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsx)(s,{open:t,onClose:()=>n(!1),align:`left`,"aria-label":`Options`,trigger:(0,l.jsx)(a,{onClick:()=>n(e=>!e),children:`Open (left-aligned)`}),children:(0,l.jsx)(`div`,{style:{padding:16,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-muted)`},children:`Panel aligns to the left edge of the trigger.`})})})}},h={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{padding:40},children:(0,l.jsx)(s,{open:t,onClose:()=>n(!1),align:`left`,width:160,panelStyle:{borderRadius:0},"aria-label":`Colour`,trigger:(0,l.jsx)(a,{onClick:()=>n(e=>!e),children:`Open (square panel)`}),children:(0,l.jsx)(`div`,{style:{padding:16,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-muted)`},children:`No rounded corners.`})})})}},g={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{padding:40,width:360},children:(0,l.jsx)(s,{open:t,onClose:()=>n(!1),align:`left`,width:`trigger`,"aria-label":`Set due date`,trigger:(0,l.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),style:{width:`100%`,boxSizing:`border-box`,textAlign:`left`,padding:`10px 14px`,border:`1px solid var(--sv-color-border)`,borderRadius:`var(--sv-radius-md)`,background:`var(--sv-color-surface-raised)`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`,cursor:`pointer`},children:`No due date`}),children:(0,l.jsx)(`div`,{style:{padding:16,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-muted)`},children:`Panel width matches the 360px trigger above exactly, instead of a fixed pixel value that would overflow or leave a gap at other trigger widths.`})})})}},_={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{height:`70vh`,display:`flex`,alignItems:`flex-end`,justifyContent:`center`,paddingBottom:24},children:(0,l.jsx)(s,{open:t,onClose:()=>n(!1),align:`left`,"aria-label":`Options`,trigger:(0,l.jsx)(a,{onClick:()=>n(e=>!e),children:`Open (near viewport bottom)`}),children:(0,l.jsx)(`div`,{style:{padding:16,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-muted)`},children:`This trigger sits near the bottom of the viewport, so the panel opens upward instead of getting clipped below.`})})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Left-aligned variant.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <Popover open={open} onClose={() => setOpen(false)} align="left" width={160} panelStyle={{
        borderRadius: 0
      }} aria-label="Colour" trigger={<Button onClick={() => setOpen(o => !o)}>Open (square panel)</Button>}>
          <div style={{
          padding: 16,
          fontFamily: 'var(--sv-font-family)',
          fontSize: 'var(--sv-font-size-sm)',
          color: 'var(--sv-color-text-muted)'
        }}>
            No rounded corners.
          </div>
        </Popover>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`\`panelStyle\` overrides the panel's own chrome (square corners here) —
 an escape hatch for compact pickers where the default rounded panel
 doesn't fit the content (e.g. a small colour-swatch grid).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 40,
      width: 360
    }}>
        <Popover open={open} onClose={() => setOpen(false)} align="left" width="trigger" aria-label="Set due date" trigger={<button type="button" onClick={() => setOpen(o => !o)} style={{
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'left',
        padding: '10px 14px',
        border: '1px solid var(--sv-color-border)',
        borderRadius: 'var(--sv-radius-md)',
        background: 'var(--sv-color-surface-raised)',
        fontFamily: 'var(--sv-font-family)',
        fontSize: 'var(--sv-font-size-sm)',
        color: 'var(--sv-color-text-primary)',
        cursor: 'pointer'
      }}>
              No due date
            </button>}>
          <div style={{
          padding: 16,
          fontFamily: 'var(--sv-font-family)',
          fontSize: 'var(--sv-font-size-sm)',
          color: 'var(--sv-color-text-muted)'
        }}>
            Panel width matches the 360px trigger above exactly, instead of a fixed pixel value that
            would overflow or leave a gap at other trigger widths.
          </div>
        </Popover>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`\`width="trigger"\` matches the panel's width to the trigger's own rendered
 width — for a dropdown under a full-width form field, a fixed px value
 would either overflow or leave a gap depending on the field's own width.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      height: '70vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 24
    }}>
        <Popover open={open} onClose={() => setOpen(false)} align="left" aria-label="Options" trigger={<Button onClick={() => setOpen(o => !o)}>Open (near viewport bottom)</Button>}>
          <div style={{
          padding: 16,
          fontFamily: 'var(--sv-font-family)',
          fontSize: 'var(--sv-font-size-sm)',
          color: 'var(--sv-color-text-muted)'
        }}>
            This trigger sits near the bottom of the viewport, so the panel opens upward instead of
            getting clipped below.
          </div>
        </Popover>
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Flips to open upward automatically when the panel wouldn't fit below the
 trigger within the viewport — no prop needed, this is always on.`,..._.parameters?.docs?.description}}},v=[`Notifications`,`UserMenu`,`LeftAligned`,`SquareCorners`,`MatchesTriggerWidth`,`OpensUpward`]}))();export{m as LeftAligned,g as MatchesTriggerWidth,f as Notifications,_ as OpensUpward,h as SquareCorners,p as UserMenu,v as __namedExportsOrder,u as default};