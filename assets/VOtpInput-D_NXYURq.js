import{p as j,aJ as K,bh as L,bt as T,aU as q,j as z,aP as G,aW as J,am as M,l as U,al as r,as as y,aB as W,a_ as h,v as $,an as E,x as s,K as H,b1 as Q,B as V,bx as X,bF as Y,bG as k,b5 as Z}from"./App-Cj1p0Id9.js";const ee=j({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...K(),...L(),...T(q({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),ae=z()({name:"VOtpInput",props:ee(),emits:{finish:t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,x){let{attrs:F,emit:A,slots:d}=x;const{dimensionStyles:P}=G(t),{isFocused:p,focus:_,blur:B}=J(t),o=M(t,"modelValue","",e=>e==null?[]:String(e).split(""),e=>e.join("")),{t:D}=U(),f=r(()=>Number(t.length)),w=r(()=>Array(f.value).fill(0)),i=y(-1),m=y(),c=y([]),b=r(()=>c.value[i.value]);function C(){if(g(b.value.value)){b.value.value="";return}const e=o.value.slice(),a=b.value.value;e[i.value]=a;let n=null;i.value>o.value.length?n=o.value.length+1:i.value+1!==f.value&&(n="next"),o.value=e,n&&k(m.value,n)}function I(e){const a=o.value.slice(),n=i.value;let u=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),e.key==="ArrowLeft"?u="prev":e.key==="ArrowRight"?u="next":["Backspace","Delete"].includes(e.key)&&(a[i.value]="",o.value=a,i.value>0&&e.key==="Backspace"?u="prev":requestAnimationFrame(()=>{var l;(l=c.value[n])==null||l.select()})),requestAnimationFrame(()=>{u!=null&&k(m.value,u)}))}function S(e,a){var u,l;a.preventDefault(),a.stopPropagation();const n=((u=a==null?void 0:a.clipboardData)==null?void 0:u.getData("Text").slice(0,f.value))??"";g(n)||(o.value=n.split(""),(l=c.value)==null||l[e].blur())}function N(){o.value=[]}function O(e,a){_(),i.value=a}function R(){B(),i.value=-1}function g(e){return t.type==="number"&&/[^0-9]/g.test(e)}return W({VField:{color:r(()=>t.color),bgColor:r(()=>t.color),baseColor:r(()=>t.baseColor),disabled:r(()=>t.disabled),error:r(()=>t.error),variant:r(()=>t.variant)}},{scoped:!0}),h(o,e=>{e.length===f.value&&A("finish",e.join(""))},{deep:!0}),h(i,e=>{e<0||Z(()=>{var a;(a=c.value[e])==null||a.select()})}),$(()=>{var n;const[e,a]=E(F);return s("div",V({class:["v-otp-input",{"v-otp-input--divided":!!t.divider},t.class],style:[t.style]},e),[s("div",{ref:m,class:"v-otp-input__content",style:[P.value]},[w.value.map((u,l)=>s(H,null,[t.divider&&l!==0&&s("span",{class:"v-otp-input__divider"},[t.divider]),s(Q,{focused:p.value&&t.focusAll||i.value===l,key:l},{...d,loader:void 0,default:()=>s("input",{ref:v=>c.value[l]=v,"aria-label":D(t.label,l+1),autofocus:l===0&&t.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:t.disabled,inputmode:t.type==="number"?"numeric":"text",min:t.type==="number"?0:void 0,maxlength:"1",placeholder:t.placeholder,type:t.type==="number"?"text":t.type,value:o.value[l],onInput:C,onFocus:v=>O(v,l),onBlur:R,onKeydown:I,onPaste:v=>S(l,v)},null)})])),s("input",V({class:"v-otp-input-input",type:"hidden"},a,{value:o.value.join("")}),null),s(X,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!t.loading,persistent:!0},{default:()=>{var u;return[((u=d.loader)==null?void 0:u.call(d))??s(Y,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(n=d.default)==null?void 0:n.call(d)])])}),{blur:()=>{var e;(e=c.value)==null||e.some(a=>a.blur())},focus:()=>{var e;(e=c.value)==null||e[0].focus()},reset:N,isFocused:p}}});export{ae as V};
