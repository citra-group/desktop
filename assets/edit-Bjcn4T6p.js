import{_ as V,r as d,o as _,c as f,y as l,s as e,A as u,a1 as c,Q as y,W as b,N as v,H as U,J as o,S as n}from"./app-oi9O8E9X.js";import{V as g}from"./VCardTitle-hoq8eCTj.js";import{V as h}from"./VCardItem-BHCAKo2z.js";const x={name:"coperative-deposit-edit"};function C(i,s,$,T,k,w){const m=d("apps-button"),p=d("v-currency-field"),r=d("form-edit");return _(),f(r,{"with-helpdesk":""},{toolbar:l(({record:a})=>[e(m,{disabled:!(a.grandtotal>0),icon:"move_to_inbox",tooltip:"Update Data",onClick:s[0]||(s[0]=t=>i.$refs.form.postFormEdit())},null,8,["disabled"])]),default:l(({record:a})=>[e(h,null,{default:l(()=>[e(g,{class:"overline py-2"},{default:l(()=>[u(" simpanan "),e(c),u(" Nomor "+y(a.slug),1)]),_:2},1024),e(b),e(v,null,{default:l(()=>[e(U,{dense:""},{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{label:"Keterangan",modelValue:a.name,"onUpdate:modelValue":t=>a.name=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:l(()=>[e(n,{class:"mt-2",label:"Jatuh Tempo",modelValue:a.duedate,"onUpdate:modelValue":t=>a.duedate=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:l(()=>[e(n,{class:"mt-2",label:"Jenis",modelValue:a.type,"onUpdate:modelValue":t=>a.type=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:l(()=>[e(p,{label:"Jumlah (Rp)",autofocus:"",modelValue:a.grandtotal,"onUpdate:modelValue":t=>a.grandtotal=t,"allow-negative":!1,step:"any"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const S=V(x,[["render",C]]);export{S as default};
