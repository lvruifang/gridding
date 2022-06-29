<template>
    <div class="genderRatio" id="main"></div>
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
        series: [
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['80%', '65%'],
                center: ['20%', '50%'],
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
                        value: this.data.data[0].value,
                        name: this.data.data[0].name,
                        label: {
                        normal: {
                            formatter: function(params){
                                return params.value+"\n\n"+params.name;
                               
                            },
                            
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: this.$fontSize(14),
                                fontWeight: 'normal',
                                color: '#fff',
                                
                            },
                           
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#2397f0',
                        }
                    }
                    
                    },
                {
                    value: 20,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#678dba'
                        },
                        emphasis: {
                            color: '#678dba'
                        }
                    }
                }
                ]
            },
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['80%', '65%'],
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
                        value: this.data.data[1].value,
                        name: this.data.data[1].name,
                        label: {
                        normal: {
                            formatter: function(params){
                                return params.value+"\n\n"+params.name;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: this.$fontSize(14),
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ed8ff0',
                        }
                    }
                    },
                    {
                        value: 50,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#678dba'
                            },
                            emphasis: {
                                color: '#678dba'
                            }
                        }
                    }
                ]
            },
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['80%', '65%'],
                center: ['80%', '50%'],
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
                        value: this.data.data[2].value,
                        name: this.data.data[2].name,
                         label: {
                            normal: {
                                formatter: function(params){
                                    return params.value+"\n\n"+params.name;
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: this.$fontSize(14),
                                    fontWeight: 'normal',
                                    color: '#fff'
                                }
                            }
                        },
                        
                    itemStyle: {
                        normal: {
                            color: '#9b8f54',
                        }
                    }
                    },
                    {
                        value: 150,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#678dba'
                            },
                            emphasis: {
                                color: '#678dba'
                            }
                        }
                    }
                ]
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