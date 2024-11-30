import{_ as v,b as U,C as t,d as m,o as y,x as e,D as x,N as $,O as n,Z as V,W as _,E as r,a4 as C,S as R}from"./App-Cj1p0Id9.js";import{V as k}from"./VTextarea-lhPdcUzR.js";const T={name:"human-partner-create",methods:{getReferenceRegencies:function(d,o,u){Number.isInteger(d)&&(o.regency_id=null,o.district_id=null,this.$http(`human/api/ref-province/${d}/regencies`).then(i=>{u.combos.regencies=i}))},getReferenceDistricts:function(d,o,u){Number.isInteger(d)&&(o.district_id=null,this.$http(`human/api/ref-regency/${d}/districts`).then(i=>{u.combos.districts=i}))},fetchInfoTransactions(d,o){o.slug=d.slug}}};function w(d,o,u,i,N,p){const b=m("v-date-input"),g=m("v-currency-field"),h=m("form-create");return y(),U(h,{"with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:t(({record:s})=>[e(x,{disabled:!(s.name&&s.email&&s.province_id&&s.regency_id&&s.duedate),icon:"move_to_inbox",tooltip:"Simpan Data",onClick:o[0]||(o[0]=f=>d.$refs.form.postFormCreate())},null,8,["disabled"])]),default:t(({combos:{provinces:s,regencies:f},record:l,store:c})=>[e(R,null,{default:t(()=>[e($,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(V,{label:"Nama",autofocus:"",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:t(()=>[e(V,{label:"Surel (Email)",modelValue:l.email,"onUpdate:modelValue":a=>l.email=a,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:t(()=>[e(k,{label:"Alamat",rows:"3",modelValue:l.address,"onUpdate:modelValue":a=>l.address=a,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:t(()=>[e(_,{items:s,label:"Provinsi",modelValue:l.province_id,"onUpdate:modelValue":[a=>l.province_id=a,a=>p.getReferenceRegencies(a,l,c)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:t(()=>[e(_,{items:f,label:"Kabupaten/Kotamadya",modelValue:l.regency_id,"onUpdate:modelValue":[a=>l.regency_id=a,a=>p.getReferenceDistricts(a,l,c)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"4"},{default:t(()=>[e(b,{label:"Jatuh Tempo",modelValue:l.duedate,"onUpdate:modelValue":a=>l.duedate=a,"prepend-icon":"","prepend-inner-icon":"$calendar"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"8"},{default:t(()=>o[1]||(o[1]=[r(" ")])),_:1}),e(n,{cols:"4"},{default:t(()=>[e(g,{label:"Pendapatan (Rp)",modelValue:l.amount_of_salary,"onUpdate:modelValue":a=>l.amount_of_salary=a,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"3"},{default:t(()=>o[2]||(o[2]=[r(" ")])),_:1}),e(n,{cols:"5"},{default:t(()=>[e(C,{size:"small",color:"primary",modelValue:l.active,"onUpdate:modelValue":a=>l.active=a,label:`Status: ${l.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const I=v(T,[["render",w],["__scopeId","data-v-e2f299b9"]]);export{I as default};
