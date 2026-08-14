import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Alert-Cg0yzS9C.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i=t(),a={title:`Components/Alert`,component:r,parameters:{layout:`padded`,docs:{description:{component:"Inline, non-dismissible banner. Distinct from Toast (transient) and SystemBanner (instance-wide) — for form-level errors or explaining an empty/blocked state. A leading icon defaults per variant (none for neutral) — pass `icon` to override it or `icon={false}` to suppress it."}}},argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`,`neutral`]}},args:{variant:`info`,children:`This is an informational message.`}},o={args:{variant:`info`}},s={args:{variant:`success`,children:`Your changes have been saved.`}},c={args:{variant:`warning`,children:`This action cannot be undone.`}},l={name:`Error`,args:{variant:`error`,children:`Select a size to continue.`}},u={args:{variant:`neutral`,children:`This project has no members yet.`}},d={args:{variant:`error`,heading:`Something went wrong`,children:`We couldn’t save your changes. Check your connection and try again.`}},f={args:{variant:`success`,children:`Invite sent.`}},p={args:{variant:`success`,heading:`Payment successful`,children:`Your payment of $29.99 has been processed. A receipt has been sent to your email address.`}},m={args:{variant:`neutral`,icon:`bell`,children:`You have 3 unread notifications.`}},h={args:{variant:`success`,icon:!1,children:`Your changes have been saved.`}},g={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:480},children:[(0,i.jsx)(r,{variant:`info`,heading:`New feature available`,children:`We’ve added dark mode support. You can enable it in your account settings.`}),(0,i.jsx)(r,{variant:`success`,heading:`Payment successful`,children:`Your payment of $29.99 has been processed. A receipt has been sent to your email address.`}),(0,i.jsx)(r,{variant:`warning`,children:`This action cannot be undone.`}),(0,i.jsx)(r,{variant:`error`,children:`Select a size to continue.`}),(0,i.jsx)(r,{variant:`neutral`,children:`This project has no members yet.`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Your changes have been saved.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This action cannot be undone.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    variant: 'error',
    children: 'Select a size to continue.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    children: 'This project has no members yet.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    heading: 'Something went wrong',
    children: 'We couldn’t save your changes. Check your connection and try again.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Invite sent.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Payment successful',
    children: 'Your payment of $29.99 has been processed. A receipt has been sent to your email address.'
  }
}`,...p.parameters?.docs?.source},description:{story:`Icon + heading + body — the pattern most alert examples use.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    icon: 'bell',
    children: 'You have 3 unread notifications.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    icon: false,
    children: 'Your changes have been saved.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 480
  }}>
      <Alert variant="info" heading="New feature available">
        We’ve added dark mode support. You can enable it in your account settings.
      </Alert>
      <Alert variant="success" heading="Payment successful">
        Your payment of $29.99 has been processed. A receipt has been sent to your email address.
      </Alert>
      <Alert variant="warning">This action cannot be undone.</Alert>
      <Alert variant="error">Select a size to continue.</Alert>
      <Alert variant="neutral">This project has no members yet.</Alert>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Every variant with its default icon, at a glance.`,...g.parameters?.docs?.description}}},_=[`Info`,`Success`,`Warning`,`ErrorVariant`,`Neutral`,`WithHeading`,`WithoutHeading`,`IconHeadingAndBody`,`CustomIcon`,`NoIcon`,`AllVariants`]}))();export{g as AllVariants,m as CustomIcon,l as ErrorVariant,p as IconHeadingAndBody,o as Info,u as Neutral,h as NoIcon,s as Success,c as Warning,d as WithHeading,f as WithoutHeading,_ as __namedExportsOrder,a as default};