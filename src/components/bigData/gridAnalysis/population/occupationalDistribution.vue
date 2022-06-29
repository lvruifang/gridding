<template>
    <div class="occupationalDistribution">
    </div>
</template>

<script>
export default {
  name: "occupationalDistribution",
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
          formatter: "{a} <br/>{b} : {c} ({d}%)",
         
        },
        legend: {
          itemWidth: 12, // 标志图形的长度
          itemHeight: 12, // 标志图形的宽度
          left: "70%",
          top: "15%",
          orient: 'vertical',
          itemGap:this.$fontSize(12),
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
            radius: ['40%', '80%'],
            center: ['35%', '58%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            label: {
                normal: {
                    formatter: '{d}%',
                    show: true,
                    
                    textStyle: {
                        color: "#bee4f8",
                       
                    },
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    
                    lineStyle: {
                        color: "#6886ab",
                       
                    },
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
.occupationalDistribution {
  width: 100%;
  height: 100%;
}
</style>