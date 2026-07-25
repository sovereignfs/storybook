import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DrAmumIN.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Icon-BDk95jSk.js";import{n as o,t as s}from"./CheckableListRow-D0ynIkiu.js";function c({initial:e=!1,icon:t,trailing:n,disabled:r}){let[i,o]=(0,l.useState)(e);return(0,u.jsx)(`div`,{style:{width:320},children:(0,u.jsx)(s,{checked:i,onCheckedChange:o,label:`Bananas`,icon:t?(0,u.jsx)(a,{name:`banana`,size:`md`,"aria-hidden":!0}):void 0,trailing:n?(0,u.jsx)(`span`,{style:{fontSize:13,color:`#888`},children:`6 pcs`}):void 0,disabled:r})})}var l,u,d,f,p,m,h,g,_,v;e((()=>{l=t(n(),1),o(),i(),u=r(),d={title:`Components/CheckableListRow`,component:s,parameters:{layout:`padded`,docs:{description:{component:`A whole-row tap target that toggles a checked state, with strike-through on the label when checked — for "tap the row to mark it done" lists.`}}},args:{checked:!1,onCheckedChange:()=>{},label:`Bananas`}},f={render:()=>(0,u.jsx)(c,{})},p={render:()=>(0,u.jsx)(c,{initial:!0})},m={render:()=>(0,u.jsx)(c,{icon:!0,trailing:!0})},h={render:()=>(0,u.jsx)(c,{initial:!0,icon:!0,trailing:!0})},g={render:()=>(0,u.jsx)(c,{icon:!0,trailing:!0,disabled:!0})},_={name:`Multiple rows (list context)`,render:()=>{let e=[`Bananas`,`Milk`,`Eggs`,`Coffee`],[t,n]=(0,l.useState)(new Set([`Milk`]));return(0,u.jsx)(`div`,{style:{width:320,display:`flex`,flexDirection:`column`,gap:4},children:e.map(e=>(0,u.jsx)(s,{checked:t.has(e),onCheckedChange:t=>n(n=>{let r=new Set(n);return t?r.add(e):r.delete(e),r}),label:e},e))})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRow />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRow initial />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRow icon trailing />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRow initial icon trailing />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRow icon trailing disabled />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Multiple rows (list context)',
  render: () => {
    const items = ['Bananas', 'Milk', 'Eggs', 'Coffee'];
    const [checkedSet, setCheckedSet] = useState<Set<string>>(new Set(['Milk']));
    return <div style={{
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        {items.map(item => <CheckableListRow key={item} checked={checkedSet.has(item)} onCheckedChange={checked => setCheckedSet(prev => {
        const next = new Set(prev);
        if (checked) next.add(item);else next.delete(item);
        return next;
      })} label={item} />)}
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Checked`,`WithIconAndTrailing`,`CheckedWithIconAndTrailing`,`Disabled`,`List`]}))();export{p as Checked,h as CheckedWithIconAndTrailing,f as Default,g as Disabled,_ as List,m as WithIconAndTrailing,v as __namedExportsOrder,d as default};