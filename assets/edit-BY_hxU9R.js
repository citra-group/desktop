import{_,r as f,o as p,c as V,y as a,s as e,N as n,A as s,W as c,H as u,J as o,S as d,L as h,Q as y}from"./app-oi9O8E9X.js";import{V as b}from"./VCardTitle-hoq8eCTj.js";import{a as i}from"./VCardItem-BHCAKo2z.js";import{V as x}from"./VTextarea-C8o5pum4.js";import{V as U}from"./VCard-DgMtPtpx.js";const v={name:"coperative-withdrawal-edit",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{}},g={class:"pa-4 text-h3 text-center blue-grey white--text rounded"};function w(m,C,N,T,k,D){const r=f("form-edit");return p(),V(r,{"with-helpdesk":""},{default:a(({record:l})=>[e(U,null,{default:a(()=>[e(n,null,{default:a(()=>[e(b,{class:"overline py-2"},{default:a(()=>[s("penarikan")]),_:1}),e(c),e(i,{class:"overline"},{default:a(()=>[s("Informasi Simpanan")]),_:1}),e(n,{class:"pt-0"},{default:a(()=>[e(u,{dense:""},{default:a(()=>[e(o,{cols:"4"},{default:a(()=>[e(d,{label:"Wajib",modelValue:l.amount_of_monthly,"onUpdate:modelValue":t=>l.amount_of_monthly=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:a(()=>[e(d,{label:"Tabungan",modelValue:l.amount_of_saving,"onUpdate:modelValue":t=>l.amount_of_saving=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:a(()=>[e(d,{label:"Total",modelValue:l.amount_of_deposit,"onUpdate:modelValue":t=>l.amount_of_deposit=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(i,{lass:"overline"},{default:a(()=>[s("Informasi Penarikan")]),_:1}),e(n,{class:"pt-0"},{default:a(()=>[e(u,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[h("div",g,y(m.formatter.format(l.total)),1)]),_:2},1024),e(o,{cols:"12"},{default:a(()=>[e(d,{label:"Nominal",modelValue:l.total,"onUpdate:modelValue":t=>l.total=t,type:"Number","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:a(()=>[e(x,{label:"Keterangan",modelValue:l.description,"onUpdate:modelValue":t=>l.description=t,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const R=_(v,[["render",w]]);export{R as default};