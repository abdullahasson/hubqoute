import{aa as P,ab as N,a2 as b,ag as n,ac as y,at as R,au as M,r as T,ad as _,ae as A,_ as u,j as t,af as F,ah as I,B as c,C as h,F as C,av as O,aw as L}from"./index-D_UmtOrO.js";import{L as S}from"./label-uys1SJdv.js";import{S as k,M as o}from"./select-Bza_J0s4.js";import{F as B}from"./FormGroup-DuF1Thu2.js";import{F as l}from"./FormControlLabel-CRbwj7nq.js";import{S as D,C as i}from"./Checkbox-DskV5TM4.js";function U(a){return N("MuiSwitch",a)}const s=P("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),E=["className","color","edge","size","sx"],G=a=>{const{classes:e,edge:r,size:d,color:v,checked:j,disabled:g}=a,m={root:["root",r&&`edge${n(r)}`,`size${n(d)}`],switchBase:["switchBase",`color${n(v)}`,j&&"checked",g&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},w=I(m,U,e);return u({},e,w)},W=b("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:r}=a;return[e.root,r.edge&&e[`edge${n(r.edge)}`],e[`size${n(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}}}]}),X=b(D,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(a,e)=>{const{ownerState:r}=a;return[e.switchBase,{[`& .${s.input}`]:e.input},r.color!=="default"&&e[`color${n(r.color)}`]]}})(({theme:a})=>({position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:`${a.palette.mode==="light"?a.palette.common.white:a.palette.grey[300]}`,transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:`${a.palette.mode==="light"?a.palette.grey[100]:a.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:a.vars?a.vars.opacity.switchTrackDisabled:`${a.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}}),({theme:a})=>({"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:y(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(a.palette).filter(([,e])=>e.main&&e.light).map(([e])=>({props:{color:e},style:{[`&.${s.checked}`]:{color:(a.vars||a).palette[e].main,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[e].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:y(a.palette[e].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:a.vars?a.vars.palette.Switch[`${e}DisabledColor`]:`${a.palette.mode==="light"?R(a.palette[e].main,.62):M(a.palette[e].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(a.vars||a).palette[e].main}}}))]})),q=b("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(a,e)=>e.track})(({theme:a})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:a.transitions.create(["opacity","background-color"],{duration:a.transitions.duration.shortest}),backgroundColor:a.vars?a.vars.palette.common.onBackground:`${a.palette.mode==="light"?a.palette.common.black:a.palette.common.white}`,opacity:a.vars?a.vars.opacity.switchTrack:`${a.palette.mode==="light"?.38:.3}`})),H=b("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(a,e)=>e.thumb})(({theme:a})=>({boxShadow:(a.vars||a).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),$=T.forwardRef(function(e,r){const d=_({props:e,name:"MuiSwitch"}),{className:v,color:j="primary",edge:g=!1,size:m="medium",sx:w}=d,z=A(d,E),p=u({},d,{color:j,edge:g,size:m}),x=G(p),f=t.jsx(H,{className:x.thumb,ownerState:p});return t.jsxs(W,{className:F(x.root,v),sx:w,ownerState:p,children:[t.jsx(X,u({type:"checkbox",icon:f,checkedIcon:f,ref:r,ownerState:p},z,{classes:u({},x,{root:x.switchBase})})),t.jsx(q,{className:x.track,ownerState:p})]})}),aa=()=>t.jsxs(c,{className:"general-setting",children:[t.jsxs(c,{className:"top",children:[t.jsxs(c,{children:[t.jsxs(h,{className:"general-setting-title",children:["إعدادت النظام"," ",t.jsx(C,{icon:O})]}),t.jsx(h,{component:"span",children:": نوع الحساب"})]}),t.jsxs(c,{children:[t.jsx(S,{text:"اللغة",children:t.jsxs(k,{label:"اللغة",children:[t.jsx(o,{value:"a",children:"A"}),t.jsx(o,{value:"b",children:"B"}),t.jsx(o,{value:"c",children:"C"})]})}),t.jsx(S,{text:"المنطقة",children:t.jsxs(k,{label:"المنطقة",children:[t.jsx(o,{value:"a",children:"A"}),t.jsx(o,{value:"b",children:"B"}),t.jsx(o,{value:"c",children:"C"})]})}),t.jsx(S,{dir:"rtl",text:"التاريخ / الوقت",children:t.jsxs(k,{label:"التاريخ / الوقت",children:[t.jsx(o,{value:"a",children:"A"}),t.jsx(o,{value:"b",children:"B"}),t.jsx(o,{value:"c",children:"C"})]})})]})]}),t.jsxs(c,{className:"middle",children:[t.jsx(c,{children:t.jsxs(h,{className:"general-setting-title",children:["الإشعارات"," ",t.jsx(C,{icon:L})]})}),t.jsxs(B,{children:[t.jsx(l,{value:"start",control:t.jsx($,{color:"primary"}),label:":  الإشعارات الفورية",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx($,{color:"primary"}),label:":  إشعارات الرسائل النصية",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx($,{color:"primary"}),label:":  إشعارات البريد الإلكتروني",labelPlacement:"start"})]})]}),t.jsxs(c,{className:"bottom",children:[t.jsx(h,{children:"طرق الدفع المتاحة"}),t.jsxs(B,{sx:{maxWidth:"80%"},children:[t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"Start",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"Start",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"Start",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"Start",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"Start",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"Start",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"حوالة بنكية",labelPlacement:"start"}),t.jsx(l,{value:"start",control:t.jsx(i,{}),label:"نقدا",labelPlacement:"start"})]})]})]});export{aa as default};
