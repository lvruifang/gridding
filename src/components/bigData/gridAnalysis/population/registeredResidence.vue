<template>
    <div class="registeredResidence" ></div>
</template>

<script> 
export default {
  name: "registeredResidence",
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
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['70%', '90%'],
                center: ['50%', '50%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false, 
                data: [
                    {
                        value: this.data.value,
                        name: this.data.name,
                        label: {
                        normal: {
                            formatter:"{d}%",
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: this.$fontSize(16),
                                fontWeight: 'normal',
                                color: '#fff',
                                
                            },
                           
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: this.data.color,
                        }
                    }
                    
                    },
                {
                    value: this.data.value1,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: this.data.color1
                        },
                        emphasis: {
                            color: '#678dba'
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
.registeredResidence {
  width: 100%;
  height: 100%;
 
}
</style>