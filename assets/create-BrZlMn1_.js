import{_ as T,c as j,y as t,r as f,o as w,s as a,z as x,H as C,J as n,S as _,R as s,T as b,Z as S,O as A}from"./app-Cu0JO2ZK.js";import{V as K}from"./VTextarea-wttNDCl5.js";const N={name:"human-fellow-create",methods:{getCustomerSubKind:function(d,o,u){Number.isInteger(d)&&this.$http(`human/api/customerkind/${d}/combo-customersubkind`).then(i=>{Array.isArray(i)&&i.length===0&&(o.customer_sub_kind_id=null),u.combos.customersubkinds=i})},getReferenceRegencies:function(d,o,u){Number.isInteger(d)&&(o.regency_id=null,o.district_id=null,o.village_id=null,this.$http(`human/api/ref-province/${d}/regencies`).then(i=>{u.combos.regencies=i}))},getReferenceDistricts:function(d,o,u){Number.isInteger(d)&&(o.district_id=null,o.village_id=null,this.$http(`human/api/ref-regency/${d}/districts`).then(i=>{u.combos.districts=i}))},getReferenceVillages:function(d,o,u){Number.isInteger(d)&&(o.village_id=null,this.$http(`human/api/ref-district/${d}/villages`).then(i=>{u.combos.villages=i}))}}};function I(d,o,u,i,D,p){const c=f("v-date-input"),h=f("v-currency-field"),g=f("form-create");return w(),j(g,{"with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:t(({record:m})=>[a(x,{disabled:!(m.name&&m.email&&m.duedate),icon:"move_to_inbox",tooltip:"Simpan Data",onClick:o[0]||(o[0]=r=>d.$refs.form.postFormCreate())},null,8,["disabled"])]),default:t(({combos:{bornplaces:m,genders:r,provinces:U,regencies:v,districts:y,villages:$,partners:k,faiths:R},record:l,store:V})=>[a(A,null,{default:t(()=>[a(C,{dense:""},{default:t(()=>[a(n,{cols:"12"},{default:t(()=>[a(_,{label:"Nama",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"4"},{default:t(()=>[a(c,{label:"Tgl Lahir","prepend-icon":"",modelValue:l.borndate,"onUpdate:modelValue":e=>l.borndate=e,"persistent-placeholder":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"8"},{default:t(()=>[a(s,{items:m,label:"Tempat Lahir",modelValue:l.bornplace_id,"onUpdate:modelValue":e=>l.bornplace_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"4"},{default:t(()=>[a(b,{items:r,label:"Jenis Kelamin",modelValue:l.gender_id,"onUpdate:modelValue":e=>l.gender_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"8"},{default:t(()=>[a(_,{label:"Surel (Email)",modelValue:l.email,"onUpdate:modelValue":e=>l.email=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(K,{label:"Alamat",rows:"3",modelValue:l.address,"onUpdate:modelValue":e=>l.address=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(_,{label:"Telepon",modelValue:l.phone,"onUpdate:modelValue":e=>l.phone=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(b,{items:R,label:"Agama",modelValue:l.faith_id,"onUpdate:modelValue":e=>l.faith_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:U,label:"Provinsi",modelValue:l.province_id,"onUpdate:modelValue":[e=>l.province_id=e,e=>p.getReferenceRegencies(e,l,V)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:v,label:"Kabupaten/Kotamadya",modelValue:l.regency_id,"onUpdate:modelValue":[e=>l.regency_id=e,e=>p.getReferenceDistricts(e,l,V)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:y,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":[e=>l.district_id=e,e=>p.getReferenceVillages(e,l,V)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:$,label:"Kelurahan/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":e=>l.village_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(s,{items:k,label:"Mitra",modelValue:l.partner_id,"onUpdate:modelValue":e=>l.partner_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(h,{label:"Pendapatan",modelValue:l.amount_of_salary,"onUpdate:modelValue":e=>l.amount_of_salary=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(c,{label:"Jatuh Tempo","prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.duedate,"onUpdate:modelValue":e=>l.duedate=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(S,{color:"primary",modelValue:l.active,"onUpdate:modelValue":e=>l.active=e,label:`Status: ${l.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const F=T(N,[["render",I],["__scopeId","data-v-1e4cd76f"]]);export{F as default};
