(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{591:function(e,t,o){var content=o(661);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("2ce383f6",content,!0,{sourceMap:!1})},660:function(e,t,o){"use strict";o(591)},661:function(e,t,o){(t=o(23)(!1)).push([e.i,'.login[data-v-7107ddef]{position:relative;min-height:100vh;padding-bottom:90px;display:flex;align-items:center;justify-content:center}.login h1[data-v-7107ddef]{font-size:2rem;font-weight:600}.login .container h1[data-v-7107ddef]{text-align:center}.login .container>div[data-v-7107ddef]{flex-direction:column;text-align:center}.login .container>div .d-block[data-v-7107ddef]{margin:0 auto}@media screen and (min-width:992px){.login .container h1[data-v-7107ddef]{text-align:left}.login .container>div[data-v-7107ddef]{flex-direction:row;text-align:left}.login .container>div .d-block[data-v-7107ddef]{margin:unset}}.login span[data-v-7107ddef]{max-width:350px}.login__hero[data-v-7107ddef]{max-width:500px}.login__hero a[data-v-7107ddef]{color:#288855;font-weight:600}.login__hero a[data-v-7107ddef]:hover{text-decoration:none;opacity:.9}.login__wrapper[data-v-7107ddef]{width:350px;height:350px;border-radius:50%;max-width:100%;background-color:#c2e8d3;position:relative}@media screen and (max-width:992px){.login__wrapper[data-v-7107ddef]{display:none}}.login__wrapper[data-v-7107ddef]:after{z-index:0;content:"";position:absolute;width:330px;height:330px;background-color:#fff;border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%)}.login__img[data-v-7107ddef]{width:350px;height:350px;position:relative;background-image:url(/login-hero.jpg);left:50px;top:30px;z-index:1}.login__img[data-v-7107ddef],.login__img[data-v-7107ddef]:before{border-radius:50%;max-width:100%}.login__img[data-v-7107ddef]:before{content:"";width:100px;height:100px;position:absolute;bottom:-20px;right:20px;background:linear-gradient(180deg,#8fe7b9,#fff)}.login__form[data-v-7107ddef]{max-width:400px}.login__form a[data-v-7107ddef]{color:#288855;font-weight:600}.login__form a[data-v-7107ddef]:hover{text-decoration:none;opacity:.9}.form-control[data-v-7107ddef]{font-size:1rem;min-height:50px}.form-control[data-v-7107ddef]::-moz-placeholder{font-size:1rem}.form-control[data-v-7107ddef]:-ms-input-placeholder{font-size:1rem}.form-control[data-v-7107ddef]::placeholder{font-size:1rem}',""]),e.exports=t},749:function(e,t,o){"use strict";o.r(t);o(119),o(71),o(61),o(49),o(94);var r=o(62),n=o(96);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var d={layout:"vendorIndex",data:function(){return{user:{email:"",password:""},alert:{status:!1,type:"danger",message:""},loading:!1,saveDetails:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)(["vendorDetails"])),methods:{logIn:function(){var e=this;this.loading=!0,this.alert.status=!1,console.log(this.user),this.$axios.post("vendor/login",this.user).then((function(t){e.loading=!1,e.saveDetails?(localStorage.setItem("vendor",JSON.stringify(t.data.user)),e.$store.commit("SET_VENDOR_DETAILS",t.data.user)):(sessionStorage.setItem("vendor",JSON.stringify(t.data.user)),e.$store.commit("SET_VENDOR_DETAILS",t.data.user));var o=window.btoa(t.data.user.email);e.$router.push("/vendor/".concat(o))})).catch((function(t){e.loading=!1,e.alert.status=!0,e.alert.message="Something went wrong, please try again",422===t.response.status&&(e.alert.message="Incorrect credentials")}))}}},c=(o(660),o(18)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("div",{staticClass:"container"},[o("h1",[e._v("Login to your NASIMS Account")]),e._v(" "),o("div",{staticClass:"row justify-content-between align-items-center"},[e._m(0),e._v(" "),o("div",{staticClass:"col-12 col-md-6 login__form"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.logIn(t)}}},[o("b-alert",{attrs:{variant:e.alert.type,dismissible:""},model:{value:e.alert.status,callback:function(t){e.$set(e.alert,"status",t)},expression:"alert.status"}},[e._v("\n            "+e._s(e.alert.message)+"\n          ")]),e._v(" "),o("div",{staticClass:"form-group my-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{id:"email",type:"email",placeholder:"Enter Email Address"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group my-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{id:"password",type:"password",placeholder:"Enter Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"row justify-content-between mx-0"},[o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.saveDetails,expression:"saveDetails"}],staticClass:"form-check-input",attrs:{id:"remember",type:"checkbox"},domProps:{checked:Array.isArray(e.saveDetails)?e._i(e.saveDetails,null)>-1:e.saveDetails},on:{change:function(t){var o=e.saveDetails,r=t.target,n=!!r.checked;if(Array.isArray(o)){var l=e._i(o,null);r.checked?l<0&&(e.saveDetails=o.concat([null])):l>-1&&(e.saveDetails=o.slice(0,l).concat(o.slice(l+1)))}else e.saveDetails=n}}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[e._v("\n                  Keep me logged in\n                ")])])]),e._v(" "),o("a",{attrs:{href:"#recover"}},[e._v("Recover Password")])]),e._v(" "),o("button",{staticClass:"btn btn--primary w-100",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.logIn(t)}}},[e.loading?o("b-spinner",{attrs:{variant:"light",label:"Spinning"}}):o("span",[e._v("Proceed")])],1)],1)])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 col-md-6 login__hero"},[t("span",{staticClass:"my-2 d-block"},[this._v("\n          If you don't have an acount, you can "),t("br"),this._v(" "),t("a",{attrs:{href:"/application/vendor-apply"}},[this._v("Apply here!")])]),this._v(" "),t("div",{staticClass:"login__wrapper"},[t("div",{staticClass:"login__img"})])])}],!1,null,"7107ddef",null);t.default=component.exports}}]);