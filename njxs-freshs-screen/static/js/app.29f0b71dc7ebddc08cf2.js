webpackJsonp([2],{"4Klb":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},r=n("VU/8")({name:"App"},i,!1,null,null,null).exports,l=n("/ocq"),s={data:function(){return{screenmin:window.innerWidth<756,screenwidth:0,headertitltstyle:{fontSize:Math.ceil(36*this.baseScreenRate)+"px",height:"100%"},headerheight:{height:Math.ceil(64*this.baseScreenRate)+"px",lineHeight:Math.ceil(64*this.baseScreenRate)+"px"},trigonleft:{float:"left",borderTop:Math.ceil(64*this.baseScreenRate)+"px solid rgba(40,39,55,1)",borderBottom:"0px"},trigonright:{float:"right",borderBottom:Math.ceil(64*this.baseScreenRate)+"px solid #1a1a29",borderTop:"0px"},timechange:{width:Math.ceil(128*this.baseScreenRate)+"px",height:Math.ceil(35*this.baseScreenRate)+"px"},options:[{value:"WEEK",label:"the week"},{value:"MONTH",label:"the month"},{value:"QUARTER",label:"the quarter"}],value:"WEEK"}},components:{}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.screenmin?e._e():n("div",{staticClass:"header",style:e.headerheight},[n("span",{style:e.headertitltstyle},[n("span",{staticClass:"trigon",style:e.trigonleft}),e._v("宁家鲜生运营数据展示"),n("span",{staticClass:"trigon",style:e.trigonright})]),e._v(" "),n("el-select",{staticClass:"timechange",attrs:{size:"mini",name:"timechange"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),e.screenmin?n("div",{staticClass:"header",style:e.headerheight},[e._v("\n       宁家鲜生运营数据展示\n   ")]):e._e(),e._v(" "),n("div",{staticClass:"container-home"},[e.screenmin?n("div",{staticClass:"minitimeRange"},[n("el-select",{staticClass:"timechange",attrs:{size:"mini",name:"timechange"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e(),e._v(" "),n("router-view",{attrs:{timeRange:e.value}})],1)])},staticRenderFns:[]};var c=n("VU/8")(s,o,!1,function(e){n("vJsc"),n("4Klb")},"data-v-08cd46e8",null).exports;a.default.use(l.a);var u=new l.a({routes:[{path:"/",name:"Home",component:c,redirect:"/index",children:[{path:"/index",name:"index",component:function(e){return n.e(0).then(function(){var t=[n("uUni")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/index/:id",name:"index",component:function(e){return n.e(0).then(function(){var t=[n("uUni")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}]}),h=n("zL8q"),d=n.n(h),p=(n("tvR6"),n("//Fk")),v=n.n(p),m=n("mtWM"),f=n.n(m),b=(n("mw3O"),f.a.create({headers:{}}));b.interceptors.request.use(function(e){return"post"===e.method&&(e.data=e.data),e},function(e){return _.toast("错误的传参","fail"),v.a.reject(e)});var g=b,w=n("XLwt"),x=n.n(w),y=n("vwbq");if(a.default.config.productionTip=!1,a.default.prototype.axios=g,a.default.prototype.$echarts=x.a,a.default.prototype.$d3=y,a.default.use(d.a),window.innerWidth>756){var R=window.innerWidth/1920,S=window.innerHeight/1080,M=R>S?S:R;a.default.prototype.baseScreenRate=M}else{R=window.innerWidth/750;document.documentElement.style.fontSize=100*R+"px",a.default.prototype.baseScreenRate=R}new a.default({el:"#app",router:u,components:{App:r},template:"<App/>"})},tvR6:function(e,t){},vJsc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.29f0b71dc7ebddc08cf2.js.map