webpackJsonp([0],{IdYf:function(t,e){},"K/qc":function(t,e){},fW4S:function(t,e){},uUni:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{headstyle:{fontSize:Math.ceil(30*this.baseScreenRate)+"px",height:Math.ceil(44*this.baseScreenRate)+"px"},pagestyle:{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},contentTitle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#537F8C",paddingBottom:Math.ceil(20*this.baseScreenRate)+"px"},leftContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px"},contentfirst:{color:"#537F8C"},contentsecond:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#537F8C",paddingTop:Math.ceil(50*this.baseScreenRate)+"px"},cententRight:{paddingRight:Math.ceil(50*this.baseScreenRate)+"px"},echartstyle:{width:"80%",height:"80%",margin:"0 auto"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1}},components:{},mounted:function(){this.$nextTick(function(){this.initleftecharts("main"),this.initleftecharts("maintwo")})},methods:{clickdit:function(){console.log(1111),this.hidefromfalg=!this.hidefromfalg},hoveredit:function(t){this.opacitys=t},initleftecharts:function(t){var e=this.$echarts.init(document.getElementById(t)),a={title:{text:"80%",x:"center",y:"center",textStyle:{fontWeight:"normal",color:"main"==t?"#49CDD9":"#C551A3",fontSize:Math.ceil(18*this.baseScreenRate)}},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]};e.setOption(a)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"efficiency-page",style:t.pagestyle},[a("div",{staticClass:"head",style:t.headstyle},[a("h4",[t._v("经营效率")]),t._v(" "),a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:t.opacitys},on:{click:function(e){t.clickdit()},mouseover:function(e){t.hoveredit(1)},mouseout:function(e){t.hoveredit(0)}}})]),t._v(" "),a("div",{staticClass:"content-left"},[a("div",{style:t.contentTitle},[t._v("线下")]),t._v(" "),a("div",{staticClass:"contentfirst",style:t.contentfirst},[a("span",{style:t.leftContent},[t._v("均效")]),a("span",{style:t.leftContent},[t._v("888/平")])]),t._v(" "),a("div",{staticClass:"contentsecond",style:t.contentsecond},[a("span",{style:t.leftContent},[t._v("人效")]),a("span",{style:t.leftContent},[t._v("888/人")])])]),t._v(" "),a("div",{staticClass:"content-right",style:t.cententRight},[a("div",{style:t.contentTitle},[t._v("线下")]),t._v(" "),a("div",{staticClass:"contentfirst",style:t.contentfirst},[a("span",{style:t.leftContent},[t._v("配送及时率")]),a("span",{style:t.leftContent},[t._v("客户满意度")])]),t._v(" "),a("div",{staticClass:"contentfirst",style:t.contentfirst},[a("span",[a("div",{style:t.echartstyle,attrs:{id:"main"}})]),t._v(" "),a("span",[a("div",{style:t.echartstyle,attrs:{id:"maintwo"}})])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:t.formstyle},[a("form",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{"text-align":"right","padding-top":"4%"}},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""}},[t._v("确定")])],1)]),t._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(e){t.clickdit()}}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"average"}},[e("span",[this._v("均效")])]),this._v(" "),e("input",{attrs:{id:"average",type:"number"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"people"}},[e("span",[this._v("人效")])]),this._v(" "),e("input",{attrs:{id:"people",type:"number"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"distribute"}},[e("span",[this._v("配送及时率")])]),this._v(" "),e("input",{attrs:{id:"distribute",type:"number"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customer"}},[e("span",[this._v("客户满意度")])]),this._v(" "),e("input",{attrs:{id:"customer",type:"number"}})])}]};var n={data:function(){return{headstyle:{fontSize:Math.ceil(30*this.baseScreenRate)+"px"},pagestyle:{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},echartstyle:{width:"100%",height:"100%",margin:"0 auto",marginTop:"-5%"}}},components:{},mounted:function(){this.$nextTick(function(){this.initleftecharts("efficienct-radar")})},methods:{initleftecharts:function(t){var e={color:["rgba(245, 166, 35, 1)","rgba(19, 173, 255, 1)"],legend:{show:!0,icon:"circle",bottom:0,center:0,itemWidth:5,itemHeight:5,textStyle:{fontSize:14,color:"#ade3ff"},data:["宁家鲜生","河马鲜生"]},radar:[{indicator:[{text:"指标一",max:100},{text:"指标二",max:100},{text:"指标三",max:100},{text:"指标四",max:100},{text:"指标五",max:100},{text:"指标六",max:100},{text:"指标七",max:100}],textStyle:{color:"red"},center:["50%","50%"],radius:90,startAngle:90,splitNumber:3,backgroundColor:{image:"http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png"},name:{formatter:"{value}",textStyle:{fontSize:14,color:"#ffffff"}},splitArea:{areaStyle:{color:["transparent","transparent)","rgba(114, 172, 209, 0)","transparent","rgba(114, 172, 209, 0)"]}},axisLine:{lineStyle:{color:"#2770ab"}},splitLine:{lineStyle:{color:"#2770ab"}}}],series:[{name:"雷达图",type:"radar",itemStyle:{emphasis:{lineStyle:{width:4}}},data:[{name:"宁家鲜生",value:[50,50,50,50,50,80,90],areaStyle:{normal:{color:"rgba(245, 166, 35, 0.4)"}},symbolSize:2.5,itemStyle:{normal:{borderColor:"rgba(245, 166, 35, 1)",borderWidth:2.5}},lineStyle:{normal:{opacity:.5}}},{name:"河马鲜生",value:[30,60,55,60,70,80,90],symbolSize:2.5,itemStyle:{normal:{borderColor:"rgba(19, 173, 255, 1)",borderWidth:2.5}},areaStyle:{normal:{color:"rgba(19, 173, 255, 0.5)"}},lineStyle:{normal:{opacity:.5}}}]}]};this.$echarts.init(document.getElementById(t)).setOption(e)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"efficiency-page",style:this.pagestyle},[e("div",{staticClass:"head"},[e("h4",{style:this.headstyle},[this._v("竞争力分析")]),e("span",{staticClass:"el-icon-more"})]),this._v(" "),e("div",{style:this.echartstyle,attrs:{id:"efficienct-radar"}})])},staticRenderFns:[]};var c={data:function(){return{sideleftpad:Math.ceil(40*this.baseScreenRate)+"px",sidetoppad:Math.ceil(40*this.baseScreenRate)+"px",manageheight:Math.ceil(723*this.baseScreenRate)+"px",target:{height:Math.ceil(745*this.baseScreenRate)+"px",marginTop:Math.ceil(40*this.baseScreenRate)+"px"},rightside:{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(40*this.baseScreenRate)+"px"},sell:{height:Math.ceil(414*this.baseScreenRate)+"px"},efficiency:{height:Math.ceil(368*this.baseScreenRate)+"px",marginTop:Math.ceil(40*this.baseScreenRate)+"px"},competive:{height:Math.ceil(646*this.baseScreenRate)+"px",marginTop:Math.ceil(40*this.baseScreenRate)+"px"}}},components:{efficiency:a("VU/8")(i,s,!1,function(t){a("wYRg")},"data-v-742b1978",null).exports,competive:a("VU/8")(n,r,!1,function(t){a("fW4S")},"data-v-7e35a009",null).exports}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editecharts"},[a("div",{staticClass:"leftside",style:{paddingLeft:t.sideleftpad,paddingTop:t.sidetoppad}},[a("div",{staticClass:"manage",style:{height:t.manageheight}}),t._v(" "),a("div",{staticClass:"target",style:t.target})]),t._v(" "),a("div",{staticClass:"rightside",style:t.rightside},[a("div",{staticClass:"sell",style:t.sell}),t._v(" "),a("div",{staticClass:"efficiency",style:t.efficiency},[a("efficiency")],1),t._v(" "),a("div",{staticClass:"competive",style:t.competive},[a("competive")],1)])])},staticRenderFns:[]};var o={data:function(){return{}},components:{editecharts:a("VU/8")(c,l,!1,function(t){a("K/qc")},"data-v-604839b8",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("editecharts")],1)},staticRenderFns:[]};var d=a("VU/8")(o,h,!1,function(t){a("IdYf")},"data-v-73dff00c",null);e.default=d.exports},wYRg:function(t,e){}});
//# sourceMappingURL=0.332ca83bd0aad573895c.js.map