import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-XGARfBWZ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-CUP6Q5Pz.js";import{n as o,r as s,t as c}from"./Dialog-De7lytBM.js";function l({size:e=`lg`,label:t=`Example dialog`}){let[n,r]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a,{onClick:()=>r(!0),children:[`Open `,e,` dialog`]}),(0,f.jsx)(c,{open:n,onClose:()=>r(!1),size:e,"aria-label":t,children:(0,f.jsxs)(`div`,{style:{padding:24,fontFamily:`system-ui`},children:[(0,f.jsx)(`h2`,{style:{fontSize:18,fontWeight:600,color:`var(--sv-color-text-primary)`,marginBottom:12},children:t}),(0,f.jsxs)(`p`,{style:{color:`var(--sv-color-text-muted)`,marginBottom:24},children:[`This is a `,(0,f.jsx)(`strong`,{children:e}),` dialog. Press Esc or click the scrim to dismiss.`]}),(0,f.jsx)(a,{variant:`secondary`,onClick:()=>r(!1),children:`Close`})]})})]})}function u(){let e=s((0,f.jsx)(`div`,{style:{display:`flex`,gap:16,padding:`0 16px`},children:[`Profile`,`Security`,`Preferences`].map(e=>(0,f.jsx)(`span`,{style:{fontSize:14,color:`var(--sv-color-text-primary)`},children:e},e))}));return(0,f.jsxs)(`p`,{style:{color:`var(--sv-color-text-muted)`,fontSize:13},children:[`useOverlaySecondRow found a Dialog ancestor: `,(0,f.jsx)(`strong`,{children:String(e)}),`. Switch the viewport toolbar to a mobile width to see the tab strip render inside the Dialog's own mobile OverlayHeader instead of here.`]})}var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{d=t(n(),1),i(),o(),f=r(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Dialog`,component:c,parameters:{layout:`centered`,docs:{description:{component:"Modal surface (scrim + panel). Router-agnostic — caller provides `onClose`. Supports Esc, scrim-click, focus trap and focus restoration. Sizes: `sm` / `md` / `lg` / `full`. Mobile always renders as a full-screen sheet."}}}},_={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(l,{size:`sm`,label:`Small dialog`})},v={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(l,{size:`md`,label:`Medium dialog`})},y={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(l,{size:`lg`,label:`Large dialog`})},b={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(c,{open:!1,onClose:()=>{},"aria-label":`Closed dialog`,children:(0,f.jsx)(`p`,{children:`Never seen`})})},x={args:{open:!1,onClose:()=>{},children:null},render:e=>(0,f.jsx)(l,{size:`md`,label:`Interaction test dialog`}),play:async({canvasElement:e})=>{let t=h(e),n=t.getByRole(`button`,{name:/open md dialog/i});await m.click(n),await p(t.getByRole(`dialog`)).toBeVisible()}},S={args:{open:!1,onClose:()=>{},children:null},render:e=>{function t(){let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:()=>t(!0),children:`Open dialog with tab strip`}),(0,f.jsx)(c,{open:e,onClose:()=>t(!1),title:`Account`,"aria-label":`Account`,children:(0,f.jsx)(`div`,{style:{padding:24,fontFamily:`system-ui`},children:(0,f.jsx)(u,{})})})]})}return(0,f.jsx)(t,{})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="sm" label="Small dialog" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="md" label="Medium dialog" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <DialogDemo size="lg" label="Large dialog" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => <Dialog open={false} onClose={() => {}} aria-label="Closed dialog">
      <p>Never seen</p>
    </Dialog>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Play function opens the dialog and asserts it is visible.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: _args => {
    function Demo() {
      const [open, setOpen] = useState(false);
      return <>
          <Button onClick={() => setOpen(true)}>Open dialog with tab strip</Button>
          <Dialog open={open} onClose={() => setOpen(false)} title="Account" aria-label="Account">
            <div style={{
            padding: 24,
            fontFamily: 'system-ui'
          }}>
              <NestedTabStrip />
            </div>
          </Dialog>
        </>;
    }
    return <Demo />;
  }
}`,...S.parameters?.docs?.source},description:{story:`Demonstrates useOverlaySecondRow — solves the "double header" problem for
overlay-shell plugins (Console, Account): a deeply-nested layout hands its
tab strip up to the enclosing Dialog's mobile OverlayHeader instead of
rendering a second header bar as ordinary content. Only visible at mobile
widths, where Dialog's own OverlayHeader takes over; at desktop widths the
secondRow prop has no visible effect (OverlayHeader is desktop-hidden).`,...S.parameters?.docs?.description}}},C=[`Small`,`Medium`,`Large`,`Closed`,`OpenViaInteraction`,`WithOverlaySecondRow`]}))();export{b as Closed,y as Large,v as Medium,x as OpenViaInteraction,_ as Small,S as WithOverlaySecondRow,C as __namedExportsOrder,g as default};