import{p as j,a8 as T,bi as L,bs as q,aT as K,g as $,aj as z,aU as E,aA as G,i as M,ao as r,aG as y,a5 as U,aW as h,n as W,aB as Y,s,F as H,aY as J,x as V,bw as Q,bE as X,bF as k,a$ as Z}from"./app-Cu0JO2ZK.js";const ee=j({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...T(),...L(),...q(K({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),ae=$()({name:"VOtpInput",props:ee(),emits:{finish:t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,F){let{attrs:x,emit:A,slots:d}=F;const{dimensionStyles:P}=z(t),{isFocused:g,focus:w,blur:D}=E(t),o=G(t,"modelValue","",e=>e==null?[]:String(e).split(""),e=>e.join("")),{t:_}=M(),f=r(()=>Number(t.length)),B=r(()=>Array(f.value).fill(0)),i=y(-1),m=y(),c=y([]),b=r(()=>c.value[i.value]);function C(){if(p(b.value.value)){b.value.value="";return}const e=o.value.slice(),a=b.value.value;e[i.value]=a;let n=null;i.value>o.value.length?n=o.value.length+1:i.value+1!==f.value&&(n="next"),o.value=e,n&&k(m.value,n)}function I(e){const a=o.value.slice(),n=i.value;let u=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),e.key==="ArrowLeft"?u="prev":e.key==="ArrowRight"?u="next":["Backspace","Delete"].includes(e.key)&&(a[i.value]="",o.value=a,i.value>0&&e.key==="Backspace"?u="prev":requestAnimationFrame(()=>{var l;(l=c.value[n])==null||l.select()})),requestAnimationFrame(()=>{u!=null&&k(m.value,u)}))}function S(e,a){var u,l;a.preventDefault(),a.stopPropagation();const n=((u=a==null?void 0:a.clipboardData)==null?void 0:u.getData("Text").slice(0,f.value))??"";p(n)||(o.value=n.split(""),(l=c.value)==null||l[e].blur())}function N(){o.value=[]}function O(e,a){w(),i.value=a}function R(){D(),i.value=-1}function p(e){return t.type==="number"&&/[^0-9]/g.test(e)}return U({VField:{color:r(()=>t.color),bgColor:r(()=>t.color),baseColor:r(()=>t.baseColor),disabled:r(()=>t.disabled),error:r(()=>t.error),variant:r(()=>t.variant)}},{scoped:!0}),h(o,e=>{e.length===f.value&&A("finish",e.join(""))},{deep:!0}),h(i,e=>{e<0||Z(()=>{var a;(a=c.value[e])==null||a.select()})}),W(()=>{var n;const[e,a]=Y(x);return s("div",V({class:["v-otp-input",{"v-otp-input--divided":!!t.divider},t.class],style:[t.style]},e),[s("div",{ref:m,class:"v-otp-input__content",style:[P.value]},[B.value.map((u,l)=>s(H,null,[t.divider&&l!==0&&s("span",{class:"v-otp-input__divider"},[t.divider]),s(J,{focused:g.value&&t.focusAll||i.value===l,key:l},{...d,loader:void 0,default:()=>s("input",{ref:v=>c.value[l]=v,"aria-label":_(t.label,l+1),autofocus:l===0&&t.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:t.disabled,inputmode:t.type==="number"?"numeric":"text",min:t.type==="number"?0:void 0,maxlength:"1",placeholder:t.placeholder,type:t.type==="number"?"text":t.type,value:o.value[l],onInput:C,onFocus:v=>O(v,l),onBlur:R,onKeydown:I,onPaste:v=>S(l,v)},null)})])),s("input",V({class:"v-otp-input-input",type:"hidden"},a,{value:o.value.join("")}),null),s(Q,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!t.loading,persistent:!0},{default:()=>{var u;return[((u=d.loader)==null?void 0:u.call(d))??s(X,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(n=d.default)==null?void 0:n.call(d)])])}),{blur:()=>{var e;(e=c.value)==null||e.some(a=>a.blur())},focus:()=>{var e;(e=c.value)==null||e[0].focus()},reset:N,isFocused:g}}});export{ae as V};
