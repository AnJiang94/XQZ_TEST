webpackJsonp([0],{"/Xsi":function(t,e){},Y202:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"indexText",data:function(){return{userObj:{}}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){var t=sessionStorage.getItem("data");t&&(this.userObj=JSON.parse(t),console.log(this.userObj))},methods:{goBack:function(){this.$router.go(-1)},getImageUrl:function(t){return s("PvXa")("./"+t)}},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},computed:{}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"indexText"},[s("i",{staticClass:"btn custom-icon",on:{click:t.goBack}}),t._v(" "),s("div",{staticClass:"left"},[s("img",{attrs:{src:t.getImageUrl(t.userObj.imgUrl),width:t.userObj.width1,height:t.userObj.height}})]),t._v(" "),s("div",{staticClass:"right"},[s("h1",{staticClass:"title"},[t._v(t._s(t.userObj.title))]),t._v(" "),s("p",{staticClass:"paragraph"},[t._v(t._s(t.userObj.text))])])])},staticRenderFns:[]};var r=s("VU/8")(n,i,!1,function(t){s("/Xsi")},"data-v-ee21bfb8",null);e.default=r.exports}});
//# sourceMappingURL=0.f22eb74d2b5147a87cbc.js.map