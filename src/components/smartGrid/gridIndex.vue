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
                     <p class="title">{{formData.label}}</p>
                     <el-row class="item1">
                        <el-col :span="8"><div class="grid-content bg-purple">面积：10000km2</div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">网格员：于海瑞(一级)</div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple">电话：13712345678</div></el-col>
                        </el-row>
                        <div class="item2">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane :label="item.label" :name="item.id" v-for="(item,index) in formData.children" :key="index">
                                <span v-for="(item,index) in item.children" :key="index">{{item.label}}</span>   
                            </el-tab-pane>
                        </el-tabs>
                        </div>
                         
                    </div>
                <div class="leftTab2">    
                </div>  
                <div class="leftTab3">
                    <el-pagination
                    layout="prev, pager, next"
                    :total="personTotal"
                    :page-size=14
                    @current-change = "currentChange"
                    >
                    </el-pagination>
                    <p class="title">人口列表</p>
                    <ul>
                        <li v-for="(item) in personnelList" :key="item.id">
                            <img :src="item.picture" alt="">
                            <p>{{item.name}}</p>
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
                            <p class="num">{{bigData.buildingCount}}</p>
                        </li>
                        <li>
                            <i class="iconfont icon-fangwu"></i>
                            <p class="name">房屋</p>
                            <p class="num">{{bigData.houseCount}}</p>
                        </li>
                        <li>
                            <i class="iconfont icon-zhengtitubiaosvg_renkou"></i>
                            <p class="name">人口</p>
                            <p class="num">{{bigData.personnelCount}}</p>
                        </li>
                        <li>
                            <i class="iconfont icon-bujian"></i>
                            <p class="name">部件</p>
                            <p class="num">{{bigData.specialBuildingCount}}</p>
                        </li>
                    </ul>
                </div>
                <div class="rightTab2">
                    <el-row :gutter="20">
                        <el-col :span="12">
                             <person-type :data="personnelType"></person-type>
                        </el-col>
                        <el-col :span="12">
                            <key-groups :data="specialGroupsType"> </key-groups>
                        </el-col>
                    </el-row>
                </div>
                <div class="rightTab3">
                    <el-row>
                        <el-col :span="24">
                             <age-distribution :data="ageDistribution"></age-distribution>
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
  
import { getBigData,personnelList } from "@/api/smartGrid";
import "@/assets/font/iconfont.css";
import { mapState } from 'vuex'
export default {
  name: "gridIndex",

  data() {
    return {
      activeName: '', //右侧二级网格默认选中的id
      formData:{}, // 树形结构当前选中的网格的网格数据
      bigData:{
        buildingCount:0,
        houseCount:0,
        personnelCount:0,
        specialBuildingCount:0,
        ageDistribution:[], //年龄分布
      }, //树形结构当前选中的网格的大数据
      id:"",
      map:{
        pathData:[],
        name:""
      },
      personnelType: {
        title: "人口数据类型分析",
        data: []
      },
      specialGroupsType: {
        title: "重点人群信息",
        data: []
      },
      ageDistribution: {
        title: "人口年龄分布",
        data: [],
        areaNameS: []
      },
      personnelList:[], //人员列表
      personTotal:0
    };
  },
  components: {
    personType,
    keyGroups,
    ageDistribution
  },
  mounted() {
     
  },
  created(){
     
  },
  computed:{
    ...mapState({
      menu:state=>state.menu
    })
  },
  watch: {
    '$store.state.menu': {
      deep: true, //深度监听
      handler(newValue, oldValue) {
          this.formData = newValue;
         //为id赋值
         if(this.formData.id.indexOf("_")!==-1){
          this.id = this.formData.id.substr(this.formData.id.indexOf("_")+1);
         }
         this.activeName = this.formData.children[0].id;
         this.map.pathData = this.formData.map_info;
         this.map.name = this.formData.label;
         this.initMap(); //绘制地图
         this.getBigData(); //获取大数据
         this.getPersonnelList(1) //获取人员信息
      },
    },
  },
  methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
      initMap() {
              let arr = JSON.parse(this.map.pathData) //获取树形结构当前选中的村落的地图数据
              let path = [ ];
              let x=0;
              let y =0;
              arr.forEach((item,index)=>{
                x += item[0];
                y += item[1];
                path.push(new window.TMap.LatLng(item[0], item[1]),)
              })
              let centerPoint = [x/arr.length,y/arr.length]; //设置中心点坐标
            //定义地图中心点坐标
            let center =  new window.TMap.LatLng(centerPoint[0],centerPoint[1])
            document.querySelector(".leftTab2").innerHTML='<div id="map" style="height:100%;color:#333;"></div>';
            //定义map变量，调用 TMap.Map() 构造函数创建地图
            let map = new window.TMap.Map(document.getElementById('map'), {
                center: center,//设置地图中心点坐标
                zoom: 13,   //设置地图缩放级别
                pitch: 43.5,  //设置俯仰角
                rotation: 45,   //设置地图旋转角度
                viewMode:'2D'
            });
            //初始化polygon
            let polygon = new window.TMap.MultiPolygon({
                id: 'polygon-layer', //图层id
                map: map, //设置多边形图层显示到哪个地图实例中
                //多边形样式
                styles: {
                    'polygon': new window.TMap.PolygonStyle({
                        'color': '#3777FF', //面填充色
                        'showBorder':false, //是否显示拔起面的边线
                        'borderColor': '#00FFFF' //边线颜色
                    })
                },
                //多边形数据
                geometries: [
                    {
                        'id': 'p1', //该多边形在图层中的唯一标识（删除、更新数据时需要）
                        'styleId': 'polygon', //绑定样式名
                        'paths': path, //多边形轮廓
                    }
                ]
            });
            //初始marker
            let marker = new window.TMap.MultiMarker({
                id: 'marker-layer',
                map: map,
                styles: {
                    "marker": new window.TMap.MarkerStyle({
                        "width": 24,
                        "height": 35,
                        "anchor": { x: 12, y: 35 },
                        "src": 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png'
                    })
                },
                geometries: [{
                    "id": 'demo1',
                    "styleId": 'marker',
                    "position": new window.TMap.LatLng(centerPoint[0],centerPoint[1]),
                    "properties": {
                        "title": "marker"
                    }
                }, ]
            });
            //初始化infoWindow
            let infoWindow = new window.TMap.InfoWindow({
                map: map,
                position: new window.TMap.LatLng(centerPoint[0],centerPoint[1]),
                offset: { x: 0, y: -32 }, //设置信息窗相对position偏移像素
              
            });
            infoWindow.close();//初始关闭信息窗关闭
            //监听标注点击事件
            marker.on("click", function (evt) {
                //设置infoWindow
                infoWindow.open(); //打开信息窗
                infoWindow.setPosition(evt.geometry.position);//设置信息窗位置
                infoWindow.setContent(this.map.name);//设置信息窗内容
            })
      },
      currentChange(num){
        console.log(num)
        this.getPersonnelList(num)

      },
      //智慧网格根据一级网格id获取人员列表
      async getPersonnelList(num){
          try {
            let param = {
              id:this.id,
              page:num,
              page_size:14
            }
            const { data,count } = await personnelList(param);
            this.personnelList = data;
            this.personTotal = count;
         
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "success"
            });
          }
      },
      async getBigData(){
        try {
            const { data } = await getBigData(this.id);
            this.bigData = data;
            console.log(data)
           // 设置人口年龄分布
            let areaNameS = [];
            let counts = [];
            let ageDistribution = this.bigData.ageDistribution;
            ageDistribution.forEach((item,index)=>{
                areaNameS.push(item.label);
                counts.push(item.count)
            })
            this.ageDistribution = {
                title: "人口年龄分布",
                data: counts,
                areaNameS: areaNameS
            }
            //设置人口数据类型分析
            let personnelType = [];
            let colorArr = ["#51afea","#76e9c0","#eeba29","#7781ad","#284ded"];
            this.bigData.personnelType.forEach((item,index)=>{
                let json = {
                  value: item.num,
                  name: item.label,
                  itemStyle: {
                    color: colorArr[index]
                  }
                }
                personnelType.push(json)
            })
            this.personnelType.data = personnelType;

            //设置重点人员信息分析
            let specialGroupsType = [];
            let colorArr1 = ["#16f5e3","#ffcc00","#6eff68","#ff6f6f","#bc74ff","#eeba29"];
            this.bigData.specialGroupsType.forEach((item,index)=>{
                let json = {
                  value: item.num,
                  name: item.label,
                  itemStyle: {
                    color: colorArr1[index]
                  }
                }
                specialGroupsType.push(json)
            })
            this.specialGroupsType.data = specialGroupsType;
        } catch(err) {
          this.$message({
            message: err,
            offset: 400,
            type: "success"
          });
        }
      }

    }
};
</script>

<style scoped>
#map {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";color:#333}
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
  width: 14.285%;
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