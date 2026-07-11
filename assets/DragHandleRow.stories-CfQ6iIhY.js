import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./DragHandleRow-_faXU23m.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/DragHandleRow`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},o={padding:`var(--sv-space-3) var(--sv-space-2)`,borderBottom:`1px solid var(--sv-color-border)`,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`,width:`320px`},s={render:()=>(0,i.jsx)(`div`,{children:[`Buy groceries`,`Call the dentist`,`Review pull request`].map(e=>(0,i.jsx)(r,{children:(0,i.jsx)(`div`,{style:o,children:e})},e))}),name:`List of rows (hover to reveal handle)`},c={render:()=>(0,i.jsx)(r,{isDragging:!0,children:(0,i.jsx)(`div`,{style:o,children:`This row is being dragged`})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {['Buy groceries', 'Call the dentist', 'Review pull request'].map(label => <DragHandleRow key={label}>
          <div style={rowStyle}>{label}</div>
        </DragHandleRow>)}
    </div>,
  name: 'List of rows (hover to reveal handle)'
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DragHandleRow isDragging>
      <div style={rowStyle}>This row is being dragged</div>
    </DragHandleRow>
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Dragging`]}))();export{s as Default,c as Dragging,l as __namedExportsOrder,a as default};