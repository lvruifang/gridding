<template>
    <div class="boy"></div>
</template>

<script>
export default {
  name: "menAndWomen",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  methods: {
    setChart() {
      let option = {
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: true,
            radius: ["100%", "65%"],
            center: ["25%", "50%"],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 50,
                name: "01",
                label: {
                  normal: {
                    formatter: function(params) {
                      return "男\n" + params.value + "人";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: this.$fontSize(16),
                      fontWeight: "normal",
                      color: "#fff"
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#43e4e7"
                  }
                }
              },
              {
                value: 20,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#0b3783"
                  },
                  emphasis: {
                    color: "#0b3783"
                  }
                }
              }
            ]
          },
          {
            name: "Line 1",
            type: "pie",
            clockWise: true,
            radius: ["100%", "65%"],
            center: ["75%", "50%"],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 20,
                name: "01",
                label: {
                  normal: {
                    formatter: function(params) {
                      return "女\n" + params.value + "人";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: this.$fontSize(16),
                      fontWeight: "normal",
                      color: "#fff"
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#ed8ff0"
                  }
                }
              },
              {
                value: 50,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#0b3783"
                  },
                  emphasis: {
                    color: "#0b3783"
                  }
                }
              }
            ]
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
.boy {
  width: 100%;
  height: 100%;
}
</style>