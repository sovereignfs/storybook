import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./HoverCard-CtO7FR4E.js";import{n as i,t as a}from"./Avatar-Df043eYX.js";var o,s,c,l,u;e((()=>{n(),i(),o=t(),s={title:`Components/HoverCard`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Hover-triggered popover on desktop, tap-to-toggle on touch. Built on Popover for positioning/collision detection — this only adds hover-intent timing and the touch fallback. Opens on keyboard focus too.`}}},args:{trigger:(0,o.jsx)(`span`,{}),children:null,"aria-label":`Preview`}},c={render:()=>(0,o.jsx)(r,{"aria-label":`User preview`,trigger:(0,o.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`},children:(0,o.jsx)(a,{name:`Jane Smith`,size:`sm`})}),children:(0,o.jsxs)(`div`,{style:{padding:`var(--sv-space-3)`,fontSize:14},children:[(0,o.jsx)(`div`,{style:{fontWeight:600},children:`Jane Smith`}),(0,o.jsx)(`div`,{style:{color:`var(--sv-color-text-muted)`},children:`jane@example.com`})]})})},l={render:()=>(0,o.jsxs)(`p`,{style:{fontSize:14},children:[`Assigned to`,` `,(0,o.jsx)(r,{"aria-label":`Assignee preview`,trigger:(0,o.jsx)(`a`,{href:`/console/users/jane-smith`,style:{color:`var(--sv-color-text-primary)`},children:`Jane Smith`}),children:(0,o.jsxs)(`div`,{style:{padding:`var(--sv-space-3)`,fontSize:14},children:[(0,o.jsx)(`div`,{style:{fontWeight:600},children:`Jane Smith`}),(0,o.jsx)(`div`,{style:{color:`var(--sv-color-text-muted)`},children:`12 tasks completed this month`})]})}),`.`]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard aria-label="User preview" trigger={<button type="button" style={{
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer'
  }}>
          <Avatar name="Jane Smith" size="sm" />
        </button>}>
      <div style={{
      padding: 'var(--sv-space-3)',
      fontSize: 14
    }}>
        <div style={{
        fontWeight: 600
      }}>Jane Smith</div>
        <div style={{
        color: 'var(--sv-color-text-muted)'
      }}>jane@example.com</div>
      </div>
    </HoverCard>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    fontSize: 14
  }}>
      Assigned to{' '}
      <HoverCard aria-label="Assignee preview" trigger={<a href="/console/users/jane-smith" style={{
      color: 'var(--sv-color-text-primary)'
    }}>
            Jane Smith
          </a>}>
        <div style={{
        padding: 'var(--sv-space-3)',
        fontSize: 14
      }}>
          <div style={{
          fontWeight: 600
        }}>Jane Smith</div>
          <div style={{
          color: 'var(--sv-color-text-muted)'
        }}>12 tasks completed this month</div>
        </div>
      </HoverCard>
      .
    </p>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithLink`]}))();export{c as Default,l as WithLink,u as __namedExportsOrder,s as default};