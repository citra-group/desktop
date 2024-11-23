import{_ as w,r as p,o as u,c as m,y as o,z as y,s as e,A as v,V as x,B as T,L as _,Q as U,a2 as $,H as g,J as i,S as h,a0 as k,N as C,bm as I,bn as S}from"./app-oi9O8E9X.js";import{V as N}from"./VTextarea-C8o5pum4.js";const R={name:"mycoperative-withdrawal-show",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{publishCurrentSubmission(a,s){s.$http(`mycoperative/api/withdrawal/${a.id}/publish`,{method:"PUT",params:a}).then(()=>{this.$router.push({name:"mycoperative-withdrawal"})})},closeThisTransaction(a,s){s.$http(`mycoperative/api/withdrawal/${a.id}/close-by-cash`,{method:"PUT",params:a}).then(()=>{this.$router.push({name:"mycoperative-withdrawal"})})},downloadReceiptOfTransaction(a,s){s.$http(`mycoperative/api/receipt/${a.slug}`,{method:"GET",responseType:"blob"}).then(c=>{const r=new Blob([c],{type:"application/pdf"}),d=document.createElement("a");d.href=URL.createObjectURL(r),d.download=a.slug+".pdf",d.click(),URL.revokeObjectURL(d.href),s.loader.state=!1}).catch(()=>{})}}},B=a=>(I("data-v-db83a8cb"),a=a(),S(),a),L=B(()=>_("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),D={class:"text-caption pr-1 pl-2"};function O(a,s,c,r,d,f){const V=p("v-currency-field"),b=p("form-show");return u(),m(b,{"with-helpdesk":"","hide-delete":"","hide-edit":"",ref:"form"},{toolbar:o(({record:t,store:n})=>[t.status==="COMPLETED"?(u(),m(y,{key:0,icon:"",onClick:l=>f.downloadReceiptOfTransaction(t,n)},{default:o(()=>[e(x,null,{default:o(()=>[v("print")]),_:1})]),_:2},1032,["onClick"])):T("",!0)]),default:o(({record:t,theme:n})=>[e($,{color:n,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:o(()=>[L,_("div",D,U(t.status),1)]),_:2},1032,["color"]),e(C,null,{default:o(()=>[e(g,{dense:""},{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(h,{label:"Nomor",variant:"outlined",modelValue:t.slug,"onUpdate:modelValue":l=>t.slug=l,color:n,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e(i,{cols:"12"},{default:o(()=>[e(h,{label:"name",variant:"outlined",color:n,modelValue:t.name,"onUpdate:modelValue":l=>t.name=l,readonly:"","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{cols:"12"},{default:o(()=>[e(V,{label:"Nominal",variant:"outlined",color:n,modelValue:t.total,"onUpdate:modelValue":l=>t.total=l,"hide-details":"",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{cols:"12"},{default:o(()=>[e(N,{label:"Keterangan",rows:"3",variant:"outlined",color:n,modelValue:t.description,"onUpdate:modelValue":l=>t.description=l,readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{cols:"12"},{default:o(()=>[e(k,{src:t.transfer_path},null,8,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const P=w(R,[["render",O],["__scopeId","data-v-db83a8cb"]]);export{P as default};
