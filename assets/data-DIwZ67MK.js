import{_ as w,c as i,w as t,r,o as c,V as h,a as d,d as m,b as p,e as S,m as o,t as n}from"./app-rj50VoVz.js";const V={name:"mycoperative-deposit-data",methods:{openPageWithdrawal(){this.$router.push({name:"mycoperative-withdrawal-create"})}}},N={class:"text-center"},b={class:"text-right"};function y(C,e,B,$,v,u){const _=r("item-data"),f=r("form-data");return c(),i(f,null,{toolbar:t(({hasSelected:l,theme:s})=>[l?S("",!0):(c(),i(h,{key:0,icon:"",tooltip:"Penerikan",color:s,onClick:u.openPageWithdrawal},{default:t(()=>[d(p,null,{default:t(()=>e[0]||(e[0]=[m("account_balance_wallet")])),_:1})]),_:2},1032,["color","onClick"]))]),desktopRow:t(({headers:l,index:s,internalItem:g,isSelected:k,record:a,toggleSelect:x})=>[d(_,{headers:l,item:a,index:s,internalItem:g,isSelected:k,toggleSelect:x},{default:t(()=>[o("td",null,n(a.slug),1),o("td",null,n(a.name),1),o("td",null,n(a.type),1),o("td",null,n(a.diffForHumans),1),o("td",N,[d(p,{color:a.paid==="LUNAS"?"green":"black"},{default:t(()=>[m(n(a.paid==="LUNAS"?"check_circle":"unpublished "),1)]),_:2},1032,["color"])]),o("td",b,n(a.grandtotal),1)]),_:2},1032,["headers","item","index","internalItem","isSelected","toggleSelect"])]),feed:t(()=>e[1]||(e[1]=[])),info:t(()=>e[2]||(e[2]=[])),filter:t(()=>e[3]||(e[3]=[])),_:1})}const P=w(V,[["render",y]]);export{P as default};