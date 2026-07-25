import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DrAmumIN.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./FormField-CHCy-Ye0.js";import{n as o,t as s}from"./TagInput-DbIN25JD.js";function c({initial:e=[`writing`,`launch`],disabled:t=!1,error:n}){let[r,i]=(0,l.useState)(e);return(0,u.jsx)(s,{value:r,onChange:i,placeholder:`Add tag`,disabled:t,error:n,"aria-label":`Tags`})}var l,u,d,f,p,m,h,g,_,v,y;e((()=>{l=t(n(),1),o(),i(),u=r(),d={title:`Components/TagInput`,component:s,parameters:{layout:`padded`,docs:{description:{component:`Controlled multi-value input for frontmatter tags, labels, and lightweight taxonomies.`}}},args:{value:[`writing`,`launch`],onChange:()=>{}}},f={render:()=>(0,u.jsx)(c,{})},p={render:()=>{let[e,t]=(0,l.useState)([`plainwrite`,`frontmatter`]);return(0,u.jsx)(a,{label:`Tags`,hint:`Press Enter or comma to add a tag.`,id:`story-tags`,children:n=>(0,u.jsx)(s,{...n,value:e,onChange:t,validateTag:e=>e.length>24?`Tags must be 24 characters or fewer.`:void 0})})}},m={render:()=>(0,u.jsx)(c,{error:`At least one public tag is required.`})},h={render:()=>(0,u.jsx)(c,{disabled:!0})},g={render:()=>{let[e,t]=(0,l.useState)([]);return(0,u.jsx)(s,{value:e,onChange:t,hint:`Enter adds; comma separates; Backspace removes the last chip when the input is empty.`,placeholder:`Type and press Enter`,"aria-label":`Keyboard tag input`})}},_={render:()=>(0,u.jsx)(c,{initial:[`editorial-calendar`,`launch`,`very-long-tag-name-that-still-clips`,`published`]})},v={parameters:{viewport:{defaultViewport:`mobile1`}},render:()=>(0,u.jsx)(c,{initial:[`mobile`,`touch`,`frontmatter`]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTagInput />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(['plainwrite', 'frontmatter']);
    return <FormField label="Tags" hint="Press Enter or comma to add a tag." id="story-tags">
        {field => <TagInput {...field} value={tags} onChange={setTags} validateTag={tag => tag.length > 24 ? 'Tags must be 24 characters or fewer.' : undefined} />}
      </FormField>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTagInput error="At least one public tag is required." />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTagInput disabled />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return <TagInput value={tags} onChange={setTags} hint="Enter adds; comma separates; Backspace removes the last chip when the input is empty." placeholder="Type and press Enter" aria-label="Keyboard tag input" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTagInput initial={['editorial-calendar', 'launch', 'very-long-tag-name-that-still-clips', 'published']} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <ControlledTagInput initial={['mobile', 'touch', 'frontmatter']} />
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithFormField`,`Error`,`Disabled`,`Keyboard`,`LongContent`,`Mobile`]}))();export{f as Default,h as Disabled,m as Error,g as Keyboard,_ as LongContent,v as Mobile,p as WithFormField,y as __namedExportsOrder,d as default};