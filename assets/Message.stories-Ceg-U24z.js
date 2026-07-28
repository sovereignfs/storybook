import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Message-DaMFMRJz.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Components/Message`,component:r,parameters:{layout:`padded`,docs:{description:{component:"A single chat turn, for the Sovereign Harness assistant (RFC 0040). `sender` is one of user/assistant/tool — matching harness_messages (named `sender`, not `role`, to avoid colliding with the ARIA role attribute). Content is caller-controlled ReactNode; markdown rendering, if any, is the consumer's choice."}}},args:{sender:`assistant`,children:`Your task is due Thursday.`}},o={args:{sender:`user`,children:`What tasks do I have due this week?`}},s={args:{sender:`assistant`}},c={args:{sender:`tool`,children:`query_tasks({ dueBefore: "2026-08-01" }) → 3 results`}},l={args:{sender:`assistant`,pending:!0}},u={args:{sender:`assistant`,actions:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`button`,{type:`button`,style:{all:`unset`,cursor:`pointer`},children:`Forget this`}),(0,i.jsx)(`span`,{children:`·`}),(0,i.jsx)(`button`,{type:`button`,style:{all:`unset`,cursor:`pointer`},children:`Copy`})]})}},d={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,i.jsx)(r,{sender:`user`,children:`What tasks do I have due this week?`}),(0,i.jsxs)(r,{sender:`tool`,children:[`query_tasks(`,`{`,` dueBefore: "2026-08-01" `,`}`,`) → 3 results`]}),(0,i.jsx)(r,{sender:`assistant`,actions:(0,i.jsx)(`button`,{type:`button`,style:{all:`unset`,cursor:`pointer`},children:`Forget this`}),children:`You have 3 tasks due this week: review the Q3 report, reply to the design feedback thread, and renew the domain registration.`}),(0,i.jsx)(r,{sender:`user`,children:`Thanks!`}),(0,i.jsx)(r,{sender:`assistant`,pending:!0})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    sender: 'user',
    children: 'What tasks do I have due this week?'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sender: 'assistant'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sender: 'tool',
    children: 'query_tasks({ dueBefore: "2026-08-01" }) → 3 results'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sender: 'assistant',
    pending: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sender: 'assistant',
    actions: <>
        <button type="button" style={{
        all: 'unset',
        cursor: 'pointer'
      }}>
          Forget this
        </button>
        <span>·</span>
        <button type="button" style={{
        all: 'unset',
        cursor: 'pointer'
      }}>
          Copy
        </button>
      </>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Message sender="user">What tasks do I have due this week?</Message>
      <Message sender="tool">
        query_tasks({'{'} dueBefore: "2026-08-01" {'}'}) → 3 results
      </Message>
      <Message sender="assistant" actions={<button type="button" style={{
      all: 'unset',
      cursor: 'pointer'
    }}>
            Forget this
          </button>}>
        You have 3 tasks due this week: review the Q3 report, reply to the design feedback thread,
        and renew the domain registration.
      </Message>
      <Message sender="user">Thanks!</Message>
      <Message sender="assistant" pending />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`User`,`Assistant`,`Tool`,`Pending`,`WithActions`,`Conversation`]}))();export{s as Assistant,d as Conversation,l as Pending,c as Tool,o as User,u as WithActions,f as __namedExportsOrder,a as default};