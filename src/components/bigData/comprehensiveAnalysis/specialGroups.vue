<template>
    <div class="specialGroups"></div>
</template>

<script>
export default {
    name: 'specialGroups',
    props: {
        data: Object
    },
    data() {
        return {}
    },
    methods: {
        setChart() { 
            let option = {
               
                legend: {
                    itemWidth: this.$fontSize(12), // 标志图形的长度
                    itemHeight: this.$fontSize(12), // 标志图形的宽度
                    left: 'center',
                    bottom:'0',
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
                        radius: ['40%', '60%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'outside',
                                fontSize: 10,
                                color: '#75deef',
                                formatter:"{d}%"
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
}
</script>

<style  scoped>
.specialGroups{
    width: 100%;
    height: 100%;

}
</style>