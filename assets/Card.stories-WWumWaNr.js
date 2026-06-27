import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n,r,i,a,o,s,c=e((()=>{n=`_card_eii1o_1`,r=`_paddingSm_eii1o_8`,i=`_paddingMd_eii1o_12`,a=`_paddingLg_eii1o_16`,o=`_interactive_eii1o_20`,s={card:n,paddingSm:r,paddingMd:i,paddingLg:a,interactive:o}}));function l({as:e=`div`,interactive:t=!1,padding:n=`md`,className:r,children:i,...a}){return(0,u.jsx)(e,{className:[s.card,d[n],t&&s.interactive,r].filter(Boolean).join(` `),...a,children:i})}var u,d,f=e((()=>{c(),u=t(),d={sm:s.paddingSm,md:s.paddingMd,lg:s.paddingLg},l.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{as:{required:!1,tsType:{name:`union`,raw:`'div' | 'article' | 'li'`,elements:[{name:`literal`,value:`'div'`},{name:`literal`,value:`'article'`},{name:`literal`,value:`'li'`}]},description:``,defaultValue:{value:`'div'`,computed:!1}},interactive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]}})),p,m,h,g,_,v,y,b;e((()=>{f(),p=t(),m={title:`Components/Card`,component:l,parameters:{layout:`padded`},args:{children:`Card content goes here.`}},h={},g={args:{padding:`sm`}},_={args:{padding:`lg`}},v={args:{as:`article`,interactive:!0,children:`Click me — I have hover + focus styles.`}},y={render:()=>(0,p.jsxs)(`ul`,{style:{listStyle:`none`,padding:0,display:`flex`,flexDirection:`column`,gap:8},children:[(0,p.jsx)(l,{as:`li`,children:`First item`}),(0,p.jsx)(l,{as:`li`,children:`Second item`}),(0,p.jsx)(l,{as:`li`,children:`Third item`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'sm'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'lg'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'article',
    interactive: true,
    children: 'Click me — I have hover + focus styles.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ul style={{
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Card as="li">First item</Card>
      <Card as="li">Second item</Card>
      <Card as="li">Third item</Card>
    </ul>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`SmallPadding`,`LargePadding`,`Interactive`,`AsListItem`]}))();export{y as AsListItem,h as Default,v as Interactive,_ as LargePadding,g as SmallPadding,b as __namedExportsOrder,m as default};