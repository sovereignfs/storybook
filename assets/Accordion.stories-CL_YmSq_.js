import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Accordion-BdnalT5F.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{o=t(n(),1),i(),s=r(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Accordion`,component:a,parameters:{layout:`padded`,docs:{description:{component:`One or more Collapsible sections. type="single" closes other sections when one opens; type="multiple" allows any number open at once.`}}},args:{items:[],type:`single`,openIds:[],onOpenIdsChange:()=>{}}},f=[{id:`plugins`,trigger:`What plugins ship by default?`,content:`Only the platform plugins (Console, Launcher, Account) plus Sovereign Tasks.`},{id:`hosting`,trigger:`Can I self-host this?`,content:`Yes — Sovereign is designed to be self-hosted via Docker Compose.`},{id:`pricing`,trigger:`Is it free?`,content:`The platform is open source. Individual plugins may have their own pricing.`}],p={render:()=>{let[e,t]=(0,o.useState)([`plugins`]);return(0,s.jsx)(a,{items:f,type:`single`,openIds:e,onOpenIdsChange:t})}},m={render:()=>{let[e,t]=(0,o.useState)([`plugins`,`hosting`]);return(0,s.jsx)(a,{items:f,type:`multiple`,openIds:e,onOpenIdsChange:t})}},h={render:()=>{let[e,t]=(0,o.useState)([`changelog`]);return(0,s.jsx)(a,{items:[{id:`changelog`,trigger:`Full changelog`,content:(0,s.jsxs)(`ul`,{style:{margin:0,paddingLeft:20},children:[(0,s.jsx)(`li`,{children:`Added component sizing alignment across the design system`}),(0,s.jsx)(`li`,{children:`Added RadioGroup, Slider, Progress, Table, Alert primitives`}),(0,s.jsx)(`li`,{children:`Added Breadcrumb, Pagination, and Kbd primitives`}),(0,s.jsx)(`li`,{children:`Added Accordion and Collapsible primitives`})]})}],type:`single`,openIds:e,onOpenIdsChange:t})}},g={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{items:f,type:`single`,openIds:e,onOpenIdsChange:t})},play:async({canvasElement:e})=>{let t=u(e),n=t.getByRole(`button`,{name:`What plugins ship by default?`});await c(n).toHaveAttribute(`aria-expanded`,`false`),n.focus(),await l.keyboard(`{Enter}`),await c(n).toHaveAttribute(`aria-expanded`,`true`),await c(t.getByText(/Only the platform plugins/)).toBeVisible(),await l.keyboard(` `),await c(n).toHaveAttribute(`aria-expanded`,`false`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openIds, setOpenIds] = useState<string[]>(['plugins']);
    return <Accordion items={FAQ_ITEMS} type="single" openIds={openIds} onOpenIdsChange={setOpenIds} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openIds, setOpenIds] = useState<string[]>(['plugins', 'hosting']);
    return <Accordion items={FAQ_ITEMS} type="multiple" openIds={openIds} onOpenIdsChange={setOpenIds} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openIds, setOpenIds] = useState<string[]>(['changelog']);
    return <Accordion items={[{
      id: 'changelog',
      trigger: 'Full changelog',
      content: <ul style={{
        margin: 0,
        paddingLeft: 20
      }}>
                <li>Added component sizing alignment across the design system</li>
                <li>Added RadioGroup, Slider, Progress, Table, Alert primitives</li>
                <li>Added Breadcrumb, Pagination, and Kbd primitives</li>
                <li>Added Accordion and Collapsible primitives</li>
              </ul>
    }]} type="single" openIds={openIds} onOpenIdsChange={setOpenIds} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openIds, setOpenIds] = useState<string[]>([]);
    return <Accordion items={FAQ_ITEMS} type="single" openIds={openIds} onOpenIdsChange={setOpenIds} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'What plugins ship by default?'
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(/Only the platform plugins/)).toBeVisible();
    await userEvent.keyboard(' ');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`MultipleOpen`,`LongContent`,`KeyboardInteraction`]}))();export{p as Default,g as KeyboardInteraction,h as LongContent,m as MultipleOpen,_ as __namedExportsOrder,d as default};