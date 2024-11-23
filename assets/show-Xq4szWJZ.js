import{_ as A,r as U,o as r,c as p,y as a,z as f,s as l,A as u,V as g,B as c,L as t,Q as i,a2 as j,H as h,J as d,N as m,D as y,a4 as w,F as b,E as M,T as F,S as C,a1 as P,W as $,a3 as D,K as x}from"./app-oi9O8E9X.js";import{a as T}from"./VCardItem-BHCAKo2z.js";import{V as G,a as z}from"./VSlider-BX9Qpudk.js";import{V as H,a as B}from"./VRadioGroup-6tFFIrDM.js";import{V as K}from"./VFileInput-CCIPIoFL.js";import{V as k,a as I}from"./VCard-DgMtPtpx.js";import{V as O}from"./VCardTitle-hoq8eCTj.js";import{V as J}from"./VTextarea-C8o5pum4.js";const W={name:"coperative-loan-show",data:()=>({sheet:!1,toggle:null,dialogEdit:!1,dialogMessage:!1,menuTransferDate:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{calculateLoanGrandTotal(e){e.total_principal=Math.round(e.total_principal*100)/100,e.percent_approval=Math.round(e.approval_interest/e.tenor*100)/100,e.total_interest=Math.round(e.total_principal*(e.approval_interest/100)*100)/100,e.monthly_interest=Math.round((e.total_principal/e.tenor+e.total_interest/e.tenor)*100)/100,e.grandtotal=e.total_principal+e.admfee+e.total_interest},dateFormated(e){if(!e)return null;const[s,S,E]=e.split("-");return`${E}-${S}-${s}`},openDialogMessage(){this.dialogMessage=!0},rejectedCurrentLoan(e,s){if(!e.rejected_message){s.$snackbar({text:"Berikan alasan penolakan pinjaman."});return}s.$http(`coperative/api/loan/${e.id}/rejected`,{method:"POST",params:e}).then(()=>{s.snackbar.color="green",s.snackbar.text="Berhasil ditolak",s.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},verifiedCurrentLoan(e,s){s.$http(`coperative/api/loan/${e.id}/verified`,{method:"POST",params:e}).then(()=>{s.snackbar.color="green",s.snackbar.text="Berhasil diverifikasi",s.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},approveCurrentLoan(e,s){s.$http(`coperative/api/loan/${e.id}/approve`,{method:"POST",params:e}).then(()=>{this.$router.push({name:"coperative-loan"})})},updateLoanPayDate(e,s){s.$http(`coperative/api/loan/${e.id}/paydate`,{method:"POST",params:e}).then(()=>{s.snackbar.color="green",s.snackbar.text="Berhasil",s.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},updateStatusOfLoan(e,s){s.$http(`coperative/api/loan/${e.id}/close-by-bank`,{method:"POST",params:e}).then(()=>{s.snackbar.color="green",s.snackbar.text="Berhasil",s.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},downloadReceiptOfMoney(e,s){s.$http(`coperative/api/loan/${e.id}/download-receipt`,{method:"POST",params:e}).then(()=>{this.$router.push({name:"coperative-loan"})})}}},Y=t("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1),Q={class:"text-caption pr-1 pl-2"},q={class:"text-h5"},X={class:"text-h5"},Z=t("small",null,"Tenor:",-1),ll=t("small",null,"Status:",-1),al={class:"d-flex"},tl=t("small",null,"Jatuh Tempo",-1),el=t("small",null,"Pokok",-1),nl=t("small",null,"Bunga",-1),ol=t("small",null,"Total",-1),sl={class:"d-flex align-center"},ul=t("small",null,"Detail Pinjaman",-1),il={class:"text-h6"},dl={class:"px-4 py-2 d-flex justify-end"},rl=t("div",{class:"px-4 py-2 align-center"},null,-1),ml={class:"text-right"},_l=t("br",null,null,-1),fl=t("br",null,null,-1),pl=t("div",null,[t("small",null,"Angsuran / Bulan")],-1),cl={class:"text-h5"},hl=t("small",null,"/ Bulan",-1),Vl=t("td",null," Total Pokok Pinjaman ",-1),vl=t("td",null,":",-1),kl=t("td",null," ",-1),gl=t("td",null,"Total Bunga [%]",-1),yl=t("td",null,":",-1),bl={key:0},Cl={key:1},Pl=t("td",null,"Total Bunga [Rp]",-1),$l=t("td",null,":",-1),Tl=t("td",null," ",-1),Bl=t("td",null,"Admin Fee",-1),Sl=t("td",null,":",-1),El=t("td",null," ",-1),Ul=t("td",null,"Grand Total",-1),jl=t("td",null,":",-1),Dl=t("td",null," ",-1),xl=t("small",null,"Pinjaman Berjalan",-1),Il={class:"text-h5"},Ol=t("td",null,"Maximal Pinjaman",-1),Ll=t("td",null,":",-1),Nl=t("td",null,"Limit Pinjaman",-1),Rl=t("td",null,":",-1),Al=t("td",null,"Total Pinjaman",-1),wl=t("td",null,":",-1),Ml=t("td",null,"Sisa Pinjaman",-1),Fl=t("td",null,":",-1);function Gl(e,s,S,E,zl,V){const L=U("v-date-input"),N=U("form-show");return r(),p(N,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{toolbar:a(({record:n,store:v})=>[n.status==="ONGOING"?(r(),p(f,{key:0,class:"ma-2",icon:"",tooltip:"Cetak Kuitansi",onClick:_=>V.downloadReceiptOfMoney(n,v)},{default:a(()=>[l(g,null,{default:a(()=>[u("print")]),_:1})]),_:2},1032,["onClick"])):c("",!0)]),default:a(({record:n,store:v,theme:_})=>[l(j,{color:_,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:a(()=>[Y,t("div",Q,i(n.status),1)]),_:2},1032,["color"]),l(m,null,{default:a(()=>[l(h,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[t("div",q,[u(" Nominal Pinjaman: "),t("div",null,i(e.formatter.format(n.total_principal)),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024),l(T,{class:"overline"},{default:a(()=>[u("Tenor")]),_:1}),l(m,{class:"pt-0"},{default:a(()=>[l(h,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[t("div",X,i(n.tenor)+"x",1)]),_:2},1024),n.status==="VERIFIED"?(r(),p(d,{key:0,cols:"12"},{default:a(()=>[l(G,{max:n.loan_tenor_maximal,min:n.loan_tenor_minimal,step:1,modelValue:n.tenor,"onUpdate:modelValue":o=>n.tenor=o,onChange:o=>V.calculateLoanGrandTotal(n,v),readonly:"","hide-details":""},null,8,["max","min","modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)):c("",!0)]),_:2},1024)]),_:2},1024),["ONGOING","COMPLETED"].includes(n.status)?(r(),y(b,{key:0},[l(m,null,{default:a(()=>[l(w,{class:"overline"},{default:a(()=>[u("Detail Pinjaman")]),_:1})]),_:1}),(r(!0),y(b,null,M(n.details,(o,R)=>(r(),p(k,{rounded:"lg",class:"mb-4 mx-2",key:R,flat:"",border:""},{default:a(()=>[l(m,{class:"d-flex pb-0"},{default:a(()=>[l(d,{cols:"6"},{default:a(()=>[u(i(o.slug),1)]),_:2},1024),l(d,null,{default:a(()=>[Z,t("small",null,i(o.tenor)+"/"+i(o.tenor_total),1)]),_:2},1024),l(d,null,{default:a(()=>[ll,l(g,{color:o.paid?"green":"grey"},{default:a(()=>[u(i(o.paid?"check_circle":"radio_button_unchecked"),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024),l(m,{class:"bg-grey-lighten-5"},{default:a(()=>[t("div",al,[l(d,null,{default:a(()=>[tl,t("div",null,[t("small",null,i(o.duedate),1)])]),_:2},1024),l(d,null,{default:a(()=>[el,t("div",null,i(e.formatter.format(o.principal)),1)]),_:2},1024),l(d,null,{default:a(()=>[nl,t("div",null,i(e.formatter.format(o.interest)),1)]),_:2},1024),l(d,null,{default:a(()=>[ol,t("div",null,[t("small",null,i(e.formatter.format(o.grandtotal)),1)])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))],64)):(r(),y(b,{key:1},[l(T,{class:"overline"},{default:a(()=>[u("Pinjaman")]),_:1}),l(T,{class:"overline"},{default:a(()=>[u("metode pembayaran")]),_:1}),l(m,{class:"pt-0"},{default:a(()=>[l(h,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(H,{modelValue:n.transfermode,"onUpdate:modelValue":o=>n.transfermode=o,disabled:n.status!=="APPROVED","hide-details":"",readonly:"",row:""},{default:a(()=>[l(B,{label:"CASH",value:1}),l(B,{label:"BANK",value:2}),l(B,{label:"PAYMENT-GATEWAY",value:3})]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),n.transfermode===2?(r(),y(b,{key:0},[l(d,{cols:"4"},{default:a(()=>[l(F,{variant:"outlined",items:["BRI","BCA","BNI","BTPN","MANDIRI"],label:"Bank",color:_,modelValue:n.bank_type,"onUpdate:modelValue":o=>n.bank_type=o,readonly:"","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"8"},{default:a(()=>[l(C,{variant:"outlined",color:_,label:"Atas Nama",modelValue:n.bank_account_name,"onUpdate:modelValue":o=>n.bank_account_name=o,readonly:"","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:a(()=>[l(C,{variant:"outlined",color:_,label:"Nomor Rekening",modelValue:n.bank_account_number,"onUpdate:modelValue":o=>n.bank_account_number=o,readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)],64)):c("",!0)]),_:2},1024)]),_:2},1024),["APPROVED","ONGOING"].includes(n.status)?(r(),p(j,{key:0},{default:a(()=>[l(m,null,{default:a(()=>[l(P),n.status==="APPROVED"&&n.transfermode===1?(r(),p(f,{key:0,block:"",color:_,onClick:o=>V.updateLoanPayDate(n,v)},{default:a(()=>[l(g,null,{default:a(()=>[u("save")]),_:1}),u(" Pay-Cash")]),_:2},1032,["color","onClick"])):c("",!0)]),_:2},1024)]),_:2},1024)):c("",!0),l(m,{class:"pt-0"},{default:a(()=>[n.status==="APPROVED"&&n.transfermode===2?(r(),p(h,{key:0,dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(L,{color:_,variant:"outlined",modelValue:n.transferdate,"onUpdate:modelValue":o=>n.transferdate=o,label:"Tanggal Transfer","prepend-icon":"","prepend-inner-icon":"$calendar"},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:a(()=>[l(K,{color:_,variant:"outlined",accept:"image/*",label:"Upload Bukti Transfer",modelValue:n.image_path,"onUpdate:modelValue":o=>n.image_path=o,"prepend-icon":"","prepend-inner-icon":"attach_file","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):c("",!0)]),_:2},1024)],64)),l(D,{modelValue:e.dialogMessage,"onUpdate:modelValue":s[1]||(s[1]=o=>e.dialogMessage=o),width:"500"},{default:a(()=>[l(k,null,{default:a(()=>[l(O,{class:"text-h5 grey lighten-2"},{default:a(()=>[u("Alasan Penolakan")]),_:1}),l(m,null,{default:a(()=>[l(h,null,{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(J,{modelValue:n.rejected_message,"onUpdate:modelValue":o=>n.rejected_message=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),l($),l(I,null,{default:a(()=>[l(P),l(f,{color:"grey",text:"",onClick:s[0]||(s[0]=o=>e.dialogMessage=!1)},{default:a(()=>[u(" Batal ")]),_:1}),l(f,{color:"primary",text:"",onClick:o=>V.rejectedCurrentLoan(n,v)},{default:a(()=>[u(" Simpan ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"]),l(k,{class:"position-sticky bottom-0 mx-4 px-2",flat:"",color:`${_}-lighten-5`},{default:a(()=>[t("div",sl,[ul,l(f,{icon:"",onClick:s[2]||(s[2]=o=>e.sheet=!e.sheet),variant:"text",size:"small"},{default:a(()=>[l(g,null,{default:a(()=>[u("arrow_drop_up")]),_:1})]),_:1})]),l(h,{"no-gutters":"",class:"d-flex"},{default:a(()=>[l(d,null,{default:a(()=>[t("div",il,i(e.formatter.format(n.monthly_interest)),1)]),_:2},1024),l(d,null,{default:a(()=>[t("div",dl,[["PUBLISH","VERIFIED"].includes(n.status)?(r(),p(f,{key:0,variant:"flat",size:"small",color:"red",onClick:s[3]||(s[3]=o=>e.dialogMessage=!0)},{default:a(()=>[u("Tolak")]),_:1})):c("",!0),n.status==="PUBLISH"?(r(),p(f,{key:1,variant:"flat",class:"ml-2",size:"small",color:_,onClick:o=>V.verifiedCurrentLoan(n,v)},{default:a(()=>[u("Verifikasi")]),_:2},1032,["color","onClick"])):c("",!0),n.status==="VERIFIED"?(r(),p(f,{key:2,variant:"flat",size:"small",class:"ml-1",color:_,onClick:o=>V.approveCurrentLoan(n,v)},{default:a(()=>[u("Setujui")]),_:2},1032,["color","onClick"])):c("",!0),n.status==="APPROVED"&&n.transfermode===2?(r(),p(f,{key:3,variant:"flat",size:"small",color:_,disabled:n.transferdate===null,onClick:o=>V.updateStatusOfLoan(n,v)},{default:a(()=>[u("Selesai")]),_:2},1032,["color","disabled","onClick"])):c("",!0)])]),_:2},1024)]),_:2},1024),rl,l(z,{modelValue:e.sheet,"onUpdate:modelValue":s[8]||(s[8]=o=>e.sheet=o),inset:e.$vuetify.display.width>=600},{default:a(()=>[l(k,{style:{"border-top-left-radius":"25px","border-top-right-radius":"25px"}},{default:a(()=>[l(m,null,{default:a(()=>[t("div",ml,[l(f,{icon:"",color:"red",variant:"tonal",onClick:s[4]||(s[4]=o=>e.sheet=!e.sheet)},{default:a(()=>[l(g,null,{default:a(()=>[u("close")]),_:1})]),_:1})]),_l,fl,l(k,{flat:"",color:`${_}-lighten-5`},{default:a(()=>[l(m,null,{default:a(()=>[pl,t("div",cl,[u(i(e.formatter.format(n.monthly_interest)),1),hl])]),_:2},1024)]),_:2},1032,["color"]),l(h,null,{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(x,{density:""},{default:a(()=>[t("tbody",null,[t("tr",null,[Vl,vl,t("td",null,i(e.formatter.format(n.total_principal)),1),kl]),t("tr",null,[gl,yl,t("td",null,i(n.approval_interest)+" of "+i(n.percent_interest)+"% ",1),n.status==="VERIFIED"?(r(),y("td",bl,[l(f,{color:"orange",icon:"",size:"small",variant:"tonal",onClick:s[5]||(s[5]=o=>e.dialogEdit=!0)},{default:a(()=>[l(g,{small:""},{default:a(()=>[u("edit")]),_:1})]),_:1}),l(D,{modelValue:e.dialogEdit,"onUpdate:modelValue":s[7]||(s[7]=o=>e.dialogEdit=o),width:"500"},{default:a(()=>[l(k,null,{default:a(()=>[l(O,{class:"text-h5 grey lighten-2"},{default:a(()=>[u("Edit Bunga Pinjaman")]),_:1}),l(m,{class:"pt-4"},{default:a(()=>[l(h,{dense:""},{default:a(()=>[l(d,{cols:"6"},{default:a(()=>[l(C,{label:"Pengajuan Bunga Pinjaman",modelValue:n.percent_interest,"onUpdate:modelValue":o=>n.percent_interest=o,suffix:"%","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"6"},{default:a(()=>[l(C,{label:"Persetujuan Bunga Pinjaman",modelValue:n.approval_interest,"onUpdate:modelValue":o=>n.approval_interest=o,suffix:"%","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),l($),l(I,null,{default:a(()=>[l(P),l(f,{text:"",onClick:s[6]||(s[6]=o=>e.dialogEdit=!1)},{default:a(()=>[u(" Batal ")]),_:1}),l(f,{color:"primary",text:"",onClick:o=>{e.dialogEdit=!1,V.calculateLoanGrandTotal(n)}},{default:a(()=>[u(" Simpan ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])])):(r(),y("td",Cl," "))]),t("tr",null,[Pl,$l,t("td",null,i(e.formatter.format(n.total_interest)),1),Tl]),t("tr",null,[Bl,Sl,t("td",null,i(e.formatter.format(n.admfee)),1),El]),t("tr",null,[Ul,jl,t("td",null,i(e.formatter.format(n.grandtotal)),1),Dl])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),l($),l(m,null,{default:a(()=>[l(k,{flat:"",color:`${_}-lighten-5`},{default:a(()=>[l(m,null,{default:a(()=>[xl,t("div",Il,i(e.formatter.format(n.current_of_loan)),1)]),_:2},1024)]),_:2},1032,["color"]),l(h,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(x,{density:""},{default:a(()=>[t("tbody",null,[t("tr",null,[Ol,Ll,t("td",null,i(e.formatter.format(n.amount_of_maxloan)),1)]),t("tr",null,[Nl,Rl,t("td",null,i(e.formatter.format(n.limit_of_maxloan)),1)]),t("tr",null,[Al,wl,t("td",null,i(e.formatter.format(n.total_of_loan)),1)]),t("tr",null,[Ml,Fl,t("td",null,i(e.formatter.format(n.current_of_loan)),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","inset"])]),_:2},1032,["color"]),l(m)]),_:1})}const Zl=A(W,[["render",Gl]]);export{Zl as default};
