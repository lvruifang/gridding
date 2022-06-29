<template>
    <div class="gridAge"></div>
</template>

<script>
export default {
  name: "gridAge",
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
          left: 60,
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
            inverse: true,
            axisLabel: {
              color: "#84cdff",
              fontSize: this.$fontSize(16),
              margin: 20,
              formatter: function(value) {
                return value.length > 6 ? value.slice(0, 6) + "..." : value;
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: this.data.nameList
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#84cdff",
                fontSize: this.$fontSize(18) // 比例文字大小
              },
              formatter: function(value) {
                console.log(value);
                return value.toLocaleString() + "%";
              }
            },
            data: this.data.valueList
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
                color: function(params) {
                  var colorList = [
                    "#06f3ff",
                    "#ea3434",
                    "#90ed7d",
                    "#e4b420",
                    "#7849ff"
                  ];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: false,
                  formatter: "{c}",
                  position: "right",
                  fontSize: 14
                },
                barBorderRadius: 13
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
            data: [100, 100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: "rgba(30,71,96,0.42)",
                barBorderRadius: 13
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
.gridAge {
  width: 100%;
  height: 100%;
}
</style>