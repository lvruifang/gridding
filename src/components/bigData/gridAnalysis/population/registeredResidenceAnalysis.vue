<template>
    <div class="registeredResidenceAnalysis"></div>
</template>

<script>
export default {
  name: "registeredResidenceAnalysis",
  props: {
    data: Object
  },
  data() {
    return {
       
    };
  },
  methods: {
    setChart() {
      let option = {
           tooltip: {
          trigger: "item"
        },
        grid: {
          top: "15%",
          left: "8%",
          right: "12%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: {
          data: ["户在人在","户不在人在","户在人不在"],
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            symbol: ['none'],
            symbolSize: [10, 17],
            lineStyle: {
              color: '#FFF',
              width: 0 //  改变坐标线的颜色
            },
          },
          offset:8,
          axisLabel: {
            //调整x轴的lable
            textStyle: {
              fontSize: 11 ,// 让字体变大
              fontFamily:'MicrosoftYaHei-Bold, MicrosoftYaHei',
              fontWeight:'bold',
              color:'#FFFFFF'
            },
            
          }
        },
        yAxis: {
          // type: "value",
          // name:'时长（小时）',
          splitLine: {    //刻度线
            show: false,
          },
          splitArea:{     //柱状图后面的背景色
            show:false,
            // areaStyle: {
            //   color: ["rgba(221,247,250,0.7)","rgba(245,249,232,0.7)"]
            // }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            //调整y轴的lable
            textStyle: {
              fontSize: 12 // 让字体变大
            },
            show: false
          },
          axisLine: {
            symbol: ['none'],
            symbolSize: [15, 17],
            lineStyle: {
              color: 'rgba(0 0 0 0)',
              width: 0 //  改变坐标线的颜色
            }
          }
        },
        axisPointer: {
            show: false,
            link: {xAxisIndex: 'all'},
            type: 'shadow' ,
            label: {
              backgroundColor: '#777'
            }
        },
        series: [
          {
            name: "资源数量统计",
            type: "bar",
            showSymbol: false,
            hoverAnimation: false,
            data: [233,223,223],
            barWidth: 10, //柱图宽度
            // barCategoryGap:'60%',
            itemStyle: { //左面
              normal: {
                color:function(params) { 
                  let colorList = ["#7EEEFB"];
                  return colorList[0];
                },
                barBorderRadius:[4,0,0,100],
              }
            }
           },
       { 
            name:'资源数量统计',
            tooltip:{
              show:true 
            },
            type: 'bar',
            barWidth:10, 
            // barCategoryGap:'60%',
            itemStyle:{       //右面
                normal:{
                  color:function(params) { 
                    let colorList = ["#48D9F5"];
                    return colorList[0];
                  },
                  borderWidth:0.1,
                  barBorderRadius:[0,4,100,0]
                }
            },
            data: [233,223,223],
            barGap:0
          }
        ,{ 
            name:'b',
            tooltip:{
              show:false 
            },
            type: 'pictorialBar',
            itemStyle: {  //顶部
                normal: {
                color:function(params) { 
                  let colorList = ["#48D9F5"];
                  return colorList[0];
                },
                borderColor:'#000',
                borderWidth:0.1,
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color :'#FFFFFF',
                    fontSize: 14,
                    fontFamily:'微软雅黑',
                  },
                  offset:[0,-2]
                }
              }
            },
            symbol: 'diamond',
            symbolSize: ['20.5','13'],
            symbolOffset:[0,'-38%'],
            symbolPosition: 'end',
            data: [233,223,223],
            z:3
          },
        { 
            name:'d',
            tooltip:{
               show:false 
            },
            type: 'pictorialBar',
            itemStyle: {  //底部
                normal: {
                color:function(params) { 
                  let colorList = ["#48D9F5"];
                  return colorList[0];
                },
                borderColor:'#000',
                borderWidth:0.1,
                label: {
                  show: false, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color :'#FFFFFF',
                    fontSize: 14,
                    fontFamily:'微软雅黑',
                  },
                  offset:[0,-2]
                }
              }
            },
            symbol: 'diamond',
            symbolSize: ['20.5','17'],
            symbolOffset:[0,'2.5'],
            symbolPosition: 'start',
            data: [233,223,223],
            z:0
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
.registeredResidenceAnalysis {
  width: 100%;
  height: 100%;
 
}
</style>