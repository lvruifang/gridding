<template>
    <div class="rightContent">
       <baidu-map class="bm-view" :center="{lng: 115.819677, lat:40.358147}" :zoom="13">
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
import { BmMarker } from "vue-baidu-map";
export default {
    name: 'defensiveLine',

    data() {
        return {
            listDa:[
                { title: "京张高铁东花园北站", lei: 115.800644, lat: 40.350085,icon:{url: require('@/assets/images/iconMap1.png'), size: {width: 48, height: 78}}   },
                {title:"西康检查站",lei: 115.879902, lat: 40.36574,icon:{url: require('@/assets/images/iconMap2.png'), size: {width: 48, height: 78}}},  
                {title:"G6高速东花园口",lei: 115.812727, lat: 40.333945,icon:{url: require('@/assets/images/iconMap3.png'), size: {width: 48, height: 78}}},  
            ],
        };
    },

    mounted() {
        
    },
    components:{
        BmMarker
    },

    methods: {
        
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