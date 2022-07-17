<template>
    <div class="partyAge"></div>
</template>

<script>
export default {
  name: "partyAge",
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
          trigger: "axis",
          transitionDuration: 0,
          backgroundColor: "rgba(83,93,105,0.8)",
          borderColor: "#535b69",
          borderRadius: 8,
          borderWidth: 2,
          padding: [5, 10],
          formatter: function(params, ticket, callback) {
            var res = "";
            for (var i = 0, l = params.length; i < l; i++) {
              res +=
                "" + params[i].seriesName + " : " + params[i].value + "<br>";
            }
            return res;
          },
          axisPointer: {
            type: "line",
            lineStyle: {
              type: "dashed",
              color: "#ffff00"
            }
          }
        },
        grid: {
          top: "40",
          left: "30",
          right: "10",
          bottom: "40",

          textStyle: {
            color: "#fff"
          }
        },
        // "legend": {
        //     right: '24',
        //     top: "24",
        //     itemWidth: 8,
        //     itemHeight: 12,
        //     textStyle: {
        //         color: '#fff',
        //         fontSize:14
        //     },
        //     "data": ['资源总量'],

        // },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#4e5884"
              }
            },
            axisLabel: {
              interval: 0,
              fontSize: this.$fontSize(14),
              fontFamily: "Microsoft JhengHei",
              color: "#fff",
              formatter: function(value) {
                // var ret = "";//拼接加\n返回的类目项
                // var maxLength = 2;//每项显示文字个数
                // var valLength = value.length;//X轴类目项的文字个数
                // var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                // if (rowN > 1)//如果类目项的文字大于3,
                // {
                //     for (var i = 0; i < rowN; i++) {
                //         var temp = "";//每次截取的字符串
                //         var start = i * maxLength;//开始截取的位置
                //         var end = start + maxLength;//结束截取的位置
                //         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                //         temp = value.substring(start, end) + "\n";
                //         ret += temp; //凭借最终的字符串
                //     }
                //     return ret;
                // }
                // else {
                //     return value;
                // }
                return value;
              }
            },
            splitArea: {
              show: false
            },
            data: this.data.areaNameS,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            offset: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#4e5884"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#4e5884"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              fontSize: 14,
              color: "#fff",
              fontFamily: "Microsoft JhengHei"
            },
            splitArea: {
              show: false
            }
          }
        ],

        series: [
          {
            name: "党员年龄结构",
            type: "bar",

            barGap: "10%",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#01b1ff" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#033cff" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                barBorderRadius: 15
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#ffc72b",
                  fontSize: 10,
                  fontFamily: "Microsoft JhengHei"
                }
              }
            },
            data: this.data.data,
            barWidth: 14
          },
          {
            name: "折线",
            type: "line",
            itemStyle: {
              /*设置折线颜色*/
              normal: {
                color: "#01b1ff"
              }
            },
            data: this.data.data
            // data:[5421, 6512, 4621, 2842,6427, 4422,1020,1421,1776,2428],
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
  },
  watch: {
    data: {
      deep: true, //深度监听
      handler(newValue, oldValue) {
        this.setChart();
      },
    },
  },
};
</script>

<style  scoped>
.partyAge {
  width: 100%;
  height: 100%;
}
</style>