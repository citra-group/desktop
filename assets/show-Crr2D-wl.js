import{_ as b,b as U,C as o,d as n,o as y,x as a,N as v,O as t,Z as u,W as s,E as h,a4 as w,S as x}from"./App-Cj1p0Id9.js";import{V as g}from"./VTextarea-lhPdcUzR.js";const k={name:"human-unit-show"};function C(m,d,R,T,$,K){const p=n("v-date-input"),V=n("v-currency-field"),f=n("form-show");return y(),U(f,{"with-helpdesk":""},{default:o(({combos:{provinces:_,regencies:c,parents:r},record:e,store:i})=>[a(x,null,{default:o(()=>[a(v,{dense:""},{default:o(()=>[a(t,{cols:"12"},{default:o(()=>[a(u,{label:"Nama",autofocus:"",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12"},{default:o(()=>[a(u,{label:"Surel (Email)",modelValue:e.email,"onUpdate:modelValue":l=>e.email=l,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12"},{default:o(()=>[a(u,{label:"Kode Referensi",modelValue:e.reff,"onUpdate:modelValue":l=>e.reff=l,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12"},{default:o(()=>[a(g,{label:"Alamat",rows:"3",modelValue:e.address,"onUpdate:modelValue":l=>e.address=l,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12"},{default:o(()=>[a(s,{items:_,label:"Provinsi",modelValue:e.province_id,"onUpdate:modelValue":[l=>e.province_id=l,l=>m.getReferenceRegencies(l,e,i)],"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12"},{default:o(()=>[a(s,{items:c,label:"Kabupaten/Kotamadya",modelValue:e.regency_id,"onUpdate:modelValue":[l=>e.regency_id=l,l=>m.getReferenceDistricts(l,e,i)],"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"4"},{default:o(()=>[a(p,{label:"Jatuh Tempo",modelValue:e.duedate,"onUpdate:modelValue":l=>e.duedate=l,"prepend-icon":"","prepend-inner-icon":"$calendar",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"8"},{default:o(()=>[a(s,{items:r,label:"Kantor Pusat",modelValue:e.parent_id,"onUpdate:modelValue":l=>e.parent_id=l,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"4"},{default:o(()=>[a(V,{label:"Pendapatan (Rp)",modelValue:e.amount_of_salary,"onUpdate:modelValue":l=>e.amount_of_salary=l,"allow-negative":!1,class:"righted-input",readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"3"},{default:o(()=>d[0]||(d[0]=[h(" ")])),_:1}),a(t,{cols:"5"},{default:o(()=>[a(w,{modelValue:e.active,"onUpdate:modelValue":l=>e.active=l,inset:"",label:`Status: ${e.active?"Aktif":"Tidak Aktif"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),helpdesk:o(()=>d[1]||(d[1]=[])),_:1})}const j=b(k,[["render",C],["__scopeId","data-v-b8f1ea7f"]]);export{j as default};
