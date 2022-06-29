<template>
    <div class="flowTeam"></div>
</template>

<script>
export default {
  name: "flowTeam",
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
                itemWidth: this.$fontSize(15), // 标志图形的长度
                itemHeight: this.$fontSize(15), // 标志图形的宽度
                width:"100%",
                itemGap:this.$fontSize(28),
                bottom: 0,
                left:'30%',
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
                    radius : '70%',
                    center: ['65%', '40%'],
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
                            show: false,
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
.flowTeam {
  width: 100%;
  height: 100%;
 
}
</style>