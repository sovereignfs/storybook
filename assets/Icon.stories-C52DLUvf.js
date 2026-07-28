import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,n as r,r as i,t as a}from"./Icon-C0Hj1qVk.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),r(),o=t(),s=Object.keys(i),c={title:`Components/Icon`,component:a,parameters:{layout:`centered`,docs:{description:{component:"SVG icon primitive. Icons are either **decorative** (`aria-hidden`) or **meaningful** (`aria-label`). Size is controlled by `--sv-icon-size-*` tokens."}}},argTypes:{name:{control:`select`,options:s},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`]}}},l={args:{name:`house`,size:`md`,"aria-hidden":!0}},u={args:{name:`settings`,size:`md`,"aria-label":`Open settings`}},d={args:{name:`bell`,size:`xs`,"aria-hidden":!0}},f={args:{name:`bell`,size:`sm`,"aria-hidden":!0}},p={args:{name:`bell`,size:`md`,"aria-hidden":!0}},m={args:{name:`bell`,size:`lg`,"aria-hidden":!0}},h={parameters:{layout:`padded`},args:{name:`house`,"aria-hidden":!0},render:e=>(0,o.jsx)(`div`,{children:[`xs`,`sm`,`md`,`lg`].map(e=>(0,o.jsxs)(`section`,{style:{marginBottom:32},children:[(0,o.jsxs)(`h3`,{style:{fontFamily:`system-ui`,fontSize:13,fontWeight:600,color:`var(--sv-color-text-muted)`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:12},children:[`Size: `,e]}),(0,o.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:s.map(t=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4,width:64},children:[(0,o.jsx)(a,{name:t,size:e,"aria-hidden":!0}),(0,o.jsx)(`span`,{style:{fontFamily:`monospace`,fontSize:10,color:`var(--sv-color-text-muted)`,textAlign:`center`,wordBreak:`break-word`},children:t})]},t))})]},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'house',
    size: 'md',
    'aria-hidden': true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'settings',
    size: 'md',
    'aria-label': 'Open settings'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bell',
    size: 'xs',
    'aria-hidden': true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bell',
    size: 'sm',
    'aria-hidden': true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bell',
    size: 'md',
    'aria-hidden': true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bell',
    size: 'lg',
    'aria-hidden': true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    name: 'house',
    'aria-hidden': true
  },
  render: _args => <div>
      {(['xs', 'sm', 'md', 'lg'] as const).map(sz => <section key={sz} style={{
      marginBottom: 32
    }}>
          <h3 style={{
        fontFamily: 'system-ui',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--sv-color-text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 12
      }}>
            Size: {sz}
          </h3>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16
      }}>
            {ALL_NAMES.map(name => <div key={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          width: 64
        }}>
                <Icon name={name} size={sz} aria-hidden />
                <span style={{
            fontFamily: 'monospace',
            fontSize: 10,
            color: 'var(--sv-color-text-muted)',
            textAlign: 'center',
            wordBreak: 'break-word'
          }}>
                  {name}
                </span>
              </div>)}
          </div>
        </section>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Full icon grid — every name across all four sizes.`,...h.parameters?.docs?.description}}},g=[`Decorative`,`Meaningful`,`SizeExtraSmall`,`SizeSmall`,`SizeMedium`,`SizeLarge`,`AllIcons`]}))();export{h as AllIcons,l as Decorative,u as Meaningful,d as SizeExtraSmall,m as SizeLarge,p as SizeMedium,f as SizeSmall,g as __namedExportsOrder,c as default};