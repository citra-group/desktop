import{_ as R,c as g,y as a,r as V,o as s,s as o,D as f,E as $,F as C,L as S,O as h,W as y,H as E,J as w,z as B,A as I,X as M,V as T,N as v}from"./app-Cu0JO2ZK.js";import{V as L}from"./VFileInput-CHzHsPzV.js";const F={name:"coperative-deposit-data",data:()=>({dialogReport:!1,menuDateStart:!1,dateStart:null,menuDateEnd:!1,dateEnd:null,reportMode:null,reportYear:2023,fileImport:null}),methods:{printReport(t){this.dialogReport=!1,t.loader.state=!0;let e={};switch(e.mode=this.reportMode,e.filters=t.pageFilters,this.reportMode){case"laporan_simpanan":case"piutang_simpanan":e.date_start=this.dateStart,e.date_end=this.dateEnd;break;default:e.year=this.reportYear;break}t.$http("coperative/api/deposit/print-report",{method:"GET",params:e,responseType:"blob"}).then(k=>{const n=new Date;let _=n.getDate(),i=n.getMonth()+1,p=n.getFullYear();const c=new Blob([k],{type:"application/pdf"}),r=document.createElement("a");r.href=URL.createObjectURL(c),r.download=this.reportMode+`_${_}-${i}-${p}.pdf`,r.click(),URL.revokeObjectURL(r.href),t.loader.state=!1,this.dateStart=null,this.dateEnd=null,this.reportMode=null}).catch(()=>{t.loader.state=!1})},processImportData(t){t.$http("coperative/api/deposit/import-data",{method:"POST",contentType:"multipart/form-data",params:{file:this.fileImport}}).then(()=>{t.snackbar.color="green",t.snackbar.text="Berhasil diImport",t.snackbar.state=!0}).catch(()=>{})}}},O=["onClick"],U={key:1};function N(t,e,k,n,_,i){const p=V("item-data"),c=V("form-data");return s(),g(c,{"hide-create":""},{desktopRow:a(({headers:r,index:m,internalItem:l,isSelected:x,record:d,toggleSelect:b})=>[o(p,{headers:r,item:d,index:m,internalItem:l,isSelected:x,toggleSelect:b},{default:a(()=>[(s(!0),f(C,null,$(r,(u,D)=>(s(),f("td",{key:D,class:M(u.mode==="icon"?"text-center":"text-left"),onClick:Y=>b(l)},[u.mode==="icon"?(s(),g(T,{key:0,color:d.paid===!0?"green":"black"},{default:a(()=>[I(v(d.paid===!0?"check_circle":"unpublished "),1)]),_:2},1032,["color"])):(s(),f("span",U,v(d[u.value]),1))],10,O))),128))]),_:2},1032,["headers","item","index","internalItem","isSelected","toggleSelect"])]),info:a(({theme:r,store:m})=>[o(h,{class:"d-flex py-1"},{default:a(()=>e[1]||(e[1]=[S("div",{class:"overline"},"import data",-1)])),_:1}),o(y),o(h,{class:"pt-2 pb-4"},{default:a(()=>[o(E,{"no-gutters":""},{default:a(()=>[o(w,{cols:"12"},{default:a(()=>[o(L,{"prepend-icon":"","prepend-inner-icon":"attach_file",label:"Import Data","truncate-length":"15",modelValue:t.fileImport,"onUpdate:modelValue":e[0]||(e[0]=l=>t.fileImport=l),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(y),o(h,null,{default:a(()=>[o(B,{color:r,depressed:"",dark:"",block:"",onClick:l=>i.processImportData(m)},{default:a(()=>e[2]||(e[2]=[I("IMPORT")])),_:2},1032,["color","onClick"])]),_:2},1024)]),feed:a(()=>e[3]||(e[3]=[])),filter:a(()=>e[4]||(e[4]=[])),_:1})}const P=R(F,[["render",N]]);export{P as default};
