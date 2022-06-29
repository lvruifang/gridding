<template>
    <div class="architectureCategory"></div>
</template>

<script>
export default {
  name: "architectureCategory",
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
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                textStyle: {
                    align: "left",
                    fontSize: 15
                }
            },
            legend: {
                show:false,
                // formatter: "{font|{c}}\n{hr|}\n{font|{d}%}",
                // orient: "horizontal",
                // left: "center",
                // bottom: 0,
                // itemGap: 20,
                // textStyle: {
                //     fontSize: 15,
                //     color: "#fff"
                // },
                // itemWidth: 10, // 设置宽度
                // itemHeight: 10, // 设置高度
                // 使用回调函数
                // formatter: function (name) {
                //     var nameInfo = this.data.nameList.filter(function (item) {
                //         return name == item.name;
                //     });
                //     return (
                //         name +
                //         "  " +
                //         nameInfo[0].value +
                //         "人"
                //     );
                    // return (
                    //     name +
                    //     "  " +
                    //     nameInfo[0].value +
                    //     " " +
                    //     "(" +
                    //     ((nameInfo[0].value / sum) * 100).toFixed(0) +
                    //     "%" +
                    //     ")"
                    // );
                // },
                // data: this.data.nameList
            }, //环形图中间添加文字
            //   graphic: [{
            //     type: "text",
            //     left: "center",
            //     top: "45%",
            //     style: {
            //         text: 16,
            //         textAlign: "center",
            //         fill: "#fff",
            //         width: 30,
            //         height: 30,
            //         fontSize: this.$fontSize(18),
            //         color: "#4d4f5c",
                    
            //     }
            // },
            // {
            //     type: "text",
            //     left: "center",
            //     top: "60%",
            //     style: {
            //         text: "人",
            //         textAlign: "center",
            //         fill: "#fff",
            //         width: 30,
            //         height: 30,
            //         fontSize:  this.$fontSize(14),
            //     }
            // }
            // ],
            series: [{
                name: "党员分析",
                type: "pie",
                radius: ["40%", "70%"],
                center: ["50%", "55%"],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        fontSize: 12,
                        color: '#70c5ff',
                        formatter:"{b}"
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:this.data.data,
            }]
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
.architectureCategory {
  width: 100%;
  height: 100%;

}
</style>