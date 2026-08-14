import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-CWJI07PX.js";import{n as o,t as s}from"./Message-DaMFMRJz.js";import{n as c,t as l}from"./MessageScroller-CJ36yrwf.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),c(),o(),i(),d=r(),f={title:`Components/MessageScroller`,component:l,parameters:{layout:`fullscreen`,docs:{description:{component:`Auto-scrolling chat container. Scrolls to the newest message while the user is near the bottom; if they've scrolled up, new content shows a "New messages" button instead of yanking them back down.`}}},args:{children:null}},p=[{sender:`user`,text:`What tasks do I have due this week?`},{sender:`assistant`,text:`You have 3 tasks due this week: review the Q3 report, reply to the design feedback thread, and renew the domain registration.`},{sender:`user`,text:`Can you summarize the Q3 report task?`},{sender:`assistant`,text:`It's tagged "high priority" and due Thursday — created from your Notes plugin two days ago.`}],m={render:()=>{let[e,t]=(0,u.useState)(p);return(0,d.jsxs)(`div`,{style:{height:420,display:`flex`,flexDirection:`column`,maxWidth:480},children:[(0,d.jsx)(`div`,{style:{flex:1,minHeight:0,border:`1px solid var(--sv-color-border)`},children:(0,d.jsx)(l,{children:e.map((e,t)=>(0,d.jsx)(s,{sender:e.sender,children:e.text},t))})}),(0,d.jsx)(`div`,{style:{padding:`var(--sv-space-3)`},children:(0,d.jsx)(a,{size:`sm`,onClick:()=>t(e=>[...e,{sender:`assistant`,text:`New message #${e.length+1}`}]),children:`Add message`})})]})}},h={render:()=>(0,d.jsx)(`div`,{style:{height:420,maxWidth:480,border:`1px solid var(--sv-color-border)`},children:(0,d.jsx)(l,{children:Array.from({length:30},(e,t)=>(0,d.jsxs)(s,{sender:t%2==0?`user`:`assistant`,children:[`Message `,t+1]},t))})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [messages, setMessages] = useState(SEED_MESSAGES);
    return <div style={{
      height: 420,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 480
    }}>
        <div style={{
        flex: 1,
        minHeight: 0,
        border: '1px solid var(--sv-color-border)'
      }}>
          <MessageScroller>
            {messages.map((m, i) => <Message key={i} sender={m.sender}>
                {m.text}
              </Message>)}
          </MessageScroller>
        </div>
        <div style={{
        padding: 'var(--sv-space-3)'
      }}>
          <Button size="sm" onClick={() => setMessages(prev => [...prev, {
          sender: 'assistant',
          text: \`New message #\${prev.length + 1}\`
        }])}>
            Add message
          </Button>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 420,
    maxWidth: 480,
    border: '1px solid var(--sv-color-border)'
  }}>
      <MessageScroller>
        {Array.from({
        length: 30
      }, (_, i) => <Message key={i} sender={i % 2 === 0 ? 'user' : 'assistant'}>
            Message {i + 1}
          </Message>)}
      </MessageScroller>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Interactive`,`LongHistory`]}))();export{m as Interactive,h as LongHistory,g as __namedExportsOrder,f as default};