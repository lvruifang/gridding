<template>
    <div class="rightContent">
      <!-- <baidu-map class="bm-view" :center="{lng: 115.819677, lat:40.358147}" :zoom="13">
            <div v-for="(item, index) in listDa" :key="index">
                <bm-marker
                  :position="{ lng: item.lei, lat: item.lat }"
                  :dragging="true"
                  :icon=item.icon
                >
                  <bm-label
                    :content="item.title"
                    :labelStyle="{ color: '#333', fontSize: '14px',background:'rgba(214,214,214,0.77)',padding:'6px 15px',border:'solid 1px #fcb03a' }"
                    :offset="{ width: -35, height: 60 }"
                   
                  /> 
                </bm-marker>
              </div>
      </baidu-map> -->
    
    </div>
</template>
 
<script>
import { getThreeDefenseLineInfo } from "@/api/antiepidemic";
export default {
    name: 'defensiveLine',

    data() {
        return {
            // listDa:[
            //     { title: "京张高铁东花园北站", lei: 115.800644, lat: 40.350085,icon:{url: require('@/assets/images/iconMap1.png'), size: {width: 48, height: 78}}   },
            //     {title:"西康检查站",lei: 115.879902, lat: 40.36574,icon:{url: require('@/assets/images/iconMap2.png'), size: {width: 48, height: 78}}},  
            //     {title:"G6高速东花园口",lei: 115.812727, lat: 40.333945,icon:{url: require('@/assets/images/iconMap3.png'), size: {width: 48, height: 78}}},  
            // ],
          centerPoint:{lat: 40.338855, lng: 115.803016}, //中心点
          defenseLineInfo:{},
          iconSrc:""
        };
    },
 
    created() {
       if(this.$store.state.menu.id.indexOf("_")!==-1){
            this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
            if(this.$store.state.menu.type=="高速"){
              this.iconSrc = 'iconMap3.png';
            }else if(this.$store.state.menu.type=="高铁"){
              this.iconSrc ='iconMap1.png';
            }else if(this.$store.state.menu.type=="公路"){
              this.iconSrc = 'iconMap2.png';
            }
            this.getThreeDefenseLineInfo();

        }
       
    },
    components:{
       
    },
     watch: {
        '$store.state.menu': {
        deep: true, //深度监听
        handler(newValue, oldValue) {
            this.id = newValue.id
            if(this.id.indexOf("_")!==-1){
                this.id = this.id.substr(this.id.indexOf("_")+1);
                 if(newValue.type=="高速"){
                    this.iconSrc = 'iconMap3.png';
                  }else if(newValue.type=="高铁"){
                    this.iconSrc ='iconMap1.png';
                  }else if(newValue.type=="公路"){
                    this.iconSrc = 'iconMap2.png';
                  }
            }
            if(newValue.name == "sdfx"){
            this.getThreeDefenseLineInfo();
            }
            
        },
        },
    },
    methods: {
      async getThreeDefenseLineInfo(){
          try {
            const { data} = await getThreeDefenseLineInfo(this.id);
            this.defenseLineInfo = data;
            console.log(this.defenseLineInfo,"121")
            this.defenseLineInfo.map_info = JSON.parse(this.defenseLineInfo.map_info)
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
        document.querySelector(".rightContent").innerHTML='<div id="map" style="height:100%;color:#333;"></div>';
        var center = new window.TMap.LatLng(this.centerPoint.lat, this.centerPoint.lng);      
        // 初始化地图
        var map = new window.TMap.Map('map', {
          zoom: 13, // 设置地图缩放级别
          pitch: 30,
          center: center, // 设置地图中心点坐标
          mapStyleId: "style1", //个性化样式
          baseMap: {
            type: 'vector',
            // features: ['base', 'building3d'], // 隐藏矢量文字
          },
        });

        // marker文字在图片外  MultiMarker文档地址：https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker
        new window.TMap.MultiMarker({
          map: map, // 显示Marker图层的底图
          styles: {
            // small: new window.TMap.MarkerStyle({
            //   // 点标注的相关样式
            //   width: 34, // 宽度
            //   height: 46, // 高度
            //   anchor: { x: 17, y: 23 }, // 标注点图片的锚点位置
            //   src: 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/img/small.png', // 标注点图片url或base64地址
            //   color: '#333', // 标注点文本颜色
            //   size: 16, // 标注点文本文字大小
            //   direction: 'bottom', // 标注点文本文字相对于标注点图片的方位
            //   offset: { x: 0, y: 8 }, // 标注点文本文字基于direction方位的偏移属性
            //   strokeColor: '#fff', // 标注点文本描边颜色
            //   strokeWidth: 2, // 标注点文本描边宽度
            // }),
            big: new window.TMap.MarkerStyle({
              width: 58,
              height: 76,
              anchor: { x: 36, y: 32 },
              src: require('@/assets/images/'+this.iconSrc),
              color: '#333',
              size: 22,
              direction: 'bottom',
              strokeColor: '#fff',
              offset: { x: 0, y: 10 },
              strokeWidth: 2,
            }),
          },
          enableCollision: true, // 开启碰撞
          geometries: [
            {
              styleId: 'big',
              position: new window.TMap.LatLng(this.defenseLineInfo.map_info[0][0], this.defenseLineInfo.map_info[0][1]),
              content: this.defenseLineInfo.name,
            }
          ],
        });

      }
    },
};
</script>

<style scoped>
.bm-view{
    width:100%;
    height:650px;
    margin-top:90px;
}
</style>