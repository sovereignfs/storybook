import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BY9QRBCy.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-DBRN-3RW.js";import{n as o,t as s}from"./Dialog-DM_fnhTA.js";function c({size:e=`lg`,label:t=`Example dialog`}){let[n,r]=(0,l.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{onClick:()=>r(!0),children:[`Open `,e,` dialog`]}),(0,u.jsx)(s,{open:n,onClose:()=>r(!1),size:e,"aria-label":t,children:(0,u.jsxs)(`div`,{style:{padding:24,fontFamily:`system-ui`},children:[(0,u.jsx)(`h2`,{style:{fontSize:18,fontWeight:600,color:`var(--sv-color-text-primary)`,marginBottom:12},children:t}),(0,u.jsxs)(`p`,{style:{color:`var(--sv-color-text-muted)`,marginBottom:24},children:[`This is a `,(0,u.jsx)(`strong`,{children:e}),` dialog. Press Esc or click the scrim to dismiss.`]}),(0,u.jsx)(a,{variant:`secondary`,onClick:()=>r(!1),children:`Close`})]})})]})}var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{l=t(n(),1),i(),o(),u=r(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Dialog`,component:s,parameters:{layout:`centered`,docs:{description:{component:"Modal surface (scrim + panel). Router-agnostic — caller provides `onClose`. Supports Esc, scrim-click, focus trap and focus restoration. Sizes: `sm` / `md` / `lg` / `full`. Mobile always renders as a full-screen sheet."}}}},h={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,u.jsx)(c,{size:`sm`,label:`Small dialog`})},g={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,u.jsx)(c,{size:`md`,label:`Medium dialog`})},_={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,u.jsx)(c,{size:`lg`,label:`Large dialog`})},v={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,u.jsx)(s,{open:!1,onClose:()=>{},"aria-label":`Closed dialog`,children:(0,u.jsx)(`p`,{children:`Never seen`})})},y={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,u.jsx)(c,{size:`md`,label:`Interaction test dialog`}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`button`,{name:/open md dialog/i});await f.click(n),await d(t.getByRole(`dialog`)).toBeVisible()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="sm" label="Small dialog" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="md" label="Medium dialog" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="lg" label="Large dialog" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <Dialog open={false} onClose={() => {}} aria-label="Closed dialog">
      <p>Never seen</p>
    </Dialog>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="md" label="Interaction test dialog" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /open md dialog/i
    });
    await userEvent.click(trigger);
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
  }
}`,...y.parameters?.docs?.source},description:{story:`Play function opens the dialog and asserts it is visible.`,...y.parameters?.docs?.description}}},b=[`Small`,`Medium`,`Large`,`Closed`,`OpenViaInteraction`]}))();export{v as Closed,_ as Large,g as Medium,y as OpenViaInteraction,h as Small,b as __namedExportsOrder,m as default};