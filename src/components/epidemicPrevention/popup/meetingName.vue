<template>
    <div>
        <el-row class="wrap">
            <el-col :span="10">
                <div class="grid-content bg-purple left">
                   <img :src="data.picture" alt="">
                <el-row class="t">
                    <el-col :span="24"><div class="grid-content bg-purple">{{data.name}} </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>地点</span>{{data.address}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>类型</span>{{data.type}}</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>所属网格</span>{{data.grid}}</div></el-col>
                </el-row>
                 <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>负责人</span>{{data.head_name}}</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>联系电话</span>{{data.head_contact}}</div></el-col>
                </el-row>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light right">
                    <div id="map"></div>
                   <p v-html="data.intro"></p>
                </div>
            </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
   props: {
        data: Object
    },
  name: "meetingName",

  data() {
    return {
     centerPoint:{lat: 40.338855, lng: 115.803016}, //中心点
    };
  },

  mounted() {
    this.initMap();
  },

  methods: {
    initMap(){
      var center = new window.TMap.LatLng(this.centerPoint.lat, this.centerPoint.lng); // 设置中心点坐标
      var centerHeight = new window.TMap.LatLng(this.centerPoint.lat, this.centerPoint.lng, 100); // 带高度的坐标
      // 初始化地图
      var map = new window.TMap.Map('map', {
        center: center,
        zoom: 22,
      });
      // 初始化label
      var label = new window.TMap.MultiLabel({
        id: 'label-layer',
        map: map,
        styles: {
          label: new window.TMap.LabelStyle({
            color: '#3777FF', // 颜色属性
            size: 16, // 文字大小属性
            offset: { x: 0, y: 0 }, // 文字偏移属性单位为像素
            angle: 0, // 文字旋转属性
            alignment: 'center', // 文字水平对齐属性
            verticalAlignment: 'middle', // 文字垂直对齐属性
          }),
        },
        geometries: [
          {
            id: 'label', // 点图形数据的标志信息
            styleId: 'label', // 样式id
            position: center, // 标注点位置
            content: this.data.name, // 标注文本
            properties: {
              // 标注点的属性数据
              title: 'label',
            },
          },
        ],
      });
     
    }
  }
};
</script>

<style scoped>
#map{
  width:100%;
  height:400px;
  background: #fff;
  margin-bottom:50px;
}
.wrap{
    background: url("@/assets/images/partyPopupBg.png") rgba(8,23,73,0.8) no-repeat center center;
    background-size: 100% 100%;
    padding:70px 40px 40px;
}
.el-carousel__container{
    height:252px;
}
.right {
  padding-left: 80px;
}
.right p {
  font-size: 16px;
  color: #fff;
  line-height: 2;
}
 img {
  width: 100%;
}
.left .el-row {
  height: 42px;
  line-height: 42px;
  background: rgba(86, 87, 179, 0.3);
  color: #fff;
  font-size: 16px;
  margin-top: 13px;
  padding-left: 13px;
  color:#92d5ff;
}
.left .el-row.t{
    height:104px;
    line-height: 104px;
    font-size:36px;
    text-align: center;
}
.el-col-8 {
  font-size: 16px;
  color: #92d5ff;
}
.left span{
    color:#fff;
    display: inline-block;
    width:90px;
}
</style>