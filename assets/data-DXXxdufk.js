import{_ as C,b as g,C as a,d as V,o as n,x as o,H as f,J as D,K as S,Q as $,S as h,a1 as I,N as E,O as w,a5 as B,D as M,E as v,a2 as T,V as L,R as x}from"./App-Cj1p0Id9.js";const O={name:"coperative-deposit-data",data:()=>({dialogReport:!1,menuDateStart:!1,dateStart:null,menuDateEnd:!1,dateEnd:null,reportMode:null,reportYear:2023,fileImport:null}),methods:{printReport(t){this.dialogReport=!1,t.loader.state=!0;let e={};switch(e.mode=this.reportMode,e.filters=t.pageFilters,this.reportMode){case"laporan_simpanan":case"piutang_simpanan":e.date_start=this.dateStart,e.date_end=this.dateEnd;break;default:e.year=this.reportYear;break}t.$http("coperative/api/deposit/print-report",{method:"GET",params:e,responseType:"blob"}).then(k=>{const s=new Date;let _=s.getDate(),i=s.getMonth()+1,p=s.getFullYear();const c=new Blob([k],{type:"application/pdf"}),l=document.createElement("a");l.href=URL.createObjectURL(c),l.download=this.reportMode+`_${_}-${i}-${p}.pdf`,l.click(),URL.revokeObjectURL(l.href),t.loader.state=!1,this.dateStart=null,this.dateEnd=null,this.reportMode=null}).catch(()=>{t.loader.state=!1})},processImportData(t){t.$http("coperative/api/deposit/import-data",{method:"POST",contentType:"multipart/form-data",params:{file:this.fileImport}}).then(()=>{t.snackbar.color="green",t.snackbar.text="Berhasil diImport",t.snackbar.state=!0}).catch(()=>{})}}},U=["onClick"],F={key:1};function N(t,e,k,s,_,i){const p=V("item-data"),c=V("form-data");return n(),g(c,{"hide-create":""},{desktopRow:a(({headers:l,index:m,internalItem:r,isSelected:y,record:d,toggleSelect:b})=>[o(p,{headers:l,item:d,index:m,internalItem:r,isSelected:y,toggleSelect:b},{default:a(()=>[(n(!0),f(S,null,D(l,(u,R)=>(n(),f("td",{key:R,class:T(u.mode==="icon"?"text-center":"text-left"),onClick:Y=>b(r)},[u.mode==="icon"?(n(),g(L,{key:0,color:d.paid===!0?"green":"black"},{default:a(()=>[v(x(d.paid===!0?"check_circle":"unpublished "),1)]),_:2},1032,["color"])):(n(),f("span",F,x(d[u.value]),1))],10,U))),128))]),_:2},1032,["headers","item","index","internalItem","isSelected","toggleSelect"])]),info:a(({theme:l,store:m})=>[o(h,{class:"d-flex py-1"},{default:a(()=>e[1]||(e[1]=[$("div",{class:"overline"},"import data",-1)])),_:1}),o(I),o(h,{class:"pt-2 pb-4"},{default:a(()=>[o(E,{"no-gutters":""},{default:a(()=>[o(w,{cols:"12"},{default:a(()=>[o(B,{"prepend-icon":"","prepend-inner-icon":"attach_file",label:"Import Data","truncate-length":"15",modelValue:t.fileImport,"onUpdate:modelValue":e[0]||(e[0]=r=>t.fileImport=r),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(I),o(h,null,{default:a(()=>[o(M,{color:l,depressed:"",dark:"",block:"",onClick:r=>i.processImportData(m)},{default:a(()=>e[2]||(e[2]=[v("IMPORT")])),_:2},1032,["color","onClick"])]),_:2},1024)]),feed:a(()=>e[3]||(e[3]=[])),filter:a(()=>e[4]||(e[4]=[])),_:1})}const P=C(O,[["render",N]]);export{P as default};
