import{_ as p,r as h,o as s,c as f,y as a,s as l,H as V,J as n,S as d,N as c,L as e,ah as w,W as x,D as u,E as b,F as g,bl as y,Q as i}from"./app-oi9O8E9X.js";const v={name:"system-role-show"},k={class:"py-0"},C=e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1),B={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1),N={class:"text-caption font-weight-bold"},U={class:"text-caption"};function D(F,E,L,S,T,z){const r=h("form-show");return s(),f(r,{"with-helpdesk":"","with-activity-logs":""},{default:a(({record:o,theme:_})=>[l(c,null,{default:a(()=>[l(V,{dense:""},{default:a(()=>[l(n,{cols:"12"},{default:a(()=>[l(d,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":t=>o.page_name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"12"},{default:a(()=>[l(d,{label:"Name",modelValue:o.name,"onUpdate:modelValue":t=>o.name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",k,[l(x,null,{default:a(()=>[l(w,{color:`${_}`,size:"small",variant:"flat"},{default:a(()=>[C]),_:2},1032,["color"])]),_:2},1024)]),l(c,null,{default:a(()=>[e("table",B,[$,e("tbody",null,[(s(!0),u(g,null,b(o.permissions,(t,m)=>(s(),u("tr",{key:m},[e("td",null,[l(y,{"model-value":t.value,readonly:""},null,8,["model-value"])]),e("td",N,i(t.name),1),e("td",U,i(t.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const J=p(v,[["render",D]]);export{J as default};