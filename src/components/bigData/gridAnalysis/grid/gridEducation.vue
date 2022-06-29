<template>
    <div class="gridEducation"></div>
</template>

<script>
export default {
  name: "gridEducation",
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
          top: "10%",
          right: "0%",
          bottom: "0",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["高中", "大专", "本科", "硕士", "博士"],
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
            data: [30, 40, 61, 40, 60],
            itemStyle: {
              normal: {
                color: "#3fffea",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            }
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
.gridEducation {
  width: 100%;
  height: 100%;
}
</style>