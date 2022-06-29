<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
        };
    },
    filters:{
       
    },
    components:{
      
    },
    mounted() {
        
    },
    methods: {
        
    },
    beforeCreate: function() {
        let arr = [
            require("@/assets/images/partyBuildingBg.jpg"),
            require("@/assets/images/smartGridBg.jpg"),
            require("@/assets/images/guideBg.jpg"),
            require("@/assets/images/bigDataBg.jpg")
        ]

        let img = new Image();
        img.src = require("@/assets/images/partyBuildingBg.jpg");        
        img.onload=function(){
        }

        let img1 = new Image();
        img1.src = require("@/assets/images/smartGridBg.jpg");        
        img1.onload=function(){
        }


        let img2 = new Image();
        img2.src = require("@/assets/images/guideBg.jpg");        
        img2.onload=function(){
        }
         let img3 = new Image();
        img3.src = require("@/assets/images/bigDataBg.jpg");        
        img3.onload=function(){
        }
    },
};
</script>

<style scoped>
    #app{
        width:100%;
        height:100%;
    }
</style>
