import{_ as v,r as m,o as U,c as y,y as t,s as e,z as $,H as x,J as o,S as _,R as r,A as V,Z as R,N as k}from"./app-oi9O8E9X.js";import{V as C}from"./VTextarea-C8o5pum4.js";const T={name:"human-partner-create",methods:{getReferenceRegencies:function(n,d,u){Number.isInteger(n)&&(d.regency_id=null,d.district_id=null,this.$http(`human/api/ref-province/${n}/regencies`).then(i=>{u.combos.regencies=i}))},getReferenceDistricts:function(n,d,u){Number.isInteger(n)&&(d.district_id=null,this.$http(`human/api/ref-regency/${n}/districts`).then(i=>{u.combos.districts=i}))},fetchInfoTransactions(n,d){d.slug=n.slug}}};function w(n,d,u,i,N,c){const b=m("v-date-input"),h=m("v-currency-field"),g=m("form-create");return U(),y(g,{"with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:t(({record:s})=>[e($,{disabled:!(s.name&&s.email&&s.province_id&&s.regency_id&&s.duedate),icon:"move_to_inbox",tooltip:"Simpan Data",onClick:d[0]||(d[0]=p=>n.$refs.form.postFormCreate())},null,8,["disabled"])]),default:t(({combos:{provinces:s,regencies:p},record:a,store:f})=>[e(k,null,{default:t(()=>[e(x,{dense:""},{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(_,{label:"Nama",autofocus:"",modelValue:a.name,"onUpdate:modelValue":l=>a.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(_,{label:"Surel (Email)",modelValue:a.email,"onUpdate:modelValue":l=>a.email=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(C,{label:"Alamat",rows:"3",modelValue:a.address,"onUpdate:modelValue":l=>a.address=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(r,{items:s,label:"Provinsi",modelValue:a.province_id,"onUpdate:modelValue":[l=>a.province_id=l,l=>c.getReferenceRegencies(l,a,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(r,{items:p,label:"Kabupaten/Kotamadya",modelValue:a.regency_id,"onUpdate:modelValue":[l=>a.regency_id=l,l=>c.getReferenceDistricts(l,a,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:t(()=>[e(b,{label:"Jatuh Tempo",modelValue:a.duedate,"onUpdate:modelValue":l=>a.duedate=l,"prepend-icon":"","prepend-inner-icon":"$calendar"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"8"},{default:t(()=>[V(" ")]),_:1}),e(o,{cols:"4"},{default:t(()=>[e(h,{label:"Pendapatan (Rp)",modelValue:a.amount_of_salary,"onUpdate:modelValue":l=>a.amount_of_salary=l,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"3"},{default:t(()=>[V(" ")]),_:1}),e(o,{cols:"5"},{default:t(()=>[e(R,{size:"small",color:"primary",modelValue:a.active,"onUpdate:modelValue":l=>a.active=l,label:`Status: ${a.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const I=v(T,[["render",w],["__scopeId","data-v-e2f299b9"]]);export{I as default};
