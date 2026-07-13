import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-XGARfBWZ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Icon-DJILrYj9.js";import{n as o,t as s}from"./Button-CUP6Q5Pz.js";import{n as c,t as l}from"./Drawer-CNFcaLOr.js";function u({label:e=`Navigation`}){let[t,n]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{onClick:()=>n(!0),children:`Open drawer`}),(0,f.jsx)(l,{open:t,onClose:()=>n(!1),"aria-label":e,children:(0,f.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:`8px 0`},children:[`house`,`grid-2x2`,`settings`,`user`].map(e=>(0,f.jsx)(`li`,{children:(0,f.jsxs)(`button`,{onClick:()=>n(!1),style:{display:`flex`,alignItems:`center`,gap:12,width:`100%`,padding:`12px 20px`,background:`none`,border:`none`,cursor:`pointer`,fontSize:15,color:`var(--sv-color-text-primary)`,fontFamily:`system-ui`},children:[(0,f.jsx)(a,{name:e,size:`md`,"aria-hidden":!0}),e.replace(/-/g,` `)]})},e))})})]})}var d,f,p,m,h,g,_,v,y,b;e((()=>{d=t(n(),1),o(),i(),c(),f=r(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Drawer`,component:l,parameters:{layout:`centered`,docs:{description:{component:"Dismissable bottom-sheet panel. Used by the mobile shell for plugin navigation. Supports Esc, scrim-click, focus trap. Respects `env(safe-area-inset-bottom)`. Use the viewport addon at 375px to see the intended mobile context."}},viewport:{defaultViewport:`mobile`}}},_={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(u,{})},v={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(l,{open:!1,onClose:()=>{},"aria-label":`Closed drawer`,children:(0,f.jsx)(`p`,{children:`Never seen`})})},y={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(u,{label:`Navigation menu`}),play:async({canvasElement:e})=>{let t=h(e);await m.click(t.getByRole(`button`,{name:/open drawer/i})),await p(t.getByRole(`navigation`)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DrawerDemo />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <Drawer open={false} onClose={() => {}} aria-label="Closed drawer">
      <p>Never seen</p>
    </Drawer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DrawerDemo label="Navigation menu" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /open drawer/i
    }));
    const drawer = canvas.getByRole('navigation');
    await expect(drawer).toBeVisible();
  }
}`,...y.parameters?.docs?.source},description:{story:`Play function opens the drawer and asserts its list items are visible.`,...y.parameters?.docs?.description}}},b=[`Default`,`Closed`,`OpenViaInteraction`]}))();export{v as Closed,_ as Default,y as OpenViaInteraction,b as __namedExportsOrder,g as default};