import{_,b as u,C as a,d as p,o as i,D as r,F as V,x as l,N as y,O as n,Z as s,S as U}from"./App-Cj1p0Id9.js";const v={name:"mycoperative-deposit-show"};function b(m,t,w,C,$,h){const f=p("v-currency-field"),c=p("form-show");return i(),u(c,{"with-helpdesk":"","hide-edit":"","hide-delete":"",ref:"form"},{toolbar:a(({record:e})=>[e.type==="TABUNGAN"&&e.paid===!1?(i(),u(r,{key:0,icon:"edit",onClick:t[0]||(t[0]=d=>m.$refs.form.openFormEdit())})):V("",!0),e.type==="TABUNGAN"&&!e.paid?(i(),u(r,{key:1,icon:"delete",onClick:t[1]||(t[1]=d=>m.$refs.form.postFormDelete())})):V("",!0)]),default:a(({record:e,theme:d})=>[l(U,null,{default:a(()=>[l(y,{dense:""},{default:a(()=>[l(n,{cols:"12"},{default:a(()=>[l(s,{label:"Member",color:d,modelValue:e.member_name,"onUpdate:modelValue":o=>e.member_name=o,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"12"},{default:a(()=>[l(s,{label:"Kode",modelValue:e.slug,"onUpdate:modelValue":o=>e.slug=o,dense:"","hide-details":"",outlined:"",color:d,variant:"outlined",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),l(n,{cols:"12"},{default:a(()=>[l(s,{label:"Keterangan",modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,dense:"","hide-details":"",outlined:"",color:d,variant:"outlined",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),l(n,{cols:"6"},{default:a(()=>[l(s,{class:"mt-2",label:"Jatuh Tempo",color:d,modelValue:e.duedate,"onUpdate:modelValue":o=>e.duedate=o,"hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"6"},{default:a(()=>[l(s,{class:"mt-2",label:"Jenis",color:d,modelValue:e.type,"onUpdate:modelValue":o=>e.type=o,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"12"},{default:a(()=>[l(f,{class:"mt-2",label:"Jumlah (Rp)",color:d,modelValue:e.grandtotal,"onUpdate:modelValue":o=>e.grandtotal=o,"allow-negative":!1,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:a(()=>t[2]||(t[2]=[])),_:1},512)}const N=_(v,[["render",b]]);export{N as default};
