(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746fd52c"],{"51ef":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABXCAYAAAB4I3kWAAAABHNCSVQICAgIfAhkiAAABF5JREFUeF7tnDGIHGUUx3+zuRQWgtgowVaM3OLZGBCtRFBMGhWVeIiJsbJQ5E5BRIukschCVKwkISdcYqNoI2qrV4iFWd1TsbIRtBAEBZtjR77Zmd1vNjM7b24fyyb+t7qd+c/7Zn7z/957MztzCfq4EUjcIikQguloAsEUTEcCjqHkTMF0JOAYSs4UTEcCjqHkTMF0JOAYSs4UTEcCjqHkTMF0JOAYSs68zmHeBDxhOMYrwLcG3cIky+jMO4EfDQTeAl4z6BYmEUxH1IIpmBkBTXODEZQzDZCsEsG0kjLoBNMAySoRTCspg+4w8JNBpwJkgCSYBkhWiWBaSRl0gmmAZJUIppWUQSeYBkhWiWBaSRl0gmmAZJUIppWUQSeYBkhWiQVmCrwC9KxBF6FbxpvDTTD/Bt4DhsDri4BkHeNag7kDPAX8Aryj34CaT3OdMz8AngN2gTt0p70ZZFBUwXwZeBt4F3gBshcbdNfIwDOGuQccBb4EVoHvgIN5DMFsAfMf4B7g53ybP4Gbo+0F0wjzM+AB4Ndc/yHwZD69ixCCaYB5IxCm97+59hjwKdCZ2lYwDTBjSQD7VwXIoBHMFjAPAF8B99ZsI5gtYD4PvD9DL5hGmLfnVzmz5IJpgHlDDvK2Bq1gGmA23ehQa2SAWEgEswWsJqlgNhFqsT4Un28M+nPAaYNuYZJlvJ+5sIP3HkgwHYkKpmA6EnAMJWcKpiMBx1BypmA6EnAMJWcKpiMBx1BypmA6EnAMJWcKpiMBx1BypmA6EnAMVevMbvf4Lax0fs/GSjk16G9fcBx3/lCvnj/EcOW3UaD0Jc6eCM9rzvfZ3ApPJEM6fJTeyU/aBlsIzHBiBoPLf7TduZn6/xvM1bWn30iS5DQpFwb97VOCOcc0F8zcPlU5s9s9fhcrnX7GN00fTpLk88JtaZq+udu/dCZ8j3UlN045dAx7HORqB3fvXs/yWBgPOJI5fW946+CRBw+Yc+bmxRchCU8e5yk2Hb2lkSQbpHxM79nHs+9xzqTzDAmPTbZpzqOtcmYtpPE+joBaYK6urX+dJNw3PfXTlJ3d/vb9xfIJTHbG+jYwN7Y+KkG5asAKmHX5KE179E5s1q3eP8zIZSWHhQPNi03dNK/TRy6cuDx3ZukArDBjR8YVurS8BmY6PELv5Ojfo21cPJu5eFTpJ8unqO4f5t5wbTC4/H0+rSdtlAFmPHV3+5e+GLswSiODK9vZvhXa8HexLNNbqnnhyipHjddVwaxotWbFyg9gHphjB5byawS5ypklbd18Ccvzk1IH3gRzc+uHcD4q+9DCbXU5c7rPrNI7OnP5YV7vzgwnsyg+cQdQpIvp5n4+Z0ZVfMlzpsWZD8XtU9G8N031UpsVtUZxfi1P84p8URSKa6KaR4WmLmdmbltbP0+SvaYXrvFLV0KldQWPKG5cgEKfuS+YWf+4jz4z6YSeuevSZ86qDVpXTUD3Mx2dIZiC6UjAMZSc6QjzP/ydBYW6bNwqAAAAAElFTkSuQmCC"},"578a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app",{staticClass:"content"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"left_banner",attrs:{cols:"12",sm:"5"}},[e("v-card-text",{staticClass:"header"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo",attrs:{src:a("51ef"),alt:""}})])])]),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"language"},[e("p",{staticClass:"eng"},[t._v("Eng")])])])],1)],1),e("v-card-text",{staticClass:"login"},[e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{rules:[t.rules.required2,t.rules.email],label:"E-mail"},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}})],1),e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(s){t.show1=!t.show1}},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),e("div",{staticClass:"links"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("router-link",{staticClass:"register",attrs:{to:"/registerCompany"}},[t._v("Register as a Company")])],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("router-link",{staticClass:"register",attrs:{to:"/registerStudent"}},[t._v("Register as a Student")])],1)],1)],1),e("v-card-text",{staticClass:"btn"},[e("v-btn",{staticClass:"login_btn",attrs:{color:"primary",disabled:!t.isValid},on:{click:t.validateUser}},[t._v("Log In")])],1)],1),e("v-card-text",{staticClass:"about"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"8"}},[e("p",{staticClass:"about_title"},[t._v("What Is InterLab?")]),e("div",[e("p",{staticClass:"about_text"},[t._v("Here at InterLab, we love Internships! Make sure to create an account to get access to the best internships offers from all around the globe.")])])]),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("v-btn",{staticClass:"about_btn",attrs:{href:"https://8rb.github.io/Interlab-Landing-Page/",target:"_blank"}},[t._v("About Us")])],1)],1)],1)],1),e("v-col",{staticClass:"right_banner",attrs:{cols:"12",sm:"7"}},[e("v-card-text",{staticClass:"right_text"},[e("p",{staticClass:"text-lg-left"},[t._v("Welcome To")]),e("h1",{staticClass:"text-lg-left"},[t._v("InterLab")]),e("br"),e("p",{staticClass:"text-lg-left"},[t._v("Log in with your account")])])],1)],1)],1)},r=[],i=a("bc3a"),o=a.n(i),l=a("41cb"),n={name:"Login",methods:{validateUser:function(){var t=this;o.a.get("https://interlab4.azurewebsites.net/api/users").then((function(s){t.userId=0,t.users=s.data;for(var a=0;a<s.data.length;a++)if(s.data[a].username===t.email&&s.data[a].password===t.password||s.data[a].email===t.email&&s.data[a].password===t.password){console.log("User Found"),t.userId=s.data[a].id,console.log("User id: ",t.userId),t.$store.commit("saveId",t.userId),console.log("User id: ",t.$store.state.userId),t.auth=!0;break}t.auth||alert("Wrong username or password"),t.auth&&o.a.get("https://interlab4.azurewebsites.net/api/users/"+t.$store.state.userId+"/profiles").then((function(s){t.userProfile=s.data[0],t.firstName=s.data[0].firstName,t.$store.commit("saveFirstName",t.firstName),console.log("First Name",s.data[0].firstName),console.log(t.firstName),"student"===s.data[0].role.toLowerCase()?l["a"].push({path:"/studentDashboard"}):"company"===s.data[0].role.toLowerCase()?o.a.get("https://interlab4.azurewebsites.net/api/users/"+t.$store.state.userId+"/companies").then((function(s){t.$store.commit("saveCompanyId",s.data[0].id),l["a"].push({path:"/companyDashboard"})})):alert("Invalid Role")})).catch((function(t){console.log(t)}))}))}},data:function(){return{userId:0,firstName:null,email:null,isValid:!0,show1:!1,auth:!1,role:!1,password:"",ref:"/",users:[],userProfile:[],rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},required2:function(t){return!!t||"Required."},email:function(t){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(t)||"Invalid e-mail."}}}}},c=n,d=(a("e1f1"),a("2877")),u=a("6544"),p=a.n(u),m=a("7496"),f=a("8336"),v=a("99d9"),b=a("62ad"),g=a("0fd9"),A=a("8654"),h=Object(d["a"])(c,e,r,!1,null,"59da1aef",null);s["default"]=h.exports;p()(h,{VApp:m["a"],VBtn:f["a"],VCardText:v["b"],VCol:b["a"],VRow:g["a"],VTextField:A["a"]})},db3d:function(t,s,a){},e1f1:function(t,s,a){"use strict";var e=a("db3d"),r=a.n(e);r.a}}]);
//# sourceMappingURL=chunk-746fd52c.5f057731.js.map