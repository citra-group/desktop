import{_ as U,r as b,o as y,c as h,y as o,s as e,H as r,J as t,S as d,R as u,T as n,Z as k,N as g}from"./app-oi9O8E9X.js";import{V as w}from"./VTextarea-C8o5pum4.js";const x={name:"human-customer-show"};function v(C,T,j,K,S,$){const m=b("form-show");return y(),h(m,{"with-helpdesk":""},{default:o(({combos:{provinces:s,regencies:V,districts:i,villages:_,customerkinds:p,customersubkinds:c,customertypes:f},record:l})=>[e(g,null,{default:o(()=>[e(r,{dense:""},{default:o(()=>[e(t,{cols:"12"},{default:o(()=>[e(d,{label:"Name",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(d,{label:"Kontak",modelValue:l.contact,"onUpdate:modelValue":a=>l.contact=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(d,{label:"Telp/HP",modelValue:l.phone,"onUpdate:modelValue":a=>l.phone=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(d,{label:"Email",modelValue:l.email,"onUpdate:modelValue":a=>l.email=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(w,{label:"Alamat",modelValue:l.address,"onUpdate:modelValue":a=>l.address=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{items:s,label:"Propinsi",modelValue:l.province_id,"onUpdate:modelValue":a=>l.province_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{items:V,label:"Kota/Kab",modelValue:l.regency_id,"onUpdate:modelValue":a=>l.regency_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{items:i,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":a=>l.district_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{items:_,label:"Kel/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":a=>l.village_id=a,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(n,{items:p,"return-object":!1,label:"Category",modelValue:l.customer_kind_id,"onUpdate:modelValue":a=>l.customer_kind_id=a,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(n,{items:c,label:"Sub Category",modelValue:l.customer_sub_kind_id,"onUpdate:modelValue":a=>l.customer_sub_kind_id=a,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(n,{items:f,label:"Tipe Pelanggan",modelValue:l.customer_type_id,"onUpdate:modelValue":a=>l.customer_type_id=a,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(k,{modelValue:l.active,"onUpdate:modelValue":a=>l.active=a,label:"Status Aktif",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),helpdesk:o(()=>[]),_:1})}const A=U(x,[["render",v]]);export{A as default};