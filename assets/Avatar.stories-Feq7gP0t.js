import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-B0-6cYMX.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i,a,o,s,c,l,u=e((()=>{i=`_avatar_gax27_1`,a=`_sm_gax27_15`,o=`_md_gax27_21`,s=`_lg_gax27_27`,c=`_img_gax27_33`,l={avatar:i,sm:a,md:o,lg:s,img:c}}));function d(e){let t=e.trim().split(/\s+/);return t.length===1?(t[0]??``).slice(0,2).toUpperCase():((t[0]?.[0]??``)+(t[t.length-1]?.[0]??``)).toUpperCase()}function f({name:e,src:t,size:n=`md`,className:r}){let[i,a]=(0,p.useState)(!1),o=[l.avatar,h[n],r].filter(Boolean).join(` `);return t&&!i?(0,m.jsx)(`span`,{className:o,"aria-label":e,children:(0,m.jsx)(`img`,{src:t,alt:e,className:l.img,onError:()=>a(!0)})}):(0,m.jsx)(`span`,{className:o,"aria-label":e,children:d(e)})}var p,m,h,g=e((()=>{p=t(n(),1),u(),m=r(),h={sm:l.sm,md:l.md,lg:l.lg},f.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{name:{required:!0,tsType:{name:`string`},description:``},src:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),_,v,y,b,x,S,C,w;e((()=>{g(),_=r(),v={title:`Components/Avatar`,component:f,parameters:{layout:`centered`}},y={args:{name:`Jane Smith`}},b={args:{name:`Admin`}},x={args:{name:`Jane Smith`,src:`https://i.pravatar.cc/150?u=jane`}},S={args:{name:`Jane Smith`,src:`https://broken.invalid/avatar.png`}},C={args:{name:`Jane Smith`},render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,_.jsx)(f,{name:`Jane Smith`,size:`sm`}),(0,_.jsx)(f,{name:`Jane Smith`,size:`md`}),(0,_.jsx)(f,{name:`Jane Smith`,size:`lg`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Admin'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith',
    src: 'https://i.pravatar.cc/150?u=jane'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith',
    src: 'https://broken.invalid/avatar.png'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith'
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Avatar name="Jane Smith" size="sm" />
      <Avatar name="Jane Smith" size="md" />
      <Avatar name="Jane Smith" size="lg" />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Initials`,`SingleName`,`WithImage`,`BrokenImage`,`AllSizes`]}))();export{C as AllSizes,S as BrokenImage,y as Initials,b as SingleName,x as WithImage,w as __namedExportsOrder,v as default};