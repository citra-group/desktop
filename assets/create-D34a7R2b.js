import{_ as A,o as l,g as _,t as j,e as m,c,w as a,a as s,u as r,k as i,j as f,d as b,V as k,F as h,r as I,y as D,m as U,B as T,bj as R,n as N}from"./app-rj50VoVz.js";import{L as B,P as C}from"./type_periodic-CVMtjFXe.js";const w={name:"infrastructure-tax-create-asset",props:["record","data"],methods:{changeUnit:function(n,e){n.asset!=null&&n.asset.assetable_type_key!=null?n.asset={type:n.asset.assetable_type_key}:n.asset={},e.refAsset=void 0,e.refAssetType==null&&e.getRefAssetType(n,e),n.asset!=null&&n.asset.assetable_type_key!=null&&e.getRefAsset(n,e)},changeAssetType:function(n,e){e.getRefAsset(n,e)},changeAsset:function(n,e){n.asset={...n.asset,...e.refAsset.assets_slugs[n.asset.slug]}}}},P={key:0};function F(n,e,t,V,g,d){return l(),_(h,null,[t.data.refUnit==null?(l(),_("div",P,j(t.data.getRefUnit(t.record,t.data)),1)):m("",!0),t.data.refUnit!=null?(l(),c(f,{key:1,dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{"return-object":!0,items:t.data.refUnit.units,"item-title":"name",modelValue:t.record.unit,"onUpdate:modelValue":[e[0]||(e[0]=u=>t.record.unit=u),e[1]||(e[1]=u=>d.changeUnit(t.record,t.data))],label:"Untuk "+t.record.targetable_type_key+" Dari Unit"},null,8,["items","modelValue","label"])]),_:1})]),_:1})):m("",!0),t.data.refAssetType!=null?(l(),c(f,{key:2,dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{items:t.data.refAssetType,"item-title":"name","return-object":!1,modelValue:t.record.asset.assetable_type_key,"onUpdate:modelValue":[e[2]||(e[2]=u=>t.record.asset.assetable_type_key=u),e[3]||(e[3]=u=>d.changeAssetType(t.record,t.data))],label:"Pilih Jenis Asset"},null,8,["items","modelValue"])]),_:1})]),_:1})):m("",!0),t.data.refAsset!=null&&t.data.refAsset.assets!=null&&t.data.refAsset.assets.length>0?(l(),c(f,{key:3,dense:""},{default:a(()=>[s(i,{cols:"6"},{default:a(()=>[s(r,{items:t.data.refAsset.assets,"return-object":!1,readonly:!0,modelValue:t.record.asset.name,"onUpdate:modelValue":e[4]||(e[4]=u=>t.record.asset.name=u),label:"Nama Asset"},null,8,["items","modelValue"])]),_:1}),s(i,{cols:"6"},{default:a(()=>[s(r,{items:t.data.refAsset.assets_slugs_combos,"return-object":!1,modelValue:t.record.asset.slug,"onUpdate:modelValue":[e[5]||(e[5]=u=>t.record.asset.slug=u),e[6]||(e[6]=u=>d.changeAsset(t.record,t.data))],label:"Slug Asset"},null,8,["items","modelValue"])]),_:1})]),_:1})):m("",!0),t.data.refAsset!=null&&t.data.refAsset.assets!=null&&t.data.refAsset.assets.length==0?(l(),c(f,{key:4,dense:""},{default:a(()=>[s(k,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",disabled:!0},{default:a(()=>e[7]||(e[7]=[b("Tidak Ditemukan")])),_:1})]),_:1})):m("",!0)],64)}const S=A(w,[["render",F]]),H={name:"infrastructure-tax-create-document",data(){return{jenisHubungan:["Iya","Tidak"],jenis:void 0}},props:["record","data"],methods:{changeUnit:function(n,e,t){n.asset!=null&&n.asset.assetable_type_key!=null?n.asset={type:n.asset.assetable_type_key}:n.asset={},e.refAsset=void 0,e.refDocument=void 0,e.refAssetType==null&&e.getRefAssetType(n,e),n.jenis=="Iya"&&n.asset!=null&&n.asset.assetable_type_key!=null&&e.getRefAsset(n,e),n.jenis=="Tidak"&&e.getRefDocument(n,e,n.jenis=="Iya")},changeDocumentType:function(n,e,t){e.refDocument=void 0,n.document={},console.log(n.jenis,e.refAssetType),n.jenis=="Tidak"?e.getRefDocument(n,e,n.jenis=="Iya"):n.jenis=="Iya"&&(e.refAssetType==null?e.getRefAssetType(n,e):e.getRefAsset(n,e))},changeAssetType:function(n,e){e.refDocument=void 0,e.getRefAsset(n,e)},changeAsset:function(n,e,t){n.asset={...n.asset,...e.refAsset.assets_slugs[n.asset.slug]},n.document={},e.getRefDocument(n,e,n.jenis=="Iya")},changeDocument:function(n,e){n.document=e.refDocument.documents_ids[n.document.id]}}},J={key:0},L={key:2};function E(n,e,t,V,g,d){return l(),_(h,null,[t.data.refUnit==null?(l(),_("div",J,j(t.data.getRefUnit(t.record,t.data)),1)):m("",!0),t.data.refUnit!=null?(l(),c(f,{key:1,dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{"return-object":!0,items:t.data.refUnit.units,"item-title":"name",modelValue:t.record.unit,"onUpdate:modelValue":[e[0]||(e[0]=u=>t.record.unit=u),e[1]||(e[1]=u=>d.changeUnit(t.record,t.data,this))],label:"Untuk "+t.record.targetable_type_key+" Dari Unit"},null,8,["items","modelValue","label"])]),_:1})]),_:1})):m("",!0),s(f,{dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{items:g.jenisHubungan,"return-object":!1,modelValue:t.record.jenis,"onUpdate:modelValue":[e[2]||(e[2]=u=>t.record.jenis=u),e[3]||(e[3]=u=>d.changeDocumentType(t.record,t.data,this))],label:"Apakah Dokumen Terhubung Dengan Asset Dari Unit Ini?"},null,8,["items","modelValue"])]),_:1})]),_:1}),t.record.jenis=="Iya"?(l(),_("div",L,[t.data.refAssetType!=null?(l(),c(f,{key:0,dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{items:t.data.refAssetType,"item-title":"name","return-object":!1,modelValue:t.record.asset.assetable_type_key,"onUpdate:modelValue":[e[4]||(e[4]=u=>t.record.asset.assetable_type_key=u),e[5]||(e[5]=u=>d.changeAssetType(t.record,t.data,this))],label:"Pilih Jenis Asset"},null,8,["items","modelValue"])]),_:1})]),_:1})):m("",!0),t.data.refAsset!=null&&t.data.refAsset.assets!=null&&t.data.refAsset.assets.length>0?(l(),c(f,{key:1,dense:""},{default:a(()=>[s(i,{cols:"6"},{default:a(()=>[s(r,{items:t.data.refAsset.assets,"return-object":!1,readonly:!0,modelValue:t.record.asset.name,"onUpdate:modelValue":e[6]||(e[6]=u=>t.record.asset.name=u),label:"Nama Asset"},null,8,["items","modelValue"])]),_:1}),s(i,{cols:"6"},{default:a(()=>[s(r,{items:t.data.refAsset.assets_slugs_combos,"return-object":!1,modelValue:t.record.asset.slug,"onUpdate:modelValue":[e[7]||(e[7]=u=>t.record.asset.slug=u),e[8]||(e[8]=u=>d.changeAsset(t.record,t.data,this))],label:"Slug Asset"},null,8,["items","modelValue"])]),_:1})]),_:1})):m("",!0),t.data.refAsset!=null&&t.data.refAsset.assets!=null&&t.data.refAsset.assets.length<=0?(l(),c(f,{key:2,dense:""},{default:a(()=>[s(k,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",disabled:!0},{default:a(()=>e[12]||(e[12]=[b("Tidak Ditemukan Asset")])),_:1})]),_:1})):m("",!0)])):m("",!0),t.data.refDocument!=null&&t.data.refDocument.documents!=null&&t.data.refDocument.documents.length>0?(l(),c(f,{key:3,dense:""},{default:a(()=>[s(i,{cols:"6"},{default:a(()=>[s(r,{"return-object":!1,readonly:!0,modelValue:t.record.document.name,"onUpdate:modelValue":e[9]||(e[9]=u=>t.record.document.name=u),label:"Nama Document"},null,8,["modelValue"])]),_:1}),s(i,{cols:"6"},{default:a(()=>[s(r,{items:t.data.refDocument.documents_ids_combos,"return-object":!1,modelValue:t.record.document.id,"onUpdate:modelValue":[e[10]||(e[10]=u=>t.record.document.id=u),e[11]||(e[11]=u=>d.changeDocument(t.record,t.data))],label:"Id Document"},null,8,["items","modelValue"])]),_:1})]),_:1})):m("",!0),t.data.refDocument!=null&&t.data.refDocument.documents!=null&&t.data.refDocument.documents.length<=0?(l(),c(f,{key:4,dense:""},{default:a(()=>[s(k,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",disabled:!0},{default:a(()=>e[13]||(e[13]=[b("Tidak Ditemukan Dokumen")])),_:1})]),_:1})):m("",!0)],64)}const q=A(H,[["render",E]]),z={name:"infrastructure-record-create",components:{Asset:S,Document:q,Log:B,Periodic:C},data(){return{refUnit:void 0,refAssetType:void 0,refAsset:void 0,refDocument:void 0}},methods:{checkRoute:function(n=""){return this.$router.currentRoute._value.name==n},changeTargetType:function(n,e){e.refAsset=void 0,e.refDocument=void 0,n.asset!=null?(n.asset={assetable_type_key:n.asset.assetable_type_key},e.getRefAsset(n,e)):n.asset={},n.document={}},getRefUnit:function(n,e){e.refAssetType==null&&(e.refUnit={},this.$http("infrastructure/api/ref-unit/combos").then(t=>{e.refUnit=t}))},getRefAssetType:function(n,e){e.refAssetType==null&&(e.refAssetType=[],this.$http("infrastructure/api/ref-asset/type").then(t=>{e.refAssetType=t}))},getRefAsset:function(n,e){n.unit==null||n.asset.assetable_type_key==null||(e.refAsset=[],this.$http(`infrastructure/api/ref-asset/${n.unit.id}/${n.asset.assetable_type_key}/asset`).then(t=>{e.refAsset=t}))},getRefDocument:function(n,e,t){t!=null&&(t&&e.getRefDocumentAsset(n,e),t||e.getRefDocummentUnit(n,e))},getRefDocummentUnit:function(n,e){this.$http(`infrastructure/api/ref-document/combos/unit/${n.unit.id}`).then(t=>{e.refDocument=t})},getRefDocumentAsset:function(n,e){this.$http(`infrastructure/api/ref-document/combos/unit/${n.unit.id}/asset/${n.asset.id}`).then(t=>{e.refDocument=t})}}},G={key:0};function K(n,e,t,V,g,d){const u=I("form-create");return l(),c(u,{"with-helpdesk":""},{default:a(({combos:{morph_record:M,morph_record_keys:v,morph_target:O,morph_target_keys:x},record:o})=>[s(N,null,{default:a(()=>[s(f,{dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(D,{label:"Name",modelValue:o.name,"onUpdate:modelValue":y=>o.name=y},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),s(f,{dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(D,{label:"Deskripsi",modelValue:o.description,"onUpdate:modelValue":y=>o.description=y},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e[1]||(e[1]=U("div",{class:"text-overline mt-6"},"Tipe Record",-1)),s(T,{thickness:3,class:"mt-3 mb-6"}),s(f,{dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{items:v,label:"Tipe Record",modelValue:o.recordable_type_key,"onUpdate:modelValue":y=>o.recordable_type_key=y,"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(l(),c(R(o.recordable_type_key),{record:o,data:this},null,8,["record"])),d.checkRoute("infrastructure-tax-create")||d.checkRoute("infrastructure-maintenance-create")||d.checkRoute("infrastructure-deadline-create")||d.checkRoute("infrastructure-record-create")?(l(),_("div",G,[e[0]||(e[0]=U("div",{class:"text-overline mt-6"},"Tujuan Record",-1)),s(T,{thickness:3,class:"mt-3 mb-6"}),s(f,{dense:""},{default:a(()=>[s(i,{cols:"12"},{default:a(()=>[s(r,{items:x,"return-object":!1,label:"Record Untuk",modelValue:o.targetable_type_key,"onUpdate:modelValue":[y=>o.targetable_type_key=y,y=>d.changeTargetType(o,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(l(),c(R(o.targetable_type_key),{record:o,data:this},null,8,["record"]))])):m("",!0)]),_:2},1024)]),_:1})}const X=A(z,[["render",K]]);export{X as default};