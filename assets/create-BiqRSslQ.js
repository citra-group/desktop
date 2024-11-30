import{_ as U,d as V,o as b,H as g,x as e,C as t,O as n,N as u,Q as y,a1 as T,Z as r,K as j,b as p,W as x,F as B,bj as N,S as D}from"./App-Cj1p0Id9.js";const C={name:"infrastructure-asset-create-land",props:["record"]};function H(m,l,a,k,s,v){const i=V("v-currency-field"),f=V("v-date-input");return b(),g(j,null,[e(u,{dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(i,{label:"Harga Dapat",modelValue:a.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=d=>a.record.receive_price=d)},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(f,{label:"Tanggal Dapat",modelValue:a.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=d=>a.record.receive_date=d)},null,8,["modelValue"])]),_:1})]),_:1}),l[10]||(l[10]=y("div",{class:"text-overline mt-6"},"Informasi Tanah",-1)),e(T,{thickness:3,class:"mt-3 mb-6"}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Atas Nama",modelValue:a.record.atas_nama,"onUpdate:modelValue":l[2]||(l[2]=d=>a.record.atas_nama=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Nop Tanah",modelValue:a.record.nop,"onUpdate:modelValue":l[3]||(l[3]=d=>a.record.nop=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(r,{label:"Luas Tanah Bumi",modelValue:a.record.luas_bumi,"onUpdate:modelValue":l[4]||(l[4]=d=>a.record.luas_bumi=d)},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(r,{label:"Luas Tanah Bangunan",modelValue:a.record.luas_bangunan,"onUpdate:modelValue":l[5]||(l[5]=d=>a.record.luas_bangunan=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(r,{label:"Njop Tanah Bumi",modelValue:a.record.njop_bumi,"onUpdate:modelValue":l[6]||(l[6]=d=>a.record.njop_bumi=d)},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(r,{label:"Njop Tanah Bangunan",modelValue:a.record.njop_bangunan,"onUpdate:modelValue":l[7]||(l[7]=d=>a.record.njop_bangunan=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Alamat Wajib Pajak",modelValue:a.record.alamat_wajib_pajak,"onUpdate:modelValue":l[8]||(l[8]=d=>a.record.alamat_wajib_pajak=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Alamat Objek Pajak",modelValue:a.record.alamat_objek_pajak,"onUpdate:modelValue":l[9]||(l[9]=d=>a.record.alamat_objek_pajak=d)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const A=U(C,[["render",H]]),L={name:"infrastructure-asset-create-electronic",props:["record"]};function w(m,l,a,k,s,v){const i=V("v-currency-field"),f=V("v-date-input"),d=V("v-number-input");return b(),g(j,null,[l[6]||(l[6]=y("div",{class:"text-overline mt-6"},"Informasi Elektronik",-1)),e(T,{thickness:3,class:"mt-3 mb-6"}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(i,{label:"Harga Dapat",modelValue:a.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=o=>a.record.receive_price=o)},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(f,{label:"Tanggal Dapat",modelValue:a.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=o=>a.record.receive_date=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(i,{label:"Harga Jual",modelValue:a.record.sale_price,"onUpdate:modelValue":l[2]||(l[2]=o=>a.record.sale_price=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(d,{label:"Jumlah Barang",modelValue:a.record.jumlah,"onUpdate:modelValue":l[3]||(l[3]=o=>a.record.jumlah=o),min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Lokasi Terakhir",modelValue:a.record.last_location,"onUpdate:modelValue":l[4]||(l[4]=o=>a.record.last_location=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Spesifikasi",modelValue:a.record.spesifikasi,"onUpdate:modelValue":l[5]||(l[5]=o=>a.record.spesifikasi=o)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const J=U(L,[["render",w]]),P={name:"infrastructure-asset-create-furniture",props:["record"]};function E(m,l,a,k,s,v){const i=V("v-currency-field"),f=V("v-date-input"),d=V("v-number-input");return b(),g(j,null,[l[6]||(l[6]=y("div",{class:"text-overline mt-6"},"Informasi Furniture",-1)),e(T,{thickness:3,class:"mt-3 mb-6"}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(i,{label:"Harga Dapat",modelValue:a.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=o=>a.record.receive_price=o)},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(f,{label:"Tanggal Dapat",modelValue:a.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=o=>a.record.receive_date=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(i,{label:"Harga Jual",modelValue:a.record.sale_price,"onUpdate:modelValue":l[2]||(l[2]=o=>a.record.sale_price=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(d,{label:"Jumlah Barang",modelValue:a.record.jumlah,"onUpdate:modelValue":l[3]||(l[3]=o=>a.record.jumlah=o),min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Lokasi Terakhir",modelValue:a.record.last_location,"onUpdate:modelValue":l[4]||(l[4]=o=>a.record.last_location=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Spesifikasi",modelValue:a.record.spesifikasi,"onUpdate:modelValue":l[5]||(l[5]=o=>a.record.spesifikasi=o)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const I=U(P,[["render",E]]),S={name:"infrastructure-asset-create-vehicle",props:["record"]};function K(m,l,a,k,s,v){const i=V("v-currency-field"),f=V("v-date-input");return b(),g(j,null,[l[8]||(l[8]=y("div",{class:"text-overline mt-6"},"Informasi Kendaraan",-1)),e(T,{thickness:3,class:"mt-3 mb-6"}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(i,{label:"Harga Dapat",modelValue:a.record.receive_price,"onUpdate:modelValue":l[0]||(l[0]=d=>a.record.receive_price=d)},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(f,{label:"Tanggal Dapat",modelValue:a.record.receive_date,"onUpdate:modelValue":l[1]||(l[1]=d=>a.record.receive_date=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(i,{label:"Harga Jual",modelValue:a.record.sale_price,"onUpdate:modelValue":l[2]||(l[2]=d=>a.record.sale_price=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(f,{label:"Tanggal Produksi",modelValue:a.record.production_date,"onUpdate:modelValue":l[3]||(l[3]=d=>a.record.production_date=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Lokasi Terakhir",modelValue:a.record.last_location,"onUpdate:modelValue":l[4]||(l[4]=d=>a.record.last_location=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Brand Kendaraan",modelValue:a.record.brand,"onUpdate:modelValue":l[5]||(l[5]=d=>a.record.brand=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Orang Yang Bertanggung Jawab",modelValue:a.record.pic,"onUpdate:modelValue":l[6]||(l[6]=d=>a.record.pic=d)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Nomor Polisi",modelValue:a.record.no_pol,"onUpdate:modelValue":l[7]||(l[7]=d=>a.record.no_pol=d)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const O=U(S,[["render",K]]),R={name:"infrastructure-asset-create",components:{Land:A,Electronic:J,Furniture:I,Vehicle:O},data(){return{currentFormType:"",formType:["Vehicle","Furniture","Electronic","Land"],unit:{}}},methods:{selectUnit:(m,l,a)=>{a.unit=l[m.slug_unit]},selectAssetsType:(m,l,a)=>{a.currentFormType=m.asset_type_key,m.status=l[m.asset_type_key][0]}}};function W(m,l,a,k,s,v){const i=V("form-create");return b(),p(i,{"with-helpdesk":""},{default:t(({combos:{type_key:f,units:d,units_slug:o,type_status_map:F},record:_,store:Q})=>[e(D,null,{default:t(()=>[e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(r,{label:"Name",modelValue:_.name,"onUpdate:modelValue":c=>_.name=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(u,{dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(x,{items:f,label:"Tipe Assets",modelValue:_.asset_type_key,"onUpdate:modelValue":[c=>_.asset_type_key=c,c=>v.selectAssetsType(_,F,this)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),m.$router.currentRoute._value.name=="infrastructure-asset-create"?(b(),p(u,{key:0,dense:""},{default:t(()=>[e(n,{cols:"6"},{default:t(()=>[e(r,{label:"Nama Unit",modelValue:s.unit.name,"onUpdate:modelValue":l[0]||(l[0]=c=>s.unit.name=c),readonly:!0},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:t(()=>[e(x,{items:o,label:"Pilih Unit",modelValue:_.slug_unit,"onUpdate:modelValue":[c=>_.slug_unit=c,c=>v.selectUnit(_,d,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):B("",!0),s.unit.name!=null&&s.currentFormType!=""?(b(),p(u,{key:1,dense:""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(x,{items:F[s.currentFormType],"return-object":!1,label:"Status Asset",modelValue:_.status,"onUpdate:modelValue":c=>_.status=c},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):B("",!0),m.$router.currentRoute._value.name!="infrastructure-asset-create"||s.unit.name!=null&&s.currentFormType!=""?(b(),p(N(s.currentFormType),{key:2,record:_},null,8,["record"])):B("",!0)]),_:2},1024)]),_:1})}const Z=U(R,[["render",W]]);export{Z as default};
