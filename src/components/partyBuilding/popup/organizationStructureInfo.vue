<template>
  <div>
    <el-row class="wrap">
      <el-col :span="10">
        <div class="grid-content bg-purple left">
          <img :src="data.picture" alt="">
          <el-row class="t">
            <el-col :span="24">
              <div class="grid-content bg-purple">{{ data.organization }} </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple"><span>地点</span>{{ data.address }}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple"><span>联系方式</span>{{ data.contacts }}</div>
            </el-col>
          </el-row>
          <el-row class="intro">
            <el-col :span="24">
              <div class="grid-content bg-purple"><span>简介</span>
                <p>{{ data.intro }}</p>
              </div>
            </el-col>
            <!-- <el-row class="intro">
                        <el-col :span="24"><div class="grid-content bg-purple">{{data.intro}}</div></el-col>
                    </el-row> -->
          </el-row>
          <!-- <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>负责人</span>{{data.head_name}}</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>联系电话</span>{{data.head_contact}}</div></el-col>
                </el-row> -->
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple-light right">
          <div id="map"></div>
          <p v-html="data.responsibility"></p>
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
  name: "organizationStructureInfo",

  data() {
    return {
      map:null,
      label:null,
      centerPoint: { lat: 40.338855, lng: 115.803016 }, //中心点
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let mapPosition = JSON.parse(this.data.map_info);
      this.centerPoint = { lat: mapPosition[0][0], lng: mapPosition[0][1] }
      var center = new window.TMap.LatLng(this.centerPoint.lat, this.centerPoint.lng); // 设置中心点坐标
      // 初始化地图
      this.map = new window.TMap.Map('map', { 
        center: center,
        zoom: 19,
      });
      // 初始化label
      this.label = new window.TMap.MultiLabel({
        id: 'label-layer',
        map: this.map,
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
            content: this.data.organization, // 标注文本
            properties: {
              // 标注点的属性数据
              title: 'label',
            },
          },
        ],
      });
    }
    //初始化marker
    
  },
  updated(){
      let mapPosition = JSON.parse(this.data.map_info);
      this.centerPoint = { lat: mapPosition[0][0], lng: mapPosition[0][1] }
      this.map.setCenter(new window.TMap.LatLng(this.centerPoint.lat,this.centerPoint.lng));//修改地图中心点
      this.label.updateGeometries([
          {
          "styleId":"label",
          "id": "label",
          "position": new window.TMap.LatLng(this.centerPoint.lat,this.centerPoint.lng),
          content: this.data.organization, // 标注文本
          }
      ])
  },
};
</script>

<style scoped>
.mapBox {
  width: 100%;
  height: 200px;
  background: #fff;
  margin-bottom: 50px;
}

#map {
  width: 100%;
  height: 100%;
}

.wrap {
  background: url("@/assets/images/partyPopupBg.png") rgba(8, 23, 73, 0.8) no-repeat center center;
  background-size: 100% 100%;
  padding: 70px 40px 40px;
}

.el-carousel__container {
  height: 252px;
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
  padding: 0 13px;
  color: #92d5ff;
  display: flex;
}

.left .el-row.intro {
  height: auto;
}

.left .el-row.intro .intro {
  background: transparent;
}

.left .el-row.t {
  height: 104px;
  line-height: 104px;
  font-size: 36px;
  text-align: center;
}

.el-col-8 {
  font-size: 16px;
  color: #92d5ff;
}

.left span {
  color: #fff;
  display: inline-block;
  width: 90px;
}

.left .el-row.intro .grid-content {
  display: flex;
}

.left .el-row.intro p {
  flex: 1;
}
</style>