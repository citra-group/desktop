import{p as u,m as v,g as m,an as y,n as k,s as n,aK as R,I as _,ao as E,ap as F,aq as I,b1 as L,ar as $,a as q,at as H,b as K,d as M,e as N,u as j,ay as w,aA as z,b2 as G,aB as J,aC as O,l as Q,aE as U,h as W,ax as X,t as d,$ as Y,aH as Z}from"./app-oi9O8E9X.js";const p=u({color:String,density:String,...v()},"VBannerActions"),ee=m()({name:"VBannerActions",props:p(),setup(e,t){let{slots:a}=t;return y({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),k(()=>{var s;return n("div",{class:["v-banner-actions",e.class],style:e.style},[(s=a.default)==null?void 0:s.call(a)])}),{}}}),ae=R("v-banner-text"),ne=u({avatar:String,bgColor:String,color:String,icon:_,lines:String,stacked:Boolean,sticky:Boolean,text:String,...E(),...v(),...F(),...I(),...L({mobile:null}),...$(),...q(),...H(),...K(),...M(),...N()},"VBanner"),te=m()({name:"VBanner",props:ne(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:b}=j(e,"bgColor"),{borderClasses:g}=w(e),{densityClasses:P}=z(e),{displayClasses:B,mobile:V}=G(e),{dimensionStyles:C}=J(e),{elevationClasses:x}=O(e),{locationStyles:S}=Q(e),{positionClasses:f}=U(e),{roundedClasses:A}=W(e),{themeClasses:D}=X(e),o=d(e,"color"),l=d(e,"density");y({VBannerActions:{color:o,density:l}}),k(()=>{const h=!!(e.text||a.text),i=!!(e.avatar||e.icon),T=!!(i||a.prepend);return n(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||V.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},D.value,s.value,g.value,P.value,B.value,x.value,f.value,A.value,e.class],style:[b.value,C.value,S.value,e.style],role:"banner"},{default:()=>{var r;return[T&&n("div",{key:"prepend",class:"v-banner__prepend"},[a.prepend?n(Z,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{color:o.value,density:l.value,icon:e.icon,image:e.avatar}}},a.prepend):n(Y,{key:"prepend-avatar",color:o.value,density:l.value,icon:e.icon,image:e.avatar},null)]),n("div",{class:"v-banner__content"},[h&&n(ae,{key:"text"},{default:()=>{var c;return[((c=a.text)==null?void 0:c.call(a))??e.text]}}),(r=a.default)==null?void 0:r.call(a)]),a.actions&&n(ee,{key:"actions"},a.actions)]}})})}});export{te as V};