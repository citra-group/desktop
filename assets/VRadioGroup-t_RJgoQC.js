import{p as f,au as k,g as V,n as y,av as d,s as t,x as i,aw as A,ax as $,ay as x,I as p,az as O,ao as h,aA as F,aB as U,aC as m,F as D,aD as N,aE as w}from"./app-Cu0JO2ZK.js";const z=f({...k({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),L=V()({name:"VRadio",props:z(),setup(e,l){let{slots:s}=l;return y(()=>{const a=d.filterProps(e);return t(d,i(a,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)}),{}}}),B=f({height:{type:[Number,String],default:"auto"},...A(),...$(x(),["multiple"]),trueIcon:{type:p,default:"$radioOn"},falseIcon:{type:p,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),M=V()({name:"VRadioGroup",inheritAttrs:!1,props:B(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:a}=l;const v=O(),c=h(()=>e.id||`radio-group-${v}`),o=F(e,"modelValue");return y(()=>{const[b,I]=U(s),P=m.filterProps(e),g=d.filterProps(e),r=a.label?a.label({label:e.label,props:{for:c.value}}):e.label;return t(m,i({class:["v-radio-group",e.class],style:e.style},b,P,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,id:c.value}),{...a,default:u=>{let{id:n,messagesId:R,isDisabled:C,isReadonly:G}=u;return t(D,null,[r&&t(N,{id:n.value},{default:()=>[r]}),t(w,i(g,{id:n.value,"aria-describedby":R.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:C.value,readonly:G.value,"aria-labelledby":r?n.value:void 0,multiple:!1},I,{modelValue:o.value,"onUpdate:modelValue":S=>o.value=S}),a)])}})}),{}}});export{M as V,L as a};
