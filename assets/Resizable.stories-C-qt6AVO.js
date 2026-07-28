import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,n as r,r as i,t as a}from"./Resizable-jxUE-lGb.js";var o,s,c,l,u,d,f;e((()=>{n(),o=t(),s={title:`Components/Resizable`,component:i,parameters:{layout:`padded`,docs:{description:{component:`A row or column of resizable panes. Each handle resizes only its two immediate neighbor panels, clamped to their own min/max. Desktop-oriented — panels render at their default sizes on touch.`}}},args:{direction:`horizontal`,children:null}},c={display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,padding:`var(--sv-space-4)`,fontSize:14,color:`var(--sv-color-text-muted)`},l={render:()=>(0,o.jsxs)(i,{direction:`horizontal`,children:[(0,o.jsx)(r,{defaultSize:25,minSize:15,maxSize:50,children:(0,o.jsx)(`div`,{style:c,children:`Sidebar`})}),(0,o.jsx)(a,{"aria-label":`Resize sidebar`}),(0,o.jsx)(r,{defaultSize:75,children:(0,o.jsx)(`div`,{style:c,children:`Content`})})]})},u={render:()=>(0,o.jsxs)(i,{direction:`horizontal`,children:[(0,o.jsx)(r,{defaultSize:20,minSize:15,maxSize:40,children:(0,o.jsx)(`div`,{style:c,children:`Files`})}),(0,o.jsx)(a,{"aria-label":`Resize files panel`}),(0,o.jsx)(r,{defaultSize:50,children:(0,o.jsx)(`div`,{style:c,children:`Editor`})}),(0,o.jsx)(a,{"aria-label":`Resize editor panel`}),(0,o.jsx)(r,{defaultSize:30,minSize:15,maxSize:50,children:(0,o.jsx)(`div`,{style:c,children:`Preview`})})]})},d={render:()=>(0,o.jsx)(`div`,{style:{height:400},children:(0,o.jsxs)(i,{direction:`vertical`,children:[(0,o.jsx)(r,{defaultSize:30,children:(0,o.jsx)(`div`,{style:c,children:`Console output`})}),(0,o.jsx)(a,{"aria-label":`Resize console`}),(0,o.jsx)(r,{defaultSize:70,children:(0,o.jsx)(`div`,{style:c,children:`Editor`})})]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25} minSize={15} maxSize={50}>
        <div style={paneStyle}>Sidebar</div>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize sidebar" />
      <ResizablePanel defaultSize={75}>
        <div style={paneStyle}>Content</div>
      </ResizablePanel>
    </ResizablePanelGroup>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20} minSize={15} maxSize={40}>
        <div style={paneStyle}>Files</div>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize files panel" />
      <ResizablePanel defaultSize={50}>
        <div style={paneStyle}>Editor</div>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize editor panel" />
      <ResizablePanel defaultSize={30} minSize={15} maxSize={50}>
        <div style={paneStyle}>Preview</div>
      </ResizablePanel>
    </ResizablePanelGroup>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () =>
  // Vertical orientation needs a definite-height ancestor for the
  // percentage-based flex-basis on each panel to resolve.
  <div style={{
    height: 400
  }}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={30}>
          <div style={paneStyle}>Console output</div>
        </ResizablePanel>
        <ResizableHandle aria-label="Resize console" />
        <ResizablePanel defaultSize={70}>
          <div style={paneStyle}>Editor</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Horizontal`,`ThreePanels`,`Vertical`]}))();export{l as Horizontal,u as ThreePanels,d as Vertical,f as __namedExportsOrder,s as default};