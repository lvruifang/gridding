<template>
    <div class="rightContent">

        <el-row class="tab1">
            <el-col :span="12" class="left">
                <div class="grid-content bg-purple">
                    <p class="title">智慧网格3+1+X</p>
                    <p>东花园镇3+1+x简介，东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介东花园镇3+1+x简介</p>
                </div>
            </el-col>
            <el-col :span="12" class="right">
                <div class="grid-content bg-purple-light">
                    <el-row>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <img src="@/assets/images/3.png" alt="">
                                <p>街村 社区 商业街</p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <img src="@/assets/images/1.png" alt="">
                                <p>企业</p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <img src="@/assets/images/x.png" alt="">
                                <p>其他</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <div class="tab2">
            <div class="left">
                <div class="leftTab1">
                     <p class="title">大南新堡村</p>
                     <el-row class="item1">
                        <el-col :span="8"><div class="grid-content bg-purple">面积：10000km2</div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">网格员：于海瑞(一级)</div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple">电话：13712345678</div></el-col>
                        </el-row>
                        <div class="item2">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="王东喜网格" name="first">
                                <span>阜新网格</span><span>梁晓林网格</span><span>王莹网格</span><span>赵凯网格</span>    
                            </el-tab-pane>
                            <el-tab-pane label="茂文绣网格" name="second">
                                <span>阜新网格</span><span>阜新网格</span><span>阜新网格</span><span>阜新网格</span><span>阜新网格</span>
                            </el-tab-pane>
                        </el-tabs>
                        </div>
                        
                    </div>
                <div class="leftTab2">    
                    <baidu-map class="map" :center="{lng:  115.856035, lat: 40.337357}" :zoom="15">
                      <bm-marker :position="{lng:  115.856035, lat:40.337357}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                        <bm-label content="大南新堡村" :labelStyle="{color: '#fff', fontSize : '14px', background:'#4cb2e5',border:'solid 0px red',padding:'6px 15px'}" :offset="{width: -35, height: 30}"/>
                      </bm-marker>
                    </baidu-map>
                </div>  
                <div class="leftTab3">
                    <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                    </el-pagination>
                    <p class="title">人口列表</p>
                    <ul>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                         <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                         <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                        <li>
                            <img src="@/assets/images/user.png" alt="">
                            <p>王东喜</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="rightTab1">
                    <p class="title">数据统计</p>
                    <ul>
                        <li>
                            <i class="iconfont icon-siyingqiye"></i>
                            <p class="name">建筑</p>
                            <p class="num">160</p>
                        </li>
                        <li>
                            <i class="iconfont icon-fangwu"></i>
                            <p class="name">房屋</p>
                            <p class="num">302</p>
                        </li>
                        <li>
                            <i class="iconfont icon-zhengtitubiaosvg_renkou"></i>
                            <p class="name">人口</p>
                            <p class="num">5320</p>
                        </li>
                        <li>
                            <i class="iconfont icon-bujian"></i>
                            <p class="name">部件</p>
                            <p class="num">160</p>
                        </li>
                    </ul>
                </div>
                <div class="rightTab2">
                    <el-row :gutter="20">
                        <el-col :span="12">
                             <person-type :data="data"></person-type>
                        </el-col>
                        <el-col :span="12">
                            <key-groups :data="data5"> </key-groups>
                        </el-col>
                    </el-row>
                </div>
                <div class="rightTab3">
                    <el-row>
                        <el-col :span="24">
                             <age-distribution :data="data6"></age-distribution>
                        </el-col>
                       
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import personType from "@/components/smartGrid/echartsComponent/personType";
import keyGroups from "@/components/smartGrid/echartsComponent/keyGroups";
import ageDistribution from "@/components/smartGrid/echartsComponent/ageDistribution";
import { BmMarker } from "vue-baidu-map";
import "@/assets/font/iconfont.css";
export default {
  name: "gridIndex",

  data() {
    return {
         activeName: 'second',
      data: {
       
        title: "人口数据类型分析",
        data: [
          {
            value: 200,
            name: "流动",
            itemStyle: {
              color: "#51afea"
            }
          },
          {
            value: 20,
            name: "空挂",
            itemStyle: {
              color: "#76e9c0"
            }
          },

          {
            value: 100,
            name: "外出",
            itemStyle: {
              color: "#eeba29"
            }
          },

          {
            value: 50,
            name: "境外",
            itemStyle: {
              color: "#7781ad"
            }
          },
          {
            value: 4500,
            name: "常住",
            itemStyle: {
              color: "#284ded"
            }
          }
        ]
      },
      data5: {
        title: "重点人群信息",
        data: [
          {
            value: 335,
            name: "艾滋病",
            itemStyle: {
              color: "#16f5e3"
            }
          },
          {
            value: 310,
            name: "吸毒人员",
            itemStyle: {
              color: "#ffcc00"
            }
          },
          {
            value: 234,
            name: "社区矫正",
            itemStyle: {
              color: "#6eff68"
            }
          },
          {
            value: 135,
            name: "精神病",
            itemStyle: {
              color: "#ff6f6f"
            }
          },
          {
            value: 200,
            name: "刑满释放",
            itemStyle: {
              color: "#bc74ff"
            }
          }
        ]
      },
      data6: {
        title: "人口年龄分布",
        data: [0, 116, 237, 116, 306, 1969, 1699, 903, 227],
        areaNameS: [
          "0-6岁",
          "6-12岁",
          "12-18岁",
          "18-22岁",
          "22-30岁",
          "30-45岁",
          "45-60岁",
          "60-80岁",
          "80以上"
        ]
      }
    };
  },
  components: {
    personType,
    keyGroups,
    ageDistribution
  },
  mounted() {
      this.initMap()
  },

  methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
      initMap(){
          // var map = new BMapGL.Map('allmap');
          //   var point = new BMapGL.Point(115.856035,40.337357);
          //   map.centerAndZoom(point, 15);
          //   // 创建点标记
          //   var marker = new BMapGL.Marker(point);
          //   map.addOverlay(marker);
          //   // 创建信息窗口
          //   var opts = {
          //       width: 200,
          //       height: 100,
          //       title: '大南新堡村'
          //   };
          //   var infoWindow = new BMapGL.InfoWindow('地址：怀来县东花园镇大南新堡村', opts);
          //   // 点标记添加点击事件
          //   marker.addEventListener('click', function () {
          //       map.openInfoWindow(infoWindow, point); // 开启信息窗口
          //   });
        }
    }
};
</script>

<style scoped>
.map {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
.tab1 {
  width: 100%;
  height: 214px;
  margin-top: 37px;
}
.tab1 .left {
  height: 100%;
  background: url("@/assets/images/gridTBg.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 28px 36px;
  font-size: 20px;
}
.tab1 .left .title {
  font-size: 39px;
  background-image: linear-gradient(to bottom, #7feeff, #0973c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 3px 3px 24px rgba(4, 0, 0, 0.27);
  text-align: center;
  margin-bottom: 8px;
}
.tab1 .left p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.7;
}
.tab1 .right {
  height: 100%;
}
.tab1 .right .el-row,
.tab1 .right .el-col,
.tab1 .right .grid-content {
  height: 100%;
}
.tab1 .right .el-col {
  background: url("@/assets/images/gridT1Bg.png") no-repeat center center;
  background-size: 100% 100%;
}
.tab1 .right .el-col div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 30px;
  font-size: 20px;
}
.tab1 .right .el-col img {
  height: 67px;
}
.tab1 .right p {
  text-shadow: 0 0 15px rgba(0, 156, 255, 1);
}
.tab2 {
  margin-top: 34px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 30px 10px;
}
.tab2 .left {
  height: 200px;
  width: 45.5%;
  position: relative;
}
.leftTab1{
    padding:0 20px 0;
}
.leftTab1 .item1{
    font-size: 18px;
    color:#92d5ff;
    line-height: 49px;
    background: rgba(21,23,144,0.6);
    margin-top:20px;
    padding-left:20px;
}
.leftTab3 ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 12px;
}
.leftTab2{
    margin:21px 0;
    background: #fff;
    height:234px;
    border:solid 1px #34648e;
}
.leftTab3 ul li {
  width: 14%;
  padding: 0 12px;
  margin-bottom: 20px;
  text-align: center;
}
.leftTab3 ul li img {
  width: 100%;
  margin-bottom: 5px;
}
.leftTab3 .title {
  font-size: 20px;
  color: #60dbdc;
  margin-left: 22px;
  margin-bottom: 15px;
}
.tab2 .right {
  width: 53%;
}
.tab2 .right .rightTab1,
.tab2 .left .leftTab1 {
  height: 234px;
  background: url("@/assets/images/gridT2Bg.png") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  padding-top: 13px;
}

.tab2 .rightTab1 .title,
.tab2 .leftTab1 .title {
  font-size: 24px;
  color: #92d5ff;
  position: absolute;
  top: -9px;
  left: 2px;
}
.tab2 .rightTab1 ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tab2 .rightTab1 ul li {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  border: solid 3px #61d4ff;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #92d5ff;
}
.tab2 .rightTab1 ul li .num {
  font-size: 32px;
  color: #ffd513;
}
.tab2 .rightTab1 ul li:nth-child(2) .num {
  color: #60dbdc;
}
.tab2 .rightTab1 ul li:nth-child(3) .num {
  color: #ff7d13;
}
.tab2 .rightTab1 ul li:nth-child(4) .num {
  color: #0ca926;
}
.iconfont {
  font-size: 56px;
  background-image: linear-gradient(
    -12deg,
    #583ded 0%,
    #128cfa 34%,
    #30f9ff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}
.rightTab2 {
  height: 307px;
  width: 100%;
  margin-top: 30px;
}
.rightTab2 .el-row,
.rightTab2 .el-col,
.rightTab3 .el-row,
.rightTab3 .el-col {
  height: 100%;
}

.rightTab3 {
  height: 234px;
  margin-top: 30px;
}
.leftTab3 {
  width: 100%;
  height: 324px;
  background: url("@/assets/images/rklbBg.png") #0b0849 no-repeat center center;
  background-size: 100% 100%;
}
</style>