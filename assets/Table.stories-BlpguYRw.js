import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Table-B-gs6HRh.js";var l,u,d,f,p,m,h,g;e((()=>{s(),l=t(),u={title:`Components/Table`,component:c,parameters:{layout:`padded`,docs:{description:{component:`Thin, styled wrappers around the native table elements. Not a data grid — no sort/filter/virtualization. Horizontal scroll (masked-edge fade, hidden scrollbar) at any viewport size.`}}},args:{children:null}},d=[{name:`sovereign-tasks`,status:`Active`,version:`1.4.2`},{name:`sovereign-ledger`,status:`Active`,version:`2.0.0`},{name:`sovereign-shopper`,status:`Disabled`,version:`0.9.1`}],f={render:()=>(0,l.jsxs)(c,{children:[(0,l.jsx)(r,{children:(0,l.jsxs)(a,{children:[(0,l.jsx)(n,{children:`Plugin`}),(0,l.jsx)(n,{children:`Status`}),(0,l.jsx)(n,{children:`Version`})]})}),(0,l.jsx)(i,{children:d.map(e=>(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{children:e.name}),(0,l.jsx)(o,{children:e.status}),(0,l.jsx)(o,{children:e.version})]},e.name))})]})},p={render:()=>(0,l.jsx)(c,{children:(0,l.jsx)(i,{children:d.map(e=>(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{children:e.name}),(0,l.jsx)(o,{children:e.status})]},e.name))})})},m={render:()=>(0,l.jsxs)(c,{children:[(0,l.jsx)(r,{children:(0,l.jsxs)(a,{children:[(0,l.jsx)(n,{children:`Plugin`}),(0,l.jsx)(n,{children:`Description`}),(0,l.jsx)(n,{children:`Author`}),(0,l.jsx)(n,{children:`Repository`}),(0,l.jsx)(n,{children:`Status`}),(0,l.jsx)(n,{children:`Version`})]})}),(0,l.jsx)(i,{children:d.map(e=>(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{children:e.name}),(0,l.jsx)(o,{children:`A longer description column to force horizontal overflow`}),(0,l.jsx)(o,{children:`sovereign-community`}),(0,l.jsxs)(o,{children:[`github.com/sovereignfs/`,e.name]}),(0,l.jsx)(o,{children:e.status}),(0,l.jsx)(o,{children:e.version})]},e.name))})]})},h={parameters:{viewport:{defaultViewport:`mobile1`}},render:()=>(0,l.jsxs)(c,{children:[(0,l.jsx)(r,{children:(0,l.jsxs)(a,{children:[(0,l.jsx)(n,{children:`Plugin`}),(0,l.jsx)(n,{children:`Description`}),(0,l.jsx)(n,{children:`Author`}),(0,l.jsx)(n,{children:`Repository`}),(0,l.jsx)(n,{children:`Status`}),(0,l.jsx)(n,{children:`Version`})]})}),(0,l.jsx)(i,{children:d.map(e=>(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{children:e.name}),(0,l.jsx)(o,{children:`A longer description column to force horizontal overflow`}),(0,l.jsx)(o,{children:`sovereign-community`}),(0,l.jsxs)(o,{children:[`github.com/sovereignfs/`,e.name]}),(0,l.jsx)(o,{children:e.status}),(0,l.jsx)(o,{children:e.version})]},e.name))})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Plugin</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Version</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ROWS.map(row => <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.version}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableBody>
        {ROWS.map(row => <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Plugin</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Repository</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Version</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ROWS.map(row => <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>A longer description column to force horizontal overflow</TableCell>
            <TableCell>sovereign-community</TableCell>
            <TableCell>github.com/sovereignfs/{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.version}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Plugin</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Repository</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Version</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ROWS.map(row => <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>A longer description column to force horizontal overflow</TableCell>
            <TableCell>sovereign-community</TableCell>
            <TableCell>github.com/sovereignfs/{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.version}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithoutHeader`,`LongContent`,`NarrowViewport`]}))();export{f as Default,m as LongContent,h as NarrowViewport,p as WithoutHeader,g as __namedExportsOrder,u as default};