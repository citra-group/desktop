import{_ as f,b as c,C as e,d as _,o as x,x as a,Q as o,R as d,aa as V,Z as b,S as s,X as h,N as v,a2 as w,O as i,E as r}from"./App-Cj1p0Id9.js";const g={name:"mycoperative-invoice-show",data:()=>({datemenu:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})})},y={class:"text-caption pr-1 pl-2"},C={class:"pb-2"};function T(u,t,N,S,$,D){const p=_("form-show");return x(),c(p,{"with-helpdesk":"","hide-delete":"","hide-edit":""},{default:e(({record:l,theme:n})=>[a(V,{color:n,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:e(()=>[t[0]||(t[0]=o("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),o("div",y,d(l.type),1)]),_:2},1032,["color"]),a(s,{class:"pb-0"},{default:e(()=>[a(b,{modelValue:l.member_name,"onUpdate:modelValue":m=>l.member_name=m,variant:"outlined",color:n,"hide-details":""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(s,{class:"pt-2"},{default:e(()=>[a(h,{flat:"",border:""},{default:e(()=>[a(s,null,{default:e(()=>[o("div",C,d(l.name),1)]),_:2},1024),a(v,{class:w(`bg-${n}-lighten-5`)},{default:e(()=>[a(i,{cols:"6"},{default:e(()=>[a(s,null,{default:e(()=>[t[1]||(t[1]=r(" Jatuh Tempo ")),o("div",null,d(l.duedate),1)]),_:2},1024)]),_:2},1024),a(i,{cols:"6"},{default:e(()=>[a(s,null,{default:e(()=>[t[2]||(t[2]=r(" Total Tagihan ")),o("div",null,d(u.formatter.format(l.grandtotal)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024)]),info:e(()=>t[3]||(t[3]=[])),_:1})}const B=f(g,[["render",T]]);export{B as default};