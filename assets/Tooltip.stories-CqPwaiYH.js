import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-CdETOed9.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Icon-jIDj8qQr.js";import{n as o,t as s}from"./Button-DBRN-3RW.js";var c,l,u,d,f,p,m,h=e((()=>{c=`_wrapper_b7yal_1`,l=`_tip_b7yal_6`,u=`_top_b7yal_29`,d=`_bottom_b7yal_35`,f=`_left_b7yal_41`,p=`_right_b7yal_47`,m={wrapper:c,tip:l,top:u,bottom:d,left:f,right:p}}));function g({content:e,children:t,side:n=`top`}){let r=(0,_.useId)();return(0,v.jsxs)(`span`,{className:m.wrapper,children:[(0,v.jsx)(`span`,{"aria-describedby":r,children:t}),(0,v.jsx)(`span`,{id:r,role:`tooltip`,className:[m.tip,y[n]].join(` `),children:e})]})}var _,v,y,b=e((()=>{_=t(n(),1),h(),v=r(),y={top:m.top,bottom:m.bottom,left:m.left,right:m.right},g.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactElement`},description:``},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}}}}})),x,S,C,w,T,E;e((()=>{b(),o(),i(),x=r(),S={title:`Components/Tooltip`,component:g,parameters:{layout:`centered`}},C={args:{content:`This is a tooltip`,children:(0,x.jsx)(s,{variant:`secondary`,children:`Hover me`})}},w={args:{content:`More information`,children:(0,x.jsx)(`span`,{style:{color:`var(--sv-color-text-muted)`,cursor:`default`},children:(0,x.jsx)(a,{name:`info`,size:`md`,"aria-label":`Info`})})}},T={args:{content:``,children:(0,x.jsx)(`span`,{})},render:()=>(0,x.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,padding:48},children:[(0,x.jsx)(g,{content:`Top`,side:`top`,children:(0,x.jsx)(s,{variant:`ghost`,size:`sm`,children:`Top`})}),(0,x.jsx)(g,{content:`Bottom`,side:`bottom`,children:(0,x.jsx)(s,{variant:`ghost`,size:`sm`,children:`Bottom`})}),(0,x.jsx)(g,{content:`Left`,side:`left`,children:(0,x.jsx)(s,{variant:`ghost`,size:`sm`,children:`Left`})}),(0,x.jsx)(g,{content:`Right`,side:`right`,children:(0,x.jsx)(s,{variant:`ghost`,size:`sm`,children:`Right`})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <Button variant="secondary">Hover me</Button>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'More information',
    children: <span style={{
      color: 'var(--sv-color-text-muted)',
      cursor: 'default'
    }}>
        <Icon name="info" size="md" aria-label="Info" />
      </span>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`OnIcon`,`Sides`]}))();export{C as Default,w as OnIcon,T as Sides,E as __namedExportsOrder,S as default};