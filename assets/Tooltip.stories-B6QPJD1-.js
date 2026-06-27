import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Icon-jIDj8qQr.js";import{n as i,t as a}from"./Button-DBRN-3RW.js";import{n as o,t as s}from"./Tooltip-xtVb-BTj.js";var c,l,u,d,f,p;e((()=>{o(),i(),n(),c=t(),l={title:`Components/Tooltip`,component:s,parameters:{layout:`centered`}},u={args:{content:`This is a tooltip`,children:(0,c.jsx)(a,{variant:`secondary`,children:`Hover me`})}},d={args:{content:`More information`,children:(0,c.jsx)(`span`,{style:{color:`var(--sv-color-text-muted)`,cursor:`default`},children:(0,c.jsx)(r,{name:`info`,size:`md`,"aria-label":`Info`})})}},f={args:{content:``,children:(0,c.jsx)(`span`,{})},render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,padding:48},children:[(0,c.jsx)(s,{content:`Top`,side:`top`,children:(0,c.jsx)(a,{variant:`ghost`,size:`sm`,children:`Top`})}),(0,c.jsx)(s,{content:`Bottom`,side:`bottom`,children:(0,c.jsx)(a,{variant:`ghost`,size:`sm`,children:`Bottom`})}),(0,c.jsx)(s,{content:`Left`,side:`left`,children:(0,c.jsx)(a,{variant:`ghost`,size:`sm`,children:`Left`})}),(0,c.jsx)(s,{content:`Right`,side:`right`,children:(0,c.jsx)(a,{variant:`ghost`,size:`sm`,children:`Right`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <Button variant="secondary">Hover me</Button>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'More information',
    children: <span style={{
      color: 'var(--sv-color-text-muted)',
      cursor: 'default'
    }}>
        <Icon name="info" size="md" aria-label="Info" />
      </span>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: '',
    children: <span />
  },
  render: () => <div style={{
    display: 'flex',
    gap: 48,
    alignItems: 'center',
    padding: 48
  }}>
      <Tooltip content="Top" side="top">
        <Button variant="ghost" size="sm">
          Top
        </Button>
      </Tooltip>
      <Tooltip content="Bottom" side="bottom">
        <Button variant="ghost" size="sm">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content="Left" side="left">
        <Button variant="ghost" size="sm">
          Left
        </Button>
      </Tooltip>
      <Tooltip content="Right" side="right">
        <Button variant="ghost" size="sm">
          Right
        </Button>
      </Tooltip>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`OnIcon`,`Sides`]}))();export{u as Default,d as OnIcon,f as Sides,p as __namedExportsOrder,l as default};