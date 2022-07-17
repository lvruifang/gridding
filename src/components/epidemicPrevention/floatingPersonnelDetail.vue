<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/sheng.png" alt="">
                        <span>跨省流动人数</span>
                        <span class="num">{{mobilityPersonnelBigData.crossProvinceCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨市流动人数</span>
                        <span class="num" style="color:#ffc70c;">{{mobilityPersonnelBigData.crossCityCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                     <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨县流动人数</span>
                        <span class="num" style="color:#92d5ff;">{{mobilityPersonnelBigData.crossCountyCount}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div id="map"></div>
    </div>
</template>

<script>
import { getMobilityPersonnelAnalysis,getMobilityPersonnelBigData } from "@/api/antiepidemic";
export default {
  name: "floatingPersonnelDetail",
  data() {
    return {
      show:true,
      play: true,
      placePoins:[], //来访地坐标
      centerPoint:{lat: 40.338855, lng: 115.803016}, //中心点
      mobilityPersonnelBigData:{}, //大数据
    };
  },  
  created(){
    this.getMobilityPersonnelAnalysis();
    this.getMobilityPersonnelBigData();
  },
  mounted(){
  },
  methods: {
    async getMobilityPersonnelBigData(){
      try {
        const { data } = await getMobilityPersonnelBigData();
        this.mobilityPersonnelBigData = data;
        console.log(data,"111")
      } catch(err){
        this.$message({
          message: err,
          offset: 400,
          type: "error"
        });
      }
    },
    async getMobilityPersonnelAnalysis(){
      try {
        this.placePoins = [];
        const { data } = await getMobilityPersonnelAnalysis();
        data.forEach((item) => {
          let obj = JSON.parse(item.map_info)
          let json = {
            from:{lat: obj[0][0], lng: obj[0][1]},
            to:this.centerPoint, 
          }
          this.placePoins.push(json)
        });        
        this.initMap();
      } catch(err){
        this.$message({
          message: err,
          offset: 400,
          type: "error"
        });
      }
    },
    initMap() {
        var center = new window.TMap.LatLng(40.338855,115.803016);
        var data = this.placePoins;
        console.log(data,"222")
        //初始化地图
        var map = new window.TMap.Map(document.getElementById('map'), {
            zoom: 10,//设置地图缩放级别
            pitch: 30,
            center: center,//设置地图中心点坐标
            mapStyleId: "style3", //个性化样式
            baseMap: {
              type: "vector",
              // features: ["base", "building3d"], // 隐藏矢量文字
            },
        });
        //初始化弧线图并添加至map图层
        new window.TMap.visualization.Arc({
            mode: 'vertical' // 弧线平面与地平面垂直
        }).addTo(map).setData(data);//设置数据
    }
  }
};
</script>

<style scoped>
#map {
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
.title1{
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