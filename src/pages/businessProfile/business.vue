<template>
    <div class="content"  :style="contentstyle" v-loading="loading">
         <div id = 'main' style="box-shadow:none;border:0px;"> </div>
    </div>
</template>
<script>
export default {
  props: ["timeRange"],
  watch: {
    timeRange: function(val) {
      this.initdata();
    }
  },
  data() {
    return {
      loading:"true",
      contentstyle: {
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px",
        paddingLeft: "2%",
        paddingRight: "2%"
      },
      sideleftpad: Math.ceil(30 * this.baseScreenRate) + "px",
      textDate: [],
      timeDate: [],
      valDate: [],
      valDate1: [],
      valDate2: []
    };
  },
   mounted() {
    this.$nextTick(function() {
      this.initdata();
    });
  },
  methods: {
    initdata() {
      let that = this;
      this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/situation/" +
            this.timeRange.time+"/"+ this.timeRange.change
        )
        .then(res => {
          that.loading=false;
          that.textDate = [];
          that.timeDate = [];
          that.valDate = [];
          that.valDate1 = [];
          that.valDate2 = [];
          let ress = res.data.data;
          ress.map(val => {
            that.textDate.push(val.name);
          });
          ress[0].singleList.map(val => {
            that.timeDate.push(val.date);
            that.valDate.push(val.value);
          });
          ress[1].singleList.map(val => {
            that.valDate1.push(val.value);
          });
          ress[2].singleList.map(val => {
            that.valDate2.push(val.value);
          });
          // 基于准备好的dom，初始化echarts实例
          that.$echarts.dispose(document.getElementById("main"));
          let myMain = that.$echarts.init(document.getElementById("main"));
          // 指定图表的配置项和数据
          let option = {
            color: [
              "rgba(192,87,96,1)",
              "rgba(186,126,182,1)",
              "rgba(105,98,164,1)"
            ],
            title: {
              text: "经营概况",
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#75becb",
                fontSize: Math.ceil(22 * that.baseScreenRate)
              }
            },
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: that.textDate,
              textStyle: {
                color: "#fff"
              },
              left: "right",
              icon: "circle"
            },
            xAxis: [
              {
                axisLabel: {
                  show: true,
                  interval: function(index, value) {
                    if (that.timeRange.time == "WEEK") {
                      return true;
                    }
                    if (that.timeRange.time == "MONTH") {
                      if (index % 4 == 0) {
                        return true;
                      }
                      return false;
                    }
                    if (that.timeRange.time == "QUARTER") {
                      if (index % 14 == 0) {
                        return true;
                      }
                      return false;
                    }
                  }
                },
                type: "category",
                boundaryGap: false,
                data: that.timeDate,
                splitLine: {
                  lineStyle: {
                    // 使用深浅的间隔色
                    color: ["#21202E"]
                  }
                },
                nameTextStyle: {
                  color: ["#21202E"]
                },
                axisLine: {
                  lineStyle: {
                    color: "#75becb"
                    // width:1,//这里是为了突出显示加上的
                  }
                }
              }
            ],
            yAxis: [
              {
                name: "单位(元)",
                type: "value",
                splitLine: {
                  lineStyle: {
                    color: "#21202E"
                  }
                },
                nameTextStyle: {
                  color: "#75becb"
                },
                axisLine: {
                  lineStyle: {
                    color: "#75becb"
                  }
                }
              }
            ],
            grid: {
              // top: "4%",
              left: "2%",
              right: "6%",
              bottom: "3%",
              containLabel: true
            },
            series: [
              {
                name: "销售收入",
                type: "line",
                // stack: "总量",
                symbol: "circle",
                smooth: true,
                smoothMonotone: "none",
                data: that.valDate,
                areaStyle: { opacity: 0.4 },
                label: {
                  show: true,
                  position: "top",
                  color: "#fff",
                  formatter: function(d) {
                    if (that.timeRange.time == "WEEK") {
                      return d.data;
                    }
                    if (that.timeRange.time == "MONTH") {
                      if (d.dataIndex % 4 == 0) {
                        return d.data;
                      }
                      return "";
                    }
                    if (that.timeRange.time == "QUARTER") {
                      if (d.dataIndex % 14 == 0) {
                        return d.data;
                      }
                      return "";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "rgba(61, 122, 153, 0.7)"
                  }
                },
                lineStyle: {
                  normal: {
                    color: "rgba(61, 122, 153, 1)"
                  }
                }
              },
              {
                name: "毛利",
                type: "line",
                // stack: "总量",
                symbol: "circle",
                smooth: true,
                data: that.valDate1,
                areaStyle: { opacity: 0.4 },
                label: {
                  show: true,
                  position: "top",
                  color: "#fff",
                  formatter: function(d) {
                    if (that.timeRange.time == "WEEK") {
                      return d.data;
                    }
                    if (that.timeRange.time == "MONTH") {
                      if (d.dataIndex % 4 == 0) {
                        return d.data;
                      }
                      return "";
                    }
                    if (that.timeRange.time == "QUARTER") {
                      if (d.dataIndex % 14 == 0) {
                        return d.data;
                      }
                      return "";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "rgba(221, 108, 81, 0.7)"
                  }
                },
                lineStyle: {
                  normal: {
                    color: "rgba(221, 108, 81, 1)"
                  }
                }
              },
              {
                name: "采购成本",
                type: "line",
                // stack: "总量",
                symbol: "circle",
                smooth: true,
                data: that.valDate2,
                areaStyle: { opacity: 0.4 },
                label: {
                  show: true,
                  position: "bottom",
                  color: "#fff",
                  formatter: function(d) {
                    if (that.timeRange.time == "WEEK") {
                      return d.data;
                    }
                    if (that.timeRange.time == "MONTH") {
                      if (d.dataIndex % 4 == 0) {
                        return d.data;
                      }
                      return "";
                    }
                    if (that.timeRange.time == "QUARTER") {
                      if (d.dataIndex % 14 == 0) {
                        return d.data;
                      }
                      return "";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "rgba(112, 106, 175, 0.7)"
                  }
                },
                lineStyle: {
                  normal: {
                    color: "rgba(112, 106, 175, 1)"
                  }
                }
              }
            ]
          };

          // 使用刚指定的配置项和数据显示图表。
          myMain.setOption(option);
        })
        .catch(res => {
          console.log("请求失败");
        });
    }
  }
};
</script>
<style lang="less" scoped>
@media (max-width: 756px) {
  .manage .content{
    padding:0 !important;
  }
}
.content {
  width: 100%;
  height: 100%;
}
#main {
  width: 100%;
  height: 100%;
  border: 1px solid #21202e;
  box-shadow: 4px 0px 0px rgba(61, 58, 91, 0.08);
}
</style>


