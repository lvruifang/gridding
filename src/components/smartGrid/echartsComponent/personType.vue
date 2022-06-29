<template>
    <div class="personType">
    </div>
</template>

<script>
export default {
  name: "personType",
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
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          itemWidth: 12, // 标志图形的长度
          itemHeight: 12, // 标志图形的宽度
          left: "center",
          bottom: 15,
          textStyle: {
            color: "#fff",
            fontSize: this.$fontSize(14),
            fontFamily: "Microsoft JhengHei"
          },
          data: this.data.data
        },
        series: [
          {
            name: "会议分布",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "55%"],
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
.personType {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/gridT3Bg.png") #0b0849 no-repeat center center;
  background-size: 100% 100%;
}
</style>