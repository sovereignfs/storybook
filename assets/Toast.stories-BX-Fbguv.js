import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-Oq-8yHOj.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,r as a,t as o}from"./Toast-DIGMT7uv.js";function s({category:e,label:t}){let{show:n}=a();return(0,l.jsx)(`button`,{type:`button`,onClick:()=>n({title:t,message:`This is a ${e} toast notification.`,category:e}),style:{padding:`8px 16px`,borderRadius:`var(--sv-radius-md)`,border:`1px solid var(--sv-color-border)`,background:`var(--sv-color-surface)`,color:`var(--sv-color-text-primary)`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,cursor:`pointer`},children:t})}var c,l,u,d,f,p,m,h;e((()=>{c=t(n(),1),i(),l=r(),u={title:`Components/Toast`,component:o,parameters:{layout:`centered`,docs:{description:{component:"Fixed top-right notification stack. Use `<ToastProvider>` at the app root and `useToast()` to imperatively show toasts. Each toast has a leading status icon matched to its category."}}},args:{children:null}},d={render:e=>(0,l.jsx)(o,{children:(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,alignItems:`flex-start`},children:[(0,l.jsx)(s,{category:`info`,label:`Info toast`}),(0,l.jsx)(s,{category:`success`,label:`Success toast`}),(0,l.jsx)(s,{category:`warning`,label:`Warning toast`}),(0,l.jsx)(s,{category:`error`,label:`Error toast`}),(0,l.jsx)(s,{category:`security`,label:`Security toast`}),(0,l.jsx)(s,{category:`announcement`,label:`Announcement toast`})]})})},f={render:e=>{function t(){let{show:e}=a();return(0,l.jsx)(`button`,{type:`button`,onClick:()=>e({title:`Session expires in 5 minutes`,category:`warning`}),style:{padding:`8px 16px`,borderRadius:`var(--sv-radius-md)`,border:`1px solid var(--sv-color-border)`,background:`var(--sv-color-surface)`,color:`var(--sv-color-text-primary)`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,cursor:`pointer`},children:`Show title-only toast`})}return(0,l.jsx)(o,{children:(0,l.jsx)(t,{})})}},p={render:e=>{function t(){let{show:e}=a();return(0,l.jsx)(`button`,{type:`button`,onClick:()=>e({title:`Maintenance mode active`,message:`Platform is in read-only mode. Dismiss when resolved.`,category:`error`,duration:0}),style:{padding:`8px 16px`,borderRadius:`var(--sv-radius-md)`,border:`1px solid var(--sv-color-border)`,background:`var(--sv-color-surface)`,color:`var(--sv-color-text-primary)`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,cursor:`pointer`},children:`Show persistent toast`})}return(0,l.jsx)(o,{children:(0,l.jsx)(t,{})})}},m={render:e=>{function t(){let{show:e}=a(),[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`button`,{type:`button`,disabled:t,onClick:()=>{e({title:`Plugin installed`,category:`success`}),e({title:`License warning`,message:`Expires in 3 days.`,category:`warning`}),e({title:`Backup failed`,message:`Check storage quota.`,category:`error`}),n(!0)},style:{padding:`8px 16px`,borderRadius:`var(--sv-radius-md)`,border:`1px solid var(--sv-color-border)`,background:`var(--sv-color-surface)`,color:`var(--sv-color-text-primary)`,fontFamily:`var(--sv-font-family)`,fontSize:`var(--sv-font-size-sm)`,cursor:t?`default`:`pointer`,opacity:t?.5:1},children:`Fire 3 toasts`})}return(0,l.jsx)(o,{children:(0,l.jsx)(t,{})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _args => <ToastProvider>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }}>
        <ToastTrigger category="info" label="Info toast" />
        <ToastTrigger category="success" label="Success toast" />
        <ToastTrigger category="warning" label="Warning toast" />
        <ToastTrigger category="error" label="Error toast" />
        <ToastTrigger category="security" label="Security toast" />
        <ToastTrigger category="announcement" label="Announcement toast" />
      </div>
    </ToastProvider>
}`,...d.parameters?.docs?.source},description:{story:`All toast categories — each button fires a toast with the matching leading icon.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: _args => {
    function Trigger() {
      const {
        show
      } = useToast();
      return <button type="button" onClick={() => show({
        title: 'Session expires in 5 minutes',
        category: 'warning'
      })} style={{
        padding: '8px 16px',
        borderRadius: 'var(--sv-radius-md)',
        border: '1px solid var(--sv-color-border)',
        background: 'var(--sv-color-surface)',
        color: 'var(--sv-color-text-primary)',
        fontFamily: 'var(--sv-font-family)',
        fontSize: 'var(--sv-font-size-sm)',
        cursor: 'pointer'
      }}>
          Show title-only toast
        </button>;
    }
    return <ToastProvider>
        <Trigger />
      </ToastProvider>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Toast with no body — title only.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _args => {
    function Trigger() {
      const {
        show
      } = useToast();
      return <button type="button" onClick={() => show({
        title: 'Maintenance mode active',
        message: 'Platform is in read-only mode. Dismiss when resolved.',
        category: 'error',
        duration: 0
      })} style={{
        padding: '8px 16px',
        borderRadius: 'var(--sv-radius-md)',
        border: '1px solid var(--sv-color-border)',
        background: 'var(--sv-color-surface)',
        color: 'var(--sv-color-text-primary)',
        fontFamily: 'var(--sv-font-family)',
        fontSize: 'var(--sv-font-size-sm)',
        cursor: 'pointer'
      }}>
          Show persistent toast
        </button>;
    }
    return <ToastProvider>
        <Trigger />
      </ToastProvider>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Persistent toast — pass `duration: 0` to disable auto-dismiss.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _args => {
    function Trigger() {
      const {
        show
      } = useToast();
      const [fired, setFired] = useState(false);
      return <button type="button" disabled={fired} onClick={() => {
        show({
          title: 'Plugin installed',
          category: 'success'
        });
        show({
          title: 'License warning',
          message: 'Expires in 3 days.',
          category: 'warning'
        });
        show({
          title: 'Backup failed',
          message: 'Check storage quota.',
          category: 'error'
        });
        setFired(true);
      }} style={{
        padding: '8px 16px',
        borderRadius: 'var(--sv-radius-md)',
        border: '1px solid var(--sv-color-border)',
        background: 'var(--sv-color-surface)',
        color: 'var(--sv-color-text-primary)',
        fontFamily: 'var(--sv-font-family)',
        fontSize: 'var(--sv-font-size-sm)',
        cursor: fired ? 'default' : 'pointer',
        opacity: fired ? 0.5 : 1
      }}>
          Fire 3 toasts
        </button>;
    }
    return <ToastProvider>
        <Trigger />
      </ToastProvider>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Multiple toasts stack vertically below the first.`,...m.parameters?.docs?.description}}},h=[`AllCategories`,`TitleOnly`,`Persistent`,`Stacked`]}))();export{d as AllCategories,p as Persistent,m as Stacked,f as TitleOnly,h as __namedExportsOrder,u as default};