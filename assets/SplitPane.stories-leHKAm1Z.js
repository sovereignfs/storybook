import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./CodeTextarea-CgrlcCdR.js";import{n as i,t as a}from"./SplitPane-BeN-OzKO.js";import{n as o,t as s}from"./StatusBadge-5kOrugsX.js";function c({title:e,children:t}){return(0,l.jsxs)(`div`,{style:{display:`flex`,minHeight:`100%`,flexDirection:`column`,gap:`var(--sv-space-3)`,padding:`var(--sv-space-4)`,fontFamily:`var(--sv-font-family)`},children:[(0,l.jsx)(`h3`,{style:{margin:0,fontSize:`var(--sv-font-size-sm)`,color:`var(--sv-color-text-primary)`},children:e}),t]})}var l,u,d,f,p,m,h,g,_;e((()=>{i(),n(),o(),l=t(),u=`# Release plan

- Confirm copy
- Preview page
- Commit changes
`,d={title:`Components/SplitPane`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Responsive two-pane layout for editor/preview and list/detail workflows. Drag or use arrow keys on the separator.`}}},args:{primary:(0,l.jsx)(c,{title:`Primary`,children:`Primary pane`}),secondary:(0,l.jsx)(c,{title:`Secondary`,children:`Secondary pane`})}},f={render:()=>(0,l.jsx)(a,{primary:(0,l.jsx)(c,{title:`Editor`,children:(0,l.jsx)(r,{"aria-label":`Markdown editor`,defaultValue:u})}),secondary:(0,l.jsx)(c,{title:`Preview`,children:(0,l.jsxs)(`article`,{style:{lineHeight:1.6,color:`var(--sv-color-text-primary)`},children:[(0,l.jsx)(`h2`,{style:{marginTop:0},children:`Release plan`}),(0,l.jsxs)(`ul`,{children:[(0,l.jsx)(`li`,{children:`Confirm copy`}),(0,l.jsx)(`li`,{children:`Preview page`}),(0,l.jsx)(`li`,{children:`Commit changes`})]})]})})})},p={render:()=>(0,l.jsx)(a,{resizable:!1,defaultPrimarySize:38,primary:(0,l.jsx)(c,{title:`Files`,children:[`index.md`,`release-notes.md`,`about.md`].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`var(--sv-space-3)`,padding:`var(--sv-space-2) 0`,borderBottom:`1px solid var(--sv-color-border)`},children:[(0,l.jsx)(`span`,{children:e}),(0,l.jsx)(s,{status:e===`release-notes.md`?`draft`:`synced`})]},e))}),secondary:(0,l.jsx)(c,{title:`Details`,children:(0,l.jsx)(`p`,{style:{margin:0,color:`var(--sv-color-text-muted)`},children:`Select a file to inspect frontmatter, sync state, and publish history.`})})})},m={render:()=>(0,l.jsx)(a,{defaultPrimarySize:45,minPrimarySize:25,maxPrimarySize:75,resizeLabel:`Resize editor and preview panes with arrow keys`,primary:(0,l.jsx)(c,{title:`Keyboard`,children:`Focus the separator and press arrow keys.`}),secondary:(0,l.jsx)(c,{title:`Preview`,children:`Shift+Arrow resizes in larger steps.`})})},h={render:()=>(0,l.jsx)(a,{primary:(0,l.jsx)(c,{title:`Long list`,children:Array.from({length:28},(e,t)=>(0,l.jsxs)(`div`,{style:{paddingBlock:`var(--sv-space-2)`},children:[`Content item `,t+1]},t))}),secondary:(0,l.jsx)(c,{title:`Preview`,children:`Each pane scrolls independently.`})})},g={parameters:{viewport:{defaultViewport:`mobile1`}},render:()=>(0,l.jsx)(a,{primary:(0,l.jsx)(c,{title:`Editor`,children:`This pane appears first on narrow screens.`}),secondary:(0,l.jsx)(c,{title:`Preview`,children:`The second pane stacks below it.`})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane primary={<PaneShell title="Editor">
          <CodeTextarea aria-label="Markdown editor" defaultValue={editorText} />
        </PaneShell>} secondary={<PaneShell title="Preview">
          <article style={{
      lineHeight: 1.6,
      color: 'var(--sv-color-text-primary)'
    }}>
            <h2 style={{
        marginTop: 0
      }}>Release plan</h2>
            <ul>
              <li>Confirm copy</li>
              <li>Preview page</li>
              <li>Commit changes</li>
            </ul>
          </article>
        </PaneShell>} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane resizable={false} defaultPrimarySize={38} primary={<PaneShell title="Files">
          {['index.md', 'release-notes.md', 'about.md'].map(file => <div key={file} style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sv-space-3)',
      padding: 'var(--sv-space-2) 0',
      borderBottom: '1px solid var(--sv-color-border)'
    }}>
              <span>{file}</span>
              <StatusBadge status={file === 'release-notes.md' ? 'draft' : 'synced'} />
            </div>)}
        </PaneShell>} secondary={<PaneShell title="Details">
          <p style={{
      margin: 0,
      color: 'var(--sv-color-text-muted)'
    }}>
            Select a file to inspect frontmatter, sync state, and publish history.
          </p>
        </PaneShell>} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane defaultPrimarySize={45} minPrimarySize={25} maxPrimarySize={75} resizeLabel="Resize editor and preview panes with arrow keys" primary={<PaneShell title="Keyboard">Focus the separator and press arrow keys.</PaneShell>} secondary={<PaneShell title="Preview">Shift+Arrow resizes in larger steps.</PaneShell>} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane primary={<PaneShell title="Long list">
          {Array.from({
      length: 28
    }, (_, index) => <div key={index} style={{
      paddingBlock: 'var(--sv-space-2)'
    }}>
              Content item {index + 1}
            </div>)}
        </PaneShell>} secondary={<PaneShell title="Preview">Each pane scrolls independently.</PaneShell>} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <SplitPane primary={<PaneShell title="Editor">This pane appears first on narrow screens.</PaneShell>} secondary={<PaneShell title="Preview">The second pane stacks below it.</PaneShell>} />
}`,...g.parameters?.docs?.source}}},_=[`Default`,`FixedPanes`,`KeyboardResizable`,`LongContent`,`Mobile`]}))();export{f as Default,p as FixedPanes,m as KeyboardResizable,h as LongContent,g as Mobile,_ as __namedExportsOrder,d as default};