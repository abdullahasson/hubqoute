import{ab as p,aa as f,a2 as w,_ as e,r as x,ad as F,ae as d,b9 as C,bz as G,j as y,af as R,ah as b}from"./index-D_UmtOrO.js";function j(o){return p("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const M=["className","row"],U=o=>{const{classes:r,row:t,error:s}=o;return b({root:["root",t&&"row",s&&"error"]},j,r)},_=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),h=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=d(s,M),u=C(),i=G({props:s,muiFormControl:u,states:["error"]}),n=e({},s,{row:l,error:i.error}),m=U(n);return y.jsx(_,e({className:R(m.root,a),ownerState:n,ref:t},c))});export{h as F};
