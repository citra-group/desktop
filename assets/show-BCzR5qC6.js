import{_ as f,c,y as e,r as _,o as V,s as t,L as o,N as n,a2 as x,S as b,O as s,H as h,X as v,J as i,A as r}from"./app-D7ys9-f5.js";import{V as w}from"./VCard-DO_YsjVg.js";import"./VCardItem-B4Lglhg8.js";import"./VCardTitle-BEaWhXkl.js";const g={name:"mycoperative-invoice-show",data:()=>({datemenu:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})})},y={class:"text-caption pr-1 pl-2"},T={class:"pb-2"};function C(u,a,N,S,$,D){const p=_("form-show");return V(),c(p,{"with-helpdesk":"","hide-delete":"","hide-edit":""},{default:e(({record:l,theme:d})=>[t(x,{color:d,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:e(()=>[a[0]||(a[0]=o("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),o("div",y,n(l.type),1)]),_:2},1032,["color"]),t(s,{class:"pb-0"},{default:e(()=>[t(b,{modelValue:l.member_name,"onUpdate:modelValue":m=>l.member_name=m,variant:"outlined",color:d,"hide-details":""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(s,{class:"pt-2"},{default:e(()=>[t(w,{flat:"",border:""},{default:e(()=>[t(s,null,{default:e(()=>[o("div",T,n(l.name),1)]),_:2},1024),t(h,{class:v(`bg-${d}-lighten-5`)},{default:e(()=>[t(i,{cols:"6"},{default:e(()=>[t(s,null,{default:e(()=>[a[1]||(a[1]=r(" Jatuh Tempo ")),o("div",null,n(l.duedate),1)]),_:2},1024)]),_:2},1024),t(i,{cols:"6"},{default:e(()=>[t(s,null,{default:e(()=>[a[2]||(a[2]=r(" Total Tagihan ")),o("div",null,n(u.formatter.format(l.grandtotal)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024)]),info:e(()=>a[3]||(a[3]=[])),_:1})}const J=f(g,[["render",C]]);export{J as default};