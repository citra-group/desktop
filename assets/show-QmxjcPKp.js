import{_ as v,r as i,o as b,D as k,s as e,y as a,J as o,H as n,L as y,W as U,S as s,F as g,c as x,R as p,bj as w,O as B,A as j,z as T}from"./app-Cu0JO2ZK.js";const D={name:"infrastructure-asset-show-land",props:["record"]};function L(f,l,d,c,V,_){const m=i("v-currency-field"),u=i("v-date-input");return b(),k(g,null,[e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(m,{label:"Harga Dapat",modelValue:d.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=t=>d.record.receive_price=t),readonly:!0},null,8,["modelValue"])]),_:1}),e(o,{cols:"6"},{default:a(()=>[e(u,{label:"Tanggal Dapat",modelValue:d.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=t=>d.record.receive_date=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),l[10]||(l[10]=y("div",{class:"text-overline mt-6"},"Informasi Tanah",-1)),e(U,{thickness:3,class:"mt-3 mb-6"}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Atas Nama",modelValue:d.record.atas_nama,"onUpdate:modelValue":l[2]||(l[2]=t=>d.record.atas_nama=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Nop Tanah",modelValue:d.record.nop,"onUpdate:modelValue":l[3]||(l[3]=t=>d.record.nop=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(s,{label:"Luas Tanah Bumi",modelValue:d.record.luas_bumi,"onUpdate:modelValue":l[4]||(l[4]=t=>d.record.luas_bumi=t),readonly:!0},null,8,["modelValue"])]),_:1}),e(o,{cols:"6"},{default:a(()=>[e(s,{label:"Luas Tanah Bangunan",modelValue:d.record.luas_bangunan,"onUpdate:modelValue":l[5]||(l[5]=t=>d.record.luas_bangunan=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(s,{label:"Njop Tanah Bumi",modelValue:d.record.njop_bumi,"onUpdate:modelValue":l[6]||(l[6]=t=>d.record.njop_bumi=t),readonly:!0},null,8,["modelValue"])]),_:1}),e(o,{cols:"6"},{default:a(()=>[e(s,{label:"Njop Tanah Bangunan",modelValue:d.record.njop_bangunan,"onUpdate:modelValue":l[7]||(l[7]=t=>d.record.njop_bangunan=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Alamat Wajib Pajak",modelValue:d.record.alamat_wajib_pajak,"onUpdate:modelValue":l[8]||(l[8]=t=>d.record.alamat_wajib_pajak=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Alamat Objek Pajak",modelValue:d.record.alamat_objek_pajak,"onUpdate:modelValue":l[9]||(l[9]=t=>d.record.alamat_objek_pajak=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})],64)}const N=v(D,[["render",L]]),C={name:"infrastructure-asset-show-electronic",props:["record"]};function A(f,l,d,c,V,_){const m=i("v-currency-field"),u=i("v-date-input"),t=i("v-number-input");return b(),k(g,null,[l[6]||(l[6]=y("div",{class:"text-overline mt-6"},"Informasi Elektronik",-1)),e(U,{thickness:3,class:"mt-3 mb-6"}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(m,{label:"Harga Dapat",modelValue:d.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=r=>d.record.receive_price=r),readonly:!0},null,8,["modelValue"])]),_:1}),e(o,{cols:"6"},{default:a(()=>[e(u,{label:"Tanggal Dapat",modelValue:d.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=r=>d.record.receive_date=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(m,{label:"Harga Jual",modelValue:d.record.sale_price,"onUpdate:modelValue":l[2]||(l[2]=r=>d.record.sale_price=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(t,{label:"Jumlah Barang",modelValue:d.record.jumlah,"onUpdate:modelValue":l[3]||(l[3]=r=>d.record.jumlah=r),readonly:!0,min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Lokasi Terakhir",modelValue:d.record.last_location,"onUpdate:modelValue":l[4]||(l[4]=r=>d.record.last_location=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Spesifikasi",modelValue:d.record.spesifikasi,"onUpdate:modelValue":l[5]||(l[5]=r=>d.record.spesifikasi=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})],64)}const H=v(C,[["render",A]]),P={name:"infrastructure-asset-show-furniture",props:["record"]};function J(f,l,d,c,V,_){const m=i("v-currency-field"),u=i("v-date-input"),t=i("v-number-input");return b(),k(g,null,[l[6]||(l[6]=y("div",{class:"text-overline mt-6"},"Informasi Furniture",-1)),e(U,{thickness:3,class:"mt-3 mb-6"}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(m,{label:"Harga Dapat",modelValue:d.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=r=>d.record.receive_price=r),readonly:!0},null,8,["modelValue"])]),_:1}),e(o,{cols:"6"},{default:a(()=>[e(u,{label:"Tanggal Dapat",modelValue:d.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=r=>d.record.receive_date=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(m,{label:"Harga Jual",modelValue:d.record.sale_price,"onUpdate:modelValue":l[2]||(l[2]=r=>d.record.sale_price=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(t,{label:"Jumlah Barang",modelValue:d.record.jumlah,"onUpdate:modelValue":l[3]||(l[3]=r=>d.record.jumlah=r),readonly:!0,min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Lokasi Terakhir",modelValue:d.record.last_location,"onUpdate:modelValue":l[4]||(l[4]=r=>d.record.last_location=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Spesifikasi",modelValue:d.record.spesifikasi,"onUpdate:modelValue":l[5]||(l[5]=r=>d.record.spesifikasi=r),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})],64)}const S=v(P,[["render",J]]),F={name:"infrastructure-asset-show-vehicle",props:["record"]};function I(f,l,d,c,V,_){const m=i("v-currency-field"),u=i("v-date-input");return b(),k(g,null,[l[8]||(l[8]=y("div",{class:"text-overline mt-6"},"Informasi Kendaraan",-1)),e(U,{thickness:3,class:"mt-3 mb-6"}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(m,{label:"Harga Dapat",modelValue:d.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=t=>d.record.receive_price=t),readonly:!0},null,8,["modelValue"])]),_:1}),e(o,{cols:"6"},{default:a(()=>[e(u,{label:"Tanggal Dapat",modelValue:d.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=t=>d.record.receive_date=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(m,{label:"Harga Jual",modelValue:d.record.sale_price,"onUpdate:modelValue":l[2]||(l[2]=t=>d.record.sale_price=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(u,{label:"Tanggal Produksi",modelValue:d.record.production_date,"onUpdate:modelValue":l[3]||(l[3]=t=>d.record.production_date=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Lokasi Terakhir",modelValue:d.record.last_location,"onUpdate:modelValue":l[4]||(l[4]=t=>d.record.last_location=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Brand Kendaraan",modelValue:d.record.brand,"onUpdate:modelValue":l[5]||(l[5]=t=>d.record.brand=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Orang Yang Bertanggung Jawab",modelValue:d.record.pic,"onUpdate:modelValue":l[6]||(l[6]=t=>d.record.pic=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Nomor Polisi",modelValue:d.record.no_pol,"onUpdate:modelValue":l[7]||(l[7]=t=>d.record.no_pol=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})],64)}const E=v(F,[["render",I]]),O={name:"infrastructure-asset-show",components:{Land:N,Electronic:H,Furniture:S,Vehicle:E},methods:{redirectPage:function(f=""){const d=this.$router.currentRoute._value.name;let c=["show","create","delete","update"],V=d;for(let m of c)V=V.replaceAll(m,"");let _=V+f;return this.$router.push({name:_})}}};function R(f,l,d,c,V,_){const m=i("form-show");return b(),x(m,{"with-helpdesk":""},{default:a(({record:u})=>[e(B,null,{default:a(()=>[e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Name",modelValue:u.name,"onUpdate:modelValue":t=>u.name=t,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(s,{label:"Slug",modelValue:u.slug,"onUpdate:modelValue":t=>u.slug=t,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(p,{items:f.type_key,label:"Tipe Assets",modelValue:u.asset_type_key,"onUpdate:modelValue":t=>u.asset_type_key=t,"return-object":!1,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(n,{dense:""},{default:a(()=>[e(o,{cols:"6"},{default:a(()=>[e(s,{label:"Nama Unit",modelValue:u.unit_name,"onUpdate:modelValue":t=>u.unit_name=t,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:a(()=>[e(p,{label:"Slug Unit",modelValue:u.slug_unit,"onUpdate:modelValue":t=>u.slug_unit=t,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(n,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(p,{"return-object":!1,readonly:!0,label:"Status Asset",modelValue:u.status,"onUpdate:modelValue":t=>u.status=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(b(),x(w(u.asset_type_key),{record:u},null,8,["record"]))]),_:2},1024)]),info:a(({theme:u})=>[l[6]||(l[6]=y("div",{class:"text-overline mt-4"},"Aksi",-1)),e(U),e(T,{class:"mt-3",color:u,block:"",variant:"flat",onClick:l[0]||(l[0]=t=>_.redirectPage("document"))},{default:a(()=>l[3]||(l[3]=[j("List Documents")])),_:2},1032,["color"]),e(T,{class:"mt-3",color:u,block:"",variant:"flat",onClick:l[1]||(l[1]=t=>_.redirectPage("maintenance"))},{default:a(()=>l[4]||(l[4]=[j("List Maintenance")])),_:2},1032,["color"]),e(T,{class:"mt-3",color:u,block:"",variant:"flat",onClick:l[2]||(l[2]=t=>_.redirectPage("tax"))},{default:a(()=>l[5]||(l[5]=[j("List Tax")])),_:2},1032,["color"])]),_:1})}const W=v(O,[["render",R]]);export{W as default};
