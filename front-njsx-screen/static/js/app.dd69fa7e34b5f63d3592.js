webpackJsonp([2],{"2yHL":function(e,t){},"991W":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},r=n("VU/8")({name:"App"},i,!1,null,null,null).exports,s=n("/ocq"),o={data:function(){return{headertitltstyle:{fontSize:Math.ceil(36*this.baseScreenRate)+"px",height:"100%"},headerheight:{height:Math.ceil(64*this.baseScreenRate)+"px",lineHeight:Math.ceil(64*this.baseScreenRate)+"px"},trigonleft:{float:"left",borderTop:Math.ceil(64*this.baseScreenRate)+"px solid rgba(40,39,55,1)",borderBottom:"0px"},trigonright:{float:"right",borderBottom:Math.ceil(64*this.baseScreenRate)+"px solid #1a1a29",borderTop:"0px"},timechange:{width:Math.ceil(128*this.baseScreenRate)+"px",height:Math.ceil(40*this.baseScreenRate)+"px"}}},components:{}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"header",style:this.headerheight},[t("span",{style:this.headertitltstyle},[t("span",{staticClass:"trigon",style:this.trigonleft}),this._v("宁家鲜生运营数据展示"),t("span",{staticClass:"trigon",style:this.trigonright})])]),this._v(" "),t("div",{staticClass:"container-home"},[t("router-view")],1)])},staticRenderFns:[]};var l=n("VU/8")(o,c,!1,function(e){n("2yHL")},"data-v-3127944e",null).exports;a.default.use(s.a);var h=new s.a({routes:[{path:"/",name:"Home",component:l,redirect:"/index",children:[{path:"/index",name:"index",component:function(e){return n.e(0).then(function(){var t=[n("uUni")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}]}),d=n("zL8q"),p=n.n(d),u=(n("tvR6"),n("//Fk")),f=n.n(u),v=n("mtWM"),b=n.n(v),g=n("mw3O"),m=n.n(g);b.a.defaults.withCredentials=!0;var w=new RegExp("(^|&)sessionId=([^&]*)(&|$|#)"),x=window.location.search.substr(1).match(w),y="";y=null!=x?decodeURIComponent(x[2].split("#")[0]):"4c944608b74c45f8994dadb66590ccc7",sessionStorage.setItem("sessionId",y);var R=b.a.create({baseURL:"http://10.0.0.128:8112/njxs-backend",headers:{"Content-type":"application/x-www-form-urlencoded"}});R.interceptors.request.use(function(e){return"post"===e.method&&(e.data=m.a.stringify(e.data)),e},function(e){return _.toast("错误的传参","fail"),f.a.reject(e)});var S=R,M=(n("991W"),n("XLwt")),C=n.n(M),H=n("vwbq");a.default.config.productionTip=!1,a.default.prototype.axios=S,a.default.prototype.$echarts=C.a,a.default.prototype.$d3=H,a.default.use(p.a);var L=window.innerWidth/1920,U=window.innerHeight/1688,W=L>U?U:L;a.default.prototype.baseScreenRate=W,new a.default({el:"#app",router:h,components:{App:r},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dd69fa7e34b5f63d3592.js.map