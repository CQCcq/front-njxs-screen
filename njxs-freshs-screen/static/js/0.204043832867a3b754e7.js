webpackJsonp([0],{"8nKY":function(t,e){},"9bBU":function(t,e,a){a("mClu");var i=a("FeBl").Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},C4MV:function(t,e,a){t.exports={default:a("9bBU"),__esModule:!0}},GHCH:function(t,e){},Gsh8:function(t,e){},IdYf:function(t,e){},VMvp:function(t,e){},bN03:function(t,e){},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var i,n=a("C4MV"),s=(i=n)&&i.__esModule?i:{default:i};e.default=function(t,e,a){return e in t?(0,s.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},lA6v:function(t,e){},mClu:function(t,e,a){var i=a("kM2E");i(i.S+i.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},uUni:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{sideleftpad:Math.ceil(30*this.baseScreenRate)+"px",textDate:[],timeDate:[],valDate:[],valDate1:[],valDate2:[]}},mounted:function(){var t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/situation/WEEK").then(function(e){var a=e.data.data;a.map(function(e){t.textDate.push(e.name)}),a[0].singleList.map(function(e){t.timeDate.push(e.date),t.valDate.push(e.value.toFixed(2))}),a[1].singleList.map(function(e){t.valDate1.push(e.value.toFixed(2))}),a[2].singleList.map(function(e){t.valDate2.push(e.value.toFixed(2))});var i=t.$echarts.init(document.getElementById("main")),n={color:["rgba(192,87,96,1)","rgba(186,126,182,1)","rgba(105,98,164,1)"],title:{text:"经营概况",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:12}},tooltip:{trigger:"axis"},legend:{data:t.textDate,textStyle:{color:"#fff"},left:"right",top:20},xAxis:[{type:"category",boundaryGap:!1,data:t.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{type:"value",splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"销售收入",type:"line",stack:"总量",symbol:"circle",smooth:!0,data:t.valDate,label:{show:!0,position:"top",color:"#fff"}},{name:"毛利",type:"line",stack:"总量",symbol:"circle",smooth:!0,data:t.valDate1,label:{show:!0,position:"top",color:"#fff"},itemStyle:{normal:{color:"rgba(221, 108, 81, 0.1)"}},lineStyle:{normal:{color:"rgba(221, 108, 81, 1)"}}},{name:"采购成本",type:"line",stack:"总量",symbol:"circle",smooth:!0,data:t.valDate2,label:{show:!0,position:"top",color:"#fff"},itemStyle:{normal:{color:"rgba(112, 106, 175, 0.1)"}},lineStyle:{normal:{color:"rgba(112, 106, 175, 1)"}}}]};i.setOption(n)}).catch(function(t){console.log("请求失败")})},methods:{},watch:{}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{attrs:{id:"main"}})])}]};var s=a("VU/8")(i,n,!1,function(t){a("bN03")},"data-v-f0afa258",null).exports,l={data:function(){return{dateValue:[],textValue:[],dateValue1:[],textValue1:[],topValue:[],textValue3:[],topValue1:[],topValuex:[],topValuex1:[],topValuey:[],topValuey1:[]}},mounted:function(){var t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/WEEK").then(function(e){console.log(e),t.topValue.push(e.data.data[0].onLineValue),t.topValue1.push(e.data.data[0].underLineValue),t.topValuex.push(e.data.data[1].onLineValue),t.topValuex1.push(e.data.data[1].underLineValue),t.dateValue=e.data.data[0],t.dateValue1=e.data.data[1],t.dateValue.singleList.map(function(e){t.textValue.push(e)}),t.dateValue1.singleList.map(function(e){t.textValue1.push(e)});var a=t.$echarts.init(document.getElementById("main1")),i={title:{text:"关键指标",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:12}},opcity:.4,color:["rgba(255, 114, 153, 0.7)","rgba(255, 186, 78, 0.7)"],legend:{orient:"horizontal",width:40,x:140,y:60,itemWidth:5,itemHeight:5,data:["线上"+t.topValue,"线下"+t.topValue1],textStyle:{color:"#fff",fontSize:12}},graphic:{type:"text",left:60,top:73,style:{text:t.dateValue.name,textAlign:"left",fill:"#fff",width:50,height:50}},series:[{type:"pie",center:["32%","60%"],radius:["50%","60%"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"10",fontWeight:"bold"}}}},data:[{value:30,name:"线上"+t.topValue},{value:10,name:"线下"+t.topValue1}]}]};a.setOption(i);var n=t.$echarts.init(document.getElementById("main2")),s={color:["rgba(244, 54, 255, 0.7)","rgba(255, 143, 216, 0.7)"],legend:{orient:"horizontal",width:40,x:140,y:60,itemWidth:5,itemHeight:5,data:["线上"+t.topValuex,"线下"+t.topValuex1],textStyle:{color:"#fff",fontSize:12}},graphic:{type:"text",left:60,top:73,style:{text:t.dateValue1.name,textAlign:"left",fill:"#fff",width:50,height:50}},series:[{type:"pie",center:["32%","60%"],radius:["50%","60%"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"10",fontWeight:"bold"}}}},data:[{value:30,name:"线上"+t.topValuex},{value:10,name:"线下"+t.topValuex1}]}]};n.setOption(s)}).catch(function(t){console.log("请求失败")});this.$echarts.init(document.getElementById("main3")).setOption({color:["rgba(74, 163, 112, 0.7)","rgba(183, 201, 175, 0.7)"],legend:{orient:"horizontal",width:40,x:140,y:60,itemWidth:5,itemHeight:5,data:["线上","线下"],textStyle:{color:"#fff",fontSize:12}},graphic:{type:"text",left:60,top:73,style:{text:"用户数",textAlign:"left",fill:"#fff",width:50,height:50}},series:[{type:"pie",center:["32%","60%"],radius:["50%","60%"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"10",fontWeight:"bold"}}}},data:[{value:30,name:"线上"},{value:10,name:"线下"}]}]})},methods:{rowClass:function(t,e){return"backcol"}},watch:{}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"main"},[a("div",{staticClass:"textd"},[a("div",{staticStyle:{width:"230px",height:"132px"},attrs:{id:"main1"}}),t._v(" "),a("div",{staticClass:"table-data"},[a("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:t.textValue}},[a("el-table-column",{attrs:{prop:"name",height:"30px",align:"center",width:"120px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"onLineValue",label:"线上",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"underLineValue",label:"线下",align:"center"}})],1)],1)]),t._v(" "),a("div",{staticClass:"textd"},[a("div",{staticStyle:{width:"230px",height:"132px"},attrs:{id:"main2"}}),t._v(" "),a("div",{staticClass:"table-data"},[a("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:t.textValue1}},[a("el-table-column",{attrs:{prop:"name",align:"center",height:"30px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"onLineValue",label:"线上",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"underLineValue",label:"线下",align:"center",width:"90px",height:"30px"}})],1)],1)]),t._v(" "),a("div",{staticClass:"textd"},[a("div",{staticStyle:{width:"230px",height:"132px"},attrs:{id:"main3"}}),t._v(" "),a("div",{staticClass:"table-data"},[a("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:t.textValue3}},[a("el-table-column",{attrs:{prop:"name",align:"center",height:"30px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"onLineValue",label:"线上",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"underLineValue",label:"线下",align:"center"}})],1)],1)])])])},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(t){a("8nKY")},"data-v-24dd67ea",null).exports,c={data:function(){return{names:"",timeDate:[],amountDate:[],amountDate1:[]}},mounted:function(){var t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/QUARTER/1").then(function(e){e.data.data.dataCurrentWeek.map(function(e){t.timeDate.push(e.time),t.amountDate.push(e.amount)}),e.data.data.dataPreWeek.map(function(e){t.amountDate1.push(e.amount)})}).catch(function(t){console.log("请求失败")});var e=this.$echarts.init(document.getElementById("saldata")),a={title:{text:"销售同环比",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:12}},tooltip:{trigger:"axis"},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月"],splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{type:"value",splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"蒸发量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7],barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FECC44"},{offset:1,color:"#EC6783"}])}}},{name:"降水量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7],barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5EFCF6"},{offset:1,color:"#5D27A0"}])}}}]};e.setOption(a)},methods:{},watch:{}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{attrs:{id:"saldata"}})])}]};var h=a("VU/8")(c,d,!1,function(t){a("Gsh8")},"data-v-793d5924",null).exports,p={data:function(){return{contentleft:{paddingLeft:Math.ceil(67*this.baseScreenRate)+"px"},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px"},headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",height:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",marginBottom:Math.ceil(10*this.baseScreenRate)+"px"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},contentTitle:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",color:"#537F8C",paddingBottom:Math.ceil(20*this.baseScreenRate)+"px"},leftContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"right"},rightContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},sendrate:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},customer:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},contentfirst:{color:"#537F8C",height:Math.ceil(19*this.baseScreenRate)+"px"},contentsecond:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#537F8C",paddingTop:Math.ceil(45*this.baseScreenRate)+"px"},cententRight:{paddingRight:Math.ceil(50*this.baseScreenRate)+"px"},echartstyle:{width:Math.ceil(77*this.baseScreenRate)+"px",height:Math.ceil(77*this.baseScreenRate)+"px",margin:"0 auto"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1,responseDate:{avgEfficiency:"",personEfficiency:"",distributionRate:"",customerRate:""}}},components:{},mounted:function(){this.$nextTick(function(){var t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency").then(function(e){e.data.data&&(t.responseDate=e.data.data,t.initleftecharts("main-first",e.data.data.distributionRate),t.initleftecharts("main-two",e.data.data.customerRate))}).catch(function(t){})})},methods:{clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(t){this.opacitys=t},initleftecharts:function(t,e){var a=this.$echarts.init(document.getElementById(t)),i={grid:{left:0,bottom:0,top:0,right:0},title:{text:e,x:"center",y:"center",textStyle:{fontWeight:"normal",color:"main"==t?"#49CDD9":"#C551A3",fontSize:Math.ceil(18*this.baseScreenRate)}},series:[{color:"main-first"==t?["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1C0C99"},{offset:1,color:"#49F9FF"}])]:["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BA51E9"},{offset:1,color:"#E852B0"}])],name:"访问来源",type:"pie",radius:["60%","80%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"}]}]};a.setOption(i)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"efficiency-page",style:t.pagestyle},[a("div",{staticClass:"head",style:t.headstyle},[a("h4",{style:t.headtitle},[t._v("经营效率")]),t._v(" "),a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:t.opacitys},on:{click:function(e){t.clickdit()},mouseover:function(e){t.hoveredit(1)},mouseout:function(e){t.hoveredit(0)}}})]),t._v(" "),a("div",{staticClass:"content-left",style:t.contentleft},[a("div",{style:t.contentTitle},[t._v("线下")]),t._v(" "),a("div",{staticClass:"contentfirst",style:t.contentfirst},[a("span",{style:t.leftContent},[t._v("坪效")]),a("span",{style:t.leftContent},[t._v(t._s(t.responseDate.avgEfficiency))])]),t._v(" "),a("div",{staticClass:"contentsecond",style:t.contentsecond},[a("span",{style:t.leftContent},[t._v("人效")]),a("span",{style:t.leftContent},[t._v(t._s(t.responseDate.personEfficiency))])])]),t._v(" "),a("div",{staticClass:"content-right",style:t.cententRight},[a("div",{style:t.contentTitle},[t._v("线下")]),t._v(" "),a("div",{staticClass:"contentfirst",style:t.contentfirst},[a("span",{style:t.sendrate},[t._v("配送及时率")]),a("span",{style:t.customer},[t._v("客户满意度")])]),t._v(" "),a("div",{staticClass:"contentfirst"},[a("span",[a("div",{style:t.echartstyle,attrs:{id:"main-first"}})]),t._v(" "),a("span",[a("div",{style:t.echartstyle,attrs:{id:"main-two"}})])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:t.formstyle},[t._m(0),t._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(e){t.clickdit()}}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("table",{staticStyle:{color:"#ffffff"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[t._v("坪效")]),a("td",[a("input",{attrs:{type:"number"}})])]),t._v(" "),a("tr",[a("td",[t._v("人效")]),a("td",[a("input",{attrs:{type:"number"}})])]),t._v(" "),a("tr",[a("td",[t._v("配送及时率")]),a("td",[a("input",{attrs:{type:"number"}})])]),t._v(" "),a("tr",[a("td",[t._v("客户满意度")]),a("td",[a("input",{attrs:{type:"number"}})])])]),t._v(" "),a("button",[t._v("确定")])])}]};var f=a("VU/8")(p,u,!1,function(t){a("lA6v")},"data-v-6dba6094",null).exports,m=a("bOdI"),y=a.n(m),b={data:function(){return{headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px"},pagestyle:{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},echartstyle:{width:"80%",height:"90%",margin:"0 auto"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},submitefficty:{padding:"1% 2%",fontSize:Math.ceil(18*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1}},components:{},mounted:function(){this.$nextTick(function(){var t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition").then(function(e){if(e.data.data){t.responseDate=e.data.data;var a=[],i=[];e.data.data.forEach(function(t,e){-1==i.indexOf(t.businessName)&&i.push(t.businessName),-1==a.indexOf(t.targetName)&&a.push({text:t.targetName,max:"100"})}),t.initleftecharts("efficienct-radar",i,a)}}).catch(function(t){})})},methods:{clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(t){this.opacitys=t},initleftecharts:function(t,e){var a,i=this.$echarts.init(document.getElementById(t)),n={color:["rgba(192,87,96,1)","rgba(186,126,182,1)","rgba(105,98,164,1)"],legend:{show:!0,icon:"circle",bottom:0,center:0,itemWidth:Math.ceil(16*this.baseScreenRate),itemHeight:Math.ceil(16*this.baseScreenRate),textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#ffffff"},data:e},radar:[(a={indicator:[{text:"指标一",max:100},{text:"指标二",max:100},{text:"指标三",max:100},{text:"指标四",max:100},{text:"指标五",max:100},{text:"指标六",max:100},{text:"指标七",max:100}],textStyle:{color:"red"},center:["50%","50%"],radius:Math.ceil(120*this.baseScreenRate),startAngle:90,splitNumber:3,name:{formatter:"{value}",textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#3C6E81"}},splitArea:{areaStyle:{color:["transparent","transparent)","rgba(114, 172, 209, 0)","transparent","rgba(114, 172, 209, 0)"]}},axisLine:{lineStyle:{color:"#4C545C"}}},y()(a,"axisLine",{lineStyle:{type:"dashed",color:"#4C545C",width:Math.ceil(5*this.baseScreenRate)}}),y()(a,"splitLine",{lineStyle:{type:"dashed",color:"#4C545C",width:Math.ceil(5*this.baseScreenRate)}}),a)],series:[{name:"雷达图",type:"radar",itemStyle:{emphasis:{lineStyle:{width:4}}},data:[{name:"宁家鲜生",value:[50,50,50,50,50,80,90],areaStyle:{normal:{color:"rgba(192,87,96,0.4)"}},symbolSize:2.5,itemStyle:{normal:{borderColor:"rgba(192,87,96,1)",borderWidth:2.5}},lineStyle:{normal:{opacity:.5}}},{name:"河马鲜生",value:[30,60,55,60,70,80,90],symbolSize:2.5,itemStyle:{normal:{borderColor:"rgba(186,126,182,1)",borderWidth:2.5}},areaStyle:{normal:{color:"rgba(186,126,182,0.5)"}},lineStyle:{normal:{opacity:.5}}},{name:"沃尔玛",value:[30,60,55,60,70,80,90],symbolSize:2.5,itemStyle:{normal:{borderColor:"rgba(105,98,164,1)",borderWidth:2.5}},areaStyle:{normal:{color:"rgba(105,98,164,0.5)"}},lineStyle:{normal:{opacity:.5}}}]}]};i.setOption(n)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"efficiency-page",style:t.pagestyle},[a("div",{staticClass:"head"},[a("h4",{style:t.headstyle},[t._v("竞争力分析")]),t._v(" "),a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:t.opacitys},on:{click:function(e){t.clickdit()},mouseover:function(e){t.hoveredit(1)},mouseout:function(e){t.hoveredit(0)}}})]),t._v(" "),a("div",{style:t.echartstyle,attrs:{id:"efficienct-radar"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:t.formstyle},[t._m(0),t._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(e){t.clickdit()}}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("table",{staticStyle:{color:"#ffffff"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td"),a("td",[t._v("指标一")]),a("td",[t._v("指标二")]),a("td",[t._v("指标三")]),a("td",[t._v("指标四")]),a("td",[t._v("指标五")]),a("td",[t._v("指标六")]),a("td",[t._v("指标七")])]),t._v(" "),a("tr",[a("td",[t._v("河马鲜生")]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})])]),t._v(" "),a("tr",[a("td",[t._v("宁家鲜生")]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})])]),t._v(" "),a("tr",[a("td",[t._v("沃尔玛")]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})])]),t._v(" "),a("tr",[a("td",[t._v("等等")]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})]),a("td",[a("input",{attrs:{type:"number"}})])])]),t._v(" "),a("button",[t._v("确定")])])}]};var g={data:function(){return{sideleftpad:Math.ceil(25*this.baseScreenRate)+"px",sidetoppad:Math.ceil(25*this.baseScreenRate)+"px",manage:{height:Math.ceil(454*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px"},target:{height:Math.ceil(495*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},rightside:{paddingLeft:Math.ceil(25*this.baseScreenRate)+"px",paddingTop:Math.ceil(25*this.baseScreenRate)+"px"},sell:{width:Math.ceil(633*this.baseScreenRate)+"px",height:Math.ceil(244*this.baseScreenRate)+"px"},efficiency:{height:Math.ceil(217*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},competive:{height:Math.ceil(463*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"}}},components:{efficiency:f,competive:a("VU/8")(b,v,!1,function(t){a("VMvp")},"data-v-561550a2",null).exports,BusinessProfile:s,KeyIndicators:o,Sales:h}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editecharts"},[a("div",{staticClass:"leftside",style:{paddingLeft:t.sideleftpad,paddingTop:t.sidetoppad}},[a("div",{staticClass:"manage",style:t.manage},[a("BusinessProfile")],1),t._v(" "),a("div",{staticClass:"target",style:t.target},[a("KeyIndicators")],1)]),t._v(" "),a("div",{staticClass:"rightside",style:t.rightside},[a("div",{staticClass:"sell",style:t.sell},[a("Sales")],1),t._v(" "),a("div",{staticClass:"efficiency",style:t.efficiency},[a("efficiency")],1),t._v(" "),a("div",{staticClass:"competive",style:t.competive},[a("competive")],1)])])},staticRenderFns:[]};var S={data:function(){return{}},components:{editecharts:a("VU/8")(g,x,!1,function(t){a("GHCH")},"data-v-fa83b248",null).exports}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("editecharts")],1)},staticRenderFns:[]};var C=a("VU/8")(S,_,!1,function(t){a("IdYf")},"data-v-73dff00c",null);e.default=C.exports}});
//# sourceMappingURL=0.204043832867a3b754e7.js.map