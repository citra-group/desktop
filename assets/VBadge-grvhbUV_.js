import{N as B,O as V,P as N,Q as P,R as h,S as x,T,U as R,W as _,X as w,Y as d,Z as L,$ as X,a0 as Y,a1 as $,a2 as A,a3 as D,a4 as I,a as t,a5 as W,v as F,x as M,D as u,b as O}from"./app-rj50VoVz.js";const Q=B({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N(),...P({location:"top end"}),...h(),...x(),...T(),...R({transition:"scale-rotate-transition"})},"VBadge"),Z=_()({name:"VBadge",inheritAttrs:!1,props:Q(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:g}=w(d(e,"color")),{roundedClasses:b}=L(e),{t:m}=X(),{textColorClasses:f,textColorStyles:v}=Y(d(e,"textColor")),{themeClasses:C}=$(),{locationStyles:S}=A(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return D(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[k,y]=I(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},y,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(W,{transition:e.transition},{default:()=>{var i,r;return[F(t("span",u({class:["v-badge__badge",C.value,c.value,b.value,f.value],style:[g.value,v.value,e.inline?{}:S.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},k),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(O,{icon:e.icon},null):n]),[[M,e.modelValue]])]}})])]}})}),{}}});export{Z as V};