import{_ as v,r as C,o as u,c as h,y as t,s as e,H as k,J as d,S as i,Z as c,N as U,W as b,X as g,D as r,L as n,Q as _,B as $,z as p,A as m,F as w}from"./app-oi9O8E9X.js";import{V as x}from"./VTextarea-C8o5pum4.js";const B={name:"system-module-show",data:()=>({updateLoading:!1,updateStatus:!1,updateChecked:!1}),methods:{checkForUpdate:function(o){this.updateLoading=!0,this.$http(`system/api/module/${o.id}/check-for-update`).then(s=>{o.current_version=s.current_version,o.updated_version=s.updated_version,o.updated_notes=s.updated_notes,this.updateStatus=s.status,this.updateLoading=!1,this.updateChecked=!0}).catch(()=>{this.updateLoading=!1})},cancelUpdate:function(){this.updateChecked=!1,this.updateStatus=!1},processUpdate:function(o){this.$http(`system/api/module/${o.id}/process-update`).then(()=>{}).catch(()=>{})}}},A=n("div",{class:"text-overline mt-4"},"Aksi",-1),L={key:0},S=n("strong",null,"Update Is Available",-1),T=[S],D={key:1},F={class:"mt-2"},N={class:"text-caption"},E={class:"text-caption"},I={class:"text-caption"},P=n("div",{class:"text-overline mt-4"},"Link",-1);function K(o,s,R,z,H,V){const y=C("form-show");return u(),h(y,{"with-helpdesk":"","with-activity-logs":""},{default:t(({record:l})=>[e(U,null,{default:t(()=>[e(k,{dense:""},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(i,{label:"Name",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:t(()=>[e(i,{label:"Type",modelValue:l.type,"onUpdate:modelValue":a=>l.type=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(i,{label:"Domain",modelValue:l.domain,"onUpdate:modelValue":a=>l.domain=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(i,{label:"Prefix",modelValue:l.prefix,"onUpdate:modelValue":a=>l.prefix=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:t(()=>[e(i,{label:"Icon",modelValue:l.icon,"onUpdate:modelValue":a=>l.icon=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:t(()=>[e(x,{label:"Repositori",rows:"2",modelValue:l.git_address,"onUpdate:modelValue":a=>l.git_address=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(c,{label:"Desktop",modelValue:l.desktop,"onUpdate:modelValue":a=>l.desktop=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(c,{label:"Mobile",modelValue:l.mobile,"onUpdate:modelValue":a=>l.mobile=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(c,{label:"Enabled",modelValue:l.enabled,"onUpdate:modelValue":a=>l.enabled=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(c,{label:"Published",modelValue:l.published,"onUpdate:modelValue":a=>l.published=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:t(({record:l,theme:a})=>[A,e(b),o.updateChecked?(u(),h(U,{key:0,class:g(`bg-${a}-lighten-5 rounded-lg mt-3`)},{default:t(()=>[o.updateStatus?(u(),r("p",L,T)):(u(),r("p",D,[n("strong",null,"module "+_(l.name)+" is up to date.",1)])),n("div",F,[n("p",N," update version: "+_(l.updated_version),1),n("p",E," current version: "+_(l.current_version),1),n("p",I," updated notes: "+_(l.updated_notes),1)])]),_:2},1032,["class"])):$("",!0),e(k,{dense:""},{default:t(()=>[o.updateChecked&&o.updateStatus?(u(),r(w,{key:0},[e(d,{cols:"6"},{default:t(()=>[e(p,{class:"mt-3",color:`${a}-lighten-4`,block:"",variant:"flat",onClick:V.cancelUpdate},{default:t(()=>[m("Cancel")]),_:2},1032,["color","onClick"])]),_:2},1024),e(d,{cols:"6"},{default:t(()=>[e(p,{class:"mt-3",color:a,block:"",variant:"flat",onClick:f=>V.processUpdate(l)},{default:t(()=>[m("Update")]),_:2},1032,["color","onClick"])]),_:2},1024)],64)):(u(),h(d,{key:1,cols:"12"},{default:t(()=>[e(p,{class:"mt-3",color:a,loading:o.updateLoading,block:"",variant:"flat",onClick:f=>V.checkForUpdate(l)},{default:t(()=>[m("CHECK FOR UPDATE")]),_:2},1032,["color","loading","onClick"])]),_:2},1024))]),_:2},1024),P,e(b),e(p,{class:"mt-3",color:a,block:"",variant:"flat",onClick:s[0]||(s[0]=f=>o.$router.push({name:"system-page"}))},{default:t(()=>[m("BUKA PAGE")]),_:2},1032,["color"]),e(p,{class:"mt-3",color:a,block:"",variant:"flat",onClick:s[1]||(s[1]=f=>o.$router.push({name:"system-ability"}))},{default:t(()=>[m("BUKA ABILITY")]),_:2},1032,["color"])]),_:1})}const M=v(B,[["render",K]]);export{M as default};
