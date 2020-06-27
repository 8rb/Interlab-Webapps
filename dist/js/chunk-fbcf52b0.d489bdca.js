(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbcf52b0","chunk-1e225aa6"],{"1bbe":function(t,s,a){},"23df":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app",{staticClass:"content"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"left_banner",attrs:{cols:"12",md:"5"}},[e("v-card-text",{staticClass:"header"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo",attrs:{src:a("51ef"),alt:""}})])])]),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"user"},[e("p",{staticClass:"company"},[t._v("Company")])])])],1)],1),e("v-card-text",{staticClass:"register"},[e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{type:"text",label:"E-mail",rules:[function(t){return!!t||"E-mail is required"}],required:""},model:{value:t.newEmail,callback:function(s){t.newEmail=s},expression:"newEmail"}})],1),e("div",{staticClass:"form"},[e("v-row",[e("v-col",[e("v-text-field",{staticClass:"text-field first_name",attrs:{label:"First Name",rules:[function(t){return!!t||"First and Last Names are required"}],required:""},model:{value:t.newFirstName,callback:function(s){t.newFirstName=s},expression:"newFirstName"}})],1),e("v-col",[e("v-text-field",{staticClass:"text-field last_name",attrs:{label:"Last Name",rules:[function(t){return!!t||"First and Last Names are required"}],required:""},model:{value:t.newLastName,callback:function(s){t.newLastName=s},expression:"newLastName"}})],1)],1)],1),e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{label:"Password",rules:[function(t){return!!t||"A password is required"}],type:"password",required:""},model:{value:t.newPassword,callback:function(s){t.newPassword=s},expression:"newPassword"}})],1),e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{label:"Confirm Password",rules:[function(t){return!!t||"Passwords must be the same"}],type:"password",required:""},model:{value:t.newPassword2,callback:function(s){t.newPassword2=s},expression:"newPassword2"}})],1),e("div",{staticClass:"links"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("a",{staticClass:"student",on:{click:function(s){return t.registerStudent()}}},[t._v("Are you a student?")])]),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("a",{staticClass:"already",attrs:{href:"/"}},[t._v("Already have an account?")])])],1)],1),e("div",[e("v-card-text",{staticClass:"btn"},[e("v-btn",{staticClass:"register_btn",on:{click:t.createUser}},[t._v("Register")])],1)],1)]),e("v-card-text",{staticClass:"about"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"8"}},[e("p",{staticClass:"about_title"},[t._v("Register as a Company:")]),e("div",[e("p",{staticClass:"about_text"},[t._v("As a company you will be able to create and publish internship offers in your company manage your internships and choose from the best students to hire for the needs of your organisation.")])])]),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("v-btn",{staticClass:"about_btn",attrs:{href:"https://8rb.github.io/Interlab-Landing-Page/",target:"_blank"}},[t._v("About Us")])],1)],1)],1)],1),e("v-col",{staticClass:"right_banner",attrs:{cols:"12",md:"7"}},[e("v-card-text",{staticClass:"right_text"},[e("p",{staticClass:"text-lg-left"},[t._v("Welcome To")]),e("h1",{staticClass:"text-lg-left"},[t._v("InterLab")]),e("br"),e("p",{staticClass:"text-lg-left"},[t._v("Register as a company")])])],1)],1)],1)},r=[],i=(a("d3b7"),a("25f0"),a("bc3a")),l=a.n(i),n=a("578a"),o=a("41cb"),c={name:"RegisterCompany",data:function(){return{newEmail:"",newName:"",newPassword:"",newPassword2:"",isValid:!0,newRole:"",newFirstName:"",newLastName:"",users:[],profiles:[],userId:null}},methods:{submit:function(){this.$ref.form.valid()&&console.log(this.newEmail,this.newName,this.newPassword,this.newPassword2,this.isValid)},registerStudent:function(){o["a"].push({path:"/registerStudent"})},createUser:function(){var t=this;l.a.post("https://interlab4.azurewebsites.net/api/users",{username:this.newEmail,password:this.newPassword,email:this.newEmail,dateCreated:new Date}).then((function(s){var a=s.data;t.users.push(a),console.log(s),l.a.get("https://interlab4.azurewebsites.net/api/users").then((function(s){t.users=s.data,console.log("Source Users:"),console.log(s.data),t.users=s.data;for(var a=0;a<s.data.length;a++)if(console.log(s.data[a].email),console.log(s.data[a].id),s.data[a].email===t.newEmail.toString()){console.log("New User Found"),t.userId=s.data[a].id,console.log("User id: ",n["userId"]);break}l.a.post("https://interlab4.azurewebsites.net/api/users/"+t.userId+"/profiles",{role:"company",firstName:t.newFirstName,lastName:t.newLastName}).then((function(s){var a=s.data;t.profiles.push(a),console.log(s),o["a"].push({path:"/companyDashboard"})})),console.log("creating profiles' user...",t.newRole,t.newFirstName,t.newPassword,t.newPassword2,t.isValid)}))})),console.log("creating user...",this.newEmail,this.newFirstName,this.newLastName,this.newPassword,this.isValid)}}},d=c,u=(a("6891"),a("2877")),m=a("6544"),f=a.n(m),p=a("7496"),v=a("8336"),w=a("99d9"),b=a("62ad"),h=a("0fd9"),g=a("8654"),C=Object(u["a"])(d,e,r,!1,null,"36b9ffd4",null);s["default"]=C.exports;f()(C,{VApp:p["a"],VBtn:v["a"],VCardText:w["b"],VCol:b["a"],VRow:h["a"],VTextField:g["a"]})},"37b0":function(t,s,a){},4340:function(t,s,a){"use strict";var e=a("37b0"),r=a.n(e);r.a},"51ef":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABXCAYAAAB4I3kWAAAABHNCSVQICAgIfAhkiAAABF5JREFUeF7tnDGIHGUUx3+zuRQWgtgowVaM3OLZGBCtRFBMGhWVeIiJsbJQ5E5BRIukschCVKwkISdcYqNoI2qrV4iFWd1TsbIRtBAEBZtjR77Zmd1vNjM7b24fyyb+t7qd+c/7Zn7z/957MztzCfq4EUjcIikQguloAsEUTEcCjqHkTMF0JOAYSs4UTEcCjqHkTMF0JOAYSs4UTEcCjqHkTMF0JOAYSs68zmHeBDxhOMYrwLcG3cIky+jMO4EfDQTeAl4z6BYmEUxH1IIpmBkBTXODEZQzDZCsEsG0kjLoBNMAySoRTCspg+4w8JNBpwJkgCSYBkhWiWBaSRl0gmmAZJUIppWUQSeYBkhWiWBaSRl0gmmAZJUIppWUQSeYBkhWiQVmCrwC9KxBF6FbxpvDTTD/Bt4DhsDri4BkHeNag7kDPAX8Aryj34CaT3OdMz8AngN2gTt0p70ZZFBUwXwZeBt4F3gBshcbdNfIwDOGuQccBb4EVoHvgIN5DMFsAfMf4B7g53ybP4Gbo+0F0wjzM+AB4Ndc/yHwZD69ixCCaYB5IxCm97+59hjwKdCZ2lYwDTBjSQD7VwXIoBHMFjAPAF8B99ZsI5gtYD4PvD9DL5hGmLfnVzmz5IJpgHlDDvK2Bq1gGmA23ehQa2SAWEgEswWsJqlgNhFqsT4Un28M+nPAaYNuYZJlvJ+5sIP3HkgwHYkKpmA6EnAMJWcKpiMBx1BypmA6EnAMJWcKpiMBx1BypmA6EnAMJWcKpiMBx1BypmA6EnAMVevMbvf4Lax0fs/GSjk16G9fcBx3/lCvnj/EcOW3UaD0Jc6eCM9rzvfZ3ApPJEM6fJTeyU/aBlsIzHBiBoPLf7TduZn6/xvM1bWn30iS5DQpFwb97VOCOcc0F8zcPlU5s9s9fhcrnX7GN00fTpLk88JtaZq+udu/dCZ8j3UlN045dAx7HORqB3fvXs/yWBgPOJI5fW946+CRBw+Yc+bmxRchCU8e5yk2Hb2lkSQbpHxM79nHs+9xzqTzDAmPTbZpzqOtcmYtpPE+joBaYK6urX+dJNw3PfXTlJ3d/vb9xfIJTHbG+jYwN7Y+KkG5asAKmHX5KE179E5s1q3eP8zIZSWHhQPNi03dNK/TRy6cuDx3ZukArDBjR8YVurS8BmY6PELv5Ojfo21cPJu5eFTpJ8unqO4f5t5wbTC4/H0+rSdtlAFmPHV3+5e+GLswSiODK9vZvhXa8HexLNNbqnnhyipHjddVwaxotWbFyg9gHphjB5byawS5ypklbd18Ccvzk1IH3gRzc+uHcD4q+9DCbXU5c7rPrNI7OnP5YV7vzgwnsyg+cQdQpIvp5n4+Z0ZVfMlzpsWZD8XtU9G8N031UpsVtUZxfi1P84p8URSKa6KaR4WmLmdmbltbP0+SvaYXrvFLV0KldQWPKG5cgEKfuS+YWf+4jz4z6YSeuevSZ86qDVpXTUD3Mx2dIZiC6UjAMZSc6QjzP/ydBYW6bNwqAAAAAElFTkSuQmCC"},"578a":function(t,s,a){"use strict";a.r(s),a.d(s,"userId",(function(){return c}));var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app",{staticClass:"content"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"left_banner",attrs:{cols:"12",sm:"5"}},[e("v-card-text",{staticClass:"header"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo",attrs:{src:a("51ef"),alt:""}})])])]),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"language"},[e("p",{staticClass:"eng"},[t._v("Eng")])])])],1)],1),e("v-card-text",{staticClass:"login"},[e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{rules:[t.rules.required2,t.rules.email],label:"E-mail"},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}})],1),e("div",{staticClass:"form"},[e("v-text-field",{staticClass:"text-field",attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(s){t.show1=!t.show1}},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),e("div",{staticClass:"links"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("router-link",{staticClass:"register",attrs:{to:"/registerCompany"}},[t._v("Register as a Company")])],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("router-link",{staticClass:"register",attrs:{to:"/registerStudent"}},[t._v("Register as a Student")])],1)],1)],1),e("v-card-text",{staticClass:"btn"},[e("v-btn",{staticClass:"login_btn",attrs:{color:"primary",disabled:!t.isValid},on:{click:t.validateUser}},[t._v("Log In")])],1)],1),e("v-card-text",{staticClass:"about"},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"8"}},[e("p",{staticClass:"about_title"},[t._v("What Is InterLab?")]),e("div",[e("p",{staticClass:"about_text"},[t._v("Here at InterLab, we love Internships! Make sure to create an account to get access to the best internships offers from all around the globe.")])])]),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("v-btn",{staticClass:"about_btn",attrs:{href:"https://8rb.github.io/Interlab-Landing-Page/",target:"_blank"}},[t._v("About Us")])],1)],1)],1)],1),e("v-col",{staticClass:"right_banner",attrs:{cols:"12",sm:"7"}},[e("v-card-text",{staticClass:"right_text"},[e("p",{staticClass:"text-lg-left"},[t._v("Welcome To")]),e("h1",{staticClass:"text-lg-left"},[t._v("InterLab")]),e("br"),e("p",{staticClass:"text-lg-left"},[t._v("Log in with your account")])])],1)],1)],1)},r=[],i=a("bc3a"),l=a.n(i),n=a("41cb"),o={name:"Login",methods:{validateUser:function(){var t=this;l.a.all([l.a.get("https://interlab4.azurewebsites.net/api/users"),l.a.get("https://interlab4.azurewebsites.net/api/profiles")]).then((function(s){t.userId=0,t.users=s[0].data,t.profiles=s[1].data;for(var a=0;a<s[0].data.length;a++)if(s[0].data[a].username===t.email&&s[0].data[a].password===t.password||s[0].data[a].email===t.email&&s[0].data[a].password===t.password){console.log("User Found"),c=s[0].data[a].id,console.log("User id: ",c),t.auth=!0;break}if(t.auth||alert("Wrong username or password"),t.auth){for(var e=0;e<s[1].data.length;e++)if(console.log("userId",c),s[1].data[e].id===c){t.role=!0,console.log("Profile Found"),"student"===s[1].data[e].role.toLowerCase()?n["a"].push({path:"/studentDashboard"}):"company"===s[1].data[e].role.toLowerCase()?n["a"].push({path:"/companyDashboard"}):alert("Invalid Role");break}t.role||alert("Could not find Role")}}))}},data:function(){return{userId:0,email:null,isValid:!0,show1:!1,auth:!1,role:!1,password:"",ref:"/",users:[],profiles:[],rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},required2:function(t){return!!t||"Required."},email:function(t){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(t)||"Invalid e-mail."}}}}},c=0,d=o,u=(a("4340"),a("2877")),m=a("6544"),f=a.n(m),p=a("7496"),v=a("8336"),w=a("99d9"),b=a("62ad"),h=a("0fd9"),g=a("8654"),C=Object(u["a"])(d,e,r,!1,null,"39481526",null);s["default"]=C.exports;f()(C,{VApp:p["a"],VBtn:v["a"],VCardText:w["b"],VCol:b["a"],VRow:h["a"],VTextField:g["a"]})},6891:function(t,s,a){"use strict";var e=a("1bbe"),r=a.n(e);r.a}}]);
//# sourceMappingURL=chunk-fbcf52b0.d489bdca.js.map