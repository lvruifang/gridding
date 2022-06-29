<template>
    <div class="problemData"></div>
</template>

<script>
export default {
  name: "problemData",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  methods: {
    setChart() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b"
            }
          }
        },
        grid: {
          left: "0",
          top: "30",
          right: "20",
          bottom: "10",
          containLabel: true
        },

        xAxis: [
          {
            type: "category",

            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20
          }
        ],

        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },

            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "标题名称",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,
            showSymbol: true,
            lineStyle: {
              normal: {
                color: "rgba(63, 255, 234, 1)",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new this.echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 168, 255, .5)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 168, 255, .1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 168, 255, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#3fffea",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [30, 60, 31, 99, 60, 60, 66, 38, 60, 29, 38, 44]
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
.problemData {
  width: 100%;
  height: 100%;
}
</style>