import{_ as b,b as k,C as l,d as r,o as w,x as a,a9 as U,E as s,a1 as m,N as i,O as d,S as _,$ as x,Z as c}from"./App-Cj1p0Id9.js";import{V as y}from"./VTextarea-lhPdcUzR.js";const v={name:"mycoperative-withdrawal-create",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{detailCalculate(f,t){setTimeout(()=>{parseFloat(t.total)>parseFloat(t.amount_of_deposit)&&(t.total=0,this.$refs.form.showErrorMessage("Nominal Penarikan melebihi batas saldo"))},100)}}};function I(f,t,N,C,g,V){const u=r("v-currency-field"),p=r("form-create");return w(),k(p,{getdata:"","with-helpdesk":""},{default:l(({record:e,theme:n})=>[a(U,{class:"pt-5"}),a(m,{class:"overline"},{default:l(()=>t[0]||(t[0]=[s("Informasi Simpanan")])),_:1}),a(_,{class:"pt-0"},{default:l(()=>[a(i,{dense:""},{default:l(()=>[a(d,{md:"4",cols:"12"},{default:l(()=>[a(u,{label:"Tabungan",color:n,modelValue:e.amount_of_saving,"onUpdate:modelValue":o=>e.amount_of_saving=o,"hide-details":"",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{md:"4",cols:"12"},{default:l(()=>[a(u,{label:"Penarikan",color:n,modelValue:e.amount_of_withdrawal,"onUpdate:modelValue":o=>e.amount_of_withdrawal=o,"hide-details":"",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{md:"4",cols:"12"},{default:l(()=>[a(u,{label:"Total",color:n,modelValue:e.amount_of_deposit,"onUpdate:modelValue":o=>e.amount_of_deposit=o,"hide-details":"",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(m,{class:"overline"},{default:l(()=>t[1]||(t[1]=[s("Informasi Penarikan")])),_:1}),a(_,{class:"pt-0"},{default:l(()=>[a(i,{dense:""},{default:l(()=>[a(d,{cols:"12"},{default:l(()=>[a(u,{label:"Nominal Penarikan",autofocus:"",color:n,modelValue:e.total,"onUpdate:modelValue":o=>e.total=o,max:e.max_of_withdrawal,"hide-details":"",onKeydown:o=>V.detailCalculate(o,e)},null,8,["color","modelValue","onUpdate:modelValue","max","onKeydown"])]),_:2},1024),a(d,{cols:"12"},{default:l(()=>[a(y,{label:"Keterangan",rows:"3",color:n,modelValue:e.description,"onUpdate:modelValue":o=>e.description=o,"hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(m,{class:"overline"},{default:l(()=>t[2]||(t[2]=[s("Informasi Bank")])),_:1}),a(_,{class:"pt-0"},{default:l(()=>[a(i,{dense:""},{default:l(()=>[a(d,{cols:"4"},{default:l(()=>[a(x,{items:["BRI","BCA","BNI","MANDIRI"],label:"Nama Bank",color:n,modelValue:e.bank_name,"onUpdate:modelValue":o=>e.bank_name=o,"hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"8"},{default:l(()=>[a(c,{type:"number",label:"Nomor Rekening",color:n,modelValue:e.bank_account_number,"onUpdate:modelValue":o=>e.bank_account_number=o,"hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"12"},{default:l(()=>[a(c,{label:"Atas Nama",color:n,modelValue:e.bank_account_name,"onUpdate:modelValue":o=>e.bank_account_name=o,"hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const T=b(v,[["render",I]]);export{T as default};
