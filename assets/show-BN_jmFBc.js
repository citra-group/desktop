import{_ as V,b as p,C as o,d as s,o as h,x as l,N as i,O as t,Z as m,a4 as c,S as g,Q as U,a1 as v,D as w,E as b}from"./App-Cj1p0Id9.js";const r={name:"coperative-member-show",data:()=>({tagihan:170.25}),methods:{impersonateTake:function(u){this.$http(`account/api/impersonate-take/${u.email}`,{method:"POST"}).then(()=>{this.$router.push({name:"account-module"})})}}};function y(u,d,k,x,T,_){const n=s("v-currency-field"),f=s("form-show");return h(),p(f,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{default:o(({record:e})=>[l(g,null,{default:o(()=>[l(i,{dense:""},{default:o(()=>[l(t,{cols:"12"},{default:o(()=>[l(m,{label:"Kode",modelValue:e.slug,"onUpdate:modelValue":a=>e.slug=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"12"},{default:o(()=>[l(m,{label:"Nama",modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Pendapatan",modelValue:e.amount_of_salary,"onUpdate:modelValue":a=>e.amount_of_salary=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Pinjaman Maksimal",modelValue:e.amount_of_maxloan,"onUpdate:modelValue":a=>e.amount_of_maxloan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Simpanan Pokok",modelValue:e.amount_of_main,"onUpdate:modelValue":a=>e.amount_of_main=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Simpanan Wajib",modelValue:e.amount_of_monthly,"onUpdate:modelValue":a=>e.amount_of_monthly=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Tabungan",modelValue:e.amount_of_saving,"onUpdate:modelValue":a=>e.amount_of_saving=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"S H U",modelValue:e.amount_of_dividend,"onUpdate:modelValue":a=>e.amount_of_dividend=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Jumlah Tabungan",modelValue:e.amount_of_deposit,"onUpdate:modelValue":a=>e.amount_of_deposit=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Penarikan",modelValue:e.amount_of_withdrawal,"onUpdate:modelValue":a=>e.amount_of_withdrawal=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Jumlah Pinjaman",modelValue:e.total_of_loan,"onUpdate:modelValue":a=>e.total_of_loan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Pinjaman Berjalan",modelValue:e.current_of_loan,"onUpdate:modelValue":a=>e.current_of_loan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(c,{size:"small",color:"primary",modelValue:e.active,"onUpdate:modelValue":a=>e.active=a,inset:"",label:`Status: ${e.active?"Aktif":"Tidak Aktif"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:o(({record:e,theme:a})=>[d[1]||(d[1]=U("div",{class:"text-overline mt-6"},"LINK",-1)),l(v,{class:"mb-3"}),l(i,null,{default:o(()=>[l(t,{cols:"12"},{default:o(()=>[l(w,{color:a,variant:"flat",block:"",onClick:$=>_.impersonateTake(e)},{default:o(()=>d[0]||(d[0]=[b("Impersonate")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:1})}const P=V(r,[["render",y]]);export{P as default};
