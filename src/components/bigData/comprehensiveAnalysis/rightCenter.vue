<template>
    <div class="rightCenter">
    </div>
</template>

<script>
export default {
  name: "rightCenter",
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
          left: "auto",
          bottom: "-5px",
          
          textStyle: {
            color: "#fff",
            fontSize: this.$fontSize(16),
            fontFamily: "Microsoft JhengHei"

          },
          data: this.data.data
        },
        series: [
          {
            name: "会议分布",
            type: "pie",
            radius: ["20%", "70%"],
            center: ["50%", "45%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            label: {
              normal: {
                position: "inner",
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
.rightCenter {
  width: 100%;
  height: 100%;
}
</style>