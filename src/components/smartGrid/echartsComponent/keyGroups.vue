<template>
    <div class="keyGroups"></div>
</template>

<script>
export default {
    name: 'keyGroups',
    props: {
        data: Object
    },
    data() {
        return {}
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
                legend: {
                    itemWidth: this.$fontSize(12), // 标志图形的长度
                    itemHeight: this.$fontSize(12), // 标志图形的宽度
                    
                    left: "center",
                    bottom: 15,
                    textStyle: {
                    color: '#92d5ff',
                    fontFamily: "Microsoft JhengHei",
                    fontSize: this.$fontSize(14),
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)",
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                series: [
                    {
                        name: this.data.title,
                        type: 'pie',
                        radius: ['20%', '40%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'outside',
                                fontSize: 10,
                                color: '#75deef'
                            },
                        },
                        labelLine: {
                            normal: {
                                show: true,
                            }
                        },
                       
                        data: this.data.data
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);
            myChart.clear();
            myChart.resize()
            myChart.setOption(option);

        }
    },
    mounted() {
        this.setChart()
    },
    watch: {
    data: {
      deep: true, //深度监听
      handler(newValue, oldValue) {
        this.setChart();
      },
    },
  },
}
</script>

<style  scoped>
.keyGroups{
    width: 100%;
    height: 100%;
   background: url("@/assets/images/gridT3Bg.png") #0b0849 no-repeat center center;
    background-size:100% 100%;
}
</style>