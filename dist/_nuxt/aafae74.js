(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{619:function(t,e,n){var content=n(722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("76d8b03a",content,!0,{sourceMap:!1})},620:function(t,e,n){var content=n(724);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("1aabc408",content,!0,{sourceMap:!1})},721:function(t,e,n){"use strict";n(619)},722:function(t,e,n){(e=n(23)(!1)).push([t.i,'.apps[data-v-c51dbbf6]{background-color:#f7f7f7}.btn-sm[data-v-c51dbbf6]{width:auto;padding:8px 15px}nav .nav-tabs[data-v-c51dbbf6]{border-bottom:none}.tabs[data-v-c51dbbf6]{max-width:1200px;padding:10px 0}.tabs[data-v-c51dbbf6] a{padding-bottom:15px;color:#444}.tabs[data-v-c51dbbf6] .tab--active{color:#288855;position:relative;display:block}.tabs[data-v-c51dbbf6] .tab--active:after{content:"";display:none}.table[data-v-c51dbbf6]{background-color:#fff;border-top:none}.pending[data-v-c51dbbf6]{background-color:#d1ecf1;border-radius:50px;padding:5px 20px;font-size:.9rem}.text[data-v-c51dbbf6],.title[data-v-c51dbbf6]{margin:0}.title[data-v-c51dbbf6]{opacity:.8;margin:5px 0 2px}.text[data-v-c51dbbf6]{font-weight:600;opacity:.8}',""]),t.exports=e},723:function(t,e,n){"use strict";n(620)},724:function(t,e,n){(e=n(23)(!1)).push([t.i,'.user[data-v-77b684be]{min-height:calc(100vh - 73px)}.beneficiary[data-v-77b684be]{background-color:#f7f7f7;padding:10px 0}@media screen and (min-width:992px){.beneficiary[data-v-77b684be]{padding:50px}}.text[data-v-77b684be],.title[data-v-77b684be]{margin:0}.title[data-v-77b684be]{opacity:.8;margin:5px 0 2px}.text[data-v-77b684be]{font-weight:600;opacity:.8}.tabs[data-v-77b684be]{border:1px solid rgba(0,0,0,.1);max-width:1200px;margin:50px auto;padding:10px 0}.tabs[data-v-77b684be] a{padding-bottom:15px;color:#444}.tabs[data-v-77b684be] .tab--active{color:#288855;position:relative;border:none;display:block}.tabs[data-v-77b684be] .tab--active:after{content:"";width:100%;height:5px;border-radius:10px 10px 0 0;background-color:#288855;position:absolute;bottom:-2px;left:0}',""]),t.exports=e},743:function(t,e,n){"use strict";n.r(e);n(79);var l={props:{user:{type:Object,default:function(){}}},data:function(){return{items:[],fields:["title","end_date","status",{key:"action",label:""}],showModal:!1,selectedData:null}},mounted:function(){this.tableData()},methods:{tableData:function(){var t=this;this.$axios.get("bid").then((function(data){t.items=data.data.data}))},placeBid:function(t){console.log(t.name),this.$store.commit("SET_BID_TYPE",t.name),this.$router.push({path:"/vendor/bid"})}}},o=(n(721),n(18)),c={components:{VendorProgrammes:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showModal?n("b-modal",{attrs:{"hide-footer":""},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[n("b-card",[n("b-row",[n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            Surname\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.surname)+"\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            First Name\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.first_name)+"\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            Other Names\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.other_name)+"\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            Date Of Birth\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.date)+"\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            Email Address\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.email)+"\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            Phone Number\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.phone_number)+"\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            "+t._s(t.selectedData.state_of_origin)+"\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            Abia State\n          ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n            Local Government Area Of Origin\n          ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.selectedData.lga)+"\n          ")])])],1)],1),t._v(" "),n("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){t.showModal=!1}}},[t._v("\n      Close\n    ")])],1):t._e(),t._v(" "),n("div",{staticClass:"apps"},[n("b-table",{staticClass:"table",attrs:{hover:"",items:t.items,fields:t.fields,responsive:""},scopedSlots:t._u([{key:"cell(status)",fn:function(data){return[n("span",{class:data.value.toLowerCase()},[t._v(t._s(data.value))])]}},{key:"cell(action)",fn:function(e){return[n("button",{staticClass:"btn btn--primary btn-sm",on:{click:function(n){return t.placeBid(e.item,e.index,n.target)}}},[t._v("\n          Place Bid\n        ")])]}}])})],1)],1)}),[],!1,null,"c51dbbf6",null).exports},layout:"postvendorlogin",middleware:"auth",data:function(){return{items:[],fields:["first_name","surname","date","phone_number","residential_address"],items2:[],fields2:["bid","bid_title","status"]}},computed:{vendorDetails:function(){var t=localStorage.getItem("nasims-vendor")||sessionStorage.getItem("nasims-vendor");return t?JSON.parse(t):null}},mounted:function(){this.$axios.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("vendor-token")),this.getAllBids()},methods:{getAllBids:function(){var t=this;this.$axios.get("bid/".concat(this.$store.state.vendorDetails.email)).then((function(e){console.log(e.data),t.items2=e.data.data}))}}},r=(n(723),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("b-tabs",{attrs:{"active-nav-item-class":"tab--active","content-class":"mt-3 tabs"}},[n("b-container",[n("b-tab",{attrs:{title:"Overview",active:""}},[n("b-row",{staticClass:"beneficiary"},[n("b-col",{attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"personal"},[t._v("Business Details")]),t._v(" "),n("b-card",[n("b-row",[n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n                    Company Name\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.company_name)+"\n                  ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n                    Email Address\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.email)+"\n                  ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n                    Contact Name\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.contact_name)+"\n                  ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n                    Contact Phone Number\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.phone_number)+"\n                  ")])]),t._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"title"},[t._v("\n                    Address\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.address)+"\n                  ")])])],1)],1)],1),t._v(" "),n("b-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"hidden"},[t._v("Personal Details")]),t._v(" "),n("b-card",{staticClass:"text-center"},[n("div",{staticClass:"text-center name"},[t._v("\n                "+t._s(t.vendorDetails.company_name)+"\n              ")]),t._v(" "),n("div",{staticClass:"text-center mail"},[t._v("\n                "+t._s(t.vendorDetails.email)+"\n              ")]),t._v(" "),n("div",[t._v(" ")]),t._v(" "),n("div",{staticClass:"text-center ben rectangle-1"},[t._v("\n                Vendor\n              ")]),t._v(" "),n("div",[t._v(" ")]),t._v(" "),n("div",{staticClass:"text-center"},[t._v("\n                N-Power Batch D\n              ")])])],1),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"personal"},[t._v("Other Details")]),t._v(" "),n("b-card",[n("b-row",[n("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[n("p",{staticClass:"title"},[t._v("\n                    Tax Identification Number\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.tax_id_number)+"\n                  ")])]),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[n("p",{staticClass:"title"},[t._v("\n                    Rc Number\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.rc_number)+"\n                  ")])]),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[n("p",{staticClass:"title"},[t._v("\n                    Date of Incorporation\n                  ")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.vendorDetails.date_of_inc)+"\n                  ")])])],1)],1)],1),t._v(" "),n("b-row",[t._v(" ")])],1)],1)],1),t._v(" "),n("b-tab",{attrs:{title:"My Bids"}},[n("b-table",{staticStyle:{"background-color":"#FFFFFF"},attrs:{items:t.items2,fields:t.fields2}})],1),t._v(" "),n("b-tab",{attrs:{title:"Available Bids"}},[n("VendorProgrammes",{attrs:{user:t.vendorDetails}})],1)],1)],1)}),[],!1,null,"77b684be",null));e.default=r.exports}}]);