import{_ as i,g as d,c as a,e as n,F as o,r as k,o as e}from"./app-CRJnygw4.js";const f={name:"infrastructure-record",methods:{checkRoute:function(c=""){let u=this.$router.currentRoute._value.name,s=["show","delete","update","edit","create"];for(let m of s)u=u.replaceAll("-"+m,"");return u==c}}};function p(c,u,s,m,y,t){const r=k("page-crud");return e(),d(o,null,[t.checkRoute("infrastructure-record")?(e(),a(r,{key:0,"page-name":"infrastructure-record","page-key":"record"})):n("",!0),t.checkRoute("infrastructure-deadline")?(e(),a(r,{key:1,"page-name":"infrastructure-deadline","page-key":"record"})):n("",!0),t.checkRoute("infrastructure-tax")?(e(),a(r,{key:2,"page-name":"infrastructure-tax","page-key":"record"})):n("",!0),t.checkRoute("infrastructure-asset-tax")?(e(),a(r,{key:3,"page-name":"infrastructure-asset-tax","page-key":"record","parent-name":"infrastructure-asset","parent-key":"asset"})):n("",!0),t.checkRoute("infrastructure-asset-document-tax")?(e(),a(r,{key:4,"page-name":"infrastructure-asset-document-tax","page-key":"record","parent-name":"infrastructure-asset-document","parent-key":"document"})):n("",!0),t.checkRoute("infrastructure-document-tax")?(e(),a(r,{key:5,"page-name":"infrastructure-document-tax","page-key":"record","parent-name":"infrastructure-document","parent-key":"document"})):n("",!0),t.checkRoute("infrastructure-unit-asset-tax")?(e(),a(r,{key:6,"page-name":"infrastructure-unit-asset-tax","page-key":"record","parent-name":"infrastructure-unit-asset","parent-key":"asset"})):n("",!0),t.checkRoute("infrastructure-unit-asset-document-tax")?(e(),a(r,{key:7,"page-name":"infrastructure-unit-asset-document-tax","page-key":"record","parent-name":"infrastructure-unit-asset-document","parent-key":"asset"})):n("",!0),t.checkRoute("infrastructure-unit-document-tax")?(e(),a(r,{key:8,"page-name":"infrastructure-unit-document-tax","page-key":"record","parent-name":"infrastructure-unit-document","parent-key":"document"})):n("",!0),t.checkRoute("infrastructure-maintenance")?(e(),a(r,{key:9,"page-name":"infrastructure-maintenance","page-key":"record"})):n("",!0),t.checkRoute("infrastructure-asset-maintenance")?(e(),a(r,{key:10,"page-name":"infrastructure-asset-maintenance","page-key":"record","parent-name":"infrastructure-asset","parent-key":"asset"})):n("",!0),t.checkRoute("infrastructure-asset-document-maintenance")?(e(),a(r,{key:11,"page-name":"infrastructure-asset-document-maintenance","page-key":"record","parent-name":"infrastructure-asset-document","parent-key":"document"})):n("",!0),t.checkRoute("infrastructure-document-maintenance")?(e(),a(r,{key:12,"page-name":"infrastructure-document-maintenance","page-key":"record","parent-name":"infrastructure-document","parent-key":"document"})):n("",!0),t.checkRoute("infrastructure-unit-asset-maintenance")?(e(),a(r,{key:13,"page-name":"infrastructure-unit-asset-maintenance","page-key":"record","parent-name":"infrastructure-unit-asset","parent-key":"asset"})):n("",!0),t.checkRoute("infrastructure-unit-asset-document-maintenance")?(e(),a(r,{key:14,"page-name":"infrastructure-unit-asset-document-maintenance","page-key":"record","parent-name":"infrastructure-unit-asset-document","parent-key":"asset"})):n("",!0),t.checkRoute("infrastructure-unit-document-maintenance")?(e(),a(r,{key:15,"page-name":"infrastructure-unit-document-maintenance","page-key":"record","parent-name":"infrastructure-unit-document","parent-key":"document"})):n("",!0)],64)}const h=i(f,[["render",p]]);export{h as default};