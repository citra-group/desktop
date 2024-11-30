import{_ as g,b as h,C as t,d as p,o as v,x as a,N as x,O as o,Z as i,W as m,E as y,a4 as R,S as T}from"./App-DUAqxygC.js";import{V as $}from"./VTextarea-pkl2r8pU.js";const k={name:"human-unit-edit",data:()=>({}),methods:{getReferenceRegencies:function(n,d,u){Number.isInteger(n)&&(d.regency_id=null,d.district_id=null,this.$http(`human/api/ref-province/${n}/regencies`).then(s=>{u.combos.regencies=s}))},getReferenceDistricts:function(n,d,u){Number.isInteger(n)&&(d.district_id=null,this.$http(`human/api/ref-regency/${n}/districts`).then(s=>{u.combos.districts=s}))},fetchInfoTransactions(n,d){d.slug=n.slug}}};function w(n,d,u,s,C,f){const c=p("v-currency-field"),_=p("form-edit");return v(),h(_,{"with-helpdesk":""},{default:t(({combos:{provinces:r,regencies:b,parents:U},record:e,store:V})=>[a(T,null,{default:t(()=>[a(x,{dense:""},{default:t(()=>[a(o,{cols:"12"},{default:t(()=>[a(i,{label:"Nama",autofocus:"",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"12"},{default:t(()=>[a(i,{label:"Surel (Email)",modelValue:e.email,"onUpdate:modelValue":l=>e.email=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"12"},{default:t(()=>[a(i,{label:"Kode Referensi",modelValue:e.reff,"onUpdate:modelValue":l=>e.reff=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"12"},{default:t(()=>[a($,{label:"Alamat",rows:"3",modelValue:e.address,"onUpdate:modelValue":l=>e.address=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"12"},{default:t(()=>[a(m,{items:r,label:"Provinsi",modelValue:e.province_id,"onUpdate:modelValue":[l=>e.province_id=l,l=>f.getReferenceRegencies(l,e,V)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"12"},{default:t(()=>[a(m,{items:b,label:"Kabupaten/Kotamadya",modelValue:e.regency_id,"onUpdate:modelValue":[l=>e.regency_id=l,l=>f.getReferenceDistricts(l,e,V)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"4"},{default:t(()=>[a(i,{class:"date-input",type:"date",label:"Jatuh Tempo",modelValue:e.duedate,"onUpdate:modelValue":l=>e.duedate=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"8"},{default:t(()=>[a(m,{items:U,label:"Kantor Pusat",modelValue:e.parent_id,"onUpdate:modelValue":l=>e.parent_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"4"},{default:t(()=>[a(c,{label:"Pendapatan (Rp)",modelValue:e.amount_of_salary,"onUpdate:modelValue":l=>e.amount_of_salary=l,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(o,{cols:"3"},{default:t(()=>d[0]||(d[0]=[y(" ")])),_:1}),a(o,{cols:"5"},{default:t(()=>[a(R,{modelValue:e.active,"onUpdate:modelValue":l=>e.active=l,inset:"",label:`Status: ${e.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const K=g(k,[["render",w],["__scopeId","data-v-ed98669a"]]);export{K as default};