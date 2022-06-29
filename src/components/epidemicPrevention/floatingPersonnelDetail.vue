<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/sheng.png" alt="">
                        <span>跨省流动人数</span>
                        <span class="num">5000</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨市流动人数</span>
                        <span class="num" style="color:#ffc70c;">3000</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                     <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨县流动人数</span>
                        <span class="num" style="color:#92d5ff;">2000</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <baidu-map class="bm-view" :center="{lng: 115.834638, lat:40.324358}" :zoom="14">
           <bml-curve-line :points="path" :editing="true" @lineupdate="update"></bml-curve-line>
            <!-- <bm-driving start="怀来人工智能产业园" end=" 大南新堡村" @searchcomplete="handleSearchComplete" :panel="false" :autoViewport="true"></bm-driving> -->
            <bml-lushu
                @stop="reset"
                :path="path"
                :icon="icon"
                :play="play"
                :speed= 1000
                :autoView =true
                :rotation=true
                :landmarkPois = landmarkPois
                :infoWindow=true
                content ="行走轨迹"
               >
            </bml-lushu>
            <div v-for="(item, index) in listDa" :key="index">
                <bm-marker
                  :position="{ lng: item.lei, lat: item.lat }"
                  :dragging="true"
                  animation="BMAP_ANIMATION_BOUNCE"
                >
                  <!-- <bm-label
                    :content="item.title"
                    :labelStyle="{ color: 'green', fontSize: '16px' }"
                    :offset="{ width: -35, height: 30 }"
                    @click="infoWindowOpen"
                  />  -->
                  <!-- 弹出框 -->
                  <!-- <bm-info-window
                    :show="show"
                    @close="infoWindowClose"
                    @open="infoWindowOpen"
                    :title="item.title"
                  >
                    <p v-text="item.cont"></p>
                  </bm-info-window> -->
                </bm-marker>
              </div>
             
        </baidu-map>
    </div>
</template>

<script>
import { BmlLushu } from "vue-baidu-map";   
import { BmMarker } from "vue-baidu-map";
import {BmlCurveLine} from 'vue-baidu-map'
export default {
  name: "floatingPersonnelDetail",

  components: {
    BmlLushu,
    BmlCurveLine,
    BmMarker
  },
  data() {
    return {
      show:true,
      play: true,
      path: [
          {lng: 115.803129, lat: 40.322118}, 
          
          {lng: 115.826663, lat: 40.316013},
          {lng: 115.838912, lat: 40.316887},  
          {lng: 115.854695, lat: 40.33738}
      ],
      icon: {
        url: require("@/assets/images/mapIcon.png"),
        size: { width: 77, height: 125 },
        opts: { anchor: { width: 77, height: 125 } }
      },
      listDa:[
        { title: "怀来人工智能产业园", lei: 115.803129, lat: 40.322118, cont: "8:05 从怀来人工智能产业轩出发" },
        {title:"怀来云交换数据中心产业园",lei: 115.838912, lat: 40.316887,cont:"10:25 到达云交换数据中心产业园"},  
         {title:"怀来县瑞云观中心校",lei: 115.826663, lat: 40.316013,cont:"13:25 到达怀来县瑞云观中心校"},  
         {title:"大南新堡村",lei:  115.854695, lat:  40.33738,cont:"15:25 到达大南新堡村"},  
      ],
      landmarkPois:[
        {lng: 115.803129, lat: 40.322118,html: "8:05从怀来人工智能产业轩出发",pauseTime:3 },
        {lng: 115.838912, lat: 40.316887,html:"10:25到达云交换数据中心产业园",pauseTime:3},  
        {lng: 115.826663, lat: 40.316013,html:"13:25到达怀来县瑞云观中心校",pauseTime:3},  
        {lng: 115.854695, lat:  40.33738,html:"15:25到达大南新堡村",pauseTime:3},  
      ]
    };
  },  

  methods: {
    reset() {
      this.play = false;
    },
    handleSearchComplete(res) {
      this.path = res
        .getPlan(0)
        .getRoute(0)
        .getPath();
    },
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
    update (e) {
      this.points = e.target.cornerPoints
    }

  }
};
</script>

<style scoped>
.bm-view {
  width: 100%;
  height: 600px;
  margin-top:20px;
}
.list{
        width:100%;
        height:150px;
        background: url("@/assets/images/ldryBg.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:90px;
        position: relative;
         color:#d4eaf6;
    }
    .title{
        font-size:20px;
        color:#92d5ff;
        position: relative;
        top:-11px;
        left:2px;
    }
    .des{
        display: flex;
        align-items: center;
        font-size: 26px;
        color:#d4eaf6;

    }
    .des img{
        width:94px;
        margin-right:27px;
    }
    .des .num{
        font-size: 40px;
        color:#e73851;
        margin-left: 24px;
    }
</style>