import{_ as f,b as x,C as t,d as b,o as d,x as l,N as h,O as n,Z as u,S as i,Q as e,bi as w,a1 as g,H as m,J as v,K as y,bz as C,R as r}from"./App-Cj1p0Id9.js";const k={name:"system-role-edit"},U={class:"py-0"},B={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$={class:"text-caption font-weight-bold"},N={class:"text-caption"};function z(D,s,F,R,S,T){const p=b("form-edit");return d(),x(p,{"with-helpdesk":""},{default:t(({record:o,theme:c})=>[l(i,null,{default:t(()=>[l(h,{dense:""},{default:t(()=>[l(n,{cols:"12"},{default:t(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":a=>o.page_name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"12"},{default:t(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":a=>o.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",U,[l(g,null,{default:t(()=>[l(w,{color:`${c}`,size:"small",variant:"flat"},{default:t(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:t(()=>[e("table",B,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(d(!0),m(y,null,v(o.permissions,(a,_)=>(d(),m("tr",{key:_},[e("td",null,[l(C,{modelValue:a.value,"onUpdate:modelValue":V=>a.value=V},null,8,["modelValue","onUpdate:modelValue"])]),e("td",$,r(a.name),1),e("td",N,r(a.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const H=f(k,[["render",z]]);export{H as default};