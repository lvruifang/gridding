<template>
    <div class="comprehensiveManagement"></div>
</template>

<script>
export default {
  name: "comprehensiveManagement",
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
          formatter: "{a} <br/>{b} : {c}人",
          textStyle: {
            align: "left",
            fontSize: 14
          }
        },
        grid: {
          left: "0%",
          right: "15%",
          top: "0%",
          bottom: "0",
          containLabel: false
        },
        xAxis: [
          {
            type: "value",
            name: "",
            axisLabel: {
              show: false,
              fontSize: 14
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            position: "right",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#84cdff",
                fontSize: this.$fontSize(15) // 比例文字大小
              },
              formatter: function(value) {
                console.log(value);
                return value.toLocaleString() + "%";
              }
            },
            data: this.data.data
          }
        ],
        series: [
          {
            name: "人员标签分析",
            type: "bar",
            barWidth: "13",
            marginLeft: "2%",
            zlevel: 1,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  formatter: "{c}",
                  position: "right",
                  fontSize: 14
                },
                barBorderRadius: 5
              }
            },
            data: this.data.data
            // barCateGoryGap: "60%",
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 13,
            barGap: "-100%",
            data: [100],
            itemStyle: {
              normal: {
                color: "rgba(30,71,96,0.42)",
                barBorderRadius: 5
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
}
</script>

<style  scoped>
.comprehensiveManagement {
  width: 100%;
  height: 100%;
}
</style>