import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n,r,i,a,o,s,c=e((()=>{n=`_spinner_1pyks_7`,r=`_spin_1pyks_7`,i=`_sm_1pyks_23`,a=`_md_1pyks_29`,o=`_lg_1pyks_35`,s={spinner:n,spin:r,sm:i,md:a,lg:o}}));function l({size:e=`md`,label:t=`Loading…`,className:n}){return(0,u.jsx)(`span`,{role:`status`,"aria-label":t,className:[s.spinner,d[e],n].filter(Boolean).join(` `)})}var u,d,f=e((()=>{c(),u=t(),d={sm:s.sm,md:s.md,lg:s.lg},l.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Loading…'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_,v,y;e((()=>{f(),p=t(),m={title:`Components/Spinner`,component:l,parameters:{layout:`centered`}},h={},g={args:{size:`sm`}},_={args:{size:`lg`}},v={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,p.jsx)(l,{size:`sm`}),(0,p.jsx)(l,{size:`md`}),(0,p.jsx)(l,{size:`lg`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Small`,`Large`,`AllSizes`]}))();export{v as AllSizes,h as Default,_ as Large,g as Small,y as __namedExportsOrder,m as default};