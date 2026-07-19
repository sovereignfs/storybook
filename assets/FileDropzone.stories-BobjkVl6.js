import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DHZJqUij.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Icon-BDk95jSk.js";import{n as o,t as s}from"./FileDropzone-b9120u2e.js";var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`Components/FileDropzone`,component:s,parameters:{layout:`padded`},tags:[`autodocs`]},d={render:()=>{function e(){let[e,t]=(0,c.useState)(null);return(0,l.jsx)(`div`,{style:{maxWidth:`420px`},children:(0,l.jsx)(s,{ariaLabel:`Upload ZIP file`,accept:`.zip,application/zip`,label:e?e.name:`Choose a ZIP file`,hint:e?`${(e.size/1024).toFixed(0)} KB`:`or drag and drop here`,onFileSelect:t})})}return(0,l.jsx)(e,{})}},f={render:()=>{function e(){let[e,t]=(0,c.useState)(null);return(0,l.jsx)(`div`,{style:{maxWidth:`420px`},children:(0,l.jsx)(s,{ariaLabel:`Upload font file`,accept:`.woff2,.woff,.ttf,.otf`,icon:(0,l.jsx)(a,{name:`upload`,size:`lg`,"aria-hidden":!0}),label:e?e.name:`Choose a font file`,hint:e?void 0:`.woff2, .woff, .ttf, or .otf`,onFileSelect:t})})}return(0,l.jsx)(e,{})}},p={render:()=>(0,l.jsx)(`div`,{style:{maxWidth:`420px`},children:(0,l.jsx)(s,{ariaLabel:`Upload ZIP file`,label:`Choose a ZIP file`,hint:`or drag and drop here`,disabled:!0,onFileSelect:()=>{}})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [file, setFile] = useState<File | null>(null);
      return <div style={{
        maxWidth: '420px'
      }}>
          <FileDropzone ariaLabel="Upload ZIP file" accept=".zip,application/zip" label={file ? file.name : 'Choose a ZIP file'} hint={file ? \`\${(file.size / 1024).toFixed(0)} KB\` : 'or drag and drop here'} onFileSelect={setFile} />
        </div>;
    }
    return <Demo />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [file, setFile] = useState<File | null>(null);
      return <div style={{
        maxWidth: '420px'
      }}>
          <FileDropzone ariaLabel="Upload font file" accept=".woff2,.woff,.ttf,.otf" icon={<Icon name="upload" size="lg" aria-hidden />} label={file ? file.name : 'Choose a font file'} hint={file ? undefined : '.woff2, .woff, .ttf, or .otf'} onFileSelect={setFile} />
        </div>;
    }
    return <Demo />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '420px'
  }}>
      <FileDropzone ariaLabel="Upload ZIP file" label="Choose a ZIP file" hint="or drag and drop here" disabled onFileSelect={() => {}} />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`CustomIcon`,`Disabled`]}))();export{f as CustomIcon,d as Default,p as Disabled,m as __namedExportsOrder,u as default};