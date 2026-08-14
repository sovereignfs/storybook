import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Icon-DF1Coyog.js";import{n as i,t as a}from"./Button-CWJI07PX.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),i(),o=t(),s={title:`Components/Button`,component:a,parameters:{layout:`centered`,docs:{description:{component:"The primitive interactive control. RSC-safe (no state, forwards props). All styling references `--sv-*` tokens; no hardcoded values."}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`ghost`,`destructive`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},loading:{control:`boolean`},children:{control:`text`}},args:{children:`Button`}},c={args:{variant:`primary`}},l={args:{variant:`secondary`}},u={args:{variant:`ghost`}},d={args:{variant:`destructive`,children:`Delete account`}},f={args:{size:`sm`}},p={args:{size:`md`}},m={args:{size:`lg`}},h={args:{disabled:!0}},g={args:{variant:`secondary`,disabled:!0}},_={args:{loading:!0,children:`Saving…`}},v={args:{variant:`secondary`,loading:!0,children:`Saving…`}},y={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:`plus`,size:`sm`,"aria-hidden":!0}),`Add item`]})}},b={args:{variant:`ghost`,"aria-label":`Settings`,children:(0,o.jsx)(r,{name:`settings`,size:`sm`,"aria-hidden":!0})}},x={render:e=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`flex-start`},children:[`primary`,`secondary`,`ghost`,`destructive`].map(e=>[`lg`,`md`,`sm`].map(t=>(0,o.jsxs)(a,{variant:e,size:t,children:[e,` / `,t]},`${e}-${t}`)))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Delete account'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Saving…'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    loading: true,
    children: 'Saving…'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Icon name="plus" size="sm" aria-hidden />
        Add item
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    'aria-label': 'Settings',
    children: <Icon name="settings" size="sm" aria-hidden />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: _args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start'
  }}>
      {(['primary', 'secondary', 'ghost', 'destructive'] as const).map(v => (['lg', 'md', 'sm'] as const).map(s => <Button key={\`\${v}-\${s}\`} variant={v} size={s}>
            {v} / {s}
          </Button>))}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`All variant × size combinations at a glance.`,...x.parameters?.docs?.description}}},S=[`Primary`,`Secondary`,`Ghost`,`Destructive`,`Small`,`Medium`,`Large`,`Disabled`,`DisabledSecondary`,`Loading`,`LoadingSecondary`,`WithLeadingIcon`,`IconOnly`,`AllVariants`]}))();export{x as AllVariants,d as Destructive,h as Disabled,g as DisabledSecondary,u as Ghost,b as IconOnly,m as Large,_ as Loading,v as LoadingSecondary,p as Medium,c as Primary,l as Secondary,f as Small,y as WithLeadingIcon,S as __namedExportsOrder,s as default};