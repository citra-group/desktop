import{_ as p,b as u,C as t,d as n,o as _,x as a,D as f,N as h,O as c,Q as y,R as v,S as V}from"./App-Cj1p0Id9.js";const C={name:"mycoperative-deposit-create",data:()=>({datemenu:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{postFormCreate(o,l){l.$http("mycoperative/api/deposit",{method:"POST",params:o,contentType:"multipart/form-data"}).then(()=>{this.$router.push({name:"mycoperative-payment-create"})})}}},b={class:"text-h3"};function g(o,l,x,w,$,d){const m=n("v-currency-field"),i=n("form-create");return _(),u(i,{"with-helpdesk":"","hide-save":""},{toolbar:t(({record:e,store:r})=>[a(f,{disabled:!(e.grandtotal>0),icon:"move_to_inbox",color:"white",onClick:s=>d.postFormCreate(e,r)},null,8,["disabled","onClick"])]),default:t(({record:e,theme:r})=>[a(V,{class:"pt-4"},{default:t(()=>[a(h,{dense:""},{default:t(()=>[a(c,{cols:"12"},{default:t(()=>[y("div",b,v(o.formatter.format(e.grandtotal)),1)]),_:2},1024),a(c,{cols:"12"},{default:t(()=>[a(m,{label:"Jumlah (Rp)",autofocus:"",modelValue:e.grandtotal,"onUpdate:modelValue":s=>e.grandtotal=s,"allow-negative":!1,step:"any",color:r},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const D=p(C,[["render",g]]);export{D as default};
