<template>
    <div class="ageDistribution"></div>
</template>

<script>
export default {
  name: "ageDistribution",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  methods: {
    setChart() {
      let option = {
        title: {
          text: this.data.title,
          top: this.$fontSize(16),
                    left:this.$fontSize(22),
          textStyle: {
            color: "#60dbdc",
            fontSize: this.$fontSize(20),
            fontWeight: "normal",
            fontFamily: "Microsoft JhengHei"
          }
        },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
          backgroundColor: "rgba(83,93,105,0.8)",
          borderColor: "#535b69",
          borderRadius: 8,
          borderWidth: 2,
          padding: [5, 10],
          formatter: function(params, ticket, callback) {
            var res = "";
            for (var i = 0, l = params.length; i < l; i++) {
              res +=
                "" + params[i].seriesName + " : " + params[i].value + "<br>";
            }
            return res;
          },
          axisPointer: {
            type: "line",
            lineStyle: {
              type: "dashed",
              color: "#ffff00"
            }
          }
        },
        grid: {
          top: "50",
          left: "50",
          right: "40",
          bottom: "40",

          textStyle: {
            color: "#fff"
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#4e5884"
              }
            },
            axisLabel: {
              interval: 0,
              fontSize: this.$fontSize(14),
              fontFamily: "Microsoft JhengHei",
              color: "#fff",
              formatter: function(value) {
                return value;
              }
            },
            splitArea: {
              show: false
            },
            data: this.data.areaNameS,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            offset: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#4e5884"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#4e5884"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              fontSize: 14,
              color: "#fff",
              fontFamily: "Microsoft JhengHei"
            },
            splitArea: {
              show: false
            },

          }
        ],

        series: [
          {
            name: "党员年龄结构",
            type: "bar",

            barGap: "10%",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#01b1ff" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#033cff" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                barBorderRadius: 15
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#60dbdc",
                  fontSize: 10,
                  fontFamily: "Microsoft JhengHei"
                }
              }
            },
            data: this.data.data,
            barWidth: 14
          }
        ]
      };
      let myChart = this.$echarts(this.$el);
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    }
  },
  mounted() {
    this.setChart();
  }
};
</script>

<style  scoped>
.ageDistribution {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/gridT3Bg.png") #0b0849 no-repeat center
    center;
  background-size: 100% 100%;
}
</style>