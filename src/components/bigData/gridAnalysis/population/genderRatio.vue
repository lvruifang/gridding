<template>
    <div class="genderRatio"></div>
</template>

<script>
export default {
  name: "genderRatio",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  methods: {
    setChart() {
      let option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                itemWidth: this.$fontSize(12), // 标志图形的长度
                itemHeight: this.$fontSize(12), // 标志图形的宽度
                left: "60%",
                bottom: 15,
                textStyle: {
                    color: '#92d5ff',
                    fontFamily: "Microsoft JhengHei",
                    fontSize: this.$fontSize(15),
                },

            },
            
            label: {
                show:false,
                normal: {
                    textStyle: {
                            color: 'red'  // 改变标示文字的颜色
                    }
                }
            },
            series : [
                {
                    type: 'pie',
                    radius : '100%',
                    center: ['25%', '50%'],
                    data:this.data.data,
                
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                     label: {
                        normal: {
                            show: true,
                            position: "inside",
                            formatter: '{d}%',
                            fontSize: this.$fontSize(14),
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    
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
.genderRatio {
  width: 100%;
  height: 100%;
 
}
</style>