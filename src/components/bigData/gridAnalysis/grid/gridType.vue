<template>
    <div class="gridType">
    </div>
</template>

<script>
export default {
  name: "gridType",
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
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          itemWidth: 12, // 标志图形的长度
          itemHeight: 12, // 标志图形的宽度
          left: "50%",
          top: "10%",
          orient: 'vertical',
          itemGap:this.$fontSize(24),
          textStyle: {
            color: "#bee4f8",
            fontSize: this.$fontSize(16),
            fontFamily: "Microsoft JhengHei"

          },
          data: this.data.data,
        },
        series: [
          {
            name: "会议分布",
            type: "pie",
            radius: ['40%', '90%'],
            center: ['25%', '58%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              normal: {
                 formatter: '{d}%',
                  show: false
              }
            },
            data: this.data.data
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
.gridType {
  width: 100%;
  height: 100%;
}
</style>