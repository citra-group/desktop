import{_ as f,c as h,w as t,r as w,o as n,a as l,j as V,k as d,y as u,n as i,m as e,s as x,B as g,g as r,h as y,F as b,by as v,t as m}from"./app-rj50VoVz.js";const k={name:"system-role-show"},B={class:"py-0"},C={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$={class:"text-caption font-weight-bold"},U={class:"text-caption"};function F(N,s,D,T,j,z){const c=w("form-show");return n(),h(c,{"with-helpdesk":"","with-activity-logs":""},{default:t(({record:o,theme:p})=>[l(i,null,{default:t(()=>[l(V,{dense:""},{default:t(()=>[l(d,{cols:"12"},{default:t(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":a=>o.page_name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:t(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":a=>o.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",B,[l(g,null,{default:t(()=>[l(x,{color:`${p}`,size:"small",variant:"flat"},{default:t(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:t(()=>[e("table",C,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(n(!0),r(b,null,y(o.permissions,(a,_)=>(n(),r("tr",{key:_},[e("td",null,[l(v,{"model-value":a.value,readonly:""},null,8,["model-value"])]),e("td",$,m(a.name),1),e("td",U,m(a.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const L=f(k,[["render",F]]);export{L as default};