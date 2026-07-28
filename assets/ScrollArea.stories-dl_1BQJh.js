import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./ScrollArea-DOOEThE2.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={title:`Components/ScrollArea`,component:r,parameters:{layout:`padded`},args:{children:null}},o={render:()=>(0,i.jsx)(`div`,{style:{width:280},children:(0,i.jsx)(r,{maxHeight:160,children:(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:4},children:Array.from({length:20},(e,t)=>(0,i.jsxs)(`div`,{style:{fontSize:14},children:[`Row `,t+1]},t))})})})},s={render:()=>(0,i.jsx)(r,{maxWidth:320,children:(0,i.jsx)(`div`,{style:{display:`flex`,gap:8,padding:4,width:`max-content`},children:Array.from({length:12},(e,t)=>(0,i.jsx)(`div`,{style:{width:80,height:60,flexShrink:0,background:`var(--sv-color-surface-sunken)`,borderRadius:`var(--sv-radius-md)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12},children:t+1},t))})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280
  }}>
      <ScrollArea maxHeight={160}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 4
      }}>
          {Array.from({
          length: 20
        }, (_, i) => <div key={i} style={{
          fontSize: 14
        }}>
              Row {i + 1}
            </div>)}
        </div>
      </ScrollArea>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea maxWidth={320}>
      <div style={{
      display: 'flex',
      gap: 8,
      padding: 4,
      width: 'max-content'
    }}>
        {Array.from({
        length: 12
      }, (_, i) => <div key={i} style={{
        width: 80,
        height: 60,
        flexShrink: 0,
        background: 'var(--sv-color-surface-sunken)',
        borderRadius: 'var(--sv-radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12
      }}>
            {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...s.parameters?.docs?.source}}},c=[`Vertical`,`Horizontal`]}))();export{s as Horizontal,o as Vertical,c as __namedExportsOrder,a as default};