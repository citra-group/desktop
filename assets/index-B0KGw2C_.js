import{_ as m,H as d,b as u,F as a,K as p,d as i,o as e}from"./App-Cj1p0Id9.js";const f={name:"infrastructure-document",methods:{checkRoute:function(c=""){let t=this.$router.currentRoute._value.name,s=["show","delete","update","edit","create"];for(let o of s)t=t.replaceAll("-"+o,"");return t==c}}};function k(c,t,s,o,l,r){const n=i("page-crud");return e(),d(p,null,[r.checkRoute("infrastructure-document")?(e(),u(n,{key:0,"page-name":"infrastructure-document","page-key":"document"})):a("",!0),r.checkRoute("infrastructure-unit-document")?(e(),u(n,{key:1,"page-name":"infrastructure-unit-document","page-key":"document","parent-name":"infrastructure-unit","parent-key":"unit"})):a("",!0),r.checkRoute("infrastructure-asset-document")?(e(),u(n,{key:2,"page-name":"infrastructure-asset-document","page-key":"document","parent-name":"infrastructure-asset","parent-key":"asset"})):a("",!0),r.checkRoute("infrastructure-unit-asset-document")?(e(),u(n,{key:3,"page-name":"infrastructure-unit-asset-document","page-key":"document","parent-name":"infrastructure-unit-asset","parent-key":"asset"})):a("",!0)],64)}const g=m(f,[["render",k]]);export{g as default};
