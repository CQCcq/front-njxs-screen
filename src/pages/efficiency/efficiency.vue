<template>
  <div class="efficiency-page" :style="pagestyle" v-loading="loading">
        <div class="head" :style="headstyle">
            <h4 :style="headtitle">经营效率</h4>
            <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}"
            @click="clickdit()" @mouseover="hoveredit(1)"   @mouseout="hoveredit(0)" v-if="role=='manage'"></span>
        </div>
        <div class="content-left" :style="contentleft">
            <!-- <div :style="contentTitle">线下</div> -->
            <div class="contentfirst" :style="contentfirst">
              <span :style="leftContent">坪效</span>
              <span :style="leftContent">{{responseDate.avgEfficiency+" 元/平"}}</span>
            </div>
            <div class="contentsecond" :style="contentsecond">
              <span :style="leftContent">人效</span>
              <span :style="leftContent">{{responseDate.personEfficiency+" 元/人"}}</span>
            </div>
        </div>
        <div class="content-right" :style="cententRight">
            <!-- <div :style="contentTitle">线下</div> -->
            <div class="contentfirst" :style="rightcontentfirst"><span :style="sendrate">配送及时率</span><span :style="customer">客户满意度</span></div>
            <div class="contentfirst" style="height:79%;">
                <span style="height:96%;"><div id="main-first" :style="echartstyle"></div></span>
                <span style="height:96%;"><div id="main-two" :style="echartstyle"></div></span>
            </div>
        </div>

        <div v-if="role=='manage'" v-show="hidefromfalg" class="hideform" :style="formstyle">
            <form action="" ref="forms" novalidate>
              <table border="1" cellpadding=0 cellspacing=0 style="color:#ffffff;">
                <tr><td>坪效</td><td><input name="avgEfficiency" type="number" v-model="responseDate.avgEfficiency">元/平</td></tr>
                <tr><td>人效</td><td><input name="personEfficiency" type="number" v-model="responseDate.personEfficiency">元/人</td></tr>
                <tr><td>配送及时率</td><td><input name="distributionRate" type="number" v-model="responseDate.distributionRate">%</td></tr>
                <tr><td>客户满意度</td><td><input name="customerRate" type="number" v-model="responseDate.customerRate">%</td></tr>
              </table>
              <input @click.stop="submitefficty" class="submit" type="button" readonly="readonly" value="确定" />
            </form>
            <span class="closeform el-icon-close" @click="clickdit()"></span>
        </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["role", "propsendrate"],
  data() {
    return {
      loading: "true",
      contentleft: {
        // paddingLeft: Math.ceil(67 * this.baseScreenRate) + "px"
      },
      headtitle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px",
        fontWeight: "normal"
      },
      headstyle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px",
        height: Math.ceil(22 * this.baseScreenRate) + "px",
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        marginBottom: Math.ceil(15 * this.baseScreenRate) + "px"
      },
      pagestyle: {
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px"
      },
      contentTitle: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        color: "#537F8C",
        paddingBottom: Math.ceil(20 * this.baseScreenRate) + "px"
      },
      leftContent: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "right",
        float: "left"
      },
      rightContent: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "center"
      },
      sendrate: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "center"
        // width:Math.ceil(100 * this.baseScreenRate) + "px",
        // marginRight:Math.ceil(60 * this.baseScreenRate) + "px",
      },
      customer: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "center"
        // width:Math.ceil(100 * this.baseScreenRate) + "px",
      },
      rightcontentfirst: {
        color: "#537F8C",
        height: Math.ceil(19 * this.baseScreenRate) + "px",
        height: "20%"
      },
      contentfirst: {
        color: "#537F8C",
        height: Math.ceil(19 * this.baseScreenRate) + "px"
      },
      contentsecond: {
        minHeight: Math.ceil(19 * this.baseScreenRate) + "px",
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        color: "#537F8C",
        paddingTop: Math.ceil(45 * this.baseScreenRate) + "px",
        clear: "both"
      },
      cententRight: {
        paddingRight: Math.ceil(50 * this.baseScreenRate) + "px"
      },
      echartstyle: {
        // width: Math.ceil(120 * this.baseScreenRate) + "px",
        // height: Math.ceil(120 * this.baseScreenRate) + "px",
        margin: "0 auto",
        height: "100%",
        width: "100%"
      },
      formstyle: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(30 * this.baseScreenRate) + "px"
      },
      // submitefficty: {
      //   padding: "1% 2%",
      //   fontSize: Math.ceil(18 * this.baseScreenRate) + "px"
      // },
      opacitys: 0,
      hidefromfalg: false,
      responseDate: {
        avgEfficiency: "",
        personEfficiency: "",
        distributionRate: "",
        customerRate: ""
      }
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      this.initdata();
    });
  },
  methods: {
    //初始化
    initdata() {
      var that = this;
      this.axios
        .get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency")
        .then(res => {
          that.loading = false;
          if (res.data.data) {
            that.responseDate = res.data.data;
            let rate = [
              [
                {
                  value: 100 - Number(res.data.data.distributionRate),
                  name: ""
                },
                { value: res.data.data.distributionRate, name: "配送及时率" }
              ],
              [
                { value: 100 - Number(res.data.data.customerRate), name: "" },
                { value: res.data.data.customerRate, name: "客户满意度" }
              ]
            ];
            that.initleftecharts(
              "main-first",
              // res.data.data.distributionRate + "%",
              that.propsendrate + "%",
              rate[0]
            );
            that.initleftecharts(
              "main-two",
              res.data.data.customerRate + "%",
              rate[1]
            );
          }
        });
    },
    //提交
    submitefficty: function() {
      this.loading = true;
      this.axios
        .post(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency",
          {
            avgEfficiency: this.responseDate.avgEfficiency,
            //  /平/g.test(String(this.responseDate.avgEfficiency))?
            // this.responseDate.avgEfficiency:
            // this.responseDate.avgEfficiency,
            personEfficiency: this.responseDate.personEfficiency,
            //  /人/g.test(String(this.responseDate.personEfficiency))?
            // this.responseDate.personEfficiency:
            // this.responseDate.personEfficiency+"/人",
            distributionRate: this.responseDate.distributionRate,
            //  /%/g.test(String(this.responseDate.distributionRate))?
            // this.responseDate.distributionRate:
            // this.responseDate.distributionRate+"%",
            customerRate: this.responseDate.customerRate
            // /%/g.test(String(this.responseDate.customerRate))?
            // this.responseDate.customerRate:
            // this.responseDate.customerRate+"%"
          }
        )
        .then(res => {
          if (res.data.status == "SUCCESS") {
            this.clickdit();
            this.initdata();
          }
        });
    },
    clickdit: function() {
      this.hidefromfalg = !this.hidefromfalg;
    },
    hoveredit: function(num) {
      this.opacitys = num;
    },
    initleftecharts: function(id, data, rate) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: 0,
          bottom: 0,
          top: 0,
          right: 0
        },
        title: {
          text: data,
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: id == "main" ? "#49CDD9" : "#C551A3",
            fontSize: Math.ceil(16 * this.baseScreenRate)
          }
        },
        series: [
          {
            color:
              id == "main-first"
                ? [
                    "#4f4f56",
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#1C0C99" },
                      { offset: 1, color: "#49F9FF" }
                    ])
                  ]
                : [
                    "#4f4f56",
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#BA51E9" },
                      { offset: 1, color: "#E852B0" }
                    ])
                  ],
            name: "访问来源",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["70%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: rate
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="less">
@media (max-width: 756px) {
  .efficiency .efficiency-page {
    padding: 0 !important;
    .head {
      padding-left: 0 !important;
    }
  }
  .contentsecond {
    padding-top: 0px !important;
  }
  .contentfirst {
    height: 0px;
  }
  .content-left {
    justify-content: space-around !important;
  }
  .content-right {
    padding: 0 !important;
  }
  #main-two,
  #main-first {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
}

.efficiency-page {
  position: relative;
  // padding-right: 10px;
  width: 100%;
  height: 100%;
  clear: both;
  min-width: 0;
  overflow: hidden;
  background-color: #21202e;
  .head {
    max-height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #75becb;
    span:last-child {
      transform: rotate(90deg);
    }
  }
  .content-left {
    width: 40%;
    height: 80%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .contentfirst {
      span:first-child {
        color: #ffffff;
        width: 30%;
      }
      span {
        display: inline-block;
        width: 70%;
        text-align: left;
        color: #ed6b80;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .contentsecond {
      span:first-child {
        color: #ffffff;
        width: 30%;
      }
      span {
        display: inline-block;
        width: 70%;
        text-align: left;
        color: #ed6b80;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .content-right {
    max-width: 60%;
    width: 55%;
    height: 80%;
    float: right;
    text-align: center;
    overflow: hidden;
    .contentfirst {
      span {
        float: left;
        width: 50%;
        text-align: center;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .contentsecond {
      span {
        float: left;
        width: 50%;
        text-align: center;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .hideform {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #21202e;
    //   padding-top:5%;
    span {
      color: #ffffff;
      margin-right: 10px;
      cursor: pointer;
    }
    form {
      width: 90%;
      min-height: 0;
      margin: 0 auto;
      //   border:1px solid #fff;
      // .form-group {
      //   width: 100%;
      //   padding-bottom: 1%;
      //   label,
      //   input {
      //     width: 49%;
      //     display: inline-block;
      //   }
      //   label {
      //     text-align: right;
      //   }
      //   .submitefficty.el-button.is-plain{

      //   }
      // }
      table {
        width: 100%;
        td {
          width: 50%;
          input {
            background: none;
            color: #ffffff;
            border: 0;
            width: 60%;
          }
        }
      }
      .submit {
        width: 100%;
        border-radius: 4px;
        background: #537f8c;
        outline: 0;
        box-shadow: none;
        border: 1px solid transparent;
        color: #ffffff;
      }
    }
  }
}
</style>
