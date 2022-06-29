<template>
    <div class="populationIncome"></div>
</template>

<script>
export default {
  name: "populationIncome",
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
            type: "shadow"
          }
        },
        grid: {
          left: "0%",
          top: "20",
          right: "0%",
          bottom: "10",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.data.data.name,
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 2,
                type: "solid"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 5,
              textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "12"
              }
            },
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
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
            type: "line",
            smooth: true,
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
                      color: "rgba(0, 168, 255, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 168, 255, 0.1)"
              }
            },
            data: this.data.data.line1,
            itemStyle: {
              normal: {
                color: "#3fffea",
                borderColor: "rgba(63, 255, 234, .5)",
                borderWidth: this.$fontSize(12)
              }
            }
          },
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
.populationIncome {
  width: 100%;
  height: 100%;
}
</style>