import{_ as I,c as s,w as l,r as b,o as d,V,e as r,a as t,m as h,t as v,K as U,n as w,j as k,k as u,y as $,B as S,H as M,b as B,d as p,I as E,L as R,J as F}from"./app-CRJnygw4.js";import{V as x}from"./VTextarea-Bp1zCbIE.js";import{V as N}from"./VBanner-Cr0NnwTc.js";import{V as A}from"./VFileInput-DKReds45.js";import{V as D,a as O}from"./VCard-DCO_UCpl.js";import{V as L}from"./VCardTitle-BTvbf7ei.js";import"./VCardItem-BKmyaLPT.js";const j={name:"coperative-withdrawal-show",computed:{lastAvailableDate(){var n=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),this.currentDate.getDate()+1);return n.toISOString().slice(0,10)}},data:()=>({model:!1,currentDate:new Date,dialogMessage:!1,dialogMode:null,transferDate:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{dateFormated(n){if(!n)return null;const[e,y,C]=n.split("-");return`${C}-${y}-${e}`},openDialogMessage(n){this.dialogMessage=!0,this.dialogMode=n},approvedCurrentSubmission(n,e){e.$http(`coperative/api/withdrawal/${n.id}/approved`,{method:"PUT",params:n}).then(()=>{this.$router.push({name:"coperative-withdrawal"})})},completedCurrentSubmission(n,e){if(!n.transferdate){this.$refs.form.showErrorMessage("tanggal transfer di perlukan!");return}if(!n.transfer_path&&!n.image_path){this.$refs.form.showErrorMessage("bukti transfer di perlukan!");return}e.$http(`coperative/api/withdrawal/${n.id}/completed`,{method:"POST",params:n,contentType:"multipart/form-data"}).then(()=>{this.$router.push({name:"coperative-withdrawal"})})},deniedCurrentSubmission(n,e){e.$http(`coperative/api/withdrawal/${n.id}/denied`,{method:"PUT",params:n}).then(()=>{this.$router.push({name:"coperative-withdrawal"})})},printedCurrentSubmission(n,e){e.$http(`coperative/api/withdrawal/${n.id}/printed`,{method:"PUT",params:n}).then(()=>{this.$router.push({name:"coperative-withdrawal"})})},repairedCurrentSubmission(n,e){e.$http(`coperative/api/withdrawal/${n.id}/repaired`,{method:"PUT",params:n}).then(()=>{this.$router.push({name:"coperative-withdrawal"})})},verifiedCurrentSubmission(n,e){e.$http(`coperative/api/withdrawal/${n.id}/verified`,{method:"PUT",params:n}).then(()=>{this.$router.push({name:"coperative-withdrawal"})})}}},H={class:"text-caption pr-1 pl-2"},K={class:"d-flex justify-center"},z={class:"flex-grow-3"},J={class:"mr-2 ml-2"},Y={class:"text-right flex-grow-1"},q={class:"text-right flex-grow-3"};function G(n,e,y,C,Q,m){const g=b("v-currency-field"),T=b("v-date-input"),P=b("form-show");return d(),s(P,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{toolbar:l(({record:f,store:c})=>[f.status==="COMPLETED"&&f.transfermode===1?(d(),s(V,{key:0,icon:"print",tooltip:"Cetak Tanda Terima",onClick:a=>m.printedCurrentSubmission(f,c)},null,8,["onClick"])):r("",!0)]),default:l(({statuses:{isVerificator:f,isApproval:c},record:a,store:_,theme:i})=>[t(U,{color:i,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:l(()=>[e[4]||(e[4]=h("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),h("div",H,v(a.status),1)]),_:2},1032,["color"]),t(U,{class:"transparent"},{default:l(()=>[t(w,null,{default:l(()=>[t(k,{dense:""},{default:l(()=>[t(u,{cols:"12"},{default:l(()=>[t($,{label:"Nomor",modelValue:a.slug,"onUpdate:modelValue":o=>a.slug=o,"hide-details":"",variant:"outlined",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(u,{cols:"12"},{default:l(()=>[t($,{label:"Nama",modelValue:a.name,"onUpdate:modelValue":o=>a.name=o,variant:"outlined",color:i,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(S),t(w,null,{default:l(()=>[t(k,{dense:""},{default:l(()=>[t(u,{cols:"12"},{default:l(()=>[t(g,{label:"Tabungan",prefix:"Rp",modelValue:a.amount_of_saving,"onUpdate:modelValue":o=>a.amount_of_saving=o,variant:"outlined",color:i,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(u,{cols:"12"},{default:l(()=>[t(g,{label:"Penarikan",prefix:"Rp",modelValue:a.amount_of_withdrawal,"onUpdate:modelValue":o=>a.amount_of_withdrawal=o,variant:"outlined",color:i,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(u,{cols:"12"},{default:l(()=>[t(g,{label:"Total",prefix:"Rp",modelValue:a.amount_of_deposit,"onUpdate:modelValue":o=>a.amount_of_deposit=o,variant:"outlined",color:i,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(u,{cols:"12"},{default:l(()=>[t(g,{prefix:"Rp",label:"Nominal Penarikan",modelValue:a.total,"onUpdate:modelValue":o=>a.total=o,variant:"outlined",color:i,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(u,{cols:"12"},{default:l(()=>[t(x,{label:"Keterangan",rows:"3",modelValue:a.description,"onUpdate:modelValue":o=>a.description=o,variant:"outlined",color:i,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a.status==="APPROVED"?(d(),s(u,{key:0,cols:"12"},{default:l(()=>[t(N,{lines:"tow",stacked:!1},{default:l(()=>[t(M,{class:"mr-2",line:"three",color:"deep-purple accent-4",size:"40"},{default:l(()=>[t(B,{color:"white"},{default:l(()=>e[5]||(e[5]=[p("privacy_tip")])),_:1})]),_:1}),p(" Pembayaran dapat dilakukan dengan cara transfer ke. Bank "+v(a.bank_name)+" atas nama: "+v(a.bank_account_name)+" dengan nomor rekening "+v(a.bank_account_number)+" Setelah transfer dilakukan, silahkan unggah bukti bayar dibawah ini. ",1)]),_:2},1024)]),_:2},1024)):r("",!0)]),_:2},1024),a.status==="APPROVED"?(d(),s(k,{key:0},{default:l(()=>[a.transfer_path?(d(),s(u,{key:0,cols:"12"},{default:l(()=>[t(E,{src:a.transfer_path},null,8,["src"])]),_:2},1024)):r("",!0),a.transfer_path?r("",!0):(d(),s(u,{key:1,cols:"12"},{default:l(()=>[h("div",K,[t(T,{modelValue:a.transferdate,"onUpdate:modelValue":o=>a.transferdate=o,label:"Tanggal Transfer","prepend-icon":"","prepend-inner-icon":"$calendar"},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)),a.transfer_path?r("",!0):(d(),s(u,{key:2,cols:"12"},{default:l(()=>[t(A,{accept:"image/*",label:"File input","prepend-icon":"","prepend-inner-icon":"attach_file",modelValue:a.image_path,"onUpdate:modelValue":o=>a.image_path=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))]),_:2},1024)):r("",!0)]),_:2},1024),t(w,{class:"d-flex mb-4 justify-center"},{default:l(()=>[h("div",z,[f&&["PUBLISH","VERIFIED"].includes(a.status)?(d(),s(V,{key:0,variant:"tonal",color:i,onClick:e[0]||(e[0]=o=>m.openDialogMessage("denied"))},{default:l(()=>e[6]||(e[6]=[p("Tolak")])),_:2},1032,["color"])):r("",!0)]),h("div",J,[f&&a.status==="PUBLISH"?(d(),s(V,{key:0,variant:"tonal",color:i,onClick:e[1]||(e[1]=o=>m.openDialogMessage("repaired"))},{default:l(()=>e[7]||(e[7]=[p("Perbaiki")])),_:2},1032,["color"])):r("",!0)]),h("div",null,[f&&a.status==="PUBLISH"?(d(),s(V,{key:0,variant:"tonal",color:i,onClick:o=>m.verifiedCurrentSubmission(a,_)},{default:l(()=>e[8]||(e[8]=[p("Verifikasi")])),_:2},1032,["color","onClick"])):r("",!0)]),h("div",Y,[c&&a.status==="VERIFIED"?(d(),s(V,{key:0,variant:"tonal",color:i,onClick:o=>m.approvedCurrentSubmission(a,_)},{default:l(()=>e[9]||(e[9]=[p("Setujui")])),_:2},1032,["color","onClick"])):r("",!0)]),h("div",q,[f&&a.status==="APPROVED"?(d(),s(V,{key:0,variant:"tonal",color:i,onClick:o=>m.completedCurrentSubmission(a,_)},{default:l(()=>e[10]||(e[10]=[p("Selesai")])),_:2},1032,["color","onClick"])):r("",!0)])]),_:2},1024),t(R,{modelValue:n.dialogMessage,"onUpdate:modelValue":e[3]||(e[3]=o=>n.dialogMessage=o),width:"500"},{default:l(()=>[t(D,null,{default:l(()=>[t(L,{class:"text-h5 grey lighten-2"},{default:l(()=>e[11]||(e[11]=[p("Keterangan")])),_:1}),t(w,null,{default:l(()=>[t(k,null,{default:l(()=>[t(u,{cols:"12"},{default:l(()=>[t(x,{modelValue:a.message,"onUpdate:modelValue":o=>a.message=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(S),t(O,null,{default:l(()=>[t(F),t(V,{color:"grey",text:"",onClick:e[2]||(e[2]=o=>n.dialogMessage=!1)},{default:l(()=>e[12]||(e[12]=[p(" Batal ")])),_:1}),t(V,{color:"primary",text:"",onClick:o=>n.dialogMode==="denied"?m.deniedCurrentSubmission(a,_):m.repairedCurrentSubmission(a,_)},{default:l(()=>e[13]||(e[13]=[p("Kirim")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024),t(D,{class:"position-fixed bottom-0"})]),_:1})}const ne=I(j,[["render",G]]);export{ne as default};
