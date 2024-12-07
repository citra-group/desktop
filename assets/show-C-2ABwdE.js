import{_ as k,c as w,w as o,r as u,o as g,a as l,j,k as d,y as n,u as t,z as i,G as s,n as x}from"./app-CRJnygw4.js";import{V as K}from"./VTextarea-Bp1zCbIE.js";const T={name:"human-employee-show"};function $(C,m,A,S,B,R){const V=u("v-date-input"),p=u("v-currency-field"),_=u("form-show");return g(),w(_,{"with-helpdesk":""},{default:o(({combos:{bornplaces:f,genders:U,provinces:b,regencies:c,districts:h,villages:y,units:r,faiths:v},record:e})=>[l(x,null,{default:o(()=>[l(j,{dense:""},{default:o(()=>[l(d,{cols:"12"},{default:o(()=>[l(n,{label:"Nama",modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"4"},{default:o(()=>[l(V,{label:"Tgl Lahir","prepend-icon":"",variant:"outlined",modelValue:e.borndate,"onUpdate:modelValue":a=>e.borndate=a,"persistent-placeholder":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"8"},{default:o(()=>[l(t,{items:f,label:"Tempat Lahir",modelValue:e.bornplace_id,"onUpdate:modelValue":a=>e.bornplace_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"4"},{default:o(()=>[l(i,{items:U,label:"Jenis Kelamin",modelValue:e.gender_id,"onUpdate:modelValue":a=>e.gender_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"8"},{default:o(()=>[l(n,{label:"Surel (Email)",modelValue:e.email,"onUpdate:modelValue":a=>e.email=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:o(()=>[l(K,{label:"Alamat",rows:"3",modelValue:e.address,"onUpdate:modelValue":a=>e.address=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(n,{label:"Telepon",modelValue:e.phone,"onUpdate:modelValue":a=>e.phone=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(i,{items:v,label:"Agama",modelValue:e.faith_id,"onUpdate:modelValue":a=>e.faith_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(t,{items:b,label:"Provinsi",modelValue:e.province_id,"onUpdate:modelValue":a=>e.province_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(t,{items:c,label:"Kabupaten/Kotamadya",modelValue:e.regency_id,"onUpdate:modelValue":a=>e.regency_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(t,{items:h,label:"Kecamatan",modelValue:e.district_id,"onUpdate:modelValue":a=>e.district_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(t,{items:y,label:"Kelurahan/Desa","return-object":!1,modelValue:e.village_id,"onUpdate:modelValue":a=>e.village_id=a,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:o(()=>[l(t,{items:r,label:"Unit",modelValue:e.unit_id,"onUpdate:modelValue":a=>e.unit_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"4"},{default:o(()=>[l(p,{label:"Gaji Pokok (Rp)",modelValue:e.amount_of_salary,"onUpdate:modelValue":a=>e.amount_of_salary=a,"allow-negative":!1,class:"righted-input",readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"8"},{default:o(()=>[l(n,{label:"Kode Referensi",modelValue:e.reff,"onUpdate:modelValue":a=>e.reff=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(s,{color:"primary",modelValue:e.is_chief,"onUpdate:modelValue":a=>e.is_chief=a,label:`Kepala Unit: ${e.is_chief?"Ya":"Bukan"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),l(d,{cols:"6"},{default:o(()=>[l(s,{color:"primary",modelValue:e.active,"onUpdate:modelValue":a=>e.active=a,label:`Status: ${e.active?"Aktif":"Tidak Aktif"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),helpdesk:o(()=>m[0]||(m[0]=[])),_:1})}const N=k(T,[["render",$],["__scopeId","data-v-746811f2"]]);export{N as default};
